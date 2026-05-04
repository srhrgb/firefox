## 2026-05-04 - Consistent A11y Pattern for Icon Buttons
**Learning:** Found a systemic pattern in DevTools UI where icon-only React components (like playback controls or detail close buttons) often possess a `title` attribute for mouse hover tooltips but frequently miss the corresponding `aria-label` attribute, making them inaccessible to screen readers relying on focus.
**Action:** Always verify that both `title` and `aria-label` are populated symmetrically for icon-only components using the same localized string.
