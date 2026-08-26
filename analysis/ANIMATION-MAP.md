# Animation map — measured from `website-reference.mp4`

Source: 720x720, 23.976 fps, 46.50 s, 1115 frames.

## The panel crop, and why it had to be corrected

The website inside the mockup is **`crop=650:388:35:166`**. 1 panel px =
2.215 design px at a 1440 viewport; the reference's viewport aspect is 1.68,
i.e. about 1440x858.

Earlier passes used an eyeballed `648:410:26:148`, which was 9 px out in x and
18 px in y and kept a strip of **device bezel** on three sides. That bezel
carries its own slow lighting animation from the After Effects composition, so
it reads as a region that never stops moving and it contaminated every
edge-adjacent motion measurement — at one point producing a "continuous
animation" along the entire bottom of the use-cases section that was purely
the frame.

`analysis/find-bounds.mjs` locates the real edges without eyeballing: the
mockup's background moves too, so temporal variance alone is not enough;
instead it keeps only pixels that swing between the page's **dark and light
sections** (min < 70 and max > 200 across the video). The boundary is sharp —
the qualifying fraction of a row goes 0.00 → 0.89 between y=165 and y=166.

One trap worth recording: the true width is 651, but **ffmpeg silently rounds
an odd crop width down to 650**. Reading the dump back as 651-wide shears
every row by one pixel per line, which quietly wrecked every match — the
tracker's residual went from "652 frames at 0" to almost nothing under 3.
Always check `filesize % (w*h) == 0`.

Total travel 4754 panel px ≈ 10 530 design px.

Everything below is a measurement, not an impression. Method notes are in
`analysis/` — `scroll-track.mjs` (per-band displacement), `reveal-probe.mjs`
(normalised cross-correlation against the settled frame, which separates a
fade from a translate), `spin-probe.mjs`, `pulse-probe.mjs`.

### Regenerating the working set

The probes read a raw greyscale dump of the panel, which is ~283 MB and so is
not kept. Recreate it, and the per-frame motion signal, with:

```bash
ffmpeg -i website-reference.mp4 \
  -vf "crop=648:410:26:148,format=gray" -f rawvideo analysis/panel.gray

ffmpeg -i website-reference.mp4 \
  -vf "crop=648:410:26:148,format=gray,tblend=all_mode=difference,signalstats,metadata=print:file=analysis/motion.txt" \
  -f null -

node analysis/scroll-track.mjs > analysis/scroll.tsv
node analysis/scroll-report.mjs gestures
```

`analysis/sheets/` holds the frame-by-frame contact sheets the visual calls
were made from; those are cheap to regenerate with `ffmpeg`'s `tile` filter.

---

## Global

### Smooth scroll
Velocity after the last wheel event decays by a constant factor of **0.667
per 2 video frames** (0.0834 s), i.e. **0.78 % of the velocity survives one
second**. Fitting Lenis's default expo easing `1.001 - 2^(-10t)`:
`2^(-10/D) = 0.0078` → **D = 1.43 s**. Previous value 1.05 settled too
abruptly.

Gestures travel 500–960 design px each, peaking at ~2 700 design px/s.

### Section transitions — pinned ONLY across a colour change

There are **two** transitions, and which one applies depends on whether the
colour environment changes. Frame-stepping every boundary:

**Colour crossing — the outgoing section is pinned.** It freezes on screen and
the incoming section slides up over it, covering it from the bottom. No fade,
no scale, no parallax on the way out.

| Boundary | Evidence |
| --- | --- |
| hero → about (dark→light, 7.51–8.55 s) | the hero H1 sits at panel y 84–86 and never moves; it disappears only because the white panel's edge passes it |
| about → bento (light→dark, 10.80–11.55 s) | the white heading travels 12 panel px while the page scrolls over 100 |
| globe → portal (dark→light, 22.60–23.30 s) | the globe's dots are in the same place in every frame while the white panel covers them from below |

**Same colour — ordinary document flow.** Nothing holds.

