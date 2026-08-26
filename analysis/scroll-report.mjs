// Summarises scroll.tsv into readable gestures + flags band disagreement.
import { readFileSync } from "node:fs";

const rows = readFileSync(new URL("./scroll.tsv", import.meta.url), "utf8")
  .trim()
  .split(/\r?\n/)
  .slice(1)
  .map((l) => {
    const [t, f, dy, pos, err, top, mid, bot] = l.split("\t");
    return {
      t: +t,
      f: +f,
      dy: +dy,
      pos: +pos,
      err: +err,
      top: +top,
      mid: +mid,
      bot: +bot,
    };
  });

const mode = process.argv[2] || "gestures";

if (mode === "gestures") {
  // A gesture = a contiguous run of frames with non-zero dy, allowing a
  // couple of zero frames inside so a momentary stall doesn't split it.
  const GAP = 3;
  const g = [];
  let cur = null;
  let zeros = 0;
  for (const r of rows) {
    if (r.dy !== 0) {
      if (!cur) cur = { from: r.t, fromF: r.f, startPos: r.pos - r.dy, rows: [] };
      cur.rows.push(r);
      cur.to = r.t;
      cur.toF = r.f;
      cur.endPos = r.pos;
      zeros = 0;
    } else if (cur) {
      zeros++;
      if (zeros > GAP) {
        g.push(cur);
        cur = null;
      }
    }
  }
  if (cur) g.push(cur);

  console.log(
    "#   start    end     dur    travel   peak  avg   shape (dy per frame)"
  );
  g.forEach((s, i) => {
    const d = s.to - s.from;
    const travel = s.endPos - s.startPos;
    const peak = Math.max(...s.rows.map((r) => Math.abs(r.dy)));
    const avg = travel / s.rows.length;
    const spark = s.rows
      .map((r) => "▁▂▃▄▅▆▇█"[Math.min(7, Math.floor((Math.abs(r.dy) / peak) * 7.99))])
      .join("");
    console.log(
      `${String(i + 1).padStart(2)}  ${s.from.toFixed(2).padStart(6)}  ${s.to
        .toFixed(2)
        .padStart(6)}  ${d.toFixed(2).padStart(5)}s ${String(travel).padStart(6)}px ${String(
        peak
      ).padStart(5)} ${avg.toFixed(1).padStart(5)}  ${spark}`
    );
  });
} else if (mode === "parallax") {
  // Frames where a band clearly disagrees with the page-level dy.
  for (const r of rows) {
    if (r.err > 6) continue; // unreliable match, skip
    const spread = Math.max(r.top, r.mid, r.bot) - Math.min(r.top, r.mid, r.bot);
    if (spread >= 6 && Math.abs(r.dy) > 2) {
      console.log(
        `t=${r.t.toFixed(2)} f=${r.f} page=${String(r.dy).padStart(4)}  top=${String(
          r.top
        ).padStart(4)} mid=${String(r.mid).padStart(4)} bot=${String(r.bot).padStart(
          4
        )}  spread=${spread}`
      );
    }
  }
} else if (mode === "pos") {
  for (const r of rows) console.log(`${r.t.toFixed(3)}\t${r.pos}`);
}
