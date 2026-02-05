import { getAuthorBySlug, getAllAuthors } from '@/lib/authors';
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
    openGraph: {
      title: `${author.name} - ${author.role}`,
      description: author.bio,
      images: [author.image],
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

  return (
    <main className="container-main mx-auto pt-[146px] pb-20">
       <Link href="/resources/blog" className="link-arrow group inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors mb-8">
        <Icon 
          name="arrow-left" 
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
        />
        Back to blog
      </Link>
      
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="shrink-0">
          <Image
            src={author.image}
            alt={author.name}
            width={300}
            height={300}
            className="rounded-xl shadow-lg object-cover w-full max-w-[300px] aspect-square"
          />
        </div>
        
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">{author.name}</h1>
          <p className="text-xl text-primary font-medium mb-2">{author.role}</p>
          <p className="text-sm text-gray-500 mb-6">Last updated: {author.lastUpdatedAt}</p>
          
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>{author.bio}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
