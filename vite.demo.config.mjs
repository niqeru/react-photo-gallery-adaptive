import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';

// Demo site (example/), served locally by `npm run dev` and deployed to GitHub Pages.
export default defineConfig(({ command }) => ({
  root: fileURLToPath(new URL('./example', import.meta.url)),
  // GitHub Pages serves the site from /<repo-name>/
  base: command === 'build' ? '/react-photo-gallery-adaptive/' : '/',
  build: {
    outDir: fileURLToPath(new URL('./demo-dist', import.meta.url)),
    emptyOutDir: true,
  },
}));
