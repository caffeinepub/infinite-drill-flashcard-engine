# NcertBhaiya

## Current State
- Admin/Operator panel exists at `/admin` with Dashboard, Users, Site Settings, and Announcements tabs
- Blog page at `/blog` and `/blog/:id` loads from static `blogData.ts` (37+ static posts)
- Backend has user auth, leaderboard, site settings — no blog post management
- Admin and operator roles exist; operators can edit settings but not manage users

## Requested Changes (Diff)

### Add
- Backend: `BlogPost` type with id, title, description, content, authorName, authorUsername, createdAt, published fields
- Backend: `stable var blogPostEntries` for persistent blog storage
- Backend: `createBlogPost`, `getAllBlogPosts`, `deleteBlogPost`, `updateBlogPost` functions (admin/operator only for create/update/delete)
- Frontend: New "Blog" tab in AdminPanel accessible to both Admin and Operator
- Blog creation form: Title, Page Description (excerpt/meta), and Content (rich textarea)
- AI Enhancement button: client-side content polisher that structures and enriches the draft before posting
- Post is published with the logged-in user's full name as author
- Blog.tsx: merge static blog data with dynamic posts from backend
- BlogPost.tsx: handle dynamic posts from backend alongside static ones

### Modify
- AdminPanel.tsx: add 5th tab "Blog" with blog creation + post management UI
- Blog.tsx: fetch backend blog posts and merge/display with static ones
- BlogPost.tsx: detect dynamic posts and render them from backend data
- backend.d.ts: add BlogPost type and new functions
- main.mo: add BlogPost stable storage and CRUD functions

### Remove
- Nothing removed

## Implementation Plan
1. Add BlogPost type and stable storage to main.mo with CRUD functions gated to admin/operator
2. Regenerate backend.d.ts with new types and functions
3. Add Blog tab to AdminPanel with: creation form (title, description, content), AI enhance button, post list with delete
4. Update Blog.tsx to fetch and merge dynamic posts from backend with static posts
5. Update BlogPost.tsx to handle dynamic post rendering
