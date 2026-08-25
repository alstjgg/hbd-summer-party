---
name: HBD Summer Party
description: A screenprinted character poster for a five-person summer birthday party, drenched end to end in deep pool teal.
colors:
  pool: "#012e32"
  pool-deep: "#001f23"
  chartreuse: "#acb51c"
  cream: "#e4cb96"
  persimmon: "#d36b1e"
  outline: "#13211b"
typography:
  display:
    fontFamily: "Anton, 'Black Han Sans', Impact, sans-serif"
    fontSize: "min(clamp(2.6rem, 18.6vw, 20rem), 15svh)"
    fontWeight: 400
    lineHeight: 0.86
    letterSpacing: "0.005em"
  headline:
    fontFamily: "'Black Han Sans', Anton, sans-serif"
    fontSize: "clamp(2.05rem, 8.6vw, 4.6rem)"
    fontWeight: 400
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Black Han Sans', Anton, sans-serif"
    fontSize: "clamp(1.75rem, 7.4vw, 3.4rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  body:
    fontFamily: "'Gothic A1', 'Apple SD Gothic Neo', system-ui, sans-serif"
    fontSize: "clamp(1.02rem, 3.7vw, 1.18rem)"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "-0.01em"
  label:
    fontFamily: "'Gothic A1', 'Apple SD Gothic Neo', system-ui, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.16em"
  note:
    fontFamily: "'Gothic A1', 'Apple SD Gothic Neo', system-ui, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 400
    lineHeight: 1.85
    letterSpacing: "-0.01em"
  ko-md:
    fontFamily: "'Black Han Sans', Anton, sans-serif"
    fontSize: "clamp(1.15rem, 5vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  ko-sm:
    fontFamily: "'Black Han Sans', Anton, sans-serif"
    fontSize: "clamp(1.05rem, 4.8vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  fact:
    fontFamily: "'Gothic A1', 'Apple SD Gothic Neo', system-ui, sans-serif"
    fontSize: "clamp(1.02rem, 4vw, 1.25rem)"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  venue:
    fontFamily: "'Black Han Sans', Anton, sans-serif"
    fontSize: "clamp(0.95rem, 6vw, 2.6rem)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  close:
    fontFamily: "Anton, 'Black Han Sans', Impact, sans-serif"
    fontSize: "clamp(2.4rem, 15vw, 9rem)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "0.01em"
rounded:
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 6vw, 3rem)"
  stack: "clamp(2.25rem, 8vw, 3.5rem)"
  band: "clamp(3.5rem, 13vw, 6.5rem)"
  close: "clamp(4rem, 15vw, 8rem)"
components:
  action:
    backgroundColor: "{colors.chartreuse}"
    textColor: "{colors.pool}"
    rounded: "{rounded.pill}"
    padding: "1.1rem 2.1rem"
  action-hover:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.pool}"
  band-rule:
    backgroundColor: "{colors.pool}"
    textColor: "{colors.cream}"
    padding: "{spacing.band} {spacing.gutter}"
  band-fill:
    backgroundColor: "{colors.chartreuse}"
    textColor: "{colors.pool}"
    padding: "{spacing.band} {spacing.gutter}"
  close-band:
    backgroundColor: "{colors.pool-deep}"
    textColor: "{colors.cream}"
    padding: "{spacing.close} {spacing.gutter}"
---

# Design System: HBD Summer Party

<!-- Recorded from the built surface (src/pages/index.astro, src/layouts/Base.astro,
     src/components/FiveMarks.astro, dist/index.html). Where prose and code disagreed,
     the code won. -->

## Overview

**Creative North Star: "The Deep Pool Screenprint"**

This is a silkscreened character poster that happens to be a web page. One anthropomorphic
birthday cake stands in an oversized persimmon ring, waving, at the middle of the first
viewport; chartreuse poster capitals run across the top and the date sits huge underneath
it. The page refuses the centred e-invite stack of photograph, date, share button. There is
no card, no panel, no elevation and no gradient anywhere in it — colour arrives as flat
screen fills over a single drenched ground, and the only depth in the system is a print
grain laid over the whole sheet.

