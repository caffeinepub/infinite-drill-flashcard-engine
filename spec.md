# NcertBhaiya

## Current State
The app uses Internet Identity (II) for auth. `AuthGuard` checks identity: no identity → shows `Login.tsx` (a basic landing+login button page). After II auth, if no profile → shows `Onboarding.tsx` (Name + Class only). Profile is saved via `saveCallerUserProfile(displayName, studentClass)`. The backend `UserProfile` has `displayName`, `studentClass`, `principal`, `createdAt`.

## Requested Changes (Diff)

### Add
- New `/auth` experience: When user clicks "Get Started" on landing, show a tabbed Login / Sign Up panel (in-page state toggle)
- **Sign Up tab**: Form collecting Name, Class, Country, Password → on submit: store data in sessionStorage as `pendingSignup`, then trigger II login
- **Auto-save flow in AuthGuard**: After II login, if no profile, check sessionStorage for `pendingSignup` → auto-call `saveCallerUserProfile` → store country+password in localStorage → clear sessionStorage → set profile

### Modify
- `Login.tsx`: Redesign as a landing page. Clicking "Get Started" reveals the tabbed Login / Sign Up panel.
- `AuthGuard.tsx`: Add pending signup auto-save logic after II login completes.
- `Onboarding.tsx`: Add Country (select) and Password (input) fields.

### Remove
- Nothing removed.

## Implementation Plan
1. Update `Login.tsx`: `showAuth` state toggles between landing view and tabbed auth panel. Login tab has II button. Sign Up tab has Name, Class, Country, Password form.
2. On Sign Up form submit: validate → store in sessionStorage `pendingSignup` → call `login()`.
3. Update `AuthGuard.tsx`: After II login with no profile → check `pendingSignup` → auto-save profile → store country/password in localStorage.
4. Update `Onboarding.tsx`: Add Country + Password fields.
