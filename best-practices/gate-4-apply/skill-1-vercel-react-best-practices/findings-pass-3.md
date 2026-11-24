# Findings Report: `vercel-react-best-practices` (Pass 3)

## 1. Focus & Scope

- **Skill:** `vercel-react-best-practices` (Pass 3)
- **Categories:** Re-render Optimization (`rerender-memo-with-default-value`, `rerender-functional-setstate`).
- **Target Areas:** Global Shared UI Components (`ConversionBand`, `CumulusSpotlight`, `FaqSection`).

---

## 2. Line-Cited Findings & Proposed Optimizations

### Finding 1: Non-Primitive Default Props Allocated on Every Component Render
- **File & Lines:** [`site/components/ui/ConversionBand.js#L20`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/ConversionBand.js#L20)
- **Rule:** `rerender-memo-with-default-value`
- **Problem:** `secondaryCTA = { label: "Request a Quote", href: "/contact" }` creates a new object reference on every render when callers omit `secondaryCTA`.
- **Proposed Optimization:** Hoist `DEFAULT_SECONDARY_CTA` to module scope.
- **Impact & Effort:** Low-Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 2: Non-Primitive Default Array Prop in Spotlight Component
- **File & Lines:** [`site/components/ui/CumulusSpotlight.js#L16-L20`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/CumulusSpotlight.js#L16-L20)
- **Rule:** `rerender-memo-with-default-value`
- **Problem:** `featureBullets = [ ... ]` creates a new array reference on every render when callers omit `featureBullets`.
- **Proposed Optimization:** Hoist `DEFAULT_FEATURE_BULLETS` to module scope.
- **Impact & Effort:** Low-Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 3: Stale Closure Risk in FAQ Accordion State Toggles
- **File & Lines:** [`site/components/ui/FaqSection.js#L56`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/FaqSection.js#L56)
- **Rule:** `rerender-functional-setstate`
- **Problem:** `setOpenIndex(isOpen ? null : index)` relies on closure state rather than functional state transitions.
- **Proposed Optimization:** Convert to `setOpenIndex(prev => prev === index ? null : index)` ensuring atomic state updates under rapid interaction.
- **Impact & Effort:** Low Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

## 3. Planned Files to Modify

1. [`site/components/ui/ConversionBand.js`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/ConversionBand.js)
2. [`site/components/ui/CumulusSpotlight.js`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/CumulusSpotlight.js)
3. [`site/components/ui/FaqSection.js`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/FaqSection.js)
