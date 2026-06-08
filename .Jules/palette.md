## 2024-06-08 - Added accessible title to Settings Menu
**Learning:** The Settings menu button in Responsive Design Mode is missing a `title` and `aria-label` attribute, making it inaccessible for screen readers and providing no tooltip for mouse users.
**Action:** Add localized `title` and `aria-label` attributes to the settings button using the existing `l10n.getStr` method.
