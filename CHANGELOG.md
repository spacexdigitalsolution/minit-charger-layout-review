# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.9] - 2026-11-21

### Fixed
- Fixed `TabbedProductCatalog` on the homepage: mapped `activeIndustry.recommendedProductIds` correctly across all 4 industry categories so product cards render properly under every tab with smooth GSAP tab-switching staggers.
- Removed hardcoded fallback asset paths (`/assets/homepage/Altus II.webp`, etc.) from `ProductSpecs`, `ProductGallery`, `ProductHero`, `ProductFeatureSplit`, `ProductSectionSplit`, `ProductDetailLayout`, and `IndustryDetailLayout`.
- Replaced text-based fallback ("Product Hardware") in `ProductCard` and `ProductCatalogCard` with standard `<SmartImage mode="placeholder" />`.

### Changed
- Enforced strict placeholder mode as the universal default for `SmartImage`: any image without an explicit approved `mode="image"` or missing an approved `src` strictly renders the mountain placeholder graphic.

## [0.1.8] - 2026-11-20

### Added
- Hard-enforced image approval system with 38 on-disk approval artifacts under `site/image-approvals/` across global components, hardware/software products, industry categories, and knowledge hub posts.
- Always-on rule `.agents/rules/image-approval-guardrails.md` strictly prohibiting agents from picking, suggesting, ranking, previewing, generating, searching for, or assigning images.
- Interactive skill `.agents/skills/image-approval/SKILL.md` enforcing single-slot human-gated interviews (`/image-approval <page>`) requiring verbatim `"APPROVE <slot-id>"` and `"APPROVE PAGE <page>"` confirmations.
- PreToolUse security hook `.agents/hooks/image-guard.mjs` registered in `.agents/hooks.json` to hard-deny reading images under `public/`, deny shell sweeps or copies targeting assets, and force explicit user authorization for image path edits.

### Changed
- Reset all previously agent-assigned images across `site/data/products.js`, `site/data/industries.js`, `site/data/blogs.js`, `Navbar.js`, `NavbarMegaMenu.js`, `HomeHero.js`, `ComparisonTable.js`, `BenefitModules.js`, and `HeroSection.js` to placeholder mode.
- Stripped automatic component installer from `.agents/skills/optimize-assets/SKILL.md` and added strict asset gating rules.
- Updated root `AGENTS.md` and `site/AGENTS.md` with explicit image approval policies.


## [0.1.6] - 2026-11-20

### Changed
- Rendered floating Navbar pill in a frosted translucent glass aesthetic (`bg-white/70 backdrop-blur-xl`, `border-white/60`, specular inner bevel highlight, and deep ambient shadow).
- Set open navigation menus (`NavbarMegaMenu` and `NavbarMobileDrawer`) to an opaque solid white background (`bg-white border-zinc-200/90`) for maximum legibility.
- Increased Home Hero background height from `90vh` to `95vh` (`min-h-[95vh]`) in `HomeHero.js`.

## [0.1.5] - 2026-11-20

### Changed
- Converted floating Navbar pill into light mode (`bg-white/90 backdrop-blur-md`, `border-zinc-200/80`, `shadow-[0_8px_30px_rgba(0,0,0,0.08)]`) with dark typography and black pill CTA.
- Increased floating pill maximum width from `max-w-5xl` (1024px) to `max-w-6xl` (1152px) for a wider, more spacious desktop layout.
- Restyled desktop mega-menu dropdown and mobile navigation drawer into floating light glass panels (`bg-white/95 backdrop-blur-xl`, `border-zinc-200/80`).
- Made white the default theme across the application: removed `@media (prefers-color-scheme: dark)` override in `globals.css` and removed automatic dark classes from `RootLayout` in `app/layout.js`, ensuring the site defaults to white regardless of OS device dark mode preference.

## [0.1.4] - 2026-11-20

### Fixed
- Fixed Navbar logo rendering placeholder by removing hardcoded `mode="placeholder"` on `SmartImage` in `components/layout/Navbar.js`.
- Fixed Navbar mega-menu product preview rendering placeholder by removing hardcoded `mode="placeholder"` on `SmartImage` in `components/layout/NavbarMegaMenu.js`.
- Resolved scroll lag and stutter by disabling GSAP lag smoothing (`gsap.ticker.lagSmoothing(0)`) in `SmoothScroll.js`, eliminating delta clamping fighting Lenis lerp.
- Enforced native touch scrolling (`syncTouch: false`) and respected motion preferences (`respectReducedMotion: true`) in `SmoothScroll.js`.
- Added `once: true` to entrance ScrollTriggers in `ChallengesScroll.js` to eliminate continuous bidirectional recalculation on scroll.
- Redesigned product cards in `components/product/ProductCard.js` (including "Meet the rest of the family" section) into a non-overlapping vertical flex architecture with a dedicated 4:3 image frame, responsive Oswald typography (18-20px), 2-line max readable product names, and clean description placement.

### Changed
- Rebuilt desktop Navbar into a floating, centered, dark glass pill (`rounded-full`, `max-w-5xl`, `backdrop-blur-md`, `border-white/10`) with left-aligned logo, centered navigation links with green active dot indicators, and high-contrast pill CTA.
- Detached desktop mega-menu into a floating glass dropdown panel directly underneath the pill with active product preview image.
- Updated mobile navigation drawer to a floating glass sheet with smooth accordion submenus.
- Removed hardcoded 80px desktop spacer (`h-20 bg-zinc-950`) to restore natural scroll flow.

## [0.1.3] - 2026-11-20

### Changed
- Standardized repository structure under `/standardize-repo` enforcing direct file density caps (`R-SIZE-2` <= 10 direct files per folder) across all application directories.
- Sub-grouped `site/components/` into `layout/`, `industry/`, `product/`, `media/`, and `ui/`, leaving only `SmartImage.js` and `AGENTS.md` directly in `components/`.
- Sub-grouped home route components in `site/app/_components/` into `hero/`, `features/`, and `proof/`.
- Sub-grouped Altus II product route components in `site/app/products/altus-ii/_components/` into `overview/` and `features/`, and relocated global smooth scroll provider to `components/layout/SmoothScroll.js`.
- Updated all referencing import paths across all 39 static routes and subcomponents.
- Formalized `.agents/standards-exceptions.md` for external client asset dumps and root configuration files.
- Completed comprehensive Vercel React Best Practices audit across all 70 rules with full pass across critical performance tiers.

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
