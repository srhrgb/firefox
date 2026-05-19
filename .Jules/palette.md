## 2024-05-18 - Tooltip Variable Extraction for ARIA labels
**Learning:** In DevTools React UI components, when localizing both `title` and `aria-label` with the exact same text, it is cleaner to extract the `getStr("...")` localized title logic into a single variable inside `render()` rather than repeating the ternary/method calls across both attributes.
**Action:** Always extract complex localization logic into a variable when applying identical text to both `title` and `aria-label` for icon-only buttons to maintain readability.
