# Task: Generate the "Aviation GSE" Industry Page

## Objective
Build the Industry/Segment page for Aviation Ground Support Equipment (GSE), applying every standard established during the Altus II product page build. This page follows a different template than the product page (persuasion-by-relevance, not persuasion-by-spec) — do not copy the product page structure directly.

---

## Hard Constraints (carried over, non-negotiable)

1. **No AI-generated imagery, ever.** Source only from `Marketing Collaterals - Rendering, Video & Digital Assets/` — search for any Aviation/GSE-specific folder, plus reusable Altus II product shots where relevant (GSE charging is Altus II's primary use case). If no suitable real image exists for a section, leave it flagged as an open asset gap — do not fill with a placeholder render or stock photo.
2. **Two-font system only** — the established display font (headlines, stat numbers) + neutral sans (body/labels). No third font, no default system font sneaking in on new sections.
3. **Green is a scarce accent only** — CTAs, active states, key highlights. Never used as a structural/decorative device (no colored rules, no colored icon chips, no colored borders as default styling).
4. **No default component-library chrome** — no drop-shadow cards, no pastel icon badges, no rounded pill accordions. Utility sections (FAQ-style content, if present) use the hairline-divider, no-card visual language already established.
5. **All specs/claims must trace to real source content** — pull from `client-context/Product Comparison Matrix (1).docx.md` and any Aviation/GSE-specific brochure or case-study material found in the asset library. Do not fabricate stats, quotes, or claims.

---

## Reference Materials
| Resource | Path | Purpose |
|---|---|---|
| Industry page layout theory | (established earlier in this thread — see "Layout Theory: The Industry/Segment Page") | Structural template |
| Product page (Altus II) | Already built | Component/type/motion system to reuse, not the section order |
| Product comparison matrix | `client-context/Product Comparison Matrix (1).docx.md` | Specs/claims source |
| Marketing collateral | `Marketing Collaterals - Rendering, Video & Digital Assets/` | Real imagery/video — search for Aviation/GSE folder specifically |
| Kempower/ABB reference screenshots | Already captured | Aesthetic + persuasion-pattern reference |
| GSAP/Lenis motion setup | Already implemented on product page | Reuse the same animation utilities/timing values |

---

## Step 0 — Asset & Content Audit (before any layout work)
1. Search the asset library for Aviation/GSE-specific photography, video, or case-study content. Also identify which existing Altus II shots (hero, detail, context) are reusable here since GSE is the product's core use case.
2. Check the Product Comparison Matrix and any brochure content for GSE-specific claims, stats, or customer proof (airport deployments, ground crew testimonials, uptime data in airside conditions).
3. Log what's available vs. missing. Flag gaps explicitly rather than inventing content.

---

## Step 1 — Layout (Industry Page Theory applied)

I now have enough from both to build the industry-page layout theory (ABB's nav mega-menu already showed their industry-page pattern with Output/Dwell Time/Utilization specs per segment). Here it is:

# Layout Theory: The "Industry/Segment" Page

This is a distinct template from the product page — its job is **persuasion by relevance**, not persuasion by spec. It has to make a stranger in a specific role (CPO, retailer, fleet manager, transit authority) think *"this was built for me"* within seconds.

## 1. Core Principle: Segment Before Solution

Unlike the product page (which leads with the object), the industry page leads with **the audience's identity and problem**. The layout is structured around *who you are*, not *what we sell*. The product only appears once the visitor's situation has been named and validated.

## 2. The Structural Sequence

| Section | Purpose | Pattern |
|---|---|---|
| 1. Hero | Name the industry + core value prop | Large image of the *use case* (not the product) + headline framed as outcome ("Reliable Charging. Happy Customers.") |
| 2. Audience Split | Let the visitor self-select | 2–4 clickable persona cards (e.g., Kempower's "Charge Point Operators" vs "Retailers") — each opens a tailored sub-narrative |
| 3. Problem/Solution Pairing | Prove domain understanding | Each persona's pain points listed as bullets, each immediately answered with a capability ("Power comes with cost → dynamic power sharing solves it") |
| 4. Benefit Modules | Deepen the pitch with proof-points | Alternating image + text blocks, one theme per section (revenue, uptime, scalability, multimodality) — same alternating-band pattern as product pages, but themed around *business outcomes* not specs |
| 5. Case Studies | Social proof specific to this industry | Card carousel of real deployments *filtered to this segment* |
| 6. Relevant Products | Bridge back to the catalog | Card row of only the products relevant to this industry (not the full catalog) |
| 7. Content Cross-sell | SEO + nurture | Blog/news cards filtered to the same industry |
| 8. FAQ | Handle segment-specific objections | Accordion, questions written from the persona's point of view |
| 9. Conversion band | Close | "Get in touch" / "Speak to an expert" |

## 3. The Persona-Split Mechanism (unique to this page type)

This is the defining structural device: instead of one linear narrative, the page **branches**. A visitor picks their identity (CPO vs. Retailer, or Car vs. Truck vs. Bus, as ABB does in its mega-menu) and the content — pain points, benefits, even imagery — reconfigures around that choice. This can happen via:
- Tabs/toggle cards on the page itself (Kempower's popup-style persona cards)
- Pre-filtered navigation, where the mega-menu itself does the segmenting before the user even lands (ABB's approach — Output/Dwell Time/Utilization stats differ per industry *inside the nav*)

**Theory point:** the industry page is really a **navigation decision disguised as content** — its real job is routing a diverse audience into the narrower, more relevant story as fast as possible.

## 4. Problem-Solution Micro-Pattern

Within each persona's narrative, content follows a strict rhetorical unit repeated 3–5 times:
> **[Named pain point]** → **[Named Kempower/ABB capability that resolves it]**

This is different from the product page's benefit-icon grid — here, the pain point is stated *first*, in the customer's language, before the solution. It's empathy-led, not feature-led.

## 5. Outcome-Framed Headlines, Not Spec-Framed Headlines

Section headers speak in business outcomes: "Maximize energy delivered," "Increased revenue by higher uptime," "Grow-as-you-go to an optimised investment." Compare this to the product page's engineering-framed headers ("Engineering Excellence," "The Power Within"). **Theory point:** industry pages sell *ROI and risk reduction*; product pages sell *capability and craftsmanship*.

## 6. Imagery Shifts from Object to Context

Product pages photograph the hardware in isolation (studio shots). Industry pages photograph the hardware **in its environment** — a retail parking lot, a logistics yard, workers on-site — reinforcing "this fits into your world," not "here is our object."

## 7. Filtered Repetition of Global Components

Case-study carousels, product-card rows, and blog-card rows are the *same components* used elsewhere on the site — but every instance is **pre-filtered to the current segment**. This is a scalability principle: one component library, many contextual data feeds, so the site can spin up new industry pages cheaply without inventing new UI.

## 8. Theory Summary Statement

> An **industry/segment page** is structured as an empathy funnel, not a spec sheet: it opens by letting the visitor self-identify, mirrors their specific pain points back to them in their own language, answers each pain point with a named capability, reinforces the pitch with in-context imagery and segment-filtered case studies/products, and closes with a single low-friction conversion point — reusing the site's global card and CTA components but always scoped to the one audience currently being addressed.

Want the wireframe diagram (product page vs. industry page vs. homepage, side by side) as a visual artifact next?

---

## Step 2 — Typography & Visual System
- Reuse the exact two-font system, tracking, and weight contrast established on the product page.
- Section headers should be outcome-framed in copy (per industry-page theory), not spec-framed — this is a copy instruction as much as a design one.
- Imagery should favor **context/environment shots** (product in a ramp/airside setting) over isolated studio shots — this is the key visual differentiator from the product page per the layout theory.

---

## Step 3 — Motion (reuse existing GSAP/Lenis setup)
- Apply the same section-entry fade/stagger pattern used across the product page.
- Hero: if real GSE-context video exists, apply the same full-bleed autoplay/muted/looped video treatment with staggered text overlay as the product page hero. If only stills are available, use the load-in stagger without video.
- Icon-grid sections (problem/capability pairs, if rendered as cards): same stagger timing as Salient Features/Primary Applications for consistency.
- Stat band: same count-up animation as the product page.
- Respect `prefers-reduced-motion` throughout.

---

## Step 4 — Quality Gates
1. Run `prompts/run-taste-skill.md` against the built page.
2. Run `prompts/optimize.md`.
3. Cross-check against the Industry Page Layout Theory checklist — confirm the persona/problem framing sequence wasn't skipped or replaced with product-page structure.
4. Screenshot comparison against the Altus II product page — confirm shared type/color/motion system, but distinct section sequence and imagery style (context shots vs. studio shots).

---

## Definition of Done
- [ ] All imagery/video real, sourced from asset library, context/environment-focused
- [ ] All claims/stats traceable to real source material; gaps flagged, not fabricated
- [ ] Follows Industry Page section sequence (problem-led), not the Product Page sequence
- [ ] Shares exact type system, color discipline, and motion timing with the product page
- [ ] FAQ and any utility sections use hairline/no-card styling
- [ ] Product cross-sell filtered to GSE-relevant SKUs only
- [ ] Taste skill + optimizer run, findings addressed
- [ ] Open asset/content gaps explicitly logged for follow-up