// Section-by-section motion audit.
//
// For every window where the reference's page is STATIONARY, measure how far
// each horizontal band still deviates from its settled state, and how long it
// takes to reach its own noise floor. Stationary is the whole point: during a
// scroll the 24fps capture smears everything and fake "fades" appear.
//
// Output per band: peak deviation, and the time (relative to the window
// start) at which it settles. A band that starts at its floor was never
// animating.
import { openSync, readSync, closeSync } from "node:fs";

const W = 648;
const H = 410;
const FRAME = W * H;
const FPS = 2997 / 125;
const BANDS = 8;
const bandH = H / BANDS;

// Still windows, taken from the gesture analysis and trimmed so the scroll's
// own tail is excluded.
const WINDOWS = [
  ["hero", 3.5, 7.45],
  ["about upper", 8.6, 9.05],
  ["about lower", 9.86, 11.26],
  ["bento head", 12.03, 14.1],
  ["bento cards", 14.96, 17.48],
  ["globe enter", 18.78, 20.06],
  ["globe hold", 21.42, 22.6],
  ["portal head", 23.32, 24.73],
  ["portal card", 25.88, 27.03],
  ["usecases r1", 28.33, 29.41],
  ["usecases r2", 30.62, 31.45],
  ["tiers", 32.46, 33.54],
  ["faq", 34.88, 35.62],
  ["cta contact", 37.0, 38.0],
  ["products r1", 39.3, 40.17],
  ["products r2", 41.34, 42.13],
  ["footer", 43.43, 45.45],
];

const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const buf = Buffer.alloc(FRAME);
const last = Buffer.alloc(FRAME);

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

console.log(
  "section        band  y-range     peak   floor  settles-at   verdict"
);
console.log("-".repeat(74));

for (const [name, t0, t1] of WINDOWS) {
  const f0 = Math.round(t0 * FPS);
  const f1 = Math.round(t1 * FPS);
  readSync(fd, last, 0, FRAME, f1 * FRAME);

  const series = [];
  for (let f = f0; f <= f1; f++) {
    readSync(fd, buf, 0, FRAME, f * FRAME);
    series.push({ t: (f - f0) / FPS, d: mad(buf) });
  }

  for (let b = 0; b < BANDS; b++) {
    const vals = series.map((s) => s.d[b]);
    const peak = Math.max(...vals);
    // Floor = the quietest sustained level in the back half of the window.
    const tail = vals.slice(Math.floor(vals.length * 0.6), -1);
    const floor = tail.length ? Math.min(...tail) : 0;
    const thresh = floor + Math.max(0.5, floor * 0.25);

    let settle = null;
    for (let i = 0; i < series.length; i++) {
      if (vals[i] <= thresh) {
        settle = series[i].t;
        break;
      }
    }

    const moved = peak > thresh + 0.6;
    if (!moved) continue; // band never departed from its floor

    const y0 = Math.round(b * bandH);
    console.log(
      `${name.padEnd(14)} ${String(b).padStart(4)}  ${String(y0).padStart(3)}-${String(
        Math.round(y0 + bandH)
      ).padEnd(3)}  ${peak.toFixed(2).padStart(6)}  ${floor
        .toFixed(2)
        .padStart(6)}  ${(settle === null ? ">win" : settle.toFixed(2) + "s").padStart(
        9
      )}   ${peak > floor * 3 ? "STRONG" : "weak"}`
    );
  }
}
closeSync(fd);
