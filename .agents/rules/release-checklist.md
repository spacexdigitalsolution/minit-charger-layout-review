---
trigger: manual
---

# Release & Deployment Pre-Flight Checklist

Use this checklist before delivering, merging, or releasing UI or feature modifications in this repository.

## 1. Git & Workspace Cleanliness
- [ ] Run `git status --short` to ensure only intended files were modified or created.
- [ ] Ensure no temporary files, debug scripts, or lockfile mutations occurred.
- [ ] Ensure `.env` or credential files were never created or committed.

## 2. Asset Integrity
- [ ] Confirm all new visual assets reside in `public/assets/` or `public/assets-src/`.
- [ ] If new responsive variants were generated, verify `public/assets/manifest.json` is updated and valid JSON.
- [ ] Ensure images are rendered using `SmartImage` with valid fallback dimensions.

## 3. Lint Verification
- [ ] Run `pnpm lint` to ensure no new errors were introduced by recent changes.
- [ ] If touching existing files with pre-existing React 19 warnings, verify your changes did not worsen or add new lint issues.

## 4. Browser & Responsive Verification
- [ ] Verify pages render without hydration mismatches or client console errors.
- [ ] Check responsive breakpoints (Mobile: <768px, Tablet: 768–1024px, Desktop: >1024px).
- [ ] Verify that Lenis smooth scroll and GSAP animations do not stutter or cause layout shifts.

## 5. Walkthrough Documentation
- [ ] Provide a summary of modified routes and components.
- [ ] Note any residual items or future follow-ups for the project team.
