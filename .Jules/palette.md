## 2024-10-12 - Missing tooltips/aria-labels in Animation Inspector
**Learning:** Icon-only close buttons in the Animation inspector lack both title attributes (for visual tooltips) and aria-labels (for screen readers), causing an accessibility gap.
**Action:** Add missing title attributes with Localized strings in the animation inspector's `AnimationDetailHeader.js`. Add corresponding entries to the `.properties` file.
