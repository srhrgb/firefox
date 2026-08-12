## 2024-08-12 - Added ARIA labels to Network Monitor Toolbars
**Learning:** Icon-only buttons in the Firefox DevTools (e.g. Netmonitor Toolbars) are generated using React factories (like `dom.button`) and often rely solely on the `title` attribute for tooltips, which doesn't consistently announce as an accessible name for screen readers.
**Action:** When creating or modifying icon-only button components in DevTools (e.g., using `dom.button`), always ensure an `aria-label` is provided, usually matching the `title` attribute, to ensure full screen reader support.
