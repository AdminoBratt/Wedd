# Handoff: first version of the landing page (paused 2026-11-12)

Branch `feature/landing-v1`. **Nothing is committed yet**: the step isn't finished (the gate isn't passing). Every file
is untracked or modified in the working tree.

## Where it stopped

The gate was run by hand once: **`GATE: FAIL 2 (round 1 of 3)`**. Then I paused it with `gate.mjs --done`, so to resume, re-arm it
first (same command as before):

```bash
node C:/Users/info/.claude/skills/design-taste-frontend/scripts/gate.mjs --start out/index.html --root out --kind service --category "bröllops- och eventplanering i Stockholm" --primary "Ring oss"
```

### The two open FAILs (fix these next)

1. **copy-headings**: the checker says 5 headings name "no product, part, place or section": h3 "Företagsevent",
   h2 "Vanliga frågor", and the FAQ questions ("Hur långt i förväg…", "Tar ni uppdrag…", "Använder ni egna…").
   It reads English section nouns only (faq, questions, services…), so the Swedish headings are largely a false hit.
   - FAQ entries may be questions per `copy.md`, so waive those as one finding.
   - Or reword the h2 to name the section, e.g. "Frågor om planering och budget", and the group h3s to
     "Bröllop vi har planerat" / "Företagsevent vi har planerat" (only if that's true of the real client).
   - Waivers in `.taste-skill/waivers.json` (max 5, 2 used: copy-fact, no-visual).
2. **section-height** `#portfolio` at 1440: group 1 ends at 833px, 5px past 828. Trim 5px or more: shorten the line
   under "Bröllop", drop that line, or tighten the `stack-4` gap in group 1.

Then: `npm run build`, `npm run shots`, read the screenshots, run the gate again (round 2), and **commit** when it reports PASS or OPEN.

## Done so far

- Next.js 15 static export. `npm run build` gives `out/`, `npm run shots` gives `shots/<width>.png` (scripts/screenshot.mjs).
  - TypeScript is pinned to 6 (TS 7 breaks Next 15).
  - Imports are relative (the `@/` alias failed under TS 7, so I removed it).
- Kit copied into `public/assets` (never edit). Photos in `public/photos`. `public/credits.html` comes from `photos.mjs credits` and was translated to Swedish.
- `app/globals.css` (dealt `:root` tokens + page CSS) is **inlined by `app/layout.tsx` after the kit links**, because
  the kit sets its own `:root` defaults and Next puts its CSS first otherwise.
- The kit's JS loads via `next/script` `afterInteractive`, so it runs after hydration.
- All copy and photo refs are in `content/site.ts`.
- Checks:
  - copy-lint: 0 FAIL / 0 WARN.
  - check.mjs: no findings at 1440/1024/820/768/390, before the last photo swap (re-run it).
  - perf: 0 FAIL, 7 WARN (image bytes 2,275 KiB, JS 561 KiB from the Next runtime).
- Reviewed screen by screen at 1440 (`shots/tiles/desktop-*`) and 390 (`shots/tiles/mobile-*`). The layout reads cleanly.
  - The keynote-stage frame in portfolio group 2 is soft.

## The deal (also in `content/site.ts` → `deal`)

- Kind: service.
- Hero: `photo`, printed via `--hero` because the brief asks for full bleed (the dealer gave split).
- Nav, close, rhythm, buttons, mark: `nav-centre`, `close-photo`, `dark-band` (on the portfolio), `tonal`, `arc`.
- Footer: `footer-columns`. Re-dealt, because `footer-dark` is for software and product and caused the button-styles and same-action FAILs; `footer-visit` needs a street.
- Palette: `blush-sage-slate`.
- Type: `source-serif`. The first serif pairing, since the brief asks for serif display.
- Moments: `photo-chapters` (#arbetsgang, the 4 steps), `word-highlight` (#budget).
- Voice: register 10, refusal and narrowness: Stockholm only, full planning only, no prices online.

## Deliberate choices to keep in mind

- Phone is `tel:+46800000000` (all zeros: not dialable) and is **not printed** (the gate FAILs a printed zero number).
- Email is `mailto:hej@siggebratevent.example`, never printed (`copy.md`).
- No social links (the brief gives no accounts). No Privacy/Terms pages.
- `og:image` is a relative `/share.jpg` until a domain exists. The canonical is left out.
- The brief's name is *Sigge Brat Event*; CLAUDE.md still says *Saga Ström Event*. BRIEF.md wins, but CLAUDE.md should be updated.

## Stand-in photographs (Wikimedia Commons, all to be replaced)

| Slot | Frame |
| --- | --- |
| Hero | f61710778 aisle |
| Services | f61711770 bouquet, f33307605 Beau-Rivage gala |
| Chapters | f117883894 notebook, f181144114 table setting, f38690209 conference ballroom, f61708616 shoes |
| Portfolio | f61711941 rings, f194443110 hands, f201908224 candle table, f84999500 keynote stage, f126871360 meeting room, f95147280 champagne |
| Om oss | f108169023 white flowers |
| Close | f28183529 lakeside dining room |

Unused files to delete from `public/photos/`: none left (f2114898, f48170920 and f61734534 were removed).

## Not checked yet

- consistency.mjs standalone: it hung once and was stopped, but the gate runs it internally fine.
- The 19 gate WARNs, which aren't blocking: read them in `.taste-skill/gate.json`.
