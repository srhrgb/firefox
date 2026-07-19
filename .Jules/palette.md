## 2024-05-17 - AnimationDetailHeader Close Button Accessibility
**Learning:** Some DevTools components like AnimationDetailHeader have icon-only close buttons lacking both `title` and `aria-label` attributes.
**Action:** When adding accessible labels to DevTools React components using `l10n.getStr()`, extract the string to a variable at the top of the `render()` method to keep the component clean and DRY, then apply it to both `title` and `aria-label`.
