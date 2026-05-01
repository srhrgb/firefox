## 2026-05-01 - DevTools Icon-only Buttons A11y
**Learning:** When creating or updating icon-only buttons in the DevTools UI, assigning localized text to the `title` attribute is not enough; the same localized string must be assigned to the `aria-label` attribute to ensure screen reader accessibility.
**Action:** Always check `dom.button()` calls for icon-only components in DevTools to ensure they have both `title` and `aria-label` populated with the appropriate localized string.
