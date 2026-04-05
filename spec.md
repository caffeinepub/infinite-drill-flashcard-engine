# NcertBhaiya

## Current State
The blog (`src/frontend/src/data/blogData.ts`) currently has 67+ posts. The file exports `blogPosts`, `getBlogPostBySlug`, and `blogCategories`. Each post has: id, title, slug, excerpt, category, readTime, date, image, metaTitle, metaDescription, content array.

## Requested Changes (Diff)

### Add
- 10 new high-quality, SEO-optimized blog posts covering high-value NCERT/CBSE topics
- Each post: 1,200+ word equivalent content, comparison tables, step-by-step explanations, FAQ section, unique hero image from newly generated assets
- Topics:
  1. NCERT Class 10 Science — Complete Chapter-wise Notes and Summary
  2. Human Body Systems — Class 10 Biology Notes
  3. NCERT History of India — Class 6 to 10 Chapter-wise Guide
  4. Introduction to Trigonometry Class 10 — Formulas, Proofs and Practice
  5. Atomic Structure and Chemical Bonding — Class 11 Chemistry
  6. Laws of Motion — Class 11 Physics Notes and Numericals
  7. Our Environment — Class 10 Science Chapter 15 Notes
  8. Polynomials Class 9 and 10 — Complete Guide with Examples
  9. Money and Credit — Class 10 Economics Notes
  10. English Grammar for CBSE Class 10 — Writing Skills and Grammar Rules

### Modify
- Append 10 new blog entries to the `blogPosts` array in `blogData.ts`
- Update `blogCategories` to ensure "History", "Biology", "English" are included if not already

### Remove
- Nothing removed

## Implementation Plan
1. Append 10 fully structured blog post objects to `blogData.ts` array (before the closing `];`)
2. Each post includes: metaTitle (<60 chars), metaDescription (150-160 chars), rich content array with h1/h2/h3, ul, table, tip, and faq types
3. Use the 10 newly generated hero images
4. Ensure all slugs are unique and not duplicating existing posts
