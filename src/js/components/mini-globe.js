/**
 * Small dotted globe for the bento card — rotating, on a canvas.
 *
 * The reference's "global network" card shows the same dotted sphere as the
 * hero WebGL globe, just smaller and cropped by the card edge, turning
 * slowly with its delivery markers fading in and out.
 *
 * WHY CANVAS, NOT SVG. This was an SVG of ~1200 <circle> elements, which is
 * fine for a still frame and hopeless for a moving one: every dot's cx/cy
 * would have to be written back to the DOM each frame, and each write is a
 * style invalidation. On a canvas the same 1200 points are a single path
 * batch per frame with no DOM involved at all. Standing up a second WebGL
 * context for a decorative card element would be the other extreme.
 *
 * Fully deterministic: dots come from a fixed angular grid and the baked
 * land mask, and the marker pulse is driven by elapsed time, not random.
 */
import { isLand } from "../webgl/land-mask.js";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../utils/motion.js";

const DEG = Math.PI / 180;

/** Idle rotation in degrees/second, matched to the hero globe's feel. */
const SPIN = 7.5;

/** Seconds for one full appear → hold → disappear cycle of a marker. */
const PULSE = 3.4;

/** Appsline's delivery locations. */
const SITES = [
  { lon: 55.27, lat: 25.2 }, // Dubai, UAE
  { lon: 58.55, lat: 23.61 }, // Muscat, Oman
  { lon: 76.27, lat: 9.93 }, // Ernakulam, India
];

/**
 * Land points as a flat [lon, sinLat, cosLat, ...] array, built once and
 * shared by every globe on the page.
 *
 * Latitude never changes as the globe spins, so its sine and cosine are
 * hoisted out of the render loop here — that is half the trigonometry per
 * point per frame, and it is the difference between this costing something
 * and costing nothing.
 */
let POINTS = null;

function landPoints(rows, equator) {
  if (POINTS) return POINTS;

  const pts = [];
  for (let row = 0; row < rows; row++) {
    const lat = 90 - ((row + 0.5) / rows) * 180;
    const count = Math.max(1, Math.round(equator * Math.cos(lat * DEG)));

    for (let i = 0; i < count; i++) {
      const lon = -180 + (i / count) * 360;
      if (!isLand(lon, lat)) continue;
      const p = lat * DEG;
      pts.push(lon, Math.sin(p), Math.cos(p));
    }
  }

  POINTS = new Float32Array(pts);
  return POINTS;
}

/** Smooth 0→1→0 envelope over one PULSE cycle, offset per marker. */
function pulseAt(time, index) {
  const phase = ((time / PULSE + index * 0.37) % 1 + 1) % 1;
  // Two eased halves rather than a raw sine, so a marker sits lit for a
  // beat instead of only touching full brightness for an instant.
  const tri = phase < 0.5 ? phase * 2 : (1 - phase) * 2;
  return tri * tri * (3 - 2 * tri);
}

/**
 * @param {HTMLElement} host
 * @param {{lon0?:number, lat0?:number, rows?:number, equator?:number}} [opts]
 */
