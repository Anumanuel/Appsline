// Hero circuit board invariants. Run with:
//   node tools/shoot.mjs --evalfile tools/probe-circuit.js --only __none__
//
// Three things silently regress here and none of them are visible in a
// screenshot at the design width:
//   uniformScale     `.circuit`'s aspect-ratio must equal the SVG viewBox's,
//                    or the axes scale differently and the square DOM chip
//                    comes away from the stretched SVG traces
//   chipMatchesPins  the chip is sized as a % of the board for that reason;
//                    any px sizing drifts off its own pins away from 1440
//   allStartOnPin    every path must be authored starting at a chip pin, or
//                    its pulse runs inward instead of radiating outward
const board = document.getElementById("circuit").getBoundingClientRect();
const chip = document.querySelector(".circuit__chip").getBoundingClientRect();
const sx = 1440 / board.width;
const sy = 380 / board.height;

// Chip rect expressed back in viewBox units.
const chipVB = {
  left: +((chip.left - board.left) * sx).toFixed(1),
  right: +((chip.right - board.left) * sx).toFixed(1),
  top: +((chip.top - board.top) * sy).toFixed(1),
  bottom: +((chip.bottom - board.top) * sy).toFixed(1),
};

const pins = [...document.querySelectorAll(".circuit__pins rect")].map((r) => ({
  x: +r.getAttribute("x"), y: +r.getAttribute("y"),
  w: +r.getAttribute("width"), h: +r.getAttribute("height"),
}));

// A trace start is "on a pin" if it touches that pin's outer tip.
const traces = [...document.querySelectorAll(".circuit__trace")].map((t) => {
  const s = t.getPointAtLength(0);
  const e = t.getPointAtLength(t.getTotalLength());
  const hit = pins.find((p) => {
    const tipX = p.w > p.h ? (p.x < 720 ? p.x : p.x + p.w) : p.x + p.w / 2;
    const tipY = p.w > p.h ? p.y + p.h / 2 : (p.y < 170 ? p.y : p.y + p.h);
    return Math.abs(tipX - s.x) < 0.6 && Math.abs(tipY - s.y) < 0.6;
  });
  return {
    from: `${Math.round(s.x)},${Math.round(s.y)}`,
    to: `${Math.round(e.x)},${Math.round(e.y)}`,
    len: Math.round(t.getTotalLength()),
    startsOnPin: !!hit,
  };
});

return {
  boardPx: [Math.round(board.width), Math.round(board.height)],
  uniformScale: Math.abs(sx - sy) < 0.01,
  chipInViewBoxUnits: chipVB,
  chipMatchesPins:
    Math.abs(chipVB.left - 660) < 1.5 && Math.abs(chipVB.right - 780) < 1.5 &&
    Math.abs(chipVB.top - 110) < 1.5 && Math.abs(chipVB.bottom - 230) < 1.5,
  traceCount: traces.length,
  allStartOnPin: traces.every((t) => t.startsOnPin),
  longestTrace: Math.max(...traces.map((t) => t.len)),
  padCount: document.querySelectorAll(".circuit__pad").length,
  boardBottomVsFold: Math.round(board.bottom - window.innerHeight),
  traces,
};
