# Stage 1: Tech Stack Specification

**Project:** `minit-charger-layout-review`  
**Approved at Gate 1:** 2026-10-28  

---

## 1. Core Framework & Runtime
- **Framework:** Next.js 16.3.4 (App Router)
- **React Version:** React 19.2.8 / React DOM 19.2.8
- **Language:** JavaScript (ESNext, React Server Components by default)
- **Package Manager:** `pnpm` (pnpm@11.17.0 enforced via `pnpm-lock.yaml`)
- **Hosting Target:** Vercel (Edge & Node.js Serverless runtime)
  - **Account / Organization:** `spacexdigitalsolution`
  - **Account Username:** `support-4818`
  - **Project Name:** `minit-charger-layout-review`
  - **Project Domain:** `minit-charger-layout-review.vercel.app`

---

## 2. Styling, Design System & Typography
- **CSS Framework:** Tailwind CSS v4
- **PostCSS Engine:** `@tailwindcss/postcss` in `postcss.config.mjs`
- **Base Directives:** `@import "tailwindcss";` in `app/globals.css`
- **Fonts (Self-hosted via `next/font/google`):**
  - Oswald (`--font-oswald`): Display titles, product model headings
  - Geist Sans (`--font-geist-sans`): UI text and body copy
  - Geist Mono (`--font-geist-mono`): Technical specifications, electrical ratings
- **Icons:** `lucide-react` (SVG icon system)

---

## 3. Motion & Animation Architecture
- **Animation Suite:** GSAP 3 (v3.15.0) & `@gsap/react` (v2.1.2)
- **Lifecycle Hook:** `useGSAP` hook with container ref scoping and automated cleanup
- **Smooth Scrolling:** Lenis (`lenis` v1.3.26) wrapped via `SmoothScroll.js` in `app/layout.js`
- **Accessibility:** Strict media query checks for `prefers-reduced-motion: reduce`

---

## 4. Static Data Architecture & Operational Mode
- **Mode:** `none` (100% static Next.js, no external database or headless CMS)
- **Static In-Memory Models:** Located in `data/`:
  - `data/products.js`: Hardware catalog, specs, USP bullet points, image paths
  - `data/categories.js`: Hardware categorization & filters
  - `data/industries.js`: Target industry sectors and tailored benefits
  - `data/blogs.js`: Articles, case studies, and fleet technical whitepapers

---

## 5. Media Pipeline & Asset Optimization
- **Image Component:** `app/components/SmartImage.js` (zero-CLS responsive image handler)
- **Asset Index:** `public/assets/manifest.json`
- **Format:** Modern WebP format with width descriptors for responsive srcset
- **Directory:** High-resolution assets served statically from `public/assets/`

