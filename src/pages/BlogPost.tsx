
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishDate: string;
  featuredImage?: string;
  author?: string;
}

interface RelatedPost {
  id: string;
  title: string;
  slug: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now - replace with Contentful API call
    const mockPost: BlogPost = {
      id: "1",
      title: "Finding Clarity in Business Chaos",
      slug: "finding-clarity-in-business-chaos",
      content: `
        <p>When everything feels urgent, nothing is clear. This is the paradox that traps most entrepreneurs and business leaders in a cycle of reactive decision-making.</p>
        
        <h2>The Cost of Constant Urgency</h2>
        <p>We live in a world that rewards speed over thoughtfulness. Every notification, every "urgent" email, every crisis pulls us away from the work that actually matters. But here's what I've learned after working with hundreds of business leaders:</p>
        
        <blockquote>
          <p>"The most successful people aren't the fastest movers—they're the clearest thinkers."</p>
        </blockquote>
        
        <h2>Three Steps to Cut Through the Noise</h2>
        
        <h3>1. The Daily Clarity Question</h3>
        <p>Every morning, before checking your phone or opening your laptop, ask yourself: "What's the one thing that, if accomplished today, would move my business forward the most?"</p>
        
        <p>Not three things. Not five things. One thing.</p>
        
        <h3>2. The Strategic Pause</h3>
        <p>When faced with an "urgent" decision, pause for 60 seconds. Ask: "Is this urgent because it's important, or because someone else made it urgent?"</p>
        
        <p>Most urgency is manufactured. Real urgency is rare.</p>
        
        <h3>3. The Clarity Filter</h3>
        <p>Before saying yes to any new opportunity, partnership, or project, run it through this filter:</p>
        
        <ul>
          <li>Does this align with my core business goals?</li>
          <li>Will this move me closer to or further from my vision?</li>
          <li>Am I saying yes because it's good, or because I'm afraid to say no?</li>
        </ul>
        
        <h2>The Result</h2>
        <p>When you operate from clarity instead of chaos, something remarkable happens. You start making decisions that compound. Each choice builds on the last, creating momentum that feels effortless.</p>
        
        <p>This isn't about working harder. It's about working with intention.</p>
      `,
      excerpt: "When everything feels urgent, nothing is clear. Learn how to cut through the noise and focus on what actually moves your business forward.",
      publishDate: "2024-01-15",
      featuredImage: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      author: "Tharsis Solutions"
    };

    const mockRelatedPosts: RelatedPost[] = [
      {
        id: "2",
        title: "The Power of Strategic Pausing",
        slug: "the-power-of-strategic-pausing"
      },
      {
        id: "3",
        title: "From Overwhelm to Breakthrough",
        slug: "from-overwhelm-to-breakthrough"
      }
    ];

    // Simulate API call
    setTimeout(() => {
      if (slug === mockPost.slug) {
        setPost(mockPost);
        setRelatedPosts(mockRelatedPosts);
      }
      setLoading(false);
    }, 1000);
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleBookCall = () => {
    navigate('/business-owner#cta');
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 sm:pt-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded mb-4"></div>
                <div className="h-12 bg-gray-200 rounded mb-6"></div>
                <div className="h-64 bg-gray-200 rounded mb-8"></div>
                <div className="space-y-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-20 sm:pt-24">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
              <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
              <Button onClick={() => navigate('/blog')}>
                Back to Blog
              </Button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20 sm:pt-24">
        {/* Breadcrumb */}
        <section className="py-6 bg-gray-50">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <nav className="flex items-center space-x-2 text-sm text-gray-600">
                <button 
                  onClick={() => navigate('/business-owner')}
                  className="hover:text-pulse-600 transition-colors"
                >
                  Home
                </button>
                <ChevronRight size={16} />
                <button 
                  onClick={() => navigate('/blog')}
                  className="hover:text-pulse-600 transition-colors"
                >
                  Blog
                </button>
                <ChevronRight size={16} />
                <span className="text-gray-900">{post.title}</span>
              </nav>
              
              <Button 
                variant="ghost" 
                onClick={() => navigate('/blog')}
                className="mt-4 -ml-2"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to Blog
              </Button>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 sm:py-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <header className="mb-8">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center space-x-4 text-gray-600 mb-6">
                  <span>{formatDate(post.publishDate)}</span>
                  {post.author && (
                    <>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </>
                  )}
                </div>
                
                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </header>

              {post.featuredImage && (
                <div className="w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-12">
                  <img 
                    src={post.featuredImage} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-12 sm:pb-16">
          <div className="section-container">
            <div className="max-w-4xl mx-auto">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-pulse-50 to-white">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Found Something Useful? Let's Take It Further.
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                If this post sparked something, let's talk. Book a free clarity session or leave your email — and I'll help you move forward.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleBookCall}
                  className="bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-3 px-8 text-lg"
                >
                  📞 Book Free Call
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate('/business-owner#cta')}
                  className="border-pulse-500 text-pulse-500 hover:bg-pulse-500 hover:text-white font-semibold py-3 px-8 text-lg"
                >
                  💌 Contact Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 sm:py-16">
            <div className="section-container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">More Clarity Ideas</h2>
                
                <div className="grid sm:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <div 
                      key={relatedPost.id}
                      className="bg-white p-6 rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-300 cursor-pointer group"
                      onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                    >
                      <h3 className="text-xl font-semibold mb-4 group-hover:text-pulse-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <Button variant="outline" size="sm" className="group-hover:bg-pulse-500 group-hover:text-white group-hover:border-pulse-500 transition-all">
                        Read More →
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
