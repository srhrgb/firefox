## 2024-05-30 - Tooltips on Icon-Only Buttons
**Learning:** Found a micro-UX issue where the "Element Picker" button in the animation inspector's `NoAnimationPanel` lacked a `title` attribute for tooltips, unlike other similar buttons (pause/resume, rewind). It only had a CSS class with a background image. This impacts accessibility and clarity for users.
**Action:** When working on toolbars or empty states with icon-only buttons, always ensure a `title` attribute is present alongside the class names to provide text alternatives.
