
## 2026-09-01 - Adding ARIA labels to DevTools icon-only buttons
**Learning:** In Firefox DevTools React DOM factory components (`dom.button`), tooltips are often applied via `title` but screen readers require an explicitly defined `aria-label` (even if identical) to ensure full accessibility.
**Action:** Add `aria-label` attributes to icon-only buttons using localized strings (e.g. `getStr`) when only a `title` is present.
