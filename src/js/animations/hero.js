/**
 * Hero entrance.
 *
 * Beat sheet read off the reference frame by frame, timed from the moment
 * the preloader's wipe finishes at 2.63s:
 *
 *   +0.00  the page is already lit — the beam is present from the first
 *          revealed frame and simply brightens; it does not sweep in
 *   +0.21  nav links arrive left to right, 0.083s apart
 *   +0.25  the badge
 *   +0.42  the headline, word by word, 0.15s apart
 *   +1.10  the lead
 *   +1.35  the buttons and the circuit board together
 *
 * There is deliberately no scroll parallax here — anything that drifts
 * the hero on scroll is motion the reference does not have.
 */
import {
  gsap,
  prefersReducedMotion,
  EASE_FADE,
  EASE_LIFT,
  HERO_WORD_STAGGER,
  FADE_DUR,
  LIFT_DUR,
} from "../utils/motion.js";
import { splitWords } from "../utils/split-text.js";
import { revealWords } from "./reveals.js";

export function initHero() {
  const hero = document.getElementById("hero");
  if (!hero) return;

  const badge = hero.querySelector(".badge");
  const title = hero.querySelector(".hero__title");
  const lead = hero.querySelector(".hero__lead");
  const actions = hero.querySelector(".hero__actions");
  const circuit = hero.querySelector(".circuit");
  const beam = hero.querySelector(".beam");
  const grid = hero.querySelector(".grid-bg");
  const navItems = document.querySelectorAll("#nav .nav__item, #nav .nav__actions > *");

  const words = title ? splitWords(title) : [];

  if (prefersReducedMotion) {
    // Explicit values rather than clearProps — see the note in reveals.js.
    gsap.set([badge, title, lead, actions, circuit], { opacity: 1, y: 0, filter: "none" });
    gsap.set(words, { opacity: 1, y: 0, filter: "none" });
    return;
  }

  // These are hero-owned, so take them out of the generic reveal pass.
  [badge, lead, actions].forEach((el) => el && el.removeAttribute("data-reveal"));
  title?.removeAttribute("data-split");

  gsap.set(title, { opacity: 1 });

  const tl = gsap.timeline();

  // The beam only brightens — measured at partial strength in the very
  // first frame after the wipe and full by +0.5s, with no displacement.
  tl.fromTo(beam, { opacity: 0.35 }, { opacity: 1, duration: 0.7, ease: "power2.out" }, 0);
  tl.fromTo(grid, { opacity: 0 }, { opacity: 1, duration: 1.6, ease: EASE_FADE }, 0.1);

  // Nav links land one at a time, left to right: Products 2.836, Pricing
  // 2.920, Resources 3.045, Partners 3.086, Why 3.170 — then the two
  // right-hand actions later, at 3.545 and 3.587.
  if (navItems.length) {
    tl.fromTo(
      navItems,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.5, ease: EASE_LIFT, stagger: 0.083 },
      0.21
    );
  }

  tl.fromTo(
    badge,
    { y: 14, opacity: 0 },
    { y: 0, opacity: 1, duration: LIFT_DUR, ease: EASE_LIFT },
    0.25
  );

  tl.add(revealWords(words, { stagger: HERO_WORD_STAGGER }), 0.42);

  tl.fromTo(lead, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: FADE_DUR, ease: EASE_FADE }, 1.1);

  tl.fromTo(
    actions,
    { y: 16, opacity: 0 },
    { y: 0, opacity: 1, duration: FADE_DUR, ease: EASE_FADE },
    1.35
  );

  tl.fromTo(
    circuit,
    { y: 40, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.4, ease: EASE_FADE },
    1.35
  );

  return tl;
}
