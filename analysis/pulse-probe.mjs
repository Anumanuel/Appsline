// Tracks the brightest point inside a rect per frame. On the hero's circuit
// board that point is the travelling pulse, so its x per frame gives the
// pulse speed directly.
// usage: node pulse-probe.mjs <t0> <t1> <x> <y> <w> <h>
import { openSync, readSync, closeSync } from "node:fs";

const W = 650; // ffmpeg rounds an odd crop width down; 651 would shear every row
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;

const [t0, t1, rx, ry, rw, rh] = process.argv.slice(2).map(Number);
const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const buf = Buffer.alloc(FRAME);

const f0 = Math.round(t0 * FPS);
const f1 = Math.round(t1 * FPS);

console.log("t\tmaxLum\tx\ty");
for (let f = f0; f <= f1; f++) {
  readSync(fd, buf, 0, FRAME, f * FRAME);
  let best = -1;
  let bx = 0;
  let by = 0;
  for (let y = ry; y < ry + rh; y++)
    for (let x = rx; x < rx + rw; x++) {
      const v = buf[y * W + x];
      if (v > best) {
        best = v;
        bx = x;
        by = y;
      }
    }
  console.log(`${(f / FPS).toFixed(3)}\t${best}\t${bx}\t${by}`);
}
closeSync(fd);
