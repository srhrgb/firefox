## 2024-05-17 - Missing Tooltip on Responsive Design Mode Settings Button
**Learning:** Found an icon-only button without an ARIA label or tooltip in the RDM Settings component (`id: "settings-button"`). This affects accessibility since screen readers can't describe it, and sighted users might not know what it does. Also the device list edit/remove, and close button do not have a title/aria-label.
**Action:** Add tooltips and aria-labels for these icon-only buttons across the RDM components using `title` to provide both hover tooltip and accessible names.
