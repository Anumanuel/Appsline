/**
 * Hero circuit board.
 *
 * Short glowing pulses run along the traces, radiating OUT from the central
 * chip. Each pulse is a cloned trace path drawn with a single dash:
 * `stroke-dasharray: SEG, length` and an offset animated from `SEG` (dash
 * sits just before the path start) to `-length` (dash has left the far
 * end). Duration is derived from path length so every pulse travels at the
 * same speed regardless of route length.
 *
 * The outward direction is a property of the markup, not of this file:
 * every path in index.html is authored starting at a chip pin, and the
 * animation always runs start → end. Reverse a path's `d` and that one
 * pulse will run backwards into the chip.
 */
import { gsap, ScrollTrigger, prefersReducedMotion } from "../utils/motion.js";

// Both measured off the reference by tracking the brightest pixel along the
// left horizontal trace from 5.21s to 5.88s: the lit segment spans ~35 panel
// px and its leading edge covers ~147 panel px/s. At 2.222 design px per
// panel px that is 78 and 327 respectively.
const SEG = 78; // visible pulse length, in path units
const SPEED = 330; // path units per second — constant across traces

export function initCircuit() {
  const root = document.getElementById("circuit");
  const host = document.getElementById("circuitPulses");
  if (!root || !host) return;

  const traces = root.querySelectorAll(".circuit__trace");
  if (!traces.length) return;

  // --- solder pads where each trace lands on a tile --------------------
  //
  // Every trace now starts at a chip pin and runs outward, so the pad goes
  // at the END of the path, not the start — a pad at index 0 would stack a
  // dot on top of each of the chip's own pins.
  //
  // Traces that leave the board (the two side exits and the four legs under
  // the chip) terminate on the frame edge rather than on a tile, and get no
  // pad: a solder dot sitting on the cut edge reads as a trace stopping in
  // mid-air, which is the exact thing the routing is built to avoid.
  const padLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");
  const [BOARD_W, BOARD_H] = [1440, 380];
  const EDGE = 4;

  traces.forEach((trace) => {
    const end = trace.getPointAtLength(trace.getTotalLength());
    const onEdge =
      end.x <= EDGE ||
      end.x >= BOARD_W - EDGE ||
      end.y <= EDGE ||
      end.y >= BOARD_H - EDGE;
    if (onEdge) return;

    const pad = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pad.setAttribute("cx", end.x);
    pad.setAttribute("cy", end.y);
    pad.setAttribute("r", "3");
    pad.setAttribute("class", "circuit__pad");
    padLayer.appendChild(pad);
  });

  host.parentNode.insertBefore(padLayer, host);

  if (prefersReducedMotion) return;

  // --- pulses ---------------------------------------------------------
  const timelines = [];

  traces.forEach((trace, i) => {
    const len = trace.getTotalLength();

    // Two strokes rather than one stroke plus an SVG filter: a wide,
    // faint halo under a bright thin core reads the same as a Gaussian
    // glow but costs ordinary stroke rasterisation. An feGaussianBlur
    // here would be re-evaluated every frame, on every trace, which is
    // the single most expensive thing this page could do.
    const halo = trace.cloneNode(false);
    halo.setAttribute("class", "circuit__pulse circuit__pulse--halo");

    const core = trace.cloneNode(false);
    core.setAttribute("class", "circuit__pulse");

    const pulse = [halo, core];
    pulse.forEach((p) => {
      p.style.strokeDasharray = `${SEG} ${len}`;
      p.style.strokeDashoffset = SEG;
      host.appendChild(p);
    });

    const travel = len / SPEED;

    // Deterministic offsets: each trace starts a fixed fraction later
    // and waits a fixed beat before repeating, so the board reads as
    // choreographed rather than noisy.
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1.1 + (i % 3) * 0.45,
      delay: i * 0.34,
    });

    tl.fromTo(
      pulse,
      { strokeDashoffset: SEG },
      { strokeDashoffset: -len, duration: travel, ease: "none" }
    );

    timelines.push(tl);
  });

  // Only run the pulses while the board is on screen.
  ScrollTrigger.create({
    trigger: root,
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) =>
      timelines.forEach((tl) => (self.isActive ? tl.play() : tl.pause())),
  });

  // --- chip breathing --------------------------------------------------
  const chip = root.querySelector(".circuit__chip");
  if (chip) {
    gsap.to(chip, {
      "--chip-glow": 1,
      duration: 2.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }

  // No parallax on the board. The reference holds the whole hero still as
  // it is covered — the headline does not move by more than a pixel or two
  // across the entire exit — so drifting the board against the scroll would
  // be motion the reference does not have.
}
