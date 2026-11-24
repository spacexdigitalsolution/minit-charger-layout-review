# Gate 1: Stack Detection Report

## 1. Monorepo & Target Workspace Scope

- **Monorepo Config:** `pnpm-workspace.yaml` detected with `packages: ['site']`.
- **Target Workspace:** `site/` (Next.js web application). Root `package.json` acts as an orchestration proxy.
- **Package Manager:** `pnpm@11.17.0` (with `pnpm-lock.yaml`).

---

## 2. Technology Stack Breakdown

| Architectural Dimension | Detected Technology & Version | Location / Source |
| :--- | :--- | :--- |
| **Framework & Runtime** | Next.js 16.3.4 (App Router) + React 19.2.8 (`react-dom@19.2.8`) | `site/package.json` |
| **Styling Architecture** | Tailwind CSS v4 (`tailwindcss@^4`, `@tailwindcss/postcss@^4`) | `site/package.json`, `postcss.config.mjs` |
| **Animation & Motion** | GSAP 3.15.0 (`gsap`), `@gsap/react@^2.1.2`, Lenis 1.3.26 (`lenis`) | `site/package.json` |
| **Iconography** | Lucide React (`lucide-react@^1.44.0`) with import optimization in `next.config.mjs` | `site/package.json` |
| **Language & Transpilation** | JavaScript (ESM) with `jsconfig.json` path aliasing (`@/*` -> `./*`) | `site/jsconfig.json` |
| **Data Layer** | Static in-memory JS data modules (`site/data/products.js`, `categories.js`, `industries.js`, `blogs.js`) | `site/data/` (No database or ORM) |
| **AI / Agentic SDKs** | None detected | N/A |
| **Testing** | None configured in `package.json` | N/A |
| **Linter & Code Quality** | ESLint 9 flat config (`site/eslint.config.mjs`) with `eslint-config-next/core-web-vitals` (16.3.4) | `site/package.json` |

---

## 3. Existing Customizations & Governance Rules

The repository has established agent instructions and custom guardrails:

- **Repository Rules (`.agents/rules/`):**
  - `frontend-conventions.md`: Strict conventions for Next.js App Router, RSC boundaries, line length, Tailwind v4.
  - `gsap-animation.md`: Standards for `useGSAP`, SSR safety, and Lenis integration.
  - `image-approval-guardrails.md`: Absolute prohibition on autonomous image selection, browsing, or wiring without human sign-off.
  - `release-checklist.md`: Deployment verification protocol.
  - `AGENTS.md` (root and `site/`): High-priority agent constraints and disallowed commands.
- **Existing Installed Skills (`.agents/skills/`):**
  - `vercel-react-best-practices`: Already installed locally.
  - `gsap-core`: Animation reference.
  - `frontend-design`: Visual direction.
  - `optimize-assets`: Asset handling.
  - `find-skills`, `image-approval`, `verify`, `plan-first`, `skill-creator`, `nww`, `create-nextjs-website`, `create-nww-website`, `add-feature-in-repo-style`.

---

## 4. Key Cross-Cutting Optimization Opportunities for Candidate Search

Based on the detected stack, candidate discovery in Gate 2 will focus on:
1. **Next.js 16 / React 19 Performance & Best Practices:** (Validating RSC boundaries, bundle size, server-client handoffs, `optimizePackageImports`).
2. **Web Quality & Accessibility (a11y):** Form/dialog semantics, ARIA attributes, keyboard navigation for layout components.
3. **Core Web Vitals & Loading Performance:** Font optimization, script loading, resource hints, layout shift prevention.
4. **SEO & Metadata:** Next.js App Router metadata patterns (`generateMetadata`, OpenGraph, Twitter card tags, structured schema).
5. **Security & Guardrails:** Next.js security headers, content security, client data leak prevention.
