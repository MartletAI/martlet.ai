---
name: blog-authoring
description: Write or edit a Martlet AI blog post (content/blog/<slug>/index.mdx). Use when asked to "write a blog post", "add a new post", "edit a blog post", or anything touching content/blog/.
metadata:
  author: martlet-ai
  version: "1.0"
---

# Blog post authoring (MDX)

Every post is `content/blog/<slug>/index.mdx` — one folder per post, frontmatter + MDX body. This is the current pipeline (`gray-matter` + `next-mdx-remote/rsc`), not the old plain-`.md` format.

## Frontmatter

```yaml
---
title: string
date: 'YYYY-MM-DD'               # quoted string, not a bare YAML date
tag: string                      # e.g. "Insights", "Product" — powers the tag filter pills
thumbnail: /assets/blog/<slug>/cover.jpg     # optional — see "Thumbnail image" below
thumbnailFocus: "top"            # optional — crop focus point, see below. Default: center
description: string              # meta description
metaTitle: string                # <title> tag override
authors:
- Hasham Ul Haq                  # optional, defaults to ["Hasham Ul Haq"] if omitted
canonical: string                # optional canonical URL override
definedTerm:                     # optional schema.org DefinedTerm
  name: string
  description: string
---
```

Source of truth: `src/lib/blog.ts` (`BlogPost` interface + `getBlogPostBySlug`). If a field isn't in that interface, it's silently ignored — check there before inventing a new frontmatter field.

## Thumbnail image — READ THIS BEFORE PICKING A PHOTO

`thumbnail` is used in **three** automated places, all sharing **one fixed crop ratio of 16:9** — the site's single thumbnail standard (also used by brochure cards):
- Blog listing grid card
- Featured/latest post banner (both mobile and desktop)

It is rendered with `object-fit: cover`, so the image is never stretched or squeezed — but it **will be cropped** to fit 16:9. To avoid fighting the crop:

- **Best source image ratio: 16:9** (e.g. 1920×1080, 1600×900). Exact match → zero cropping.
- Avoid tall/portrait images or square screenshots as thumbnails — they'll get aggressively cropped on the sides.
- If the image's important content isn't centered (a diagram with labels near an edge, a person off to one side), set `thumbnailFocus` to shift the crop's focal point instead of re-cropping the source file:
  ```yaml
  thumbnailFocus: "top"        # or "bottom", "left", "right"
  thumbnailFocus: "30% 70%"    # or precise CSS object-position
  ```
  Default (unset) is `center`.

**Separately**, the sidebar's "Latest posts" list uses the *same* image but crops it to a small **1:1 square** (80×80) — a deliberately different, smaller format, not part of the 16:9 set. `thumbnailFocus` applies there too, same value, same purpose.

If `thumbnail` is omitted, the post just has no image in the grid/featured slot — that's valid, not an error.

## Images inside the post body

**Nothing is auto-inserted.** The thumbnail is not automatically placed at the top of the post — if you want an image at the start (or anywhere), add it yourself with normal markdown:

```markdown
![Descriptive alt text](/assets/blog/<slug>/photo.jpg)
```

Body images render at their **true aspect ratio, uncropped** — full width, height auto. This is a completely different rendering path from the thumbnail (plain `<img>`, not the cropped `object-cover` containers above), so there's no ratio constraint to worry about here. Use whatever size looks right.

Image files live in `public/assets/blog/<slug>/` — same slug as the content folder.

## Headings & References

- Every `##` (H2) heading auto-populates the "On this page" sidebar nav and gets a colored badge. This includes a References section if you add one — nothing special required:
  ```markdown
  ## References
  1. [Source name](https://...)
  2. [Source name](https://...)
  ```
- `###` (H3) headings are styled but not added to the nav.

## Custom components (drop directly into the MDX body)

| Use case | Syntax |
|---|---|
| Image + text, side by side | `<SideBySide image="/assets/blog/<slug>/x.png" imageAlt="..." imagePosition="left">text</SideBySide>` — `imagePosition`: `"left"` \| `"right"` (default right). Stacks to one column on mobile. Image side is cropped to a fixed 4:3 (independent of the thumbnail ratio above). |
| Bold stat numbers | `<StatRow stats={[{ value: "94%", label: "Accuracy" }]} />` |
| Pulled quote / big fact | `<PullQuote attribution="CMS, 2026">The quote.</PullQuote>` (`attribution` optional) |
| Highlighted callout box | `<FactCallout label="Why it matters">Text.</FactCallout>` (`label` optional, defaults to "Why it matters") |
| FAQ accordion (+ FAQPage SEO schema) | `<FaqAccordion items={[{ question: "...", answer: "..." }]} />` |
| Inline citation link | `<SourceLink href="https://...">CMS, 2026</SourceLink>` |

Component source: `src/components/blog-mdx/`. Props with arrays/objects (`stats`, `items`) need `{}` JS-expression syntax exactly as shown — this is MDX, not plain Markdown, for these lines.

## Layout rules — what's supported and what isn't

- **Full-width text**: normal paragraphs, no wrapper needed.
- **Table**: normal markdown table, always renders full width, styled automatically.
- **Image \| text, then full-width text below**: works fine — close `</SideBySide>` and keep writing normally underneath.
- **Text \| text (two columns of prose)**: **not supported.** No component exists for this. A 2-column markdown table can fake it for short content, but it will render and behave like an actual table (borders, horizontal scroll on mobile instead of stacking) — don't use it for long paragraphs. Ask for a `TwoColumn` component to be built if this comes up for real, don't hand-roll raw HTML/JSX in the post.

## Common mistakes

- Writing `date: 2026-07-16` unquoted — quote it (`date: '2026-07-16'`), YAML will otherwise parse it as a Date object with subtly different downstream handling.
- Assuming the thumbnail appears automatically at the top of the post body — it doesn't. Add it explicitly if you want it there.
- Using a tall/portrait or square image as `thumbnail` and expecting it to look right uncropped in the grid — it will be cropped to 1.91:1. Pick a wide source image or set `thumbnailFocus`.
- Adding a new frontmatter field without adding it to `BlogPost` in `src/lib/blog.ts` first — it'll be silently dropped, not an error, so it can look like it worked when it didn't.
