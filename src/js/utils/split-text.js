/**
 * Minimal word splitter for heading reveals.
 *
 * The reference reveals headings word by word — each word fades up from a
 * short offset below its baseline with a blur burning off. It stays visible
 * the whole time it is displaced, so the outer span exists only to give the
 * inner one a stable inline box, not to clip it (see `.word` in
 * _effects.scss). Explicit <br> tags in the markup are preserved so headings
 * keep wrapping where they should.
 */

/**
 * Wraps every word of `el` in `<span class="word"><span class="word__i">…`.
 * Returns the inner spans, which are what you animate.
 *
 * @param {HTMLElement} el
 * @returns {HTMLElement[]} the animatable inner word spans
 */
export function splitWords(el) {
  if (!el || el.dataset.split === "done") {
    return Array.from(el?.querySelectorAll(".word__i") || []);
  }

  const source = Array.from(el.childNodes);
  const frag = document.createDocumentFragment();

  source.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "BR") {
      // Keep author-controlled line breaks intact.
      frag.appendChild(node.cloneNode(true));
      return;
    }

    const text = node.textContent || "";
    text.split(/(\s+)/).forEach((token) => {
      if (!token) return;

      if (/^\s+$/.test(token)) {
        frag.appendChild(document.createTextNode(" "));
        return;
      }

      const outer = document.createElement("span");
      outer.className = "word";
      const inner = document.createElement("span");
      inner.className = "word__i";
      inner.textContent = token;
      outer.appendChild(inner);
      frag.appendChild(outer);
    });
  });

  el.replaceChildren(frag);
  el.dataset.split = "done";

  return Array.from(el.querySelectorAll(".word__i"));
}
