import Link from "next/link";
import Image from "next/image";
import { getBlogPosts, formatPostDate, type BlogPost } from "@/lib/blog";
import { Icon } from "@/components";
import { Reveal } from "@/components/reveal";
import { TagFilter } from "./tag-filter";

/**
 * Every thumbnail crop — card grid, mobile-featured, desktop-featured, and
 * the sidebar's "Latest posts" list — shares this one aspect ratio, so a
 * post's photo produces the same crop wherever it lands as newer posts push
 * it around the page. Close to the images' native ~1.9:1, and matches the
 * standard 1.91:1 OG/social preview ratio.
 */
const THUMBNAIL_RATIO = "aspect-[1.91/1]";

function authorSlug(name: string): string {
  if (name === "Hasham Ul Haq") return "hasham-ul-haq";
  if (name === "Ritwik Jain") return "ritwik-jain";
  return "#";
}

function Byline({ post }: { post: BlogPost }) {
  return (
    <p className="text-xs apple-caption flex flex-wrap items-center gap-1">
      {post.authors?.map((authorName, index) => (
        <span key={authorName}>
          <Link
            href={`/author/${authorSlug(authorName)}`}
            className="hover:text-[#0a0a12] hover:underline transition-colors"
          >
            {authorName}
          </Link>
          {index < (post.authors?.length ?? 0) - 1 ? "," : ""}
        </span>
      ))}
      <span aria-hidden="true">·</span>
      <span>{formatPostDate(post.date)}</span>
    </p>
  );
}

function PostCard({ post }: { post: BlogPost }) {
  return (
    <li className="rounded-2xl bg-white border border-border overflow-hidden flex flex-col h-full">
      {post.thumbnail && (
        <Link
          href={`/resources/blog/${post.slug}`}
          className={`relative block w-full ${THUMBNAIL_RATIO} overflow-hidden`}
          aria-label={post.title}
        >
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 100vw"
            className="object-cover"
            style={{ objectPosition: post.thumbnailFocus || "center" }}
          />
          {post.tag && (
            <span className="absolute top-3 left-3 eyebrow-chip bg-white/90 text-[#0a0a12] backdrop-blur-sm text-[10px] py-1 px-2.5">
              {post.tag}
            </span>
          )}
        </Link>
      )}

      <div className="flex flex-col flex-1 p-6">
        <p className="text-xs apple-caption mb-2">{formatPostDate(post.date)}</p>

        <h3 className="text-base font-bold tracking-tight text-[#0a0a12] leading-snug mb-2 line-clamp-2">
          <Link href={`/resources/blog/${post.slug}`} className="hover:text-[#0165dc] transition-colors">
            {post.title}
          </Link>
        </h3>

        <p className="text-sm apple-body leading-relaxed line-clamp-2 mb-4 grow">
          {post.excerpt || "Click to read more..."}
        </p>

        <Link
          href={`/resources/blog/${post.slug}`}
          className="text-sm font-semibold text-[#0165dc] flex items-center gap-1.5 hover:gap-2 transition-all mt-auto"
        >
          Read post
          <Icon name="arrow-up-right" className="size-3.5" />
        </Link>
      </div>
    </li>
  );
}

interface BlogsProps {
  /** When set, shows only posts with this tag instead of the featured + grid layout. */
  activeTag?: string;
}

export function Blogs({ activeTag }: BlogsProps) {
  const allPosts = getBlogPosts();

  if (activeTag) {
    const posts = allPosts.filter((post) => post.tag === activeTag);

    return (
      <section className="apple-section-gray pt-[132px] md:pt-[160px] pb-16 md:pb-20" aria-labelledby="blog-heading">
        <div className="container-main">
          <h1 id="blog-heading" className="text-[26px] md:text-[32px] font-bold tracking-tight text-[#0a0a12] mb-6 text-center">
            Blog
          </h1>

          <TagFilter posts={allPosts} activeTag={activeTag} />

          {posts.length > 0 ? (
            <Reveal
              as="ul"
              stagger
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0"
            >
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </Reveal>
          ) : (
            <p className="text-center apple-body">No posts tagged &ldquo;{activeTag}&rdquo; yet.</p>
          )}
        </div>
      </section>
    );
  }

  const [featured, ...rest] = allPosts;

  if (!featured) return null;

  return (
    <section className="apple-section-gray pt-[132px] md:pt-[160px] pb-16 md:pb-20" aria-labelledby="blog-heading">
      <div className="container-main">
        <h1 id="blog-heading" className="text-[26px] md:text-[32px] font-bold tracking-tight text-[#0a0a12] mb-6 text-center">
          Blog
        </h1>

        <TagFilter posts={allPosts} />

        {/* Latest post, featured */}
        <Reveal className="mb-10 md:mb-12">
          <Link
            href={`/resources/blog/${featured.slug}`}
            className="group grid grid-cols-1 md:grid-cols-2 rounded-3xl bg-white border border-border overflow-hidden"
          >
            {featured.thumbnail && (
              <div className={`relative w-full self-start ${THUMBNAIL_RATIO} overflow-hidden`}>
                <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: featured.thumbnailFocus || "center" }}
                  priority
                />
                {featured.tag && (
                  <span className="absolute top-4 left-4 eyebrow-chip bg-white/90 text-[#0a0a12] backdrop-blur-sm text-[11px] py-1 px-3">
                    {featured.tag}
                  </span>
                )}
              </div>
            )}
            <div className="flex flex-col justify-center p-6 md:p-9">
              <Byline post={featured} />
              <h2 className="apple-display text-[22px] md:text-[28px] leading-snug mt-3 mb-3 group-hover:text-[#0165dc] transition-colors">
                {featured.title}
              </h2>
              <p className="text-[15px] apple-body leading-relaxed line-clamp-3 mb-5">
                {featured.excerpt || "Click to read more..."}
              </p>
              <span className="text-sm font-semibold text-[#0165dc] flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                Read post
                <Icon name="arrow-up-right" className="size-3.5" />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Earlier posts */}
        {rest.length > 0 && (
          <Reveal
            as="ul"
            stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0 m-0"
          >
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </Reveal>
        )}
      </div>
    </section>
  );
}
