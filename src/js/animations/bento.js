/**
 * "Why choose Appsline" — card artwork behaviour.
 *
 * Three things live here, and they are deliberately different from each
 * other because the cards are different:
 *
 *   1. Travelling light along the circuit card's traces. The same
 *      dash-offset technique the hero board uses, so the two read as the
 *      same system rather than two unrelated effects.
 *   2. The accent streaks sweep along their own axis instead of sitting
 *      still — a bar of light moving through the card, with a bright head
 *      and an opacity envelope so it arrives and leaves rather than
 *      blinking.
 *   3. Pointer depth: the artwork layer and the copy layer follow the
 *      cursor by different amounts, which is what produces the sense of
 *      depth. Interpolated with quickTo so it eases rather than snapping.
 *
 * A note on provenance, because the rest of this codebase is measured off
 * the reference: the reference video has no cursor in any of its 1115
 * frames, so the pointer behaviour here is not derived from it. It was
 * asked for directly. Everything is transform/opacity only, and it is
 * switched off entirely for coarse pointers and reduced motion.
 */
import { gsap, ScrollTrigger, prefersReducedMotion } from "../utils/motion.js";

/** Pulse length and speed, in path units, matched to the hero board. */
const SEG = 90;
const SPEED = 240;

/** How far the layers shift at the edge of a card, in px. */
const DEPTH_ART = 16;
const DEPTH_COPY = 6;

/* ------------------------------------------------------------------ */
/*  Travelling light along the trace card                              */
/* ------------------------------------------------------------------ */

function traceLight(root) {
  const svg = root.querySelector(".art-traces");
  if (!svg) return null;

  const paths = Array.from(svg.querySelectorAll("path"));
  if (!paths.length) return null;

  const tl = gsap.timeline({ repeat: -1, paused: true });

  paths.forEach((path, i) => {
    const len = path.getTotalLength();

    // Two strokes: a wide faint halo under a bright thin core. Reads as a
    // glow without an SVG filter, which would be re-evaluated every frame.
    const halo = path.cloneNode(false);
    halo.setAttribute("class", "art-traces__pulse art-traces__pulse--halo");
    const core = path.cloneNode(false);
    core.setAttribute("class", "art-traces__pulse");

    [halo, core].forEach((p) => {
      p.style.strokeDasharray = `${SEG} ${len}`;
      p.style.strokeDashoffset = String(SEG);
      svg.appendChild(p);
    });

    // Deterministic offsets, so the card reads as choreographed rather
    // than noisy, and is identical on every load.
    tl.fromTo(
      [halo, core],
      { strokeDashoffset: SEG },
      { strokeDashoffset: -len, duration: len / SPEED, ease: "none" },
      i * 0.55
    );
  });

  // Pad the loop so the cadence stays even across the wrap.
  tl.set({}, {}, paths.length * 0.55 + 1.2);
  return tl;
}

/* ------------------------------------------------------------------ */
/*  Sweeping light bars                                                */
/* ------------------------------------------------------------------ */

function streakSweep(root) {
  const streaks = Array.from(root.querySelectorAll(".art-streak"));
  if (!streaks.length) return null;

  const tl = gsap.timeline({ repeat: -1, paused: true });

  streaks.forEach((el, i) => {
    // Travel is expressed against the streak's own length, so a short bar
    // and a long one move a proportionate distance.
    const h = el.offsetHeight || 60;
    const at = i * 0.9;

    tl.fromTo(
      el,
      { yPercent: -60, opacity: 0 },
      { yPercent: 130, duration: 2.1, ease: "power1.inOut" },
      at
    )
      .to(el, { opacity: 1, duration: 0.5, ease: "power2.out" }, at)
      .to(el, { opacity: 0, duration: 0.7, ease: "power2.in" }, at + 1.4);
  });

  tl.set({}, {}, streaks.length * 0.9 + 1.4);
  return tl;
}

/* ------------------------------------------------------------------ */
/*  Comet streaks                                                      */
/* ------------------------------------------------------------------ */

/**
 * A comet runs along its OWN axis, not the card's.
 *
 * Each streak is already rotated by `--a` about its left edge, so animating
 * `x` moves it along the direction it points — which is the whole reason
 * the rotation lives in CSS and the travel lives here. Writing the travel
 * as a rotated translate in JS would mean recomputing the vector per
 * element and fighting the transform CSS has already applied.
 *
 * `xPercent` rather than `x`, so a 78px comet and a 132px one cover
 * proportionate ground instead of the short one crawling.
 */
function cometSweep(root) {
  const comets = Array.from(root.querySelectorAll(".art-comet"));
  if (!comets.length) return null;

  const tl = gsap.timeline({ repeat: -1, paused: true });

  comets.forEach((el, i) => {
    // Spread the starts so the section never flashes them all at once.
    const at = i * 1.35;

    tl.fromTo(
      el,
      { xPercent: -120, opacity: 0 },
      { xPercent: 150, duration: 2.6, ease: "power1.inOut" },
      at
    )
      .to(el, { opacity: 1, duration: 0.55, ease: "power2.out" }, at + 0.15)
      .to(el, { opacity: 0, duration: 0.85, ease: "power2.in" }, at + 1.75);
  });

  tl.set({}, {}, comets.length * 1.35 + 1.6);
  return tl;
}

/* ------------------------------------------------------------------ */
/*  Pointer depth                                                      */
/* ------------------------------------------------------------------ */

function pointerDepth(card) {
  const art = card.querySelector(".bento__art");
  const head = card.querySelector(".bento__head");
  if (!art && !head) return;

  const to = (el, prop, amount) =>
    el ? gsap.quickTo(el, prop, { duration: 0.55, ease: "power3.out" }) : null;

  const artX = to(art, "x");
  const artY = to(art, "y");
  const headX = to(head, "x");
  const headY = to(head, "y");

  const onMove = (e) => {
    const r = card.getBoundingClientRect();
    // -1..1 from the card's centre.
    const nx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const ny = ((e.clientY - r.top) / r.height - 0.5) * 2;

    artX?.(nx * DEPTH_ART);
    artY?.(ny * DEPTH_ART);
    // The copy moves less than the artwork; that difference is the depth.
    headX?.(nx * DEPTH_COPY);
    headY?.(ny * DEPTH_COPY);
  };

  const reset = () => {
    artX?.(0);
    artY?.(0);
    headX?.(0);
    headY?.(0);
  };

  card.addEventListener("pointermove", onMove);
  card.addEventListener("pointerleave", reset);
}

/* ------------------------------------------------------------------ */

export function initBento() {
  const section = document.getElementById("why");
  if (!section) return;

  // Comets start at opacity 0 so they can fade in on their sweep. With
  // motion off nothing would ever raise it, so hand the card a static
  // state instead of leaving the artwork with invisible pieces in it.
  if (prefersReducedMotion) {
    section.classList.add("is-static");
    return;
  }

  const loops = [
    traceLight(section),
    streakSweep(section),
    cometSweep(section),
  ].filter(Boolean);

  if (loops.length) {
    // Only burn frames while the section is on screen.
    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => loops.forEach((t) => (self.isActive ? t.play() : t.pause())),
      onRefresh: (self) => loops.forEach((t) => (self.isActive ? t.play() : t.pause())),
    });
  }

  // Pointer depth only where there is a real pointer to follow.
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    section.querySelectorAll(".bento__card").forEach(pointerDepth);
  }
}
