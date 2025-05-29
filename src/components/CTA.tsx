
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  useEffect(() => {
    // Cal.com embed script
    const script = document.createElement('script');
    script.innerHTML = `
      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "30min", {origin:"https://cal.com"});
      Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);

    // Tally form script
    const tallyScript = document.createElement('script');
    tallyScript.innerHTML = `
      var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(d.querySelector('script[src="'+w+'"]')==null){var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
    `;
    document.body.appendChild(tallyScript);

    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleBookCall = () => {
    console.log('Cal object:', window.Cal);
    console.log('Cal namespace:', window.Cal?.ns);
    
    if (window.Cal && window.Cal.ns && window.Cal.ns["30min"]) {
      console.log('Opening Cal.com modal');
      window.Cal.ns["30min"]("open");
    } else {
      console.log('Cal.com not loaded, trying fallback');
      // Fallback for mobile - direct link
      window.open('https://cal.com/30min', '_blank');
    }
  };

  return (
    <section id="cta" className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="pulse-chip mx-auto mb-4 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">07</span>
              <span>Get Started</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Find Your Clarity?
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Take the first step towards focused action and clear direction.
            </p>
          </div>

          {/* Mobile: Stack vertically with text/button at top, survey at bottom */}
          <div className="md:hidden space-y-8">
            {/* Text and CTA at top */}
            <div className="space-y-4 sm:space-y-6 text-center px-4">
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
                <p className="leading-relaxed">
                  Book a free 30-minute call — no pressure, just real talk. Whether it's your business or your thesis, we'll map your next step together. Simple, focused, and zero fluff.
                </p>
                <p className="font-medium text-gray-900">
                  You don't need a plan. You just need to show up.
                </p>
                <p className="font-medium text-gray-900">
                  Let's map the way forward — together.
                </p>
                <p className="text-pulse-600 text-sm sm:text-base">
                  Not sure yet? No problem. Just drop your name and email — I'll send you a quick intro and you can decide later.
                </p>
              </div>
              
              <Button 
                onClick={handleBookCall}
                className="w-full bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-3 px-6 sm:px-8 text-base sm:text-lg min-h-[48px]"
              >
                Book Free Clarity Call
              </Button>
            </div>
            
            {/* Tally form at bottom */}
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-elegant mx-4">
              <iframe 
                data-tally-src="https://tally.so/embed/mBlp9Q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width={100} 
                height={484}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Contact Form" 
                className="rounded-lg w-full"
                style={{ maxWidth: '100%', overflow: 'hidden' }}
              />
            </div>
          </div>

          {/* Desktop: Side by side layout */}
          <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left side - Text and CTA */}
            <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
                <p className="leading-relaxed">
                  Book a free 30-minute call — no pressure, just real talk. Whether it's your business or your thesis, we'll map your next step together. Simple, focused, and zero fluff.
                </p>
                <p className="font-medium text-gray-900">
                  You don't need a plan. You just need to show up.
                </p>
                <p className="font-medium text-gray-900">
                  Let's map the way forward — together.
                </p>
                <p className="text-pulse-600 text-sm sm:text-base">
                  Not sure yet? No problem. Just drop your name and email — I'll send you a quick intro and you can decide later.
                </p>
              </div>
              
              <Button 
                onClick={handleBookCall}
                className="w-full sm:w-auto bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-3 px-6 sm:px-8 text-base sm:text-lg min-h-[48px]"
              >
                Book Free Clarity Call
              </Button>
            </div>
            
            {/* Right side - Tally form */}
            <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-elegant order-1 lg:order-2">
              <iframe 
                data-tally-src="https://tally.so/embed/mBlp9Q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width={100} 
                height={484}
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                title="Contact Form" 
                className="rounded-lg w-full"
                style={{ maxWidth: '100%', overflow: 'hidden' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add type declarations for Cal.com
declare global {
  interface Window {
    Cal: any;
  }
}

export default CTA;
