# Gate 4 - Skill 7 Application Report: `schema`

**Skill:** `schema` (pinned at `8fd2fcade2fd6629026e9dfe6d133b55b36968b9`)  
**Target Workspace:** `site/`  
**Date:** 2026-11-24  
**Status:** Completed & Verified

---

## 1. Applied Changes

### A. Root Global Entity Schema (`Organization` & `WebSite` `@graph`)
- **File:** `site/app/layout.js`
- **Details:** Embedded a root-level JSON-LD `@graph` containing:
  - `Organization`: `@id: "https://minitcharger.com/#organization"`, `name: "Minit Charger"`, `url`, `description`, `sameAs: ["https://www.linkedin.com/company/minit-charger"]`, and logo reference.
  - `WebSite`: `@id: "https://minitcharger.com/#website"`, `name: "Minit Charger"`, `url`, and `publisher` relationship referencing `#organization`.

### B. Editorial Thought Leadership (`BlogPosting`)
- **File:** `site/app/blogs/[slug]/page.js`
- **Details:** Embedded `BlogPosting` JSON-LD schema into dynamic blog pages:
  - `headline`: article title
  - `description`: excerpt
  - `datePublished`: publish date
  - `author`: `Person` with author name and title
  - `publisher`: `Organization` (Minit Charger)
  - `mainEntityOfPage`: canonical URL

### C. Dynamic & Flagship Product Structured Data (`Product`)
- **Files:** `site/components/product/ProductDetailLayout.js` & `site/app/products/altus-ii/page.js`
- **Details:**
  - `ProductDetailLayout`: Added `Product` schema deriving name, description, brand ("Minit Charger"), category, and URL dynamically from the product model.
  - `AltusIIProductPage`: Added `Product` schema defining the flagship Altus II dual-port DC fast charger for airport GSE electrification.

---

## 2. Verification Evidence
- **Lint Check (`pnpm --dir site lint`):**
  - Exit code: `0`
  - Errors: `0`
  - Pre-existing warnings: `1` (`SmartImage.js` `<img>` fallback)
- **Build Check (`pnpm --dir site build`):**
  - Exit code: `0`
  - Turbopack compilation: `1388ms`
  - Route static generation: `39/39` static routes compiled cleanly.
- **Image Guardrail Check:**
  - Zero image modifications or asset wiring. All image slots remain in placeholder mode.
- **Dependency Guardrail Check:**
  - Zero new dependencies added to `package.json`.
