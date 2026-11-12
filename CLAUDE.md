# CLAUDE.md

Landing page for a wedding and corporate event planner in Stockholm (placeholder name *Saga Ström Event*). **`BRIEF.md` is the source of truth** for business, audience, tone, sections and CTA. Read it before any work.

## Stack
- **Next.js (App Router) + React + TypeScript**, built as a **static export** (`output: 'export'` in `next.config.mjs`). No server features, API routes or `next/image` optimization (use `images: { unoptimized: true }`).
- Styling: the design-taste-frontend kit (`system.css` + dealt `:root` tokens) plus small page CSS where the skill allows it. No Tailwind or UI libraries unless the skill calls for them.
- Node 22+. Playwright (`@playwright/test`, Chromium) as a dev dependency for screenshots.
- Page language: Swedish (`<html lang="sv">`).

## Commands
```bash
npm run dev          # dev server, http://localhost:3000
npm run build        # static export into out/
npm run shots        # Playwright screenshots of out/ into shots/
```

## Project structure
```
app/
  layout.tsx           # <html lang="sv" data-type="service" ...>, metas, head tags, fonts
  page.tsx             # assembles the sections in BRIEF.md order
  globals.css          # imports the kit CSS + dealt :root tokens + page CSS
components/
  Header.tsx  Footer.tsx
  sections/            # Hero, Services, Process, Portfolio, About, Faq, Contact
content/
  site.ts              # ALL copy, contacts, photo paths and credits (placeholders live here only)
public/
  assets/              # design-taste-frontend kit, copied from the skill (never edited)
  photos/              # stand-in photographs
  share.jpg
scripts/
  screenshot.mjs       # Playwright screenshot script
shots/                 # screenshot output (gitignored)
.taste-skill/          # skill deal history, gate state, waivers
BRIEF.md  CLAUDE.md
```
Sections are `main > section` with one `.wrap` each, taking the starter's markup and classes as React components.

## Rules

### 1. Use the design-taste-frontend skill for all design work
- Invoke the `design-taste-frontend` skill **before** any layout, styling, copy, imagery or visual change, however small, and follow its run: kind → gate armed → copy first → plan as screens → deal → build → check → report.
- Kind is **service** (page type `service`, site-kind `other`). Arm the gate against the export:
  `node <skill>/scripts/gate.mjs --start out/index.html --root out --kind service --category "<what is sold>" --primary "<main action>"`
- Deal the hero, palette, type, nav, footer, close, rhythm, buttons, mark and moments with the skill's dealers. Never pick by taste, and record every result at the top of `<body>` and in the plan.
- Obey its house rules. In particular: no captions under images, one section per screen, equal edges, photographs lead, no effects, scenes or CSS grounds (this is not a tech page), no violet, and contacts per rule 9 (`.example` email, no real-format phone, district only).
- Never edit the kit's files in `public/assets` or the skill folder. Waive a false FAIL in `.taste-skill/waivers.json` with its reason.
- Rebuild (`npm run build`) before every skill check. Finish each design step with `gate.mjs out/index.html --root out` reaching `GATE: PASS` or `GATE: OPEN`.

### 2. Check results with Playwright screenshots
- After every visual change: `npm run build`, then `npm run shots`. `scripts/screenshot.mjs` serves `out/` on 127.0.0.1 and takes full-page shots at **1440x900, 1024x768, 768x1024 and 390x844** into `shots/<width>.png`.
- Look at every screenshot (Read the PNGs) against the skill's checklist before calling a step done. Report what you saw, including anything off.
- Playwright screenshots are the visual review. The skill's own scripts (copy-lint, consistency, check, perf, gate) are still required and still decide pass or fail. Run them one at a time in the foreground, as the skill says.

### 3. Commit after each finished step
- A step is finished when it builds, its screenshots were reviewed, and (for design steps) the gate passed or is open.
- Commit right then with a clear message saying what the step did (for example `Add hero and header`, `Add services section`). One step per commit, no batching.
- Work on a feature branch, not `master`/`main`. Never commit `shots/`, `out/`, `.next/` or `node_modules/`.
- End every commit message with:
  `Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>`

### Content
- All placeholder copy, contacts and photo references live in `content/site.ts`, so real content can be swapped in one place. Never hard-code copy in components.
- Stand-in photos are licensed (via the skill's `photos.mjs`). Credits go in one footer line, and every stand-in is listed in the step report.
