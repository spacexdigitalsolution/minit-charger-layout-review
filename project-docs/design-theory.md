# Stage 2: Design Theory & Visual System

**Project:** `minit-charger-layout-review`  
**Approved at Gate 2:** 2026-10-28  

---

## 1. Visual Personality & Aesthetic Principles
The visual system reflects industrial engineering authority, mission-critical dependability, and modern clarity:
- **Spatial Precision:** Strict 8px baseline grid with generous section padding (py-16 to py-28) to give industrial hardware breathing room.
- **Dark Industrial Foundation:** Deep navy and slate backdrops create high contrast against technical schematics and product renderings.
- **Electric Accent Signals:** Cyan accents draw immediate visual focus to key metrics, active tabs, and primary CTAs.

---

## 2. Design Tokens & Palette

### Color Tokens
- **Background Deep:** `#0A192F` (Dark industrial navy)
- **Background Secondary:** `#0B132B` (Surface elevate)
- **Card / Container:** `#0F172A` (Slate dark container)
- **Border Default:** `rgba(255, 255, 255, 0.1)` (Subtle technical borders)
- **Accent Primary:** `#00E5FF` (Electric cyan)
- **Text High-Contrast:** `#FFFFFF` (Primary text)
- **Text Muted:** `#94A3B8` (Slate-400 secondary specifications)

### Typography Scale
- **Display / H1:** `Oswald` (uppercase, bold tracking, font-bold)
- **Section Headings / H2:** `Oswald` (text-3xl to text-5xl, tracking-tight)
- **Subheadings / H3:** `Geist Sans` (font-semibold, text-xl)
- **Body & Editorial:** `Geist Sans` (font-normal, leading-relaxed, text-slate-300)
- **Specs & Numeric Telemetry:** `Geist Mono` (tabular numbers, uppercase labels)

---

## 3. Motion & Interaction Standards (GSAP 3)
- **Motion Tier:** `medium`
- **Scope Discipline:** Animations are scoped to a container ref via `useGSAP({ scope: containerRef })`.
- **Easing Defaults:** `power2.out` for entrances, `power1.inOut` for micro-interactions.
- **Scroll Triggers:** Subtle entrance reveals on key metrics and product images; uniform fade-up animations on every element are forbidden.
- **Reduced Motion:** If `window.matchMedia("(prefers-reduced-motion: reduce)").matches`, all animated positions lock immediately to their final state.

