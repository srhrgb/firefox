## 2024-10-03 - Added Tooltip and ARIA Label to Animation Detail Close Button
**Learning:** Found a close button in the Animation Detail panel (`animation-detail-close-button`) lacking both a tooltip (`title`) and screen reader label (`aria-label`), making it confusing for sighted users and inaccessible for screen reader users.
**Action:** Always ensure icon-only buttons like close buttons have descriptive `title` and `aria-label` attributes using localized strings to support both tooltip discovery and assistive technologies.
