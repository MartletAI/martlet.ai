import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

interface TagFilterProps {
  posts: BlogPost[];
  activeTag?: string;
}

const BASE_PILL =
  "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors border";
const ACTIVE_PILL = "bg-[#0165dc] text-white border-[#0165dc]";
const INACTIVE_PILL = "bg-white text-[#3c3c43] border-border hover:border-[#0165dc] hover:text-[#0165dc]";

/**
 * TagFilter - "All" plus every tag in use, each with a live post count,
 * computed from the actual posts so a newly published tag appears here
 * automatically. Pills double as filter links via the ?tag= query param.
 */
export function TagFilter({ posts, activeTag }: TagFilterProps) {
  const counts = new Map<string, number>();
  for (const post of posts) {
    if (!post.tag) continue;
    counts.set(post.tag, (counts.get(post.tag) ?? 0) + 1);
  }

  const tags = Array.from(counts.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  if (tags.length === 0) return null;

  return (
    <nav aria-label="Filter posts by tag" className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
      <Link href="/resources/blog" className={`${BASE_PILL} ${!activeTag ? ACTIVE_PILL : INACTIVE_PILL}`}>
        All <span className="opacity-60">({posts.length})</span>
      </Link>
      {tags.map(([tag, count]) => (
        <Link
          key={tag}
          href={`/resources/blog?tag=${encodeURIComponent(tag)}`}
          className={`${BASE_PILL} ${activeTag === tag ? ACTIVE_PILL : INACTIVE_PILL}`}
        >
          {tag} <span className="opacity-60">({count})</span>
        </Link>
      ))}
    </nav>
  );
}
