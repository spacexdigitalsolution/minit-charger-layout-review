# Batch 03 Answers: Sitemap, Navigation & Copywriting Architecture

- **Core Launch Sitemap:**
  - Home (`/`): Flagship hero, problem framing, tabbed product catalog, engineering advantages, case study proof, client quotes.
  - Products Hub (`/products`): Full hardware taxonomy (Altus II, Magnus, Momentus Gen2, Maximus Gen2, Pharus, Durus, Mobilus).
  - Altus II Deep Dive (`/products/altus-ii`): Hardware detail, electrical spec sheet, paired deployments, cloud integration, video module.
  - Dynamic Product Details (`/products/[slug]`): In-depth hardware profiles driven by `data/products.js`.
  - Industries Hub (`/industries`): Industry solutions taxonomy (Airport GSE, Commercial Fleets, Distribution Centers, Transit Bus).
  - Aviation GSE Deep Dive (`/industries/aviation-gse`): Ramp challenges, persona comparison split, airport power management.
  - Dynamic Industry Details (`/industries/[slug]`): Sector solutions driven by `data/industries.js`.
  - Blog & Insights (`/blogs`, `/blogs/[slug]`): Thought leadership and technical articles driven by `data/blogs.js`.
  - About Us (`/about`): Mission, engineering heritage, leadership quote, core operating values.
  - Contact & Quote Request (`/contact`): Multi-field consultation form for depot fleet scoping.
  - Internal Review Sandbox (`/internal/hero-variations`): Interactive evaluation sandbox featuring 7 hero layout treatments.
- **Copywriting Strategy:** `hybrid`
  - Engineering specifications and product matrix sourced directly from `client-context/Product Comparison Matrix (1).docx.md`.
  - High-impact positioning copy authored in `data/*.js` and component templates.
- **Voice & Tone:** Authoritative, mission-critical, engineering-precise, transparent, dependable.
- **Header Navigation:**
  - Logo -> `/`
  - Products dropdown mega-menu
  - Industries dropdown mega-menu
  - About -> `/about`
  - Insights -> `/blogs`
  - Primary CTA: "Get a Quote" -> `/contact`
- **Footer Navigation:**
  - Product links, industry links, corporate profile, copyright notice, legal links.

