## 2024-07-24 - Accessibility standards for icon buttons
**Learning:** In Firefox DevTools React components (like the Responsive Mode Toolbar), icon-only buttons typically rely on `title` attributes. Adding an explicit `aria-label` ensures optimal screen reader compatibility, and reusing the same localized string for both keeps the code clean.
**Action:** When adding or auditing icon-only buttons in the DevTools UI, always verify that both `title` and `aria-label` are present and using the same localized string.
