## 2024-05-15 - Missing ARIA label on details panel close button
**Learning:** Found a pattern where icon-only buttons like the close button in the DevTools Animation inspector details panel were missing an `aria-label`, as well as a tooltip (`title`). The standard is to pull these strings from `l10n.getStr()`.
**Action:** Always check icon-only buttons and `.close-button` variants for tooltip and `aria-label` accessibility. Ensure they are assigned localized strings.
