/**
 * Dotted globe (Three.js).
 *
 * Reconstructed from the reference frames:
 *   - continents are dots arranged in latitude bands (the rows are
 *     clearly visible across Africa and the Americas), not a random
 *     or Fibonacci scatter
 *   - the body is an opaque deep-violet sphere sitting just inside the
 *     dot radius, so dots on the far side are occluded rather than
 *     showing through
 *   - a large additive rim glow wraps the limb, brightest right at the
 *     edge and falling off outward
 *   - the sphere is cropped by the bottom of the section
 *
 * Geometry is fully deterministic — dot placement comes from the baked
 * land mask and a fixed angular step, never from Math.random().
 */
import * as THREE from "../../vendor/three.module.js";
import { isLand } from "./land-mask.js";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../utils/motion.js";

const R = 1; // globe radius in world units
const ROWS = 96; // latitude bands
const EQUATOR_DOTS = 200; // dots on the equator; other rows scale by cos(lat)

const FOV = 32;
// Framing: the reference sphere is ~740px across in a 1440-wide viewport,
// which is 64% of the 1150px stage the canvas occupies. Screen fraction
// for a unit-radius sphere is 2 / (z * tan(fov/2)) / 2, so z solves to ~5.45.
const CAM_Z = 5.8;

// Dot diameters in world units (globe radius = 1). At the framing above a
// 0.010 dot lands at roughly 5px on a 1150px stage, matching the
// reference's dot size relative to the sphere.
const DOT_SIZE = 0.0122;
const DOT_SIZE_ALT = 0.0142;
const SITE_SIZE = 0.034;

// With this projection a point at longitude L faces the camera when
// rotation.y == -90 - L (degrees). The reference frames Africa/Europe
// near 20E, so the globe starts at -110.
const BASE_ROT = (-110 * Math.PI) / 180;

/** Idle rotation, rad/s — measured off the reference (see the render loop). */
const SPIN_RATE = 0.155;

/** Signal arc timing: seconds in flight, then seconds before the next. */
const ARC_TRAVEL = 1.6;
const ARC_REST = 1.1;

/** Perspective term that converts a world-space size to pixels. */
const pixelScale = (height) =>
  height / (2 * Math.tan((FOV * Math.PI) / 360));

/** Appsline's actual delivery locations, highlighted on the globe. */
const SITES = [
  { name: "Dubai, UAE", lon: 55.27, lat: 25.2 },
  { name: "Muscat, Oman", lon: 58.55, lat: 23.61 },
  { name: "Ernakulam, India", lon: 76.27, lat: 9.93 },
];

/** Reads a CSS custom property so the globe follows the accent switch. */
function cssColor(name, fallback) {
  const v = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return new THREE.Color(v || fallback);
}

function lonLatToVec3(lon, lat, radius = R) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

// ---------------------------------------------------------------- dots

const DOT_VERT = /* glsl */ `
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  varying float vFacing;

  uniform float uPixelRatio;
  uniform float uScale;

  void main() {
    vColor = aColor;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

    // How square-on this dot is to the camera. Dots near the limb are
    // seen at a grazing angle, so they shrink and dim - which is what
    // gives the reference its soft edge falloff.
    vec3 worldNormal = normalize(mat3(modelMatrix) * normalize(position));
    vec3 toCamera = normalize(cameraPosition - (modelMatrix * vec4(position, 1.0)).xyz);
    vFacing = clamp(dot(worldNormal, toCamera), 0.0, 1.0);

    // aSize is a world-space diameter. uScale carries the perspective
    // term height / (2 * tan(fov/2)), so size / -z lands in pixels.
    gl_PointSize = aSize * uScale * uPixelRatio * (0.55 + 0.45 * vFacing) / -mvPosition.z;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const DOT_FRAG = /* glsl */ `
  varying vec3 vColor;
  varying float vFacing;

  void main() {
    // Round, softly antialiased point.
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);
    float alpha = smoothstep(0.5, 0.36, d);
    if (alpha < 0.01) discard;

    // Fade dots away as they turn past the limb.
    alpha *= smoothstep(0.0, 0.35, vFacing);

    gl_FragColor = vec4(vColor, alpha);
  }
