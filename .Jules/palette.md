## $(date +%Y-%m-%d) - Responsive Design Settings Accessibility
**Learning:** Tooltips (`title`) and `aria-label`s must be explicitly added to React components utilizing `dom.button` factories in the DevTools codebase, as they do not automatically inherit standard accessible names if only an icon (via CSS pseudo-elements) is present.
**Action:** Always verify icon-only buttons created with `dom.button` have both `title` and `aria-label` explicitly set using localized strings to ensure full usability for mouse users and screen readers.
