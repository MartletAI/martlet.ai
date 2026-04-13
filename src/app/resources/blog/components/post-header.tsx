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

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [articleLd, breadcrumbLd],
  };

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="container-main mx-auto prose prose-lg max-w-none mb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: safeJsonLdStringify(jsonLd),
        }}
      />
      
      {/* Back Link */}
      <Link href="/resources/blog" className="link-arrow group inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
        <Icon 
          name="arrow-left" 
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
        />
        Back to blog
      </Link> 

      {/* Title */}
      <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
        {post.title}
      </h1>

      {/* Metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 mb-10 not-prose border-b border-gray-200 pb-8">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4 rtl:space-x-reverse">
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
          <span className="font-medium text-gray-900">
            By {authors.map((author, index) => author && (
              <span key={author.name}>
                <Link href={`/author/${author.slug}`} className="hover:text-primary hover:underline">
                  {author.name}
                </Link>
                {index < authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </span>
        </div>
        <span className="hidden sm:inline text-gray-300 mx-2">•</span>
        <time dateTime={post.date}>{formattedDate}</time>
      </div>
    </div>
  );
}
