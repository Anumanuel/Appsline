/**
 * Screenshot harness for the visual comparison loop.
 *
 * Drives headless Chrome over the DevTools Protocol so each checkpoint
 * can be scrolled to, settled, and captured — which `chrome --screenshot`
 * alone cannot do (it only ever captures the top of the page).
 *
 * Scrolling goes through the page's Lenis instance rather than
 * window.scrollTo, because Lenis owns the scroll position and would
 * snap straight back otherwise.
 *
 *   node tools/shoot.mjs [--w 1440] [--h 900] [--out shots] [--at 0.35]
 */
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import WebSocket from "ws";

const ROOT = resolve(fileURLToPath(new URL("..", import.meta.url)));

const CHROME_CANDIDATES = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
];

// ---- args -------------------------------------------------------------
const args = process.argv.slice(2);
const arg = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i > -1 && args[i + 1] ? args[i + 1] : fallback;
};

const WIDTH = Number(arg("w", 1440));
const HEIGHT = Number(arg("h", 900));
const OUT = resolve(ROOT, arg("out", "shots"));
const PORT = Number(arg("port", 5173));
const DEBUG_PORT = Number(arg("cdp", 9333));
const ONLY = arg("only", null);

/**
 * Capture checkpoints, one per section of the reference's scroll.
 * Anchored to selectors rather than page fractions so the set stays
 * valid as the page's total height changes between iterations.
 * `offset` shifts the scroll position relative to the element's top.
 */
const CHECKPOINTS = [
  // #hero starts below the announcement strip, so offset back to true
  // zero scroll — that is where the navbar is still in its rest state.
  { name: "01-hero", sel: "#hero", offset: -200 },
  { name: "02-hero-circuit", sel: "#circuit", offset: -320 },
  { name: "03-about", sel: "#about", offset: -40 },
  { name: "04-about-chips", sel: ".about__card", offset: -140 },
  { name: "05-bento-top", sel: "#why", offset: -40 },
  { name: "06-bento-bottom", sel: ".bento__grid", offset: 430 },
  { name: "07-globe", sel: "#network", offset: -40 },
  { name: "08-globe-full", sel: "#network", offset: 520 },
  { name: "09-portal", sel: "#portal", offset: -40 },
  { name: "10-portal-card", sel: ".portal__card", offset: -150 },
  { name: "11-industries", sel: "#industries", offset: -40 },
  { name: "12-industries-2", sel: ".industries__grid", offset: 780 },
  { name: "13-tiers", sel: "#support", offset: -40 },
  { name: "14-faq", sel: "#faq", offset: -40 },
  { name: "15-cta", sel: "#contact", offset: -40 },
  { name: "16-products", sel: "#solutions", offset: -40 },
  { name: "17-footer", sel: ".footer", offset: -40 },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---- CDP client -------------------------------------------------------
class CDP {
  constructor(ws) {
    this.ws = ws;
    this.id = 0;
    this.pending = new Map();
    ws.on("message", (raw) => {
      const msg = JSON.parse(raw.toString());
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve: res, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        msg.error ? reject(new Error(JSON.stringify(msg.error))) : res(msg.result);
      }
    });
  }

  send(method, params = {}) {
    const id = ++this.id;
    return new Promise((res, reject) => {
      this.pending.set(id, { resolve: res, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
      setTimeout(() => {
        if (this.pending.has(id)) {
          this.pending.delete(id);
          reject(new Error(`CDP timeout: ${method}`));
        }
      }, 30000);
    });
  }

  async eval(expression) {
    const r = await this.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    if (r.exceptionDetails) {
      throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description || ""));
    }
    return r.result?.value;
  }
}

async function fetchJSON(url, tries = 40) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return await r.json();
    } catch {
      /* chrome not up yet */
    }
    await sleep(250);
  }
  throw new Error(`could not reach ${url}`);
}

