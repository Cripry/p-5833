
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishDate: string;
  featuredImage?: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Mock data for now - replace with Contentful API call
    const mockPosts: BlogPost[] = [
      {
        id: "1",
        title: "Finding Clarity in Business Chaos",
        slug: "finding-clarity-in-business-chaos",
        excerpt: "When everything feels urgent, nothing is clear. Learn how to cut through the noise and focus on what actually moves your business forward.",
        publishDate: "2024-01-15",
        featuredImage: "/lovable-uploads/2e0667a7-1fda-4b61-8923-e73440bd6015.png"
      },
      {
        id: "2",
        title: "The Power of Strategic Pausing",
        slug: "the-power-of-strategic-pausing",
        excerpt: "Sometimes the best action is no action. Discover why strategic pauses can be your most powerful business tool.",
        publishDate: "2024-01-10",
        featuredImage: "/lovable-uploads/e06c3313-0c03-4144-adcf-8f967601d5df.png"
      },
      {
        id: "3",
        title: "From Overwhelm to Breakthrough",
        slug: "from-overwhelm-to-breakthrough",
        excerpt: "Feeling stuck? Here's how to transform overwhelming complexity into clear, actionable steps that actually get results.",
        publishDate: "2024-01-05",
        featuredImage: "/lovable-uploads/beefa930-448f-40bc-86ac-7f7a019bc763.png"
      }
    ];

    // Simulate API call
    setTimeout(() => {
      setPosts(mockPosts);
      setLoading(false);
    }, 1000);
  }, []);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20 sm:pt-24">
        {/* Header Section */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-pulse-50 to-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="pulse-chip mx-auto mb-6">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">📝</span>
                <span>Clarity Insights</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                The Clarity Blog
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real strategies for focus, direction, and momentum. No fluff, just actionable insights.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="section-container">
            <div className="max-w-6xl mx-auto">
              {loading ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-2xl p-6 animate-pulse">
                      <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                      <div className="h-6 bg-gray-200 rounded mb-3"></div>
                      <div className="h-4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-8">
                  {posts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 cursor-pointer group">
                      <div onClick={() => handlePostClick(post.slug)}>
                        {post.featuredImage && (
                          <div className="w-full h-48 rounded-lg overflow-hidden mb-6">
                            <img 
                              src={post.featuredImage} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="space-y-4">
                          <div className="text-sm text-pulse-600 font-medium">
                            {formatDate(post.publishDate)}
                          </div>
                          
                          <h2 className="text-2xl font-bold text-gray-900 group-hover:text-pulse-600 transition-colors">
                            {post.title}
                          </h2>
                          
                          <p className="text-gray-600 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <Button 
                            variant="outline" 
                            className="mt-4 group-hover:bg-pulse-500 group-hover:text-white group-hover:border-pulse-500 transition-all"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePostClick(post.slug);
                            }}
                          >
                            Read More →
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
