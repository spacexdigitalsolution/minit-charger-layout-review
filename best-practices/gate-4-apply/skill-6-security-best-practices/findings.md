# Findings Report: `security-best-practices`

## 1. Skill Metadata & Pin

- **Skill:** `security-best-practices`
- **Package:** `openai/skills@security-best-practices`
- **Pinned Ref:** `49f948faa9258a0c61caceaf225e179651397431`
- **Status:** Installed in `.agents/skills/security-best-practices`
- **Focus:** HTTP security headers, clickjacking defenses, MIME sniffing prevention, and file upload boundaries.

---

## 2. Line-Cited Findings & Proposed Enhancements

### Finding 1: Missing Baseline HTTP Security Headers
- **File & Lines:** [`site/next.config.mjs#L14-L24`](file:///c:/code/freelance/minit-charger-layout-review/site/next.config.mjs#L14-L24)
- **Security Rule:** NEXT-HEAD-001 (HTTP Security Headers Baseline)
- **Problem:** `next.config.mjs` only serves `X-Robots-Tag: all`. Missing defensive headers leaves the application susceptible to MIME-type sniffing, clickjacking via unauthorized framing, unconstrained browser hardware feature access, and referrer leakage.
- **Proposed Optimization:**
  - Add to `headers()` configuration:
    - `X-Content-Type-Options: nosniff`
    - `X-Frame-Options: SAMEORIGIN`
    - `Referrer-Policy: strict-origin-when-cross-origin`
    - `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`
- **Impact & Effort:** High Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 2: Unrestricted File Upload File Types
- **File & Lines:** [`site/app/contact/_components/DynamicForm.js#L174-L180`](file:///c:/code/freelance/minit-charger-layout-review/site/app/contact/_components/DynamicForm.js#L174-L180)
- **Security Rule:** NEXT-UPLOAD-001 (File Upload Restrictions)
- **Problem:** The file attachment input lacks an `accept` attribute, permitting users to attach arbitrary file formats (including executable scripts).
- **Proposed Optimization:** Add `accept=".pdf,.png,.jpg,.jpeg,.doc,.docx,.xls,.xlsx"` to restrict uploads to standard fleet documentation formats.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

### Finding 3: Client-Side File Size Boundary Guard
- **File & Lines:** [`site/app/contact/_components/DynamicForm.js#L44-L49`](file:///c:/code/freelance/minit-charger-layout-review/site/app/contact/_components/DynamicForm.js#L44-L49)
- **Security Rule:** Client Resource Exhaustion Defense
- **Problem:** File selection directly processes any uploaded file size into component memory without boundary checks, risking browser tab memory exhaustion on giant payloads.
- **Proposed Optimization:** Add a 25MB-per-file check in `handleFileChange`, discarding oversized files and displaying an error message.
- **Impact & Effort:** Medium Impact / Low Effort.
- **Convention Conflict Check:** Fully compliant.

---

## 3. Planned Files to Modify

1. [`site/next.config.mjs`](file:///c:/code/freelance/minit-charger-layout-review/site/next.config.mjs)
2. [`site/app/contact/_components/DynamicForm.js`](file:///c:/code/freelance/minit-charger-layout-review/site/app/contact/_components/DynamicForm.js)
