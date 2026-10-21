## 2024-11-20 - Add ARIA Labels to DOM Button components
**Learning:** Found several icon-only buttons using `dom.button` within `devtools/client/webconsole` components that have a `title` attribute for tooltips but lack a corresponding `aria-label`. This affects screen reader users who may not receive the accessible name.
**Action:** Always verify that React DOM factory buttons (`dom.button`) relying on tooltips also explicitly include `aria-label` to ensure consistent accessibility for interactive UI elements.
