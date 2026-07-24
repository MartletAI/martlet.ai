import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost, Heading } from "@/lib/blog";
import { formatPostDate } from "@/lib/blog";
import { cn } from "@/lib/utils";
import { TableOfContents } from "./table-of-contents";

interface PostSidebarProps {
  headings: Heading[];
  currentTag?: string;
  allTags: string[];
  latestPosts: BlogPost[];
}

/**
 * PostSidebar - page outline, tags (filters back to the listing), and a
 * handful of recent posts, so a reader has somewhere to go — within the
 * page and beyond it — instead of just hitting the CTA.
 */
export function PostSidebar({ headings, currentTag, allTags, latestPosts }: PostSidebarProps) {
  const sections = [
    headings.length > 0 ? <TableOfContents headings={headings} /> : null,
    allTags.length > 0 ? (
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a12] mb-4">
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
                  : "bg-white text-[#3c3c43] hover:bg-[#e9e9ec]"
              )}
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>
    ) : null,
    latestPosts.length > 0 ? (
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#0a0a12] mb-4">
          Latest posts
        </p>
        <div className="flex flex-col gap-5">
          {latestPosts.map((post) => (
            <Link key={post.slug} href={`/resources/blog/${post.slug}`} className="group flex gap-4">
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
    ) : null,
  ].filter((section): section is React.JSX.Element => section !== null);

  if (sections.length === 0) return null;

  return (
    <aside className="lg:sticky lg:top-[100px] rounded-2xl bg-[#f5f5f7] p-6 flex flex-col gap-6">
      {sections.map((section, index) => (
        <Fragment key={index}>
          {index > 0 && <div className="border-t border-border" />}
          {section}
        </Fragment>
      ))}
    </aside>
  );
}
