/**
 * Rising ember streaks in the about card's artwork.
 *
 * This is the one graphic in the reference that never stops moving. The
 * section audit flagged it before it was visible to the eye: with the page
 * completely stationary from 9.86s, the band covering the card holds a
 * mean deviation of ~70 from its settled frame indefinitely, where every
 * other band in that window falls to its noise floor within a second.
 *
 * Brightening and magnifying those frames shows what it is — short vertical
 * light streaks that fade in low in the tile, travel UPWARD while
 * elongating and brightening, then vanish. Measured on the streak visible
 * from 10.39s to 10.51s: its head climbs 27 panel px in 0.125s, i.e. about
 * 480 design px/s, while its length grows from roughly 13 to 20 panel px.
 * They appear a couple of times a second at varying x.
 *
 * Positions and phases come from the same golden-ratio recurrence the star
 * field uses, so the pattern is identical on every load — no Math.random
 * anywhere in the geometry.
 */
import { gsap, ScrollTrigger, prefersReducedMotion } from "../utils/motion.js";

const PHI = 0.6180339887;

const COUNT = 6;
/** Fraction of the tile height a streak covers before it is gone. */
const RISE = 0.46;
/** Seconds for one streak's travel — 480 design px/s over a ~220px climb. */
const TRAVEL = 0.46;
/** Gap between successive streaks, giving roughly two per second. */
const CADENCE = 0.42;

export function initEmbers() {
  const hosts = document.querySelectorAll("[data-embers]");
  if (!hosts.length) return;

  hosts.forEach((host) => {
    const layer = document.createElement("div");
    layer.className = "embers";
    layer.setAttribute("aria-hidden", "true");

    const streaks = [];
    for (let i = 0; i < COUNT; i++) {
      const s = document.createElement("span");
      s.className = "ember";
      // Two offset recurrences: one for the column, one for the starting
      // height, so streaks neither line up nor clump.
      s.style.left = ((((i + 1) * PHI) % 1) * 86 + 7).toFixed(2) + "%";
      s.style.setProperty("--h", (13 + (i % 3) * 4).toFixed(0) + "%");
      // `top` is written once and never animated — see below.
      const from = 74 + (((i + 1) * PHI * PHI * 3) % 1) * 14;
      s.style.top = from.toFixed(2) + "%";
      streaks.push({ el: s });
      layer.appendChild(s);
    }

    host.appendChild(layer);

    if (prefersReducedMotion) return;

    // Travel distance in pixels, so the climb can ride `transform` instead
    // of `top`. Animating `top` moves a streak by triggering layout on every
    // frame, and with six of them looping inside a sticky section that was
    // enough to make this the most expensive section on the page — 71ms
    // average frame time against 17-27ms almost everywhere else.
    let rise = host.offsetHeight * RISE;

    const tl = gsap.timeline({ repeat: -1, paused: true });

    streaks.forEach((s, i) => {
      const at = i * CADENCE;
      // Travel and stretch on one tween; the opacity envelope is separate
      // because the streak brightens over the first third and is gone by
      // the end, rather than fading symmetrically.
      tl.fromTo(
        s.el,
        { y: 0, scaleY: 0.55, opacity: 0 },
        {
          y: () => -rise,
          scaleY: 1.35,
          duration: TRAVEL,
          ease: "power1.out",
        },
        at
      )
        .to(s.el, { opacity: 0.95, duration: TRAVEL * 0.3, ease: "power2.out" }, at)
        .to(
          s.el,
          { opacity: 0, duration: TRAVEL * 0.55, ease: "power2.in" },
          at + TRAVEL * 0.45
        );
    });

    // Pad the loop so the cadence stays even across the wrap.
    tl.set({}, {}, COUNT * CADENCE);

    // The travel is measured, so re-measure when the layout changes. The
    // tween reads `rise` through a function target, so it picks the new
    // value up on its next repeat without being rebuilt.
    ScrollTrigger.addEventListener("refresh", () => {
      rise = host.offsetHeight * RISE;
    });

    // Only burn frames while the card is actually on screen.
    ScrollTrigger.create({
      trigger: host,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => (self.isActive ? tl.play() : tl.pause()),
      onRefresh: (self) => (self.isActive ? tl.play() : tl.pause()),
    });
  });
}
