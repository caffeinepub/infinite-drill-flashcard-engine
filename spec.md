# NCERT Bhaiya — Blog Feature

## Current State
The site has: Home, NCERT browser, Quiz, Flashcards, Cheat Sheet, Generate, Leaderboard, IIT JEE pages.
No blog section exists. The router has 8 routes. SEO foundation (meta, H1, sitemap, schema, robots.txt) is already in place.

## Requested Changes (Diff)

### Add
- `/blog` route — Blog listing page showing all blog posts as cards
- `/blog/:slug` route — Individual blog post page with full article content
- `Blog.tsx` page — listing view with SEO meta
- `BlogPost.tsx` page — individual post view with SEO meta, H1, structured data (Article schema)
- `blogData.ts` — static blog post data with 10 articles targeting low-competition NCERT/education keywords
- Blog link in the top navigation (Layout component)
- Sitemap updated with /blog and all /blog/:slug URLs

### Modify
- `App.tsx` — add blogRoute and blogPostRoute
- `Layout.tsx` — add Blog nav link
- `public/sitemap.xml` — add blog URLs

### Remove
- Nothing removed

## Implementation Plan

1. Create `src/data/blogData.ts` with 10 low-competition blog articles. Topics chosen for low keyword difficulty but high student search intent:
   - "What is the difference between plant cell and animal cell NCERT Class 8"
   - "NCERT Class 9 Science Chapter 1 Matter in Our Surroundings important questions"
   - "How to study NCERT effectively for CBSE board exam"
   - "NCERT Class 10 Science Chapter 6 Life Processes notes"
   - "Difference between mitosis and meiosis class 10 CBSE"
   - "NCERT Class 9 Maths Chapter 1 Number Systems explained"
   - "Class 8 Geography Chapter 1 Resources notes and summary"
   - "NCERT Class 6 Science Chapter 1 Food Where Does It Come From"
   - "How to score 95 in CBSE Class 10 Board Exam tips"
   - "NCERT Solutions for Class 7 Science Chapter 1 Nutrition in Plants"

2. Build `Blog.tsx` listing page — search/filter, blog cards with title/excerpt/read-time/category, SEO hook

3. Build `BlogPost.tsx` — full article, Article JSON-LD schema, related posts section, breadcrumb, dynamic H1 and meta

4. Wire routes in `App.tsx`

5. Add "Blog" to nav in `Layout.tsx`

6. Update `sitemap.xml`
