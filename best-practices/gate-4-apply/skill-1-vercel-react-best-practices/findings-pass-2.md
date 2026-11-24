# Findings Report: `vercel-react-best-practices` (Pass 2)

## 1. Focus & Scope

- **Skill:** `vercel-react-best-practices` (Pass 2)
- **Categories:** Server-Side Performance (`server-hoist-static-io`), Rendering Performance (`rendering-hoist-jsx`), and Re-render Optimization (`rerender-memo`).
- **Target Areas:** Core Product Layouts, Dynamic Blog Catalog, and Hardware Pages.

---

## 2. Line-Cited Findings & Proposed Optimizations

### Finding 1: Static Module Data Allocation Inside Product Layout Component
- **File & Lines:** [`site/components/product/ProductDetailLayout.js#L27-L33`](file:///c:/code/freelance/minit-charger-layout-review/site/components/product/ProductDetailLayout.js#L27-L33)
- **Rule:** `server-hoist-static-io` & `rendering-hoist-jsx`
- **Problem:** `const productStats = [ ... ]` is allocated inside the component function body on every render across all 9 individual product routes rendered through `ProductDetailLayout`.
- **Proposed Optimization:** Hoist `productStats` to the module level outside the component.
- **Impact & Effort:** Low-Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant with Next.js App Router and clean code conventions.

---

### Finding 2: Unmemoized Set & Array Creation on Every Filter Interaction
- **File & Lines:** [`site/app/blogs/_components/BlogCatalogClient.js#L19`](file:///c:/code/freelance/minit-charger-layout-review/site/app/blogs/_components/BlogCatalogClient.js#L19)
- **Rule:** `rerender-memo` & `rerender-derived-state-no-effect`
- **Problem:** `const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];` runs on every render pass (including whenever a user selects a category tab).
- **Proposed Optimization:** Wrap `categories` in `useMemo` with `[blogs]` dependency.
- **Impact & Effort:** Low-Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 3: Static Array Allocation in Altus II Product Page Component
- **File & Lines:** [`site/app/products/altus-ii/page.js#L21-L30`](file:///c:/code/freelance/minit-charger-layout-review/site/app/products/altus-ii/page.js#L21-L30)
- **Rule:** `server-hoist-static-io`
- **Problem:** `const relatedProductIds = ["magnus", "momentus", "maximus"];` is re-instantiated in the page function scope on every render.
- **Proposed Optimization:** Hoist `relatedProductIds` and its derived static mapping to module scope.
- **Impact & Effort:** Low-Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

## 3. Planned Files to Modify

1. [`site/components/product/ProductDetailLayout.js`](file:///c:/code/freelance/minit-charger-layout-review/site/components/product/ProductDetailLayout.js)
2. [`site/app/blogs/_components/BlogCatalogClient.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/blogs/_components/BlogCatalogClient.js)
3. [`site/app/products/altus-ii/page.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/products/altus-ii/page.js)
