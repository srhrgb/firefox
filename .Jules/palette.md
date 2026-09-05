## 2024-09-05 - Missing ARIA label in Profiler Dialog Close Button
**Learning:** In Firefox DevTools, icon-only buttons created with `dom.button` (React component factories) often omit `aria-label` or `title` attributes. Using `Localized` wrapping provides these accessibilities by linking to `aboutdebugging.ftl`.
**Action:** For icon-only components in DevTools, ensure `Localized` is used to provide both `title` and `aria-label` attributes for accessibility to keyboard and screen reader users.
