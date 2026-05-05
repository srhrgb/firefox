## 2024-05-18 - [Icon-Only Button Accessibility in DevTools]
**Learning:** Found that DevTools icon-only buttons sometimes rely entirely on CSS `::before` pseudo-elements for their icon and lack accessible names (no `title` or `aria-label`). Also discovered that older buttons had a `title` but no `aria-label`.
**Action:** When working in DevTools, always check if icon-only buttons have an `aria-label` and `title` with localized strings, even if they visually appear functional.
