Advisor headshots for the /team page and the About page's advisory board.

- One file per advisor, named `firstname-lastname.jpg` (or `.png`).
- Square, at least 400×400px. Both the card and the /author/[slug]
  profile page crop to a circle, so keep the face centered with even
  margin on all sides.
- Advisors are entries in `src/lib/authors.ts` — the single people
  directory the blog bylines, /author/[slug] pages, and the /team index
  all read from, so a person only needs one profile no matter how many
  places they show up. To fill in a real advisor, find their entry (or
  a placeholder slug like `advisor-two`) and set:
  - `slug` to something URL-friendly, e.g. `jane-doe` (becomes
    `/author/jane-doe`)
  - `name`, `role`, and `bio`
  - `image` to `/assets/advisors/firstname-lastname.jpg`, once the file
    is dropped in this folder
  - if this person is also an advisor, make sure their slug is listed
    in the exported `ADVISOR_SLUGS` array in the same file
- Until `image` is set, the card and profile page both show the
  advisor's initials instead.
