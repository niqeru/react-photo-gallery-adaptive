import React from 'react';
import { createRoot } from 'react-dom/client';

const photos = [
  'https://picsum.photos/800/600',
  'https://picsum.photos/600/800',
  'https://picsum.photos/800/800',
  'https://picsum.photos/1200/800',
];

// dynamic import: use source during dev (relative to example/), built bundle in production
const mod = await import(import.meta.env.DEV ? '../src/index.js' : '/dist/index.mjs');
const PhotoGallery = mod.default;

function App() {
  return (
    React.createElement('div', { style: { maxWidth: 1000, margin: '0 auto' } },
      React.createElement(PhotoGallery, { photos, title: 'Example Photos' })
    )
  );
}

createRoot(document.getElementById('root')).render(React.createElement(App));
