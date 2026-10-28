# App Directory AI Agent Guidance

## Architecture
- Next.js 16.3.4 App Router structure rooted in `app/`.
- Default to React Server Components (RSC) for all `layout.js` and `page.js` orchestrators.
- Feature-colocate route-specific components inside `<route>/_components/`.
- Smooth scroll provider (`SmoothScroll.js`) is imported by root `app/layout.js`.

## Conventions
- Keep `page.js` orchestrators thin: fetch or import data, assemble sections, export metadata.
- Name section components with PascalCase reflecting their blueprint section ID.
- Open section components with `// section: <id>` and attach `data-section="<id>"` to their outer container.
- Export Next.js `metadata` object or `generateMetadata` function with title and description.
- Use `components/SmartImage.js` for all rendered images; never import `next/image` directly.

## Anti-patterns
- Never add `'use client'` to `page.js` or `layout.js`.
- Never put route-specific components into `components/`; reserve `components/` for 2+ page shared elements.
- Never write hardcoded styling without Tailwind tokens declared in `app/globals.css`.
- Never bypass the 250-line component ceiling; split heavy sections into child components.

## Commands
- `pnpm dev`: Start Next.js local development server.
- `pnpm build`: Run Next.js production build check.
- `pnpm lint`: Run ESLint to ensure zero new warnings or errors.

