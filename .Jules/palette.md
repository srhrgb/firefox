## 2026-09-18 - Missing Affordances on React DOM Factory Buttons
**Learning:** In Firefox DevTools' responsive view, some icon-only buttons built with `dom.button()` lack both `title` and `aria-label` attributes (e.g., Settings menu, device list close button), making them opaque to both screen reader users and sighted users needing tooltips.
**Action:** When adding or auditing icon-only buttons in the Mozilla codebase, explicitly provide localized strings for both `title` (for tooltips) and `aria-label` (for accessibility) to ensure they are discoverable and semantically clear.
