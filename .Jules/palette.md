## 2024-05-24 - Accessibility improvements for DevTools FilterBar
**Learning:** DevTools FilterBar icon-only buttons (`Clear`, `Close`, `Settings`) rely heavily on `title` attributes for tooltips, which aren't always read by screen readers. Explicit `aria-label` attributes are needed for reliable accessibility on these buttons.
**Action:** Always verify `aria-label` is present on `dom.button` instances that are icon-only in DevTools UI.
