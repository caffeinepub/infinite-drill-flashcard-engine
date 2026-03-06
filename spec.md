# NcertBhaiya

## Current State
Full-stack NCERT learning platform with 12+ pages including Home, NCERT browser, IIT JEE, Blog, Quiz, Flashcards, Cheat Sheet, Leaderboard, and Generate. The previous build attempt (SEO audit fixes) failed due to timeout. The site has good SEO foundations but audit tools are flagging several technical issues.

## Requested Changes (Diff)

### Add
- A 404 catch-all route in App.tsx that redirects unknown URLs to homepage (fixes 4XX errors Google sees when crawling non-existent paths directly)
- `data-ocid="leaderboard.page_h1"` attribute to Leaderboard h1 (already has h1, just needs marker)
- `data-ocid="generate.page_h1"` attribute to Generate page h1
- `data-ocid="iit.page_h1"` attribute to IIT page h1
- SEO content section on Leaderboard page (below rankings) with 200+ words of descriptive text about competitive learning, XP system, and why practicing improves CBSE scores — boosts text-to-HTML ratio
- SEO content section on Generate page below the form with descriptive text about AI-powered NCERT content creation

### Modify
- vite.config.js: Enable `minify: 'terser'` (currently `false`) and add manual chunk splitting for proper code splitting and better caching. Add `rollupOptions.output.chunkFileNames` and `assetFileNames` with content hash for cache busting.
- index.html: Shorten `<title>` tag to under 60 characters. Current: "NCERT Bhaiya | Free NCERT Solutions, MCQ Quiz & Notes Class 1-12 | CBSE Study" (79 chars). New: "NCERT Bhaiya | Free NCERT Solutions Class 1-12" (47 chars).
- useSEO.ts: Update default title to match shortened title
- IIT.tsx page h1: Currently shows "IIT JEE Exam Hub" without data-ocid — add attribute
- Blog title in useSEO call: Currently "NCERT Blog — Free Study Notes, Tips & Chapter Summaries for Class 6 to 12" (74 chars) — shorten to under 60 chars via the title prop
- Generate title in useSEO: "AI Content Generator — Create NCERT MCQs, Flashcards & Cheat Sheets | NCERT Bhaiya" — shorten
- sitemap.xml: Update lastmod dates to 2026-03-06

### Remove
- Nothing to remove

## Implementation Plan
1. Fix vite.config.js — enable minify terser + manual chunk splitting + proper file naming with hashes
2. Fix index.html title tag (shorten to <60 chars)
3. Fix useSEO.ts default title to match
4. Add 404 redirect route in App.tsx
5. Add data-ocid markers to IIT, Leaderboard, Generate page h1 elements
6. Add SEO content sections to Leaderboard and Generate pages (200+ words each)
7. Shorten page-level title props in Blog.tsx and Generate.tsx useSEO calls
8. Update sitemap.xml lastmod dates
9. Validate (typecheck + lint + build)
