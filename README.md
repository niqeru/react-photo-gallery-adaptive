# React Adaptive Photo Gallery

## Preview

<p align="center">
  <img src="./assets/image1.png" alt="Gallery preview 1" width="420" />
  <img src="./assets/image2.png" alt="Gallery preview 2" width="420" />
  <br />
  <img src="./assets/image3.png" alt="Gallery preview 3" width="420" />
  <img src="./assets/image4.png" alt="Gallery preview 4" width="420" />
</p>

An adaptive React component for image galleries with dynamic aspect-ratio layout calculations, a full-screen lightbox, and a responsive view-all modal.

## Features
- 📐 **Dynamic Layout:** Automatically calculates column widths and cell flex values based on image ratios.
- 🔍 **Interactive Lightbox:** Full-screen image preview with keyboard navigation (Arrow keys and Escape).
- 🖼️ **"View All" Modal:** Grid modal for browsing all uploaded photos when the total count exceeds the display limit.
- 📱 **Fully Responsive:** Smooth layout adjustments across mobile, tablet, and desktop breakpoints.

## Installation

```bash
npm install react-photo-gallery-adaptive
```

## Quick Start

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import PhotoGallery from "react-photo-gallery-adaptive";

const photos = [
  "https://picsum.photos/800/600",
  "https://picsum.photos/600/800",
  "https://picsum.photos/800/800",
  "https://picsum.photos/1200/800",
];

function App() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto" }}>
      <PhotoGallery photos={photos} title="Vacation Photos" />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

Local demo (build then open the example):

```bash
npm install
npm run build
open example/index.html
```