The system is **drenched, not accented**. The page *is* deep teal; teal is not a highlight
applied to a neutral document. Everything else in the palette is a flat ink printed onto
that ground. The character illustrations carry heavy uniform dark outlines and the CSS
carries the same weight (`--stroke: 3px`), so drawn shapes and coded shapes read as one
printing job.

It is one surface, built once, for one evening. There is no component library here and this
record does not pretend otherwise: what is documented below is the set of durable rules the
single page actually establishes — the palette and its contrast law, a named type ramp, a
band-based vertical rhythm, one pill action, and one repeated five-mark motif. The system's
hardest constraints are not visual preferences but product law: nobody is named, the five
appear only as a count, and nothing on the page collects a response.

**Key Characteristics:**

- Drenched deep-teal ground; flat silkscreen fills; no gradients, no shadows, no glass.
- Very heavy uniform outlines (3px) shared by illustration and interface.
- Round-only geometry: pills and full-bleed bands; no sharp-cornered containers.
- A print grain over the entire sheet, which the base palette is calibrated *around*.
- Two display faces (Latin poster + Korean poster) over one quiet Korean body face.
- Exactly five, everywhere five appears — equality by construction, not by care.
- One motion moment on the whole page.

## Colors

A four-ink screenprint on one saturated ground: deep pool teal underneath, chartreuse and
bone cream as the two legible inks, persimmon as material only, and a near-black green as
the outline ink.

### Primary

- **Deep Pool Teal** (`{colors.pool}`): the ground of the entire page — body background,
  the fill behind every band that is not the chartreuse one, and the text colour used *on*
  chartreuse. Roughly the whole surface. The comp's ground samples `#013237`; the token is
  deliberately set lower (see The Grain Offset Rule).
- **Pool Deep** (`{colors.pool-deep}`): one step darker, used only for the closing band at
  the foot of the page, so the page sinks rather than ends.

### Secondary

- **Chartreuse** (`{colors.chartreuse}`): the voice of the poster. Display type
  (`HBD SUMMER PARTY`, `8.28 17:00`, `See you at the water`), the hailing-port line under
  the character, the kit item names, links, the focus ring, the selection highlight, the
  one full-bleed colour band, the primary action fill, and the candle flames. 6.20:1 on the
  pool ground.

### Tertiary

- **Persimmon** (`{colors.persimmon}`): the ring the cake stands in and the stripes on the
  candles. Material, never language. 3.89:1 on the ground.

### Neutral

- **Bone Cream** (`{colors.cream}`): all body copy, the Korean display
  headings, the cake body and ring bands, the candle bodies, and — mixed down with the
  ground via `color-mix` — the hairline rules (26% / 18%) and the quiet secondary notes
  (78% / 72%). 8.78:1 on the ground.
- **Outline** (`{colors.outline}`): the near-black green that outlines every drawn shape and
  the action pill. 1.20:1 on the ground — a drawing ink, never a text colour.

### Named Rules

**The Drenched Ground Rule.** The page is the teal. Never re-stage this system as a light or
neutral document with teal accents; a white or off-white page background is outside the
world.

**The Grain Offset Rule.** `--pool` is `#012e32`, two steps under the approved comp's
sampled ground of `#013237`, and this is deliberate. The print grain (`body::after`,
`mix-blend-mode: overlay`, `opacity: .62`) composites over the whole sheet and lifts the
result, so the *rendered* ground measures the comp's value — verified against
`.impeccable/review/hero-repro.png` at a mean delta of ≤2.7/255, not by eye. **Do not
"correct" the token to `#013237`.** It looks like a typo and it is not; changing it makes
the shipped page lighter than the approved comp. If the grain layer's opacity, blend mode,
or presence ever changes, `--pool` must be re-derived against the comp — the two values are
one calibration, not two independent decisions. That rendered composite measures `#013539`,
and `#013539` is what `<meta name="theme-color">` carries: the meta value must match what a
viewer actually sees, while the token stays offset under it to pay for the grain. The two
differing is the calibration working, not a drift. Never sync `theme-color` to
`{colors.pool}`.

