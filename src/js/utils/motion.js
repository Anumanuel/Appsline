/**
 * Shared GSAP setup.
 *
 * Everything imports gsap/ScrollTrigger from here so the plugin is
 * registered exactly once and the reduced-motion decision is made in
 * a single place.
 */
import { gsap } from "../../vendor/gsap/index.js";
import { ScrollTrigger } from "../../vendor/gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

export const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/**
 * Reveal timing, all fitted to the reference rather than chosen by feel.
 * The derivation is in analysis/ANIMATION-MAP.md; the short version:
 *
 * Sampling the bento's first card as it fades up (page stationary, so
 * nothing pollutes the curve) gives this opacity ramp, in seconds after
 * onset — and `power3.out` over ~1.3s tracks it almost exactly, while the
 * `expo.out` used previously front-loads badly:
 *
 *   t         0.09  0.17  0.26  0.42  0.59  0.75  1.00
 *   measured  0.25  0.38  0.50  0.68  0.82  0.90  0.98
 *   power3    0.18  0.32  0.46  0.66  0.82  0.91  0.97
 *   expo(old) 0.45  0.68  0.82  0.94  0.98  0.99  1.00
 *
 * Position settles far sooner than opacity — the card's remaining offset
 * runs 13 -> 6 -> 2 -> 1 -> 0 panel px in a third of a second, long
 * before it has finished brightening. So the two ride separate tweens.
 */
export const EASE_FADE = "power3.out";
export const EASE_LIFT = "power3.out";

export const FADE_DUR = 1.25;
export const LIFT_DUR = 0.6;

/** Reveal travel, from fitting that same offset series: ~17 panel px. */
export const LIFT = 38;

/**
 * Heading word stagger. The globe heading's seven words land 0.10s apart
 * (18.35 -> 18.89s); the hero's four are given a slower 0.15s.
 */
export const WORD_STAGGER = 0.1;
export const HERO_WORD_STAGGER = 0.15;

/**
 * Grid stagger, per unit of Euclidean distance from the top-left cell.
 * Bento 50% crossings relative to the first card: top-middle 0.40s,
 * bottom-left 0.43s, top-right 0.64s, bottom-right 0.73s — one step being
 * a little under 0.4s.
 */
export const GRID_STEP = 0.38;

/**
 * Row lists (faq, portal card rows) cascade strictly top to bottom rather
 * than by grid distance. The reference's faq bands settle at 0.25 / 0.33 /
 * 0.50 / 0.63 / 0.71s after the page stops — an even ~0.12s step.
 */
export const ROW_STEP = 0.12;

/**
 * Bullet items inside a use-case card. Measured on the reference's
 * "Manufacturing & Industrial" list at 30.70-31.08s, page stationary: the
 * items resolve one after another about a tenth of a second apart.
 */
export const BULLET_STEP = 0.1;

/**
 * A card's own children resolving in order. On the reference's product
 * cards the link lands 0.17s after the title with the body between them —
 * and both title and link are white, so this is a real stagger rather than
 * the body copy's lower contrast crossing the visible threshold later.
 */
export const CHILD_STEP = 0.08;

/**
 * Icon badges scale up as well as fade. Measured on the portal card's
 * badge, which grows from about 8.7 to 15 panel px over a quarter of a
 * second as it appears.
 */
export const ICON_SCALE_FROM = 0.6;

/**
 * Default ScrollTrigger start for section reveals — content begins
 * animating once its top edge is ~18% into the viewport, matching how
 * late the reference lets elements sit before they move.
 */
export const REVEAL_START = "top 82%";

gsap.defaults({ ease: EASE_FADE, duration: 0.9 });

ScrollTrigger.config({ ignoreMobileResize: true });

export { gsap, ScrollTrigger };