| Boundary | Evidence |
| --- | --- |
| tiers → faq (dark→dark, 33.60–34.90 s) | the tiers heading and cards scroll straight up and off the top of the viewport |
| portal → use cases (light→light, 27.10–28.35 s) | the portal card scrolls up and off the top |

So a section is pinned only when the section that follows it is a different
colour environment. Of this build's ten sections that is four — hero, about,
network and industries. Pinning all ten, as an earlier pass did, invents a
hold the reference does not have at two thirds of its boundaries.

Implemented as `position: sticky` on qualifying sections only, with the offset
computed from each section's height so a tall one sticks when its *bottom*
arrives rather than pinning the instant its top hits zero.

### No zoom — tested directly, not inferred

Worth its own section because it is the most natural thing to assume from
watching, and because every earlier tracker here searched vertical shift alone,
so a scale would only have raised a residual and been read as "something else".

`analysis/scale-seq.mjs` searches shift **and** scale between consecutive
frames, over 0.984–1.016 in 0.002 steps — fine enough to resolve a zoom slow
enough to look smooth (5 % over a second is 0.2 % per frame).

| Window | Result |
| --- | --- |
| still window (control) | 1.0000 every frame — the method does not fabricate scale |
| products mid-scroll | **1.0000 every frame**, ncc 0.93–0.997 |
| use cases mid-scroll | **1.0000 every frame**, ncc 0.90–0.999 |
| hero during its exit | scale **1.000**, dy **0**, ncc **1.000** for a third of a second |

Two measurements that look like zoom but are not:

- Searching a strip that spans **two** sections during a transition returns a
  drifting scale (cumulative 1.23). That is an artifact: one section is held
  and the other is translating, and a single scale-plus-shift cannot describe
  two layers — content still at the top and moving at the bottom *is*
  mathematically a scale about a point near the top.
- The globe reads 0.998 per frame while scrolling. That is a sphere sampled
  through a fixed strip: as it moves, the strip crosses different latitudes and
  the content inside genuinely narrows. Flat card content in the same test
  reads exactly 1.0000.

What reads as "zoom" while watching is the stacking: a held section with the
next sliding over it composites like a push.

### Sections are not 100vh

Total content is 5787 panel px against a 388 px viewport — **14.9 viewports for
11 sections plus the footer, so 1.24 viewports each on average**, and the globe
section alone is over two. This build averages 1.29, which is already the same
proportion.

### No parallax, and no scroll-linked image transforms

Worth stating plainly because it is a common assumption. During a mid-section
scroll with nothing pinned (gesture 9, 20.10–21.36 s), every horizontal band
of the panel displaces by *exactly* the same amount as the page, frame after
frame:

```
t=20.312  page=12  top=12  mid=12  bot=12
t=20.395  page=11  top=11  mid=11  bot=11
t=20.646  page= 7  top= 7  mid= 7  bot= 7
t=20.896  page= 4  top= 4  mid= 4  bot= 4
```

No layer moves at its own rate. No image scales, translates or rotates against
the scroll. The only continuously-moving things on the page are the circuit
pulses, the globe's spin and the about card's ember streaks — none of which is
scroll-linked.

### No cursor
No pointer is visible in any of the 1115 frames, and no element reacts to one.
No cursor-driven behaviour was added.

---

## 00 · Preloader — 0.00 → 2.63 s

| Beat | Timing |
| --- | --- |
| Mark alone | until 1.38 |
| Wordmark types in, letter by letter | 1.38 → 1.96, **0.10 s per letter** |
| Each letter | grey → white over ~0.2 s |
| Hold, all white | 1.96 → 2.21 |
| Exit wipe | 2.21 → 2.63, **0.42 s** |

The lockup stays horizontally centred as the wordmark grows, so the mark
slides left as letters land.

The exit is a **bottom-edge wipe upward** that accelerates (ease-in). The
lockup does not move with it — it stays put and is progressively clipped, so
this is a clip/mask, not a translate.

## 01 · Hero — 2.63 → 3.80 s

