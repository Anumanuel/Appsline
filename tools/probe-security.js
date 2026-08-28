// Security card invariants. Run with:
//   node tools/shoot.mjs --evalfile tools/probe-security.js --only __none__
//
// The one that matters: the shield contour must never be stroked along its
// whole length. Every layer carrying the shield `d` has to be a short dash
// inside a gap covering the rest of the path, or the card has drawn the
// shield it is explicitly not allowed to show.
const guard = document.querySelector(".art-guard");
if (!guard) return { error: "no .art-guard" };

const L = window.__appsline && window.__appsline.lenis;
const y = guard.getBoundingClientRect().top + window.scrollY - 260;
if (L) L.scrollTo(y, { immediate: true }); else window.scrollTo(0, y);

const groups = [...guard.querySelectorAll("[data-orbit]")];
const read = () => groups.map((g) =>
  [...g.querySelectorAll("[data-len]")]
    .map((el) => Math.round(parseFloat(getComputedStyle(el).strokeDashoffset)))
    .join(",")
);

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

return (async () => {
  await wait(400);
  const t0 = read();
  await wait(900);
  const t1 = read();

  const report = groups.map((g) => {
    const layers = [...g.querySelectorAll("[data-len]")];
    const total = layers[0].getTotalLength();
    return {
      shape: layers[0].tagName,
      pathLength: Math.round(total),
      // Fraction of the path actually painted by the longest layer.
      litFraction: +(Math.max(...layers.map((e) => +e.dataset.len)) / total).toFixed(3),
      // Every layer must have a dash pattern; a bare stroke would draw the shape.
      allDashed: layers.every((e) => {
        const d = getComputedStyle(e).strokeDasharray;
        return d && d !== "none";
      }),
      // Pattern must equal the path length exactly, or the loop seams.
      seamless: layers.every((e) => {
        const parts = getComputedStyle(e).strokeDasharray.split(",").map(parseFloat);
        return parts.length === 2 && Math.abs(parts[0] + parts[1] - total) < 1.5;
      }),
    };
  });

  // A drawn shield outline would mean a <path> with no dash pattern.
  const strayShieldStroke = [...guard.querySelectorAll("path")].some((p) => {
    if (!p.getAttribute("d") || p.classList.contains("art-guard__bolt")) return false;
    const s = getComputedStyle(p);
    return s.stroke !== "none" && (!s.strokeDasharray || s.strokeDasharray === "none");
  });

  return {
    groups: report,
    moving: t0.every((v, i) => v !== t1[i]),
    independent: t0[0] !== t0[1],
    boltStatic: getComputedStyle(guard.querySelector(".art-guard__bolt")).transform,
    shieldOutlineDrawn: strayShieldStroke,
  };
})();
