## 2024-05-18 - Adding tooltips to React DOM components
**Learning:** In Firefox DevTools React components using the `dom.button` factory, accessibility properties like `title` can be easily added and localized by passing them into the properties object and referencing strings from a `.properties` file via `L10N.getStr()`.
**Action:** Always ensure icon-only buttons created with `dom.button` have a `title` (or `aria-label`) attribute defined in the properties object to improve screen reader compatibility and provide visual tooltips on hover.
