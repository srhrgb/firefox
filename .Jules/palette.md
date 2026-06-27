## 2024-05-18 - Tooltips and ARIA Labels in Animation Inspector
**Learning:** React components using `L10N` localization (like `NoAnimationPanel` using `LocalizationHelper`) can safely use `.getStr()` directly on `L10N` object. Ensure ARIA labels align with visual titles (`title` attributes) on icon-only buttons for comprehensive a11y coverage.
**Action:** Always add identical `aria-label` and `title` via L10N to icon-only buttons.
