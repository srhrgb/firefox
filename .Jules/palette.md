## 2026-10-06 - React DOM Factory Accessibility Pattern
**Learning:** In Firefox DevTools, icon-only buttons built with React DOM factories (like dom.button) commonly lack native aria-label attributes, relying entirely on visual tooltips (title). This is a recurring component-level accessibility pattern.
**Action:** When working with dom.button for icon-only controls, always explicitly inject aria-label alongside the title and extract the localized string into a variable at the top of the render method to maintain DRYness.
