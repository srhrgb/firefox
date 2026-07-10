1. Add ARIA labels to the icon-only buttons in `EditorToolbar.js`.
   - The toolbar has several buttons (Pretty Print, Previous Expression, Next Expression, Reverse Search, Close) that are icon-only.
   - We will extract their localized `title` strings to variables at the beginning of `render()` to stay DRY.
   - We will set `"aria-label"` to those variables for each button.
2. Complete pre commit steps to ensure proper testing, verification, review, and reflection are done.
3. Submit the change.