- H1 reveals **word by word, 0.15 s apart** (`Inference` 3.045, `at` 3.128,
  `the` ~3.23, `Edge` ~3.40 — measured at the full-white landmark).
- Each word enters **below its baseline, blurred and dim**, then rises,
  sharpens and brightens. Offset is small — ~8 panel px ≈ **20 design px**,
  nowhere near a line height.
- Critically, the offset word is **fully visible while displaced**. It is not
  clipped by a line box, so `overflow: hidden` + `yPercent: 108` is the wrong
  primitive.
- Circuit pulses: segment ~78 design px, speed **~330 design px/s**,
  continuous. Measured by tracking the brightest pixel along the left
  horizontal trace, 5.21 → 5.88 s.

## Per-section audit — sections do NOT all behave the same

The first pass applied one reveal system to everything. Re-auditing section by
section shows that is wrong: what moves, and how, differs.

### Method, and the trap it avoids

For every window where the page is **stationary**, compare each frame against
that window's settled frame, per horizontal band (`analysis/audit.mjs`). A band
that starts at its noise floor was never animating; one that starts high and
decays was.

Stationary is essential. The reference is a 24 fps capture, so during a fast
scroll everything is smeared by motion blur and its measured contrast
collapses — which looks exactly like an opacity fade. The FAQ heading's
apparent 0.17 s "reveal" was precisely this; its measured contrast tracks
scroll speed almost perfectly:

| page px/frame | 20 | 16 | 13 | 10 | 7 | 4 | 2 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| measured contrast | 0.17 | 0.42 | 0.62 | 0.77 | 0.87 | 0.94 | 0.99 |

That is blur, not opacity. Any "fade" measured during a scroll is suspect.

### Element-level audit

Band-level analysis finds *that* a section animates; it cannot tell you a 30 px
badge moved. `analysis/cell-audit.mjs` splits the panel into a 12x8 grid and
reports, per cell, the peak deviation from settled and the level it settles to,
across still windows that are **derived from the data** rather than hand-listed.

Deriving them matters. A frame counts as still only when the tracker found zero
displacement *and* matched with a low residual — because during a section cover
the outgoing content does not translate at all, so displacement reads zero while
the residual explodes (0.05 → 18.7 at the about/bento handover). Hand-listed
windows swallowed those frames and reported a 250-point "lift" that was really
the transition.

What it surfaced that band analysis had missed:

| Where | What |
| --- | --- |
| portal card | the icon badge **scales up** (~8.7 → 15 panel px, so ≈0.6 → 1) over a quarter-second as it fades, *then* the title, *then* the rows |
| product cards | the card's own children resolve in order — title, body, link, ~0.08 s apart |

The product-card finding needed a check before believing it: body copy is grey
and would cross the visible threshold later than a white title under a plain
uniform fade. But "Learn More" is white *and* lands 0.17 s after the title, so
the stagger is real.

Its blind spot is worth stating too: the about card's ember streaks are far too
small and sparse to raise a cell's median, so this tool does not see them. Cell
audit localises regions; magnification confirms what is in them.

### What each section actually does

| Section | Heading | Body | Notes |
| --- | --- | --- | --- |
| hero | words, 0.15 s | badge → lead → actions → board | circuit pulses run continuously |
| about | words | text, chips | **artwork runs continuously — rising ember streaks** |
| bento | words | card grid, **grid-distance** stagger | proven time-based (page stationary) |
| globe | words | — | globe spins on its own clock, not on scroll |
| portal | words | **card rows cascade** like the faq's | |
| use cases | words | card grid **plus a bullet stagger inside each card**, 0.10 s | |
| tiers | words | card grid | |
| faq | words | **rows cascade top to bottom, 0.12 s** — nothing else | bands settle at 0.25 / 0.33 / 0.50 / 0.63 / 0.71 s |
| contact | words | para → button | **almost static except the glow, which ramps in intensity** |
| products | words | card grid | |
| footer | — | columns | |

### The contact panel's glow

