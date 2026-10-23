---
name: verify
description: Executes repository verification commands, checks for lint regressions, validates browser UI rendering, and compiles an evidence-backed walkthrough.
---

# Verification Workflow

This skill defines the verification process required after making modifications to this repository.

## Procedure

### Step 1: Execute Repository Verification Commands
1. Run the project's linter:
   ```bash
   pnpm lint
   ```
2. **Recorded Lint Baseline:** As of commit `3c6eca5`, `pnpm lint` reports **30 problems (27 errors, 3 warnings)** due to pre-existing React 19 ESLint rules in untouched files.
3. **Definition of "Done":** "Done" means the lint problem count has not increased above 30, and no new file appears in the lint output. Any new lint errors or warnings introduced by your changes must be fixed immediately using native editor tools.


### Step 2: Browser & Visual UI Verification
1. When changes impact UI layouts, styles, or interactive components:
   - Use browser tools or local testing to confirm that elements render cleanly.
   - Inspect console logs for hydration warnings, missing keys, or image loading errors.
   - Test responsive layout behavior across breakpoints (mobile, tablet, desktop).
   - Check that animations (GSAP, Lenis) run smoothly without layout shift.

### Step 3: Git Status Audit
1. Run `git status --short` to audit all modified and untracked files.
2. Confirm that only files specified in the approved task plan were touched.
3. Confirm that no secret files (`.env*`), temporary debug files, or unwanted lockfile diffs exist.

### Step 4: Produce Verification Walkthrough
Compile a clear completion report stating:
- Exact files created or modified.
- Output from verification commands (`pnpm lint`).
- What was explicitly verified with evidence.
- Any items that could not be verified (e.g. untestable production behavior) and why.
