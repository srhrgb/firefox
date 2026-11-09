## 2026-11-09 - Adding aria-label to SearchBox clear button
**Learning:** In Firefox DevTools, some components like the SearchBox clear button rely solely on a `title` attribute for tooltip text but lack an explicit `aria-label`. This can lead to suboptimal screen reader experiences for icon-only buttons.
**Action:** When adding or updating icon-only buttons, ensure that both `title` and `aria-label` are provided, ideally by extracting the localized string into a variable to keep the code DRY.
