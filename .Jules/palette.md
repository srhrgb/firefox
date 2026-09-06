## 2024-09-06 - Animation Inspector Button Accessibility
**Learning:** Icon-only buttons in the Animation Inspector components (Rewind, Pause/Resume, Close) were missing `aria-label` attributes, relying solely on `title` or visual context.
**Action:** Always add `aria-label` to icon-only buttons using existing localized `title` strings for screen reader accessibility.
