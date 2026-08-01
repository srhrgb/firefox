## 2024-08-01 - Add Tooltips to Animation Inspector Icon-Only Buttons
**Learning:** In complex DevTools components, icon-only buttons often lack accessible names, making them ambiguous to screen readers and difficult to decipher for all users.
**Action:** Adding localized `title` attributes using `L10N.getStr()` or imported `getStr()` improves accessibility and user understanding without altering the layout.
