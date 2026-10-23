---
name: add-feature-in-repo-style
description: Guides agents in locating analogous components, data models, or routes in the repository and mirroring existing conventions when adding new features.
---

# Add Feature in Repo Style Workflow

This skill guides agents through locating analogous code within the repository and following established architectural patterns when introducing new features.

## Procedure

### Step 1: Identify Analogous Features
1. For a new product route: Inspect `app/products/altus-ii/` as the canonical reference for product deep-dive pages.
2. For a new industry route: Inspect `app/industries/aviation-gse/` as the canonical reference for industry solution pages.
3. For a new layout section: Inspect `app/_components/` and `app/components/` for similar structural patterns.
4. For new data entities: Inspect `data/products.js`, `data/categories.js`, `data/industries.js`, or `data/blogs.js`.

### Step 2: Mirror Structure and Boundaries
1. **Server vs. Client Boundaries:**
   - Keep `page.js` as a React Server Component (RSC).
   - Colocate interactive UI blocks into a sibling `_components/` directory with `"use client"`.
2. **File Size Limit:**
   - Do not create monolithic files. Split components exceeding ~250 lines into smaller sub-components.
3. **Data Colocation:**
   - Add static entities to `data/` instead of hardcoding heavy data arrays directly within JSX.
4. **Image Handling:**
   - Always render assets using `SmartImage` with valid dimensions and fallback modes.

### Step 3: Implement Using Editor Tools
- Never use shell scripts, codemods, or sed to generate or modify code.
- Use `write_to_file` for new files and `replace_file_content` for surgical updates.
- Keep typography, spacing, and color classes aligned with Tailwind CSS tokens defined in `app/globals.css`.

### Step 4: Verify and Document
- Execute `pnpm lint` to ensure no lint regressions.
- Verify component rendering and layout in the browser.
