# Site Scope Architecture & Development Conventions

## Architecture
- **Framework:** Next.js 16.3.4 (App Router), React 19.2.8, Tailwind CSS v4, GSAP 3.
- **Root Layout:** `app/layout.js` provides global shell, fonts, and dark mode configuration.
- **Route Isolation:** All pages are thin Server Component orchestrators (`page.js` $\le 80$ lines).
- **Component Colocation:** Route-specific leaf sections are colocated in `<route>/_components/`.
- **Shared Promotion:** Components used across 2+ distinct routes reside in `components/`.

## Conventions
- **Line Ceilings:** `page.js` $\le 80$ lines; section components $\le 250$ lines; utility modules $\le 500$ lines.
- **Section Headers:** Every section component must declare `// section: <id>` as its first line and attach `data-section="<id>"` to its root element.
- **Path Aliasing:** Use `@/*` pointing to `site/*` (e.g. `@/components/*`, `@/data/*`).
- **Image Optimization:** Always utilize `SmartImage` with explicit `aspectRatio`, `priority` (for LCP), and fallback handling.

## Anti-patterns
- Do NOT place route-specific components into shared `components/`.
- Do NOT introduce duplicate `app/components/` inside `app/`.
- Do NOT access React refs during the render body in Client Components.
- Do NOT call synchronous `setState` in root `useEffect` executions.
- Do NOT install arbitrary dependencies outside `package.json`.

## Commands
- Dev Server: `pnpm dev`
- Build: `pnpm build`
- Start: `pnpm start`
- Lint: `pnpm lint`


<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
