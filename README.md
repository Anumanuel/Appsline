# Appsline

A recreation of the design system shown in `website-reference.mp4`, rebuilt as a
real website carrying Appsline's own brand and business content.

The reference video is a screen recording of Gcore's "Inference at the Edge"
page. It controls the **visual design, layout, motion and scroll choreography**.
Appsline controls the **logo, brand colours, services, testimonials and company
information**.

---

## Running it

**Just double-click `index.html`.** It works straight off disk — no server
needed. (Internet is only used for the Google Font; without it the page falls
back to a system sans.)

To rebuild after editing source:

```bash
npm install
npm run build      # land mask + SCSS + JS bundle
```

During development:

```bash
npm run watch      # SCSS  -> src/css/main.css on save
npm run watch:js   # JS     -> src/js/bundle.js on save
npm run serve      # http://localhost:5173
```

### Why the JS is bundled

`index.html` loads `src/js/bundle.js` as a **classic script**, not
`type="module"`. ES modules are blocked by CORS on the `file://` protocol, so a
module build leaves the page stuck behind the preloader — a black screen with a
single dot — when someone opens the file by double-clicking it. esbuild rolls
`src/js/**` plus the vendored libraries into one IIFE that works from both
`file://` and a server. The module sources are unchanged; only the entry point
differs.

There is also an inline failsafe in `index.html`: if the bundle fails to load or
throws before booting, it tears down the preloader and un-hides every element
after 6 seconds, so a script problem can never leave a blank page. A `<noscript>`
block does the same when JS is off entirely.

---

## The accent colour

**Default is Appsline's own palette** — blue `#0095DA` and teal `#54C5D0`,
sampled straight from the pixels of the official logo. Every glow, beam,
gradient and shadow keeps the reference's exact geometry, position and
intensity; only the hue is the brand's.

The glow ramps deliberately run through *both* logo colours — deep blue → blue →
teal → white — rather than tinting a single hue. The reference's orange passes
through several tones on its way out, and a one-hue ramp reads flat next to it.

The reference's orange is one attribute away:

```html
<html lang="en" data-accent="reference">
```

Both modes share identical geometry. The token blocks live in
`src/scss/_tokens.scss`, and the WebGL globe reads the accent from the same CSS
custom properties at runtime, so it follows the switch too.

---

## Structure

```
index.html                  the page
src/
  scss/
    _tokens.scss            design tokens measured off the reference frames
    _base.scss              reset, layout primitives, buttons, badges
    _effects.scss           beams, grid, glows, star field, reveal primitives
    components/             brand lockup, nav, marquee
    sections/               one file per section
    main.scss               entry point
  css/main.css              compiled output (do not edit)
  js/
    main.js                 boot order (source entry)
    bundle.js               built output loaded by index.html (do not edit)
    utils/                  gsap setup, smooth scroll, word splitter, stars
    animations/             preloader, hero, circuit board, scroll reveals
    components/             nav, marquee, faq, tiers, mini globe
    webgl/                  three.js globe + baked land mask
  assets/logo/              see "The logo" below
  vendor/                   gsap, three, lenis
tools/
  build-land-mask.mjs       bakes Natural Earth land polygons into a bitmask
  serve.mjs                 dependency-free static server
  shoot.mjs                 headless-Chrome screenshot harness
  compare.ps1              stacks a reference frame above a build screenshot
analysis/
  ANIMATION-MAP.md          every measured timing, and how it was measured
  scroll-track.mjs          per-band scroll displacement, frame by frame
  reveal-probe.mjs          separates a fade from a translate
  audit.mjs                 per-section: what animates, measured only while
                            the page is stationary so blur cannot fake a fade
  cell-audit.mjs            element-level: 12x8 grid, so a small badge or icon
                            animating alone shows up instead of averaging away
  find-bounds.mjs           locates the website inside the mockup frame
  track-probe.mjs           follows one element — animating, or just scrolling?
  settle-probe.mjs          deviation from settled, per band, over a window
  edge-probe.mjs            brightness contour, for the contact glow
  spin-probe.mjs            sub-pixel horizontal drift, for the globe
  pulse-probe.mjs           brightest-pixel tracking, for the circuit pulses
```