**The Uncompensated Asset Rule.** The downward offset exists *only* because the grain
composites on top. An asset that renders with no grain over it carries the uncompensated
sampled ground instead: `public/favicon.svg` hardcodes `#013237`, and that is correct, not a
token bypass. Anything outside the page's grain layer — the favicon, an exported still, a
printed sheet — uses `#013237`; anything under the grain uses `{colors.pool}`. "Fixing" the
favicon to the token would ship a mark visibly darker than the page it stands for.

**The Non-Text Persimmon Rule.** Persimmon is a non-text token. It measures 3.89:1 on the
ground, below the body-text floor, and it is reserved for material: the ring, the candle
stripes, piped shell borders. Never set copy, a heading, a label, or a link in persimmon,
and never rely on it to carry meaning that only colour expresses.

**The One Legible Pairing Rule.** The primary action is a chartreuse fill with pool-coloured
text (6.20:1) — the only pairing in this palette that clears body contrast on a fill. Cream
text on a persimmon fill measures 2.25:1 and is **banned outright**, at every size. Body
copy is cream or chartreuse on the teal ground, and nothing else. Notes mixed down *toward* a
fill obey the same floor and are measured, never eyeballed: the quiet notes on the chartreuse
band were `color-mix(in srgb, var(--pool) 78%, var(--chartreuse))` at 4.35:1 — under the
4.5:1 body floor — and were corrected to **90%** (5.54:1).

**The Measured Comp Rule.** The approved comp
(`.impeccable/mocks/cake-v2-deep-pool.png`) is the authority, and it is authoritative only
when *measured* — never as remembered, and never as paraphrased in a prose brief. The
hailing-port line shipped cream at roughly a third of frame width because the written record
of the comp called it "small at the foot"; measuring the comp file showed it chartreuse at
91.7% of frame width, and the build was corrected to chartreuse at `{typography.venue}`.
When code and a written description of the comp disagree, re-measure the comp; the prose
loses.

## Typography

**Display Font (Latin):** Anton (with Black Han Sans, Impact, sans-serif)
**Display Font (Korean):** Black Han Sans (with Anton, sans-serif)
**Body Font:** Gothic A1 (with Apple SD Gothic Neo, system-ui, sans-serif)

**Character:** A heavy condensed poster capital does all the shouting, in two faces that
match in weight so Latin and Korean read as the same printing job. Underneath it, Gothic A1
at a generous 1.85 line-height is deliberately quiet and roomy — the page has one loud
register and one calm one, with nothing in between.

### Hierarchy

- **Display** (Anton, 400, up to `15svh`/`20rem`, line-height 0.86, uppercase, tracked
  `0.005em`): the poster voice. It appears at exactly three sizes on the page and nowhere
  else — the banner title (`min(clamp(1.6rem, 11.6vw, 13rem), 13svh)`, tracked and set
  `white-space: nowrap` so it stays one unbroken line), the date lockup at the largest scale
  in the frontmatter, and the closing line (`{typography.close}`). Always chartreuse.
- **Headline** (Black Han Sans, 400, `clamp(2.05rem, 8.6vw, 4.6rem)`, line-height 1.15): the
  Korean section openers that carry the page's two loudest ideas.
- **Title** (Black Han Sans, 400, `clamp(1.75rem, 7.4vw, 3.4rem)`, line-height 1.25): the
  quieter Korean section headings, and the same face steps down for the action label. The
  hailing-port line under the character shares the face but is its own ramp step
  (`{typography.venue}`), not a step-down of this one.
