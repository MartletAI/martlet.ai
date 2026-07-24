import { BlogPost } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";
import { getAuthorByName } from "@/lib/authors";
import { absoluteMartletUrl, safeJsonLdStringify, SITE_ORIGIN } from "@/lib/json-ld";

interface PostHeaderProps {
  post: BlogPost;
}

/** Front matter uses MM.DD.YYYY (e.g. 02.03.2026) for schema.org date fields. */
function datePublishedISO(dateStr: string): string {
  const mdY = dateStr.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (mdY) {
    const [, month, day, year] = mdY;
    return `${year}-${month}-${day}`;
  }
  const parsed = new Date(dateStr);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }
  return dateStr;
}

export function PostHeader({ post }: PostHeaderProps) {
  // Map author names to author objects
  const authors = post.authors?.map(name => getAuthorByName(name)).filter(Boolean) || [];

  const articleUrl = `${SITE_ORIGIN}/resources/blog/${post.slug}`;
  const articleLd: Record<string, unknown> = {
    "@type": "Article",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    headline: post.title,
    datePublished: datePublishedISO(post.date),
    author: authors.map((author) => ({
      "@type": "Person",
      name: author!.name,
      url: `${SITE_ORIGIN}/author/${author!.slug}`,
    })),
  };

  if (post.description || post.excerpt) {
    articleLd.description = post.description || post.excerpt;
  }
  if (post.thumbnail) {
    articleLd.image = [absoluteMartletUrl(post.thumbnail)];
  }

  const breadcrumbLd = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_ORIGIN}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_ORIGIN}/resources/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: articleUrl,
      },
    ],
  };

  const graph: Record<string, unknown>[] = [articleLd, breadcrumbLd];
  if (post.definedTerm) {
    graph.push({
      "@type": "DefinedTerm",
      "@id": `${articleUrl}#defined-term`,
      name: post.definedTerm.name,
      description: post.definedTerm.description,
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container-main mx-auto mb-10 md:mb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdStringify(jsonLd),
        }}
      />

      {/* Back Link */}
      <Link
        href="/resources/blog"
        className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#0165dc] hover:gap-2.5 transition-all mb-8"
      >
        <Icon
          name="arrow-left"
          className="size-4 group-hover:-translate-x-0.5 transition-transform"
        />
        Back to blog
      </Link>

      {/* Title */}
      <h1 className="apple-display text-[32px] md:text-[48px] leading-[1.1] mb-6 max-w-[900px]">
        {post.title}
      </h1>

      {/* Metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-2 mb-10 md:mb-12 border-b border-border pb-8">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3 rtl:space-x-reverse">
             {authors.map((author) => author && (
               <Link key={author.name} href={`/author/${author.slug}`}>
                 <Image
                   className="w-10 h-10 border-2 border-white rounded-full transition-transform hover:scale-110"
                   src={author.image}
                   alt={author.name}
                   width={40}
                   height={40}
                 />
               </Link>
             ))}
          </div>
          <span className="text-sm font-semibold text-[#0a0a12]">
            By {authors.map((author, index) => author && (
              <span key={author.name}>
                <Link href={`/author/${author.slug}`} className="hover:text-[#0165dc] hover:underline transition-colors">
                  {author.name}
                </Link>
                {index < authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        </div>
        <span className="hidden sm:inline text-[#d1d1d6] mx-2">•</span>
        <time dateTime={post.date} className="text-sm apple-caption">
          {formattedDate}
        </time>
      </div>

      {/* Hero image */}
      {post.thumbnail && (
        <div className="relative w-full aspect-16/9 rounded-3xl border border-border overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="(min-width: 1240px) 1160px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      )}
    </div>
  );
}
