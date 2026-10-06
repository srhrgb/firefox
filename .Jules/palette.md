## 2024-10-06 - Accessible Icon-only Buttons in Netmonitor
**Learning:** React DOM factory components (`dom.button`) in the Netmonitor codebase using `title` attributes for tooltips often miss corresponding `aria-label`s, rendering them inaccessible to screen readers.
**Action:** Always ensure that icon-only `button` components provide an explicit `aria-label` matching the `title` tooltip text to maintain accessibility standards.
