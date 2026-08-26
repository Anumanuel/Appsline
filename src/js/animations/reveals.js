/**
 * Section motion registry.
 *
 * There is deliberately NO global "every section slides up on enter" rule.
 * Auditing the reference section by section — comparing every frame of each
 * still window against that window's settled frame, so a fast scroll's motion
 * blur cannot be mistaken for a fade — shows the sections behave differently
 * from one another:
 *
 *   bento / products / tiers / industries   card grids, staggered by GRID
 *                                           DISTANCE from the top-left
 *   faq                                     rows arrive top to bottom, 0.12s
 *                                           apart — nothing else moves
 *   industries                              AND each card's bullet list
 *                                           staggers its own items, 0.10s
 *   portal                                  the card's rows stagger like the
 *                                           faq's
 *   contact                                 almost nothing moves except the
 *                                           glow, which climbs in intensity
 *   about                                   its artwork runs continuously
 *                                           (animations/embers.js)
 *   network                                 heading only; the globe spins on
 *                                           its own clock, not on scroll
 *
 * Headings everywhere use the per-word reveal. Everything else is listed
 * explicitly below, so adding motion to a section is a deliberate act rather
 * than a side effect of tagging an element.
 *
 * Measurements and method: analysis/ANIMATION-MAP.md.
 */
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  REVEAL_START,
  EASE_FADE,
  EASE_LIFT,
  WORD_STAGGER,
  GRID_STEP,
  ROW_STEP,
  BULLET_STEP,
  CHILD_STEP,
  ICON_SCALE_FROM,
  LIFT,
  FADE_DUR,
  LIFT_DUR,
} from "../utils/motion.js";
import { splitWords } from "../utils/split-text.js";

/**
 * What moves, per section. A section absent from this list gets its heading
 * reveal and nothing else — which is the correct behaviour for several of
 * them, not an oversight.
 */
const SECTIONS = [
  // Card-level only. Nothing in the reference's bento or tier cards
  // resolves at its own time — the card arrives as a unit.
  { id: "why", grid: ".bento__grid" },
  { id: "support", grid: ".tiers__grid" },

  // Products differ: a card's own children arrive in order. "Learn More"
  // lands 0.17s after the title even though both are white, so it is a
  // real inner stagger and not just the body copy's lower contrast
  // crossing the visible threshold later.
  {
    id: "solutions",
    grid: ".products__grid",
    children: [".product__icon", ".product__title", ".product__text", ".product__link"],
    scaleIn: ".product__icon",
  },

  // Cards stagger across the grid, and each card's bullets stagger inside it.
  { id: "industries", grid: ".industries__grid", nested: ".industry__list" },

  { id: "faq", rows: [".faq__list"] },

  // The portal card plays a small sequence of its own: the icon badge
  // scales up out of the dome, the title follows, then the rows cascade.
  {
    id: "portal",
    rows: [".portal__grid"],
    sequence: [
      { sel: ".portal__brandmark", at: 0, scale: 0.6 },
      { sel: ".portal__card-title", at: 0.17 },
    ],
  },

  { id: "contact", glow: ".edge-glow--bottom" },
];

/** Sections whose own elements are driven elsewhere and must not double up. */
const OWNED_ELSEWHERE = "#hero";

const outsideHero = (sel, root = document) =>
  Array.from(root.querySelectorAll(sel)).filter((el) => !el.closest(OWNED_ELSEWHERE));

/**
 * The per-word heading reveal, shared with the hero (which uses a slower
 * stagger). Position and opacity ride separate tweens because the reference
 * settles them at visibly different rates — the word is in place well before
 * it has finished brightening.
 */
export function revealWords(words, { stagger = WORD_STAGGER, at = 0 } = {}) {
  const tl = gsap.timeline();

  tl.fromTo(
    words,
    { y: 20, filter: "blur(7px)" },
    { y: 0, filter: "blur(0px)", duration: LIFT_DUR, ease: EASE_LIFT, stagger },
    at
  ).fromTo(
    words,
    { opacity: 0 },
    { opacity: 1, duration: FADE_DUR, ease: EASE_FADE, stagger },
    at
  );

  return tl;
}

/** Lift-and-fade for a set of blocks, with whatever stagger is asked for. */
function liftFade(tl, targets, stagger, at = 0) {
  tl.fromTo(
    targets,
    { y: LIFT },
    { y: 0, duration: LIFT_DUR, ease: EASE_LIFT, stagger },
    at
  ).fromTo(
    targets,
    { opacity: 0 },
    { opacity: 1, duration: FADE_DUR, ease: EASE_FADE, stagger },
    at
  );
  return tl;
}

/** One timeline per trigger, fired once when the trigger enters. */
function onEnter(trigger, build, start = REVEAL_START) {
  ScrollTrigger.create({ trigger, start, once: true, onEnter: build });
}

