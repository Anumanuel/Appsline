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
/*  Security card: light running a path                                */
/* ------------------------------------------------------------------ */

/**
 * A light travelling a closed path, trailing off behind it.
 *
 * Four copies of the same geometry, each one short dash inside a long gap,
 * all sharing a leading edge. Two details make it work.
 *
 * SEAMLESS WRAP. `stroke-dasharray: len (total - len)` makes the pattern
 * exactly one path-length, so a single dash and gap tile the closed path
 * perfectly and sweeping the offset by `total` is one clean revolution.
 * The obvious `len total` spelling gives a pattern longer than the path,
 * which visibly stutters once per lap.
 *
 * SHARED LEADING EDGE. With that dasharray a layer's dash runs from
 * `-offset` to `-offset + len`, so its leading edge sits at `len - offset`.
 * Setting `offset = len - p` puts every layer's leading edge on the same
 * point regardless of its length — which is what turns four lengths into
 * one hot head with progressively longer, fainter trails rather than four
 * dashes drifting apart. Hence one tween on a proxy writing four offsets,
 * instead of four tweens on four offsets.
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
 * The security card's whole motion budget: two lights on their own clocks,
 * a breath on the rings, a flicker on the bolt.
 *
 * The two run at 12s and 8.6s — deliberately not divisible, so they drift
 * against each other and never settle into a rhythm you can predict.
 */
function securityCard(root) {
  const guard = root.querySelector(".art-guard");
  if (!guard) return [];

  const loops = Array.from(guard.querySelectorAll("[data-orbit]"))
    .map(pathGlow)
    .filter(Boolean);

  // The wave: rings leaving the centre and dying at the outer band, one
  // every 1.6s so there is usually more than one in flight.
  //
  // Sized in scale, not radius: tweening `r` would re-path the circle
  // every frame and drop it off the compositor for no visual gain. The
  // circles are authored at r=60, so 1.87 lands them exactly on the
  // middle band at r=112. They stop there rather than running to the
  // outermost band at 145 — that carried the wave out over the heading,
  // and a wave that dies inside the disc stack reads as contained.
  //
  // Opacity peaks early and then decays over the rest of the trip. Fading
  // it linearly made each ring read as a hard disc expanding rather than
  // as energy losing itself into the dark.
  const ripples = Array.from(guard.querySelectorAll(".art-guard__ripple"));
  if (ripples.length) {
    const tl = gsap.timeline({ repeat: -1, paused: true });
    const STEP = 1.6;

    ripples.forEach((ring, i) => {
      const at = i * STEP;
      tl.fromTo(
        ring,
        { scale: 0.32, opacity: 0 },
        { scale: 1.87, duration: 4.8, ease: "power2.out" },
        at
      )
        .to(ring, { opacity: 0.45, duration: 0.7, ease: "power2.out" }, at)
        .to(ring, { opacity: 0, duration: 3.4, ease: "power1.in" }, at + 1.4);
    });

    tl.set({}, {}, ripples.length * STEP);
    loops.push(tl);
  }

  // Breath. ~1% over four and a half seconds is meant to be felt rather
  // than seen; larger reads as a pulse and competes with the lights.
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
        { opacity: 0.88 },
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

  // The travelling lights get their dash patterns from JS. With motion off
  // nothing would set one, so all four layers would stroke their whole
  // path and the shield would come out uniformly bright. The static state
  // parks one short lit stretch on each path from CSS instead.
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
