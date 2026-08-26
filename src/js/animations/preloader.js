/**
 * Preloader choreography.
 *
 * Beat sheet transcribed from the reference video frame by frame:
 *   0.00s  a single dot at viewport centre
 *   0.35s  a ring blooms outward around it and fades
 *   1.05s  the dot gives way to the mark — bars grow out of the
 *          centre line, staggered from the middle outward
 *   1.38s  the wordmark types on one letter at a time, 0.10s apart, each
 *          appearing in place as grey and brightening to white; the
 *          lockup stays centred so the mark drifts left as it grows
 *   1.96s  everything holds, fully white
 *   2.21s  the panel is wiped away from the bottom edge upward over
 *          0.42s, accelerating — the lockup does not move, it is clipped
 *
 * Resolves once the panel is gone so the hero timeline can start.
 */
import { gsap, prefersReducedMotion } from "../utils/motion.js";

/** Reference letters land 0.10s apart (G 1.376 … E 1.777). */
const LETTER_STAGGER = 0.1;

/**
 * When the exit wipe starts. Eight letters at 0.10s plus the 0.2s fade put
 * the wordmark complete at 2.18; the reference then holds for about a
 * quarter of a second before the wipe begins.
 */
const WIPE_AT = 2.4;

/**
 * @param {{onReveal?: () => void}} [opts] onReveal fires the moment the
 *   panel starts lifting, so the page underneath can begin its own
 *   entrance while the loader is still clearing — as the reference does.
 */
export function runPreloader(opts = {}) {
  const { onReveal } = opts;
  const root = document.getElementById("preloader");
  if (!root) {
    onReveal?.();
    return Promise.resolve();
  }

  const dot = root.querySelector(".pre-dot");
  const ring = root.querySelector(".pre-ring");
  const mark = root.querySelector(".pre-mark");
  const bars = root.querySelectorAll(".pre-mark rect");
  const word = root.querySelector(".pre-word");
  const letters = root.querySelectorAll(".pre-word span");
  const bar = root.querySelector(".preloader__bar i");

  // Reduced motion, or ?noloader for the screenshot harness: skip
  // straight to the page.
  const skip =
    prefersReducedMotion ||
    new URLSearchParams(location.search).has("noloader");

  if (skip) {
    gsap.set(root, { display: "none" });
    document.body.classList.remove("is-loading");
    onReveal?.();
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      onComplete: () => {
        root.style.display = "none";
        resolve();
      },
    });

    gsap.set(mark, { opacity: 0 });
    gsap.set(bars, { scaleY: 0 });
    gsap.set(letters, { opacity: 0 });
    // Seed the clip so the exit tween has a matching shape to move from.
    gsap.set(root, { clipPath: "inset(0% 0% 0% 0%)" });

    // 1 — the dot
    tl.from(dot, { scale: 0, duration: 0.4, ease: "back.out(2.2)" });

    // 2 — the ring blooms and dissipates
    tl.fromTo(
      ring,
      { scale: 0.25, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.34 },
      0.24
    ).to(ring, { scale: 1.9, opacity: 0, duration: 0.5 }, 0.5);

    // 3 — dot hands over to the mark
    tl.to(dot, { scale: 0, opacity: 0, duration: 0.26, ease: "power2.in" }, 0.7)
      .set(mark, { opacity: 1 }, 0.74)
      .to(
        bars,
        {
          scaleY: 1,
          duration: 0.55,
          ease: "power4.out",
          // Grow outward from the centre bar.
          stagger: { each: 0.042, from: "center" },
        },
        0.74
      );

    // 4 — wordmark types on, lockup re-centres
    //
    // In the reference the letters do not slide: each one appears in
    // place as a mid grey and brightens to white over ~0.2s, 0.10s apart
    // (G 1.376, C 1.485, O 1.568, R 1.652, E 1.777). The lockup stays
    // centred as it grows, so the mark drifts left as letters land —
    // which the width tween below produces for free.
    tl.to(
      word,
      { width: "auto", paddingLeft: "0.9rem", duration: 0.62, ease: "expo.out" },
      1.2
    ).fromTo(
      letters,
      { opacity: 0, color: "#8a8a8a" },
      {
        opacity: 1,
        color: "#ffffff",
        duration: 0.2,
        ease: "power2.out",
        stagger: LETTER_STAGGER,
      },
      1.28
    );

    // progress hairline runs the whole length
    tl.to(bar, { scaleX: 1, duration: 1.8, ease: "power1.inOut" }, 0.15);

    // 5 — wipe away from the bottom edge upward
    //
    // The reference does not slide the panel off: across 2.21-2.63s the
    // lockup stays exactly where it is and is progressively cut off from
    // below, which only a clip can do. The cut accelerates, so this eases
    // in rather than out.
    tl.to(root.querySelector(".preloader__bar"), { opacity: 0, duration: 0.2 }, WIPE_AT)
      .to(
        root,
        {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.42,
          ease: "power2.in",
          onStart: () => {
            document.body.classList.remove("is-loading");
            // Hand off as the wipe starts, not on completion, so the hero
            // is already moving as the panel clears.
            onReveal?.();
          },
        },
        WIPE_AT
      );
  });
}
