## 2024-03-24 - Missing ARIA labels on animation tool buttons
**Learning:** Icon-only buttons created via React DOM factories in DevTools often rely solely on the `title` attribute for tooltips, which may not be fully accessible to screen readers.
**Action:** Always provide an explicit `aria-label` (usually matching the `title`) to icon-only buttons to ensure full accessibility.
