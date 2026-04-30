## 2025-04-30 - Added ARIA Labels to Icon-Only Buttons
**Learning:** Found an accessibility issue pattern specific to this app's components (using React `dom.button()` factory) where icon-only buttons like "Clear Web Console" or "Close Sidebar" have `title` tooltips but lack `aria-label` attributes for screen readers.
**Action:** Always ensure that when defining an icon-only button via `dom.button()`, the same localized string used for `title` is passed as `aria-label`.
