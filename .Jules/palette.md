## 2024-05-18 - Improve Accessibility of Icon-Only Buttons in NetMonitor Toolbar

**Learning:** DevTools UI often relies on just the `title` attribute for tooltips on icon-only buttons (like those in the Netmonitor Toolbar). While `title` gives a visual tooltip, an explicit `aria-label` provides a more robust and standard way to communicate the button's purpose to screen reader users without relying on the tooltip attribute to double as the accessible name.

**Action:** Add `aria-label` to icon-only buttons in the Netmonitor `Toolbar.js` component, ensuring the `aria-label` value matches the `title` attribute for consistency.
