# NcertBhaiya

## Current State
NCERT Bhaiya is a React SPA with Motoko backend featuring NCERT chapters (Classes 1-12), quizzes, flashcards, blog, leaderboard, admin panel, and mandatory login. Routes include `/`, `/ncert`, `/quiz/:topicId`, `/flashcards/:topicId`, `/cheatsheet/:topicId`, `/generate`, `/leaderboard`, `/iit`, `/blog`, `/blog/:slug`, `/admin`, `/about`, `/contact`.

## Requested Changes (Diff)

### Add
- New `/pyq` route and `PYQ.tsx` page for Class 10 CBSE Previous Year Questions
- `pyqData.ts` data file with PYQs for Science, Maths, Social Science, English — organized by year (2023, 2022, 2021) and subject
- PYQ listing page: filter by subject + year, show Q&A with expandable answers
- Individual subject PYQ detail pages via `/pyq/:subject` route
- SEO: dynamic meta title ("Class 10 CBSE PYQ 2024 — Previous Year Questions with Answers"), H1, JSON-LD FAQPage schema per subject, Open Graph
- Sitemap entries for `/pyq` and each subject route
- "PYQ" link in navbar for easy discovery

### Modify
- `App.tsx` — add `/pyq` and `/pyq/:subject` routes
- `NavBar.tsx` — add PYQ navigation link
- `sitemap.xml` — add PYQ URLs with high priority (0.9)

### Remove
- Nothing removed

## Implementation Plan
1. Create `src/frontend/src/data/pyqData.ts` with Class 10 PYQs (Science: 20 Qs, Maths: 20 Qs, Social Science: 15 Qs, English: 10 Qs) across 2021-2023
2. Create `src/frontend/src/pages/PYQ.tsx` — main PYQ listing page with subject + year filters, expandable Q&A cards, SEO meta, JSON-LD FAQPage schema
3. Create `src/frontend/src/pages/PYQSubject.tsx` — per-subject deep-dive page with full question list, SEO optimized per subject
4. Update `App.tsx` to add `/pyq` and `/pyq/$subject` lazy routes
5. Update `NavBar.tsx` to add PYQ link
6. Update `sitemap.xml` with all PYQ URLs
