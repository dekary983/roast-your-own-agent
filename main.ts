const fs = require('node:fs');
const path = require('node:path');

const ENTRY_FILE = 'entry.txt';
const ROAST = 'My agent builds entire apps in minutes, then stops at a warning label to ask if it may proceed — less a superintelligence, more an extremely fast intern carrying a permission slip.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';

function main() {
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, ENTRY_FILE), ROAST, 'utf8');
}

main();
