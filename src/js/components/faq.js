/**
 * FAQ accordion.
 *
 * The reference opens one panel at a time: the previous answer collapses
 * while the next expands, the open row lifts to a lighter surface and its
 * caret flips. Heights are animated with GSAP rather than a CSS
 * max-height hack so the easing matches the rest of the page.
 */
import { gsap, ScrollTrigger, prefersReducedMotion } from "../utils/motion.js";

export function initFaq() {
  const list = document.getElementById("faqList");
  if (!list) return;

  const items = Array.from(list.querySelectorAll(".faq__item"));
  const DURATION = prefersReducedMotion ? 0 : 0.55;

  const panelOf = (item) => item.querySelector(".faq__a");

  // Set the initial state without animating.
  items.forEach((item) => {
    const panel = panelOf(item);
    gsap.set(panel, { height: item.classList.contains("is-open") ? "auto" : 0 });
  });

  const close = (item) => {
    if (!item.classList.contains("is-open")) return;
    item.classList.remove("is-open");
    item.querySelector(".faq__q").setAttribute("aria-expanded", "false");
    gsap.to(panelOf(item), {
      height: 0,
      duration: DURATION,
      ease: "power2.inOut",
      onComplete: () => ScrollTrigger.refresh(),
    });
  };

  const open = (item) => {
    item.classList.add("is-open");
    item.querySelector(".faq__q").setAttribute("aria-expanded", "true");
    gsap.to(panelOf(item), {
      height: "auto",
      duration: DURATION,
      ease: "power2.out",
      onComplete: () => ScrollTrigger.refresh(),
    });
  };

  items.forEach((item) => {
    item.querySelector(".faq__q").addEventListener("click", () => {
      const wasOpen = item.classList.contains("is-open");
      items.forEach(close);
      if (!wasOpen) open(item);
    });
  });
}
