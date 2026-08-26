// Follows one element through a window of frames and reports whether it is
// actually ANIMATING or merely scrolling past.
//
// A fixed probe rectangle cannot tell those apart: an element sliding up into
// a stationary rect produces a textbook-looking "fade" that never happened.
// (That mistake is why the FAQ heading first appeared to fade in 0.17s.)
//
// So instead: take the element's appearance in a settled frame as a template,
// and for every earlier frame search over vertical offsets for the best
// normalised cross-correlation. That yields, per frame:
//
//   dy   where the element actually is  -> its own motion vs. the page
//   ncc  how well its structure matches -> a mask/clip reveal drops this
//   vis  contrast relative to settled   -> opacity, background-invariant
//
// `vis` uses standard deviation rather than mean brightness because an
// element fading over a constant background scales its contrast linearly
// while its mean drifts toward the background's.
//
// usage: node track-probe.mjs <t0> <t1> <settledT> <x> <y> <w> <h> [searchPx]
import { openSync, readSync, closeSync } from "node:fs";

const W = 650; // ffmpeg rounds an odd crop width down; 651 would shear every row
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;

const [t0, t1, tS, rx, ry, rw, rh, search] = process.argv.slice(2).map(Number);
const SEARCH = search || 220;

const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const buf = Buffer.alloc(FRAME);
const settled = Buffer.alloc(FRAME);
readSync(fd, settled, 0, FRAME, Math.round(tS * FPS) * FRAME);

const STEP_Y = 2;
const STEP_X = 2;

/** Pull the rect (optionally shifted by dy) as a flat sample array. */
function sample(b, dy) {
  const out = [];
  for (let y = 0; y < rh; y += STEP_Y) {
    const yy = ry + dy + y;
    if (yy < 0 || yy >= H) return null;
    for (let x = 0; x < rw; x += STEP_X) out.push(b[yy * W + rx + x]);
  }
  return out;
}

function stats(a) {
  let m = 0;
  for (const v of a) m += v;
  m /= a.length;
  let s = 0;
  for (const v of a) s += (v - m) * (v - m);
  return { mean: m, sd: Math.sqrt(s / a.length) };
}

const tmpl = sample(settled, 0);
const tS_ = stats(tmpl);

function ncc(a) {
  const s = stats(a);
  if (s.sd < 1e-6 || tS_.sd < 1e-6) return 0;
  let acc = 0;
  for (let i = 0; i < a.length; i++) acc += (a[i] - s.mean) * (tmpl[i] - tS_.mean);
  return acc / (a.length * s.sd * tS_.sd);
}

const f0 = Math.round(t0 * FPS);
const f1 = Math.round(t1 * FPS);

console.log("t\tdy\tncc\tvis\tmean");
for (let f = f0; f <= f1; f++) {
  readSync(fd, buf, 0, FRAME, f * FRAME);

  let bestDy = 0;
  let best = -Infinity;
  let bestS = null;
  for (let dy = -SEARCH; dy <= SEARCH; dy++) {
    const a = sample(buf, dy);
    if (!a) continue;
    const score = ncc(a);
    if (score > best) {
      best = score;
      bestDy = dy;
      bestS = stats(a);
    }
  }

  if (!bestS) {
    console.log(`${(f / FPS).toFixed(3)}\t-\t-\t-\t-`);
    continue;
  }
  console.log(
    `${(f / FPS).toFixed(3)}\t${bestDy}\t${best.toFixed(3)}\t${(bestS.sd / tS_.sd).toFixed(
      3
    )}\t${bestS.mean.toFixed(1)}`
  );
}
closeSync(fd);
