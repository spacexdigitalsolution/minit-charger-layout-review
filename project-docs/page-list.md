# Stage 3: Master Page List & Route Tracker

**Project:** `minit-charger-layout-review`  
**Approved at Gate 3:** 2026-10-28  
**Updated:** 2026-10-28 (Complete Gate 0–8 Product & Industry Scaffolding)

The following routes constitute the master application sitemap and build verification inventory:

---

## 1. Core Public Routes & Products
- [x] **Home (`/`)**: Main brand portal, product showcase, engineering benefits, customer proof.
- [x] **About Us (`/about`)**: Company background, mission statement, leadership perspective, core values.
- [x] **Products Hub (`/products`)**: Filterable hardware catalog across all charger models.
- [x] **Altus II Feature Deep Dive (`/products/altus-ii`)**: Flagship dual-port DC fast charger deep dive.
- [x] **Magnus Dual-Port Universal (`/products/magnus`)**: 100–200 kW universal mixed-fleet and airport fast charger.
- [x] **Mobilus Mobile BESS Charger (`/products/mobilus`)**: Mobile DC fast charger & BESS generator on wheels.
- [x] **Momentus Opportunity Charger (`/products/momentus`)**: 20 kW single-port indoor warehouse & MHE opportunity charger.
- [x] **Maximus High-Throughput Industrial (`/products/maximus`)**: 40 kW dual 20 kW ports high-throughput MHE charger.
- [x] **Durus Onboard & Standalone (`/products/durus`)**: 2.2–3.3 kW compact sealed charger for LSVs and utility carts.
- [x] **CellTrac Smart BMS (`/products/celltrac`)**: Onboard battery telemetry and health monitoring system.
- [x] **Cumulus Cloud Platform (`/products/cumulus`)**: Unified enterprise telematics, power billing, and asset tracking.
- [x] **AssetPro Legacy Route (`/products/assetpro`)**: Alias route preserving legacy links to Cumulus.
- [x] **Dynamic Product Route (`/products/[slug]`)**: Dynamic fallback renderer for any product ID.

---

## 2. Industry Solutions
- [x] **Industries Hub (`/industries`)**: Sector solutions overview (Airport GSE, Commercial Fleets, Warehouses, LSVs).
- [x] **Aviation GSE Deep Dive (`/industries/aviation-gse`)**: In-depth airport tarmac solutions and fleet challenges.
- [x] **Warehouse Logistics (`/industries/warehouse`)**: Material handling equipment, opportunity charging, and battery room elimination.
- [x] **Material Handling Alias (`/industries/material-handling-equipment`)**: Legacy 301 alias route to Warehouse.
- [x] **Low-Speed Vehicles (`/industries/lsv`)**: Campus, resort, and utility fleet charging systems.
- [x] **Low-Speed Vehicles Alias (`/industries/low-speed-vehicles`)**: Legacy 301 alias route to LSV.
- [x] **Dynamic Industry Route (`/industries/[slug]`)**: Dynamic fallback renderer for any industry ID.

---

## 3. Knowledge Base & Governance
- [x] **Insights Hub (`/blogs`)**: Knowledge base, whitepapers, and fleet case study articles.
- [x] **Single Blog Reader (`/blogs/[slug]`)**: Dynamic article layout driven by `data/blogs.js`.
- [x] **Contact & Consultation (`/contact`)**: Multi-step quote inquiry and fleet feasibility scoping form.
- [x] **Privacy Policy (`/privacy`)**: Data governance, telemetry encryption, and customer privacy terms.
- [x] **Privacy Policy Alias (`/privacy-policy`)**: Legacy alias preserving external links.
- [x] **Terms & Conditions (`/terms`)**: Commercial terms, warranty provisions, and intellectual property.
- [x] **Terms & Conditions Alias (`/terms-conditions`)**: Legacy alias preserving external links.

---

## 4. Review & Internal Routes
- [x] **Hero Variations Review (`/internal/hero-variations`)**: Internal layout review sandbox evaluating 7 interactive hero treatments.
