# Handoff: first version of the landing page

Branch `feature/landing-v1`. **Status (2026-11-16): `GATE: PASS`**. The first version is finished and committed.

## Last step (2026-11-16)

- copy-headings: the FAQ h2 is now "Frågor om bröllop och företagsevent", the portfolio h3 is "Företagsevent i Stockholm",
  and three FAQ questions now name the wedding/event or Stockholm. No new waivers.
- section-height `#portfolio` at 1440: the one-line sublines under both portfolio group headings were removed
  (the services section already says the same).
- The `no-visual` waiver now targets `section#fragor` (it had matched the old heading text).

## Waivers (2 of 5)

- copy-fact on the h1: the checker reads only English prepositions before a place name.
- no-visual on `section#fragor`: the FAQ is the page's one section without a picture (sections.md section 1).

## Still open / next

- 19 non-blocking gate WARNs in `.taste-skill/gate.json` (scroll-reveal/pinned on the dealt moments are expected).
- perf: 7 WARN (image bytes, Next runtime JS). The keynote-stage frame in portfolio group 2 is soft.
- CLAUDE.md still says *Saga Ström Event*. BRIEF.md (*Sigge Brat Event*) wins, so update CLAUDE.md.
- `og:image` is relative and there's no canonical until a domain exists.
- Phone `tel:+46800000000` and email `hej@siggebratevent.example` are stand-ins, never printed.

## The deal (also in `content/site.ts` → `deal`)

Service. Hero `photo` (full bleed per brief), nav-centre, footer-columns, close-photo, dark-band (portfolio), tonal
buttons, arc mark, palette blush-sage-slate, type source-serif, radius soft. Moments: photo-chapters (#arbetsgang),
word-highlight (#budget).

## Stand-in photographs (Wikimedia Commons, all to be replaced)

| Slot | Frame |
| --- | --- |
| Hero | f61710778 aisle |
| Services | f61711770 bouquet, f33307605 Beau-Rivage gala |
| Chapters | f117883894 notebook, f181144114 table setting, f38690209 conference ballroom, f61708616 shoes |
| Portfolio | f61711941 rings, f194443110 hands, f201908224 candle table, f84999500 keynote stage, f126871360 meeting room, f95147280 champagne |
| Om oss | f108169023 white flowers |
| Close | f28183529 lakeside dining room |
