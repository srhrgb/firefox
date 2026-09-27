## 2024-09-27 - Icon-only buttons lacking ARIA labels
**Learning:** In Firefox DevTools, icon-only buttons created via React DOM factories (e.g., `dom.button`) often rely solely on the `title` attribute for tooltips. For full screen reader accessibility, explicitly provide an `aria-label` (usually matching the `title`) to these components.
**Action:** When adding or updating icon-only buttons, ensure an `aria-label` attribute is provided alongside the `title` attribute for both visual tooltips and screen reader accessibility.
