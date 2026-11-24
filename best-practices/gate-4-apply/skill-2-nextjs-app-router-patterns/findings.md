# Findings Report: `nextjs-app-router-patterns`

## 1. Skill Metadata & Pin

- **Skill:** `nextjs-app-router-patterns`
- **Package:** `wshobson/agents@nextjs-app-router-patterns`
- **Pinned Ref:** `c96b5f6552dba32e4492307493ee613581430715`
- **Status:** Installed in `.agents/skills/nextjs-app-router-patterns`
- **Focus:** App Router file conventions, root layout metadata template, error recovery boundaries, and branded 404 handling.

---

## 2. Line-Cited Findings & Proposed Modernizations

### Finding 1: Missing Root Metadata Template & `metadataBase`
- **File & Lines:** [`site/app/layout.js#L22-L35`](file:///c:/code/freelance/minit-charger-layout-review/site/app/layout.js#L22-L35)
- **Rule:** App Router Metadata Architecture
- **Problem:** `metadata.title` is a raw string without a title template (`%s | Minit Charger`), and `metadataBase` is missing, causing relative social sharing cards and canonical URLs to emit Next.js warnings.
- **Proposed Optimization:** Upgrade `site/app/layout.js` metadata to define `metadataBase` and structured `title: { default: "...", template: "%s | Minit Charger" }`.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant with Next.js 16 App Router standards.

---

### Finding 2: Missing Branded 404 Route Boundary (`app/not-found.js`)
- **File:** `site/app/not-found.js` (currently missing)
- **Rule:** Core App Router File Conventions (`app/not-found.tsx`)
- **Problem:** When users navigate to unmatched URLs or deleted routes, Next.js falls back to its default internal generic 404 page, breaking brand continuity, navigation header/footer context, and styling.
- **Proposed Optimization:** Implement [`site/app/not-found.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/not-found.js) with brand typography, concise explanation, and quick links to `/products`, `/industries`, and `/contact`.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 3: Missing Global Runtime Error Boundary (`app/error.js`)
- **File:** `site/app/error.js` (currently missing)
- **Rule:** Core App Router File Conventions (`app/error.tsx`)
- **Problem:** Any unhandled client runtime exception or hydration issue crashes the route to a white screen. Next.js App Router expects an `error.js` client boundary to gracefully catch errors and offer recovery.
- **Proposed Optimization:** Implement [`site/app/error.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/error.js) with `'use client'`, error logging, a recovery `reset()` action, and return to home.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

## 3. Planned Files to Create & Modify

1. [`site/app/layout.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/layout.js) (Update metadata template and metadataBase)
2. `site/app/not-found.js` (Create branded 404 page)
3. `site/app/error.js` (Create graceful client error boundary)
