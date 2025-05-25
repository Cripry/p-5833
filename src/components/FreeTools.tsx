
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Download, Mail } from "lucide-react";

const FreeTools = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the email submission
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="free-tools">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>Free Resources</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Free Tools
          </h2>
          
          <p className="text-xl text-gray-700 mb-8">
            💌 Want a quick win?
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-elegant mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-pulse-50 rounded-xl p-6 text-left">
                <div className="flex items-center mb-4">
                  <Download className="w-6 h-6 text-pulse-500 mr-3" />
                  <h3 className="text-lg font-semibold">Focus in 3 Steps</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  📄 A simple PDF guide to clear mental clutter and prioritize what matters most.
                </p>
                <span className="text-sm text-pulse-600 font-medium">PDF Download</span>
              </div>
              
              <div className="bg-pulse-50 rounded-xl p-6 text-left">
                <div className="flex items-center mb-4">
                  <Download className="w-6 h-6 text-pulse-500 mr-3" />
                  <h3 className="text-lg font-semibold">Thesis Planner Template</h3>
                </div>
                <p className="text-gray-600 mb-3">
                  📋 Structure your research and writing with this step-by-step template.
                </p>
                <span className="text-sm text-pulse-600 font-medium">Template Download</span>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className={cn(
                    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300",
                    isSubmitted
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-pulse-500 text-white hover:bg-pulse-600 hover:scale-105"
                  )}
                >
                  {isSubmitted ? (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Sent! ✓
                    </>
                  ) : (
                    <>
                      📤 Send it to me
                    </>
                  )}
                </button>
              </div>
            </form>
            
            {isSubmitted && (
              <p className="text-green-600 text-sm mt-3">
                Check your email for the download links!
              </p>
            )}
          </div>
          
          <p className="text-gray-500 text-sm">
            No spam, just valuable resources. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeTools;