---

## The logo

The official Appsline logo (`appsline-lockup.png`, downloaded unmodified from
appslineme.com) is a **stacked** lockup — mark above wordmark — and only 264x181,
which is too small for the horizontal placements this design needs. No SVG is
published. So the lockup was rebuilt horizontally from its own two halves, with
nothing redrawn by hand:

- **`appsline-mark.svg`** — the seven bars, re-cut as vectors from geometry
  measured off the source file (uniform 11.7 x 74.5 with fully rounded ends,
  21.55 pitch, bars 3 and 5 raised by 12.2) in the sampled brand colours
  `#0095DA` / `#54C5D0`. Pure geometry, so this is exact and stays crisp at
  any size.
- **`appsline-wordmark.png`** — the original "appsline" artwork cropped straight
  out of the source file and upscaled. The letterforms are never re-typeset.

On dark surfaces the wordmark is driven to white with `brightness(0) invert(1)`
rather than being substituted, so the letterforms are preserved there too.
Proportions, spacing and aspect ratio are held in `components/_brand.scss`.

---

## Where the numbers came from

Values in `_tokens.scss` are measurements, not guesses. The site panel inside
the video's presentation frame is a 648x410 crop at (26, 148) of the 720x720
video; everything was measured off that crop and mapped to a 1440px design
width. For example:

- hero headline cap height 43px → `--fs-h1` ≈ 60px
- section heading cap height 36px → `--fs-h2` ≈ 46px
- page side padding 5.2% of viewport → `--gutter`
- hero grid pitch ≈ 240px, circuit tile 78px, central chip 121px
- accent `#FF3F00`, light surface `#FAFAF8`, dark surface `#070707` — sampled
  from the video's pixels, not eyeballed

The circuit board's trace coordinates are in a 1440x620 viewBox where one unit
equals one CSS pixel at a 1440px viewport, so the measured tile and chip
positions carry over directly.

### Timings, likewise

Motion was measured the same way, decoding the panel to raw greyscale and
working on the pixels. Two of the methods are worth knowing about:

**Scroll displacement** comes from matching each frame against the previous one
over a range of vertical shifts, split into horizontal bands. The bands are the
point — when the top band's displacement disagrees with the bottom's, something
is moving at its own rate rather than the whole page translating, which is what
first exposed the section stacking.

**Reveals are matched against the settled frame instead**, by normalised
cross-correlation. Matching a frame against its neighbour cannot tell a fade
from a translate, because a shape emerging from black has no previous position
to lock onto — the best "shift" it finds is noise. Against the finished frame,
a pure fade holds its offset at zero the whole way while a translate walks in;
and because the correlation is amplitude-invariant, a half-faded frame still
scores its true alignment highest. That is what recovered the reveal's 13 → 6 →
2 → 1 → 0 px settle, and what proved headings fade rather than unmask (a glyph
at 50 % brightness still correlating at 0.94 is present and dim, not clipped).

One caution learned the hard way: a fixed probe rectangle will happily record a
heading *scrolling into it* and report a beautiful 0.17 s "fade" that never
happened. Check the magnified frames before believing a curve.

---

## Motion

GSAP + ScrollTrigger throughout, with Lenis for smooth scrolling sharing GSAP's
ticker so scrubbed animations stay locked to the scroll position.

Every timing here is measured off the reference rather than chosen by feel.
**[`analysis/ANIMATION-MAP.md`](analysis/ANIMATION-MAP.md) is the working**, with
the numbers and how they were recovered; `analysis/*.mjs` are the tools that
produced them (per-band scroll displacement, normalised cross-correlation
against a settled frame, rotation and pulse trackers).

