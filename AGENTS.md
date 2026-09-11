# Minit Charger AI Agent Conventions

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.
<!-- END:nextjs-agent-rules -->

## Folder Conventions
- Use the **App Router** (`app/`). Do not mix with Pages router.
- **Feature-based Colocation:** Use `_components`, `_hooks`, and `_lib` inside specific feature routes (e.g., `app/products/altus-ii/_components/`).
- Only place code in root `app/components/` if it is truly shared across multiple routes (like `Navbar` and `Footer`).

## File Size & Splitting Rules
- **Cap component sizes:** Split any component file exceeding ~250 lines into smaller composable pieces in a sibling `_components/` directory.
- **Reduce Context Load:** Do not create "god components".

## Component Boundaries
- Use React Server Components by default.
- Add `'use client'` only to leaf components that require interactivity (e.g., state, hooks, or event listeners).
