# NCRT Bhaiya

## Current State
- Users authenticate with Internet Identity and set up a profile (name + class 1-12)
- Returning users who re-login see their saved profile and go directly to the app
- The Onboarding class selector only shows Class 1 through Class 12
- The NavBar profile badge shortens "Class X" to "Cl. X"

## Requested Changes (Diff)

### Add
- "JEE (IIT Entrance)" as a selectable class option in the Onboarding screen (value: "JEE")
- Proper display of "JEE" in the NavBar profile badge (no stripping needed)

### Modify
- Onboarding class list: extend from 12 items to 13 items (Class 1-12 + JEE)
- NavBar badge: if studentClass is "JEE", display "JEE" directly (already done in NavBar.tsx)
- Login page: clarify that the same Internet Identity can be used to re-login and the profile is saved

### Remove
- Nothing removed

## Implementation Plan
1. Onboarding.tsx: add JEE option to class list (done)
2. NavBar.tsx: handle JEE display in profile badge (done)
3. Validate and build
