const vh = window.innerHeight;
const all = [...document.querySelectorAll("main > section"), document.querySelector(".footer")];
const stage = document.querySelector(".globe__stage");
return {
  viewport: vh,
  screens: +(document.body.scrollHeight / vh).toFixed(2),
  // The globe's stage is the only thing on the page that is allowed to be
  // sticky. Anything else reporting sticky means the section stacking has
  // crept back in — see the README before "fixing" it.
  globeStageSticky: stage ? getComputedStyle(stage).position === "sticky" : null,
  straySticky: all.filter((e) => e && getComputedStyle(e).position === "sticky").map((e) => e.id || "footer"),
  // Lenis needs its stylesheet to stop the native scroll while it is paused.
  lenisStyled: [...document.styleSheets].some((s) => {
    try { return [...s.cssRules].some((r) => r.selectorText === ".lenis.lenis-stopped"); } catch { return false; }
  }),
  sections: all.map((el) => `${(el.id || "footer").padEnd(11)} h=${String(el.offsetHeight).padStart(5)}  ${(el.offsetHeight/vh).toFixed(2)}vh  pos=${getComputedStyle(el).position}`),
};
