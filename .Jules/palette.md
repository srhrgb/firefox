## 2024-05-19 - DevTools Animation Inspector Buttons Need Accessible Labels
**Learning:** Found that several icon-only buttons in the Animation Inspector (AnimationDetailHeader, RewindButton, PauseResumeButton) only had a `title` attribute, lacking proper `aria-label`s for screen reader support.
**Action:** When adding or updating icon-only buttons created with React DOM factories (`dom.button()`), always ensure an `aria-label` is provided, often mirroring the `title` text. If the same localized string is used for both, extract it to a variable to keep code DRY.