| Behaviour | Where |
| --- | --- |
| Globe holds centre-frame while the page scrolls past | `sections/_globe.scss` |
| Preloader: dot → ring → mark → typed wordmark → wipe | `animations/preloader.js` |
| Hero entrance and per-word headline reveal | `animations/hero.js` |
| Circuit pulses travelling along traces | `animations/circuit.js` |
| Rising ember streaks in the about artwork | `animations/embers.js` |
| Heading word reveals and grid stagger | `animations/reveals.js` |
| Full-bar → floating-pill navbar morph | `components/nav.js` + `_nav.scss` |
| Three-row capability marquee | `components/marquee.js` |
| Accordion, tier toggle | `components/faq.js`, `components/tiers.js` |
| Dotted globe and atmosphere | `webgl/globe.js` |

### Sections do not all behave the same

There is deliberately no global "every section slides up on enter" rule. The
registry at the top of `animations/reveals.js` lists, per section, what moves —
so adding motion somewhere is a deliberate act rather than a side effect of
tagging an element. Auditing the reference section by section shows they
genuinely differ:

| Section | What moves |
| --- | --- |
| hero | headline by word, then badge → lead → actions → board; pulses run on |
| about | heading and copy — **plus artwork that never stops** (ember streaks) |
| bento / tiers | card grid, staggered by **grid distance** — cards arrive as units |
| products | card grid **and each card's children in order** (title → body → link), icon **scales up** as it fades |
| use cases | card grid **and a bullet stagger inside each card** |
| portal | the card plays its own sequence: icon scales out of the dome → title → rows cascade |
| faq | **rows cascade top to bottom, 0.12 s apart** — nothing else |
| contact | almost static; what animates is the **glow's intensity** |
| network | heading only — the globe spins on its own clock, not on scroll |

### Getting the crop right

The website inside the mockup is `crop=650:388:35:166`. An earlier eyeballed
crop kept a strip of **device bezel** on three sides, and that bezel carries
its own lighting animation from the After Effects composition — so it read as a
region that never stops moving and contaminated every edge-adjacent
measurement. `analysis/find-bounds.mjs` finds the real edges by keeping only
pixels that swing between the page's dark and light sections.

Related trap: the true width is 651, but **ffmpeg silently rounds an odd crop
width down to 650**. Reading the dump back as 651-wide shears every row by a
pixel per line and quietly wrecks every match. Check
`filesize % (width*height) == 0`.

### The measurement trap worth knowing about

The reference is a 24 fps capture, so during a fast scroll everything is
smeared by motion blur and its measured contrast collapses — which looks
exactly like an opacity fade. The FAQ heading's apparent 0.17 s "reveal" was
precisely this; its contrast tracks scroll speed almost perfectly (20 px/frame
→ 0.17, 2 px/frame → 0.99). Any reveal measured *during* a scroll is suspect,
so the per-section audit only measures windows where the page is stationary.

### The four that matter most

**One thing holds still, and it is the globe.** An earlier pass read the
reference's dark↔light boundaries as a general rule — pin the outgoing section,
let the incoming one slide up over it — and implemented it as a
`utils/section-stack.js` that classified every section by its rendered colour
and made the qualifying ones `position: sticky`.

**That has been removed.** It was the wrong generalisation and it cost more
than it bought: sections falling back to `relative` outside their sticky range
were displaced by their own offsets, the z-index juggling meant a stuck section
could paint over the one after it, `getBoundingClientRect` reported painted
rather than document positions so every ScrollTrigger below the fold measured
against a lie, and the whole arrangement fought Lenis on every frame. The page
is plain document flow now.

What the reference actually holds is the globe, and only the globe. Stepping
17.5s → 22.5s: the copy clears the sphere's apex on the way in, then scrolls
away while the *whole* sphere sits centred and pixel-identical frame to frame,
until the white portal panel rises over it. That is one sticky stage inside one
section (`sections/_globe.scss`), not a page-wide layout system.

