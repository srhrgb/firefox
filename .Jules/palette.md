## $(date +%Y-%m-%d) - Adding ARIA labels in Fluent localization
**Learning:** In Firefox DevTools `.ftl` files and `dom.button` elements, the `Localized` component from `FluentReact.Localized` should be used to wrap components and apply localized attributes using dot notation (`.title`, `.aria-label`) when an icon-only button is used to ensure accessibility for screen readers.
**Action:** When creating new icon-only buttons in `devtools` with React, ensure it is wrapped in `Localized` passing an explicit ID and toggling `title: true` and `"aria-label": true` in `attrs`.
