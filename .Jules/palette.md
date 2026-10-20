## 2024-10-21 - Adding ARIA labels to icon-only React DOM factory buttons
**Learning:** In Firefox DevTools, icon-only buttons created via React DOM factories (like `dom.button`) often rely solely on the `title` attribute for tooltips, which may not always be reliably announced by all screen readers in all contexts without an explicit `aria-label`.
**Action:** Always ensure that icon-only `dom.button` instances explicitly define an `aria-label` alongside their `title` attribute for full accessibility.
