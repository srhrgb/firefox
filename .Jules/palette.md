## 2024-05-13 - Add aria-label to icon-only buttons in devtools
**Learning:** Icon-only buttons created via React DOM factories (`dom.button`) in Firefox DevTools often rely solely on the `title` attribute for tooltips. For full screen reader accessibility, explicitly provide an `aria-label` (usually matching the `title`) to these components.
**Action:** When creating icon-only buttons with `dom.button`, always include both `title` for visual tooltips and `aria-label` for screen reader accessibility, using the same localized string for consistency.
