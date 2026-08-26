// Characterises a single reveal.
//
// Each frame in a window is matched against the SETTLED frame (after the
// animation finished) rather than against its neighbour. That distinguishes
// the two candidates cleanly:
//
//   pure fade      -> best dy stays 0 the whole way, luminance ramps
//   fade+translate -> best dy starts offset and walks to 0
//
// Matching against a neighbour cannot tell these apart, because a shape
// emerging from black has no previous position to lock onto.
//
// usage: node reveal-probe.mjs <t0> <t1> <settledT> <x> <y> <w> <h>
import { openSync, readSync, closeSync } from "node:fs";

const W = 650; // ffmpeg rounds an odd crop width down; 651 would shear every row
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;

const [t0, t1, tS, rx, ry, rw, rh] = process.argv.slice(2).map(Number);
const SEARCH = 60;

const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const buf = Buffer.alloc(FRAME);
const settled = Buffer.alloc(FRAME);
readSync(fd, settled, 0, FRAME, Math.round(tS * FPS) * FRAME);

/** Mean luminance of the rect, i.e. how much of the reveal has landed. */
function lum(b) {
  let a = 0;
  for (let y = ry; y < ry + rh; y++) for (let x = rx; x < rx + rw; x++) a += b[y * W + x];
  return a / (rw * rh);
}

/**
 * Best vertical offset of `b`'s rect against the settled frame's rect.
 * Normalised by each window's own mean so a dimmer (mid-fade) frame still
 * correlates on structure rather than on absolute brightness.
 */
function bestDy(b) {
  let best = 0;
  let bestScore = -Infinity;
  const mb = lum(b);
  for (let dy = -SEARCH; dy <= SEARCH; dy++) {
    if (ry + dy < 0 || ry + dy + rh >= H) continue;
    let num = 0;
    let d1 = 0;
    let d2 = 0;
    let ms = 0;
    let n = 0;
    for (let y = 0; y < rh; y += 2)
      for (let x = 0; x < rw; x += 3) {
        ms += settled[(ry + y) * W + rx + x];
        n++;
      }
    ms /= n;
    for (let y = 0; y < rh; y += 2)
      for (let x = 0; x < rw; x += 3) {
        const v1 = b[(ry + dy + y) * W + rx + x] - mb;
        const v2 = settled[(ry + y) * W + rx + x] - ms;
        num += v1 * v2;
        d1 += v1 * v1;
        d2 += v2 * v2;
      }
    // Normalised cross-correlation: amplitude-invariant, so a half-faded
    // frame still scores its true alignment highest.
    const score = num / (Math.sqrt(d1 * d2) || 1);
    if (score > bestScore) {
      bestScore = score;
      best = dy;
    }
  }
  return { dy: best, score: bestScore };
}

const f0 = Math.round(t0 * FPS);
const f1 = Math.round(t1 * FPS);
const lS = lum(settled);
console.log("t\tlum\tnorm\tdy\tncc");
for (let f = f0; f <= f1; f++) {
  readSync(fd, buf, 0, FRAME, f * FRAME);
  const l = lum(buf);
  const { dy, score } = bestDy(buf);
  console.log(
    `${(f / FPS).toFixed(3)}\t${l.toFixed(2)}\t${(l / lS).toFixed(3)}\t${dy}\t${score.toFixed(3)}`
  );
}
closeSync(fd);
