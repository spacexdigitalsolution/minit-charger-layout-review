# Batch 06: Legacy Website Migration & Content Carry-Forward Answers

**Batch Code:** `batch-06-legacy-site-migration`  
**Stage:** Stage 0 Intake Check (Gate 0)  
**Status:** Approved  
**Build Origin:** `migration`  
**Legacy Website:** `https://www.minitcharger.com`  
**Offline Mirror Archive:** `previous-site/`  

---

### Q26a [Legacy Page Disposition & Route Action]
The previous WordPress website (`https://www.minitcharger.com`) has been crawled and archived into `previous-site/` as a working offline mirror containing 15 key page types, complete DOM structures, extracted content markdown, high-res screenshots, and 197 source media assets.

| Legacy URL | Disposition | New App Router Destination | 301 Redirect Required |
|---|---|---|---|
| `/` | Redesign | `/` (Interactive Industrial Showcase) | No (same root) |
| `/about-us` | Carry forward & modernize | `/about` | Yes (`/about-us` -> `/about`) |
| `/products` | Modernize into Catalog | `/products` | No (same route) |
| `/ground-support-equipment` | Elevate into Signature Route | `/industries/aviation-gse` | Yes (`/ground-support-equipment` -> `/industries/aviation-gse`) |
| `/material-handling-equipment` | Modernize | `/industries` | Yes (`/material-handling-equipment` -> `/industries`) |
| `/low-speed-vehicles` | Modernize | `/industries` | Yes (`/low-speed-vehicles` -> `/industries`) |
| `/asset-tracking` | Modernize into Cumulus Cloud | `/products` | Yes (`/asset-tracking` -> `/products`) |
| `/industries` | Modernize into Catalog | `/industries` | No (same route) |
| `/blog` | Modernize into Blog Catalog | `/blogs` | Yes (`/blog` -> `/blogs`) |
| `/faq` | Elevate | `/#faq` / `/contact` | Yes (`/faq` -> `/#faq`) |
| `/terms-conditions` | Preserve | `/terms` (or `/contact`) | Optional |
| `/privacy-policy` | Preserve | `/privacy` (or `/contact`) | Optional |

### Q26b [Content Carry-Forward Deep Dive]
1. **Company Story / Mission:** Carry forward core company heritage from legacy `/about-us` into `project-docs/client-review/gate-5-page-specs/about.md` and `site/app/about/page.js`.
2. **Product Hardware:** Legacy product line (MAGNUS, MOBILUS, ALTUS II, MOMENTUS, MAXIMUS, DURUS, CELLTRAC, ASSETPRO 360) mapped into modern high-density specs in `site/data/products.js` and dedicated showcase pages like `/products/altus-ii`.
3. **Historical Blog Posts:** Preserved in `previous-site/blog/` and curated into high-authority Next.js SSR articles in `site/data/blogs.js`.
4. **Client Proof Points & Industries:** Airport GSE and warehouse logistics case studies carry forward into interactive diagrams and comparison tables.

### Q27 [Asset Harvesting & Redirects]
- **Legacy Mirror Location:** `previous-site/` (runnable offline via `previous-site/index.html`).
- **Harvested Media:** 197 assets mirrored in `previous-site/wp-content/` and `previous-site/wp-includes/`.
- **Target App Assets:** Optimized WebP assets organized in `site/public/assets/` and indexed in `client-context/asset-manifest.md`.


