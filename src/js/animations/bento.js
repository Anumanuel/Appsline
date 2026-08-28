/**
 * "Why choose Appsline" — card artwork behaviour.
 *
 * One thing lives here: travelling light along the circuit card's traces,
 * using the same dash-offset technique as the hero board so the two read as
 * one system rather than two unrelated effects.
 *
 * Everything else a card does, it does itself. The rotating globe owns its
 * canvas and ticker in components/mini-globe.js; the lit nodes, orb, spark
 * and storage glow are static CSS. That is deliberate — a card's artwork
 * should not need a JavaScript frame to look finished.
 *
 * There is deliberately NO pointer behaviour on these cards. An earlier
 * version had the artwork and copy layers follow the cursor by different
 * amounts for a parallax depth effect; it was removed on request. Nothing
 * on a card should move because the mouse moved — the card's own loops are
 * the only motion here. The reference agrees, for what it is worth: it has
 * no cursor in any of its 1115 frames.
 */
import { gsap, ScrollTrigger, prefersReducedMotion } from "../utils/motion.js";

/** Pulse length and speed, in path units, matched to the hero board. */
const SEG = 90;
const SPEED = 240;

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
/*  Shield pulse rings                                                 */
/* ------------------------------------------------------------------ */

/**
 * Rings expanding out of the security card's shield.
 *
 * One timeline driving all three rings on a stagger, rather than three CSS
 * keyframe animations: it pauses with the rest of the section when that
 * scrolls out of view, and it is simply never created under reduced
 * motion. A CSS animation would keep running off-screen, and the global
 * reduced-motion rule only collapses its duration — which snaps the rings
 * to their end state rather than leaving them alone.
 *
 * Scale and opacity only, so each ring stays on the compositor.
 */
function shieldPulse(root) {
  const rings = Array.from(root.querySelectorAll(".art-shield__pulse"));
  if (!rings.length) return null;

  const tl = gsap.timeline({ repeat: -1, paused: true });
  const STEP = 1.15;

  rings.forEach((ring, i) => {
    const at = i * STEP;

    tl.fromTo(
      ring,
      { scale: 0.72, opacity: 0 },
      { scale: 2.4, duration: 3.2, ease: "power2.out" },
      at
    )
      // Brightens as it leaves the shield, then thins out as it expands —
      // a ring that faded linearly read as a flat disc growing.
      .to(ring, { opacity: 0.6, duration: 0.5, ease: "power2.out" }, at)
      .to(ring, { opacity: 0, duration: 2.2, ease: "power1.in" }, at + 1);
  });

  tl.set({}, {}, rings.length * STEP);
  return tl;
}

/* ------------------------------------------------------------------ */

export function initBento() {
  const section = document.getElementById("why");
  if (!section) return;

  // The pulse rings start invisible so they can fade in as they expand.
  // With motion off nothing would ever raise them, so hand the section a
  // static state that holds one ring instead of leaving the shield bare.
  if (prefersReducedMotion) {
    section.classList.add("is-static");
    return;
  }

  const loops = [traceLight(section), shieldPulse(section)].filter(Boolean);

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
}
