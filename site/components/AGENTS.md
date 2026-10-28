# Shared Components AI Agent Guidance

## Architecture
- Flat registry of components reused across 2 or more routes (`components/`).
- `Navbar.js` and `Footer.js` provide global shell structure wrapped in `app/layout.js`.
- `SmartImage.js` provides centralized responsive asset resolution using `public/assets/manifest.json`.

## Conventions
- Default to React Server Components (RSC) unless interactivity or hooks are strictly required.
- Place `'use client'` at the very top of interactive leaf components (e.g., `Navbar.js`, `FaqSection.js`).
- Pass image identifiers or paths to `SmartImage` with explicit `aspectRatio`, `sizes`, and `priority` props.
- Keep all shared components under 250 lines; decompose complex navigation or modals into subcomponents.

## Anti-patterns
- Never place single-route components in `components/` (use `<route>/_components/` instead).
- Never use raw HTML `<img>` elements or direct `next/image` imports.
- Never trigger state updates directly in effect render bodies.
- Never call GSAP `contextSafe` directly in the component render body; use within callbacks.

## Commands
- `pnpm lint`: Verify syntax and React hook rules compliance across shared components.
- `pnpm build`: Verify component compilation and server/client boundary integrity.

