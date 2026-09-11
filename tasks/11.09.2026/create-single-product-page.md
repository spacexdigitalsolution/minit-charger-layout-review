# Task: Build the Minit Charger Product Page

## Objective
Design and implement a single product page that matches the visual and structural quality bar set by Kempower and ABB E-mobility, using our established layout theory — while staying true to Minit Charger's own product line, brand, and content. This is not a reskin of a competitor; it's applying the *same design ideology* (restraint, hierarchy, data-as-proof, editorial confidence) to our own product.

---

## 0. Grounding — Visual Inspiration Pass
Before touching layout or code, review the reference sites with fresh eyes and capture concrete takeaways (not just "looks premium"):
- `https://kempower.com/` — homepage + at least one product page (e.g. Kempower Satellite)
- `https://e-mobility.abb.com/en` — homepage + the A400 product page

Capture screenshots of:
- Hero section (crop tight on type + image relationship)
- Quick-spec strip placement (where it sits relative to the hero)
- Icon/benefit grid styling
- Full spec table treatment (tabs, inline vs. PDF-only)
- CTA banding patterns

Log these as reference frames in the implementation plan — each frame should be tied to a specific section of our own page (e.g. "Hero reference: Kempower Satellite → maps to our Altus II hero").

---

## 1. Reference Materials (read all before planning)
| Resource | Path | Purpose |
|---|---|---|
| Product page layout guidelines | `tasks/11.09.2026/product-page-layout-guideliness.md` | Structural rules — section order, component specs |
| Taste skill | `prompts/run-taste-skill.md` | Aesthetic judgment pass — run after first draft |
| Product comparison matrix | `client-context/Product Comparison Matrix (1).docx.md` | Ground-truth specs to avoid inventing numbers |
| Product marketing collateral | `Marketing Collaterals - Rendering, Video & Digital Assets/ALTUS_II/Brochures 2025` | Source copy, claims, and approved imagery |
| Optimizer prompt | `prompts/optimize.md` | Final pass — performance + code cleanup |

Do not start writing layout code until the comparison matrix and brochure content have been read — the page's claims and specs must trace back to these sources, not be invented or copied from competitor sites.

---

## 2. Asset Pipeline (do this before layout work)
1. Explore `Marketing Collaterals - Rendering, Video & Digital Assets` end-to-end — list every subfolder, don't just grab the first images found.
2. Select images that match the page's actual needs: one hero-quality isolated/studio shot, one or two in-context/environment shots, detail/close-up shots for the "story" section, and any exploded/technical diagrams for the specs section.
3. Move selected assets into `public/assets-src` using a structured path, e.g.:
   ```
   public/assets-src/products/altus-ii/hero/
   public/assets-src/products/altus-ii/detail/
   public/assets-src/products/altus-ii/context/
   public/assets-src/products/altus-ii/diagrams/
   ```
4. Run `.agents/skills/optimize-assets/SKILL.md` against the new folder to compress/convert before anything is referenced in code.

Do not reference an asset in the layout until it has passed through optimize-assets.

---

## 3. Skill Discovery
Before building anything by hand, check `.agents/skills/find-skills/SKILL.md` for existing skills that cover:
- Hero section generation
- Spec-table / tabbed data components
- Icon-grid benefit sections
- Image galleries with lightbox/carousel behavior

Use an existing skill over hand-rolling a component if one fits — note in the plan which sections use a skill vs. custom code.

---

## 4. Layout Planning (sequential, not parallel)

### Step 1 — Navbar & Footer first
These are shared shell components, not part of the product page itself — get them right once:
- Navbar: logo, mega-menu structure (Products / Industries / Company), CTA button, mobile behavior
- Footer: categorized link columns (Products / Industries / Company / Connect), social icons, legal line
Apply the layout theory: restrained color, single accent, consistent type scale.

### Step 2 — Apply the Product Page Layout Theory
Follow the established sequence (see earlier layout theory in this conversation):
1. Hero — isolated product shot + name + tagline + inline quick-spec strip
2. Key Benefits — icon-grid, 3–4 items, one sentence each
3. Story section — alternating image/caption blocks pulled from brochure copy
4. Stat/Proof module — big numeric callouts (sourced from comparison matrix, not invented)
5. Full spec table — tabbed if long, inline on page, with a "Download datasheet" option
6. Cross-sell — related products / services
7. Conversion band — single CTA
8. FAQ (if content exists in brochure/matrix — do not fabricate FAQs)

### Step 3 — Write the Implementation Plan
Before generating any layout code, produce a written plan that includes:
- Section-by-section breakdown mapped to specific asset files and specific copy sources (brochure page/paragraph, or matrix row)
- Which reference site each section's visual approach is inspired by, and why
- Explicit call-outs of what NOT to do (reference the "avoid" list from the taste brief — no stock icon PNGs, no boxy numbered-step graphics, no unstructured bullet walls)
- Open questions/gaps where brochure or matrix content is missing, flagged rather than filled with placeholder/invented claims

### Step 4 — Generate the Layout
Only after the plan is written and assets are optimized, generate the actual product page.

---

## 5. Quality Gates (run in order, after first draft)
1. **Taste pass** — run `prompts/run-taste-skill.md` against the built page; address findings before moving on.
2. **Optimizer pass** — run `prompts/optimize.md` for performance/code quality.
3. **Layout theory self-check** — re-read the product-page-layout-guidelines and confirm no section was skipped or reordered without reason.

---

## Definition of Done
- [ ] Navbar and footer built and shared across the page
- [ ] All copy/specs traceable to brochure or comparison matrix — nothing fabricated
- [ ] All images sourced from Marketing Collaterals, moved into `public/assets-src` with structured folders, and optimized
- [ ] Existing skills checked and used where applicable
- [ ] Implementation plan written and reviewed before code generation
- [ ] Layout follows the agreed product-page section sequence
- [ ] Taste skill and optimizer both run with findings addressed
- [ ] Page avoids every pattern listed in the "avoid" list (no generic template artifacts)