Its top contour does not move (190 → 188 px) and it does not grow. What
changes is intensity: peak luminance climbs 72 → 255 between 36.45 s and
37.29 s while the page is nearly still, so this is a real brightening rather
than more of the glow scrolling into frame. ~0.8 s, ease-in-out.

### The about card's ember streaks

The only graphic that never settles. With the page stationary from 9.86 s, the
band covering the card holds a mean deviation of ~70 from its settled frame
indefinitely, while every other band in that window drops to its noise floor
within a second. Magnified, it resolves into short vertical light streaks
rising through the tile: the streak visible from 10.39 s climbs 27 panel px in
0.125 s (~480 design px/s) while stretching from ~13 to ~20 panel px, and they
appear roughly twice a second at varying x.

### What is NOT there

The about section's chip row is **static**. Tracking it horizontally through
the 9.90–11.20 s still window gives 24.7 px of drift in the first 0.35 s — the
scroll's own tail — and then exactly 0.00 for the remaining 0.9 s.

---

## 02–11 · Sections

Section headings use the same per-word reveal as the hero but tighter:
**0.10 s per word** (globe heading, seven words, 18.35 → 18.89).

### Grid reveals — staggered by grid distance, not source order
Bento, 5 cards, page **stationary** throughout (scroll stopped 14.93, next
gesture 17.52) — so these are **time-based on enter, never scrubbed**.

50 % luminance crossings:

| Card | Grid cell | t | Δ | Δ ÷ unit |
| --- | --- | --- | --- | --- |
| Data privacy | (0,0) | 15.68 | 0 | 0 |
| Object storage | (0,1) | 16.08 | 0.40 | 1.00 |
| Model autoscaling | (1,0) | 16.11 | 0.43 | 1.08 |
| Pre-trained ML | (0,2) | 16.32 | 0.64 | 1.54 |
| NVIDIA L40S | (1,~1.5) | 16.41 | 0.73 | 1.76 |

Top-middle and bottom-left fire **together**. That is the signature of GSAP's
Euclidean grid stagger measured from `"start"`, not a linear one — a linear
stagger would order them 1 and 3. Unit step ≈ **0.38 s**.

### Per-element reveal
Opacity 0 → 1 with y **+29 design px** → 0 (13 panel px, recovered from the
dy-vs-settled walk 13 → 6 → 2 → 1 → 0).

Fitting the opacity curve, `power3.out` over ~1.35 s tracks the measurement
almost exactly, and `power2.out` over ~1.0 s is nearly as good. The previous
`expo.out` is the wrong *shape* — it front-loads badly:

| t after onset | 0.09 | 0.17 | 0.26 | 0.42 | 0.59 | 0.75 | 1.00 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| measured | 0.25 | 0.38 | 0.50 | 0.68 | 0.82 | 0.90 | 0.98 |
| power3.out D=1.4 | 0.18 | 0.32 | 0.46 | 0.66 | 0.82 | 0.91 | 0.97 |
| expo.out D=1.05 (old) | 0.45 | 0.68 | 0.82 | 0.94 | 0.98 | 0.99 | 1.00 |

## 04 · Globe

Rotation is **dead constant** — 0.885 panel px/frame for 27 consecutive
frames with no drift, while the page is stationary. Not scroll-linked.

0.885 px/frame × 23.976 = 21.2 panel px/s at the sampled latitude; with a
fitted globe radius of 174 panel px this is ≈ **0.155 rad/s, ~40 s per
revolution**. The previous 0.055 rad/s was nearly 3× too slow.

## Nav

Full bar (with the announcement strip above it) until the hero is essentially
covered, then it morphs to the centred pill — measured at 7.97 → 8.09 s, the
moment the incoming white panel has taken ~85 % of the viewport. So the
trigger is "the hero has been scrolled past", not a small fixed offset.

---

## What the reference does NOT do

- No parallax on section artwork. The about card and hero content are frozen
  during their exits, not drifting.
- No fade or scale on section exit.
- No character-level text animation; the word is the unit.
- No horizontal scrolling, no snap.
