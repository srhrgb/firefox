## 2024-07-11 - Add ARIA Labels to Animation Inspector Buttons
**Learning:** In DevTools components, extracting localized strings using `L10N.getStr()` into a variable within the `render()` method prevents code duplication when assigning identical text to both `title` and `aria-label` attributes for icon-only buttons.
**Action:** Always declare a single string variable when localizing both `title` and `aria-label` for buttons.
