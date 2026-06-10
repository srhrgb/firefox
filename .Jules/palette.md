## 2024-06-10 - Add ARIA Labels to Animation Inspector Buttons
**Learning:** DevTools Animation Inspector has some buttons (like the Close button on the detail panel) that are icon-only but lack `title` and `aria-label` attributes, making them inaccessible.
**Action:** Always verify icon-only buttons in the UI have both `title` and `aria-label` assigned to the same string to ensure screen reader accessibility.
