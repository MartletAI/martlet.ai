import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  authors: string[];
  tag: string;
  thumbnail?: string;
  excerpt?: string;
  description?: string;
  metaTitle?: string;
  /** Optional canonical URL override (from **Canonical:** in post metadata); defaults to the post's own path. */
  canonical?: string;
  /** Optional schema.org DefinedTerm (from **DefinedTermName:** / **DefinedTermDescription:** in post metadata). */
  definedTerm?: { name: string; description: string };
  content: string;
}

const BLOG_DIR = path.join(process.cwd(), 'src/app/resources/blog/posts');

export function getBlogPosts(): BlogPost[] {
  // Ensure directory exists
  if (!fs.existsSync(BLOG_DIR)) {
    return [];
  }

  const files = fs.readdirSync(BLOG_DIR);
  const posts: BlogPost[] = [];

  for (const file of files) {
    if (!file.endsWith('.md')) continue;

    const source = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const slug = file.replace('.md', '');
    const post = parseMarkdown(source, slug);
    if (post) {
      posts.push(post);
    }
  }

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(filePath)) {
      return null;
    }
    const source = fs.readFileSync(filePath, 'utf-8');
    return parseMarkdown(source, slug);
  } catch {
    return null;
  }
}

function parseMarkdown(source: string, slug: string): BlogPost | null {
  try {
    const lines = source.split('\n');
    let title = '';
    let date = '';
    let thumbnail = '';
    let authors: string[] = [];
    let tag = '';
    let description = '';
    let metaTitle = '';
    let canonical = '';
    let definedTermName = '';
    let definedTermDescription = '';

    // First pass: Extract metadata
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line.startsWith('# ')) {
          title = line.substring(2).trim();
        } else if (line.startsWith('**Date:**')) {
          date = line.replace('**Date:**', '').trim();
        } else if (line.startsWith('**Thumbnail:**')) {
          thumbnail = line.replace('**Thumbnail:**', '').trim();
        } else if (line.startsWith('**Description:**')) {
          description = line.replace('**Description:**', '').trim();
        } else if (line.startsWith('**Tag:**')) {
          tag = line.replace('**Tag:**', '').trim();
        } else if (line.startsWith('**MetaTitle:**')) {
          metaTitle = line.replace('**MetaTitle:**', '').trim();
        } else if (line.startsWith('**Canonical:**')) {
          canonical = line.replace('**Canonical:**', '').trim();
        } else if (line.startsWith('**DefinedTermName:**')) {
          definedTermName = line.replace('**DefinedTermName:**', '').trim();
        } else if (line.startsWith('**DefinedTermDescription:**')) {
          definedTermDescription = line.replace('**DefinedTermDescription:**', '').trim();
        }
    }

    // Static authors for all posts
    authors = ['Ritwik Jain', 'Hasham Ul Haq'];
      
    // Second pass: Extract content body for excerpt
    const contentLines: string[] = [];
    let inMetadata = true;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (inMetadata) {
             if (line.startsWith('# ') || line.startsWith('**Date:**') || line.startsWith('**Thumbnail:**') || line.startsWith('**Description:**') || line.startsWith('**MetaTitle:**') || line.startsWith('**Canonical:**') || line.startsWith('**Tag:**') || line.startsWith('**DefinedTermName:**') || line.startsWith('**DefinedTermDescription:**') || line.startsWith('**Authors:**') || (line.startsWith('*') && (lines[i-1]?.trim().startsWith('**Authors:**') || lines[i-1]?.trim().startsWith('*')))) {
                 // Still in metadata
                 continue;
             }
             if (line === '') continue; // Skip empty lines in metadata section
             
             // If we hit something else, we are out of metadata
             inMetadata = false;
        }
        contentLines.push(lines[i]); 
    }

    const bodyText = contentLines.join('\n').trim();
    // Strip markdown image syntax, then markdown chars, for a clean excerpt
    const plainText = bodyText
      .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/[*#_\[\]]/g, '');
    const excerpt = plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;

    // Fallback if parsing fails or fields are missing
    if (!title) title = slug.replace(/-/g, ' '); 

    const definedTerm =
      definedTermName && definedTermDescription
        ? { name: definedTermName, description: definedTermDescription }
        : undefined;

    return {
      slug,
      title,
      date,
      authors,
      tag,
      thumbnail: thumbnail || undefined,
      description: description || undefined,
      metaTitle: metaTitle || undefined,
      canonical: canonical || undefined,
      definedTerm,
      excerpt: excerpt || undefined,
      content: bodyText,
    };
  } catch (e) {
    console.error(`Error parsing markdown for ${slug}:`, e);
    return null;
  }
}
