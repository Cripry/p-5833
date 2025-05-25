
import React, { useEffect, useRef } from "react";

const CTA = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }
    
    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Clean up script if component unmounts
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  
  return (
    <section className="py-16 bg-white text-gray-900 relative" id="contact" ref={ctaRef}>
      <div className="section-container relative z-10 opacity-0 px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          📞 Ready to move forward?
        </h2>
        
        <p className="text-xl sm:text-2xl mb-8 text-gray-600">
          Let's clear the mental clutter.
        </p>
        
        {/* Calendly Embed Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/cristianpreguza/cristian-preguza-meet"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
        
        <p className="text-sm text-gray-500 mt-6 max-w-md mx-auto">
          No pressure. No sales pitch. Just clarity on your next steps.
        </p>
      </div>
    </section>
  );
};

export default CTA;
