// Turns ffmpeg's per-frame signalstats dump into a motion timeline so the
// animation-heavy stretches of the reference can be found before sampling
// frames. YAVG of a difference-blended frame == mean absolute change.
import { readFileSync } from "node:fs";

const txt = readFileSync(new URL("./motion.txt", import.meta.url), "utf8");
const rows = [];
let t = null;
for (const line of txt.split(/\r?\n/)) {
  const m = line.match(/pts_time:([\d.]+)/);
  if (m) {
    t = Number(m[1]);
    continue;
  }
  const y = line.match(/lavfi\.signalstats\.YAVG=([\d.]+)/);
  if (y && t !== null) rows.push({ t, y: Number(y[1]) });
}

const arg = process.argv[2] || "bars";

if (arg === "bars") {
  const max = Math.max(...rows.map((r) => r.y));
  for (const r of rows) {
    const n = Math.round((r.y / max) * 60);
    console.log(
      r.t.toFixed(3).padStart(7) + " " + r.y.toFixed(2).padStart(6) + " " + "#".repeat(n)
    );
  }
} else if (arg === "quiet") {
  // Report contiguous runs below/above a threshold so scenes are obvious.
  const TH = Number(process.argv[3] || 1.0);
  let runStart = rows[0].t;
  let runQuiet = rows[0].y < TH;
  const out = [];
  for (const r of rows) {
    const q = r.y < TH;
    if (q !== runQuiet) {
      out.push({ from: runStart, to: r.t, quiet: runQuiet });
      runStart = r.t;
      runQuiet = q;
    }
  }
  out.push({ from: runStart, to: rows[rows.length - 1].t, quiet: runQuiet });
  for (const s of out) {
    console.log(
      `${s.quiet ? "STILL " : "MOVING"} ${s.from.toFixed(2)} -> ${s.to.toFixed(2)}  (${(
        s.to - s.from
      ).toFixed(2)}s)`
    );
  }
}
