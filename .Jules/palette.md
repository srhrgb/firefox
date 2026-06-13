## 2024-05-18 - Tooltips and ARIA for Custom Device Buttons
**Learning:** In Firefox DevTools React components using standard DOM factories (e.g. `dom.button()`), assigning both `aria-label` and `title` to the same localized string is the standard approach to make icon-only buttons fully accessible to screen readers while also providing a visible tooltip on hover.
**Action:** When adding or fixing icon-only buttons in the DevTools UI, always ensure both attributes are populated with the same localized value to guarantee a complete accessible and usable experience.
