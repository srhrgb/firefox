## 2024-07-06 - Tooltip pattern for Animation Inspector detail headers
**Learning:** Adding a close button in `AnimationDetailHeader.js` requires passing localized `title` and `aria-label` properties so screen readers and users hovering over the 'X' button have context. DevTools React components that use `dom.button()` require extracting `getStr` from `resource://devtools/client/inspector/animation/utils/l10n.js`.
**Action:** When working on UX for icon-only buttons in Firefox DevTools, always extract `getStr` and attach matching `title` and `aria-label` attributes to the React `dom.button`.
