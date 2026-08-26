// Locates the true edges of the website inside the mockup.
//
// The panel crop was eyeballed and keeps a few pixels of device bezel on all
// four sides. That bezel carries its own slow lighting animation from the
// After Effects composition, so it reads as a permanently "moving" strip and
// pollutes any per-cell motion audit near the frame edge.
//
// Detection is temporal, not tonal, so it does not depend on what the page
// happens to be showing: the bezel is a warm mid-tone that barely changes
// across the whole video, while every interior pixel swings between the
// dark and light sections as the page scrolls. So: measure each pixel's
// range over a spread of frames and keep the region that actually varies.
import { openSync, readSync, closeSync } from "node:fs";

const W = 648;
const H = 410;
const FRAME = W * H;
const FPS = 2997 / 125;

const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const buf = Buffer.alloc(FRAME);

const lo = new Uint8Array(FRAME).fill(255);
const hi = new Uint8Array(FRAME);

// Spread across dark and light sections alike.
const SAMPLES = [5, 9, 10.5, 13, 16, 19, 22, 24, 26, 29, 31, 33, 35, 37, 40, 44];
for (const t of SAMPLES) {
  readSync(fd, buf, 0, FRAME, Math.round(t * FPS) * FRAME);
  for (let i = 0; i < FRAME; i++) {
    if (buf[i] < lo[i]) lo[i] = buf[i];
    if (buf[i] > hi[i]) hi[i] = buf[i];
  }
}

/** Fraction of a row/column that swings by more than `RANGE` across samples. */
const RANGE = 90;
const rowVary = (y) => {
  let n = 0;
  for (let x = 0; x < W; x++) if (hi[y * W + x] - lo[y * W + x] > RANGE) n++;
  return n / W;
};
const colVary = (x) => {
  let n = 0;
  for (let y = 0; y < H; y++) if (hi[y * W + x] - lo[y * W + x] > RANGE) n++;
  return n / H;
};

const THRESH = 0.45;
let top = 0;
while (top < H && rowVary(top) < THRESH) top++;
let bottom = H - 1;
while (bottom > top && rowVary(bottom) < THRESH) bottom--;
let left = 0;
while (left < W && colVary(left) < THRESH) left++;
let right = W - 1;
while (right > left && colVary(right) < THRESH) right--;

console.log("inner website, in panel coordinates:");
console.log(`  x ${left} .. ${right}   (width  ${right - left + 1})`);
console.log(`  y ${top} .. ${bottom}   (height ${bottom - top + 1})`);
console.log("\nin original 720x720 video coordinates (panel origin 26,148):");
console.log(
  `  crop=${right - left + 1}:${bottom - top + 1}:${26 + left}:${148 + top}`
);

console.log("\nrow variance near each edge:");
for (const y of [top - 3, top - 2, top - 1, top, top + 1, top + 2])
  if (y >= 0) console.log(`  y=${String(y).padStart(3)}  vary=${rowVary(y).toFixed(2)}`);
console.log("  ...");
for (const y of [bottom - 2, bottom - 1, bottom, bottom + 1, bottom + 2, bottom + 3])
  if (y < H) console.log(`  y=${String(y).padStart(3)}  vary=${rowVary(y).toFixed(2)}`);

closeSync(fd);
