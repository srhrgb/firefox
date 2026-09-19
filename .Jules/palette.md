## 2024-03-24 - Accessibility: ARIA labels on Icon-only Buttons
**Learning:** Icon-only buttons created with React DOM factories (`dom.button`) in DevTools UI often rely solely on the `title` attribute for tooltips. For full screen reader accessibility, they require an explicit `aria-label` attribute (usually mirroring the `title`).
**Action:** When inspecting or modifying DevTools UI components, always check `dom.button` declarations for `aria-label` and add it if missing.
