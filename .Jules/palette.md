## 2023-10-27 - Icon-only buttons lacking ARIA labels
**Learning:** Found an accessibility issue pattern specific to this app's components: icon-only buttons created with React DOM factories (e.g. `dom.button()`) in Firefox DevTools often rely solely on the `title` attribute for tooltips and lack explicit `aria-label` attributes for full screen reader accessibility.
**Action:** When adding or updating icon-only buttons in DevTools, ensure both `title` and `aria-label` are explicitly set, usually sharing the same localized string.
