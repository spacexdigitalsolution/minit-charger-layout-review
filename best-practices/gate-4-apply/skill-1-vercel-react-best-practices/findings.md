# Findings Report: `vercel-react-best-practices`

## 1. Skill Metadata & Pin

- **Skill:** `vercel-react-best-practices`
- **Package:** `vercel-labs/agent-skills@vercel-react-best-practices`
- **Pinned Ref:** `1a2c79d4e6c4a2283dc2c614b6538cbe1ed5ca62`
- **Status:** Installed in `.agents/skills/vercel-react-best-practices`
- **Focus:** React 19 re-render mitigation, state derivation, and memory leak prevention.

---

## 2. Line-Cited Findings & Proposed Optimizations

### Finding 1: Unmemoized Heavy Data Filtering in Interactive Tab Catalog
- **File & Lines:** [`site/app/_components/features/TabbedProductCatalog.js#L88-L113`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/features/TabbedProductCatalog.js#L88-L113)
- **Rule:** `rerender-memo` & `rerender-derived-state-no-effect`
- **Problem:** When `TabbedProductCatalog` re-renders (or its parent triggers a re-render), `industries.find()`, `products.filter()`, and `rawProducts.map()` execute unmemoized every render cycle, allocating fresh array objects and triggering sub-tree reconciliations.
- **Proposed Optimization:** Wrap `activeIndustry` and `filteredProducts` inside `useMemo` keyed on `[activeTab]`.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant with repository conventions; uses standard React 19 primitives with zero external packages.

---

### Finding 2: Cascading State Update in Render Phase
- **File & Lines:** [`site/components/layout/Navbar.js#L18-L37`](file:///c:/code/freelance/minit-charger-layout-review/site/components/layout/Navbar.js#L18-L37)
- **Rule:** `rerender-derived-state`
- **Problem:**
  ```javascript
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setActiveDesktopMenu(null);
    setIsMenuOpen(false);
  }
  ```
  Setting state during the render body forces React to immediately discard the current render pass and restart rendering from scratch.
- **Proposed Optimization:** Move pathname transition state resets (`setIsOpen(false)`, `setActiveDesktopMenu(null)`, `setIsMenuOpen(false)`) into a `useEffect` keyed on `[pathname]`, eliminating `prevPathname` state and avoiding aborted render passes.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant with Next.js App Router and React 19 conventions.

---

### Finding 3: Unguarded Async Timer Cleanup on Component Unmount
- **File & Lines:** [`site/app/contact/_components/DynamicForm.js#L47-L54`](file:///c:/code/freelance/minit-charger-layout-review/site/app/contact/_components/DynamicForm.js#L47-L54)
- **Rule:** `client-event-listeners` / unmount safety
- **Problem:** `handleSubmit` creates a 1500ms `setTimeout` that calls `setIsSubmitting(false)` and `setIsSuccess(true)`. If the user navigates away before completion, the timer fires against an unmounted component, causing memory leaks and state update warnings.
- **Proposed Optimization:** Track the timer in a `useRef` and clear it on component unmount via `useEffect`.
- **Impact & Effort:** Low-Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant with repository conventions.

---

## 3. Planned Files to Modify

1. [`site/app/_components/features/TabbedProductCatalog.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/_components/features/TabbedProductCatalog.js)
2. [`site/components/layout/Navbar.js`](file:///c:/code/freelance/minit-charger-layout-review/site/components/layout/Navbar.js)
3. [`site/app/contact/_components/DynamicForm.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/contact/_components/DynamicForm.js)
