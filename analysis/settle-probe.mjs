// Answers, per section: is anything actually animating here, or is the
// section static and only scrolling past?
//
// The trap this avoids: the reference is a 24fps capture, so during a fast
// scroll every element is smeared by motion blur and its measured contrast
// collapses. That looks exactly like an opacity fade. The FAQ heading's
// apparent "reveal" turned out to track scroll speed almost perfectly —
// 20px/frame -> 0.17 contrast, 2px/frame -> 0.99 — i.e. it was blur.
//
// So only measure while the page is STATIONARY. Compare every frame in a
// still window against the window's last frame: a static section is at
// noise from the first frame, while anything still animating starts high
// and decays. Reporting per band localises which part of the section moves.
//
// usage: node settle-probe.mjs <t0> <t1> [bands]
import { openSync, readSync, closeSync } from "node:fs";

const W = 650; // ffmpeg rounds an odd crop width down; 651 would shear every row
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;

const [t0, t1, nBands] = process.argv.slice(2).map(Number);
const BANDS = nBands || 4;

const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const buf = Buffer.alloc(FRAME);
const last = Buffer.alloc(FRAME);

const f0 = Math.round(t0 * FPS);
const f1 = Math.round(t1 * FPS);
readSync(fd, last, 0, FRAME, f1 * FRAME);

const bandH = Math.floor(H / BANDS);

/** Mean absolute difference from the settled frame, per horizontal band. */
function mad(b) {
  const out = new Array(BANDS).fill(0);
  const n = new Array(BANDS).fill(0);
  for (let y = 0; y < H; y++) {
    const bi = Math.min(BANDS - 1, Math.floor(y / bandH));
    for (let x = 0; x < W; x += 2) {
      out[bi] += Math.abs(b[y * W + x] - last[y * W + x]);
      n[bi]++;
    }
  }
  return out.map((v, i) => v / n[i]);
}

const rows = [];
for (let f = f0; f <= f1; f++) {
  readSync(fd, buf, 0, FRAME, f * FRAME);
  rows.push({ t: f / FPS, d: mad(buf) });
}

const peak = Math.max(...rows.map((r) => Math.max(...r.d)));
console.log(
  `window ${t0}-${t1}s   peak deviation from settled: ${peak.toFixed(2)}  ` +
    (peak < 1.2 ? "=> STATIC (noise floor)" : "=> SOMETHING ANIMATES")
);
console.log("t\t" + Array.from({ length: BANDS }, (_, i) => `band${i}`).join("\t"));
for (const r of rows) {
  if (rows.indexOf(r) % 2) continue;
  console.log(
    r.t.toFixed(3) + "\t" + r.d.map((v) => v.toFixed(2).padStart(6)).join("\t")
  );
}
closeSync(fd);
