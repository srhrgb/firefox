## 2024-11-10 - Add missing ARIA labels and tooltips to animation inspector buttons
**Learning:** In Firefox DevTools, icon-only buttons created via React DOM factories (e.g. `dom.button`) often rely solely on the `title` attribute for tooltips. For full screen reader accessibility, explicitly provide an `aria-label` (usually matching the `title`) to these components.
**Action:** When working on Firefox DevTools React components, always verify that icon-only `dom.button` instances include both `title` and `aria-label` attributes to ensure they are accessible.