**No parallax and no zoom anywhere.** During a mid-section scroll every
horizontal band displaces by exactly the page amount, frame after frame
(12/12/12, 11/11/11, 7/7/7). And searching shift *and* scale between
consecutive frames returns **1.0000 on every frame** of a complete scroll
gesture in two different sections — with a control that reads 1.0000 on a
static window, so the method does not fabricate a scale. The only
continuously-moving things are the circuit pulses, the globe's spin and the
about card's embers, none of them scroll-linked.

Two measurements that *look* like zoom and are not — a strip spanning the globe
handover (the sphere held, the panel moving, which is mathematically a scale
about a point near the top), and the globe itself (a sphere sampled through a
fixed strip genuinely narrows as it moves).

**Every section gets a full-viewport floor.** `.section` carries
`min-height: 100svh` with its content centred in whatever space is left; a
section with more content than that simply grows past it. The floor is what
stops faq, products and the contact band from reading as cramped strips wedged
between tall neighbours. `svh`, not `vh` — on mobile `vh` is the *largest*
viewport, so a 100vh section is taller than the screen the whole time the
browser chrome is showing.

The globe is the exception at `215svh`: one viewport to bring the copy through
and one for the sphere to hold, which is what the reference gives it (its globe
section alone runs over two viewports).

**Headings reveal word by word**, 0.10 s apart (0.15 s in the hero). Each word
arrives *below* its baseline, dim and blurred, then rises and sharpens — and it
is fully visible the whole time it is displaced, so there is no clipping line
box and the travel is ~20 px, not a line height.

**Grids stagger by grid distance from the top-left**, not source order. In the
reference's bento the top-middle and bottom-left cards land together (0.40 s
and 0.43 s after the first) while the top-right lands later — an ordering only
a Euclidean grid stagger produces. Unit step ≈ 0.38 s.

**Reveals are time-based, fired once on enter — never scrubbed.** The bento
proves it: the page is completely stationary from 14.93 s yet cards keep
arriving until 16.9 s.

The hero is handed off at the moment the preloader's wipe starts, not on
completion, so the page is already moving as the panel clears.

### Frame budget

Measured by sweeping the whole page three times through Lenis and recording
every rAF delta:

| Pass | median | p90 | p99 | frames > 50ms |
| --- | --- | --- | --- | --- |
| 1 (cold) | 17.0 | 23.8 | 67.7 | 13 |
| 2 (warm) | 16.7 | 17.8 | 37.8 | 4 |
| 3 (warm) | 16.7 | 17.6 | 27.3 | 3 |

Steady state is a locked 16.7ms. What is left on the first pass is one-time
rasterisation as each section is painted for the first time, and it decays.

Two notes for anyone profiling this again. **Warm up before comparing
anything** — an earlier A/B here "improved" the median from 76.7ms to 16.9ms by
hiding a selector that did not exist, because it was really measuring the cost
of the first measurement. Any feature attribution needs a restore control: with
→ without → with again. And **layer promotion is not a free win** in a
software-composited headless browser: `will-change: transform` on the bento's
dot globe made it three times slower there, so the measurements cannot decide
between an SVG and a canvas for it, and it stays as the SVG it always was.

`prefers-reduced-motion` is honoured everywhere: the preloader is skipped, the
marquee holds still, reveals resolve instantly and the globe stops spinning.
Note that resolving them uses explicit values rather than `clearProps: "all"` —
clearProps strips the very opacity being set beside it and drops everything
back to the `.js [data-reveal] { opacity: 0 }` rule.

---

## Determinism

No `Math.random()` anywhere in the layout. The star field uses a golden-ratio
additive recurrence, the globe's dots come from a fixed angular grid filtered
through a baked land mask, the circuit traces are hand-placed coordinates, and
the marquee's copy count is derived from measured widths. Every load renders
identically.

---

## The globe

