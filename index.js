#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// Check if we're running the compiled version or need to compile
const distPath = path.join(__dirname, 'dist', 'index.js');
const srcPath = path.join(__dirname, 'src', 'index.ts');

// Try to run the compiled version first, fallback to TypeScript compilation
const fs = require('fs');
if (fs.existsSync(distPath)) {
  require(distPath);
} else {
  // Spawn TypeScript compilation and then run
  const tsc = spawn('npx', ['tsc'], { stdio: 'inherit' });
  tsc.on('close', (code) => {
    if (code === 0) {
      require(distPath);
    } else {
      console.error('TypeScript compilation failed');
      process.exit(1);
    }
  });
}
