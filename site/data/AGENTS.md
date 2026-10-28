# Data Layer AI Agent Guidance

## Architecture
- Static in-memory JavaScript modules serving as the single source of truth (`data/`).
- `data/products.js`: Hardware models, power ratings, technical specifications, and asset links.
- `data/categories.js`: Taxonomy categories for hardware filtering.
- `data/industries.js`: Target sector profiles and industry-specific value propositions.
- `data/blogs.js`: Articles, whitepapers, and customer case studies.

## Conventions
- Export clean JavaScript arrays or key-value object collections using named exports.
- Use lowercase hyphenated slugs matching route folder parameters (e.g. `altus-ii`, `aviation-gse`).
- Reference asset paths matching entries in `public/assets/manifest.json`.
- Keep individual data files under 500 lines; group related sub-models when necessary.

## Anti-patterns
- Never introduce database connections, ORMs, or asynchronous queries into `data/`.
- Never duplicate product specifications across multiple data files.
- Never hardcode unvalidated asset paths that do not exist in `public/assets/`.

## Commands
- `pnpm lint`: Verify syntax and export contracts across all data files.
- `pnpm build`: Verify static params generation across dynamic route templates.

