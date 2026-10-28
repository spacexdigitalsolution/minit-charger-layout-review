import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const projectRoot = process.cwd();
const siteDir = fs.existsSync(path.join(projectRoot, 'site'))
  ? path.join(projectRoot, 'site')
  : projectRoot;

console.log('=================================================================');
console.log('  NWW COMPREHENSIVE PIPELINE AUDITOR (Gate 0 -> Gate 8)');
console.log('  Mode: STRICT VALIDATION');
console.log('=================================================================');

let total = 0;
let passed = 0;
const failures = [];

function check(gate, label, fn) {
  total++;
  try {
    const res = fn();
    if (res === true || (res && res.valid)) {
      passed++;
      console.log(`  ✓ [Gate ${gate}] ${label}`);
    } else {
      throw new Error(res && res.message ? res.message : 'Validation failed');
    }
  } catch (err) {
    failures.push({ gate, label, error: err.message });
    console.error(`  ✗ [Gate ${gate}] ${label} -> ${err.message}`);
  }
}

function fileExists(relPath, minBytes = 1) {
  const full = path.join(projectRoot, relPath);
  if (!fs.existsSync(full)) throw new Error(`Missing ${relPath}`);
  const stat = fs.statSync(full);
  if (stat.size < minBytes) throw new Error(`${relPath} has size ${stat.size} bytes (min: ${minBytes})`);
  return true;
}

function siteFileExists(relPath, minBytes = 1) {
  const full = path.join(siteDir, relPath);
  if (!fs.existsSync(full)) throw new Error(`Missing ${path.relative(projectRoot, full)}`);
  const stat = fs.statSync(full);
  if (stat.size < minBytes) throw new Error(`${path.relative(projectRoot, full)} has size ${stat.size} bytes (min: ${minBytes})`);
  return true;
}

// -----------------------------------------------------------------------------
// GATE 0: Client Intake Checks (All Batches 01 to 08 + Manifest + .env.example)
// -----------------------------------------------------------------------------
console.log('\n[Gate 0] Client Intake Check:');
check('0', 'Batch 01: Core Identity Answers', () => fileExists('client-context/answers/batch-01-core-identity/answers.md', 100));
check('0', 'Batch 02: Branding & Motion Answers', () => fileExists('client-context/answers/batch-02-branding-motion/answers.md', 100));
check('0', 'Batch 03: Page Architecture & Sitemap Answers', () => fileExists('client-context/answers/batch-03-sitemap-copy/answers.md', 100));
check('0', 'Batch 04: Content Strategy & Assets Answers', () => fileExists('client-context/answers/batch-04-asset-harvesting-generation/answers.md', 100));
check('0', 'Batch 05: Technical Integrations Answers', () => fileExists('client-context/answers/batch-05-type-specific-routing/answers.md', 100));
check('0', 'Batch 06: Legacy Site Migration Answers', () => fileExists('client-context/answers/batch-06-legacy-site-migration/answers.md', 100));
check('0', 'Legacy Site Mirror Archive (previous-site/)', () => fileExists('previous-site/index.html', 500) && fileExists('previous-site/manifest.json', 100));
check('0', 'Batch 07: SEO, Analytics & Governance Answers', () => fileExists('client-context/answers/batch-07-seo-analytics-governance/answers.md', 100));
check('0', 'Batch 08 / Pool: Rolling Open Questions', () => fileExists('client-context/open-questions.md', 100));
check('0', 'Hardware Asset Manifest', () => fileExists('client-context/asset-manifest.md', 100));
check('0', 'Environment Template (.env.example)', () => fileExists('.env.example', 10));

// -----------------------------------------------------------------------------
// GATE 1: Tech Stack Specification
// -----------------------------------------------------------------------------
console.log('\n[Gate 1] Tech Stack Specification:');
check('1', 'Tech Stack Specification Document', () => fileExists('project-docs/tech-stack.md', 100));
check('1', 'Package Manager Lockfile (pnpm-lock.yaml)', () => {
  return fs.existsSync(path.join(siteDir, 'pnpm-lock.yaml')) || fs.existsSync(path.join(projectRoot, 'pnpm-lock.yaml'));
});
check('1', 'Strict App Router Architecture Guide (site/app/AGENTS.md)', () => siteFileExists('app/AGENTS.md', 100));

// -----------------------------------------------------------------------------
// GATE 2: Design Theory & Visual Direction
// -----------------------------------------------------------------------------
console.log('\n[Gate 2] Design Theory & Visual Direction:');
check('2', 'Design Theory Specification Document', () => fileExists('project-docs/design-theory.md', 100));
check('2', 'Gate 2 Review Hub Portal (gate-2-design-theory/index.html)', () => fileExists('project-docs/client-review/gate-2-design-theory/index.html', 500));
check('2', 'Root Client Review Portal (client-review/index.html)', () => fileExists('project-docs/client-review/index.html', 500));

// -----------------------------------------------------------------------------
// GATE 3: Page List & Sitemap Tracker
// -----------------------------------------------------------------------------
console.log('\n[Gate 3] Page List & Sitemap Tracker:');
check('3', 'Page List Tracker (project-docs/page-list.md)', () => fileExists('project-docs/page-list.md', 100));
check('3', 'Dynamic App Sitemap Handler (app/sitemap.js)', () => siteFileExists('app/sitemap.js', 100));

