## 2024-05-24 - Accessibility for Icon-Only Buttons in DevTools React Components
**Learning:** In Firefox DevTools React components using `dom.button`, tooltips are often provided via the `title` attribute using `L10N.getStr()`. However, these icon-only buttons created with React DOM factories need an explicit `aria-label` attribute (usually matching the `title`) for full screen reader accessibility.
**Action:** When adding or modifying tooltips on icon-only buttons via the `title` attribute, always add a matching `aria-label` attribute to ensure proper accessibility for screen reader users.
