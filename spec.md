# NcertBhaiya

## Current State
Authentication is fully removed. Site is open to all visitors. Backend has `userProfiles` with principal-based storage but no username/password system.

## Requested Changes (Diff)

### Add
- `UserAccount` type in backend: stores username (unique), hashedPassword, fullName, email, createdAt, lastLoginAt
- `signUp(username, password, fullName, email)` backend function — checks uniqueness, hashes password, stores account
- `login(username, password)` backend function — verifies credentials, updates lastLoginAt, returns session token/profile
- `checkUsernameAvailability(username)` backend query
- `/auth` route with Login and Signup tabs
  - Signup: Full Name, Username (with live availability check), Gmail/Email, Password
  - Login: Username + Password
- Auth context to hold logged-in user state (stored in localStorage for persistence)
- Redirect to home after login/signup

### Modify
- `App.tsx` — add `/auth` route, wrap app with AuthContext
- Leaderboard/Quiz XP tied to logged-in username instead of anonymous

### Remove
- Nothing removed — site stays open (no mandatory login gate), auth is optional/additive

## Implementation Plan
1. Add `UserAccount` stable storage and auth functions to Motoko backend
2. Add `/auth` page with Login/Signup tabs, live username check, form validation
3. Add `AuthContext` to manage logged-in user state with localStorage persistence
4. Wire auth context into `App.tsx`
5. Show username in navbar when logged in, with logout option
