const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const p = path.join(dir, file);
    if (fs.statSync(p).isDirectory()) {
      processDir(p);
    } else if (p.endsWith('.js')) {
      let content = fs.readFileSync(p, 'utf8');
      let modified = false;

      // Add once: true to toggleActions lines
      if (content.includes('toggleActions: "play none none none"')) {
        const original = content;
        content = content.replace(/toggleActions:\s*"play none none none"\s*,?\s*(?:once:\s*true)?/g, 'toggleActions: "play none none none", once: true');
        if (content !== original) modified = true;
      }

      // Add once: true to start lines if not already present
      if (content.includes('scrollTrigger:') || content.includes('st = { trigger:')) {
        const original = content;
        content = content.replace(/(start:\s*"top \d+%")(?!,\s*once:\s*true)/g, '$1, once: true');
        
        // Clean up duplicates
        content = content.replace(/once:\s*true,\s*toggleActions:\s*"play none none none",\s*once:\s*true/g, 'toggleActions: "play none none none", once: true');
        
        if (content !== original) modified = true;
      }

      if (modified) {
        fs.writeFileSync(p, content);
        console.log('Updated', p);
      }
    }
  }
}

processDir('app');
