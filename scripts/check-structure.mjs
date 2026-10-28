import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const siteDir = fs.existsSync(path.join(projectRoot, 'site'))
  ? path.join(projectRoot, 'site')
  : projectRoot;

const appDir = path.join(siteDir, 'app');
const componentsDir = path.join(siteDir, 'components');
const isStrict = process.argv.includes('--strict');

console.log('=================================================================');
console.log(`  NWW CODE STRUCTURE AUDITOR (Site Mode${isStrict ? ' — STRICT' : ''})`);
console.log('=================================================================');

const violations = [];
let fileCount = 0;

// Verify clean architecture: no duplicate app/components folder
const appComponentsDir = path.join(appDir, 'components');
if (fs.existsSync(appComponentsDir)) {
  violations.push({
    file: path.relative(projectRoot, appComponentsDir),
    issue: 'Disallowed duplicate components folder inside app/. Shared components must reside in components/.'
  });
}

function scan(dir) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name !== 'node_modules' && ent.name !== '.next') scan(full);
    } else if (ent.isFile() && (ent.name.endsWith('.js') || ent.name.endsWith('.jsx'))) {
      fileCount++;
      const content = fs.readFileSync(full, 'utf-8');
      const lines = content.split('\n').length;
      const rel = path.relative(projectRoot, full);

      // Line limits
      if (ent.name === 'page.js' && lines > 80) {
        violations.push({ file: rel, issue: `page.js exceeds 80 lines limit (${lines} lines)` });
      } else if (full.includes('_components') && lines > 250) {
        violations.push({ file: rel, issue: `Section component exceeds 250 lines limit (${lines} lines)` });
      } else if (full.includes(`${path.sep}components${path.sep}`) && lines > 250) {
        violations.push({ file: rel, issue: `Shared component exceeds 250 lines limit (${lines} lines)` });
      } else if (lines > 500) {
        violations.push({ file: rel, issue: `File exceeds 500 lines limit (${lines} lines)` });
      }

      // Section header comment in _components
      if (full.includes('_components') && !content.includes('// section:')) {
        violations.push({ file: rel, issue: `Section component missing '// section: <id>' header comment` });
      }
    }
  }
}

scan(appDir);
scan(componentsDir);

console.log(`Scanned ${fileCount} source files across site/app and site/components.`);
if (violations.length === 0) {
  console.log('✓ 100% COMPLIANT. Zero architectural or line limit violations found.\n');
  process.exit(0);
} else {
  console.error(`\nFound ${violations.length} violations:`);
  for (const v of violations) {
    console.error(`  - [${v.file}] ${v.issue}`);
  }
  process.exit(isStrict ? 1 : 0);
}
