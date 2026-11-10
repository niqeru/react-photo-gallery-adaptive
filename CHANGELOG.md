# Changelog

## 1.0.2

- Live demo: https://niqeru.github.io/react-photo-gallery-adaptive/
- README: badges, demo link; more npm keywords
- No changes to the component code

## 1.0.1

- **Fix:** published package now contains compiled ESM/CJS bundles (`dist/`) instead of raw JSX sources. 1.0.0 only worked with Vite and failed with `Module parse failed: Unexpected token` in Next.js, webpack/CRA, Jest and Node.
- **Fix:** crash "Rendered more hooks than during the previous render" when `photos` changes from `[]` to a non-empty array (e.g. loaded asynchronously).
- **Fix:** no `useLayoutEffect` warning during server-side rendering.
- CSS is bundled into the JS, no separate stylesheet import needed.
- Works in Next.js App Router out of the box (`"use client"` included).
- TypeScript type definitions included.

## 1.0.0

- Initial release.
