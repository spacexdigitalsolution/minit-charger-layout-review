# Findings Report: `core-web-vitals`

## 1. Skill Metadata & Pin

- **Skill:** `core-web-vitals`
- **Package:** `addyosmani/web-quality-skills@core-web-vitals`
- **Pinned Ref:** `afa8da942115f2961fdbfa80807ea0b232ff6c00`
- **Status:** Installed in `.agents/skills/core-web-vitals`
- **Focus:** LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and INP (Interaction to Next Paint) loading & rendering efficiency.

---

## 2. Line-Cited Findings & Proposed Enhancements

### Finding 1: Missing `display: "swap"` on Google Fonts (LCP & CLS)
- **File & Lines:** [`site/app/layout.js#L7-L20`](file:///c:/code/freelance/minit-charger-layout-review/site/app/layout.js#L7-L20)
- **Metric:** LCP & CLS (Font Render Delay & Fallback Swapping)
- **Problem:** Font configurations for `Geist`, `Geist_Mono`, and `Oswald` omit `display: "swap"`. Browsers can enter a Flash of Invisible Text (FOIT) state while downloading webfonts, directly deferring above-the-fold text render time and increasing LCP render delay.
- **Proposed Optimization:** Add `display: "swap"` to `Geist`, `Geist_Mono`, and `Oswald` loader invocations.
- **Impact & Effort:** High Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 2: Missing Modern Image Format Negotiation & Response Compression (LCP & TTFB)
- **File & Lines:** [`site/next.config.mjs#L1-L20`](file:///c:/code/freelance/minit-charger-layout-review/site/next.config.mjs#L1-L20)
- **Metric:** LCP & Network Transfer (Resource Load Delay)
- **Problem:** `next.config.mjs` lacks AVIF/WebP next-gen format prioritization and explicit compression configuration.
- **Proposed Optimization:** Add `compress: true`, `poweredByHeader: false`, and `images: { formats: ["image/avif", "image/webp"] }`.
- **Impact & Effort:** Medium-High Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 3: Inactive Background Video Media Buffering Contention (LCP & Resource Priority)
- **File & Lines:** [`site/app/_components/hero/HomeHero.js#L109-L116`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/hero/HomeHero.js#L109-L116)
- **Metric:** LCP (Resource Contention) & Network Bandwidth
- **Problem:** Slide `<video>` elements lack a `preload` attribute. Browsers initiate concurrent background buffering for hidden slides on initial page mount, competing for network throughput against the primary above-the-fold hero media.
- **Proposed Optimization:** Add `preload={index === 0 ? "auto" : "none"}` to hero slide `<video>` tags.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 4: Layout Micro-Shifts During Counter Animation (CLS)
- **File & Lines:** [`site/components/ui/StatModule.js#L57`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/StatModule.js#L57)
- **Metric:** CLS (Visual Stability)
- **Problem:** The GSAP numeric counter animates numbers sequentially. Proportional font glyph widths cause character width variance on each frame update, causing micro layout shifts in surrounding card modules.
- **Proposed Optimization:** Add `tabular-nums` utility class to ensure monospaced numeric tabular figures during animation.
- **Impact & Effort:** Low-Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

## 3. Planned Files to Modify

1. [`site/app/layout.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/layout.js)
2. [`site/next.config.mjs`](file:///c:/code/freelance/minit-charger-layout-review/site/next.config.mjs)
3. [`site/app/_components/hero/HomeHero.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/hero/HomeHero.js)
4. [`site/components/ui/StatModule.js`](file:///c:/code/freelance/minit-charger-layout-review/site/components/ui/StatModule.js)
