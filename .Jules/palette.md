## 2024-05-19 - Accessible Tooltips for Icon-Only Buttons in DevTools

**Learning:** DevTools heavily relies on icon-only buttons (`dom.button`) in its React components. Many of these rely solely on `title` for visual tooltips but lack semantic screen reader labels. Using a single localized string for both `title` and `aria-label` prevents duplicate definitions, but extracting the string before the button declaration requires refactoring inline returns.
**Action:** When adding `title` to custom icon-only components, always apply the exact same localized string to `aria-label`. If the component returns the element inline, pull the string localization into a separate variable prior to the `dom.button` call to keep the logic DRY without resorting to IIFEs.
