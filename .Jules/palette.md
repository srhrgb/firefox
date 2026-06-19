## 2025-06-19 - Extracted Localization Strings for Dual Usage
**Learning:** When localizing both `title` and `aria-label` with the exact same text in DevTools React components, it's best practice to extract the `getStr()` logic into a single variable at the top of the `render()` method to keep the code DRY and clean, avoiding repeated localization lookups.
**Action:** When adding standard a11y labels to toolbars, always extract localized strings first if they are to be used for multiple attributes (like `title` and `aria-label`).
