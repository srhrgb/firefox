## 2024-09-08 - Icon-Only Buttons Missing ARIA Labels in FluentReact
**Learning:** In Firefox DevTools, icon-only buttons wrapped in `FluentReact.Localized` often only define `.title` in `.ftl` files for tooltips, leaving them without accessible names for screen readers because `.aria-label` is not automatically inferred from `.title`.
**Action:** Always explicitly define `.aria-label` alongside `.title` in `.ftl` files and enable both in the `attrs` property of `FluentReact.Localized` for icon-only buttons.
