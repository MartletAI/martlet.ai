import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { PostHeader } from "../components/post-header";
import { mdxComponents } from "../components/mdx-components";
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
        <MDXRemote
          source={post.content}
          components={mdxComponents}
          options={{
            mdxOptions: { remarkPlugins: [remarkGfm] },
            // Content is authored by us, not user-submitted — component props
            // like stats={[...]} need JS expressions to work. Keep the
            // dangerous-globals guard on regardless.
            blockJS: false,
            blockDangerousJS: true,
          }}
        />
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
