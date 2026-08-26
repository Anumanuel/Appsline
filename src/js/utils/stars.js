/**
 * Deterministic star field.
 *
 * Positions come from a fixed low-discrepancy sequence rather than
 * Math.random(), so the layout is identical on every load and between
 * machines — the geometry is reproducible, not accidental.
 */

const PHI = 0.6180339887; // golden-ratio conjugate

/**
 * Fills each [data-stars] element with `n` positioned spans.
 * @param {ParentNode} [root=document]
 */
export function mountStars(root = document) {
  root.querySelectorAll("[data-stars]").forEach((host) => {
    if (host.childElementCount) return;

    const count = parseInt(host.dataset.stars, 10) || 24;
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++) {
      // Additive recurrence on x, a second offset sequence on y —
      // gives an even, non-gridded scatter with zero randomness.
      const x = ((i + 1) * PHI) % 1;
      const y = ((i + 1) * PHI * PHI * 3) % 1;
      const size = 1 + (i % 3) * 0.6;

      const s = document.createElement("span");
      s.style.left = (x * 100).toFixed(2) + "%";
      s.style.top = (y * 100).toFixed(2) + "%";
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.setProperty("--o", (0.25 + (i % 5) * 0.15).toFixed(2));
      s.style.setProperty("--dur", 3 + (i % 4) + "s");
      s.style.setProperty("--delay", ((i % 7) * 0.4).toFixed(1) + "s");
      frag.appendChild(s);
    }

    host.appendChild(frag);
  });
}
