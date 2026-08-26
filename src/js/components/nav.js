/**
 * Navigation.
 *
 * The reference's header has two states and morphs between them on
 * scroll: a full-bleed transparent bar sitting under an announcement
 * strip, and a centred floating dark pill once the page has moved.
 * The width/height/radius transition lives in CSS (`.nav.is-pill`);
 * this module owns the state machine, the announcement strip lifting
 * away, and the mobile sheet.
 */
import { ScrollTrigger } from "../utils/motion.js";

/**
 * How far the page must scroll before the bar collapses into the pill.
 *
 * Not a small fixed offset: in the reference the bar is still full at
 * 7.5s with the hero largely on screen, and the pill has formed by 8.09s,
 * the moment the incoming white panel has taken about 85% of the
 * viewport. The trigger is "the hero has been scrolled past", so it is
 * derived from the hero's height rather than hard-coded.
 */
const PILL_FRACTION = 0.85;
const PILL_FALLBACK = 80;

function pillThreshold() {
  const hero = document.getElementById("hero");
  const h = hero?.offsetHeight || 0;
  return h ? h * PILL_FRACTION : PILL_FALLBACK;
}

export function initNav() {
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  const sheet = document.getElementById("navSheet");
  if (!nav) return;

  let isPill = false;

  const setState = (pill) => {
    if (pill === isPill) return;
    isPill = pill;
    nav.classList.toggle("is-pill", pill);
    // The announcement strip is a sibling of the header, so it is driven
    // from the root. Bar, strip and pill all change together — in the
    // reference they are a single 0.13s moment, not a scrubbed range.
    document.documentElement.classList.toggle("is-nav-pill", pill);
  };

  // Read the scroll position directly rather than deriving the state
  // from a ScrollTrigger range. A numeric start/end on a body trigger is
  // ambiguous enough that the header ended up stuck in its pill state at
  // the very top and reverted to the bar at the very bottom; a plain
  // threshold cannot be wrong in either direction.
  //
  // Lenis scrolls the window itself, so native scroll events fire for
  // both wheel input and programmatic scrollTo.
  let queued = false;
  let threshold = pillThreshold();
  const sync = () => {
    queued = false;
    setState(window.scrollY > threshold);
  };
  const onScroll = () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(sync);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  ScrollTrigger.addEventListener("refresh", () => {
    threshold = pillThreshold();
    sync();
  });

  // Covers first paint and a reload partway down the page.
  sync();

  // --- mobile sheet -------------------------------------------------
  if (burger && sheet) {
    const close = () => {
      nav.classList.remove("is-open");
      sheet.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    burger.addEventListener("click", () => {
      const open = !sheet.classList.contains("is-open");
      nav.classList.toggle("is-open", open);
      sheet.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });

    sheet.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  }
}
