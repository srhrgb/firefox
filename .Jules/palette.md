
## 2024-05-23 - Adding Tooltips and ARIA Labels to Icon-Only Buttons
**Learning:** In the Mozilla Firefox DevTools interface, icon-only buttons created with React DOM factories (e.g. `dom.button()`) are typically used. While styling (CSS background image) defines the visual behavior, the missing `title` attribute fails to give context to hover states for standard users, and the missing `aria-label` renders it inaccessible to screen readers.
**Action:** Always ensure any icon-only `dom.button` gets explicitly passed `title` and `aria-label` attributes derived from a standardized Localization property (e.g., `L10N.getStr()`).
