# Stage 4: Technical SEO Strategy & Metadata Blueprint

**Project:** `minit-charger-layout-review`  
**Approved at Gate 4:** 2026-10-28  

---

## 1. Domain & Indexing Policy
- **Primary Domain:** `https://minitcharger.com`
- **Pre-Launch Indexing Guard:** Active (`NEXT_PUBLIC_PREVIEW_GUARD="true"`). Controlled dynamically via `app/robots.js`.
- **Sitemap Generator:** Dynamic file-based sitemap at `app/sitemap.js` pulling routes from static data arrays.

---

## 2. Page Metadata Patterns

### Root Layout (`app/layout.js`)
- `metadataBase: new URL('https://minitcharger.com')`
- `title.template: '%s | Minit Charger'`
- `title.default: 'Minit Charger | Fleet EV Charging Infrastructure'`
- `description: 'Turnkey Level 3 DC fast charging infrastructure, cloud energy management, and battery health analytics for commercial fleets and airport GSE.'`

### Product Pages (`/products/[slug]`)
- `title: '${product.name} | DC Fast Fleet Charger'`
- `description: '${product.usp}'`
- `alternates.canonical: '/products/${product.slug}'`

### Industry Pages (`/industries/[slug]`)
- `title: '${industry.title} EV Charging Solutions'`
- `description: '${industry.description}'`
- `alternates.canonical: '/industries/${industry.slug}'`

---

## 3. Structured Data (JSON-LD)
Structured schemas to be rendered on key pages:
1. **Organization Schema (Root Layout):**
   - `@type: 'Organization'`
   - `name: 'Minit Charger'`
   - `url: 'https://minitcharger.com'`
   - `logo: 'https://minitcharger.com/assets/logo.png'`
2. **Product Schema (`/products/[slug]` & `/products/altus-ii`):**
   - `@type: 'Product'`
   - `name: '${product.name}'`
   - `description: '${product.usp}'`
   - `brand: { '@type': 'Brand', 'name': 'Minit Charger' }`

