## 2024-05-24 - Accessibility improvements for DevTools UI
**Learning:** Found an icon-only button without `title` or `aria-label` in the Firefox DevTools Animation inspector (`AnimationDetailHeader.js`), which makes it inaccessible for screen reader users and confusing for visual users hovering over the button.
**Action:** Always verify icon-only `dom.button` components have accessible names via `title` and `aria-label` properties mapped to localized strings.
