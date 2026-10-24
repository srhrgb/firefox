## 2025-02-15 - Missing ARIA Labels in Icon-only Buttons
**Learning:** In Firefox DevTools, icon-only buttons created via React DOM factories (like `dom.button`) often rely solely on the `title` attribute for tooltips, which creates an accessibility gap for screen reader users.
**Action:** When working with or updating these components, always explicitly provide an `aria-label` attribute (typically matching the `title`) to ensure full screen reader accessibility.
