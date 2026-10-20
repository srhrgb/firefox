## 2026-10-20 - Responsive Design Mode Toolbar Accessibility
**Learning:** In Firefox DevTools, icon-only buttons created via React DOM factories (like `dom.button`) often rely solely on the `title` attribute for hover tooltips, leaving them inaccessible to screen readers.
**Action:** Always verify icon-only buttons in DevTools and ensure an explicit `aria-label` (usually mirroring the `title`'s localized string) is provided to make them natively accessible.
