
import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Services = () => {
  const [isBusinessOwner, setIsBusinessOwner] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  useEffect(() => {
    const handleStorageChange = () => {
      const toggleState = localStorage.getItem('isBusinessOwner');
      if (toggleState !== null) {
        setIsBusinessOwner(JSON.parse(toggleState));
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const businessServices = [
    {
      id: "clarity-mapping",
      title: "Clarity Mapping (60 mins)",
      description: "Turn chaos into a clear plan."
    },
    {
      id: "strategic-thinking",
      title: "Strategic Thinking Coaching",
      description: "Focus on what matters. Ditch the noise."
    },
    {
      id: "decision-frameworks",
      title: "Decision Frameworks",
      description: "Move faster. Stress less."
    }
  ];

  const studentServices = [
    {
      id: "thesis-blueprint",
      title: "Thesis Blueprint Session",
      description: "Map your thesis in one go."
    },
    {
      id: "burnout-recovery",
      title: "Burnout Recovery Tools",
      description: "Get motivated again—without pressure."
    },
    {
      id: "focus-checkins",
      title: "Weekly Focus Check-ins",
      description: "Stay on track, step by step."
    }
  ];

  const services = isBusinessOwner ? businessServices : studentServices;

  const toggleAccordion = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="services">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
              <span>Services</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              How I Help
            </h2>
            
            <p className="text-xl text-gray-700">
              {isBusinessOwner 
                ? "Strategic support for business owners who need clarity and focus."
                : "Specialized guidance for students struggling with thesis completion."
              }
            </p>
          </div>
          
          {/* Desktop View */}
          <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Mobile Accordion View */}
          <div className="md:hidden space-y-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(service.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  {activeAccordion === service.id ? (
                    <ChevronUp className="w-5 h-5 text-pulse-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                
                {activeAccordion === service.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">
                      {service.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
