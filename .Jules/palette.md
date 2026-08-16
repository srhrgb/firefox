## 2024-05-18 - ARIA labels for RDM Custom Device List Buttons
**Learning:** Icon-only buttons created via React DOM factories (e.g., `dom.button()`) in Firefox DevTools Responsive Design Mode rely on `title` and `aria-label` attributes for tooltips and accessibility.
**Action:** When adding or modifying icon-only buttons in Firefox DevTools React components using DOM factories, explicitly provide both `title` and `aria-label` using strings fetched via `getStr()` from the appropriate `.properties` file.
