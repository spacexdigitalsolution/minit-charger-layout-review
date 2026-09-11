# Task: Replace Homepage Content with `tasks/12.09.2026/Homepage Banner Content ver1.md`

## Objective
Swap the current homepage copy/content for the approved content in 
`tasks/12.09.2026/Homepage Banner Content ver1.md`, without altering the 
layout, component structure, styling system, or motion already built and 
approved for the homepage.

---

## Rules

1. **Content only, not structure.** Read `Homepage Banner Content ver1.md` 
   fully first. Map each piece of content (headlines, subcopy, button 
   labels, section intros, list items, stats, etc.) to the corresponding 
   existing homepage section. Do not add, remove, or reorder sections to 
   accommodate the new copy unless the content file explicitly introduces 
   a section that has no current home — if that happens, stop and flag it 
   rather than improvising a new layout.

2. **Preserve the design system exactly as-is.** Do not change fonts, 
   colors, spacing, component styling (FAQ/CTA shared components, stat-
   strip, image-card grid, hairline dividers), or animation timing as 
   part of this content swap. This is a copy replacement task only.

3. **Word-length/tone check.** If any new copy block is significantly 
   longer or shorter than what the current layout was designed around 
   (e.g. a hero subcopy that's now 3 sentences where the layout expects 
   one line), flag the mismatch rather than silently letting text wrap 
   awkwardly or overflow — note it for a layout adjustment decision 
   rather than forcing it in.

4. **Preserve all real-image/asset references** already wired into each 
   section — this task is not touching imagery, only text content. Do 
   not swap, remove, or placeholder any existing real image while 
   updating copy nearby.

5. **Claims/stats accuracy.** If the new content file includes any 
   numbers, specs, or claims, cross-check them against the Product 
   Comparison Matrix (`client-context/Product Comparison Matrix (1).docx.md`) 
   for consistency. Flag any discrepancy rather than resolving it 
   unilaterally.

6. **CTA/button labels and links.** If new button copy is provided 
   (e.g. "Get a Quote," "Explore Solutions"), update label text only — 
   preserve existing link destinations unless the content file specifies 
   new ones.

---

## Process
1. Read `Homepage Banner Content ver1.md` in full before editing anything.
2. Produce a section-by-section content map (old copy → new copy) as a 
   quick internal checklist before touching code, so nothing gets missed 
   or misplaced between sections.
3. Apply the content swap section by section.
4. Do a full-page visual QA pass afterward — check for text overflow, 
   awkward wrapping, or broken layout rhythm caused by new copy length, 
   and flag anything found rather than auto-adjusting spacing/type size 
   to compensate.
5. Confirm shared components (FAQ, CTA band) still pull from their 
   existing prop/data structure correctly if their content changed.

---

## Definition of Done
- [ ] All content from `Homepage Banner Content ver1.md` mapped and 
      applied to the correct existing sections
- [ ] No layout, styling, or component structure changes made
- [ ] No images/assets altered
- [ ] Any content-to-layout mismatches (length, missing section, new 
      section with no home) explicitly flagged, not auto-resolved
- [ ] Claims/stats in new copy cross-checked against the Product 
      Comparison Matrix
- [ ] Full visual QA pass completed post-swap, issues logged