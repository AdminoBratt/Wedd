# Graph Report - 1st  (2026-11-16)

## Corpus Check
- Corpus is ~13,135 words - fits in a single context window. You may not need a graph.

## Summary
- 142 nodes · 243 edges · 8 communities
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 27 edges (avg confidence: 0.87)
- Token cost: 62,264 input · 0 output

## Community Hubs (Navigation)
- Page Sections and Components
- npm Dependencies
- Root Layout and Screenshots
- Design Skill and Gate
- TypeScript Config
- Business Brief
- Graphify Command Notes
- Content and Photo Credits

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 15 edges
2. `BRIEF.md - Landing Page Brief` - 14 edges
3. `site` - 12 edges
4. `Img()` - 11 edges
5. `Page()` - 10 edges
6. `CLAUDE.md - project instructions` - 9 edges
7. `HANDOFF.md - first version handoff` - 7 edges
8. `Arrow()` - 5 edges
9. `Footer()` - 5 edges
10. `Hero()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Page()` --calls--> `Footer()`  [EXTRACTED]
  app/page.tsx → components/Footer.tsx
- `Page()` --calls--> `Header()`  [EXTRACTED]
  app/page.tsx → components/Header.tsx
- `Page()` --calls--> `About()`  [EXTRACTED]
  app/page.tsx → components/sections/About.tsx
- `Page()` --calls--> `Faq()`  [EXTRACTED]
  app/page.tsx → components/sections/Faq.tsx
- `Page()` --calls--> `Hero()`  [EXTRACTED]
  app/page.tsx → components/sections/Hero.tsx

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Design step quality loop: skill run, gate, screenshots, commit** — claude_skill_run_sequence, claude_finish_gate, claude_playwright_screenshots, claude_commit_per_step [EXTRACTED 1.00]
- **Placeholder content centralized for swapping** — brief_centralized_placeholder_content, claude_content_in_site_ts, handoff_stand_in_photographs, handoff_stand_in_contacts, content_site [INFERRED 0.85]

## Communities (8 total, 0 thin omitted)

### Community 0 - "Page Sections and Components"
Cohesion: 0.18
Nodes (19): Page(), Arrow(), Footer(), Header(), Img(), Props, About(), Faq() (+11 more)

### Community 1 - "npm Dependencies"
Cohesion: 0.09
Nodes (27): dependencies, next@^15.5.29, react@^19.3.1, react-dom@^19.3.1, devDependencies, @playwright/test@^1.65.0, @types/node@^26.6.6, @types/react@^19.3.0 (+19 more)

### Community 2 - "Root Layout and Screenshots"
Cohesion: 0.12
Nodes (12): kitCss, metadata, moments, pageCss, viewport, CLAUDE.md - project instructions, Playwright screenshot review at 1440/1024/768/390, outDir (+4 more)

### Community 3 - "Design Skill and Gate"
Cohesion: 0.13
Nodes (10): Next.js/React, one page, mobile-first, accessible, fast, Skill dealers (hero, palette, type, nav, footer, close, rhythm, buttons, mark, moments), design-taste-frontend skill and kit, Finish gate (gate.mjs, kind service), Next.js App Router static export, HANDOFF.md - first version handoff, Status 2026-11-16: GATE PASS on feature/landing-v1, Moments: photo-chapters (#arbetsgang), word-highlight (#budget) (+2 more)

### Community 4 - "TypeScript Config"
Cohesion: 0.11
Nodes (17): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+9 more)

### Community 5 - "Business Brief"
Cohesion: 0.16
Nodes (14): BRIEF.md - Landing Page Brief, Primary CTA: call or email directly (no forms), Corporate: end-to-end event planning, Excluded: testimonials, partner logos, Instagram feed, pricing, Section order (Header, Hero, Tjanster, Process, Portfolio, Om oss, FAQ, Kontakt, Footer), Sigge Brat Event (placeholder business name), Stockholm, local clients only, All page copy in Swedish (+6 more)

### Community 6 - "Graphify Command Notes"
Cohesion: 0.33
Nodes (6): graphifyommands.txt - graphify command cheat sheet, graphify add (paper, video), graphify build / update / cluster-only / wiki commands, graphify hook install / merge-graphs, graphify prs (dashboard, triage, conflicts), graphify query / path / explain

### Community 7 - "Content and Photo Credits"
Cohesion: 0.50
Nodes (3): Centralized placeholder content file, Licensed stand-in photos with one footer credit line, Stand-in photographs (Wikimedia Commons)

## Knowledge Gaps
- **8 isolated node(s):** `Stockholm, local clients only`, `All page copy in Swedish`, `Moments: photo-chapters (#arbetsgang), word-highlight (#budget)`, `graphify build / update / cluster-only / wiki commands`, `graphify query / path / explain` (+3 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 49 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `CLAUDE.md - project instructions` connect `Root Layout and Screenshots` to `Page Sections and Components`, `Design Skill and Gate`, `Business Brief`, `Content and Photo Credits`?**
  _High betweenness centrality (0.207) - this node is a cross-community bridge._
- **What connects `Stockholm, local clients only`, `All page copy in Swedish`, `Moments: photo-chapters (#arbetsgang), word-highlight (#budget)` to the rest of the system?**
  _8 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `npm Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09259259259259259 - nodes in this community are weakly interconnected._
- **Why does `next` connect `npm Dependencies` to `Root Layout and Screenshots`?**
  _High betweenness centrality (0.207) - this node is a cross-community bridge._
- **Should `Root Layout and Screenshots` be split into smaller, more focused modules?**
  _Cohesion score 0.12280701754385964 - nodes in this community are weakly interconnected._
- **Why does `BRIEF.md - Landing Page Brief` connect `Business Brief` to `Root Layout and Screenshots`, `Design Skill and Gate`, `Content and Photo Credits`?**
  _High betweenness centrality (0.095) - this node is a cross-community bridge._
- **Should `Design Skill and Gate` be split into smaller, more focused modules?**
  _Cohesion score 0.13071895424836602 - nodes in this community are weakly interconnected._