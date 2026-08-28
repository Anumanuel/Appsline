// Security card checks. Run with:
//   node tools/shoot.mjs --evalfile tools/probe-security.js --only __none__
const guard = document.querySelector(".art-guard");
if (!guard) return { error: "no .art-guard" };

const L = window.__appsline && window.__appsline.lenis;
const y = guard.getBoundingClientRect().top + window.scrollY - 260;
if (L) L.scrollTo(y, { immediate: true }); else window.scrollTo(0, y);

const groups = [...guard.querySelectorAll("[data-orbit]")];
const read = () => groups.map((g) =>
  [...g.querySelectorAll("[data-len]")]
    .map((el) => Math.round(parseFloat(getComputedStyle(el).strokeDashoffset)))
    .join(","));
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

return (async () => {
  await wait(400);
  const t0 = read();
  await wait(900);
  const t1 = read();

  const outline = guard.querySelector(".art-guard__outline");
  const os = getComputedStyle(outline);

  return {
    groups: groups.map((g) => {
      const layers = [...g.querySelectorAll("[data-len]")];
      const total = layers[0].getTotalLength();
      return {
        shape: layers[0].tagName,
        pathLength: Math.round(total),
        litFraction: +(Math.max(...layers.map((e) => +e.dataset.len)) / total).toFixed(2),
        // Pattern must equal the path length exactly or the lap seams.
        seamless: layers.every((e) => {
          const p = getComputedStyle(e).strokeDasharray.split(",").map(parseFloat);
          return p.length === 2 && Math.abs(p[0] + p[1] - total) < 1.5;
        }),
      };
    }),
    moving: t0.every((v, i) => v !== t1[i]),
    independent: t0[0] !== t0[1],
    // The outline is drawn, and must stay dim — the travelling light is
    // what picks out a stretch of it, not the base stroke.
    outlineStroke: os.stroke,
    outlineDashed: os.strokeDasharray,
    boltTransform: getComputedStyle(guard.querySelector(".art-guard__bolt")).transform,
  };
})();