- **Body** (Gothic A1, 400, `clamp(1.02rem, 3.7vw, 1.18rem)`, line-height 1.85, tracked
  `-0.01em`): all running copy, constrained to a 34rem measure (`--measure`). Korean wraps
  with `word-break: keep-all` and `overflow-wrap: anywhere` globally, so lines break between
  words rather than inside them.
- **Label** (Gothic A1, 700, `0.82rem`, tracked `0.16em`, uppercase): the definition terms
  in the facts list. This is the only tracked-out small type in the system, and it is
  structural — a term in a two-column definition row, not a decorative tag.

### Ramp Steps

The five roles above say *what* type is for; these six named tokens in `Base.astro` are the
exact sizes the surface uses, and `index.astro` consumes them rather than literals. Steps
that had drifted into near-duplicates while tuning (`0.95rem` beside `0.92rem` for the same
quiet note; two clamps sharing a min and a `vw` term and differing only in their max) are
merged — a step exists only where a role genuinely needs one.

- **`--fs-note`** (`{typography.note}`): quiet secondary notes, on both the pool bands and
  the chartreuse one.
- **`--fs-ko-md`** (`{typography.ko-md}`): kit item names and the loud note on the fill band.
- **`--fs-ko-sm`** (`{typography.ko-sm}`): the closing Korean line.
- **`--fs-fact`** (`{typography.fact}`): the values in the facts rows.
- **`--fs-venue`** (`{typography.venue}`): the hailing-port line under the character.
- **`--fs-close`** (`{typography.close}`): the closing poster lockup.

### A Known Gap: the display face

The shipped Latin display face is not the comp's face. This is a recorded shortfall, not a
defect to re-litigate every session. Measured: the approved comp sets `HBD SUMMER PARTY` at
**94.6% of frame width with a 277px cap** (18.0% of frame height) — roughly 1:4.5 glyph
proportions, an ultra-compressed poster gothic. Anton, the shipped face, sets the same string
at **87.5% width with a 93px cap**, roughly **2.75× wider per glyph**. That width class is
why the title clamps small against its `svh` cap and why the first viewport's vertical fill
sits at **~72–76%** against the comp's **97.5%**. Closing the gap requires a genuinely
compressed poster gothic; nothing else closes it.

### Named Rules

**The Named Step Rule.** A size used more than once is an `--fs-*` token in `Base.astro`,
never a literal at the call site. New work reuses a step or adds one deliberately; it never
introduces a near-duplicate — a `0.92rem` beside the `0.95rem` note, or a second clamp that
differs only in its max. The ramp is exactly as long as the surface needs, and it currently
needs these six steps beyond the five roles.

**The Width Class Rule.** The display-face gap above is a *face* problem and only a face
closes it. Do not simulate compression. Negative tracking collapses counters and jams
sidebearings long before it buys meaningful width; `font-stretch` is inert on Anton, which
ships a single width the browser will not synthesise from; `transform: scaleX()` thins the
vertical stems while leaving horizontals at full weight, which breaks the uniform-stroke
logic the entire world runs on. Until a compressed face ships, the title stays honest at
Anton's proportions.

**The Two Poster Faces Rule.** Latin display is Anton; Korean display is Black Han Sans.
They are peers, not fallbacks for each other — never set a Korean heading in Anton or a
Latin poster line in Black Han Sans, and never introduce a third display face.

**The No Kicker Rule.** No kicker, eyebrow, or small tracked label above a heading. Ever.
The `.kicker` rule was written into `Base.astro` during the build, used, and then
**deliberately deleted** so it cannot return by habit; its absence from the stylesheet is
intentional and load-bearing. The heading carries its own weight. (The tracked `0.82rem`
label role is not an exception: it is a definition term inside a row, never a lead-in above
a heading.)

**The One Unbroken Line Rule.** The banner title and the date are `white-space: nowrap` and
size against viewport height as well as width (`min(clamp(...), Nsvh)`). They may shrink;
they may not wrap. Any new poster-scale line inherits this behaviour.

## Layout

