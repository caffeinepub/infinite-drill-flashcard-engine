# NcertBhaiya

## Current State
The app has a username/password authentication system with persistent Motoko storage. `UserAccount` stores `fullName`, `email`, `username`, `passwordHash`, `createdAt`, and `lastLoginAt`. There is no `/profile` route. The router has protected routes under a `protectedLayout`. The backend has `getUserByUsername` (query) and `login`/`signUp` functions but no update function for profile fields.

## Requested Changes (Diff)

### Add
- `/profile` route (protected) — Profile page component
- Backend function `updateUserProfile(username, fullName, email)` that updates name and email for an existing account
- Frontend Profile page: shows current name and email, allows editing, saves to backend

### Modify
- `App.tsx` — add `profileRoute` to router and lazy-load the Profile component
- Navbar/header — add a "Profile" link for logged-in users

### Remove
- Nothing

## Implementation Plan
1. Add `updateUserProfile` to Motoko backend — takes username + new fullName + email, returns updated account or error
2. Create `src/frontend/src/pages/Profile.tsx` — form with Full Name and Email fields, pre-filled from localStorage/backend, submit calls `updateUserProfile`
3. Register `/profile` route in `App.tsx`
4. Add Profile link in the navbar (visible only when logged in)