`;

// --------------------------------------------------------- atmosphere

const ATMO_VERT = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const ATMO_FRAG = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform vec3 uInner;
  uniform vec3 uOuter;
  uniform float uPower;
  uniform float uStrength;
  uniform float uTopBias;

  void main() {
    vec3 viewDir = normalize(-vPosition);
    vec3 n = normalize(vNormal);

    // Rendered on the back faces, so the rim - where the surface turns
    // away - is where intensity peaks.
    float rim = 1.0 - abs(dot(n, viewDir));
    float i = pow(clamp(rim, 0.0, 1.0), uPower);

    // The reference is lit from above: the halo is strongest over the
    // northern limb and falls off toward the bottom of the sphere.
    float top = smoothstep(-0.9, 0.8, n.y);
    i *= mix(1.0, 0.35 + 0.85 * top, uTopBias);

    // Two-stop ramp: hot near the limb, cooler as it spreads outward.
    vec3 col = mix(uOuter, uInner, smoothstep(0.25, 0.95, i));

    gl_FragColor = vec4(col, i * uStrength);
  }
`;

// -------------------------------------------------------------- body

const BODY_FRAG = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vPosition;

  uniform vec3 uTop;
  uniform vec3 uBottom;

  void main() {
    vec3 viewDir = normalize(-vPosition);
    float facing = clamp(dot(normalize(vNormal), viewDir), 0.0, 1.0);

    // Slightly lifted toward the top of the sphere, deepening toward
    // the limb - matches the sampled #13081f body with its lighter crown.
    float v = smoothstep(-0.6, 0.9, normalize(vNormal).y);
    vec3 col = mix(uBottom, uTop, v);
    col *= 0.45 + 0.55 * facing;

    gl_FragColor = vec4(col, 1.0);
  }
