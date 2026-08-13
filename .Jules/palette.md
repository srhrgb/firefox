## 2024-06-25 - ARIA Labels for Icon-Only Buttons in Firefox DevTools
**Learning:** Icon-only buttons created via React DOM factories (e.g., `dom.button`) in Firefox DevTools often rely solely on the `title` attribute for tooltips. While this provides a visual tooltip, it is often insufficient for screen readers.
**Action:** When working on UI components in DevTools, especially icon-only buttons, explicitly duplicate the localized `title` text into an `aria-label` attribute to ensure full accessibility for screen reader users.
