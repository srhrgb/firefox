## 2024-05-14 - Fluent Localization for Icon-Only Buttons
**Learning:** In Firefox DevTools, when using Fluent (`.ftl`) for localization, you can define attributes like `.title` and `.aria-label` under a string ID. Then, when wrapping a component with `FluentReact.Localized`, you must explicitly enable these attributes by passing `attrs: { title: true, "aria-label": true }`.
**Action:** Use this pattern to provide both tooltips and accessible names for icon-only buttons built with React DOM factories (`dom.button`).
