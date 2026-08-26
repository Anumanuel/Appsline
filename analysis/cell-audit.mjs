// Element-level motion localiser.
//
// The 8-band audit finds *that* a section animates; it cannot tell you a
// 30px badge moved. This splits the panel into a 12x8 grid and reports, per
// cell, how far it rises above its own settled level — so a small element
// animating on its own shows up as a hot cell instead of vanishing into a
// band average.
//
// Two things this gets right that earlier passes did not:
//
// 1. The still windows are DERIVED, not hand-listed. A frame counts as
//    still only when the tracker found zero displacement AND matched with a
//    low residual. That second condition matters: during a section cover the
//    outgoing content does not translate at all, so displacement reads zero
//    while the residual explodes (0.05 -> 18.7 at the about/bento
//    handover). Hand-listed windows swallowed those frames and reported a
//    250-point "lift" that was really the transition.
//
// 2. The settled level is the MEDIAN of the window's back third, not the
//    minimum. The codec emits exact-copy frames, so a minimum is almost
//    always 0 and every cell looks like it settles perfectly.
//
// usage: node cell-audit.mjs            rank hot cells per window
//        node cell-audit.mjs <name>     full grid for one window
//        node cell-audit.mjs --windows  just show the derived windows
import { openSync, readSync, closeSync, readFileSync } from "node:fs";

const W = 650; // ffmpeg rounds an odd crop width down; 651 would shear every row
const H = 388;
const FRAME = W * H;
const FPS = 2997 / 125;
const COLS = 12;
const ROWS = 8;
const cw = W / COLS;
const ch = H / ROWS;

// ---- derive still windows -------------------------------------------
const rows = readFileSync(new URL("./scroll.tsv", import.meta.url), "utf8")
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((l) => {
    const p = l.split("\t");
    return { t: +p[0], dy: +p[2], err: +p[4] };
  });

// Loose enough to keep windows where something animates continuously (the
// globe's spin alone lifts the residual to ~2-3), tight enough to reject a
// section cover, where it runs 12-24 while displacement still reads zero.
const QUIET_ERR = 8;
const MIN_RUN = 0.6;

const windows = [];
let start = null;
let prev = null;
for (const r of rows) {
  const quiet = r.dy === 0 && r.err < QUIET_ERR;
  if (quiet && start === null) start = r.t;
  if (!quiet && start !== null) {
    if (prev - start >= MIN_RUN) windows.push([start, prev]);
    start = null;
  }
  prev = r.t;
}
if (start !== null && prev - start >= MIN_RUN) windows.push([start, prev]);

// Trim a beat off each end: the first frames still carry the scroll's tail
// and the last can already be touched by the next gesture.
const TRIM = 0.09;
const WINDOWS = windows
  .map(([a, b], i) => [`w${String(i).padStart(2, "0")}`, +(a + TRIM).toFixed(2), +(b - TRIM).toFixed(2)])
  .filter(([, a, b]) => b - a >= 0.45);

if (process.argv[2] === "--windows") {
  console.log("derived still windows (dy==0 and residual < " + QUIET_ERR + "):");
  WINDOWS.forEach(([n, a, b]) => console.log(`  ${n}  ${a.toFixed(2)} - ${b.toFixed(2)}s  (${(b - a).toFixed(2)}s)`));
  process.exit(0);
}

const only = process.argv[2];
const fd = openSync(new URL("./panel.gray", import.meta.url), "r");
const buf = Buffer.alloc(FRAME);
const last = Buffer.alloc(FRAME);

function cells(b) {
  const out = new Float64Array(COLS * ROWS);
  const n = new Float64Array(COLS * ROWS);
  for (let y = 0; y < H; y++) {
    const r = Math.min(ROWS - 1, Math.floor(y / ch));
    for (let x = 0; x < W; x += 2) {
      const c = Math.min(COLS - 1, Math.floor(x / cw));
      const i = r * COLS + c;
      out[i] += Math.abs(b[y * W + x] - last[y * W + x]);
      n[i]++;
    }
  }
  for (let i = 0; i < out.length; i++) out[i] /= n[i];
  return out;
}

const median = (a) => {
  const s = [...a].sort((x, y) => x - y);
  return s[Math.floor(s.length / 2)];
};

for (const [name, t0, t1] of WINDOWS) {
  if (only && name !== only) continue;

  const f0 = Math.round(t0 * FPS);
  const f1 = Math.round(t1 * FPS);
  readSync(fd, last, 0, FRAME, f1 * FRAME);

  const series = [];
  for (let f = f0; f <= f1; f++) {
    readSync(fd, buf, 0, FRAME, f * FRAME);
    series.push(cells(buf));
  }

  const peak = new Float64Array(COLS * ROWS);
  const floor = new Float64Array(COLS * ROWS);
  for (let i = 0; i < peak.length; i++) {
    peak[i] = Math.max(...series.map((s) => s[i]));
    floor[i] = median(series.slice(Math.floor(series.length * 0.66)).map((s) => s[i]));
  }

  if (only) {
    console.log(`\n${name}  ${t0}-${t1}s   peak per cell`);
    for (let r = 0; r < ROWS; r++) {
      let line = String(Math.round(r * ch)).padStart(4) + " |";
      for (let c = 0; c < COLS; c++) line += peak[r * COLS + c].toFixed(1).padStart(6);
      console.log(line);
    }
    console.log("     settled level (median of back third)");
    for (let r = 0; r < ROWS; r++) {
      let line = String(Math.round(r * ch)).padStart(4) + " |";
      for (let c = 0; c < COLS; c++) line += floor[r * COLS + c].toFixed(1).padStart(6);
      console.log(line);
    }
    continue;
  }

  const hot = [];
  for (let i = 0; i < peak.length; i++) {
    const lift = peak[i] - floor[i];
    if (lift > 2.5 || floor[i] > 4) {
      hot.push({ col: i % COLS, row: Math.floor(i / COLS), peak: peak[i], floor: floor[i], lift });
    }
  }
  hot.sort((a, b) => b.lift - a.lift);

  const px = (c, r) =>
    `x${Math.round(c * cw)}-${Math.round((c + 1) * cw)} y${Math.round(r * ch)}-${Math.round((r + 1) * ch)}`;

  const running = hot.filter((h) => h.floor > 4);
  console.log(
    `\n${name} ${t0.toFixed(2)}-${t1.toFixed(2)}s   ${hot.length} active cells` +
      (running.length ? `, ${running.length} never settle` : "")
  );
  hot.slice(0, 5).forEach((h) =>
    console.log(
      `   ${px(h.col, h.row).padEnd(20)} lift=${h.lift.toFixed(1).padStart(6)} settled=${h.floor
        .toFixed(1)
        .padStart(5)}${h.floor > 4 ? "  <- CONTINUOUS" : ""}`
    )
  );
}
closeSync(fd);
