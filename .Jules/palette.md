## 2024-05-24 - Add aria-label to Web Console Clear Button
**Learning:** Found that some icon-only buttons in the Firefox DevTools (like the clear button in the Web Console FilterBar) rely solely on the `title` attribute for tooltips, but lack an explicit `aria-label` for screen reader users. The localized title string can be easily reused for both attributes.
**Action:** When working on DevTools React components containing icon-only buttons (`dom.button`), always ensure both `title` and `aria-label` are present and mapped to the corresponding localized string for full accessibility.
