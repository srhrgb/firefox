## 2026-05-02 - Adding ARIA labels to DevTools React buttons
**Learning:** When using React DOM factories like `dom.button` in the DevTools UI, standard accessibility attributes like `aria-label` can be passed directly in the props object alongside `title`, reusing the localized string for both.
**Action:** Always add `aria-label` to icon-only `dom.button` implementations, using the same localized string variable as the `title`.
