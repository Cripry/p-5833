
import React from "react";
import { CheckCircle } from "lucide-react";

const About = () => {
  const credentials = [
    "Certified Coach",
    "Strategic, fast-paced sessions", 
    "1:1 focus, 100% customized"
  ];

  return (
    <section className="py-16 sm:py-20 bg-white" id="about">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="pulse-chip mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
            <span>About</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                👨‍💼 About
              </h2>
              
              <div className="space-y-4 text-lg text-gray-700 mb-8">
                <p>
                  Hi, I'm <strong>[Name]</strong>.
                </p>
                <p>
                  I help stuck thinkers take clear action.
                </p>
                <p>
                  Whether you're building a biz or finishing your thesis—
                </p>
                <p className="text-pulse-600 font-medium">
                  → You don't have to figure it out alone.
                </p>
              </div>
              
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{credential}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src="/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png" 
                  alt="Coach Profile" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/20 to-transparent"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-pulse-100 rounded-full opacity-60 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gray-100 rounded-full opacity-60 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
