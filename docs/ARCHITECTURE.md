# Architecture & System Design

**Project:** `minit-charger-layout-review`  
**Framework:** Next.js 16.3.4 (App Router) | React 19.2.8 | Tailwind CSS v4

---

## 1. High-Level Overview

`minit-charger-layout-review` is a fleet EV charging infrastructure web platform showcasing charger hardware (Altus II, Magnus), cloud fleet software (Cumulus), and industry applications (Airport GSE, Commercial Fleets, Warehouses).

The application is structured as an interactive marketing and layout review experience with high visual fidelity, GSAP animations, and Lenis smooth scrolling.

---

## 2. Directory Structure & Colocation

The repository strictly enforces **feature-based colocation** within Next.js App Router:

```
app/
├── _components/                   # Home-page specific components (HomeHero, TabbedProductCatalog, etc.)
├── components/                    # Global components shared across 2+ routes (Navbar, Footer, SmartImage)
├── products/                      # Product catalog route
│   ├── altus-ii/                  # Feature deep dive route
│   │   ├── _components/           # Feature-colocated components (HeroSection, SpecsTable, etc.)
│   │   └── page.js
│   ├── [slug]/                    # Dynamic product route
│   └── page.js
├── industries/                    # Industry solution routes
│   ├── aviation-gse/              # Feature deep dive route
│   │   ├── _components/           # Colocated industry components (ChallengesScroll, PersonaSplit, etc.)
│   │   └── page.js
│   ├── [slug]/
│   └── page.js
├── blogs/                         # Blog catalog & [slug] dynamic post reader
├── about/                         # Company mission & leadership quote components
├── contact/                       # Contact & quote request form
└── internal/hero-variations/      # Design review sandbox evaluating 7 hero layouts
```

### Component Placement Rule
- If a component is used on only one route (e.g. `HeroSection` on `/products/altus-ii`), place it in `app/products/altus-ii/_components/`.
- If a component is genuinely shared across multiple routes (e.g. `Navbar`, `Footer`, `SmartImage`, `FaqSection`), place it in `app/components/`.

---

## 3. Server vs. Client Boundaries

- **Pages and Layouts as RSC:** `app/layout.js`, `app/page.js`, `app/products/page.js`, and `app/products/altus-ii/page.js` are React Server Components (RSC). They render server-side and import static data directly.
- **Interactive Leaf Components (`"use client"`):** Any component utilizing hooks (`useState`, `useEffect`, `useRef`), DOM interactions, or GSAP animations must declare `"use client"` at the top.
- **Component Size Limit:** Keep all components under ~250 lines. Split complex components into modular children in a sibling `_components/` folder.

---

## 4. Styling & Typography (Tailwind CSS v4)

- Styling uses Tailwind CSS v4 imported via `@import "tailwindcss";` in `app/globals.css`.
- PostCSS is configured via `@tailwindcss/postcss` in `postcss.config.mjs`.
- Font variables configured in `app/layout.js`:
  - `--font-geist-sans` (Geist)
  - `--font-geist-mono` (Geist Mono)
  - `--font-oswald` (Oswald display font)
- Theme colors and tokens are declared in `app/globals.css` with dark mode support.

---

## 5. Animation & Smooth Scrolling

- **Lenis Smooth Scroll:** Global smooth scrolling is handled by `SmoothScroll` (`app/products/altus-ii/_components/SmoothScroll.js`) wrapped around children in `app/layout.js`.
- **GSAP 3 & `@gsap/react`:**
  - Utilize `useGSAP` for animation lifecycle management and automated cleanup.
  - Never call `contextSafe` in render body (violates React 19 rules); use `contextSafe` inside callbacks or wrap in `useCallback`.
  - Always support `prefers-reduced-motion`.

---

## 6. Static Data Layer

- No database or backend ORM is used.
- Data models reside in `data/`:
  - `data/products.js`: Hardware models, electrical specifications, USP statements, and image paths.
  - `data/categories.js`: Taxonomy mappings.
  - `data/industries.js`: Industry classifications.
  - `data/blogs.js`: Articles and case studies.
- Components import data directly (e.g. `import { products } from "@/data/products"`).

---

## 7. Media & SmartImage

- Images are served from `public/assets/`.
- `SmartImage` (`app/components/SmartImage.js`) is the required image component:
  - Handles placeholder mode, debug dimension boxes, and responsive `srcset`.
  - Maps optimized assets using `public/assets/manifest.json`.

---

## 8. Known Deviations

- **`SmoothScroll` Location:** `SmoothScroll` is colocated under `app/products/altus-ii/_components/SmoothScroll.js` but is imported and used globally by `app/layout.js` to provide Lenis smooth scrolling across the entire site. Do not move or rename this file.

