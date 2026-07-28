Advisor headshots for the About page's Advisory Board section.

- One file per advisor, named `firstname-lastname.jpg` (or `.png`).
- Square, at least 400×400px. The card crops to a circle, so keep the
  face centered with even margin on all sides.
- After adding a file, set the matching `image` path in
  `src/app/about/components/advisory-board.tsx` (e.g.
  `/assets/advisors/firstname-lastname.jpg`) and fill in the `name`,
  `title`, and `bio` fields for that entry.
- Until `image` is set, the card shows the advisor's initials instead.
