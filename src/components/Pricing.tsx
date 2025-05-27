
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface PricingProps {
  variant?: "business" | "student";
}

const Pricing = ({ variant = "business" }: PricingProps) => {
  const getPersonalization = (step: number) => {
    if (variant === "student") {
      switch (step) {
        case 2: return "Thesis outline & first steps";
        case 3: return "Weekly accountability & chapter plan";
        case 4: return "Finish thesis with focus & structure";
        default: return "";
      }
    } else {
      switch (step) {
        case 2: return "Clarity for ideas & action roadmap";
        case 3: return "Weekly strategy for launch or growth";
        case 4: return "Long-term support to scale and focus";
        default: return "";
      }
    }
  };

  const pricingPlans = [
    {
      id: "discovery",
      title: "Free Discovery Call",
      subtitle: "Step 1",
      price: "0 EUR",
      features: [
        "30-min 1:1 call",
        "Explore current challenge", 
        "See if we're a fit",
        "Ask anything",
        "Simple recommendations"
      ],
      ctaText: "Book Free Call",
      highlighted: false,
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      id: "clarity",
      title: "One-Time Clarity Session",
      subtitle: "Step 2",
      price: "80 EUR",
      idealFor: "First-timers needing quick clarity",
      features: [
        "60-min coaching session",
        "Map priorities",
        "What comes first",
        "Action plan (90 days)",
        "Fix mental blocks"
      ],
      ctaText: "Try a Full Clarity Session",
      highlighted: false,
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      personalization: getPersonalization(2)
    },
    {
      id: "focus-booster",
      title: "Focus Booster – 4 Sessions",
      subtitle: "Step 3",
      price: "200 EUR",
      idealFor: "Best Value: Build clarity + momentum",
      features: [
        "4x private sessions",
        "Strategic weekly focus",
        "Real-time clarity map",
        "Priority check-ins",
        "Tailored progress tracking"
      ],
      ctaText: "Start Focus Booster",
      highlighted: true,
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      personalization: getPersonalization(3)
    },
    {
      id: "momentum",
      title: "Monthly Momentum Plan",
      subtitle: "Step 4", 
      price: "400 EUR/month",
      idealFor: "High-stakes goals & busy minds",
      features: [
        "8x sessions/month (2x/week)",
        "Daily check-ins",
        "On-demand support",
        "Deep focus structure",
        "Theme-based coaching"
      ],
      ctaText: "Start Monthly Coaching",
      highlighted: false,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      personalization: getPersonalization(4)
    }
  ];

  return (
    <section className="py-6 sm:py-8 bg-white h-[40vh] flex items-center" id="pricing">
      <div className="section-container w-full">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <div className="pulse-chip mx-auto mb-2">
              <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-pulse-500 text-white mr-1 text-xs">05</span>
              <span className="text-xs">Pricing</span>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Work With Me
            </h2>
            
            <p className="text-xs text-gray-700 mb-3">
              Choose the level of support that fits your needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative transition-all duration-300 hover:shadow-elegant-hover ${
                  plan.highlighted 
                    ? 'border-2 border-pulse-500 shadow-elegant-hover scale-105' 
                    : `border ${plan.borderColor} shadow-elegant hover:scale-102`
                } ${plan.bgColor}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-pulse-500 text-white px-2 py-0.5 rounded-full text-xs font-medium">
                      Best Value
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-2 px-3 pt-3">
                  <div className="text-xs text-gray-500 font-medium">{plan.subtitle}</div>
                  <CardTitle className="text-sm font-bold mb-1">{plan.title}</CardTitle>
                  <div className={`text-lg font-bold ${plan.highlighted ? 'text-pulse-500' : 'text-gray-900'}`}>
                    {plan.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-2 px-3 pb-3">
                  {plan.idealFor && (
                    <div className="mb-2 p-1.5 bg-white/70 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-700 font-medium">
                        {plan.idealFor}
                      </p>
                    </div>
                  )}

                  {plan.personalization && (
                    <div className="mb-2 p-1.5 bg-pulse-100 rounded-lg border border-pulse-200">
                      <p className="text-xs text-pulse-700 font-medium">
                        {plan.personalization}
                      </p>
                    </div>
                  )}
                  
                  <ul className="space-y-1.5">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-1.5">
                        <Check className={`w-3 h-3 mt-0.5 flex-shrink-0 ${
                          plan.highlighted ? 'text-pulse-500' : 'text-green-500'
                        }`} />
                        <span className="text-xs text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="pt-2">
                    <Button 
                      className={`w-full font-medium py-1.5 text-xs ${
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
