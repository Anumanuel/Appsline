/**
 * Small dotted globe for the bento card.
 *
 * The reference's "global network" card shows the same dotted sphere as
 * the hero WebGL globe, just smaller and cropped by the card edge. Rather
 * than stand up a second WebGL context for a decorative element, this
 * draws an orthographic projection of the same baked land mask into SVG —
 * identical geometry, a fraction of the cost.
 *
 * Fully deterministic: dots come from a fixed angular grid and the mask.
 */
import { isLand } from "../webgl/land-mask.js";

const SVG_NS = "http://www.w3.org/2000/svg";
const DEG = Math.PI / 180;


/**
 * Orthographic projection of a lon/lat onto the unit disc, viewed from
 * (lon0, lat0). Returns null when the point is on the far hemisphere.
 */
function project(lon, lat, lon0, lat0) {
  const p = lat * DEG;
  const l = (lon - lon0) * DEG;
  const p0 = lat0 * DEG;

  const cosc =
    Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l);
  if (cosc < 0) return null; // hidden behind the globe

  return {
    x: Math.cos(p) * Math.sin(l),
    y: Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l),
    depth: cosc,
  };
}

/**
 * @param {HTMLElement} host
 * @param {{lon0?:number, lat0?:number, rows?:number, equator?:number}} [opts]
 */
export function mountMiniGlobe(host, opts = {}) {
  const { lon0 = 34, lat0 = 12, rows = 58, equator = 116 } = opts;

  // Appsline's delivery locations, marked in the accent colour.
  const sites = [
    { lon: 55.27, lat: 25.2 },
    { lon: 58.55, lat: 23.61 },
    { lon: 76.27, lat: 9.93 },
  ];

  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", "-1.06 -1.06 2.12 2.12");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  const g = document.createElementNS(SVG_NS, "g");

  for (let row = 0; row < rows; row++) {
    const lat = 90 - ((row + 0.5) / rows) * 180;
    const count = Math.max(1, Math.round(equator * Math.cos(lat * DEG)));

    for (let i = 0; i < count; i++) {
      const lon = -180 + (i / count) * 360;
      if (!isLand(lon, lat)) continue;

      const p = project(lon, lat, lon0, lat0);
      if (!p) continue;

      const c = document.createElementNS(SVG_NS, "circle");
      c.setAttribute("cx", p.x.toFixed(4));
      // SVG y grows downward, the projection's grows up.
      c.setAttribute("cy", (-p.y).toFixed(4));
      // Shrink and fade toward the limb so the disc reads as a sphere.
      c.setAttribute("r", (0.0125 * (0.45 + 0.55 * p.depth)).toFixed(4));
      c.setAttribute("opacity", (0.22 + 0.55 * p.depth).toFixed(3));
      g.appendChild(c);
    }
  }

  svg.appendChild(g);

  sites.forEach((s) => {
    const p = project(s.lon, s.lat, lon0, lat0);
    if (!p) return;
    const c = document.createElementNS(SVG_NS, "circle");
    c.setAttribute("cx", p.x.toFixed(4));
    c.setAttribute("cy", (-p.y).toFixed(4));
    c.setAttribute("r", "0.032");
    c.setAttribute("class", "art-globe__site");
    svg.appendChild(c);
  });

  host.appendChild(svg);
}

/** Mounts every [data-mini-globe] on the page. */
export function initMiniGlobes(root = document) {
  root.querySelectorAll("[data-mini-globe]").forEach((el) => {
    if (el.childElementCount) return;
    mountMiniGlobe(el);
  });
}
