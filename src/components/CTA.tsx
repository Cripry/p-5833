
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
    // Trigger Cal.com calendar
    const calButton = document.querySelector('[data-cal-link]');
    if (calButton) {
      calButton.click();
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="cta">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Text and CTA */}
            <div className="space-y-6">
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Getting started is easy — and pressure-free. Book a free 30-minute Clarity Call and let's talk through what's on your mind. Whether you're building a business or writing a thesis, I'll help you take your next clear step — no fluff, no overwhelm.
                </p>
                <p className="font-medium text-gray-900">
                  You don't need a plan. You just need to show up.
                </p>
                <p className="font-medium text-gray-900">
                  Let's map the way forward — together.
                </p>
                <p className="text-pulse-600">
                  👉 Not sure yet? No problem. Just drop your name and email — I'll send you a quick intro and you can decide later.
                </p>
              </div>
              
              <Button 
                onClick={handleBookCall}
                className="bg-pulse-500 hover:bg-pulse-600 text-white font-semibold py-3 px-8 text-lg"
                data-cal-link="cristian-preguza-fintaxy/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
              >
                📅 Book Free Clarity Call
              </Button>
            </div>
            
            {/* Right side - Tally form */}
            <div className="bg-white rounded-2xl p-6 shadow-elegant">
              <iframe 
                data-tally-src="https://tally.so/embed/mBlp9Q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                loading="lazy" 
                width="100%" 
                height="484" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0" 
                title="Contact Form"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
