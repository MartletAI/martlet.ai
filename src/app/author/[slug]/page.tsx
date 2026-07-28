import { getAuthorBySlug, getAllAuthors, initials } from '@/lib/authors';
import { getBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/icon';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return {
      title: 'Author Not Found | Martlet AI',
    };
  }

  return {
    title: `${author.name} | Martlet AI`,
    description: author.bio.substring(0, 160),
    alternates: {
      canonical: `/author/${slug}`,
    },
    openGraph: {
      title: `${author.name} - ${author.titles[0]}`,
      description: author.bio,
      images: author.image ? [author.image] : undefined,
    },
  };
}

export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export default async function AuthorPage({ params }: { params: Params }) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  // Derived from actual published posts, not a hand-set flag — an advisor
  // who later writes a post gets the right back-link the moment that post
  // exists, with nothing to remember to update on their profile entry.
  const hasPublished = getBlogPosts().some((post) => post.authors.includes(author.name));

  return (
    <main className="container-main mx-auto pt-[146px] pb-20">
       {/* Someone with no publishing history (an advisor, say) didn't arrive
           from the blog, so send them back to where a profile link like
           this actually lives. */}
       <Link
         href={hasPublished ? "/resources/blog" : "/about"}
         className="link-arrow group inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mb-8"
       >
        <Icon
          name="arrow-left"
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
        />
        {hasPublished ? "Back to blog" : "Back to About"}
      </Link>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="shrink-0">
          {author.image ? (
            <Image
              src={author.image}
              alt={author.name}
              width={300}
              height={300}
              className="rounded-xl shadow-lg object-cover w-full max-w-[300px] aspect-square"
            />
          ) : (
            <div
              className="rounded-xl shadow-lg w-full max-w-[300px] aspect-square bg-[#e9f1fe] text-[#0154b8] flex items-center justify-center text-5xl font-bold"
              aria-hidden
            >
              {initials(author.name)}
            </div>
          )}
        </div>

        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{author.name}</h1>
          <div className="flex flex-col gap-0.5 mb-2">
            {author.titles.map((title) => (
              <p key={title} className="text-xl text-primary font-medium m-0">
                {title}
              </p>
            ))}
          </div>
          {author.lastUpdatedAt && (
            <p className="text-sm text-gray-500 mb-6">Last updated: {author.lastUpdatedAt}</p>
          )}

          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>{author.bio}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
