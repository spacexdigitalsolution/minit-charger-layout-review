# Gate 5: Manual Developer Verification Checklist

This checklist provides targeted, human-actionable verification steps for testing the modernized code in a live development or staging environment (`pnpm --dir site dev`).

---

## 1. Accessibility & Keyboard Navigation
- [ ] **Skip to Main Content Link:**
  - Open `http://localhost:3000`.
  - Press `Tab` immediately upon page load.
  - Verify the high-contrast "Skip to main content" button appears at the top left with green focus ring.
  - Press `Enter` and verify keyboard focus shifts directly to `#main-content`.
- [ ] **Interactive Tabs (Catalog, Scenes, Blogs):**
  - Navigate to the Tabbed Product Catalog on the homepage.
  - Use `Tab` and arrow keys to switch between industry categories.
  - Verify `aria-selected="true"` matches the active tab and focus rings are clearly visible.
- [ ] **FAQ Accordions:**
  - Navigate to any FAQ section (homepage or `/products/altus-ii`).
  - Verify `aria-expanded` toggles between `true` and `false` when expanding/collapsing questions.
  - Verify focus rings are clearly visible around accordion trigger buttons.
- [ ] **Contact Form Inputs:**
  - Visit `http://localhost:3000/contact`.
  - Click on the label text "Select Product (Optional)" and confirm the select element receives focus.
  - Tab through input fields and verify emerald focus outlines (`focus-visible:ring-1 focus-visible:ring-[#16a34a]`).

---

## 2. Core Web Vitals & Visual Stability
- [ ] **Font Rendering (CLS):**
  - Reload pages with network throttling (Fast 3G).
  - Verify fallback system fonts display immediately without invisible text delay (`display: swap`).
- [ ] **Counter Numbers Layout Jitter:**
  - Scroll to any `StatModule` section (e.g., on `/products/altus-ii`).
  - Verify animated counter digits use `tabular-nums` so numbers stay aligned without shifting sibling text.
- [ ] **Hero Video Preload:**
  - Open Network tab on `http://localhost:3000`.
  - Verify only the first hero slide video initiates preloading (`preload="auto"`), while inactive slides keep `preload="none"`.

---

## 3. Error Handling & 404 Pages
- [ ] **Branded 404 Page:**
  - Navigate to an invalid URL like `http://localhost:3000/non-existent-page`.
  - Verify the custom dark-theme 404 page renders with "404", "Page Not Found", and a functional "Return Home" button.
- [ ] **Client Error Boundary:**
  - Verify `site/app/error.js` is active and provides a "Try Again" recovery button if any child component throws an unhandled render error.

---

## 4. Security & Headers
- [ ] **HTTP Response Headers:**
  - Inspect any page response headers in DevTools Network tab.
  - Confirm presence of:
    - `X-Content-Type-Options: nosniff`
    - `X-Frame-Options: SAMEORIGIN`
    - `Referrer-Policy: strict-origin-when-cross-origin`
    - `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
- [ ] **Contact Form File Upload Gate:**
  - Visit `/contact` and attempt to attach an executable file (`.exe` or `.bat`) or a file exceeding 25MB.
  - Verify the form alerts and blocks unpermitted file types/sizes before upload.

---

## 5. Structured Data (Schema.org)
- [ ] **Organization & WebSite Schema:**
  - View page source on `http://localhost:3000`.
  - Verify `<script type="application/ld+json">` containing `@type: "Organization"` and `@type: "WebSite"`.
- [ ] **Blog Article Schema:**
  - View page source on `http://localhost:3000/blogs/gse-electrification-guide`.
  - Verify `<script type="application/ld+json">` containing `@type: "BlogPosting"` with headline, author, and publishDate.
- [ ] **Product Schema:**
  - View page source on `http://localhost:3000/products/altus-ii`.
  - Verify `<script type="application/ld+json">` containing `@type: "Product"` with brand "Minit Charger".

---

## 6. Rollback Readiness
- [ ] Confirm any atomic commit can be cleanly reverted if needed via:
  ```bash
  git revert <commit-hash>
  ```
  *(Example: `git revert 663787e` cleanly rolls back Schema markup without affecting prior skills).*
