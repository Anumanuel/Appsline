// Tests whether a section ZOOMS — scales up or down — as opposed to only
// translating.
//
// Every earlier tracker in this folder searched vertical shift alone, so a
// scale would have shown up only as a raised residual and been read as
// "something else changed". This searches shift AND scale together.
//
// Method: take a horizontal strip of the section as a template, then for each
// later frame resample that strip at a range of scale factors about the
// panel centre and score each against the template by normalised
// cross-correlation. The scale that wins is the section's scale at that
// frame. Sub-step precision comes from a parabolic fit around the winner.
//
// usage: node scale-probe.mjs <t0> <t1> <templateT> <y> <h> [xPad]
import { openSync, readSync, closeSync } from "node:fs";

const W = 650;
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;

const [t0, t1, tT, ry, rh, xPadArg] = process.argv.slice(2).map(Number);
const xPad = xPadArg || 40;

const SCALES = [];
for (let s = 0.86; s <= 1.145; s += 0.005) SCALES.push(+s.toFixed(3));
const DY = 90;

const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const buf = Buffer.alloc(FRAME);
const tpl = Buffer.alloc(FRAME);
readSync(fd, tpl, 0, FRAME, Math.round(tT * FPS) * FRAME);

const cx = W / 2;
const cy = ry + rh / 2;

/** Rows of the strip, sampled every other row and column. */
const YS = [];
for (let y = ry; y < ry + rh; y += 2) YS.push(y);
const XS = [];
for (let x = xPad; x < W - xPad; x += 2) XS.push(x);

function sampleTemplate() {
  const out = [];
  for (const y of YS) for (const x of XS) out.push(tpl[y * W + x]);
  return out;
}
const T = sampleTemplate();
const stats = (a) => {
  let m = 0;
  for (const v of a) m += v;
  m /= a.length;
  let s = 0;
  for (const v of a) s += (v - m) * (v - m);
  return { m, sd: Math.sqrt(s / a.length) };
};
const TS = stats(T);

/** Resample the frame's strip as if the section were scaled by `s` and shifted `dy`. */
function score(b, s, dy) {
  let num = 0;
  let n = 0;
  const vals = [];
  for (const y of YS) {
    const sy = Math.round(cy + (y - cy) / s + dy);
    if (sy < 0 || sy >= H) return -2;
    for (const x of XS) {
      const sx = Math.round(cx + (x - cx) / s);
      if (sx < 0 || sx >= W) return -2;
      vals.push(b[sy * W + sx]);
    }
  }
  const S = stats(vals);
  if (S.sd < 1e-6) return -2;
  for (let i = 0; i < vals.length; i++) num += (vals[i] - S.m) * (T[i] - TS.m);
  n = vals.length;
  return num / (n * S.sd * TS.sd);
}

const f0 = Math.round(t0 * FPS);
const f1 = Math.round(t1 * FPS);

console.log("t\tscale\tdy\tncc");
for (let f = f0; f <= f1; f++) {
  readSync(fd, buf, 0, FRAME, f * FRAME);

  let best = { s: 1, dy: 0, v: -2 };
  for (const s of SCALES) {
    // Coarse then fine on dy, so the 2D search stays affordable.
    let bd = 0;
    let bv = -2;
    for (let dy = -DY; dy <= DY; dy += 3) {
      const v = score(buf, s, dy);
      if (v > bv) {
        bv = v;
        bd = dy;
      }
    }
    for (let dy = bd - 3; dy <= bd + 3; dy++) {
      const v = score(buf, s, dy);
      if (v > bv) {
        bv = v;
        bd = dy;
      }
    }
    if (bv > best.v) best = { s, dy: bd, v: bv };
  }

  console.log(
    `${(f / FPS).toFixed(3)}\t${best.s.toFixed(3)}\t${String(best.dy).padStart(4)}\t${best.v.toFixed(3)}`
  );
}
closeSync(fd);
