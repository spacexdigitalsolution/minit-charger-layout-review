# Stage 6: Master Page Build & QA Checklist

**Project:** `minit-charger-layout-review`  
**Approved at Gate 6:** 2026-10-28  

The following binary acceptance criteria govern QA review for each page route:

---

## 1. Global Foundation Shell
- [x] **Smooth Scrolling:** Lenis smooth scrolling initializes without viewport jitter.
- [x] **Navigation:** Navbar expands desktop mega-menus and mobile drawer cleanly.
- [x] **Footer:** Footer links navigate to valid application routes; copyright year is current.
- [x] **SmartImage:** All product renderings render with explicit aspect ratios and WebP sources.
- [x] **Pre-Launch Guard:** Robots tag prevents indexing while review mode is active.

---

## 2. Route QA Checklists

### Home (`/`)
- [x] Hero renders primary conversion CTA "Explore Solutions" and "Request Consultation".
- [x] Tabbed catalog switches product cards accurately between Airport, Fleet, and Industrial.
- [x] Case study metric counter values load without layout shift.
- [x] GSAP scroll triggers cleanup correctly upon component unmount.

### Altus II Deep Dive (`/products/altus-ii`)
- [x] Technical specifications table displays 480VAC 3-phase and dual-port CCS1 ratings.
- [x] Gate Power Manager diagram renders cleanly across mobile and desktop breakpoints.
- [x] Gallery previews allow cycling through product angles.

### Aviation GSE Deep Dive (`/industries/aviation-gse`)
- [x] Persona comparison split toggles between Airport Director and Ground Handler perspectives.
- [x] Challenges horizontal scroll component operates smoothly under touch and trackpad.
- [x] Signature Solution block links directly to the Altus II deep dive.

### Contact & Consultation (`/contact`)
- [x] Form fields validate required business email, fleet size, and interest area.
- [x] Error states render in high contrast beneath incomplete inputs.