`tools/build-land-mask.mjs` rasterises Natural Earth 1:50m land polygons into a
1024x512 one-bit mask (scanline fill, even-odd so inland seas are handled) and
writes it as a base64 ES module. At runtime the globe walks a 96-band latitude
grid, keeps the points that fall on land, and draws them as GPU points with a
shader that shrinks and fades them toward the limb. An opaque body sphere sits
just inside the dot radius so far-side dots are occluded, and a single
back-face fresnel shell supplies the rim glow.

Re-run `npm run mask` only if the source data or resolution changes.

The bento card's smaller globe uses the same mask through an orthographic SVG
projection (`components/mini-globe.js`) rather than a second WebGL context.

---

## Screenshot harness

`tools/shoot.mjs` drives headless Chrome over the DevTools Protocol.

```bash
node tools/shoot.mjs                          # all checkpoints @1440x900
node tools/shoot.mjs --w 390 --h 844 --out shots/mobile
node tools/shoot.mjs --only globe             # one checkpoint
node tools/shoot.mjs --seq 500,1200,1900      # capture the load animation
node tools/shoot.mjs --ys 1306,1800,2206      # capture at absolute scroll positions
node tools/shoot.mjs --ys 2206 --burst 0,400,800,1200   # one position, over time
node tools/shoot.mjs --reduced                # the prefers-reduced-motion path
node tools/shoot.mjs --evalfile tools/probe.js  # run JS against the live page
node tools/shoot.mjs --url "file:///.../index.html"   # exercise file:// directly
```

`--ys` exists because a selector cannot land you part-way through the globe's
sticky hold — every position across it anchors to the same element top. Give it
absolute scroll positions instead when you need to watch that section play.

`--burst` jumps once and then photographs at a list of delays, which is the
only way to watch a stagger actually stagger. It names each file by the elapsed
time it *measured*, not the time requested — a screenshot round-trip costs well
over 100 ms, and counting only the sleeps makes every reveal look faster than
it is.

Do **not** pass `--sw` for routine captures. It forces SwiftShader, which
rasterises the entire page on the CPU: frame times go from ~33ms to ~160ms,
GSAP's lag smoothing then clamps every frame, and animations get photographed
mid-flight. Headless renders the globe fine on its default backend.

Checkpoints are anchored to selectors, not page fractions, so they stay valid as
the page's height changes. Scrolling goes through the page's Lenis instance
(exposed as `window.__appsline`) because Lenis owns the scroll position.

To compare a build screenshot against the moment in the video it corresponds to:

```powershell
./tools/compare.ps1 -Time 7.0 -Shot 01-hero
```

That writes a stacked reference-above-build image to `shots/compare/`.
Requires ffmpeg on PATH.

---

## Layout and structure fixes

**Removing the section stacking fixed three bugs at once.** The "gap after the
FAQ" was an occlusion — a still-stuck `industries` section painting over an
unpositioned `.cta-band`. Stuck sections stayed stuck past their own handover,
because `position: sticky` is bounded by the containing block and not by the
next sibling, so they sat behind everything below them and were invisible only
by z-index and opaque backgrounds. And the offsets could not be written as
inline `top`: outside its sticky range a section falls back to `relative`, on
which `top` does not pin but *displaces* — a leftover `top: -2723px` dragged
industries three thousand pixels up the page and blanked four mobile viewports
while desktop looked fine. None of these can recur; the mechanism is gone.

**The globe's sticky stage is back.** The same pass removed it, on the reading
that the reference "does not hold the globe" — but it does, from 20.5s to
22.0s, with the sphere centred and its dots identical frame to frame. Without
the stage the section was barely taller than the canvas, so the sphere was
always sliding past the fold and never got a frame of its own: it read as
permanently half-cut. The stage is sticky again and the canvas is sized off the
viewport (`min(128svh, 104vw, 1180px)`, sphere ≈ 60% of that) rather than a
fixed pixel value, so the whole sphere is in frame at any window size — checked
at 1440×900, 1440×700 and 390×844.

