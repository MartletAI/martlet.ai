import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PostHeader } from "../components/post-header";
import { CTA as SharedCTA } from "@/components/cta";
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
    <article className="pt-[132px] md:pt-[160px]">
      <PostHeader post={post} />
      <div className="container-main mx-auto prose prose-lg max-w-none mb-16 md:mb-20">
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
                  className="text-[#0165dc] hover:text-[#0154b8] underline decoration-[#0165dc]/30 underline-offset-4 transition-colors hover:decoration-[#0165dc]"
                />
              );
            },
            table: (props) => {
              const { node, ...rest } = props;
              void node;
              return (
                <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-border">
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
              return <thead {...rest} className="bg-[#f5f5f7]" />;
            },
            th: (props) => {
              const { node, ...rest } = props;
              void node;
              return (
                <th
                  {...rest}
                  className="border-b border-r border-border px-5 py-3 font-semibold text-[#0a0a12] last:border-r-0"
                />
              );
            },
            td: (props) => {
              const { node, ...rest } = props;
              void node;
              return (
                <td
                  {...rest}
                  className="border-b border-r border-border px-5 py-3 align-top text-[#3c3c43] last:border-r-0"
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

      <SharedCTA
        title="Bring your charts. We'll show you the evidence."
        subtitle="Talk to us"
        description="A working session: watch the engine run inside your environment, and see every regulatory claim on this site demonstrated on your own data."
        submitLabel="Schedule a walkthrough"
        backgroundColor="bg-white"
      />
    </article>
  );
}
