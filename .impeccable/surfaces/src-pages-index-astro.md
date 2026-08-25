---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

## Scope and mode

The single invitation page at `src/pages/index.astro`. Visitor mode: **Persuade** — but with
no conversion job. RSVP is already settled, so the action this page has to earn is
narrower and physical: the visitor leaves knowing when, where, and that they must pack
swim gear.

## Audience, job, action

Close friends, on a phone, in a chat thread, three days out, already committed. They open
it once. The one thing that can still go wrong is someone arriving with nothing to swim in.

Actions available: read, and open the venue map link. Nothing is collected, nothing is
submitted, no account, no RSVP.

## Chosen direction and memorable moment

**Deep Pool** — the "One Big Cake" composition in the deep-pool-at-dusk palette. Approved
comp: `.impeccable/mocks/cake-v2-deep-pool.png` (sidecar `approved: true`).

Lineage: silkscreened character poster. A single anthropomorphic birthday cake, standing on
two legs in an oversized inflatable ring, waving. The memorable moment is that cake: it is
the whole page's mascot, and the birthday sits at the visual centre by being a character
rather than a decoration.

History worth keeping: the brief originally pinned classic maritime. The user retired that
pin after seeing five directions rendered, chose street wood type, then moved to
anthropomorphic. The persimmon ring in the approved comp came back reading as a life ring,
which is the only nautical trace left, and it is welcome.

## Sampled palette — measured from the approved comp, not estimated

| Role | Hex | Coverage / use | Contrast on ground |
|---|---|---|---|
| Ground (deep teal) | `#013237` | ~42% of the comp; the page IS this colour | — |
| Chartreuse | `#ACB51C` | display type, primary action fill | 6.20:1 — passes body |
| Cream | `#E4CB96` | cake body, ring bands, body copy | 8.78:1 — passes body |
| Persimmon | `#D36B1E` | the ring, warm accent | 3.89:1 — **large text only** |
| Outline | `#13211B` | every character outline, very heavy | 1.20:1 — **never text on ground** |

Colour strategy: **Drenched**. The surface is the deep teal; it is not a neutral page with
teal accents.

Binding contrast rules derived from these numbers:
- Body copy is cream or chartreuse on the teal ground. Never persimmon.
- **Never cream text on a persimmon fill** — measured 2.25:1, fails even at large sizes.
- The primary action is a chartreuse fill with deep-teal text (6.20:1), not a persimmon one.

## Component grammar read off the comp

- **Corner language:** everything is round. No rectangles with sharp corners anywhere;
  rules are hairlines, and any container is a pill or a full-bleed band.
- **Line weight:** character outlines are very heavy and uniform — roughly 1.4% of the
  character's width. This weight is the design's signature and must not thin out in code.
- **Elevation:** none. Flat silkscreen fills only. No drop shadows, no gradients, no glass.
- **Texture:** a faint print grain over everything; the comp's fills are not pure flat.
- **Type ramp (comp):** header line and the date are the same face at two sizes — a heavy
  condensed poster capital, tracked wide at the top, tight and huge at the date. Korean sits
  small, dense and condensed at the foot.

## Implementation media

| Ingredient | Medium | Note |
|---|---|---|
| Cake character + ring | **generated raster** | Figure drawing, expressive eyes, ~40 piped shells, fingered waving hand. Beyond what a build session can author as SVG. Regenerated cleanly at asset resolution against the approved comp as reference — never cropped out of the comp. |
| Three packing-list object characters | **generated raster** | Same reason, produced as one sheet in the same style. |
| All type | semantic HTML/CSS | Never rasterised. |
| Colour bands, rules, pills, the action | CSS | Flat fills, no gradients. |
| Print grain | CSS (SVG turbulence data URI) | Texture, not an asset. |
| Five-equal motif | authored SVG / CSS | Countable flat shapes — inside what a session can specify exactly. |

Quantity commitments: exactly **five** candles on the hero cake and exactly **five** equal
marks in the Rule-of-Five section. Five is the product's premise, not a visual flourish, and
a build that ships four has shipped a different design.

## Content constraints carried from PRODUCT.md

- **No person is named anywhere in rendered output** — not the host, not the five. Not in
  copy, signature, `<title>`, meta tags, alt text, or image content.
- The five birthday people appear only as a count. No initials, monograms, photos, or
  placeholder avatars.
- Only these facts may appear: event name, 2026.08.28 FRI 17:00, the venue name, the map
  link `https://naver.me/Fr7bgqO0`, the three packing items, "pack light", indoor water
  room, evening with no overnight stay, and that extra guests need advance notice.
- No RSVP affordance of any kind. No share button, no calendar link, no form.
- The site is disposable: no archive state, no past-tense mode, nothing built to outlive
  2026-08-28.

## Unresolved

None blocking. The venue has no street address or transit detail beyond the map link, and
none may be invented.
