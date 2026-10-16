## 2024-05-15 - Added ARIA labels to Animation Panel Buttons
**Learning:** Found multiple icon-only buttons in the Animation inspector (`PauseResumeButton.js`, `RewindButton.js`, `AnimationDetailHeader.js`) missing `aria-label`. Buttons with only `title` attributes aren't fully accessible to screen readers natively unless `aria-label` is also explicitly set in React DOM.
**Action:** Always add `aria-label` when using `title` on icon-only buttons created with React DOM factories.
