const fs = require('fs');
const path = require('path');

const targetDir = __dirname;
const ignoreDirs = ['node_modules', '.git', 'dist', 'build', '.next'];

function getReplacement(match) {
  if (match === match.toUpperCase()) {
    return 'HITEISEE';
  } else if (match[0] === match[0].toUpperCase()) {
    return 'Hiteisee';
  } else {
    return 'hiteisee';
  }
}

function replaceInDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (!ignoreDirs.includes(file)) {
        replaceInDir(fullPath);
      }
    } else {
      if (file === 'replace.cjs') continue;
      
      // Adjust file extensions based on what you want to target
      if (!fullPath.match(/\.(js|jsx|ts|tsx|html|css|json|md)$/i)) continue;
      
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        let newContent = content.replace(/sciss/gi, getReplacement);
        
        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log('Updated: ' + fullPath);
        }
      } catch (err) {
        console.error(`Skipping ${file}: ${err.message}`);
      }
    }
  }
}

console.log('Starting case-preserving replacement in:', targetDir);
replaceInDir(targetDir);
console.log('Finished replacing!');
