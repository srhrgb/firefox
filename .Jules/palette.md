## 2024-11-05 - Add aria-labels to animation controls
**Learning:** Icon-only buttons created with React DOM factories in DevTools (like `dom.button` for animation controls) rely solely on the `title` attribute for tooltips, but for full screen reader accessibility, they need an explicit `aria-label`.
**Action:** Always add `aria-label` attributes to `dom.button` instances used for icon-only buttons.
