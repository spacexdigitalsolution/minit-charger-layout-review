# Findings Report: `web-design-guidelines`

## 1. Skill Metadata & Pin

- **Skill:** `web-design-guidelines`
- **Package:** `vercel-labs/agent-skills@web-design-guidelines`
- **Pinned Ref:** `5a37a6329fbad3666c3207392a6a7c0110e92efb`
- **Status:** Installed in `.agents/skills/web-design-guidelines`
- **Focus:** Visible focus states (`focus-visible`), interactive button affordances, ARIA state attributes, and typographic balancing.

---

## 2. Line-Cited Findings & Proposed Enhancements

### Finding 1: Unreplaced `outline-none` and Missing Accordion ARIA States
- **File & Lines:** [`site/components/ui/FaqSection.js#L55-L65`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/FaqSection.js#L55-L65)
- **Rules:** Focus States ("Never outline-none without focus replacement; use focus-visible") & Accessibility ("Accordion buttons need aria-expanded and aria-controls")
- **Problem:**
  - `focus:outline-none` removes focus indication for keyboard navigators with no replacement.
  - Accordion buttons lack `aria-expanded` and `aria-controls` links to answer containers.
  - Heading lacks `text-balance`, allowing single-word title wrapping.
- **Proposed Optimization:**
  - Replace `focus:outline-none` with `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-sm`.
  - Add `aria-expanded={isOpen}` and `aria-controls={`faq-answer-${index}`}`.
  - Add `aria-hidden="true"` to decorative `<Plus />` icon.
  - Add `text-balance` to section headline.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 2: Missing Focus Indication on Hero Slider Media Controls
- **File & Lines:** [`site/app/_components/hero/HomeHero.js#L173-L205`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/hero/HomeHero.js#L173-L205)
- **Rule:** Focus States ("Interactive elements need visible focus: focus-visible:ring-*")
- **Problem:** Slide indicators and play/pause/mute buttons have no visible focus ring when focused via Tab key.
- **Proposed Optimization:** Add `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm` to hero control buttons, and add `text-balance` to main hero headline.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 3: Missing Tablist Semantics and Focus Rings on Product Catalog
- **File & Lines:** [`site/app/_components/features/TabbedProductCatalog.js#L125-L138`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/features/TabbedProductCatalog.js#L125-L138)
- **Rules:** Accessibility ("Interactive tabs need role='tab' and aria-selected") & Focus States
- **Problem:** Category navigation buttons lack `role="tab"` / `aria-selected` semantic binding and omit visible keyboard focus rings.
- **Proposed Optimization:** Add `role="tablist"` to container, `role="tab"` and `aria-selected={activeTab === tab.id}` to buttons, `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white` for keyboard focus, and `text-balance` on section header.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 4: Widows on Conversion Band Callout Heading
- **File & Lines:** [`site/components/ui/ConversionBand.js#L54`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/ConversionBand.js#L54)
- **Rule:** Typography ("Use text-wrap: balance on headings")
- **Problem:** Call-to-action headline wraps unevenly on various viewports.
- **Proposed Optimization:** Add `text-balance` to the `<h2>` headline.
- **Impact & Effort:** Low-Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

## 3. Planned Files to Modify

1. [`site/components/ui/FaqSection.js`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/FaqSection.js)
2. [`site/app/_components/hero/HomeHero.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/hero/HomeHero.js)
3. [`site/app/_components/features/TabbedProductCatalog.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/features/TabbedProductCatalog.js)
4. [`site/components/ui/ConversionBand.js`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/ConversionBand.js)
