## 2024-05-24 - Added ARIA labels to Animation inspector buttons
**Learning:** Icon-only buttons using React DOM factories (`dom.button`) in the Mozilla DevTools codebase often omit `aria-label` when using the `title` attribute for tooltips. For full accessibility, they require explicit `aria-label` assignments along with the `title`.
**Action:** Always check `dom.button` components to ensure they have an explicitly passed `aria-label` matching the `title`, especially for icon-only components like playback controls.
