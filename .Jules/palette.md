## 2024-11-20 - Add ARIA Labels to Icon-Only Buttons
**Learning:** Screen readers might rely heavily on the `title` attribute for icon-only buttons if `aria-label` is missing, but explicitly adding `aria-label` ensures compliance with strict accessibility standards and predictability across different screen reader software.
**Action:** Always map the localized string used for `title` to `aria-label` when constructing icon-only `dom.button` elements.
