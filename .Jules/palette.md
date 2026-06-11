## 2026-06-11 - Adding ARIA labels to custom device action buttons in Responsive Design Mode
**Learning:** In Firefox DevTools React components using the `dom.button` factory, icon-only buttons need both `title` and `aria-label` set to the same localized string to ensure accessibility for screen readers, and localized strings should be preceded by a `# LOCALIZATION NOTE` in  files.
**Action:** Add localized strings for the edit and remove device actions, retrieve them using `getStr`, and consistently assign them to both `title` and `aria-label` attributes on the respective `dom.button` calls.
## 2026-06-11 - Adding ARIA labels to custom device action buttons in Responsive Design Mode
**Learning:** In Firefox DevTools React components using the dom.button factory, icon-only buttons need both title and aria-label set to the same localized string to ensure accessibility for screen readers, and localized strings should be preceded by a LOCALIZATION NOTE in .properties files.
**Action:** Add localized strings for the edit and remove device actions, retrieve them using getStr, and consistently assign them to both title and aria-label attributes on the respective dom.button calls.
