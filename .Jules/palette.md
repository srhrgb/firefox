
## $(date +%Y-%m-%d) - Consistent ARIA Labels for Icon-Only Buttons
**Learning:** In DevTools React components that use factories like `dom.button()`, localized `title` attributes (tooltips) are commonly used, but `aria-label` attributes are often missing on icon-only controls.
**Action:** Always extract the `l10n.getStr()` or `l10n.getFormatStr()` call into a variable before the `return` statement in the `render` method, and assign that variable to both `title` and `"aria-label"` properties to ensure screen reader parity with visual tooltips.
