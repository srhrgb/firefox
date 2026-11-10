## 2025-01-20 - Missing aria-labels on icon-only buttons in devtools
**Learning:** React `dom.button` components in Firefox DevTools that rely on `title` attributes for tooltips often lack the required `aria-label` attribute, making them completely inaccessible to screen readers.
**Action:** When adding or auditing icon-only `dom.button` components in the DevTools UI, explicitly map the tooltip's localization string to the `aria-label` attribute.