A single vertical column of full-width bands, phone-first. There is no page container and no
grid system: horizontal breathing room comes from one shared gutter token
(`{spacing.gutter}`) applied as band padding, and prose is held to a 34rem measure inside
it. Vertical rhythm is the band step (`{spacing.band}`), with the closing band paying a
larger one (`{spacing.close}`).

The first viewport is a `min-height: 100svh` grid of exactly four rows — title, character,
date, hailing-port line — centred as a block. The fold is a fixed height budget those four
rows share, and the shares are tuned rather than defaulted: the title caps at `13svh` and the
date at `15svh` (each `min(clamp(...), Nsvh)`), which is what buys the character its
`min(54svh, 46rem)` cap at `min(96vw, 46rem)` wide. Nothing can push the date below the
fold, and the character is the subject of the frame rather than an object floating in it —
the type caps were lowered and the art cap raised together at the last retune, as one
budget rather than as three separate sizes.

Bands below the fold are centred text by default; the Rule-of-Five band is the one
deliberate exception and aligns left.

Only three breakpoints exist, and each one earns its place:

- **`40rem`** — the three packing-kit items go from a single column to `repeat(3, 1fr)`.
- **`64rem` and landscape** — the Rule-of-Five band splits into two columns
  (`minmax(0,1fr) minmax(0,1.1fr)`, max 82rem, centred), the poster tightens its gap, the
  character takes `min(46vw, 46rem)` wide by `min(46svh, 46rem)` tall, and bands widen
  their inline padding to `max(var(--gutter), 8vw)`.
- **`max-height: 34rem` and landscape** — short landscape phones drop the poster's
  `100svh` floor and cap the character at `46svh` so the date stays on screen.

**The Centred-Except-Once Rule.** The page is centre-aligned; exactly one band breaks
alignment (the Rule-of-Five section, left-aligned, with its five marks pushed to
`flex-start`). One deliberate break reads as intent; three read as inconsistency.

## Elevation & Depth

**There is no elevation.** No `box-shadow` exists anywhere in the built stylesheet, and no
gradient, blur, backdrop-filter, or glass surface either. Nothing floats, nothing lifts on
hover except the action's 2px nudge, and there are no cards.

Depth is achieved by exactly three devices: **flat colour bands** that change the ground
(chartreuse for the packing-list band, `pool-deep` for the closing band), **hairline rules**
(2px `color-mix` of cream at 18–26% into transparent) that separate bands and facts rows,
and the **print grain** — a fixed, pointer-events-none full-viewport layer at `z-index: 90`
carrying an inline SVG `feTurbulence` fractal noise at `opacity: .62` and
`mix-blend-mode: overlay`. The grain is what stops the flat fills reading as vector-clean;
it is the system's only texture, and the palette is calibrated to it (see The Grain Offset
Rule).

**The Flat Print Rule.** Depth is a change of ink, not a change of altitude. If a new
element needs to separate from its surroundings, it gets a different flat band colour, a
hairline, or an outline — never a shadow, never a gradient, never a translucent panel.

## Shapes

