## 2024-05-24 - Add ARIA Labels to DevTools Editor Toolbar
**Learning:** Icon-only buttons in Firefox DevTools (created with `dom.button`) often only have `title` attributes for tooltips. For full screen reader accessibility, they need an explicitly matched `aria-label`.
**Action:** When working on DevTools components, ensure that buttons relying on `title` also receive an `aria-label` with the same localized string. Extracted localized strings to variables at the top of the render method to avoid duplication.
