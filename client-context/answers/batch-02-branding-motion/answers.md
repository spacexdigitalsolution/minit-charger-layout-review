# Batch 02 Answers: Branding, Motion & Design Direction

- **Brand Assets:** Vector logos and high-resolution 3D CAD renders available in `Marketing Collaterals - Rendering, Video & Digital Assets/` and optimized in `public/assets/`.
- **Brand Colors:**
  - Primary / Background: Industrial Dark Navy (`#0A192F` / `#0B132B`)
  - Accent / Energy: Electric Cyan (`#00E5FF` / `#00ADB5`)
  - Surface / Borders: Technical Slate (`#0F172A`, `#1E293B`, `#334155`)
  - Light Neutral / Contrast: Pure White (`#FFFFFF`) & Slate Light (`#F8FAFC`)
- **Typography:**
  - Display / Headings: Oswald (`--font-oswald`)
  - Body Copy: Geist Sans (`--font-geist-sans`)
  - Technical Data / Specs: Geist Mono (`--font-geist-mono`)
- **Brand Personality Scale:**
  1. Minimal ↔ Maximal: 3/5 (Balanced spatial grid, high-density technical specifications)
  2. Corporate ↔ Playful: 1/5 (Authoritative, industrial, enterprise-grade reliability)
  3. Luxury ↔ Accessible: 2/5 (Premium industrial hardware engineering)
  4. Modern ↔ Classic: 4/5 (Modern clean interface with high visual fidelity)
- **Motion Tier:** `medium`
  - Motion Framework: GSAP 3 with `@gsap/react` `useGSAP` hook
  - Smooth Scrolling: Lenis smooth scroll provider (`app/products/altus-ii/_components/SmoothScroll.js`)
  - Motion Rules: Container scoping with `useRef`, automated unmount cleanup, strict `prefers-reduced-motion` compliance.
- **Design References:**
  - Stripe Commercial Infrastructure (spatial precision, refined typography hierarchy)
  - Linear.app (dark mode accents, micro-interactions, clean card surfaces)
  - Tesla Commercial / Fleet Charging (bold hardware photography, high-contrast metrics)

