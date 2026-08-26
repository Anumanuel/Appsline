/**
 * Capability marquee.
 *
 * Three rows of chips drifting at different speeds in alternating
 * directions, as in the reference. Each track's content is duplicated
 * until it covers twice the visible width, then translated by exactly
 * one copy's width and wrapped — which is what makes the loop seamless
 * regardless of viewport size.
 */
import { gsap, ScrollTrigger, prefersReducedMotion } from "../utils/motion.js";

/** Capability chips — Appsline's actual service lines. */
const CAPABILITIES = [
  { label: "Structured Cabling", bg: "#e8f4fb", fg: "#0b6ea3", icon: "cable" },
  { label: "IT Infrastructure", bg: "#eef1fb", fg: "#3d51a8", icon: "server" },
  { label: "Video Surveillance", bg: "#fdf0ec", fg: "#b2542f", icon: "camera" },
  { label: "Unified Communication", bg: "#eefaf3", fg: "#2f7d54", icon: "phone" },
  { label: "Public Address", bg: "#fdf6e6", fg: "#a67c1e", icon: "speaker" },
  { label: "Access Control", bg: "#f4eefb", fg: "#7040a3", icon: "lock" },
  { label: "Time Attendance", bg: "#eaf6f8", fg: "#25798a", icon: "clock" },
  { label: "Network & Wi-Fi", bg: "#e8f4fb", fg: "#0b6ea3", icon: "wifi" },
  { label: "Server & Storage", bg: "#eef1fb", fg: "#3d51a8", icon: "server" },
  { label: "Firewall & Security", bg: "#fdeeee", fg: "#a83f3f", icon: "shield" },
  { label: "IT Support & AMC", bg: "#eefaf3", fg: "#2f7d54", icon: "support" },
  { label: "CCTV Systems", bg: "#fdf0ec", fg: "#b2542f", icon: "camera" },
];

const ICONS = {
  cable: '<path d="M4 3v18M9 3v18M14 3v18M19 3v18"/>',
  server:
    '<rect x="3" y="4" width="18" height="6" rx="1.6"/><rect x="3" y="14" width="18" height="6" rx="1.6"/><path d="M7 7h.01M7 17h.01"/>',
  camera: '<path d="M3 7.5 15 4v13L3 13.5z"/><circle cx="19" cy="10.5" r="2.4"/>',
  phone:
    '<path d="M4.5 5.5c0 8 6 14 14 14l2-3.4-4.2-2.2-2 2a14.6 14.6 0 0 1-6.2-6.2l2-2L7.9 3.5 4.5 5.5Z"/>',
  speaker:
    '<path d="M4 9.5v5h3.5L13 19V5L7.5 9.5H4Z"/><path d="M16.5 9a4.5 4.5 0 0 1 0 6"/>',
  lock:
    '<rect x="4" y="10" width="16" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.4 2"/>',
  wifi:
    '<path d="M2.5 8.5a15 15 0 0 1 19 0M6 12.5a10 10 0 0 1 12 0M9.5 16.5a5 5 0 0 1 5 0"/><circle cx="12" cy="20" r="1.1" fill="currentColor" stroke="none"/>',
  shield: '<path d="M12 2.5 20 6v6c0 5-3.4 8.6-8 10.5C7.4 20.6 4 17 4 12V6l8-3.5Z"/>',
  support:
    '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3.2"/><path d="M6 6l3.6 3.6M18 6l-3.6 3.6M6 18l3.6-3.6M18 18l-3.6-3.6"/>',
};

function chipHTML({ label, bg, fg, icon }) {
  return `<span class="chip">
    <span class="chip__icon" style="--chip-bg:${bg};--chip-fg:${fg}">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
           stroke-linecap="round" stroke-linejoin="round">${ICONS[icon] || ""}</svg>
    </span>${label}</span>`;
}

/** Rotates the list so each row starts on a different capability. */
function rotate(arr, by) {
  return arr.slice(by).concat(arr.slice(0, by));
}

export function initMarquee() {
  const root = document.getElementById("capabilityMarquee");
  if (!root) return;

  const tracks = root.querySelectorAll(".marquee__track");
  const loops = [];

  tracks.forEach((track, row) => {
    // Each row gets a different starting offset into the list so the
    // three rows never show the same chip in the same column.
    const items = rotate(CAPABILITIES, row * 4);
    const base = items.map(chipHTML).join("");
    track.innerHTML = base;

    const build = () => {
      const viewport = track.parentElement.offsetWidth;
      track.innerHTML = base;

      // At least two copies, always: the tween travels a full copy's
      // width, so with a single copy one end of the loop leaves the row
      // completely empty. Beyond that, duplicate until the track covers
      // twice the visible width so content is always entering.
      const copyWidth = track.scrollWidth;
      let copies = 1;
      while (copies < 2 || copyWidth * copies < viewport * 2) {
        track.insertAdjacentHTML("beforeend", base);
        copies++;
      }

      const shift = track.scrollWidth / copies;
      const speed = parseFloat(track.dataset.speed) || 38;
      const dir = parseFloat(track.dataset.dir) || -1;

      const tween = gsap.fromTo(
        track,
        { x: dir < 0 ? 0 : -shift },
        {
          x: dir < 0 ? -shift : 0,
          duration: shift / speed,
          ease: "none",
          repeat: -1,
        }
      );

      return tween;
    };

    let tween = prefersReducedMotion ? null : build();
    loops.push({ track, rebuild: () => { tween?.kill(); tween = build(); }, get tween() { return tween; } });
  });

  if (prefersReducedMotion) return;

  // Pause off-screen so we are not burning frames on an invisible loop.
  ScrollTrigger.create({
    trigger: root,
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) =>
      loops.forEach((l) => (self.isActive ? l.tween?.play() : l.tween?.pause())),
  });

  // Rebuild on resize — the number of copies depends on viewport width.
  let resizeId;
  window.addEventListener("resize", () => {
    clearTimeout(resizeId);
    resizeId = setTimeout(() => loops.forEach((l) => l.rebuild()), 240);
  });
}
