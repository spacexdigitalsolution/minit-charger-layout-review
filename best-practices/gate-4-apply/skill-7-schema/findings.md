# Gate 4 - Skill 7 Audit Findings: `schema`

**Skill:** `schema` (pinned at `8fd2fcade2fd6629026e9dfe6d133b55b36968b9`)  
**Target Workspace:** `site/`  
**Date:** 2026-11-24  
**Audit Scope:** JSON-LD structured data compliance, Schema.org vocabulary alignment, and Google search feature eligibility.

---

## 1. Audit Summary & Current State
A codebase-wide search across `site/app/` for `application/ld+json` and `schema.org` returned **0 occurrences**. The site currently has no structured data markup for search engines or AI retrieval models.

Without JSON-LD:
- Search engines cannot unambiguously connect "Minit Charger" to its organization identity, brand, or official website.
- Article pages (`/blogs/[slug]`) lack `BlogPosting` markup, missing structured authorship, publish dates, and article indexing.
- Hardware and software product pages (`/products/[slug]`, `/products/altus-ii`) lack `Product` structured data describing commercial charging infrastructure.

---

## 2. Proposed Improvements

### Finding 1: Global Site Identity (`Organization` & `WebSite` `@graph`)
- **File:** `site/app/layout.js`
- **Issue:** No organization entity or website schema is defined in the root layout.
- **Proposed Fix:** Embed a clean JSON-LD `@graph` in the `<head>` of `RootLayout` defining `Organization` and `WebSite` schemas:
  - `Organization`: name ("Minit Charger"), url, description, sameAs (social profiles).
  - `WebSite`: url, name, publisher referencing the organization.
- **Verification:** RFC 8259 JSON serialization via standard Next.js RSC `<script type="application/ld+json">`.

### Finding 2: Editorial & Thought Leadership Structured Data (`BlogPosting`)
- **File:** `site/app/blogs/[slug]/page.js`
- **Issue:** Technical whitepapers, case studies, and guides have rich structured metadata (`title`, `slug`, `publishDate`, `author`, `excerpt`) in `site/data/blogs.js`, but this data is not surfaced to search engines as structured data.
- **Proposed Fix:** Add a `BlogPosting` JSON-LD schema into `BlogPostPage`:
  - `headline`: blog.title
  - `description`: blog.excerpt
  - `datePublished`: blog.publishDate
  - `author`: `{ "@type": "Person", "name": blog.author.name, "jobTitle": blog.author.title }`
  - `publisher`: `{ "@type": "Organization", "name": "Minit Charger", "url": "https://minitcharger.com" }`
  - `mainEntityOfPage`: canonical URL for the post.

### Finding 3: Hardware Product Structured Data (`Product`)
- **Files:** `site/components/product/ProductDetailLayout.js` & `site/app/products/altus-ii/page.js`
- **Issue:** Product pages present detailed B2B specifications, voltage ranges, and dual-port configurations, but lack `Product` structured data.
- **Proposed Fix:** Add `Product` JSON-LD schema:
  - In `ProductDetailLayout`: dynamically derive name, description, brand ("Minit Charger"), category, and URL from `product` prop.
  - In `altus-ii/page.js`: specify `Product` schema for the flagship Altus II dual-port DC fast charger.

---

## 3. Strict Compliance & Guardrails Check
- **Zero New Dependencies:** Uses built-in Next.js / React Server Component script injection without external schema libraries.
- **Image Guardrail:** Does not alter any `SmartImage` component or wire unapproved assets.
- **React Compiler & Lint:** Static JSON-LD objects defined in RSC or layout render phases without React hook memoization triggers.

---

## 4. Pending Action
Awaiting user approval before applying changes to `site/app/layout.js`, `site/app/blogs/[slug]/page.js`, `site/components/product/ProductDetailLayout.js`, and `site/app/products/altus-ii/page.js`.