export function initReveals() {
  if (prefersReducedMotion) {
    // Explicit values, not clearProps. `clearProps: "all"` strips the very
    // inline opacity being set alongside it, dropping everything straight
    // back to the `.js [data-reveal] { opacity: 0 }` rule — which left
    // every section blank for anyone with reduced motion turned on.
    gsap.set("[data-reveal], [data-split]", { opacity: 1, y: 0, filter: "none" });
    return;
  }

  const claimed = new Set();

  // ---- Headings: word by word, everywhere -----------------------------
  outsideHero("[data-split]").forEach((heading) => {
    const words = splitWords(heading);
    gsap.set(heading, { opacity: 1 });
    onEnter(heading, () => revealWords(words));
  });

  // ---- Per-section behaviour ------------------------------------------
  SECTIONS.forEach((spec) => {
    const section = document.getElementById(spec.id);
    if (!section) return;

    // Card grids: staggered by Euclidean distance from the top-left cell.
    // `grid: "auto"` makes GSAP read the real laid-out rows and columns, so
    // spanning cells get the distance their position earns rather than the
    // one their source order implies. In the reference's bento the
    // top-middle and bottom-left cards land together — an ordering only a
    // grid stagger produces.
    if (spec.grid) {
      const grid = section.querySelector(spec.grid);
      const cards = grid ? Array.from(grid.querySelectorAll("[data-reveal]")) : [];
      if (cards.length) {
        cards.forEach((c) => claimed.add(c));
        onEnter(grid, () =>
          liftFade(gsap.timeline(), cards, {
            each: GRID_STEP,
            grid: "auto",
            from: "start",
          })
        );
      }

      // A card's own children resolving in order. Measured on the
      // reference's product cards: title, then body, then the link, about
      // 0.08s apart, starting once the card itself is on its way in.
      if (spec.children && cards.length) {
        cards.forEach((card) => {
          const kids = spec.children
            .map((s) => card.querySelector(s))
            .filter(Boolean);
          if (!kids.length) return;

          onEnter(card, () => {
            const tl = gsap.timeline();
            tl.fromTo(
              kids,
              { opacity: 0, y: 8 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: EASE_FADE,
                stagger: CHILD_STEP,
              },
              0.1
            );

            // The icon badge additionally scales up rather than only
            // fading — measured on the portal's badge, which grows from
            // roughly 0.6 to full over a quarter of a second.
            const icon = spec.scaleIn && card.querySelector(spec.scaleIn);
            if (icon) {
              tl.fromTo(
                icon,
                { scale: ICON_SCALE_FROM },
                { scale: 1, duration: 0.45, ease: EASE_LIFT },
                0.1
              );
            }
          });
        });
      }

      // Bullet lists inside each card run their own sequential stagger,
      // held back so a card's items arrive after the card itself.
      if (spec.nested && cards.length) {
        cards.forEach((card) => {
          const list = card.querySelector(spec.nested);
          const items = list ? Array.from(list.children) : [];
          if (!items.length) return;
          onEnter(card, () => {
            const tl = gsap.timeline();
            tl.fromTo(
              items,
              { opacity: 0, y: 10 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: EASE_FADE,
                stagger: BULLET_STEP,
              },
              0.2
            );
          });
        });
      }
    }

    // Row lists: strictly top to bottom. The reference's faq bands settle at
    // 0.25 / 0.33 / 0.50 / 0.63 / 0.71s after the page stops — an even
    // cascade down the stack, not a grid distance.
    (spec.rows || []).forEach((sel) => {
      const list = section.querySelector(sel);
      const rows = list ? Array.from(list.children) : [];
      if (!rows.length) return;
      rows.forEach((r) => claimed.add(r));
      onEnter(list, () => liftFade(gsap.timeline(), rows, ROW_STEP));
    });

    // An explicit little sequence of named elements at measured offsets,
    // for a one-off composition that no generic rule describes.
    if (spec.sequence) {
      const steps = spec.sequence
        .map((s) => ({ ...s, el: section.querySelector(s.sel) }))
        .filter((s) => s.el);

      if (steps.length) {
        onEnter(steps[0].el.closest("[data-reveal]") || section, () => {
          const tl = gsap.timeline();
          steps.forEach((s) => {
            tl.fromTo(
              s.el,
              { opacity: 0, ...(s.scale ? { scale: s.scale } : {}) },
              {
                opacity: 1,
                ...(s.scale ? { scale: 1 } : {}),
                duration: 0.5,
                ease: EASE_LIFT,
              },
              s.at
            );
          });
        });
      }
    }

    // The contact panel is otherwise almost static; what moves is the glow,
    // climbing from a peak luminance of 72 to a saturated 255 over ~0.8s
    // while the page is barely moving.
    if (spec.glow) {
      const glow = section.querySelector(spec.glow);
      if (glow) {
        onEnter(section, () =>
          gsap.fromTo(
            glow,
            { opacity: 0.18 },
            { opacity: 1, duration: 0.85, ease: "power2.inOut" }
          )
        );
      }
    }
  });

  // ---- Remaining single elements ---------------------------------------
  // Badges, leads and standalone cards that no section rule above claimed.
  outsideHero("[data-reveal]").forEach((el) => {
    if (claimed.has(el)) return;
    onEnter(el, () => liftFade(gsap.timeline(), [el], 0));
  });

  ScrollTrigger.refresh();
}