`;

export function initGlobe() {
  const host = document.getElementById("globeCanvas");
  if (!host) return null;

  // Bail out cleanly if WebGL is unavailable — the CSS halo stands in.
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
  } catch (err) {
    console.warn("WebGL unavailable, falling back to the CSS halo.", err);
    return null;
  }

  const accent = cssColor("--accent", "#0095da");
  const accent2 = cssColor("--accent-2", "#54c5d0");
  const accentHot = cssColor("--accent-hot", "#d6f2ff");

  const size = () => ({
    w: host.clientWidth || 1,
    h: host.clientHeight || 1,
  });

  const { w, h } = size();

  renderer.setSize(w, h, false);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(FOV, w / h, 0.1, 100);
  camera.position.set(0, 0, CAM_Z);

  // The whole globe lives on a group so scroll/pointer can drive it.
  const group = new THREE.Group();
  // Tilt the axis so the northern continents sit where the reference
  // shows them rather than dead-on.
  group.rotation.z = -0.28;
  scene.add(group);

  // ---- body ----------------------------------------------------------
  const body = new THREE.Mesh(
    new THREE.SphereGeometry(R * 0.985, 64, 48),
    new THREE.ShaderMaterial({
      vertexShader: ATMO_VERT,
      fragmentShader: BODY_FRAG,
      uniforms: {
        // Sampled from the reference sphere: #13081f, lifting toward a
        // lighter violet crown.
        uTop: { value: new THREE.Color("#341a4c") },
        uBottom: { value: new THREE.Color("#12081d") },
      },
    })
  );
  group.add(body);

  // ---- dots ------------------------------------------------------------
  const positions = [];
  const colors = [];
  const sizes = [];

  const landColor = new THREE.Color("#e8e8f0");
  const dimColor = new THREE.Color("#aeaec4");

  for (let row = 0; row < ROWS; row++) {
    // Sample band centres so no dot lands exactly on a pole.
    const lat = 90 - ((row + 0.5) / ROWS) * 180;
    const count = Math.max(
      1,
      Math.round(EQUATOR_DOTS * Math.cos((lat * Math.PI) / 180))
    );

    for (let i = 0; i < count; i++) {
      const lon = -180 + (i / count) * 360;
      if (!isLand(lon, lat)) continue;

      const p = lonLatToVec3(lon, lat);
      positions.push(p.x, p.y, p.z);

      // Alternate bands sit a touch dimmer, which is what gives the
      // reference its subtle horizontal banding across the continents.
      const c = row % 2 === 0 ? landColor : dimColor;
      colors.push(c.r, c.g, c.b);
      sizes.push(row % 3 === 0 ? DOT_SIZE_ALT : DOT_SIZE);
    }
  }

  // Highlighted delivery locations
  SITES.forEach((s) => {
    const p = lonLatToVec3(s.lon, s.lat, R * 1.004);
    positions.push(p.x, p.y, p.z);
    colors.push(accent.r, accent.g, accent.b);
    sizes.push(SITE_SIZE);
  });

  const dotGeo = new THREE.BufferGeometry();
  dotGeo.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );
  dotGeo.setAttribute("aColor", new THREE.Float32BufferAttribute(colors, 3));
  dotGeo.setAttribute("aSize", new THREE.Float32BufferAttribute(sizes, 1));

  const dotMat = new THREE.ShaderMaterial({
    vertexShader: DOT_VERT,
    fragmentShader: DOT_FRAG,
    transparent: true,
    depthWrite: false,
    uniforms: {
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      uScale: { value: pixelScale(h) },
    },
  });

  const dots = new THREE.Points(dotGeo, dotMat);
  group.add(dots);

  // ---- signal arcs between the delivery locations ------------------------
  //
  // One site sends to the next along a curve that lifts off the surface.
  // Deliberately understated: a faint standing path so the route reads even
  // when idle, and a short bright head that travels it. Kept to one arc in
  // flight at a time so the globe stays a clean object rather than becoming
  // a light show.
  //
  // The travelling head is a draw-range window over a pre-built curve, not
  // new geometry per frame — the buffers are uploaded once.
  const ARC_POINTS = 120;
  const arcs = [];

  for (let i = 0; i < SITES.length; i++) {
    const from = SITES[i];
    const to = SITES[(i + 1) % SITES.length];

    const a = lonLatToVec3(from.lon, from.lat, R * 1.004);
    const b = lonLatToVec3(to.lon, to.lat, R * 1.004);

    // Lift the control point off the chord by an amount that grows with the
    // separation, so short hops stay tight to the surface and long ones bow.
    const mid = a.clone().add(b).multiplyScalar(0.5);
    const lift = 1 + 0.28 * a.distanceTo(b);
    mid.setLength(R * lift);

    const curve = new THREE.QuadraticBezierCurve3(a, mid, b);

    // A tube, not a Line. WebGL renders LineBasicMaterial at one device
    // pixel whatever `linewidth` says, and over routes this short — the
    // three sites sit within one region — a hairline is invisible rather
    // than subtle. A tube has real width and takes a shader.
    const geo = new THREE.TubeGeometry(curve, ARC_POINTS, 0.0055, 6, false);

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      uniforms: {
        uHead: { value: -1 },
        uRest: { value: accent.clone() },
        uHot: { value: accentHot.clone() },
      },
      vertexShader: /* glsl */ `
        varying float vU;
        void main() {
          // TubeGeometry lays u along the tube's length.
          vU = uv.x;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        varying float vU;
        uniform float uHead;
        uniform vec3 uRest;
        uniform vec3 uHot;

        void main() {
          // Faint standing path so the route reads even between signals.
          float base = 0.10;

          // A short bright head with a tail behind it, so the signal has a
          // direction rather than just blinking on.
          float d = uHead - vU;
          float head = smoothstep(0.16, 0.0, abs(d)) * step(-0.02, d);
          float tail = smoothstep(0.34, 0.0, d) * step(0.0, d) * 0.4;
          float lit = clamp(head + tail, 0.0, 1.0);

          vec3 col = mix(uRest, uHot, lit);
          float alpha = base + lit * 0.9;

          // uHead is parked outside 0..1 between signals; nothing lit then.
          gl_FragColor = vec4(col, alpha);
        }
      `,
    });

    const arc = new THREE.Mesh(geo, mat);
    group.add(arc);
    arcs.push(mat);
  }

  // ---- atmosphere -------------------------------------------------------
  // Two shells: a tight hot rim right at the limb, and a wide soft bloom
  // spreading well past it.
  const rim = new THREE.Mesh(
    new THREE.SphereGeometry(R, 64, 48),
    new THREE.ShaderMaterial({
      vertexShader: ATMO_VERT,
      fragmentShader: ATMO_FRAG,
      uniforms: {
        uInner: { value: accent.clone() },
        uOuter: { value: accent2.clone() },
        // Pinned near the limb, but not so pinched that it reads as a
        // drawn ring rather than atmosphere.
        uPower: { value: 4.2 },
        uStrength: { value: 1.45 },
        uTopBias: { value: 0.85 },
      },
      side: THREE.BackSide,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    })
  );
  rim.scale.setScalar(1.1);
  group.add(rim);

  // A second fresnel shell would be the obvious way to spread the glow
  // outward, but its own silhouette peaks at intensity 1 and draws a
  // visible ring at whatever radius it sits. The broad falloff is done
  // in CSS instead (.globe__halo), which fades to nothing with no edge.

  // ---- interaction ------------------------------------------------------
  const pointer = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  let visible = true;

  if (!prefersReducedMotion) {
    window.addEventListener(
      "pointermove",
      (e) => {
        target.x = (e.clientX / window.innerWidth - 0.5) * 2;
        target.y = (e.clientY / window.innerHeight - 0.5) * 2;
      },
      { passive: true }
    );
  }

  // The reference's globe is NOT scroll-linked. Tracking its dots across
  // 27 consecutive frames while the page is completely stationary gives
  // 0.885 panel px per frame with no drift at all — a free-running spin,
  // so there is no scroll term here to add one.
  const section = host.closest("section");
  if (section) {
    ScrollTrigger.create({
      trigger: section,
      start: "top bottom",
      end: "bottom top",
      onToggle: (self) => {
        visible = self.isActive;
      },
      // onToggle only fires on a change, so sync on refresh too —
      // otherwise a globe that starts off-screen keeps rendering.
      onRefresh: (self) => {
        visible = self.isActive;
      },
    });
  }

  // ---- loop --------------------------------------------------------------
  const clock = new THREE.Clock();
  let spin = 0;
  let arcTime = 0;

  const render = () => {
    if (!visible) return; // skip work entirely while off-screen

    const dt = clock.getDelta();
    // 21.2 panel px/s of surface travel at the sampled latitude against a
    // fitted globe radius of 174 panel px works out at ~0.155 rad/s — a
    // shade under 40s per revolution. The old 0.055 was nearly 3x too slow.
    if (!prefersReducedMotion) spin += dt * SPIN_RATE;

    pointer.x += (target.x - pointer.x) * 0.045;
    pointer.y += (target.y - pointer.y) * 0.045;

    group.rotation.y = BASE_ROT + spin + pointer.x * 0.22;
    group.rotation.x = pointer.y * 0.12;

    // One signal in flight at a time, cycling through the routes. Advancing
    // a draw-range window costs nothing per frame — the curve buffers were
    // uploaded once at build time.
    if (arcs.length && !prefersReducedMotion) {
      arcTime += dt;
      const span = ARC_TRAVEL + ARC_REST;
      const total = span * arcs.length;
      const cycle = arcTime % total;
      const active = Math.floor(cycle / span);
      const p = (cycle % span) / ARC_TRAVEL;

      arcs.forEach((mat, i) => {
        if (i !== active || p > 1) {
          mat.uniforms.uHead.value = -1;
          return;
        }
        // Ease the head so the signal leaves and arrives softly.
        mat.uniforms.uHead.value = p * p * (3 - 2 * p);
      });
    }

    renderer.render(scene, camera);
  };

  gsap.ticker.add(render);

  // ---- resize -------------------------------------------------------------
  const onResize = () => {
    const { w: nw, h: nh } = size();
    renderer.setSize(nw, nh, false);
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
    dotMat.uniforms.uScale.value = pixelScale(nh);
    dotMat.uniforms.uPixelRatio.value = Math.min(window.devicePixelRatio, 2);
  };

  const ro = new ResizeObserver(onResize);
  ro.observe(host);

  return {
    destroy() {
      gsap.ticker.remove(render);
      ro.disconnect();
      dotGeo.dispose();
      dotMat.dispose();
      renderer.dispose();
      host.replaceChildren();
    },
  };
}
