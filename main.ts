const fs = require('node:fs');
const path = require('node:path');

const ROAST = 'My agent builds entire apps in minutes, then stops at a warning label to ask if it may proceed — less a superintelligence, more an extremely fast intern carrying a permission slip.';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), ROAST, 'utf8');
