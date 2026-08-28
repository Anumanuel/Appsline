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
/*  Security card: glows travelling invisible paths                    */
/* ------------------------------------------------------------------ */

/**
 * A small light running around a path, leaving a tail behind it.
 *
 * The path itself is never stroked. Each glow is four copies of the same
 * geometry, and every copy is one short dash inside a gap as long as the
 * rest of the path — so a handful of units are lit and the remaining ~95%
 * is not painted. On the shield that is the entire point: the contour is a
 * trajectory, not a drawn shape.
 *
 * Two details make this work.
 *
 * SEAMLESS WRAP. `stroke-dasharray: len (total - len)` makes the pattern
 * exactly one path-length long, so a single dash and a single gap tile the
 * closed path perfectly. Sweeping the offset by `total` is then one clean
 * revolution with no seam. The obvious `len total` spelling gives a pattern
 * longer than the path and visibly stutters once per lap.
 *
 * SHARED LEADING EDGE. With that dasharray, a layer's dash occupies
 * `-offset` to `-offset + len`, so its leading edge is at `len - offset`.
 * Setting `offset = len - p` puts every layer's leading edge on the same
 * point p regardless of its length — so the four lengths become a hot head
 * with progressively longer, fainter trails behind it, rather than four
 * dashes drifting apart. That is why one tween drives a proxy value and
 * writes the offsets, instead of four tweens on four offsets.
 */
function pathGlow(group) {
  const layers = Array.from(group.querySelectorAll("[data-len]"));
  if (!layers.length) return null;

  const total = layers[0].getTotalLength();
  if (!total) return null;

  layers.forEach((el) => {
    const len = Number(el.dataset.len);
    el.style.strokeDasharray = `${len} ${total - len}`;
    el.style.strokeDashoffset = String(len);
  });

  const head = { p: 0 };

  return gsap.to(head, {
    p: total,
    duration: Number(group.dataset.dur) || 12,
    ease: "none",
    repeat: -1,
    paused: true,
    onUpdate() {
      for (const el of layers) {
        el.style.strokeDashoffset = String(Number(el.dataset.len) - head.p);
      }
    },
  });
}

/**
 * The security card's whole motion budget: two glows on their own clocks,
 * a breath on the rings, and a flicker on the bolt.
 *
 * The two glows are given durations that do not divide into one another
 * (13s and 9.4s), so they drift apart and never settle into a visible
 * rhythm — the card should look almost still and only reveal the movement
 * when watched.
 */
function securityCard(root) {
  const guard = root.querySelector(".art-guard");
  if (!guard) return [];

  const loops = Array.from(guard.querySelectorAll("[data-orbit]"))
    .map(pathGlow)
    .filter(Boolean);

  // Breath. 1% of scale over 9 seconds is meant to be felt rather than
  // seen; anything larger reads as a pulse and fights the travelling glow
  // for attention.
  const rings = guard.querySelector(".art-guard__rings");
  if (rings) {
    loops.push(
      gsap.fromTo(
        rings,
        { transformOrigin: "50% 50%", scale: 1 },
        {
          scale: 1.012,
          duration: 4.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          paused: true,
        }
      )
    );
  }

  // The bolt holds still. Brightness only — no rotation, no scale.
  const bolt = guard.querySelector(".art-guard__bolt");
  if (bolt) {
    loops.push(
      gsap.fromTo(
        bolt,
        { opacity: 0.86 },
        {
          opacity: 1,
          duration: 3.1,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          paused: true,
        }
      )
    );
  }

  return loops;
}

/* ------------------------------------------------------------------ */

export function initBento() {
  const section = document.getElementById("why");
  if (!section) return;

  // The travelling glows get their dash patterns from JS, so with motion
  // off nothing would give them one and all four layers would paint the
  // whole path — drawing the very shield this card must not show. The
  // static state parks one dim segment on each path from CSS instead.
  if (prefersReducedMotion) {
    section.classList.add("is-static");
    return;
  }

  const loops = [traceLight(section), ...securityCard(section)].filter(Boolean);

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
