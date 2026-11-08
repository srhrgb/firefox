## 2024-11-08 - Added ARIA labels to icon-only buttons in Animation DevTools
**Learning:** In Firefox DevTools, icon-only buttons created via React DOM factories (e.g., `dom.button`) often rely solely on the `title` attribute for tooltips. However, for full screen reader accessibility, they also need an explicit `aria-label` matching the `title`.
**Action:** Next time I encounter a `dom.button` with just a `title`, I will ensure it also has an `aria-label`.
