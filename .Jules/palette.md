## 2024-05-21 - [Aria Labels in DevTools DOM Factories]
**Learning:** When using React DOM factories like `dom.button()` in Firefox DevTools, standard hyphenated HTML attributes (e.g., `"aria-label"`) must be used instead of camelCase (`ariaLabel`). Also, it is an established convention to assign the same localized text to both the `title` and `aria-label` attributes to ensure screen reader accessibility for icon-only buttons.
**Action:** When adding missing ARIA attributes in DevTools components built with DOM factories, ensure to map `title` strings to `"aria-label"` directly.
