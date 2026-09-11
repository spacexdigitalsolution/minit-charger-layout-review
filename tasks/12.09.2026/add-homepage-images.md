# Task: Replace Homepage Images with Assets from `public/assets/Home Page`

## Objective
Search-and-replace every image currently used on the homepage with the 
exact, correct image from `public/assets/Home Page`, matching each image 
to its intended section/purpose — not just swapping in order or by 
filename guesswork.

---

## Rules

1. **Audit before replacing.** First, list every image slot currently 
   used on the homepage (hero, trust strip icons, environment grid, 
   feature spotlight, product cards, stat band background, CTA band 
   background, etc.) alongside what each slot is currently showing 
   (placeholder, wrong asset, old asset, or already-correct).

2. **Inventory the source folder.** Fully list the contents of 
   `public/assets/Home Page` — every file, including subfolders if any 
   exist. Do not assume filenames are self-explanatory; open/preview 
   ambiguous ones to confirm what they actually depict before assigning 
   them to a section.

3. **Match by content, not convenience.** Each image must be matched to 
   the section it's contextually correct for (e.g. a warehouse interior 
   shot goes in the indoor/material-handling section, not the airport/ 
   GSE section) — do not place an image just because it's next in the 
   folder or roughly the right aspect ratio.

4. **No AI-generated or placeholder fallback.** If a homepage section has 
   no matching real image available in `public/assets/Home Page`, do not 
   substitute a generated image, a stock photo, or a gray placeholder box 
   — flag the exact section and what kind of image is missing, so it can 
   be sourced separately.

5. **Preserve existing crop/treatment consistency.** Once matched, run 
   the replacement images through the same treatment already established 
   (consistent background type, lighting logic, crop ratio per component — 
   per the "all product images share one consistent treatment" rule set 
   earlier). If a candidate image doesn't fit the established treatment 
   (wrong lighting style, inconsistent background), flag it as a 
   potential quality mismatch rather than forcing it in.

6. **Run the asset optimizer.** After placing the correct images, run 
   `.agents/skills/optimize-assets/SKILL.md` on the newly used assets 
   before they're referenced in final code, per the established asset 
   pipeline.

7. **Update file paths cleanly.** Move/reference images using the 
   established structured folder pattern under `public/assets-src/` (or 
   confirm whether `public/assets/Home Page` is meant to be the final 
   serving location — clarify and be consistent with whatever pattern 
   the rest of the site already uses, don't introduce a third folder 
   convention).

---

## Process
1. Produce a mapping table: **Homepage section → current image (if any) 
   → matched replacement image from `public/assets/Home Page` → 
   confidence/flag notes.**
2. Get any ambiguous matches confirmed before wiring them into code 
   (e.g., two very similar warehouse shots — note which one was chosen 
   and why).
3. Replace images section by section, not in one bulk pass, so each 
   swap can be visually verified against its section context immediately.
4. Run the optimizer on all newly placed assets.
5. Full visual QA pass: check for stretched/cropped-wrong images, 
   inconsistent treatment across sections, and broken image paths.

---

## Definition of Done
- [ ] Full mapping table produced (section → matched image → notes)
- [ ] Every homepage image slot filled with a real, contextually correct 
      asset from `public/assets/Home Page`
- [ ] No AI-generated, stock, or placeholder images remain
- [ ] Any sections with no available matching real image explicitly 
      flagged, not filled synthetically
- [ ] All new assets run through `optimize-assets`
- [ ] Consistent image treatment (background/lighting/crop) verified 
      across all replaced images
- [ ] Visual QA pass completed, no broken paths or stretched/misaligned 
      images