// Tracks a brightness contour over time — used to tell whether the CTA's
// glow actually grows/rises or merely sits there while content fades in.
// Reports, per frame, the topmost row in a column band whose luminance
// crosses a threshold, plus the band's mean.
// usage: node edge-probe.mjs <t0> <t1> <x> <w> <threshold>
import { openSync, readSync, closeSync } from "node:fs";

const W = 650; // ffmpeg rounds an odd crop width down; 651 would shear every row
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;

const [t0, t1, cx, cw, thr] = process.argv.slice(2).map(Number);

const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const buf = Buffer.alloc(FRAME);

const f0 = Math.round(t0 * FPS);
const f1 = Math.round(t1 * FPS);

console.log("t\ttopY\tmean\tpeak");
for (let f = f0; f <= f1; f++) {
  readSync(fd, buf, 0, FRAME, f * FRAME);
  let top = -1;
  let sum = 0;
  let n = 0;
  let peak = 0;
  for (let y = 0; y < H; y++) {
    let row = 0;
    for (let x = cx; x < cx + cw; x += 2) row += buf[y * W + x];
    row /= Math.ceil(cw / 2);
    if (top < 0 && row >= thr) top = y;
    if (row > peak) peak = row;
    sum += row;
    n++;
  }
  console.log(
    `${(f / FPS).toFixed(3)}\t${top}\t${(sum / n).toFixed(1)}\t${peak.toFixed(0)}`
  );
}
closeSync(fd);
