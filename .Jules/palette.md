## 2024-08-15 - ARIA Labels in React DOM Factories
**Learning:** When using React DOM factories (like `button({})`) for icon-only buttons in the Firefox DevTools, the buttons usually rely solely on the `title` attribute for tooltips. For comprehensive screen reader support, an explicit `aria-label` must be added matching the `title`.
**Action:** When working on toolbars, consistently verify if `dom.button` or `button({})` components lack an explicit `aria-label` and add one using existing localization constants or getters.
