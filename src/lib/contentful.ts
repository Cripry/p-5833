
// Contentful integration utility
import { createClient } from 'contentful';

interface ContentfulConfig {
  space: string;
  accessToken: string;
  environment?: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishDate: string;
  featuredImage?: string;
  author?: string;
  tags?: string[];
}

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
}

// Contentful configuration with your preview API key
const CONTENTFUL_CONFIG: ContentfulConfig = {
  space: 'your-space-id', // You'll need to replace this with your actual space ID
  accessToken: 'L49V04ZYhPDy_2QJBV7TO2a6ifGs2glarR37qqxm4sg',
  environment: 'master'
};

const client = createClient({
  space: CONTENTFUL_CONFIG.space,
  accessToken: CONTENTFUL_CONFIG.accessToken,
  environment: CONTENTFUL_CONFIG.environment || 'master'
});

// Helper function to transform Contentful entry to BlogPost
function transformContentfulEntry(entry: any): BlogPost {
  const fields = entry.fields;
  return {
    id: entry.sys.id,
    title: fields.title || '',
    slug: fields.slug || '',
    content: richTextToHtml(fields.content) || '',
    excerpt: fields.excerpt || '',
    publishDate: fields.publishDate || entry.sys.createdAt,
    featuredImage: getImageUrl(fields.featuredImage),
    author: fields.author || '',
    tags: fields.tags || []
  };
}

export async function getBlogPosts(limit = 10): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      limit,
      order: ['-fields.publishDate'] // Fixed: now it's an array
    });

    return response.items.map(transformContentfulEntry);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1
    });

    if (response.items.length === 0) return null;
    return transformContentfulEntry(response.items[0]);
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getRelatedPosts(currentPostId: string, limit = 3): Promise<RelatedPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'sys.id[ne]': currentPostId,
      limit,
      order: ['-fields.publishDate'] // Fixed: now it's an array
    });

    return response.items.map((entry: any) => ({
      id: entry.sys.id,
      title: entry.fields.title || '',
      slug: entry.fields.slug || ''
    }));
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

// Helper function to convert Contentful rich text to HTML
export function richTextToHtml(richText: any): string {
  if (!richText) return '';
  
  // Basic rich text to HTML conversion
  // You may want to use @contentful/rich-text-html-renderer for more complex content
  if (richText.content) {
    return richText.content.map((node: any) => {
      if (node.nodeType === 'paragraph') {
        const text = node.content.map((textNode: any) => textNode.value).join('');
        return `<p>${text}</p>`;
      }
      return '';
    }).join('');
  }
  
  return richText?.content || '';
}

// Helper function to get image URL from Contentful asset
export function getImageUrl(asset: any): string {
  return asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : '';
}

export type { BlogPost, ContentfulConfig, RelatedPost };