Everything is round. The only radius in the system is the pill (`{rounded.pill}`), used for
the action and for the focus ring; drawn shapes use generous corner rounding on their own
rectangles (candle bodies, the favicon's cake). There are no sharp-cornered rectangles
anywhere, and no mid-scale radius exists — a shape is either a pill, a full-bleed band with
no corners at all, or a drawn character.

Borders come in two weights and no others: the **signature outline** at `--stroke: 3px`,
solid `{colors.outline}`, which is what makes coded elements belong to the same printing job
as the illustrations; and the **hairline** at 2px in a heavily mixed-down cream, which
divides without drawing.

**The Uniform Stroke Rule.** The outline weight never thins. `--stroke` is 3px at every
viewport size, and character outlines are heavy and uniform by construction. A hairline is
not a thin outline — it is a different device with a different colour, and the two are never
substituted for each other.

**The No Container Rule.** This world has no cards, tiles, or panels. A group of content is
established by a band (full-bleed colour or hairline-topped), never by a bordered box.

## Components

There is no component library — one page, one action, one motif. These are the durable
patterns it establishes.

### The Action (primary and only)

The single interactive element on the page: the map link.

- **Shape:** full pill (`{rounded.pill}`), with the 3px signature outline in `{colors.outline}`.
- **Primary:** chartreuse fill, pool-coloured text (6.20:1), padding `1.1rem 2.1rem`, Korean
  poster face at `clamp(1rem, 4.2vw, 1.2rem)`, inline-flex with a 0.6rem gap to an inline
  SVG arrow sized at `1.05em`.
- **Hover:** the fill inverts to cream, the pill lifts 2px, and the arrow advances 3px — all
  at 180ms ease. **Active:** the lift returns to 0.
- **Focus:** the global focus ring — 3px solid chartreuse, 4px offset, pill radius.
- **No secondary or ghost variant exists.** The page has one action; a second button style
  would be an invention, not a variant.

### Bands

The page's only container grammar. Three treatments, all full-bleed:

- **Rule band** — pool ground, cream text, 2px hairline across the top.
- **Fill band** — chartreuse ground, pool text throughout, with secondary notes mixed down
  toward the fill at `color-mix(in srgb, var(--pool) 90%, var(--chartreuse))` (5.54:1; the
  earlier 78% measured 4.35:1 and failed the body floor). The one colour-block on the page.
- **Close band** — `pool-deep` ground, cream text, hairline on top, the largest vertical
  padding in the system.

### Facts List

A definition list of date / time / venue as two-column rows (`4.5rem 1fr`, baseline-aligned,
0.9rem vertical padding), hairline-bordered top and bottom, held to a 34rem measure and
left-aligned inside a centred band. Terms are the tracked uppercase label role; values are
bold at `clamp(1.02rem, 4vw, 1.25rem)`, with a softer cream mix for parenthetical detail
(the weekday).

### Five Marks (signature)

Five identical candles, drawn as authored SVG in a `236 × 68` viewBox. A single `<g id="candle">`
is defined once and placed with `<use>` five times at a 54-unit pitch; the whole group is
exposed as one `role="img"` with a Korean label and the SVG itself is `aria-hidden`. Fills
reference live custom properties (`--chartreuse` flame, `--cream` body, `--persimmon`
stripes, `--outline` at 2.4 stroke-width), so the motif recolours with the palette. It sizes
at `min(15rem, 62vw)` and appears twice: in the Rule-of-Five band (pushed left) and at the
foot of the closing band.

**The Rule of Five.** Five is a product premise, not a visual flourish — five candles on the
hero cake, five marks in the motif. A build that ships four has shipped a different design.
The marks are authored as *one* shape used five times precisely so the equality is true by
construction rather than by care: no instance can drift, be emphasised, or be styled apart.
Never differentiate one of the five — not by size, colour, order, animation, or position.

### Motion

**The One Moment Rule.** The page authors exactly one motion moment: the hero character's
`float-bob` — a 5.2s ease-in-out infinite loop of `translateY(0 → -1.4%)` with a ±0.35°
rotation, because an inflatable ring does not sit still on water. Everything else is state
response only (the action's 180ms hover/active transitions). The five marks deliberately
carry **no** idle animation. Do not add a second ambient loop, scroll-triggered reveals, or
scattered hover effects. `prefers-reduced-motion: reduce` kills all animation globally and
collapses transitions to 0.001ms.

## Do's and Don'ts

### Do:

- **Do** keep the ground drenched: `{colors.pool}` is the page, and `{colors.pool-deep}` is
  the only other ground colour, reserved for the foot.
- **Do** leave `--pool` at `#012e32`. The grain layer lifts it to the comp's `#013237` when
  rendered (mean delta ≤2.7/255). Re-derive it only if the grain changes.
- **Do** keep `theme-color` at the *rendered* ground `#013539` and flat, grain-free assets
  (the favicon) at the *sampled* ground `#013237`. Three values, one calibration.
- **Do** name every size that repeats as an `--fs-*` token in `Base.astro` and consume it by
  name at the call site.
- **Do** measure the comp file before correcting fidelity. The hailing-port line was cream
  and small because a prose summary said so; the comp said chartreuse at 91.7% of frame
  width.
- **Do** keep the print grain over the whole sheet — fixed, `opacity: .62`,
  `mix-blend-mode: overlay`, `z-index: 90`, `pointer-events: none`. It is the system's only
  texture and half of the palette calibration.
- **Do** use chartreuse fill with pool text (6.20:1) for any action.
- **Do** keep every outline at `--stroke: 3px` in `{colors.outline}` so coded shapes match
  the drawn ones.
- **Do** hold running copy to the 34rem measure and keep `word-break: keep-all` for Korean.
- **Do** keep the count at exactly five wherever five appears, and author repeated equal
  shapes as one `<use>` repeated, so equality cannot drift.
- **Do** draw new flat, countable shape systems (marks, icons, rules) as **authored SVG in
  code**, inline, stroked with the palette's custom properties.
- **Do** generate new **character** illustrations as rasters in `public/img/`, in the
  established silkscreen style, on the `#013237` ground, each with its `.png.json` provenance
  sidecar carrying the **full generation prompt inline** alongside model, post-processing and
  reference comp — readable without opening the PNG's embedded chunk.

### Don't:

- **Don't** "fix" `--pool` to `#013237`. It looks like a typo; it is a calibration, and
  correcting it ships a page lighter than the approved comp.
- **Don't** "fix" `public/favicon.svg`'s `#013237` to the `--pool` token. Nothing composites
  grain over a favicon, so the flat asset carries the uncompensated value on purpose.
- **Don't** set `theme-color` to the token value. It carries `#013539`, what a viewer sees.
- **Don't** fake a compressed display face with tracking, `font-stretch`, or
  `transform: scaleX()`. Each fails differently and all three break the uniform stroke.
- **Don't** add a near-duplicate size beside an existing `--fs-*` step.
- **Don't** set text in `{colors.persimmon}` (3.89:1) or `{colors.outline}` (1.20:1) on the
  ground. Persimmon is for the ring, the candle stripes, and other material only.
- **Don't** put cream text on a persimmon fill — 2.25:1, banned at every size. And don't
  build a persimmon action; the action is chartreuse.
- **Don't** add a kicker, eyebrow, or tracked label above any heading. The `.kicker` rule was
  deliberately removed from the stylesheet; do not reintroduce it.
- **Don't** introduce shadows, gradients, glass, blur, or any elevation. Depth is a change of
  ink.
- **Don't** add cards, tiles, or sharp-cornered boxes. Bands and pills only.
- **Don't** add a second ambient animation. The hero bob is the page's one motion moment;
  the five marks stay still on purpose.
- **Don't** flatten a character illustration into CSS or hand-authored SVG. Figure drawing,
  expressive eyes, piped shell borders and heavy uniform outlines are raster territory —
  attempting them in code produces a worse drawing and breaks the print style.
- **Don't** rasterise type. All type is semantic HTML/CSS, always.
- **Don't** name any person in rendered output — the host included. Not in copy, a signature,
  `<title>`, meta tags, alt text, or inside a generated image.
- **Don't** represent the five birthday people as individuals. They appear as a count and a
  motif only: no initials, monograms, photos, or placeholder avatars.
- **Don't** add an RSVP affordance of any kind — no form, no headcount, no share button, no
  calendar link. The map link is the page's only outbound action.
- **Don't** build a post-event state. The site is disposable: no archive, no past-tense mode,
  no recap, no "thanks for coming" screen.
- **Don't** invent facts to fill space — no street address, transit detail, phone number,
  rain plan, or second date. Absent facts stay visibly absent.