export function mountMiniGlobe(host, opts = {}) {
  const { lon0 = 34, lat0 = 12, rows = 58, equator = 116 } = opts;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  host.appendChild(canvas);

  const pts = landPoints(rows, equator);

  let w = 0;
  let h = 0;
  let dpr = 1;

  const resize = () => {
    const r = host.getBoundingClientRect();
    if (!r.width || !r.height) return false;
    // Capped: this is a decorative element, and above 2x the extra pixels
    // buy nothing a viewer can see while costing the fill rate of a
    // full-resolution redraw every frame.
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = r.width;
    h = r.height;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return true;
  };

  const render = (time, spun) => {
    if (!w || !h) return;

    ctx.clearRect(0, 0, w, h);

    const R = (Math.min(w, h) / 2) * 0.94;
    const cx = w / 2;
    const cy = h / 2;

    const p0 = lat0 * DEG;
    const sinP0 = Math.sin(p0);
    const cosP0 = Math.cos(p0);

    // ---- land dots ----------------------------------------------------
    ctx.fillStyle = "#b9b9cc";

    for (let i = 0; i < pts.length; i += 3) {
      const l = (pts[i] - spun) * DEG;
      const sinP = pts[i + 1];
      const cosP = pts[i + 2];
      const cosL = Math.cos(l);

      // Angular distance from the view centre; negative is the far side.
      const cosc = sinP0 * sinP + cosP0 * cosP * cosL;
      if (cosc <= 0) continue;

      const x = cx + cosP * Math.sin(l) * R;
      const y = cy - (cosP0 * sinP - sinP0 * cosP * cosL) * R;

      // Shrink and fade toward the limb so the disc reads as a sphere.
      const r = 0.0125 * R * (0.45 + 0.55 * cosc);
      ctx.globalAlpha = 0.22 + 0.55 * cosc;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    // ---- delivery markers ----------------------------------------------
    // Drawn after the land so they sit on top of it, and skipped entirely
    // once they rotate onto the far hemisphere.
    SITES.forEach((s, i) => {
      const p = s.lat * DEG;
      const l = (s.lon - spun) * DEG;
      const sinP = Math.sin(p);
      const cosP = Math.cos(p);
      const cosL = Math.cos(l);

      const cosc = sinP0 * sinP + cosP0 * cosP * cosL;
      if (cosc <= 0) return;

      const x = cx + cosP * Math.sin(l) * R;
      const y = cy - (cosP0 * sinP - sinP0 * cosP * cosL) * R;

      // Fade with the pulse, and again as the marker approaches the limb,
      // so it dies away rather than being clipped off mid-brightness.
      const a = pulseAt(time, i) * Math.min(1, cosc * 2.2);
      if (a <= 0.01) return;

      const r = 0.026 * R;

      // Halo: a radial gradient, not a shadowBlur. Canvas shadows are
      // re-rasterised per draw call and are the single most expensive
      // thing available here.
      const grd = ctx.createRadialGradient(x, y, 0, x, y, r * 5.5);
      grd.addColorStop(0, `rgba(214,242,255,${0.5 * a})`);
      grd.addColorStop(0.35, `rgba(0,149,218,${0.34 * a})`);
      grd.addColorStop(1, "rgba(0,149,218,0)");
      ctx.globalAlpha = 1;
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(x, y, r * 5.5, 0, Math.PI * 2);
      ctx.fill();

      // Ring
      ctx.globalAlpha = a * 0.75;
      ctx.strokeStyle = "rgba(84,197,208,0.9)";
      ctx.lineWidth = Math.max(1, R * 0.004);
      ctx.beginPath();
      ctx.arc(x, y, r * 2.1, 0, Math.PI * 2);
      ctx.stroke();

      // Hot core
      ctx.globalAlpha = a;
      ctx.fillStyle = "#eaf7ff";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#b9b9cc";
    });

    ctx.globalAlpha = 1;
  };

  // ---- drive ------------------------------------------------------------

  resize();

  if (prefersReducedMotion) {
    // One frame, held. The card keeps its artwork; it just does not move.
    render(PULSE * 0.25, lon0);
    new ResizeObserver(() => {
      if (resize()) render(PULSE * 0.25, lon0);
    }).observe(host);
    return;
  }

  let elapsed = 0;
  let running = false;

  const tick = (_t, delta) => {
    elapsed += delta / 1000;
    render(elapsed, lon0 + elapsed * SPIN);
  };

  const start = () => {
    if (running) return;
    running = true;
    gsap.ticker.add(tick);
  };

  const stop = () => {
    if (!running) return;
    running = false;
    gsap.ticker.remove(tick);
  };

  // Only spend frames while the card is actually on screen.
  ScrollTrigger.create({
    trigger: host,
    start: "top bottom",
    end: "bottom top",
    onToggle: (self) => (self.isActive ? start() : stop()),
    onRefresh: (self) => (self.isActive ? start() : stop()),
  });

  new ResizeObserver(() => resize()).observe(host);
}

/** Mounts every [data-mini-globe] on the page. */
export function initMiniGlobes(root = document) {
  root.querySelectorAll("[data-mini-globe]").forEach((el) => {
    if (el.childElementCount) return;
    mountMiniGlobe(el);
  });
}
