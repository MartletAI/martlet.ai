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
        } else if (line.startsWith('**Tag:**')) {
          tag = line.replace('**Tag:**', '').trim();
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
             if (line.startsWith('# ') || line.startsWith('**Date:**') || line.startsWith('**Thumbnail:**') || line.startsWith('**Description:**') || line.startsWith('**MetaTitle:**') || line.startsWith('**Tag:**') || line.startsWith('**Authors:**') || (line.startsWith('*') && (lines[i-1]?.trim().startsWith('**Authors:**') || lines[i-1]?.trim().startsWith('*')))) {
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
    // Strip markdown chars for excerpt roughly
    const plainText = bodyText.replace(/[*#_\[\]]/g, '');
    const excerpt = plainText.length > 150 ? plainText.substring(0, 150) + '...' : plainText;

    // Fallback if parsing fails or fields are missing
    if (!title) title = slug.replace(/-/g, ' '); 

    return {
      slug,
      title,
      date,
      authors,
      tag,
      thumbnail: thumbnail || undefined,
      description: description || undefined,
      metaTitle: metaTitle || undefined,
      excerpt: excerpt || undefined,
      content: bodyText,
    };
  } catch (e) {
    console.error(`Error parsing markdown for ${slug}:`, e);
    return null;
  }
}
