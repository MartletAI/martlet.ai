import { BlogPost } from "@/lib/blog";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@/components/icon";

interface PostHeaderProps {
  post: BlogPost;
}

const AUTHORS = [
  { name: "Ritwik Jain", image: "/assets/blog/ritwik-jain.jpg" },
  { name: "Hasham Ul Haq", image: "/assets/blog/hasham-ul-haq.jpeg" },
];

export function PostHeader({ post }: PostHeaderProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: new Date(post.date).toISOString(),
    author: AUTHORS.map((author) => ({
      "@type": "Person",
      name: author.name,
    })),
    description: post.description || post.excerpt,
    image: post.thumbnail ? [post.thumbnail] : undefined,
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
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      
      {/* Back Link */}
      <Link href="/resources/blog" className="link-arrow group inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
        <Icon 
          name="arrow-left" 
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform" 
        />
        Back to blog
      </Link> 

      {/* Title */}
      <h1 className="mb-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight">
        {post.title}
      </h1>

      {/* Metadata */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 mb-10 not-prose border-b border-gray-200 dark:border-gray-800 pb-8">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4 rtl:space-x-reverse">
             {AUTHORS.map((author) => (
               <Image 
                 key={author.name}
                 className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" 
                 src={author.image} 
                 alt={author.name}
                 width={40}
                 height={40}
               />
             ))}
          </div>
          <span className="font-medium text-gray-900 dark:text-white">By {AUTHORS.map(a => a.name).join(", ")}</span>
        </div>
        <span className="hidden sm:inline text-gray-300 dark:text-gray-700 mx-2">•</span>
        <time dateTime={post.date}>{formattedDate}</time>
      </div>
    </div>
  );
}
