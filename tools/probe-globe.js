const host = document.querySelector("[data-mini-globe]");
if (!host) return { error: "no globe host" };
const canvas = host.querySelector("canvas");
if (!canvas) return { error: "globe is not a canvas" };

// Bring the card on screen so its ScrollTrigger starts the ticker.
const L = window.__appsline && window.__appsline.lenis;
const y = host.getBoundingClientRect().top + window.scrollY - 300;
if (L) L.scrollTo(y, { immediate: true });
else window.scrollTo(0, y);

const ctx = canvas.getContext("2d");
// Cheap frame signature: sum of alpha over a coarse sample of the bitmap.
const signature = () => {
  const d = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let sum = 0;
  let lit = 0;
  for (let i = 3; i < d.length; i += 4 * 97) {
    sum += d[i];
    if (d[i] > 40) lit++;
  }
  return { sum, lit };
};

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

return (async () => {
  await wait(400);
  const a = signature();
  await wait(900);
  const b = signature();
  await wait(900);
  const c = signature();

  return {
    canvasSize: [canvas.width, canvas.height],
    cssSize: [canvas.style.width, canvas.style.height],
    // A spinning globe repaints different pixels every frame, so three
    // samples a second apart must all differ.
    rotating: a.sum !== b.sum && b.sum !== c.sum,
    signatures: [a, a && b, c].map((s) => s && s.sum),
    litCounts: [a.lit, b.lit, c.lit],
    tickerListeners: window.__appsline ? undefined : "no handle",
  };
})();
