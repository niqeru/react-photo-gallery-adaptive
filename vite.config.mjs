import { defineConfig } from 'vite';
import path from 'path';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// Next.js App Router: the component uses hooks, so mark the bundle as a client component.
// Runs after CSS injection so the directive stays the very first statement.
const useClientDirective = () => ({
  name: 'use-client-directive',
  enforce: 'post',
  generateBundle(_, bundle) {
    for (const chunk of Object.values(bundle)) {
      if (chunk.type === 'chunk') chunk.code = `"use client";\n${chunk.code}`;
    }
  },
});

export default defineConfig({
  // CSS is bundled into the JS so `import PhotoGallery from "react-photo-gallery-adaptive"`
  // works without a separate stylesheet import.
  plugins: [cssInjectedByJsPlugin(), useClientDirective()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      fileName: (format) => (format === 'es' ? 'index.mjs' : 'index.cjs'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        exports: 'default',
      },
    },
  },
});
