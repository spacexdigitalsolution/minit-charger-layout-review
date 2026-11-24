# Gate 2: Candidate Skills Roster

All candidates were discovered via live queries to `skills.sh` using `npx skills find` and cross-referenced with community adoption rankings.

---

## 1. Discovered Candidate Skills

| Domain / Concern | Skill Name | Package Slug (`<owner>/<repo>@<skill>`) | Live Installs | Source URL | Current Project State |
| :--- | :--- | :--- | :---: | :--- | :---: |
| **React 19 & Next.js Performance** | `vercel-react-best-practices` | `vercel-labs/agent-skills@vercel-react-best-practices` | **929.0K** | [skills.sh](https://skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) | Already installed locally |
| **UI/UX & Design Guidelines** | `web-design-guidelines` | `vercel-labs/agent-skills@web-design-guidelines` | **900.6K** | [skills.sh](https://skills.sh/vercel-labs/agent-skills/web-design-guidelines) | Candidate for Gate 3 |
| **SEO & Structured Schema** | `schema` | `coreyhaines31/marketingskills@schema` | **97.1K** | [skills.sh](https://skills.sh/coreyhaines31/marketingskills/schema) | Candidate for Gate 3 |
| **Accessibility (WCAG 2.1)** | `accessibility` | `addyosmani/web-quality-skills@accessibility` | **73.9K** | [skills.sh](https://skills.sh/addyosmani/web-quality-skills/accessibility) | Candidate for Gate 3 |
| **Performance & CWV** | `core-web-vitals` | `addyosmani/web-quality-skills@core-web-vitals` | **37.1K** | [skills.sh](https://skills.sh/addyosmani/web-quality-skills/core-web-vitals) | Candidate for Gate 3 |
| **Next.js App Router Architecture** | `nextjs-app-router-patterns` | `wshobson/agents@nextjs-app-router-patterns` | **34.7K** | [skills.sh](https://skills.sh/wshobson/agents/nextjs-app-router-patterns) | Candidate for Gate 3 |
| **Codebase Security Guardrails** | `security-best-practices` | `openai/skills@security-best-practices` | **13.2K** | [skills.sh](https://skills.sh/openai/skills/security-best-practices) | Candidate for Gate 3 |
| **Next.js Metadata & SEO** | `nextjs-seo` | `laguagu/claude-code-nextjs-skills@nextjs-seo` | **2.6K** | [skills.sh](https://skills.sh/laguagu/claude-code-nextjs-skills/nextjs-seo) | Candidate for Gate 3 |

---

## 2. Coverage Gaps & Zero-Fabrication Reporting

Per Gate 2 rules, no non-existent skills are fabricated:

- **Tailwind CSS v4:** No official or reputable standalone skill exists on `skills.sh` for Tailwind v4. The repository's native conventions (`.agents/rules/frontend-conventions.md`) govern styling standards directly.
- **GSAP 3 / Motion:** No reputable external package exceeds the repository's native `.agents/skills/gsap-core` and `.agents/rules/gsap-animation.md`. Motion best practices will be governed locally.
- **Image Handling:** The repository enforces strict image approval invariants via `.agents/rules/image-approval-guardrails.md`. Any external asset recommendations that bypass this guardrail are automatically rejected.
