
import React from "react";
import { useLocation } from "react-router-dom";

const Services = () => {
  const location = useLocation();
  const isBusinessOwner = location.pathname === '/business-owner';

  const businessExamples = [
    {
      before: "I have so many business ideas, but I can't figure out which one to focus on.",
      after: "Now I have a clear roadmap and know exactly what to work on.",
      beforeHighlight: ["so many", "can't figure out"],
      afterHighlight: ["clear roadmap", "exactly"]
    },
    {
      before: "I feel like I'm building five businesses at once — and none are working.",
      after: "Now I've simplified everything into one aligned, focused strategy.",
      beforeHighlight: ["five businesses at once", "none are working"],
      afterHighlight: ["simplified", "aligned, focused strategy"]
    },
    {
      before: "I second-guess every decision and waste hours overthinking.",
      after: "Now I make decisions faster, with confidence and clarity.",
      beforeHighlight: ["second-guess", "waste hours", "overthinking"],
      afterHighlight: ["faster", "confidence and clarity"]
    },
    {
      before: "I don't have a real strategy — I'm just reacting all the time.",
      after: "Now I lead with a strategy that's built around my priorities.",
      beforeHighlight: ["don't have", "just reacting"],
      afterHighlight: ["lead with a strategy", "my priorities"]
    },
    {
      before: "I've invested in courses and tools, but I'm still spinning my wheels.",
      after: "Now I have a clear framework — not just more information.",
      beforeHighlight: ["spinning my wheels"],
      afterHighlight: ["clear framework"]
    },
    {
      before: "I know what I want... I just don't know how to get there.",
      after: "Now I have a concrete step-by-step plan to get where I want to go.",
      beforeHighlight: ["don't know how"],
      afterHighlight: ["concrete step-by-step plan"]
    }
  ];

  const studentExamples = [
    {
      before: "I've done the research, but I have no idea how to start writing.",
      after: "Now I have a clear outline — and I'm writing with direction.",
      beforeHighlight: ["no idea", "start writing"],
      afterHighlight: ["clear outline", "writing with direction"]
    },
    {
      before: "Every time I sit down to write, I feel completely blocked.",
      after: "Now I can sit down and make real, focused progress.",
      beforeHighlight: ["completely blocked"],
      afterHighlight: ["real, focused progress"]
    },
    {
      before: "My topic makes sense in my head — but I can't explain it clearly.",
      after: "Now I can explain my research clearly and confidently.",
      beforeHighlight: ["can't explain", "clearly"],
      afterHighlight: ["explain my research clearly", "confidently"]
    },
    {
      before: "I keep rewriting the same paragraph over and over.",
      after: "Now I write without obsessing — and actually finish my sections.",
      beforeHighlight: ["rewriting", "over and over"],
      afterHighlight: ["without obsessing", "actually finish"]
    },
    {
      before: "I don't know what my chapters should even look like.",
      after: "Now I know exactly how my thesis is structured — and why.",
      beforeHighlight: ["don't know", "should even look like"],
      afterHighlight: ["know exactly", "structured"]
    },
    {
      before: "I feel completely alone in this process.",
      after: "Now I have support — and I don't feel stuck or isolated anymore.",
      beforeHighlight: ["completely alone"],
      afterHighlight: ["have support", "don't feel stuck", "isolated anymore"]
    }
  ];

  const highlightText = (text: string, highlights: string[], isPositive: boolean = false) => {
    let highlightedText = text;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="text-pulse-500 font-semibold">$1</span>`);
    });
    return highlightedText;
  };

  const currentExamples = isBusinessOwner ? businessExamples : studentExamples;
  const mobileExamples = currentExamples.slice(0, 4);

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="pulse-chip mx-auto mb-4 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Services</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              How I Help
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 max-w-3xl mx-auto">
              {isBusinessOwner 
                ? "Strategic support for business owners who need clarity and focus." 
                : "Specialized guidance for students struggling with thesis completion."
              }
            </p>
            
            <p className="text-base sm:text-lg text-gray-600">
              Transform this into <span className="text-pulse-500 font-semibold">THIS</span>
            </p>
          </div>
          
          {/* Mobile: Show only 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:hidden">
            {mobileExamples.map((example, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 flex flex-col justify-center min-h-[180px] sm:min-h-[200px]"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-center">
                    <p 
                      className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3" 
                      dangerouslySetInnerHTML={{
                        __html: highlightText(example.before, example.beforeHighlight)
                      }} 
                    />
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <p 
                      className="text-sm sm:text-base text-gray-700 leading-relaxed text-center" 
                      dangerouslySetInnerHTML={{
                        __html: highlightText(example.after, example.afterHighlight, true)
                      }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Show all cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentExamples.map((example, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 flex flex-col justify-center min-h-[180px] sm:min-h-[200px]"
              >
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-center">
                    <p 
                      className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3" 
                      dangerouslySetInnerHTML={{
                        __html: highlightText(example.before, example.beforeHighlight)
                      }} 
                    />
                  </div>
                  <div className="border-t border-gray-100 pt-3">
                    <p 
                      className="text-sm sm:text-base text-gray-700 leading-relaxed text-center" 
                      dangerouslySetInnerHTML={{
                        __html: highlightText(example.after, example.afterHighlight, true)
                      }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