// ---- main -------------------------------------------------------------
async function main() {
  const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!chrome) throw new Error("No Chrome or Edge found.");

  mkdirSync(OUT, { recursive: true });

  // static server
  const server = spawn(process.execPath, [resolve(ROOT, "tools/serve.mjs"), String(PORT)], {
    stdio: "ignore",
  });

  const browser = spawn(
    chrome,
    [
      "--headless=new",
      `--remote-debugging-port=${DEBUG_PORT}`,
      `--window-size=${WIDTH},${HEIGHT}`,
      "--hide-scrollbars",
      "--force-device-scale-factor=1",
      "--no-first-run",
      "--no-default-browser-check",
      "--disable-extensions",
      // Headless renders the globe fine on its default backend, and
      // forcing SwiftShader rasterises the whole page on the CPU — which
      // drags frames to ~160ms and catches every animation mid-flight.
      // --sw opts back into it if a machine ever needs the fallback.
      ...(args.includes("--sw")
        ? ["--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader"]
        : []),
      "--user-data-dir=" + resolve(ROOT, ".chrome-profile"),
      "about:blank",
    ],
    { stdio: "ignore" }
  );

  const cleanup = () => {
    try { browser.kill(); } catch {}
    try { server.kill(); } catch {}
  };
  process.on("exit", cleanup);
  process.on("SIGINT", () => { cleanup(); process.exit(1); });

  const version = await fetchJSON(`http://127.0.0.1:${DEBUG_PORT}/json/version`);
  const ws = new WebSocket(version.webSocketDebuggerUrl, { maxPayload: 256 * 1024 * 1024 });
  await new Promise((r) => ws.once("open", r));

  const root = new CDP(ws);
  const { targetId } = await root.send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await root.send("Target.attachToTarget", { targetId, flatten: true });

  // Flat sessions need the sessionId on every message.
  const page = {
    send: (method, params = {}) =>
      new Promise((res, reject) => {
        const id = ++root.id;
        root.pending.set(id, { resolve: res, reject });
        ws.send(JSON.stringify({ id, sessionId, method, params }));
        setTimeout(() => {
          if (root.pending.has(id)) {
            root.pending.delete(id);
            reject(new Error(`CDP timeout: ${method}`));
          }
        }, 30000);
      }),
  };
  page.eval = async (expression) => {
    const r = await page.send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
    });
    if (r.exceptionDetails) {
      throw new Error(r.exceptionDetails.text + " " + (r.exceptionDetails.exception?.description || ""));
    }
    return r.result?.value;
  };

  await page.send("Page.enable");
  await page.send("Runtime.enable");
  await page.send("Log.enable");
  await page.send("Network.enable");
  await page.send("Emulation.setDeviceMetricsOverride", {
    width: WIDTH,
    height: HEIGHT,
    deviceScaleFactor: 1,
    mobile: false,
  });

  // --reduced exercises the prefers-reduced-motion path, where the
  // preloader is skipped, reveals resolve instantly and the globe holds
  // still. Easy to break without noticing, since nothing else touches it.
  if (args.includes("--reduced")) {
    await page.send("Emulation.setEmulatedMedia", {
      features: [{ name: "prefers-reduced-motion", value: "reduce" }],
    });
  }

  // Collect console errors so silent failures surface.
  const errors = [];
  ws.on("message", (raw) => {
    const m = JSON.parse(raw.toString());
    if (m.method === "Runtime.exceptionThrown") {
      errors.push(m.params?.exceptionDetails?.exception?.description || m.params?.exceptionDetails?.text);
    }
    if (m.method === "Runtime.consoleAPICalled" && m.params.type === "error") {
      errors.push(m.params.args.map((a) => a.value || a.description).join(" "));
    }
    // Module parse/resolve failures only surface through the Log domain.
    if (m.method === "Log.entryAdded" && m.params.entry.level === "error") {
      const e = m.params.entry;
      errors.push(`${e.text}${e.url ? "  @ " + e.url + ":" + (e.lineNumber ?? "") : ""}`);
    }
    if (m.method === "Network.loadingFailed") {
      errors.push(`load failed: ${m.params.errorText} (${m.params.type})`);
    }
  });

  // --seq captures the load animation itself: navigate with the
  // preloader enabled and grab a frame at each listed millisecond mark.
  const seq = arg("seq", null);
  // --url overrides the dev server, so the same harness can exercise the
  // page over file:// exactly as a visitor double-clicking index.html would.
  const url =
    arg("url", null) ||
    `http://127.0.0.1:${PORT}/index.html${seq ? "" : "?noloader"}`;
  console.log(`→ ${url}  @ ${WIDTH}x${HEIGHT}`);

  if (seq) {
    const marks = seq.split(",").map(Number).sort((a, b) => a - b);
    await page.send("Page.navigate", { url });

    let elapsed = 0;
    for (const at of marks) {
      await sleep(Math.max(0, at - elapsed));
      elapsed = at;
      const { data } = await page.send("Page.captureScreenshot", { format: "png" });
      const name = `seq-${String(at).padStart(5, "0")}ms`;
      writeFileSync(resolve(OUT, `${name}.png`), Buffer.from(data, "base64"));
      console.log(`   ✓ ${name}`);
    }

    if (errors.length) {
      console.log("\n!! console errors:");
      [...new Set(errors)].slice(0, 12).forEach((e) => console.log("   " + e));
    }
    cleanup();
    process.exit(0);
  }

  await page.send("Page.navigate", { url });
  await sleep(2600); // fonts, WebGL init, ScrollTrigger settle

  const ready = await page.eval("!!window.__appsline");
  if (!ready) console.warn("!! window.__appsline missing — did main.js throw?");

  const pageHeight = await page.eval("document.body.scrollHeight");
  console.log(`   page height: ${pageHeight}px (${(pageHeight / HEIGHT).toFixed(1)} screens)`);

  // --eval runs one expression against the live page and prints the
  // result instead of capturing — the fastest way to inspect layout.
  const evalFile = arg("evalfile", null);
  const probe = evalFile
    ? readFileSync(resolve(ROOT, evalFile), "utf8")
    : arg("eval", null);

  if (probe) {
    // Resolve first, then stringify — a probe may return a promise, and
    // JSON.stringify on a pending promise just yields "{}".
    const out = await page.eval(
      `Promise.resolve((() => { ${probe} })()).then(v => JSON.stringify(v, null, 2))`
    );
    console.log("\n" + out);
    if (errors.length) {
      console.log("\n!! console errors:");
      [...new Set(errors)].slice(0, 12).forEach((e) => console.log("   " + e));
    }
    cleanup();
    process.exit(0);
  }

  // --ys captures at explicit absolute scroll positions rather than at
  // selector-anchored checkpoints. Needed for the stacked sections: a
  // stuck section reports its painted position from getBoundingClientRect,
  // not its position in the document, so selector anchoring cannot land
  // you part-way through a boundary. Absolute positions can.
  const ys = arg("ys", null);
  // --burst jumps to a single --ys position and then photographs the
  // reveal at a list of delays, which is the only way to see a stagger
  // actually stagger rather than to see it already finished.
  const burst = arg("burst", null);
  if (ys) {
    const jump = async (y) =>
      page.eval(`(() => {
        const a = window.__appsline;
        if (a?.lenis) { a.lenis.scrollTo(${y}, { immediate: true }); }
        else { window.scrollTo(0, ${y}); }
        a?.ScrollTrigger?.update();
      })()`);

    const shoot = async (name) => {
      const { data } = await page.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: false,
      });
      writeFileSync(resolve(OUT, `${name}.png`), Buffer.from(data, "base64"));
      console.log(`   ✓ ${name}`);
    };

    if (burst) {
      const y = Number(ys.split(",")[0]);
      await jump(y);
      // Sleep to an absolute deadline and name the file by the elapsed
      // time actually measured. A screenshot round-trip costs well over
      // 100ms, so counting only the sleeps would mislabel every frame in
      // the burst — which is exactly how a stagger comes to look faster
      // than it is.
      const t0 = Date.now();
      for (const at of burst.split(",").map((n) => Number(n.trim()))) {
        await sleep(Math.max(0, at - (Date.now() - t0)));
        const real = Date.now() - t0;
        await shoot(`burst-${String(real).padStart(5, "0")}ms`);
      }
    } else {
      for (const y of ys.split(",").map((n) => Number(n.trim()))) {
        await jump(y);
        await sleep(Number(arg("settle", 2300)));
        await shoot(`y-${String(y).padStart(6, "0")}`);
      }
    }

    if (errors.length) {
      console.log("\n!! console errors:");
      [...new Set(errors)].slice(0, 12).forEach((e) => console.log("   " + e));
    } else {
      console.log("\n   no console errors");
    }
    cleanup();
    process.exit(0);
  }

  const list = ONLY ? CHECKPOINTS.filter((c) => c.name.includes(ONLY)) : CHECKPOINTS;

  // Resolve every checkpoint up front, from the top of the page.
  //
  // getBoundingClientRect reports where a stuck section is *painted*, not
  // where it sits in the document, so measuring while part-way down the
  // page — as happens once the first checkpoint has been captured — would
  // put every later checkpoint at the wrong scroll position. At scroll 0
  // nothing is stuck yet, so every rect is honest.
  await page.eval(`(() => {
    const a = window.__appsline;
    if (a?.lenis) { a.lenis.scrollTo(0, { immediate: true }); }
    else { window.scrollTo(0, 0); }
    a?.ScrollTrigger?.update();
  })()`);
  await sleep(400);

  const targets = [];
  for (const cp of list) {
    const y = await page.eval(`(() => {
      const el = document.querySelector(${JSON.stringify(cp.sel)});
      if (!el) return null;
      const top = el.getBoundingClientRect().top + window.scrollY;
      const max = document.body.scrollHeight - window.innerHeight;
      return Math.max(0, Math.min(max, Math.round(top + ${cp.offset})));
    })()`);

    if (y === null) console.log(`   skip ${cp.name} (no ${cp.sel})`);
    else targets.push({ ...cp, y });
  }

  for (const cp of targets) {
    const y = cp.y;

    await page.eval(`(() => {
      const a = window.__appsline;
      if (a?.lenis) { a.lenis.scrollTo(${y}, { immediate: true }); }
      else { window.scrollTo(0, ${y}); }
      a?.ScrollTrigger?.update();
    })()`);

    // Reveals run ~1.15s plus up to ~0.6s of stagger, so give them room
    // to finish before capturing or headings land mid-flight.
    await sleep(2300);

    const { data } = await page.send("Page.captureScreenshot", {
      format: "png",
      captureBeyondViewport: false,
    });
    writeFileSync(resolve(OUT, `${cp.name}.png`), Buffer.from(data, "base64"));
    console.log(`   ✓ ${cp.name}  (y=${y})`);
  }

  if (errors.length) {
    console.log("\n!! console errors:");
    [...new Set(errors)].slice(0, 12).forEach((e) => console.log("   " + e));
  } else {
    console.log("\n   no console errors");
  }

  cleanup();
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
