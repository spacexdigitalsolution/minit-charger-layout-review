# Minit Charger AI Agent Conventions

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Purpose & Stack
Minit Charger fleet EV charging infrastructure marketing website and layout review platform.
- **Stack:** Next.js 16.3.4 (App Router), React 19.2.8, Tailwind CSS v4, GSAP 3 / @gsap/react, Lenis.
- **Package Manager:** pnpm (pnpm@11.17.0).
- **Architecture Reference:** see docs/ARCHITECTURE.md

## Repository Map
- `app/`: Next.js App Router pages and layouts.
- `app/_components/`: Components specific to the home page (`app/page.js`).
- `components/`: Reusable components shared across 2+ routes (e.g., `Navbar`, `Footer`, `SmartImage`).
- `app/products/altus-ii/_components/`: Colocated components for the Altus II product route.
- `app/industries/aviation-gse/_components/`: Colocated components for Aviation GSE industry route.
- `data/`: In-memory static data models (`products.js`, `categories.js`, `industries.js`, `blogs.js`).
- `public/assets/`: Optimized assets and `manifest.json`.

## Exact Commands
Execute only verbatim scripts from `package.json`:
- Dev server: `pnpm dev` (`next dev`)
- Build: `pnpm build` (`next build`)
- Start: `pnpm start` (`next start`)
- Lint: `pnpm lint` (`eslint`)
*(Note: No test or typecheck script exists in package.json).*

## Component & Architecture Conventions
- **App Router:** Use `app/`. Never mix with Pages router.
- **Feature Colocation:** Colocate route-specific components inside `<route>/_components/`.
- **Shared Components:** Place in `components/` only when used across multiple routes.
- **File Size Cap:** Keep components under ~250 lines; split larger components into composable pieces.
- **Component Boundaries:** Default to React Server Components (RSC). Add `'use client'` only to leaf components needing interactivity or animations.
- **Images:** Always use `SmartImage` from `components/SmartImage.js` instead of raw `<img>` or direct `next/image`.
- **Animation:** Use `@gsap/react` `useGSAP` hook; never call `contextSafe` directly in component render body.

## Workflow Discipline
1. **Read First:** Inspect existing files and mirror patterns before proposing changes.
2. **Report Before Implementing:** Detail proposed modifications and file lists before editing.
3. **Keep Scope Contained:** Change only files directly requested; never perform speculative refactors.
4. **Editing Rule:** Create and modify files ONLY using native editor tools (`write_to_file`, `replace_file_content`, `multi_replace_file_content`). Never use shell scripts, sed, perl, or redirection operators to edit code.

## Forbidden Without Explicit Approval
- Installing new dependencies or altering `package.json` / `pnpm-lock.yaml`.
- Adding database migrations, schemas, or backend services.
- Modifying environment files or accessing `.env*` credentials.
- Running destructive git/file commands (`rm -rf`, `git reset --hard`, `git clean -f`, `git push --force`).
- Executing production deployment commands (`vercel --prod`).

## Verification & Definition of Done
1. **Lint Check:** Run `pnpm lint` and ensure no new lint or syntax errors were introduced. Baseline is 30 problems (27 errors, 3 warnings); your changes must not increase this count or introduce new failing files.
2. **Visual Verification:** Check modified UI in the browser when changes affect layout or styling.
3. **Git Hygiene:** Verify `git status` contains only files intended for the task.
4. **Evidence:** Always document evidence of verification in a closing walkthrough before claiming done.

## Optional Stop Gate
`verify-gate` (.agents/hooks/verify-gate.mjs) is unregistered in `hooks.json` due to 30 pre-existing lint issues. To enable once clean, add to `.agents/hooks.json`:
```json
"Stop": [{ "type": "command", "command": "node .agents/hooks/verify-gate.mjs", "timeout": 60 }]
```

