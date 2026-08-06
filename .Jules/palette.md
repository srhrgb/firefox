## 2024-08-06 - Missing tooltip on icon-only button in Animation Inspector
**Learning:** Found an icon-only button in the Animation Inspector (element picker in NoAnimationPanel) that lacked a `title` attribute or `aria-label`, making it difficult for sighted users to understand its purpose on hover, and for screen-reader users to identify it.
**Action:** When adding micro-UX enhancements, look out for UI components that only display an icon (like `animation-element-picker devtools-button`) and ensure they always have a descriptive `title` attribute for tooltips and accessibility.
