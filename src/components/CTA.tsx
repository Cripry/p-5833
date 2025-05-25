
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

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { 
        let p = function (a, ar) { a.q.push(ar); }; 
        let d = C.document; 
        C.Cal = C.Cal || function () { 
          let cal = C.Cal; 
          let ar = arguments; 
          if (!cal.loaded) { 
            cal.ns = {}; 
            cal.q = cal.q || []; 
            d.head.appendChild(d.createElement("script")).src = A; 
            cal.loaded = true; 
          } 
          if (ar[0] === L) { 
            const api = function () { p(api, arguments); }; 
            const namespace = ar[1]; 
            api.q = api.q || []; 
            if(typeof namespace === "string"){
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar); 
            return;
          } 
          p(cal, ar); 
        }; 
      })(window, "https://app.cal.com/embed/embed.js", "init");
      
      Cal("init", "30min", {origin:"https://cal.com"});
      Cal.ns["30min"]("ui", {"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
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
        
        {/* Cal.com Embed Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 mb-8">
          <div 
            data-cal-link="cristian-preguza-fintaxy/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view","theme":"light"}'
            style={{ width: "100%", height: "600px", overflow: "scroll" }}
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
