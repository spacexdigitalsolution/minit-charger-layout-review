---
trigger: glob
globs:
  - "app/**/*.js"
  - "app/**/*.jsx"
---

# Frontend Conventions: Next.js 16 & Tailwind v4

## 1. Component Boundaries & RSC
- By default, all layout and page files in `app/` are **React Server Components (RSC)**.
- Add `"use client"` only to leaf components that require interactivity, state, event listeners, or animation hooks (`useState`, `useEffect`, `useRef`, `useGSAP`).
- Never convert a page or layout into a client component unless strictly necessary. Instead, colocate interactive pieces into sub-components.

## 2. Feature Colocation & Splitting
- Keep components under ~250 lines. Split large components into focused, composable parts.
- Colocate feature-specific components in a sibling `_components/` directory (e.g., `app/products/altus-ii/_components/`).
- Place components in `app/components/` ONLY if they are genuinely reused across two or more separate routes (e.g., `Navbar.js`, `Footer.js`, `SmartImage.js`, `FaqSection.js`).

## 3. Image Optimization with `SmartImage`
- Never use raw `<img>` or direct `next/image` in page components.
- Always import and use `SmartImage` from `@/app/components/SmartImage`:
  ```jsx
  import SmartImage from "@/app/components/SmartImage";

  <SmartImage
    src="/assets/Products/altus-ii/hardware.webp"
    alt="Altus II Charging Hardware"
    width={600}
    height={400}
    className="rounded-lg object-contain"
    mode="image"
  />
  ```
- `SmartImage` automatically resolves responsive variants from `public/assets/manifest.json` and supports placeholder fallbacks.

## 4. Tailwind CSS v4 Styling
- Tailwind v4 is in use via `@import "tailwindcss";` in `app/globals.css`.
- Utilize theme font variables:
  - Sans: `font-sans` (mapped to Geist via `--font-geist-sans`)
  - Mono: `font-mono` (mapped to Geist Mono via `--font-geist-mono`)
  - Display: `font-display` or `font-oswald` (mapped to Oswald display font)
- Maintain dark-mode compatibility using `dark:` variant classes alongside standard classes (e.g., `bg-white dark:bg-black text-zinc-900 dark:text-zinc-50`).
