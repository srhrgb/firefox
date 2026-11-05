## 2024-05-24 - Accessibility aria-labels for Reverse Search and Editor Toolbar Buttons
**Learning:** React component tools within Mozilla Webconsole have buttons composed of elements like `dom.button` but rely on the `title` attribute for tooltips and screen reader descriptions. Relying strictly on titles is insufficient for solid accessibility support.
**Action:** Always provide explicit `aria-label` tags, matching the visual tooling, to icon-only buttons using `dom.button()` patterns in Mozilla devtools React components.
