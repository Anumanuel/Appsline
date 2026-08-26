/**
 * Segmented toggle above the support tiers.
 *
 * The reference switches the pricing block between two modes with a
 * sliding thumb. Here the two modes are AMC cover and one-off project
 * delivery, which changes each card's context line and suffix.
 */
import { gsap, prefersReducedMotion } from "../utils/motion.js";

const COPY = {
  amc: {
    suffix: "/ AMC",
    labels: [
      "Single site · business hours",
      "Multi-site · extended cover",
      "Regional estate · 24/7",
    ],
  },
  project: {
    suffix: "/ project",
    labels: [
      "Single site · fixed scope",
      "Multi-site · phased rollout",
      "Regional estate · programme",
    ],
  },
};

export function initTiers() {
  const toggle = document.getElementById("tierToggle");
  if (!toggle) return;

  const buttons = Array.from(toggle.querySelectorAll("button"));
  const cards = Array.from(document.querySelectorAll(".tier"));

  const apply = (mode) => {
    const copy = COPY[mode];
    if (!copy) return;

    cards.forEach((card, i) => {
      const label = card.querySelector(".tier__label");
      const suffix = card.querySelector(".tier__suffix");

      if (prefersReducedMotion) {
        if (label) label.textContent = copy.labels[i];
        if (suffix) suffix.textContent = copy.suffix;
        return;
      }

      // Cross-fade the text so the swap reads as a transition, not a jump.
      gsap
        .timeline({ delay: i * 0.05 })
        .to([label, suffix], { opacity: 0, y: -6, duration: 0.18, ease: "power2.in" })
        .add(() => {
          if (label) label.textContent = copy.labels[i];
          if (suffix) suffix.textContent = copy.suffix;
        })
        .fromTo(
          [label, suffix],
          { opacity: 0, y: 6 },
          { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" }
        );
    });
  };

  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.toggle("is-active", b === btn));
      toggle.classList.toggle("is-b", i === 1);
      apply(btn.dataset.mode);
    });
  });
}
