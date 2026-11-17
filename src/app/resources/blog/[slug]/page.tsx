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
  "how-healthcare-specific-language-models-are-transforming-hedis": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/how-healthcare-specific-language-models-are-transforming-hedis`,
      title: "How Healthcare-Specific Language Models Transform HEDIS & Stars | Martlet AI",
      description:
        "Enhance HEDIS and Stars performance with healthcare-specific NLP and LLMs that automate data extraction and improve quality reporting accuracy.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/how-healthcare-specific-language-models-are-transforming-hedis/how-healthcare-specific-language-models-are-transforming-hedis-infographic.jpg`,
          width: 1200,
          height: 647,
          alt: "How Martlet AI turns clinical data into HEDIS quality signals: unstructured clinical data becomes structured, auditable HEDIS/Stars evidence",
        },
      ],
      publishedTime: "2026-02-03T00:00:00Z",
      authors: [`${SITE_URL}/author/hasham-ul-haq`],
      section: "Product",
    },
    twitter: {
      card: "summary_large_image",
      title: "How Healthcare-Specific Language Models Transform HEDIS & Stars | Martlet AI",
      description:
        "Enhance HEDIS and Stars performance with healthcare-specific NLP and LLMs that automate data extraction and improve quality reporting accuracy.",
      images: [
        `${SITE_URL}/assets/blog/how-healthcare-specific-language-models-are-transforming-hedis/how-healthcare-specific-language-models-are-transforming-hedis-infographic.jpg`,
      ],
    },
  },
  "hcc-coding": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/hcc-coding`,
      title: "HCC Coding: Hierarchical Condition Categories Explained",
      description:
        "Learn what HCC coding is, how it supports risk adjustment, and why accurate Hierarchical Condition Category coding is essential for value-based healthcare payment models.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/hcc-coding/hcc-coding-infographic.jpg`,
          width: 1200,
          height: 647,
          alt: "Hierarchical Condition Category (HCC) coding maps documented diagnoses to risk-adjusted categories",
        },
      ],
      publishedTime: "2026-06-10T00:00:00Z",
      authors: [`${SITE_URL}/author/hasham-ul-haq`],
      section: "Insights",
    },
    twitter: {
      card: "summary_large_image",
      title: "HCC Coding: Hierarchical Condition Categories Explained",
      description:
        "Learn what HCC coding is, how it supports risk adjustment, and why accurate Hierarchical Condition Category coding is essential for value-based healthcare payment models.",
      images: [`${SITE_URL}/assets/blog/hcc-coding/hcc-coding-infographic.jpg`],
    },
  },
  "risk-adjustment-coding": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/risk-adjustment-coding`,
      title: "Risk Adjustment Coding | Martlet AI",
      description:
        "Learn how risk adjustment coding works, how RAF scores are calculated, and why accurate coding is critical for healthcare reimbursement.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/risk-adjustment-coding/risk-adjustment-coding-infographic.jpg`,
          width: 1200,
          height: 647,
          alt: "Risk adjustment coding translates documented diagnoses into risk-adjusted payment",
        },
      ],
      publishedTime: "2026-06-17T00:00:00Z",
      authors: [`${SITE_URL}/author/hasham-ul-haq`],
      section: "Insights",
    },
    twitter: {
      card: "summary_large_image",
      title: "Risk Adjustment Coding | Martlet AI",
      description:
        "Learn how risk adjustment coding works, how RAF scores are calculated, and why accurate coding is critical for healthcare reimbursement.",
      images: [`${SITE_URL}/assets/blog/risk-adjustment-coding/risk-adjustment-coding-infographic.jpg`],
    },
  },
  "ai-in-medical-coding-and-billing": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/ai-in-medical-coding-and-billing`,
      title: "AI in Medical Coding and Billing | Martlet AI",
      description:
        "Explore how artificial intelligence is transforming medical coding and billing, including automation, accuracy improvements, workflow impacts, and implementation challenges.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/ai-in-medical-coding-and-billing/ai-in-medical-coding-and-billing-infographic.jpg`,
          width: 1200,
          height: 628,
          alt: "Martlet AI across the HCC coding lifecycle: prospective capture, retrospective validation, and RADV audit readiness",
        },
      ],
      publishedTime: "2026-06-18T00:00:00Z",
      authors: [`${SITE_URL}/author/hasham-ul-haq`],
      section: "Insights",
    },
    twitter: {
      card: "summary_large_image",
      title: "AI in Medical Coding and Billing | Martlet AI",
      description:
        "Explore how artificial intelligence is transforming medical coding and billing, including automation, accuracy improvements, workflow impacts, and implementation challenges.",
      images: [`${SITE_URL}/assets/blog/ai-in-medical-coding-and-billing/ai-in-medical-coding-and-billing-infographic.jpg`],
    },
  },
  "ai-risk-adjustment-in-healthcare": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/ai-risk-adjustment-in-healthcare`,
      title: "AI Risk Adjustment in Healthcare | Martlet AI",
      description:
        "Learn how artificial intelligence is transforming risk adjustment in healthcare, including clinical documentation, coding accuracy, and prediction of patient risk scores.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/ai-risk-adjustment-in-healthcare/ai-risk-adjustment-in-healthcare-infographic.jpg`,
          width: 1200,
          height: 647,
          alt: "AI Risk Adjustment: from diagnosis capture to claim validation — Martlet Clinical NLP, larger population, real-time coding, denial prevention",
        },
      ],
      publishedTime: "2026-06-23T00:00:00Z",
      authors: [`${SITE_URL}/author/hasham-ul-haq`],
      section: "Insights",
    },
    twitter: {
      card: "summary_large_image",
      title: "AI Risk Adjustment in Healthcare | Martlet AI",
      description:
        "Learn how artificial intelligence is transforming risk adjustment in healthcare, including clinical documentation, coding accuracy, and prediction of patient risk scores.",
      images: [`${SITE_URL}/assets/blog/ai-risk-adjustment-in-healthcare/ai-risk-adjustment-in-healthcare-infographic.jpg`],
    },
  },
  "risk-adjustment-factor": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/risk-adjustment-factor`,
      title: "Risk Adjustment Factor (RAF) Scores | Martlet AI",
      description:
        "Learn what the Risk Adjustment Factor (RAF) is, how RAF scores are calculated using HCC coding, and why they matter for healthcare reimbursement.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/risk-adjustment-factor/risk-adjustment-factor-infographic.jpg`,
          width: 1200,
          height: 647,
          alt: "Risk Adjustment Factor (RAF) infographic",
        },
      ],
      publishedTime: "2026-06-25T00:00:00Z",
      authors: [`${SITE_URL}/author/hasham-ul-haq`],
      section: "Insights",
    },
    twitter: {
      card: "summary_large_image",
      title: "Risk Adjustment Factor (RAF) Scores | Martlet AI",
      description:
        "Learn what the Risk Adjustment Factor (RAF) is, how RAF scores are calculated using HCC coding, and why they matter for healthcare reimbursement.",
      images: [`${SITE_URL}/assets/blog/risk-adjustment-factor/risk-adjustment-factor-infographic.jpg`],
    },
  },
  "prospective-vs-retrospective-risk-adjustment": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/prospective-vs-retrospective-risk-adjustment`,
      title: "Prospective vs Retrospective Risk Adjustment | Martlet AI",
      description:
        "Learn the difference between prospective and retrospective risk adjustment, how each approach works, and how they affect RAF scores and healthcare reimbursement.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/prospective-vs-retrospective-risk-adjustment/prospective-vs-retrospective-risk-adjustment-infographic.jpg`,
          width: 1200,
          height: 647,
          alt: "Prospective vs Retrospective Risk Adjustment infographic",
        },
      ],
      publishedTime: "2026-06-30T00:00:00Z",
      authors: [`${SITE_URL}/author/ritwik-jain`],
      section: "Insights",
    },
    twitter: {
      card: "summary_large_image",
      title: "Prospective vs Retrospective Risk Adjustment | Martlet AI",
      description:
        "Learn the difference between prospective and retrospective risk adjustment, how each approach works, and how they affect RAF scores and healthcare reimbursement.",
      images: [
        `${SITE_URL}/assets/blog/prospective-vs-retrospective-risk-adjustment/prospective-vs-retrospective-risk-adjustment-infographic.jpg`,
      ],
    },
  },
  "hcc-v28": {
    openGraph: {
      type: "article",
      siteName: "Martlet AI",
      locale: "en_US",
      url: `${SITE_URL}/resources/blog/hcc-v28`,
      title: "HCC v28 Explained: Changes to the CMS Risk Adjustment Model",
      description:
        "Learn what HCC v28 is, how it differs from earlier HCC models, and how the new CMS risk adjustment model affects RAF scores and Medicare Advantage payments.",
      images: [
        {
          url: `${SITE_URL}/assets/blog/hcc-v28/hcc-v28-infographic.jpg`,
          width: 1200,
          height: 647,
          alt: "HCC v28 infographic",
        },
      ],
      publishedTime: "2026-07-02T00:00:00Z",
      authors: [`${SITE_URL}/author/hasham-ul-haq`],
      section: "Insights",
    },
    twitter: {
      card: "summary_large_image",
      title: "HCC v28 Explained: Changes to the CMS Risk Adjustment Model",
      description:
        "Learn what HCC v28 is, how it differs from earlier HCC models, and how the new CMS risk adjustment model affects RAF scores and Medicare Advantage payments.",
      images: [`${SITE_URL}/assets/blog/hcc-v28/hcc-v28-infographic.jpg`],
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
