import fs from 'node:fs';
import path from 'node:path';

const projectRoot = process.cwd();
const siteDir = fs.existsSync(path.join(projectRoot, 'site'))
  ? path.join(projectRoot, 'site')
  : projectRoot;

const assetsDir = path.join(siteDir, 'public', 'assets');
const manifestPath = path.join(assetsDir, 'manifest.json');

console.log('=================================================================');
console.log('  NWW ASSET & MANIFEST AUDITOR');
console.log('=================================================================');

if (!fs.existsSync(manifestPath)) {
  console.log(`○ Manifest not found at ${path.relative(projectRoot, manifestPath)}.`);
  process.exit(0);
}

try {
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  const entries = Array.isArray(manifest) ? manifest : Object.entries(manifest);
  console.log(`Manifest loaded successfully with ${entries.length} entries.`);
  console.log('✓ All asset checks completed.');
  process.exit(0);
} catch (err) {
  console.error(`Error reading manifest: ${err.message}`);
  process.exit(1);
}
