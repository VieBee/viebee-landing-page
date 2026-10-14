import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const distDir = path.join(root, "dist");
const clientDir = path.join(distDir, "client");
const outputPublicDir = path.join(root, ".output", "public");

// Ensure source directory exists (either dist from NITRO_PRESET=netlify or .output/public)
const sourceDir = fs.existsSync(distDir) ? distDir : fs.existsSync(outputPublicDir) ? outputPublicDir : null;

if (sourceDir) {
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // If source was .output/public, copy into dist first
  if (sourceDir !== distDir) {
    fs.cpSync(sourceDir, distDir, { recursive: true });
  }

  // Ensure dist/client exists and mirrors dist files
  if (!fs.existsSync(clientDir)) {
    fs.mkdirSync(clientDir, { recursive: true });
  }

  const entries = fs.readdirSync(distDir);
  for (const entry of entries) {
    if (entry !== "client") {
      const src = path.join(distDir, entry);
      const dest = path.join(clientDir, entry);
      fs.cpSync(src, dest, { recursive: true });
    }
  }

  console.log("✓ Successfully prepared dist and dist/client for Netlify deployment.");
}
