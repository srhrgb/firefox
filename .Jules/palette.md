## 2024-10-25 - Added ARIA labels to viewport dimension inputs
**Learning:** In Firefox DevTools responsive mode, the inputs for width and height were lacking descriptive names for screen readers because they were just `<input type="number">` without labels. A user using a screen reader would not know which one is the width and which is the height.
**Action:** Always verify that input fields have accessible names, such as using `aria-label`, especially when there's no visible `<label>` text associated with them.