**Lenis was missing its stylesheet.** The library ships CSS its docs treat as
required and the page never loaded it, so `html.lenis` kept a UA-resolved
height instead of the content height and — the one you could feel —
`.lenis-stopped { overflow: clip }` was absent, meaning the preloader's
`lenis.stop()` did not actually block native scrolling. The first wheel of the
page moved it natively, then Lenis took over and interpolated from somewhere
else. It is inlined in `_base.scss` now, so the page still makes one stylesheet
request.

Also corrected: `smoothTouch: false` in the Lenis options, an option name
dropped at 1.0. Unknown keys are ignored silently, so it had been doing nothing
since it was written; the current name is `syncTouch`.

## The hero circuit

The board is a 1440x380 viewBox holding 12 traces. **Every trace starts at a
chip pin and runs outward** — 4 off the left edge, 4 off the right, 4 straight
down from the underside. That direction is the whole design: the pulse
animation always runs a path from start to end, so authoring the paths from
the chip is what makes the light radiate out of it rather than crawl into it.
Reverse a path's `d` and that one pulse runs backwards.

Pins sit at `y 137,159,181,203` on the sides and `x 687,709,731,753`
underneath — 22 apart, centred on a chip spanning 660-780 by 110-230. **There
is no top row**: the reference's package has three populated edges and a bare
top. They are 16 long by 6 thick, deliberately much heavier than the 1.3-wide
traces they feed, so they read as metal tabs against hairline copper; at 3
they vanished into the traces. A trace therefore starts at the pin's outer
tip — `x 644/796`, `y 246` — not at the chip edge.

**Routing is 45-degree, not orthogonal.** Each run breaks with a diagonal
rather than a right angle. A corner is a quadratic whose control point sits
where the two runs would have intersected, backed off 14 units along each —
which is why diagonal endpoints carry `.1` decimals, 14 units along a
45-degree line being 9.9 per axis.

Pins 3 and 4 on each side break at the **same x** (560 / 880). Two 45-degree
lines turning at a common x stay parallel, separated by the pin pitch over
root two — 15.6 units — and that is what makes them read as one bundle peeling
off the chip. Turning them at different x opened the gap to 44 and the bundle
fell apart into two unrelated diagonals. The middle pin on each side runs dead
straight to its tile, giving the bundle something to be symmetrical about.

**One coordinate system, enforced.** The chip and tiles are DOM elements and
the traces are SVG, so they only stay welded together if both scale by the
same factor. Two rules make that true, and both are load-bearing:

- `.circuit`'s `aspect-ratio` **must** equal the viewBox's ratio. With the two
  in step, `preserveAspectRatio="none"` resolves to a uniform scale. Give the
  box a different ratio — as the old responsive rules did, at 900/640 and
  700/700 — and the axes scale differently: traces stretch, the square chip
  does not, and every pin comes away from its trace.
- The chip and tiles are sized as **percentages of the board**, never in px.
  A px clamp agrees with the board's scale at exactly one width.

The pins themselves are drawn in the SVG for the same reason. As CSS flex
children of the chip they were measured in px against a diagram measured in
viewBox units.

`tools/probe-circuit.js` asserts all three invariants — uniform scale, chip
edges on their pins, and every trace starting on a pin:

```
node tools/shoot.mjs --evalfile tools/probe-circuit.js --only __none__
```

The board is 380 units rather than the 620 it used to be because it has to fit
above the fold: at 1440x900 the hero leaves ~380px between the copy and the
bottom of the viewport, and the old board ran 299px past it. The six traces
that leave through the floor land within a few pixels of the fold, so the SVG
carries a `mask-image` fading its last 12% — without it they end on a hard
horizontal cut that reads as clipping rather than as design.

### If you are tempted to make sections sticky again

Read "Removing the section stacking fixed three bugs at once" above first. The
short version: a section that is sticky only part of the time is a section
whose offset displaces it the rest of the time, whose paint order has to be
hand-managed, and whose position `getBoundingClientRect` misreports to every
ScrollTrigger on the page. The reference holds exactly one thing — the globe —
and that is done with one `position: sticky` on one stage inside one section,
with no JavaScript involved at all.
