
// Contentful integration utility
import { createClient } from 'contentful';

interface ContentfulConfig {
  space: string;
  accessToken: string;
  environment?: string;
}

interface BlogPost {
  sys: {
    id: string;
    createdAt: string;
    updatedAt: string;
  };
  fields: {
    title: string;
    slug: string;
    content: any; // Rich text content
    excerpt: string;
    publishDate: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    author?: string;
    tags?: string[];
  };
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

export async function getBlogPosts(limit = 10): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      limit,
      order: '-fields.publishDate'
    });

    return response.items as BlogPost[];
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

    return response.items[0] as BlogPost || null;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function getRelatedPosts(currentPostId: string, limit = 3): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'sys.id[ne]': currentPostId,
      limit,
      order: '-fields.publishDate'
    });

    return response.items as BlogPost[];
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

export type { BlogPost, ContentfulConfig };
