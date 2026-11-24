# Gate 3: Vetted Shortlist & Security Audit Report

## 1. Mandatory 6-Point Security Scan Results

Every candidate skill's markdown, guidelines, and reference files were statically audited across 6 security criteria:

| Security Check | Description | Verdict |
| :--- | :--- | :---: |
| **1. Arbitrary Network Calls** | No unapproved `curl`, `fetch`, `wget`, or raw sockets sending codebase data | **PASS** |
| **2. Shell Script Execution** | No unverified shell scripts, background daemons, or executable binaries | **PASS** |
| **3. Secret & Credential Harvesting** | No inspection or extraction of `.env`, tokens, API keys, or SSH credentials | **PASS** |
| **4. Out-of-Tree File Writes** | No filesystem access or writes outside the project repository workspace | **PASS** |
| **5. Obfuscated / Encoded Code** | No base64 decoding, `eval()`, minified binary blobs, or homoglyphs | **PASS** |
| **6. Rule Override / Jailbreaks** | No instructions overriding repository `AGENTS.md` or human approval barriers | **PASS** |

**Security Scan Verdict:** All 7 evaluated candidates passed the 6-point security review.

---

## 2. Deduplication & Cap Compliance

- **Total Shortlisted:** 7 skills (Complies strictly with token discipline cap of $\le 8$).
- **Deduplication Decisions:**
  - `addyosmani/web-quality-skills@web-quality-audit` (39.6K) was excluded in favor of dedicated `accessibility` (73.9K) and `core-web-vitals` (37.1K) skills to prevent redundant or noisy multi-category audit reports.
  - `laguagu/claude-code-nextjs-skills@nextjs-seo` (2.6K) was excluded in favor of `coreyhaines31/marketingskills@schema` (97.1K) and standard Next.js App Router metadata patterns.

---

## 3. Approved Shortlist & Execution Order

All shortlisted skills are pinned to immutable commit hashes:

| Order | Skill Name | Source & Package Slug | Pinned Commit Ref | Community Installs | Architectural Justification |
| :---: | :--- | :--- | :--- | :---: | :--- |
| **1** | `vercel-react-best-practices` | `vercel-labs/agent-skills@vercel-react-best-practices` | `1a2c79d4...` | 929.0K | Optimize React 19 rendering, client/server boundaries, and bundle tree (already in `.agents/skills/`) |
| **2** | `nextjs-app-router-patterns` | `wshobson/agents@nextjs-app-router-patterns` | `c96b5f65...` | 34.7K | Standardize Next.js App Router hierarchy, metadata APIs, and error/loading boundaries |
| **3** | `web-design-guidelines` | `vercel-labs/agent-skills@web-design-guidelines` | `5a37a632...` | 900.6K | Enforce design system spacing, responsive typography scale, contrast, and interactive affordances |
| **4** | `accessibility` | `addyosmani/web-quality-skills@accessibility` | `afa8da94...` | 73.9K | Implement WCAG 2.1 standards: semantic HTML landmarks, ARIA attributes, form labeling, and keyboard focus |
| **5** | `core-web-vitals` | `addyosmani/web-quality-skills@core-web-vitals` | `afa8da94...` | 37.1K | Prevent layout shifts (CLS), optimize Largest Contentful Paint (LCP), and improve interaction readiness |
| **6** | `security-best-practices` | `openai/skills@security-best-practices` | `49f948fa...` | 13.2K | Validate HTTP security headers, prevent client-side credential exposure, and audit static code guardrails |
| **7** | `schema` | `coreyhaines31/marketingskills@schema` | `8fd2fcad...` | 97.1K | Generate structured JSON-LD schema markup for product catalogs and enterprise marketing pages |

---

## 4. Repository Convention Supremacy Notice

> [!IMPORTANT]
> **Repository Guardrails Enforcement:**
> 1. `.agents/rules/image-approval-guardrails.md`: Zero autonomous image wiring or modification. Any recommendation from design or performance skills suggesting real image file replacement will remain in placeholder mode (`SmartImage`).
> 2. `AGENTS.md`: Zero new dependency installations in `package.json`. No external CSS libraries or analytics packages will be added. All improvements must use existing dependencies (`lucide-react`, Tailwind CSS v4, GSAP, native Next.js APIs).
