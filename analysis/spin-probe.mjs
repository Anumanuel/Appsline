// Measures horizontal drift inside a rect between consecutive frames, to
// recover the globe's rotation rate. Sub-pixel by parabolic interpolation
// around the best integer shift, because one video frame of globe spin is
// only a pixel or two.
// usage: node spin-probe.mjs <t0> <t1> <x> <y> <w> <h>
import { openSync, readSync, closeSync } from "node:fs";

const W = 650; // ffmpeg rounds an odd crop width down; 651 would shear every row
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;
const SEARCH = 12;

const [t0, t1, rx, ry, rw, rh] = process.argv.slice(2).map(Number);

const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const a = Buffer.alloc(FRAME);
const b = Buffer.alloc(FRAME);

function sad(prev, cur, dx) {
  let acc = 0;
  let n = 0;
  for (let y = ry; y < ry + rh; y += 2)
    for (let x = rx; x < rx + rw; x += 1) {
      const xs = x + dx;
      if (xs < 0 || xs >= W) continue;
      acc += Math.abs(prev[y * W + xs] - cur[y * W + x]);
      n++;
    }
  return n ? acc / n : Infinity;
}

const f0 = Math.round(t0 * FPS);
const f1 = Math.round(t1 * FPS);
readSync(fd, a, 0, FRAME, f0 * FRAME);

let total = 0;
console.log("t\tdx\tsubpx\tcumulative");
for (let f = f0 + 1; f <= f1; f++) {
  readSync(fd, b, 0, FRAME, f * FRAME);
  let best = 0;
  let bestErr = Infinity;
  for (let dx = -SEARCH; dx <= SEARCH; dx++) {
    const e = sad(a, b, dx);
    if (e < bestErr) {
      bestErr = e;
      best = dx;
    }
  }
  // Parabolic fit through the three samples straddling the minimum.
  const em = sad(a, b, best - 1);
  const ep = sad(a, b, best + 1);
  const denom = em - 2 * bestErr + ep;
  const sub = denom !== 0 ? best + (0.5 * (em - ep)) / denom : best;
  total += sub;
  console.log(`${(f / FPS).toFixed(3)}\t${best}\t${sub.toFixed(2)}\t${total.toFixed(2)}`);
  a.set(b);
}
closeSync(fd);
