// Recovers the reference's scroll displacement curve.
//
// For each consecutive frame pair we find the vertical shift dy that minimises
// sum-of-absolute-differences over a set of horizontal bands. Splitting the
// panel into bands is the point: if the top band's dy differs from the bottom
// band's, something is moving at its own rate (parallax, pinning, or an
// element animating against the scroll) rather than the whole page translating.
import { openSync, readSync, closeSync, statSync } from "node:fs";

const W = 650; // ffmpeg rounds an odd crop width down; 651 would shear every row
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;
const SEARCH = 70; // px of vertical shift to test either way

// Bands are described in panel rows. "all" is the page-level scroll signal.
const BANDS = {
  all: [40, 370],
  top: [30, 140],
  mid: [150, 260],
  bot: [270, 380],
};

const path = new URL("./panel.gray", import.meta.url);
const fd = openSync(path, "r");
const total = Math.floor(statSync(path).size / FRAME);

const a = Buffer.alloc(FRAME);
const b = Buffer.alloc(FRAME);

/** Mean abs difference between frame `prev` shifted by dy and frame `cur`. */
function sad(prev, cur, y0, y1, dy) {
  // Sub-sample columns; full-width SAD is 40x slower for no extra accuracy.
  const STEP = 3;
  let acc = 0;
  let n = 0;
  for (let y = y0; y < y1; y += 2) {
    const ys = y + dy;
    if (ys < 0 || ys >= H) continue;
    const rp = ys * W;
    const rc = y * W;
    for (let x = 0; x < W; x += STEP) {
      acc += Math.abs(prev[rp + x] - cur[rc + x]);
      n++;
    }
  }
  return n ? acc / n : Infinity;
}

readSync(fd, a, 0, FRAME, 0);
const out = [];

for (let f = 1; f < total; f++) {
  readSync(fd, b, 0, FRAME, f * FRAME);

  const row = { f, t: f / FPS };
  for (const [name, [y0, y1]] of Object.entries(BANDS)) {
    let best = 0;
    let bestErr = Infinity;
    for (let dy = -SEARCH; dy <= SEARCH; dy++) {
      const e = sad(a, b, y0, y1, dy);
      if (e < bestErr) {
        bestErr = e;
        best = dy;
      }
    }
    row[name] = best;
    if (name === "all") row.err = bestErr;
  }
  out.push(row);

  a.set(b);
}
closeSync(fd);

// dy is how far content moved UP between frames, i.e. scroll delta.
let pos = 0;
const lines = ["t\tframe\tdy\tscrollpos\terr\ttop\tmid\tbot"];
for (const r of out) {
  pos += r.all;
  lines.push(
    [
      r.t.toFixed(3),
      r.f,
      r.all,
      pos,
      r.err.toFixed(2),
      r.top,
      r.mid,
      r.bot,
    ].join("\t")
  );
}
console.log(lines.join("\n"));
