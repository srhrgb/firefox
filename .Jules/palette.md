## 2026-06-01 - ARIA labels for Custom Device actions
**Learning:** Icon-only buttons for custom device actions in the Responsive Design Mode UI were missing tooltips and ARIA labels. This is a common pattern to check for when building or reviewing custom component lists.
**Action:** Applied localized 'title' and 'aria-label' attributes concurrently using the `getStr()` utility to ensure accessibility and mouse hover UX.
