# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro. Chosen by the user for a greenfield content site: zero JS shipped by default,
islands only where interactivity is genuinely needed, first-class typography and
content authoring. No scaffold exists yet — this repo currently holds only the
Impeccable toolchain and this record.

Deploy target: **static output, host-agnostic.** The user confirmed that any static
host works, and that a single static page is enough — no server runtime, no build-time
secrets, no serverless endpoint. Nothing later may introduce a dependency that a plain
static file server cannot satisfy.

Deadline: the site ships **today, 2026-08-25**, three days before the event.

## Users

General consumers — the people invited to the event. They arrive with low prior
context, almost always by following a link someone shared with them directly rather
than by searching. They are not a professional or technical audience, and they did
not come to evaluate a product; they came to find out what they have been invited to,
and — since they have already said yes — what they need to bring.

There is no second audience. No host, organizer, or administrator uses the site; the
guest list is settled off-site and the page has no administrative surface.

## Product Purpose

The site is an invitation to a single event: **HBD Summer Party**, a joint summer
birthday party for five people, held Friday, August 28, 2026 from 5:00 PM to
10:00 PM at Urban Picnic 어반피크닉 워터파티룸 분당서현점.

Success is **the invitation being understood and felt, and guests arriving prepared.**
It is not attendance and not RSVP completion: RSVP has already been received, so the
site has no conversion job. Its two measurable outcomes are that a guest leaves
knowing when and where to show up, and that they bring swim gear.

## Positioning

The event's own idea carries the invitation: **"Horizontal Celebration."** Five people
whose birthdays fall in summer celebrate each other as equals. There is no division
between stars and guests — everyone is both celebrator and celebrated — and no one's
actual birthday falls on the party date, which is why everything is done together.

This is the claim a generic birthday invitation could not truthfully make, and it is
structural rather than decorative: any treatment that elevates one of the five above
the others contradicts the product.

## Operating Context

- Reaches its audience as a shared link, opened mostly on a phone, mostly once.
- **Fully open.** No gate, no password, no noindex requirement. The venue and date
  are public. No person is named on the page at all (see below).
- **No response mechanism.** The site collects nothing and submits nothing. Guests do
  not reply through it; extra guests are cleared with the host through a channel
  outside the site, which the site does not need to expose.
- The single-day evening event has no overnight stay. Indoors, in a water party room
  with a small pool area.
- Formality is come-as-you-are: a casual gathering of close friends.
- Guests must arrive with light swim gear. **Corrected 2026-08-25:** the venue does
  NOT permit ordinary clothes in the water — only a swimsuit or a rashguard. Aqua
  shoes are wanted too, for slip protection. **Towels are provided by the venue** and
  are no longer a guest's responsibility. The list is therefore: swimsuit or
  rashguard, aqua shoes, a change of clothes. The pool area is small, so the
  instruction is still to pack light. This is the one piece of practical content the
  site must deliver, and the earlier "clothes that can get wet" wording was wrong.
- A venue map link is confirmed and supplied: <https://naver.me/Fr7bgqO0> (Naver Map
  short link). This is the only outbound link the site has. No street address, phone
  number, or transit detail beyond it has been supplied, and none may be invented.
- **The site is disposable.** It exists for the run-up to August 28, 2026 and has no
  life after the event. No archive state, no past-tense mode, no recap, and no
  "thanks for coming" screen is needed, and nothing should be built to survive the
  date.
## Capabilities and Constraints

Confirmed functionality: presenting the invitation. Nothing else. No form, no RSVP,
no headcount, no calendar integration, no analytics has been asked for.

Confirmed content the site carries:
- Event name: HBD Summer Party
- Date and time: Friday, August 28, 2026, 5:00 PM - 10:00 PM (end time confirmed 2026-08-25)
- Venue: Urban Picnic 어반피크닉 워터파티룸 분당서현점
- Venue map link: <https://naver.me/Fr7bgqO0>
- What to bring: swimsuit or rashguard (ordinary clothes are not allowed in the water),
  aqua shoes, a change of clothes; pack light. Towels are provided by the venue.
- Cost: 1/N 정산 — split evenly
- Venue rules: no diving, no water guns, no bath salts, no swimming after drinking,
  no eating in the pool
- The five birthday people, as a count and a motif only.

**No person is named on the site. This includes the host.** The organizer is 민서, and
that fact is recorded here so later work is not tempted to fill the gap — but by the
user's explicit instruction the name does not appear in any rendered output: not in
copy, not in a signature, not in a page title, meta tag, alt text, or image. The five
birthday people are likewise never named, and must not be implied through initials,
photographs, monograms, or placeholders. The page is signed by the occasion, not by
a person.

Also confirmed: the visual result is to be **distinctive and opinionated** — a real
point of view with a memorable signature, not a clean and conventional template.

## Brand Commitments

Recorded as given by the user, binding on later work. The visual world that expresses
them belongs in DESIGN.md, not here.

- **Voice:** warm and playful — celebratory but not formal. The "birthday" essence
  stays clear at the center.
- **Design direction: superseded by the user on 2026-08-25.** The brief originally
  pinned classic maritime — navy and white, anchors, ropes, brass, sand tones. After
  seeing all five directions rendered, the user chose **street wood type** instead: a
  public-theatre poster wall of condensed wood-type capitals at architectural scale,
  baselines on diagonals, words butted and cropped by the frame, in a **summer
  palette**. The maritime pin is retired, not merely overruled; it was raised as a
  concern before the choice and the user chose knowingly. The nautical record is kept
  here only so a later reader does not mistake its absence for an oversight.
- **Signature motif — "The Rule of Five" (survives the change):** the number five
  recurs as visual rhythm, all five instances visually equal, none more prominent than
  the others. In the chosen world it is carried by five words on five bands in five
  summer colours, not by pennants or knots.
- **Non-negotiable (survives the change):** at least one clear birthday element sits
  at the visual centre, so the page cannot read as a rally poster or a music bill.
  Water and summer context is present, and the composition stays deliberate rather
  than a busy collage.

## Evidence on Hand

The confirmed event facts above are the only content. There is no photography, no
logo, no prior invitation, no existing brand, and no venue imagery or map URL.

Later work must not fabricate any of these — in particular, not the names of the five
birthday people, not a street address or transit detail beyond the supplied map link,
not a contact method for the host, and not a second date or rain plan. An invitation composed of invented names
and places reads as finished when it is empty, and that failure is invisible until
someone tries to use it.

## Product Principles

1. **The invitee decides in seconds.** Someone who opened a link from a friend gives
   the page a moment. What the event is, when, and where must survive that moment.

2. **An invitation is felt before it is read.** Tone carries as much of the message as
   the facts do, which is what makes the distinctive-and-opinionated direction a
   product requirement rather than decoration.

3. **Five equals, no lead — and nobody signs it.** "Horizontal Celebration" is a
   structural constraint, not a caption. Any hierarchy that makes one of the five more
   prominent breaks the premise, and since no one is named at all — host included —
   the page has to carry warmth without a byline to lean on.

4. **Nobody arrives unable to get in the water.** With RSVP already settled, the one
   thing the site can still get wrong is a guest turning up in clothes the venue will
   not allow in the pool. Practical preparation is a first-class outcome, not a
   footnote — and the packing list is a venue rule, not a suggestion.

5. **Absent facts stay visibly absent.** A placeholder that looks real is worse than a
   blank. Everything the site states is on the confirmed list above; anything not on it
   is not stated at all.
