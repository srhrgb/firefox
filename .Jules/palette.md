## 2024-08-20 - Icon-Only Buttons Missing ARIA Labels in Web Console Editor Toolbar
**Learning:** Icon-only buttons in the Web Console's `EditorToolbar.js` component rely solely on `title` for tooltips but lack proper `aria-label`s for screen readers.
**Action:** Add `aria-label` attributes to these icon-only buttons (`prettyPrintButton`, `prevExpressionButton`, `nextExpressionButton`, `reverseSearchButton`, `closeButton`) using the same localized strings as their `title` attributes.
