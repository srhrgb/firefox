## 2024-05-19 - ARIA Labels for React DOM Buttons
**Learning:** In Firefox DevTools using React DOM factories (`dom.button`), icon-only buttons often only use `title` for tooltips. For screen reader users, an explicit `aria-label` attribute (usually matching the `title`) is necessary to make these components accessible.
**Action:** Always add `aria-label` attributes to `dom.button` declarations when they only contain icons, matching the `title` text.
