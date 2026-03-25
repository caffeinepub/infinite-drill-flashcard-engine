# NcertBhaiya

## Current State
Blog has 27 posts in `src/frontend/src/data/blogData.ts`. The file is ~3087 lines.

## Requested Changes (Diff)

### Add
- 10 new blog posts to the `blogPosts` array in `src/frontend/src/data/blogData.ts`
- All images already generated at `/assets/generated/`

### Modify
- `blogData.ts` — append 10 new posts before the closing `];`
- Sitemap to include 10 new blog URLs

### Remove
- Nothing

## Implementation Plan
1. Add 10 new blog post objects to `blogPosts` array in `blogData.ts`
2. Update sitemap.xml with 10 new blog URLs
