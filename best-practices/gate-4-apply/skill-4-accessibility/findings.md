# Findings Report: `accessibility`

## 1. Skill Metadata & Pin

- **Skill:** `accessibility`
- **Package:** `addyosmani/web-quality-skills@accessibility`
- **Pinned Ref:** `afa8da942115f2961fdbfa80807ea0b232ff6c00`
- **Status:** Installed in `.agents/skills/accessibility`
- **Focus:** WCAG 2.2 Level A/AA conformance—Bypass blocks (skip link), form label associations, ARIA tablist/tabpanel semantics, and focus appearance.

---

## 2. Line-Cited Findings & Proposed Enhancements

### Finding 1: Missing Bypass Block / Skip Link
- **File & Lines:** [`site/app/layout.js#L47-L53`](file:///c:/code/freelance/minit-charger-layout-review/site/app/layout.js#L47-L53)
- **WCAG Rule:** 2.4.1 Bypass Blocks (Level A)
- **Problem:** Keyboard and screen reader users must tab through repetitive navigation links on every page load before reaching main content.
- **Proposed Optimization:**
  - Add an accessible skip link inside `<body>`:
    ```jsx
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zinc-950 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:font-semibold"
    >
      Skip to main content
    </a>
    ```
  - Bind `<main id="main-content" tabIndex={-1} className="flex-grow">`.
- **Impact & Effort:** High Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 2: Missing Explicit Form Label Association on Sales Inquiry
- **File & Lines:** [`site/app/contact/_components/DynamicForm.js#L140-L150`](file:///c:/code/freelance/minit-charger-layout-review/site/app/contact/_components/DynamicForm.js#L140-L150)
- **WCAG Rules:** 1.3.1 Info and Relationships & 3.3.2 Labels or Instructions (Level A)
- **Problem:** The "Product Type" `<label>` has no `htmlFor` attribute and the child `<select>` has no matching `id` or `name`, leaving assistive technologies unable to announce the field's purpose upon focus.
- **Proposed Optimization:**
  - Add `htmlFor="salesProductType"` to `<label>`.
  - Add `id="salesProductType" name="productType"` to `<select>`.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 3: Missing Focus Indicator Contrast on Form Controls
- **File & Lines:** [`site/app/contact/_components/InputField.js#L27, L36`](file:///c:/code/freelance/minit-charger-layout-review/site/app/contact/_components/InputField.js#L27)
- **WCAG Rules:** 2.4.7 Focus Visible & 1.4.11 Non-text Contrast (Level AA)
- **Problem:** Input fields and textareas remove the default browser outline (`focus:outline-none`) and rely solely on subtle border color shifts without focus rings.
- **Proposed Optimization:** Add `focus-visible:ring-1 focus-visible:ring-zinc-900 dark:focus-visible:ring-white focus-visible:outline-none`.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 4: Missing ARIA Tab Semantics on Interactive Scenes
- **File & Lines:** [`site/app/_components/features/InteractiveScenes.js#L75-L98`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/features/InteractiveScenes.js#L75-L98)
- **WCAG Rules:** 4.1.2 Name, Role, Value (Level A) & 2.4.7 Focus Visible
- **Problem:** Scene selector buttons lack `role="tablist"`, `role="tab"`, and `aria-selected` attributes, and omit keyboard focus visible rings. Content containers lack `role="tabpanel"`.
- **Proposed Optimization:**
  - Add `role="tablist" aria-label="Interactive charging scenes"` on button container.
  - Add `role="tab"` and `aria-selected={activeScene === tab.id}` and `focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white` on tabs.
  - Add `role="tabpanel" id={`scene-panel-${data.id}`} aria-labelledby={`scene-tab-${data.id}`}` on scene content panels.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 5: Missing ARIA Tab Semantics on Blog Catalog Filter
- **File & Lines:** [`site/app/blogs/_components/BlogCatalogClient.js#L89-L102`](file:///c:/code/freelance/minit-charger-layout-review/site/app/blogs/_components/BlogCatalogClient.js#L89-L102)
- **WCAG Rules:** 4.1.2 Name, Role, Value (Level A) & 2.4.7 Focus Visible
- **Problem:** Blog category buttons lack `role="tablist"`, `role="tab"`, and `aria-selected` attributes, and omit visible keyboard focus rings.
- **Proposed Optimization:** Add `role="tablist" aria-label="Blog categories"`, `role="tab"`, `aria-selected={activeCategory === cat}`, and `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900 dark:focus-visible:ring-white`.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

## 3. Planned Files to Modify

1. [`site/app/layout.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/layout.js)
2. [`site/app/contact/_components/DynamicForm.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/contact/_components/DynamicForm.js)
3. [`site/app/contact/_components/InputField.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/contact/_components/InputField.js)
4. [`site/app/_components/features/InteractiveScenes.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/features/InteractiveScenes.js)
5. [`site/app/blogs/_components/BlogCatalogClient.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/blogs/_components/BlogCatalogClient.js)
