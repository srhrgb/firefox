## 2024-10-18 - ARIA Labels for React DOM Factory Buttons
**Learning:** In Firefox DevTools React components using the `dom.button` factory without React wrappers like `FluentReact.Localized`, you must directly supply both `"aria-label"` and `title` via localization helper strings (`getStr`) to ensure full keyboard, mouse, and screen reader accessibility for icon-only buttons.
**Action:** Always import `getStr` from the associated `l10n.js` and explicitly assign both `aria-label` and `title` to custom icon-only DOM factory components.
