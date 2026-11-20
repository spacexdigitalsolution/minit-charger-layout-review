---
page: "Global Navigation Bar"
route: "_global/navbar"
status: approved
last-reviewed: "2026-11-21"
reviewer: "Devansh"
client-approval-status: approved
client-approval-date: "2026-11-21"
---

# Image Approval: Global Navigation Bar (`_global/navbar`)

## Slot: navbar.brand.logo
- **Slot ID**: `navbar.brand.logo`
- **Location**: `site/components/layout/Navbar.js:159` (`Navbar.js`, prop `src`)
- **Required Dimensions / Aspect Ratio**: 256x64 (4:1), sizes: `128px`
- **Priority / LCP**: `true`
- **Proposed Alt Text**: "Minit Charger Logo"
- **Alt Text Sign-off**: `approved`
- **Slot Status**: `approved`
- **Approved Source File**: `site/public/assets-src/logo.png`
- **Pixel Dimensions Found**: 1024x359
- **Client Approval**: `approved`
- **Approval Evidence**: "APPROVE navbar.brand.logo" at 2026-11-21T00:19:18+05:30; "APPROVE PAGE _global/navbar" at 2026-11-21T00:21:15+05:30
- **Current Render**: `wired`
- **Provenance Note**: Assigned /assets/logo.webp in commit 45444ea; reset to placeholder; approved by Devansh and wired.

## Slot: navbar.megamenu.preview
- **Slot ID**: `navbar.megamenu.preview`
- **Location**: `site/components/layout/NavbarMegaMenu.js:101` (`NavbarMegaMenu.js`, prop `src`)
- **Required Dimensions / Aspect Ratio**: 400x300 (4:3), sizes: `(max-width: 768px) 100vw, 300px`
- **Priority / LCP**: `false`
- **Proposed Alt Text**: "Minit Charger product catalog hardware preview"
- **Alt Text Sign-off**: `approved`
- **Slot Status**: `approved`
- **Approved Source File**: `inherited:hoveredProduct.cardImage`
- **Pixel Dimensions Found**: Dynamic (inherited from hovered product card)
- **Client Approval**: `approved`
- **Approval Evidence**: Inherits approved cardImage and cardImageMode per hovered product
- **Current Render**: `wired`
- **Provenance Note**: Assigned hoveredProduct.cardImage; updated to inherit hoveredProduct.cardImageMode dynamically.
