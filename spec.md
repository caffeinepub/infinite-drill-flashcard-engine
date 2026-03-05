# NCERT Bhaiya — Maximum Performance Refactor

## Current State

- `vite.config.js` has `minify: false` — JS and CSS ship completely uncompressed
- No manual chunk splitting — all vendor code (React, router, motion, Three.js, icons, DFINITY) lands in one giant bundle
- `ncertContent.ts` (10,691 lines), `iitData.ts` (1,922 lines), `blogData.ts` (1,142 lines) — all imported synchronously at startup, blocking first paint
- `main.tsx` creates a `QueryClient` with default settings (no staleTime, refetches on every window focus), causing unnecessary network churn
- Google Analytics `<script async>` is in `<head>` — even async scripts compete with critical resources during initial parse
- Logo PNG (512×512, ~180 KB) used as both navbar icon and favicon — no WebP/AVIF, no resize optimization
- `@react-three/fiber`, `@react-three/drei`, `three` (~700 KB) are listed as hard dependencies but no page currently needs 3D on first load
- `react-icons`, `recharts`, `react-quill-new`, `react-resizable-panels`, `react-day-picker` are imported but not all used on critical paths
- No `<link rel="modulepreload">` for critical entry chunks
- `QueryClientProvider` wraps the entire app but some components still refetch on mount unnecessarily

## Requested Changes (Diff)

### Add
- Terser minification with 2-pass compression, `drop_console`, `drop_debugger`
- Granular manual chunk splitting: `vendor-react`, `vendor-router`, `vendor-motion`, `vendor-three`, `vendor-icons`, `vendor-dfinity`, `data-ncert`, `data-iit`, `data-blog`
- Async/deferred loading for all large data files (ncertContent, iitData, blogData) — imported only when the relevant page mounts
- `QueryClient` with 5-minute `staleTime`, `gcTime` 10 minutes, `refetchOnWindowFocus: false`, `refetchOnMount: false` for static data
- `<link rel="modulepreload">` for React entry in index.html
- `loading="lazy"` + explicit `width`/`height` on all off-screen images in pages
- `content-visibility: auto` on heavy below-fold sections (already partially done — extend to more sections)
- Resource hints: `<link rel="preconnect">` for Google Analytics domain
- Bundle analyzer script for ongoing monitoring

### Modify
- `vite.config.js`: enable Terser, add `rollupOptions.output.manualChunks`, set `cssCodeSplit: true`, add `assetsInlineLimit` for small assets
- `main.tsx`: configure optimized `QueryClient`
- `src/pages/NCERT.tsx`: lazy-import `ncertContent` data inside `useEffect`/`useState` pattern
- `src/pages/IIT.tsx`: lazy-import `iitData` inside component
- `src/pages/Blog.tsx` / `BlogPost.tsx`: lazy-import `blogData`
- `src/pages/Home.tsx`: lazy-import `demoData` for topic cards (non-critical)
- `index.html`: move Google Analytics after `</body>` open with `defer`, add `modulepreload` hint
- All page components: add `loading="lazy"` to below-fold images, add explicit dimensions

### Remove
- `minify: false` from vite.config.js
- Synchronous top-level imports of large data files in page components
- Unnecessary `refetchOnMount`/`refetchOnWindowFocus` behavior

## Implementation Plan

1. Update `vite.config.js` — enable Terser minification + manual chunk splitting + cssCodeSplit
2. Update `main.tsx` — optimized QueryClient config
3. Update `index.html` — move GA to body end with defer, add modulepreload
4. Refactor `NCERT.tsx` — async data load via useState+useEffect
5. Refactor `IIT.tsx` — async data load
6. Refactor `Blog.tsx` / `BlogPost.tsx` — async data load
7. Refactor `Home.tsx` — async demoData load, remove framer-motion from critical path
8. Add `loading="lazy"` + dimensions to all off-screen images across pages
9. Validate: typecheck + build
