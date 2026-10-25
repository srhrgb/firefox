## 2024-10-25 - Missing ARIA label on Font Origin Copy button
**Learning:** Found an accessibility issue where the "Copy URL" button in the Font Inspector only used a `title` attribute for tooltips and had no `aria-label`. This pattern of using `title` instead of `aria-label` for icon-only buttons might be common in this codebase.
**Action:** Always add `aria-label` matching the `title` attribute for icon-only buttons.
