## 2024-03-24 - Accessibility improvements in Netmonitor Toolbar
**Learning:** Found multiple icon-only buttons in `devtools/client/netmonitor/src/components/Toolbar.js` that rely solely on `title` attributes for tooltips, lacking explicitly defined `aria-label`s. This is a common pattern for icon-only buttons in DevTools that can cause accessibility issues for screen readers.
**Action:** Always add `aria-label` to match the `title` for icon-only buttons in DevTools React components when standard `title` tooltips are used.