// -----------------------------------------------------------------------------
// GATE 4: SEO Strategy & Metadata
// -----------------------------------------------------------------------------
console.log('\n[Gate 4] SEO Strategy & Search Governance:');
check('4', 'SEO Strategy Specification Document', () => fileExists('project-docs/seo-strategy.md', 100));
check('4', 'Dynamic Robots Handler (app/robots.js)', () => siteFileExists('app/robots.js', 100));

// -----------------------------------------------------------------------------
// GATE 5: Layout System Spec & Shared Components
// -----------------------------------------------------------------------------
console.log('\n[Gate 5] Layout System & Architecture:');
check('5', 'Layout System Specification Document', () => fileExists('project-docs/layout-system.md', 100));
check('5', 'Single Components Folder in Site (site/components/)', () => {
  return fs.existsSync(path.join(siteDir, 'components')) &&
         !fs.existsSync(path.join(siteDir, 'app', 'components'));
});
check('5', 'Shared Components Guidance (site/components/AGENTS.md)', () => siteFileExists('components/AGENTS.md', 100));

// -----------------------------------------------------------------------------
// GATE 6: Scaffolding, Foundation & Landing Page
// -----------------------------------------------------------------------------
console.log('\n[Gate 6] Foundation & Landing Page Showcase:');
check('6', 'Page Build Checklist (project-docs/page-checklist.md)', () => fileExists('project-docs/page-checklist.md', 100));
check('6', 'Pipeline Router State (project-docs/router-state.md)', () => fileExists('project-docs/router-state.md', 100));
check('6', 'Home Page Orchestrator <= 80 lines (app/page.js)', () => {
  const lines = fs.readFileSync(path.join(siteDir, 'app', 'page.js'), 'utf-8').split('\n').length;
  if (lines > 80) throw new Error(`site/app/page.js has ${lines} lines (limit: 80)`);
  return true;
});
check('6', 'Home Section Components <= 250 lines & Annotated', () => {
  const homeCompDir = path.join(siteDir, 'app', '_components');
  for (const f of fs.readdirSync(homeCompDir)) {
    if (f.endsWith('.js')) {
      const content = fs.readFileSync(path.join(homeCompDir, f), 'utf-8');
      const lines = content.split('\n').length;
      if (lines > 250) throw new Error(`${f} has ${lines} lines (limit: 250)`);
      if (!content.includes('// section:')) throw new Error(`${f} missing // section: header`);
    }
  }
  return true;
});

// -----------------------------------------------------------------------------
// GATE 7: Sub-Page Build Loop (Thin RSC Pages <= 80 lines)
// -----------------------------------------------------------------------------
console.log('\n[Gate 7] Sub-Pages Build Loop (All Pages <= 80 lines):');
const subPages = [
  'app/about/page.js',
  'app/blogs/page.js',
  'app/blogs/[slug]/page.js',
  'app/industries/page.js',
  'app/industries/aviation-gse/page.js',
  'app/products/page.js',
  'app/products/altus-ii/page.js',
  'app/contact/page.js',
  'app/internal/hero-variations/page.js'
];
for (const sp of subPages) {
  check('7', `Thin Page: ${sp} <= 80 lines`, () => {
    const full = path.join(siteDir, sp);
    if (!fs.existsSync(full)) throw new Error(`File ${sp} does not exist in site/`);
    const lines = fs.readFileSync(full, 'utf-8').split('\n').length;
    if (lines > 80) throw new Error(`${sp} has ${lines} lines (limit: 80)`);
    return true;
  });
}

// -----------------------------------------------------------------------------
// GATE 8: Final Verification & Handover
// -----------------------------------------------------------------------------
console.log('\n[Gate 8] Final Verification Audits:');
check('8', 'Code Structure Auditor in Strict Mode', () => {
  execSync('node scripts/check-structure.mjs --strict', { stdio: 'pipe' });
  return true;
});
check('8', 'Deliverables Auditor in Strict Mode', () => {
  execSync('node .agents/skills/create-nww-website/scripts/structure-audit/index.js . --strict', { stdio: 'pipe' });
  return true;
});
check('8', 'Asset Manifest Auditor', () => {
  execSync('node scripts/check-assets.mjs', { stdio: 'pipe' });
  return true;
});
check('8', 'Production Build Verification (pnpm build)', () => {
  execSync('pnpm build', { stdio: 'pipe' });
  return true;
});

console.log('\n=================================================================');
console.log(`  PIPELINE AUDIT SUMMARY: ${passed} / ${total} CHECKS PASSED`);
console.log('=================================================================');

if (failures.length > 0) {
  console.error('\n✗ Failures detected:');
  for (const f of failures) {
    console.error(`  - [Gate ${f.gate}] ${f.label}: ${f.error}`);
  }
  process.exit(1);
} else {
  console.log('\n✓ ALL GATES (Gate 0 every batch through Gate 8) FULLY VERIFIED IN STRICT MODE.');
  process.exit(0);
}
