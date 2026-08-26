/**
 * Lenis smooth scrolling, driven off GSAP's ticker.
 *
 * Sharing one RAF loop with GSAP is what keeps scrubbed ScrollTrigger
 * animations locked to the scroll position — running Lenis on its own
 * loop makes pinned/scrubbed sections visibly lag by a frame.
 */
import Lenis from "../../vendor/lenis.mjs";
import { gsap, ScrollTrigger, prefersReducedMotion } from "./motion.js";

let lenis = null;

export function initSmoothScroll() {
  if (prefersReducedMotion) return null;

  lenis = new Lenis({
    // Measured, not guessed. Tracking the reference's scroll displacement
    // frame by frame, the velocity after the last wheel event decays by a
    // constant 0.667 every two video frames (0.0834s) — so 0.78% of the
    // velocity survives one second. With this easing the residual after
    // one second is 2^(-10/duration), and 2^-7 = 0.0078, giving
    // duration = 10/7 = 1.43. The previous 1.05 settled far too abruptly.
    duration: 1.43,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    // Native momentum on touch feels better than an emulated one.
    //
    // This was `smoothTouch: false` — an option name Lenis dropped at 1.0.
    // Unknown keys are ignored silently, so it was doing nothing at all;
    // the current name is `syncTouch`, and false is the default it was
    // already falling back to.
    syncTouch: false,
    touchMultiplier: 1.6,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    // GSAP's ticker reports seconds; Lenis expects milliseconds.
    lenis.raf(time * 1000);
  });

  // Lenis's docs suggest lagSmoothing(0), but with it fully off a single
  // long frame during start-up advances every running timeline by that
  // whole delta — which fast-forwards the preloader. A 200ms threshold
  // keeps scroll easing smooth while clamping stalls.
  gsap.ticker.lagSmoothing(200, 33);

  return lenis;
}

export function stopScroll() {
  lenis?.stop();
}

export function startScroll() {
  lenis?.start();
}

/** Anchor links route through Lenis so they inherit the same easing. */
export function initAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (!id || id === "#") return;

      const target = document.querySelector(id);
      if (!target) return;

      e.preventDefault();

      if (lenis) {
        lenis.scrollTo(target, { offset: -80, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

export function getLenis() {
  return lenis;
}
