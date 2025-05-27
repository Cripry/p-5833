
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingProps {
  variant?: "business" | "student";
}

const Pricing = ({ variant = "business" }: PricingProps) => {
  const getStepTwoContent = () => {
    if (variant === "student") {
      return {
        title: "One-Time Clarity Session",
        subtitle: "Step 2",
        price: "80 EUR",
        idealFor: "Students who feel stuck or behind on their thesis",
        features: [
          "60-minute 1:1 coaching session",
          "A chapter-by-chapter overview of your thesis plan",
          "Clarity on what to write next — and what to skip for now",
          "Personalized structure to stop starting over again and again",
          "Support to stop delaying everything until the last night"
        ]
      };
    }
    return {
      title: "One-Time Clarity Session",
      subtitle: "Step 2", 
      price: "80 EUR",
      idealFor: "New business owners who feel overwhelmed by scattered ideas",
      features: [
        "60-minute 1:1 coaching session",
        "A clear project map with timelines and priority checkpoints",
        "Clarity on what comes first vs what can wait",
        "A focused 90-day action plan to avoid spinning in circles",
        "Tools to overcome procrastination and \"what now?\" moments"
      ]
    };
  };

  const getStepThreeContent = () => {
    if (variant === "student") {
      return {
        title: "Monthly Momentum Plan",
        subtitle: "Step 3",
        price: "200 EUR/month",
        idealFor: "Students who want to stop panicking and start progressing",
        features: [
          "Weekly planning to stay ahead of deadlines, not chase them",
          "Break your work into bite-sized tasks with built-in accountability",
          "Regular feedback on progress and direction",
          "Daily check-ins to stay focused without burning out",
          "Reduce mental pressure and know exactly what to do each week"
        ]
      };
    }
    return {
      title: "Monthly Momentum Plan",
      subtitle: "Step 3",
      price: "200 EUR/month",
      idealFor: "Solopreneurs building under pressure",
      features: [
        "A custom launch & strategy roadmap (mapped to weeks)",
        "Weekly sessions to keep ideas aligned and focused",
        "Priority check-ins to prevent burnout or wasted effort",
        "Support on decision-making, offers, messaging, and next moves",
        "A partner who tracks momentum and helps you finish what you start"
      ]
    };
  };

  const stepTwoContent = getStepTwoContent();
  const stepThreeContent = getStepThreeContent();

  const pricingPlans = [
    {
      id: "discovery",
      title: "Free Discovery Call",
      subtitle: "Step 1",
      price: "0 EUR",
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
      title: stepTwoContent.title,
      subtitle: stepTwoContent.subtitle,
      price: stepTwoContent.price,
      idealFor: stepTwoContent.idealFor,
      features: stepTwoContent.features,
      ctaText: "🚀 Try a Full Clarity Session",
      highlighted: true
    },
    {
      id: "momentum",
      title: stepThreeContent.title,
      subtitle: stepThreeContent.subtitle, 
      price: stepThreeContent.price,
      idealFor: stepThreeContent.idealFor,
      features: stepThreeContent.features,
      ctaText: "🔥 Start Monthly Coaching",
      highlighted: false
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-white h-[40vh] flex items-center" id="pricing">
      <div className="section-container w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <div className="pulse-chip mx-auto mb-3">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-pulse-500 text-white mr-2 text-xs">05</span>
              <span className="text-xs">Pricing</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Work With Me
            </h2>
            
            <p className="text-sm text-gray-700 mb-4">
              Choose the level of support that fits your needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
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
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-pulse-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-3">
                  <div className="text-xs text-gray-500 font-medium">{plan.subtitle}</div>
                  <CardTitle className="text-lg font-bold mb-2">{plan.title}</CardTitle>
                  <div className={`text-xl font-bold ${plan.highlighted ? 'text-pulse-500' : 'text-gray-900'}`}>
                    {plan.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  {plan.idealFor && (
                    <div className="mb-3 p-2 bg-pulse-50 rounded-lg border border-pulse-200">
                      <p className="text-xs text-pulse-700 font-medium">
                        📌 Ideal for: {plan.idealFor}
                      </p>
                    </div>
                  )}
                  
                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? 'text-pulse-500' : 'text-green-500'
                        }`} />
                        <span className="text-xs text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-3">
                    <Button 
                      className={`w-full font-medium py-2 text-xs ${
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
