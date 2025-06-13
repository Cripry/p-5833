
import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 sm:py-16">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Tharsis Solutions</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Clarity coaching for entrepreneurs and students. Cut through the noise, 
                find your focus, and take action that actually moves you forward.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pulse-400" />
                  <a href="mailto:rolf@tharsis.solutions" className="text-gray-300 hover:text-white transition-colors">
                    rolf@tharsis.solutions
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pulse-400" />
                  <a href="mailto:contact@tharsis.solutions" className="text-gray-300 hover:text-white transition-colors">
                    contact@tharsis.solutions
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#free-tools" className="text-gray-300 hover:text-white transition-colors">
                    Free Tools
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-300 hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-300 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#cta" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Tharsis Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
