
import React, { useEffect, useState } from "react";
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

const LatestBlogPosts = () => {
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
        featuredImage: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png"
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

    // Simulate API call and get latest 3 posts
    setTimeout(() => {
      setPosts(mockPosts.slice(0, 3));
      setLoading(false);
    }, 500);
  }, []);

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="pulse-chip mx-auto mb-4 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">🆕</span>
              <span>Latest From the Blog</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Fresh Clarity Insights
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Real strategies, actionable insights, and practical wisdom for focused growth.
            </p>
          </div>

          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-elegant animate-pulse">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              ))}
            </div>
          ) : (
            <>
              {/* Desktop: 3 column grid */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 cursor-pointer group">
                    <div onClick={() => handlePostClick(post.slug)}>
                      {post.featuredImage && (
                        <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                          <img 
                            src={post.featuredImage} 
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="space-y-3">
                        <div className="text-sm text-pulse-600 font-medium">
                          {formatDate(post.publishDate)}
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-pulse-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="p-0 h-auto text-pulse-600 hover:text-pulse-700 font-medium"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePostClick(post.slug);
                          }}
                        >
                          → Read More
                        </Button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Mobile & Tablet: Horizontal scroll */}
              <div className="lg:hidden">
                <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
                  {posts.map((post) => (
                    <article key={post.id} className="flex-shrink-0 w-80 bg-white rounded-2xl p-6 shadow-elegant cursor-pointer group">
                      <div onClick={() => handlePostClick(post.slug)}>
                        {post.featuredImage && (
                          <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                            <img 
                              src={post.featuredImage} 
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                        )}
                        
                        <div className="space-y-3">
                          <div className="text-sm text-pulse-600 font-medium">
                            {formatDate(post.publishDate)}
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-pulse-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <Button 
                            variant="ghost" 
                            size="sm"
                            className="p-0 h-auto text-pulse-600 hover:text-pulse-700 font-medium"
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePostClick(post.slug);
                            }}
                          >
                            → Read More
                          </Button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* View All Blog Button */}
              <div className="text-center mt-8 sm:mt-12">
                <Button 
                  onClick={() => navigate('/blog')}
                  variant="outline"
                  className="border-pulse-500 text-pulse-500 hover:bg-pulse-500 hover:text-white font-semibold py-3 px-8 text-lg"
                >
                  View All Posts →
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogPosts;
