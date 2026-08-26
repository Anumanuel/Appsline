/**
 * Entry point.
 *
 * Order matters here: the preloader runs first and holds the page, then
 * the hero timeline fires the moment the panel lifts, and everything
 * scroll-driven is wired up behind that so ScrollTrigger measures a
 * settled layout.
 */
import { gsap, ScrollTrigger } from "./utils/motion.js";
import { initSmoothScroll, initAnchors, stopScroll, startScroll } from "./utils/smooth-scroll.js";
import { mountStars } from "./utils/stars.js";

import { runPreloader } from "./animations/preloader.js";
import { initHero } from "./animations/hero.js";
import { initCircuit } from "./animations/circuit.js";
import { initEmbers } from "./animations/embers.js";
import { initBento } from "./animations/bento.js";
import { initReveals } from "./animations/reveals.js";

import { initNav } from "./components/nav.js";
import { initMarquee } from "./components/marquee.js";
import { initFaq } from "./components/faq.js";
import { initTiers } from "./components/tiers.js";
import { initMiniGlobes } from "./components/mini-globe.js";

import { initGlobe } from "./webgl/globe.js";

/** Hands the frame back to the browser so start-up work stays chunked. */
const nextFrame = () => new Promise((r) => requestAnimationFrame(() => r()));

async function boot() {
  // Tells the inline failsafe in index.html to stand down.
  window.__appslineBooted = true;

  // Decorative geometry that must exist before anything measures layout.
  mountStars();
  initMiniGlobes();

  const lenis = initSmoothScroll();
  initAnchors();
  stopScroll();

  // Handle for tooling and debugging: the screenshot harness in
  // tools/shoot.mjs drives scrolling through this rather than
  // window.scrollTo, which Lenis would immediately override.
  window.__appsline = { gsap, ScrollTrigger, lenis };

  // The preloader is started before the rest of the wiring so it is
  // actually playing while that work happens — that is what it is for.
  // The hero's entrance is handed off at the lift, not on completion.
  const loading = runPreloader({
    onReveal: () => {
      startScroll();
      initHero();
    },
  });

  // Each step yields a frame before the next. Done in one synchronous
  // block these add up to a single very long frame, and GSAP's lag
  // smoothing then clamps it — which makes the preloader crawl instead
  // of playing at its authored speed.
  await nextFrame();
  initNav();

  await nextFrame();
  initMarquee();

  await nextFrame();
  initFaq();
  initTiers();

  await nextFrame();
  initCircuit();
  initEmbers();
  initBento();

  await nextFrame();
  initReveals();


  await nextFrame();
  ScrollTrigger.refresh();

  await loading;

  // WebGL last: building the dot geometry and compiling the shaders is
  // the heaviest step on the page, and its section is several screens
  // down, so it must not block the hero's entrance.
  requestAnimationFrame(() => {
    try {
      initGlobe();
    } catch (err) {
      // The CSS halo stands in if this fails.
      console.warn("Globe failed to initialise:", err);
    }
  });

  // Fonts land after first paint and shift text metrics, so re-measure.
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => ScrollTrigger.refresh());
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}

// Keep triggers honest when the viewport changes shape.
let resizeId;
window.addEventListener("resize", () => {
  clearTimeout(resizeId);
  resizeId = setTimeout(() => ScrollTrigger.refresh(), 260);
});
