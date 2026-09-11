const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      processDir(p);
    } else if (p.endsWith('.js') && !p.includes('SmartImage.js')) {
      let content = fs.readFileSync(p, 'utf8');
      if (content.includes('next/image')) {
        // Calculate relative path to app/components/SmartImage
        const appDir = path.resolve('app');
        const smartImageDir = path.join(appDir, 'components');
        const relativePath = path.relative(path.dirname(p), path.join(smartImageDir, 'SmartImage')).replace(/\\/g, '/');
        
        content = content.replace(/import Image from ['"]next\/image['"];?/g, `import SmartImage from "${relativePath}";`);
        content = content.replace(/<Image\b/g, '<SmartImage');
        content = content.replace(/<\/Image>/g, '</SmartImage>');
        fs.writeFileSync(p, content);
        console.log('Updated', p);
      }
    }
  }
}

processDir('app');
