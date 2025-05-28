
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Download, Mail } from "lucide-react";

const FreeTools = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section id="free-tools" className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="pulse-chip mx-auto mb-4 sm:mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
            <span>Free Resources</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Free Tools
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8">
            Want a quick win?
          </p>
          
          <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-elegant mb-6 sm:mb-8">
            {/* Mobile: Stack tools vertically, Desktop: Side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-pulse-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-left">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 text-pulse-500 mr-3" />
                  <h3 className="text-base sm:text-lg font-semibold">Focus in 3 Steps</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 leading-relaxed">
                  A simple PDF guide to clear mental clutter and prioritize what matters most.
                </p>
                <span className="text-xs sm:text-sm text-pulse-600 font-medium">PDF Download</span>
              </div>
              
              <div className="bg-pulse-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-left">
                <div className="flex items-center mb-3 sm:mb-4">
                  <Download className="w-5 h-5 sm:w-6 sm:h-6 text-pulse-500 mr-3" />
                  <h3 className="text-base sm:text-lg font-semibold">Thesis Planner Template</h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 leading-relaxed">
                  Structure your research and writing with this step-by-step template.
                </p>
                <span className="text-xs sm:text-sm text-pulse-600 font-medium">Template Download</span>
              </div>
            </div>
            
            {/* Mobile: Stack form elements vertically */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col space-y-3">
                <input 
                  type="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                  required 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pulse-500 focus:border-transparent text-base"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitted}
                  className={cn(
                    "w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 min-h-[48px] text-base",
                    isSubmitted 
                      ? "bg-green-500 text-white cursor-default" 
                      : "bg-pulse-500 text-white hover:bg-pulse-600 hover:scale-105"
                  )}
                >
                  {isSubmitted ? (
                    <>
                      <Mail className="w-4 h-4 mr-2" />
                      Sent!
                    </>
                  ) : (
                    "Send it to me"
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
          
          <p className="text-gray-500 text-xs sm:text-sm">
            No spam, just valuable resources. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeTools;
