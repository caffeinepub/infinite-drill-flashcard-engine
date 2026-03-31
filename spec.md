# NcertBhaiya — 10 High-Competition SEO Blog Posts

## Current State
The blog at `/blog` has 37+ static posts in `src/frontend/src/data/blogData.ts`, all targeting low-competition keywords. The last slug is `iit-jee-preparation-guide-for-class-11-beginners`. Each post has: slug, title, metaTitle, metaDescription, excerpt, category, classTag, subject, readTime, publishedAt, keywords[], heroImage, and content[] (sections of type h2/h3/p/ul/ol/table/tip/note).

## Requested Changes (Diff)

### Add
- 10 new high-competition, high-search-volume blog posts appended to `blogPosts` array in `blogData.ts`
- Each post targets a top-searched NCERT/CBSE/JEE keyword (50,000–500,000 monthly searches)
- Each post: 600+ word content, AI-generated hero image, at least one comparison table, JSON-LD Article schema data in the post metadata, strong internal links to related quiz/flashcard pages
- New hero images saved in `src/frontend/public/assets/generated/`
- Sitemap updated with 10 new blog post URLs

### Modify
- `src/frontend/src/data/blogData.ts` — append 10 new BlogPost objects
- `src/frontend/public/sitemap.xml` — add 10 new blog post URLs with lastmod 2026-03-31

### Remove
- Nothing removed

## Implementation Plan

### 10 New High-Competition Posts

1. **slug:** `ncert-solutions-class-10-science-all-chapters`  
   **Target keyword:** "NCERT solutions for class 10 science" (~500K/mo)  
   **Title:** NCERT Solutions for Class 10 Science — All 16 Chapters  
   **Content:** Chapter-wise solution summary for all 16 chapters, table of chapters vs marks weightage, tips to score 95+ in board exam

2. **slug:** `ncert-solutions-class-9-maths-all-chapters`  
   **Target keyword:** "NCERT solutions class 9 maths" (~300K/mo)  
   **Title:** NCERT Solutions Class 9 Maths — All 15 Chapters Explained  
   **Content:** Chapter list with key concepts, important theorems table, frequently asked questions in exams

3. **slug:** `cbse-class-10-board-exam-preparation-2026`  
   **Target keyword:** "CBSE class 10 board exam preparation 2026" (~200K/mo)  
   **Title:** CBSE Class 10 Board Exam Preparation 2026 — Complete Guide  
   **Content:** Month-wise study plan, subject-wise strategy table, do's and don'ts, resources list

4. **slug:** `ncert-class-12-physics-notes-chapter-wise`  
   **Target keyword:** "NCERT class 12 physics notes" (~250K/mo)  
   **Title:** NCERT Class 12 Physics Notes — Chapter-wise Key Concepts  
   **Content:** All 15 chapters overview, important formulas table, high-weightage chapters for JEE/boards

5. **slug:** `ncert-solutions-class-10-social-science`  
   **Target keyword:** "NCERT solutions class 10 social science" (~180K/mo)  
   **Title:** NCERT Solutions Class 10 Social Science — History, Civics, Geography, Economics  
   **Content:** All 4 books covered, chapter summary table, map work tips, important dates/events

6. **slug:** `iit-jee-2026-complete-preparation-strategy`  
   **Target keyword:** "IIT JEE preparation 2026" / "how to crack IIT JEE" (~400K/mo)  
   **Title:** IIT JEE 2026 Complete Preparation Strategy — Crack JEE in 1 Year  
   **Content:** Subject-wise strategy, topic difficulty table, best books comparison, daily routine plan

7. **slug:** `ncert-class-11-chemistry-notes-all-chapters`  
   **Target keyword:** "NCERT class 11 chemistry notes" (~220K/mo)  
   **Title:** NCERT Class 11 Chemistry Notes — All Chapters with Key Reactions  
   **Content:** Chapter-wise notes summary, important reactions/equations table, common exam mistakes

8. **slug:** `cbse-class-12-board-exam-preparation-strategy`  
   **Target keyword:** "CBSE class 12 board exam preparation" (~300K/mo)  
   **Title:** CBSE Class 12 Board Exam Preparation — Topper Strategy 2026  
   **Content:** Subject-wise time allocation table, revision plan, important chapters per subject, scoring tips

9. **slug:** `ncert-solutions-class-8-science-all-chapters`  
   **Target keyword:** "NCERT solutions class 8 science" (~150K/mo)  
   **Title:** NCERT Solutions Class 8 Science — All 18 Chapters Made Easy  
   **Content:** Chapter overview table, key experiments/demonstrations, common board questions per chapter

10. **slug:** `ncert-class-10-maths-solutions-all-chapters`  
    **Target keyword:** "NCERT solutions class 10 maths" (~450K/mo)  
    **Title:** NCERT Class 10 Maths Solutions — All 15 Chapters Step by Step  
    **Content:** Chapter list with concepts, marks distribution table, most important theorems, real-number to probability coverage

### SEO Requirements per Post
- `metaTitle`: 50–60 characters, includes primary keyword
- `metaDescription`: 150–160 characters, includes primary keyword + call to action
- `keywords[]`: 5–8 high-competition keywords per post (include LSI variants)
- Content: minimum 600 words, includes H2/H3 headings, one comparison table, one tip/note callout, internal links text referencing NCERT Bhaiya quiz/flashcard features
- `heroImage`: path to AI-generated image in `/assets/generated/`
- `publishedAt`: 2026-03-31
