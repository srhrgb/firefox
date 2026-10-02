## 2024-10-02 - Settings Menu Icon Button Accessibility
**Learning:** Icon-only buttons created with React DOM factories (`dom.button`) in this app's DevTools components often lack accessible names or tooltips unless explicitly provided with `title` and `aria-label`.
**Action:** Always check React components utilizing `dom.button` to ensure that icon-only instances include both a `title` (for tooltip) and an `aria-label` (for screen readers) mapped to localized strings.
