## 2024-07-23 - Screen reader accessibility for localized icon-only buttons
**Learning:** When localizing both `title` and `aria-label` with the same text in DevTools React components to ensure screen reader accessibility, it's best to extract the `getStr()` call into a single variable at the top of the `render()` method to keep the code DRY.
**Action:** Extract `l10n.getStr(...)` to a local variable in `render()` before using it for both `title` and `aria-label` attributes on elements instead of calling it twice or using an unidiomatic IIFE.
