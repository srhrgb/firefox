## 2024-10-29 - Add ARIA Labels to Icon-Only Buttons
**Learning:** React elements utilizing `dom.button` to create icon-only buttons often only pass a `title` (which creates a tooltip). For proper screen-reader support, we also need to pass `aria-label`, mirroring the tooltip text so that screen readers read out the action correctly.
**Action:** When adding or checking `dom.button` creations, look for instances where `title` is set but `aria-label` or `"aria-label"` is missing.
