## 2024-10-12 - Added ARIA labels to Responsive Design Mode Buttons
**Learning:** React DOM factory components (`dom.button`) in Firefox DevTools that use `title` for tooltips often miss explicit `aria-label` attributes for screen readers. Using `title` isn't enough for robust accessibility.
**Action:** When adding or auditing tooltips (`title`) on icon-only buttons in DevTools UI, always explicitly map the same localized string to `aria-label` to ensure robust screen reader support.
