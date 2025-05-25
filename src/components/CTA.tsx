
import React, { useEffect, useRef } from "react";
import { Phone } from "lucide-react";

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
  
  return (
    <section className="py-16 bg-gradient-to-br from-pulse-500 to-pulse-600 text-white relative" id="contact" ref={ctaRef}>
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="section-container relative z-10 opacity-0 px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          📞 Ready to move forward?
        </h2>
        
        <p className="text-xl sm:text-2xl mb-8 opacity-90">
          Let's clear the mental clutter.
        </p>
        
        <a 
          href="#" 
          className="inline-flex items-center justify-center group bg-white text-pulse-600 font-bold text-lg px-8 py-4 rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <Phone className="mr-3 w-5 h-5" />
          Book a Free Clarity Call
        </a>
        
        <p className="text-sm opacity-80 mt-6 max-w-md mx-auto">
          No pressure. No sales pitch. Just clarity on your next steps.
        </p>
      </div>
    </section>
  );
};

export default CTA;
