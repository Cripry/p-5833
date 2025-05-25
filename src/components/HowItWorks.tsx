
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Phone, MapPin, Zap } from "lucide-react";

const HowItWorks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const steps = [
    {
      number: "01",
      title: "Book a free clarity call",
      description: "We'll identify what's blocking your progress",
      icon: Phone,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02", 
      title: "Get a personalized plan",
      description: "Receive a clear roadmap tailored to your situation",
      icon: MapPin,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Build momentum, fast",
      description: "Take focused action with ongoing support",
      icon: Zap,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80"
    }
  ];

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
    
    const elements = document.querySelectorAll(".fade-in-stagger");
    elements.forEach((el, index) => {
      (el as HTMLElement).style.animationDelay = `${0.1 * (index + 1)}s`;
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section className="py-20 bg-white relative" id="how-it-works" ref={sectionRef}>
      <div className="absolute -top-20 right-0 w-72 h-72 bg-pulse-50 rounded-full opacity-60 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-10 w-64 h-64 bg-gray-50 rounded-full opacity-70 blur-3xl -z-10"></div>
      
      <div className="section-container">
        <div className="text-center mb-16 opacity-0 fade-in-stagger">
          <div className="pulse-chip mx-auto mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">03</span>
            <span>Process</span>
          </div>
          <h2 className="section-title mb-4">How It Works</h2>
          <p className="section-subtitle mx-auto mb-6">
            Simple, focused, effective.
          </p>
          <p className="text-lg text-pulse-600 font-medium">
            No fluff. Just focus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="text-center opacity-0 fade-in-stagger group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-pulse-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-pulse-100 rounded-full flex items-center justify-center">
                    <span className="text-pulse-600 font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
                
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-pulse-200 to-transparent transform translate-x-4"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
