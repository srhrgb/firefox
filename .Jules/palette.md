## 2024-11-02 - Icon-only Buttons Missing ARIA Labels in Network Monitor Toolbar
**Learning:** Found multiple icon-only buttons in the Network Monitor's Toolbar React component that only use a `title` attribute for tooltips but lack a proper `aria-label` for screen reader accessibility.
**Action:** Add `aria-label` to these components by reusing the existing localization strings used for the `title` attributes.
