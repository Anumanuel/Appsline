// Frame-to-frame scale search.
//
// Comparing a frame against a distant template cannot answer "does this
// section zoom", because in between the section's own content reveals and the
// correlation collapses for reasons that have nothing to do with scale.
// Between CONSECUTIVE frames the content barely changes, so any residual
// scale is measurable.
//
// A zoom slow enough to look smooth is tiny per frame — 5% over a second at
// 24fps is 0.2% per frame — so the scale grid is fine around 1.0 and the
// per-frame factors are multiplied out into a cumulative curve.
//
// usage: node scale-seq.mjs <t0> <t1> <y> <h> [xPad] [dyRange]
import { openSync, readSync, closeSync } from "node:fs";

const W = 650;
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;

const [t0, t1, ry, rh, xPadArg, dyArg] = process.argv.slice(2).map(Number);
const xPad = xPadArg || 50;
const DY = dyArg || 60;

const SCALES = [];
for (let s = 0.984; s <= 1.0161; s += 0.002) SCALES.push(+s.toFixed(4));

const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const a = Buffer.alloc(FRAME);
const b = Buffer.alloc(FRAME);

const cx = W / 2;
const cy = ry + rh / 2;
const YS = [];
for (let y = ry; y < ry + rh; y += 2) YS.push(y);
const XS = [];
for (let x = xPad; x < W - xPad; x += 2) XS.push(x);

const stats = (v) => {
  let m = 0;
  for (const x of v) m += x;
  m /= v.length;
  let s = 0;
  for (const x of v) s += (x - m) * (x - m);
  return { m, sd: Math.sqrt(s / v.length) };
};

function grab(buf, s, dy) {
  const out = [];
  for (const y of YS) {
    const sy = Math.round(cy + (y - cy) / s + dy);
    if (sy < 0 || sy >= H) return null;
    for (const x of XS) {
      const sx = Math.round(cx + (x - cx) / s);
      if (sx < 0 || sx >= W) return null;
      out.push(buf[sy * W + sx]);
    }
  }
  return out;
}

const f0 = Math.round(t0 * FPS);
const f1 = Math.round(t1 * FPS);
readSync(fd, a, 0, FRAME, f0 * FRAME);

let cum = 1;
console.log("t\tframeScale\tcumScale\tdy\tncc");
for (let f = f0 + 1; f <= f1; f++) {
  readSync(fd, b, 0, FRAME, f * FRAME);

  const ref = grab(a, 1, 0);
  const R = stats(ref);

  let best = { s: 1, dy: 0, v: -2 };
  for (const s of SCALES) {
    for (let dy = -DY; dy <= DY; dy++) {
      const v = grab(b, s, dy);
      if (!v) continue;
      const S = stats(v);
      if (S.sd < 1e-6) continue;
      let num = 0;
      for (let i = 0; i < v.length; i++) num += (v[i] - S.m) * (ref[i] - R.m);
      const nc = num / (v.length * S.sd * R.sd);
      if (nc > best.v) best = { s, dy, v: nc };
    }
  }

  cum *= best.s;
  console.log(
    `${(f / FPS).toFixed(3)}\t${best.s.toFixed(4)}\t\t${cum.toFixed(4)}\t${String(best.dy).padStart(
      4
    )}\t${best.v.toFixed(3)}`
  );
  a.set(b);
}
closeSync(fd);
