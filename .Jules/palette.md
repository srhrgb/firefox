
## 2024-05-23 - Accessibility of icon-only buttons in DevTools UI
**Learning:** Icon-only buttons implemented using React DOM factories (`dom.button()`) in the DevTools UI (e.g. `AnimationDetailHeader.js`, `RewindButton.js`, `PauseResumeButton.js`) often have a `title` attribute for tooltips but frequently miss the required `aria-label` attribute, which makes them inaccessible to screen readers.
**Action:** When adding or updating icon-only buttons in the DevTools UI, always ensure that an `aria-label` attribute is added with the same localized text as the `title` attribute to maintain keyboard and screen reader accessibility.
