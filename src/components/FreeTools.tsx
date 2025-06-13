
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BookOpen, Target, CheckCircle } from "lucide-react";

const FreeTools = () => {
  const tools = [
    {
      icon: Target,
      title: "Clarity Compass",
      description: "A simple framework to identify your real priorities when everything feels urgent.",
      downloadText: "Download PDF Guide",
      href: "#"
    },
    {
      icon: CheckCircle,
      title: "The Focus Filter",
      description: "Stop saying yes to everything. This tool helps you decide what deserves your attention.",
      downloadText: "Get The Template",
      href: "#"
    },
    {
      icon: BookOpen,
      title: "Weekly Review Template",
      description: "A 10-minute weekly check-in to stay on track and adjust course when needed.",
      downloadText: "Download Template",
      href: "#"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white overflow-x-hidden" id="free-tools">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="pulse-chip mx-auto mb-4 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">05</span>
              <span>Free Resources</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Start Here (It's Free)
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Simple tools to help you find clarity and focus. No email required, just download and use.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon;
              return (
                <Card key={index} className="bg-white border border-gray-200 shadow-elegant hover:shadow-elegant-hover transition-all duration-300 hover:scale-102">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-pulse-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-pulse-600" />
                    </div>
                    <CardTitle className="text-xl font-bold mb-3">
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4 text-center">
                    <p className="text-gray-600 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-pulse-200 text-pulse-600 hover:bg-pulse-500 hover:text-white hover:border-pulse-500 transition-all"
                      asChild
                    >
                      <a href={tool.href}>
                        <Download className="w-4 h-4 mr-2" />
                        {tool.downloadText}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              Want more personalized guidance?
            </p>
            <Button 
              className="bg-pulse-500 hover:bg-pulse-600 text-white font-semibold px-6 py-3"
              onClick={() => {
                const ctaElement = document.getElementById('cta');
                if (ctaElement) {
                  const offset = window.innerWidth < 768 ? 100 : 80;
                  window.scrollTo({
                    top: ctaElement.offsetTop - offset,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Book a Free Clarity Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTools;
