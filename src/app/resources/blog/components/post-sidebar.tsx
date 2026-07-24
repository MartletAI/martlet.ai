import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";
import { cn } from "@/lib/utils";

interface PostSidebarProps {
  currentTag?: string;
  allTags: string[];
  latestPosts: BlogPost[];
}

/**
 * PostSidebar - tags (filters back to the listing) and a handful of
 * recent posts, so a reader has somewhere to go next instead of just
 * hitting the CTA.
 */
export function PostSidebar({ currentTag, allTags, latestPosts }: PostSidebarProps) {
  return (
    <aside className="lg:sticky lg:top-[100px] flex flex-col gap-10">
      {allTags.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-4">
            Tags
          </p>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Link
                key={tag}
                href={`/resources/blog?tag=${encodeURIComponent(tag)}`}
                className={cn(
                  "inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors",
                  tag === currentTag
                    ? "bg-[#0165dc] text-white"
                    : "bg-[#f5f5f7] text-[#3c3c43] hover:bg-[#e9e9ec]"
                )}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

      {latestPosts.length > 0 && (
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-muted mb-4">
            Latest posts
          </p>
          <div className="flex flex-col gap-5">
            {latestPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group flex gap-4"
              >
                {post.thumbnail && (
                  <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden border border-border">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="min-w-0 flex flex-col justify-center">
                  <p className="text-[15px] font-semibold text-[#0a0a12] leading-snug line-clamp-2 group-hover:text-[#0165dc] transition-colors">
                    {post.title}
                  </p>
                  <p className="text-xs apple-caption mt-1.5">{formatPostDate(post.date)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
