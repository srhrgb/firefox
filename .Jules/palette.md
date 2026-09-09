## 2024-05-14 - Localizing title and aria-label
**Learning:** In Firefox DevTools React components using dom factories (like dom.button), tooltips for icon-only buttons rely on the `title` attribute. These title strings should also be used for the `aria-label` attribute so they are fully accessible to screen readers.
**Action:** When adding or updating localized tooltips for icon-only buttons, pass the localized string to both `title` and `aria-label`.
