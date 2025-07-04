import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
interface PricingProps {
  variant?: "business" | "student";
}
const Pricing = ({
  variant = "business"
}: PricingProps) => {
  const scrollToCTA = () => {
    const ctaElement = document.getElementById('cta');
    if (ctaElement) {
      const offset = window.innerWidth < 768 ? 100 : 80;
      window.scrollTo({
        top: ctaElement.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };
  const getPersonalization = (step: number) => {
    if (variant === "student") {
      switch (step) {
        case 2:
          return "Thesis outline & first steps";
        case 3:
          return "Weekly accountability & chapter plan";
        case 4:
          return "Finish thesis with focus & structure";
        default:
          return "";
      }
    } else {
      switch (step) {
        case 2:
          return "Clarity for ideas & action roadmap";
        case 3:
          return "Weekly strategy for launch or growth";
        case 4:
          return "Long-term support to scale and focus";
        default:
          return "";
      }
    }
  };
  const pricingPlans = [{
    id: "discovery",
    title: "Free Discovery Call",
    price: "0 EUR",
    features: ["30-min 1:1 call", "Explore current challenge", "See if we're a fit", "Ask anything", "Simple recommendations"],
    ctaText: "Book Free Call",
    highlighted: false,
    bgColor: "bg-white",
    borderColor: "border-gray-200"
  }, {
    id: "clarity",
    title: "One-Time Clarity Session",
    price: "80 EUR",
    features: ["60-min coaching session", "Map priorities", "What comes first", "Action plan (90 days)", "Fix mental blocks"],
    ctaText: "Try a Full Clarity Session",
    highlighted: false,
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    personalization: getPersonalization(2)
  }, {
    id: "focus-booster",
    title: "Focus Booster – 4 Sessions",
    price: "200 EUR",
    features: ["4x private sessions", "Strategic weekly focus", "Real-time clarity map", "Priority check-ins", "Tailored progress tracking"],
    ctaText: "Start Focus Booster",
    highlighted: true,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    personalization: getPersonalization(3)
  }, {
    id: "momentum",
    title: "Monthly Momentum Plan",
    price: "400 EUR/month",
    features: ["8x sessions/month (2x/week)", "Daily check-ins", "On-demand support", "Deep focus structure", "Theme-based coaching"],
    ctaText: "Start Monthly Coaching",
    highlighted: false,
    bgColor: "bg-white",
    borderColor: "border-gray-200",
    personalization: getPersonalization(4)
  }];
  return <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden" id="pricing">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="pulse-chip mx-auto mb-4 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Pricing</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Work With Me
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Choose the level of support that fits your needs and goals.
            </p>
          </div>
          
          {/* Mobile: Stack cards vertically, Desktop: Grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pricingPlans.map(plan => <Card key={plan.id} className={`
                  relative transition-all duration-300 hover:shadow-elegant-hover h-full flex flex-col
                  ${plan.highlighted ? 'border-2 border-pulse-500 shadow-elegant-hover' : `border ${plan.borderColor} shadow-elegant hover:scale-102`} 
                  ${plan.bgColor}
                `}>
                {plan.highlighted && <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-pulse-500 text-white px-3 py-1 rounded-full text-xs font-medium">Best Choise</div>
                  </div>}
                
                <CardHeader className="text-center pb-3 px-4 sm:px-6 pt-4 sm:pt-6 my-[30px]">
                  <CardTitle className="text-base sm:text-lg font-bold mb-2 sm:mb-3 leading-tight">
                    {plan.title}
                  </CardTitle>
                  <div className={`text-lg sm:text-xl font-bold ${plan.highlighted ? 'text-pulse-500' : 'text-gray-900'}`}>
                    {plan.price}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6 pb-4 sm:pb-6 flex flex-col flex-grow my-[20px]">
                  {plan.personalization && <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-pulse-100 rounded-lg border border-pulse-200">
                      <p className="text-xs text-pulse-700 font-medium leading-tight">
                        {plan.personalization}
                      </p>
                    </div>}
                  
                  <ul className="space-y-2 sm:space-y-3 flex-grow">
                    {plan.features.map((feature, index) => <li key={index} className="flex items-start space-x-2 sm:space-x-3">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-pulse-500' : 'text-green-500'}`} />
                        <span className="text-xs leading-relaxed text-gray-700">
                          {feature}
                        </span>
                      </li>)}
                  </ul>
                  
                  <div className="pt-3 sm:pt-4 mt-auto">
                    <Button onClick={scrollToCTA} className={`w-full font-medium py-2 sm:py-3 text-xs leading-tight ${plan.highlighted ? 'bg-pulse-500 hover:bg-pulse-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300'}`} variant={plan.highlighted ? "default" : "outline"}>
                      {plan.ctaText}
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;