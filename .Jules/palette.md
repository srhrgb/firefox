## 2024-05-19 - Accessible Toolbars in Web Console
**Learning:** In the Web Console's `EditorToolbar` and `FilterBar` React components, icon-only buttons relied solely on `title` attributes (for tooltips) but lacked matching `aria-label`s, which can result in poor screen reader experiences.
**Action:** Always add matching `aria-label` attributes to icon-only DevTools UI buttons (e.g. `dom.button`) using `l10n.getStr()` or `l10n.getFormatStr()`.
