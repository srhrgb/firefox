## 2024-06-10 - Animation Details Close Button Accessibility
**Learning:** Found an icon-only button without `title` or `aria-label` in the Animation Inspector tools (`AnimationDetailHeader.js`), showing that accessibility improvements are often needed even in advanced developer tooling.
**Action:** When adding missing tooltips/labels in React `dom.*` components in DevTools, extract `getStr(...)` into a local variable within `render()` to cleanly assign to both `title` and `aria-label`.
