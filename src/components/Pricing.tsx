
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      id: "discovery",
      title: "Free Discovery Call",
      subtitle: "Step 1",
      price: "0 EUR",
      icon: "🌱",
      features: [
        "30-minute 1-on-1 Zoom meet",
        "Understand your current challenges", 
        "See if coaching is the right fit",
        "Ask anything, no pressure",
        "Personalized recommendations"
      ],
      ctaText: "🔍 Book Free Call",
      highlighted: false
    },
    {
      id: "clarity",
      title: "One-Time Clarity Session", 
      subtitle: "Step 2",
      price: "80 EUR",
      icon: "🎯",
      features: [
        "60-minute 1:1 coaching session",
        "Everything from the free session, plus:",
        "Deep dive into your current blocks",
        "Clarity roadmap: next 3 steps", 
        "Personalized action framework",
        "Tools to overcome immediate roadblocks",
        "Email summary with notes & focus plan"
      ],
      ctaText: "🚀 Try a Full Clarity Session",
      highlighted: true
    },
    {
      id: "momentum",
      title: "Monthly Momentum Plan",
      subtitle: "Step 3", 
      price: "200 EUR/month",
      icon: "🔄",
      features: [
        "Weekly 1:1 coaching sessions (2x/week)",
        "Daily accountability check-ins via chat",
        "Priority support when stuck",
        "Custom weekly focus plans",
        "Rotating theme sessions:",
        "• Mindset reset",
        "• Strategic thinking", 
        "• Overcoming procrastination",
        "• Goal refinement and tracking"
      ],
      specialNote: "Ideal for: Students finishing theses or business owners building under pressure",
      ctaText: "🔥 Start Monthly Coaching",
      highlighted: false
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" id="pricing">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Pricing</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Work With Me
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Choose the level of support that fits your needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-300 hover:shadow-elegant-hover ${
                  plan.highlighted 
                    ? 'border-2 border-pulse-500 shadow-elegant-hover scale-105' 
                    : 'border border-gray-200 shadow-elegant hover:scale-102'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-pulse-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="text-3xl mb-2">{plan.icon}</div>
                  <div className="text-sm text-gray-500 font-medium">{plan.subtitle}</div>
                  <CardTitle className="text-xl font-bold mb-2">{plan.title}</CardTitle>
                  <div className={`text-3xl font-bold ${plan.highlighted ? 'text-pulse-500' : 'text-gray-900'}`}>
                    {plan.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? 'text-pulse-500' : 'text-green-500'
                        }`} />
                        <span className={`text-sm ${
                          feature.startsWith('•') ? 'text-gray-600 ml-4' : 'text-gray-700'
                        }`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.specialNote && (
                    <div className="mt-4 p-3 bg-pulse-50 rounded-lg border border-pulse-200">
                      <p className="text-sm text-pulse-700 font-medium">
                        {plan.specialNote}
                      </p>
                    </div>
                  )}
                  
                  <div className="pt-4">
                    <Button 
                      className={`w-full font-medium py-3 ${
                        plan.highlighted 
                          ? 'bg-pulse-500 hover:bg-pulse-600 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300'
                      }`}
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      {plan.ctaText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
