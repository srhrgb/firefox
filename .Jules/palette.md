## 2024-05-24 - Animation Inspector Icon-Only Buttons
**Learning:** Found an icon-only button without `title` and `aria-label` in the Animation Inspector details view. Icon-only buttons should be self-documenting for both mouse hover and screen readers, matching the established pattern in `.devtools-button` elements in this component.
**Action:** Always ensure newly added or modified `devtools-button` elements with icon-only classes (e.g. `.animation-detail-close-button`) receive full localized ARIA descriptions.
