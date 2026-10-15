## 2023-10-25 - Missing ARIA label for icon-only button
**Learning:** Found an icon-only close button in the Animation Detail Header component without a tooltip or ARIA label. When an icon-only button doesn't have an ARIA label, screen readers will fail to convey its purpose, rendering it inaccessible.
**Action:** Add localized tooltip via `title` attribute and `aria-label` attribute using the same localized string.
