# Stage 5: Layout System & Component Registry

**Project:** `minit-charger-layout-review`  
**Approved at Gate 5:** 2026-10-28  

---

## 1. Feature Colocation Rule
The codebase strictly adheres to Next.js App Router feature colocation:
- **Route-Local Components:** Components consumed on exactly 1 route reside inside `<route>/_components/`.
- **Shared Components:** Components consumed across 2 or more routes reside in `app/components/`.

---

## 2. Shared Component Registry (`app/components/`)

| Component | Purpose | Consumers | Client/Server Boundary |
| :--- | :--- | :--- | :---: |
| **`Navbar.js`** | Primary navigation header with dropdown mega-menus | All pages (`app/layout.js`) | `'use client'` |
| **`Footer.js`** | Site-wide navigation footer and copyright notice | All pages (`app/layout.js`) | RSC |
| **`SmartImage.js`** | Zero-CLS responsive image handler with WebP srcset | All product & industry pages | RSC |
| **`ConversionBand.js`** | High-contrast callout banner driving to `/contact` | Home, Products, Industries | RSC |
| **`CumulusSpotlight.js`** | Software spotlight on cloud fleet energy management | Home, Altus II | RSC |
| **`FaqSection.js`** | Interactive accordion answering technical questions | Home, Altus II | `'use client'` |
| **`ProductCard.js`** | Catalog card displaying hardware thumbnail and specs | Home, `/products` | RSC |
| **`IndustryCard.js`** | Sector card highlighting industry charging solutions | Home, `/industries` | RSC |
| **`StatModule.js`** | Metric counter card with numerical telemetry | Altus II, Aviation GSE | `'use client'` |
| **`UnderDevelopment.js`** | Placeholder banner for routes currently undergoing review | Stubbed sub-pages | RSC |

---

## 3. Route Component Index (`<route>/_components/`)

### Home Route (`app/_components/`)
- `HomeHero.js`: Flagship hero with animated USP statements
- `ProblemFraming.js`: Commercial fleet charging bottlenecks
- `TabbedProductCatalog.js`: Interactive category-switched product grid
- `EngineeredAdvantages.js`: Hardware architecture breakdown
- `ConsolidatedProof.js`: Case studies and operational metric statistics
- `CustomerQuotes.js`: Stakeholder testimonials and ground handler reviews

### Altus II Deep Dive (`app/products/altus-ii/_components/`)
- `HeroSection.js`: Dual-port pedestal hero
- `SpecsTable.js`: Detailed electrical input/output specifications
- `HardwareDetail.js`: Modular power cabinets and cable management
- `PairAltusII.js`: Paired deployment options
- `GatePowerManager.js`: Airport power allocation schematic
- `ProductGallery.js`: High-resolution CAD rendering showcase
- `VideoModule.js`: Video showcase of airport ramp deployment

