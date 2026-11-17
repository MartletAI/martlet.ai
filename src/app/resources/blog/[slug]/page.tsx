import { getBlogPostBySlug, getBlogPosts, extractHeadings } from "@/lib/blog";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { PostHeader } from "../components/post-header";
import { PostSidebar } from "../components/post-sidebar";
import { mdxComponents } from "../components/mdx-components";
import { Metadata } from "next";

type Params = Promise<{ slug: string }>;

// Per-post Open Graph / Twitter tags. Posts not listed here keep the site-wide defaults from the root layout.
const SITE_URL = "https://martlet.ai";
const OPEN_GRAPH_BY_SLUG: Record<string, Pick<Metadata, "openGraph" | "twitter">> = {
  "radv-audit-readiness-for-health-plans": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/radv-audit-readiness-for-health-plans`,
      title: "RADV Audit Readiness for Health Plans | Martlet AI",
      description:
        "Strengthen RADV audit readiness with Martlet AI's AI-driven workflows, reducing financial risks and improving documentation accuracy for health plans.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/radv-audit-readiness-for-health-plans/radv-audit-readiness-for-health-plans-infographic.jpg`,
          width: 1200,
          height: 628,
          alt: "How Martlet AI makes HCCs audit-ready: HCC match, MEAT support, source citation, and packet validity turn diagnosis data into defensible, CMS-ready evidence",
        },
      ],
      publishedTime: "2025-12-15T00:00:00Z",
      authors: [`${SITE_URL}/author/hasham-ul-haq`],
      section: "Product",
    },
    twitter: {
      card: "summary_large_image",
      title: "RADV Audit Readiness for Health Plans | Martlet AI",
      description:
        "Strengthen RADV audit readiness with Martlet AI's AI-driven workflows, reducing financial risks and improving documentation accuracy for health plans.",
      images: [
        `${SITE_URL}/assets/blog/radv-audit-readiness-for-health-plans/radv-audit-readiness-for-health-plans-infographic.jpg`,
      ],
    },
  },
  "radv-audit-readiness-what-compliance-teams-should-ask-their-vendors": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors`,
      title: "Key Questions Compliance Teams Should Ask Their Vendors | Martlet AI",
      description:
        "Ensure your HCC coding platform is audit-ready with Martlet AI's guide to RADV audit readiness. Learn key questions to ask vendors and improve compliance.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors-infographic.jpg`,
          width: 1200,
          height: 628,
          alt: "Martlet AI RADV Readiness: 100% traceability, HCC V28 current rules, and 10 years of audit logs — every coding decision should stand up to audit",
        },
      ],
      publishedTime: "2025-12-15T00:00:00Z",
      authors: [`${SITE_URL}/author/ritwik-jain`],
      section: "Product",
    },
    twitter: {
      card: "summary_large_image",
      title: "Key Questions Compliance Teams Should Ask Their Vendors | Martlet AI",
      description:
        "Ensure your HCC coding platform is audit-ready with Martlet AI's guide to RADV audit readiness. Learn key questions to ask vendors and improve compliance.",
      images: [
        `${SITE_URL}/assets/blog/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors/radv-audit-readiness-what-compliance-teams-should-ask-their-vendors-infographic.jpg`,
      ],
    },
  },
};

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
    ...OPEN_GRAPH_BY_SLUG[slug],
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

  const allPosts = getBlogPosts();
  const latestPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 4);
  const headings = extractHeadings(post.content);

  return (
    <article className="pt-[132px] md:pt-[160px]">
      <PostHeader post={post} />
      <div className="container-main mx-auto mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10 lg:gap-16 items-start">
        <div className="min-w-0 flex flex-col gap-8 md:gap-10">
          <div className="prose prose-lg post-prose max-w-none">
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
        </div>

        <PostSidebar headings={headings} tag={post.tag} latestPosts={latestPosts} />
      </div>
    </article>
  );
}
