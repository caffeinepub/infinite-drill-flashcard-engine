# NcertBhaiya

## Current State
- Backend uses `stable var userAccountEntries` with `preupgrade`/`postupgrade` hooks — accounts persist across deployments
- Frontend `AuthContext` persists login session in `localStorage` under key `ncertbhaiya_user`
- Auth page (`/auth`) has Login and Signup tabs with live username availability check
- `AuthGuard` component currently passes children through without any route protection
- Admin panel at `/admin` with role-based access (admin > operator > user)

## Requested Changes (Diff)

### Add
- `AuthGuard` should redirect unauthenticated users to `/auth` for protected routes
- Auth page should show a clear message confirming accounts are permanently saved
- "Remember me" checkbox that stores session in localStorage vs sessionStorage

### Modify
- `AuthGuard` — restore route protection so unauthenticated users are redirected to `/auth`
- Auth page signup tab — add reassurance text: accounts are permanently saved and can be used to log in from any device
- Login page — show friendly message if user arrives after being redirected (not logged in)

### Remove
- Nothing to remove

## Implementation Plan
1. Update `AuthGuard` to check `useAuth()` and redirect to `/auth` if no user
2. Add welcome-back messaging on the login tab when user visits `/auth` without being logged in
3. Add reassurance copy on signup form that account is permanently saved
4. Ensure localStorage persistence is working correctly in `AuthContext`
