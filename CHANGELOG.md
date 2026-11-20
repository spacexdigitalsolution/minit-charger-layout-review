# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2026-11-20

### Added
- Colocated product data files under each route: `app/products/magnus/_components/magnusData.js`, `momentusData.js`, `maximusData.js`, and `mobilusData.js` matching verbatim copy and SEO from `tasks/20.11.2026/CONTENT_UPDATE.md`.
- Added `ProductSectionSplit` component (`components/product/ProductSectionSplit.js`) for modular split sections (Section 4 Billing & Data, Section 5 Power Sharing, Section 7 Engineering Internals).
- Installed `vercel-react-best-practices` skill into `.agents/skills/vercel-react-best-practices/` and audited codebase against performance guidelines.

### Changed
- Resolved 22 baseline ESLint errors (reducing total issues from 23 to 1 warning, 0 errors across the codebase).
- Fixed Lenis & GSAP ticker leak in `SmoothScroll.js` by retaining callback references on unmount, restoring `lagSmoothing(500, 33)`, and adjusting `lerp` to 0.1 for responsive scrolling.
- Fixed hero background animation in `HomeHero.js` to eliminate continuous 10-second CSS scaling while scrolled out of view and removed off-screen video playback overhead.
- Added `optimizePackageImports: ["lucide-react"]` to `next.config.mjs`, reducing build times by more than 50%.
- Replaced direct `next/image` usage in `Navbar.js` and `NavbarMegaMenu.js` with responsive `SmartImage` with explicit `sizes` props.
- Disassociated mismatched Momentus card image from Pharus product definition in `data/products.js`.
- Disabled prefetching for internal review routes in `Footer.js` (`prefetch={false}` on `/internal/hero-variations`).

## [0.1.1] - 2026-11-13

### Added
- Created `/industries/aviation-gse-v2` route (`site/app/industries/aviation-gse-v2/`) as a client-review variant of the Aviation GSE industry page.
- Added robots `noindex, nofollow` metadata to the v2 page layout for client review gating.

### Changed
- Redesigned Section 1 ("Electrifying the Airports Is the New Norm.") in `aviation-gse-v2` (`ChallengesScroll.js`) using a compact, 4-category interactive tabbed matrix (Concept A). Preserves all 13 challenge-solution pairs verbatim while cutting desktop vertical scroll height by ~72% (from ~5 viewports down to ~1.3 viewports).
