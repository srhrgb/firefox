## 2024-10-08 - Icon-Only Buttons
**Learning:** In Firefox DevTools React components created via DOM factories (e.g., `dom.button`), icon-only buttons often rely solely on the `title` attribute for tooltips. For full screen reader accessibility, explicitly provide an `aria-label` (usually matching the `title`) to these components.
**Action:** Always ensure `aria-label` attributes are included alongside `title` attributes on icon-only interactive elements in the Mozilla Gecko DevTools codebase to support both visual tooltips and screen reader accessibility.
