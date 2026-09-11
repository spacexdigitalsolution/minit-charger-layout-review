# Task: Build the Homepage — Minit Charger

## Objective
Build the homepage using the section structure, pacing, and copy length 
shown in the reference screenshot (`minit-charger-layout.vercel.app` 
concept build) — but executed entirely within the established minimalist 
design system, not the reference's current visual treatment (which still 
has the dark-green card-chrome / boxed-section problem we've been fixing 
throughout this thread).

**Match:** section order, copy length/density per section, general content 
scope (what topics are covered, how much is said about each).
**Do not match:** card styling, colored section-background blocks, icon-
in-circle badges, boxed feature grids, drop shadows — replace all of these 
with the hairline/whitespace/typography-only system already established 
on the product and industry pages.

---

## Hard Constraints (carried over, unchanged)
- No AI-generated imagery or video — source only from 
  `Marketing Collaterals - Rendering, Video & Digital Assets/`. Flag any 
  section where no real asset exists rather than filling with a 
  placeholder or generated image.
- Two-font system only (established display headline font + neutral 
  sans body).
- Green is a scarce accent only — CTA buttons and single highlight 
  moments. No colored section backgrounds (the reference's dark-green 
  full-bleed sections should become either plain white, light neutral 
  gray, or near-black — not green-tinted).
- No card-chrome default pattern anywhere: no gray fill backgrounds, no 
  colored rule dividers, no icon-in-colored-circle badges, no drop 
  shadows. Separation comes from whitespace, hairline dividers, and 
  type-weight contrast only — consistent with the product and industry 
  pages already built.
- All copy/claims/specs must trace to real source content (Product 
  Comparison Matrix, brochures, or equivalent homepage-level company 
  content). Flag gaps rather than inventing claims, stats, or testimonials.

---

## New requirement: Componentize shared sections
Before building homepage-specific content, extract and formalize these 
as **reusable components** referenced (not rebuilt) across the homepage, 
product pages, and industry pages:

1. **FAQ component** — the hairline-divider, no-card accordion already 
   refined on the Altus II product page. Accepts a props/data array of 
   Q&A pairs so each page can pass its own relevant questions.
2. **Final CTA band component** — the dark, photographic-background 
   closing section pattern already established. Accepts props for 
   headline text, primary/secondary button labels + links, and 
   background image, so tone/content differs per page but structure 
   and styling stay identical everywhere.
3. (If not already componentized) **Stat-strip component** (the 
   Output/Dwell Time/Utilization-style 3-stat row) and **image-card 
   grid component** (the ABB-style full-bleed product card grid) — 
   both are used more than once across the site per earlier plans, 
   formalize them now so the homepage can reuse rather than reinvent.

Audit the product and industry pages after componentizing — replace 
their inline FAQ/CTA implementations with the shared components to 
confirm parity, rather than letting three slightly different versions 
drift.

---

## Homepage Section Plan
(mapped from the reference screenshot's structure — copy length/scope 
per section should match, styling should not)

1. **Hero** — headline + short subcopy + dual CTA (per reference: "Get a 
   Quote" + "Explore Solutions"), real product+context image. Apply the 
   hero-trim lessons already established (restrained copy, one dominant 
   visual, careful use of two CTAs only if truly warranted at homepage 
   level — reference does use two here, that's acceptable for a homepage 
   entry point vs. a deeper product/industry page).
2. **Trust strip** — small 3-icon row (industrial expertise / universal 
   compatibility / smart connectivity, or equivalent) — kept minimal, 
   no icon-circle badges, flat icons only.
3. **"Why fleets switch" — problem framing** — short intro paragraph + 
   3-column plain benefit list (reuse the de-genericized challenge/
   capability typographic pattern already established, not cards).
4. **"Engineered for Every Environment"** — real environment photography 
   grid (warehouse/airport/GSE/industrial-commercial), minimal captions, 
   no dark-green card backgrounds — plain image grid with text labels 
   beneath or overlaid per the ABB full-bleed card pattern.
5. **"Engineered advantages" detail list** — short expandable/plain list 
   format, matching reference's accordion-style advantage list but in 
   the flat hairline style, not a boxed white-on-black card stack.
6. **Interactive charging scenes** — persona/tab-based image switcher 
   (Warehouse / Airport), reusing the functional-tab-switch pattern 
   established on the industry page (must actually change content, not 
   just visuals).
7. **Indoor vs outdoor comparison** — two-column real-image comparison, 
   plain layout, no dark-green boxed cards.
8. **Featured product spotlight** ("Meet Momentus" style) — single 
   product feature block, real image, short copy, two CTAs.
9. **"Cutting-edge solutions by use case"** — product grid (Altus II, 
   Magnus, Moblka, CellTrac, Cumulus, etc.) using the shared image-card 
   grid component. Flag any product missing a real image rather than 
   using a gray placeholder box.
10. **Customer quotes** — only if real testimonial content exists; flag 
    as a gap otherwise. If used, plain text-led quote layout, no card 
    boxes.
11. **Company proof/stat band** — reuse the shared stat-strip component 
    (25+ years, install time, etc.) with real figures only, on a dark 
    or neutral background (not green-tinted).
12. **Spec comparison table** — reuse the hairline spec-table pattern 
    already established on the product page.
13. **"From first call to fully installed" process steps** — plain 
    numbered list (01/02/03/04 style, matching the established numeral 
    convention), no icon circles or boxed cards.
14. **Guides/resources cross-sell** — simple card row using the shared 
    image-card component, real content only.
15. **FAQ** — shared FAQ component, homepage-relevant questions.
16. **Local/regional service note** (if relevant/real, e.g. service area 
    coverage) — short plain text block, not a boxed section.
17. **Final CTA band** — shared CTA component.
18. **Contact section / footer** — matches existing footer structure 
    already established on other pages.

---

## Word-length calibration
Match the reference's relative copy density per section (short intro 
paragraphs, 1-2 sentence benefit descriptions, short list items) — do 
not expand copy to fill more visual space than the reference does. The 
minimalist direction should come from removing visual chrome and adding 
whitespace, not from cutting or padding the actual word counts shown.

---

## Motion
Reuse the existing GSAP/Lenis setup — section fade/stagger on scroll 
entry, functional tab-switch animations for the environment/scene 
switchers, count-up for the stat band, consistent with timing already 
established across the product and industry pages.

---

## Definition of Done
- [ ] FAQ and Final CTA extracted as shared components, used identically 
      across homepage, product page, and industry page
- [ ] Stat-strip and image-card grid components extracted/reused where 
      applicable
- [ ] Section order and copy density matches the reference screenshot
- [ ] All dark-green card-chrome, colored borders, and icon-circle 
      badges replaced with the established hairline/whitespace system
- [ ] All imagery real and sourced from the asset library; gaps flagged
- [ ] All claims/stats/testimonials traceable to real source content
- [ ] Two-font system and scarce-green-accent rule respected throughout
- [ ] Taste skill and optimizer run, findings addressed
- [ ] Cross-page audit confirms FAQ/CTA components render identically 
      on all three page types