## 2025-03-09 - Added Tooltip to Responsive Design Mode Settings Button
**Learning:** Found that the main settings menu icon button inside Firefox's Responsive Design Mode was completely lacking an accessible tooltip/aria-label, rendering it functionally invisible to screen readers, and causing poor discoverability since it's an icon-only button without label context.
**Action:** Always ensure icon-only DOM elements in custom menu/toolbar react components have a `title` (which maps to aria label naturally in HTML/Firefox DevTools UI) and localizing it properly in `.properties` files.
