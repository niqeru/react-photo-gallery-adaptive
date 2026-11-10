import React from "react";
import { createRoot } from "react-dom/client";
import PhotoGallery from "../src/index.js";

// Mixed landscape / portrait / square sizes to show the adaptive layout.
const sizes = [
  [1200, 800], [600, 800], [800, 800], [800, 600], [700, 1000],
  [1000, 700], [900, 600], [600, 900], [800, 800], [1200, 700],
  [600, 800], [1000, 750], [800, 600], [700, 900],
];
const photos = sizes.map(([w, h], i) => `https://picsum.photos/seed/gallery${i + 1}/${w}/${h}`);

const examples = [
  {
    title: "14 photos",
    photos,
    note: "Scroll the strip sideways. More than 11 photos: the last tile opens the full grid.",
  },
  { title: "5 photos", photos: photos.slice(4, 9) },
  { title: "2 photos", photos: photos.slice(9, 11) },
];

function App() {
  return (
    <main className="page">
      <header>
        <h1>react-photo-gallery-adaptive</h1>
        <p>
          Adaptive React photo gallery with aspect-ratio layout, lightbox (← → Esc) and a
          view-all modal. Click any photo.
        </p>
        <pre><code>npm install react-photo-gallery-adaptive</code></pre>
        <p className="links">
          <a href="https://github.com/niqeru/react-photo-gallery-adaptive">GitHub</a>
          <a href="https://www.npmjs.com/package/react-photo-gallery-adaptive">npm</a>
        </p>
      </header>

      {examples.map((ex) => (
        <section key={ex.title}>
          <h2>{ex.title}</h2>
          {ex.note && <p className="note">{ex.note}</p>}
          <PhotoGallery photos={ex.photos} title={ex.title} />
        </section>
      ))}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
