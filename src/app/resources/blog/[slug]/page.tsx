import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PostHeader } from "../components/post-header";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Martlet AI",
    };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.description || post.excerpt,
    alternates: {
      canonical: post.canonical || `/resources/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}



export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="pb-10 pt-[146px]">
      <PostHeader post={post} />
      <div className="container-main mx-auto prose prose-lg max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: (props) => {
              const { node, ...rest } = props;
              void node;
              return (
                <a
                  {...rest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary"
                />
              );
            },
            table: (props) => {
              const { node, ...rest } = props;
              void node;
              return (
                <div className="not-prose my-8 overflow-x-auto rounded-lg border border-gray-200">
                  <table
                    {...rest}
                    className="w-full border-collapse text-left text-base"
                  />
                </div>
              );
            },
            thead: (props) => {
              const { node, ...rest } = props;
              void node;
              return <thead {...rest} className="bg-gray-50" />;
            },
            th: (props) => {
              const { node, ...rest } = props;
              void node;
              return (
                <th
                  {...rest}
                  className="border-b border-r border-gray-200 px-5 py-3 font-semibold text-gray-900 last:border-r-0"
                />
              );
            },
            td: (props) => {
              const { node, ...rest } = props;
              void node;
              return (
                <td
                  {...rest}
                  className="border-b border-r border-gray-200 px-5 py-3 align-top text-gray-700 last:border-r-0"
                />
              );
            },
            tr: (props) => {
              const { node, ...rest } = props;
              void node;
              return <tr {...rest} className="last:[&>td]:border-b-0" />;
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
