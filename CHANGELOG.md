# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.1] - 2026-11-13

### Added
- Created `/industries/aviation-gse-v2` route (`site/app/industries/aviation-gse-v2/`) as a client-review variant of the Aviation GSE industry page.
- Added robots `noindex, nofollow` metadata to the v2 page layout for client review gating.

### Changed
- Redesigned Section 1 ("Electrifying the Airports Is the New Norm.") in `aviation-gse-v2` (`ChallengesScroll.js`) using a compact, 4-category interactive tabbed matrix (Concept A). Preserves all 13 challenge-solution pairs verbatim while cutting desktop vertical scroll height by ~72% (from ~5 viewports down to ~1.3 viewports).
