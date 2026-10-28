## 2026-10-28 - Missing Tooltips and Labels on Icon-Only Buttons
**Learning:** Icon-only buttons in the Responsive Design Mode toolbar and device modal were created using `dom.button` but lacked both `title` for tooltips and `aria-label` for screen reader accessibility. This is a common pattern for icon buttons without visible text.
**Action:** When creating icon-only buttons, always ensure both a `title` and an `aria-label` are provided, fetching the appropriate strings from the `.properties` localization file.
