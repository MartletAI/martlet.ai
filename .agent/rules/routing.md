# Next.js App Router Routing Conventions

Follow these routing patterns for the Martlet.ai website.

## Directory Structure

```
src/app/
├── page.tsx                              # martlet.ai (homepage)
├── solutions/
│   ├── page.tsx                          # martlet.ai/solutions (optional index)
│   ├── retrospective-risk-adjustment/
│   │   └── page.tsx                      # martlet.ai/solutions/retrospective-risk-adjustment
│   ├── prospective-risk-adjustment/
│   │   └── page.tsx                      # martlet.ai/solutions/prospective-risk-adjustment
│   └── radv/
│       └── page.tsx                      # martlet.ai/solutions/radv
├── blogs/
│   ├── page.tsx                          # martlet.ai/blogs (blog listing)
│   ├── [slug]/
│   │   └── page.tsx                      # Dynamic route for individual blogs
│   └── *.tsx                             # Individual blog files (add new blogs here)
```

## Rules

### Solutions
- Each solution gets its own folder under `src/app/solutions/`
- Folder name = URL slug (use kebab-case)
- Each solution folder contains a `page.tsx`

### Blogs
- All blogs live under `src/app/blogs/`
- Use dynamic routing with `[slug]` for individual blog pages
- Add new blog content files directly in the `blogs/` directory
- Blog listing page at `src/app/blogs/page.tsx`

### URL Patterns
| Route | File Path |
|-------|-----------|
| `/` | `src/app/page.tsx` |
| `/solutions/[name]` | `src/app/solutions/[name]/page.tsx` |
| `/blogs` | `src/app/blogs/page.tsx` |
| `/blogs/[slug]` | `src/app/blogs/[slug]/page.tsx` |

### Adding New Content
- **New Solution**: Create folder `src/app/solutions/[solution-name]/page.tsx`
- **New Blog**: Add content file to `src/app/blogs/` and ensure dynamic route handles it
