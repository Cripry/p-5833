
// Contentful integration utility
// Install contentful package: npm install contentful

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

// Mock configuration - replace with actual Contentful credentials
const CONTENTFUL_CONFIG: ContentfulConfig = {
  space: 'your-space-id',
  accessToken: 'your-access-token',
  environment: 'master'
};

// Uncomment when ready to integrate with Contentful
/*
import { createClient } from 'contentful';

const client = createClient({
  space: CONTENTFUL_CONFIG.space,
  accessToken: CONTENTFUL_CONFIG.accessToken,
  environment: CONTENTFUL_CONFIG.environment
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
*/

// Mock functions for development
export async function getBlogPosts(limit = 10) {
  // Return mock data for now
  return [];
}

export async function getBlogPost(slug: string) {
  // Return mock data for now
  return null;
}

export async function getRelatedPosts(currentPostId: string, limit = 3) {
  // Return mock data for now
  return [];
}

// Helper function to convert Contentful rich text to HTML
export function richTextToHtml(richText: any): string {
  // This would typically use @contentful/rich-text-html-renderer
  // For now, return the content as-is
  return richText?.content || '';
}

// Helper function to get image URL from Contentful asset
export function getImageUrl(asset: any): string {
  return asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : '';
}

export type { BlogPost, ContentfulConfig };
