## 2023-08-14 - ARIA labels for localized Tooltips
**Learning:** When dealing with DevTools icon-only buttons using React component factories (like `dom.button`) and localization utilities, adding an explicit `aria-label` is required for screen-reader accessibility, as the `title` attribute alone is often insufficient.
**Action:** Extract localized strings (like `l10n.getStr` or `l10n.getFormatStr`) into variables at the top of the `render` method, then assign those variables to both the `title` and `aria-label` properties to ensure DRY and accessible code.
