## 2024-06-03 - Accessible Icon-only Buttons in DevTools Animation Inspector
**Learning:** In the Mozilla Firefox DevTools codebase (e.g., `devtools/client/inspector/animation/`), icon-only buttons often lack accessible names natively, unlike newer component libraries. Using the React DOM factory (`dom.button()`), `aria-label` should be populated.
**Action:** When creating or modifying icon-only `dom.button` instances, always inject an `aria-label` and `title` via the DevTools localization helpers (`getStr`), defining the string in the relevant `.properties` file with a localization note.
