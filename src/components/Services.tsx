
import React, { useState, useEffect } from "react";
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

  const highlightText = (text: string, highlights: string[], isPositive: boolean = false) => {
    let highlightedText = text;
    highlights.forEach(highlight => {
      const regex = new RegExp(`(${highlight})`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="text-pulse-500 font-semibold">$1</span>`);
    });
    return highlightedText;
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="services">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Services</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              How I Help
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              {isBusinessOwner 
                ? "Strategic support for business owners who need clarity and focus."
                : "Specialized guidance for students struggling with thesis completion."
              }
            </p>

            {isBusinessOwner && (
              <p className="text-lg text-gray-600">
                Before and after coaching:
              </p>
            )}
          </div>
          
          {isBusinessOwner ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {businessExamples.map((example, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 flex flex-col justify-center min-h-[200px]"
                >
                  <div className="space-y-4">
                    <div className="text-center">
                      <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">Transform this</h4>
                      <p 
                        className="text-base text-gray-700 leading-relaxed mb-3"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(example.before, example.beforeHighlight)
                        }}
                      />
                    </div>
                    <div className="border-t border-gray-100 pt-3">
                      <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide text-center">Into THIS</h4>
                      <p 
                        className="text-base text-gray-700 leading-relaxed text-center"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(example.after, example.afterHighlight, true)
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Thesis Blueprint Session
                </h3>
                <p className="text-gray-600">
                  Map your thesis in one go.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Burnout Recovery Tools
                </h3>
                <p className="text-gray-600">
                  Get motivated again—without pressure.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Weekly Focus Check-ins
                </h3>
                <p className="text-gray-600">
                  Stay on track, step by step.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
