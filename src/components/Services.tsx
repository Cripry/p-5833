
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface ServiceItem {
  title: string;
  description: string;
}

interface ServiceSection {
  title: string;
  items: ServiceItem[];
}

const Services = () => {
  const [activeSection, setActiveSection] = useState<number | null>(0);
  const [isBusinessOwner, setIsBusinessOwner] = useState(true);

  const businessServices: ServiceSection = {
    title: "For Business Owners",
    items: [
      {
        title: "Clarity Mapping (60 mins)",
        description: "Turn chaos into a clear plan."
      },
      {
        title: "Strategic Thinking Coaching",
        description: "Focus on what matters. Ditch the noise."
      },
      {
        title: "Decision Frameworks",
        description: "Move faster. Stress less."
      }
    ]
  };

  const studentServices: ServiceSection = {
    title: "For Students",
    items: [
      {
        title: "Thesis Blueprint Session",
        description: "Map your thesis in one go."
      },
      {
        title: "Burnout Recovery Tools",
        description: "Get motivated again—without pressure."
      },
      {
        title: "Weekly Focus Check-ins",
        description: "Stay on track, step by step."
      }
    ]
  };

  const sections = [businessServices, studentServices];

  const toggleSection = (index: number) => {
    setActiveSection(activeSection === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 bg-gray-50" id="services">
      <div className="section-container">
        <div className="text-center mb-12 opacity-0 animate-on-scroll">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span>
            <span>Services</span>
          </div>
          <h2 className="section-title mb-4">🧭 How I Help</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Tailored coaching for your specific situation and goals.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl p-8 shadow-elegant">
              <h3 className="text-2xl font-bold mb-6 text-center text-pulse-600">
                {section.title}
              </h3>
              <div className="space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="border-l-4 border-pulse-200 pl-6">
                    <h4 className="text-lg font-semibold mb-2 text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Accordion View */}
        <div className="md:hidden space-y-4 max-w-2xl mx-auto">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-xl shadow-elegant overflow-hidden">
              <button
                onClick={() => toggleSection(sectionIndex)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-xl font-bold text-pulse-600">
                  {section.title}
                </h3>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 transition-transform duration-200",
                    activeSection === sectionIndex ? "rotate-180" : ""
                  )}
                />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-300",
                activeSection === sectionIndex ? "max-h-96" : "max-h-0"
              )}>
                <div className="px-6 pb-6 space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="border-l-4 border-pulse-200 pl-4">
                      <h4 className="font-semibold mb-1 text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600 text-sm">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
