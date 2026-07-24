import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  /** ISO date (YYYY-MM-DD). Use formatPostDate() to render it. */
  date: string;
  authors: string[];
  tag: string;
  thumbnail?: string;
  excerpt?: string;
  description?: string;
  metaTitle?: string;
  /** Optional canonical URL override (from frontmatter); defaults to the post's own path. */
  canonical?: string;
  /** Optional schema.org DefinedTerm (from frontmatter). */
  definedTerm?: { name: string; description: string };
  /** Raw MDX body. */
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content/blog');

export function getBlogPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const slugs = fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);

  const posts = slugs
    .map((slug) => getBlogPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null);

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, slug, 'index.mdx');
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const source = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(source);

    const body = content.trim();
    // Strip markdown image syntax, then markdown chars, for a clean excerpt
    const plainText = body
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/[*#_\[\]]/g, '');
    const excerpt = plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;

    const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date ?? '');

    return {
      slug,
      title: data.title || slug.replace(/-/g, ' '),
      date,
      authors: Array.isArray(data.authors) && data.authors.length > 0 ? data.authors : ['Hasham Ul Haq'],
      tag: data.tag || '',
      thumbnail: data.thumbnail || undefined,
      description: data.description || undefined,
      metaTitle: data.metaTitle || undefined,
      canonical: data.canonical || undefined,
      definedTerm: data.definedTerm || undefined,
      excerpt: excerpt || undefined,
      content: body,
    };
  } catch (e) {
    console.error(`Error parsing MDX for ${slug}:`, e);
    return null;
  }
}

/** Renders an ISO date (YYYY-MM-DD) as e.g. "July 2, 2026". */
export function formatPostDate(iso: string): string {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) return iso;
  return parsed.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
