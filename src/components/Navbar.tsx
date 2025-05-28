
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessOwner, setIsBusinessOwner] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/student') {
      setIsBusinessOwner(false);
    } else {
      setIsBusinessOwner(true);
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const handleToggleChange = (type: 'business' | 'student') => {
    if (type === 'student') {
      navigate('/student');
    } else {
      navigate('/business-owner');
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleNavigation = (path: string) => {
    if (path === '/') {
      navigate('/business-owner');
    } else {
      navigate(path);
    }
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 transition-all duration-300",
        isScrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation('/business-owner');
          }}
          aria-label="Tharsis.solutions"
        >
          <span 
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900"
            style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
          >
            Tharsis.solutions
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <a 
            href="#" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/business-owner');
            }}
          >
            Home
          </a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#testimonials" className="nav-link">Client Stories</a>
          <a href="#free-tools" className="nav-link">Free Tools</a>
          <a href="#cta" className="nav-link">Book a Call</a>
        </nav>

        {/* Desktop Toggle Switch */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => handleToggleChange('business')}
            className={cn(
              "px-3 py-1 rounded-full text-sm transition-all",
              isBusinessOwner 
                ? "bg-pulse-500 text-white" 
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Business Owner
          </button>
          <button
            onClick={() => handleToggleChange('student')}
            className={cn(
              "px-3 py-1 rounded-full text-sm transition-all",
              !isBusinessOwner 
                ? "bg-pulse-500 text-white" 
                : "text-gray-500 hover:text-gray-700"
            )}
          >
            Student
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 p-3 focus:outline-none" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-white flex flex-col pt-16 px-4 md:hidden transition-all duration-300 ease-in-out",
        isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
      )}>
        {/* Mobile Toggle Buttons - Stacked */}
        <div className="mb-6 space-y-2">
          <button
            onClick={() => handleToggleChange('business')}
            className={cn(
              "w-full py-3 px-4 rounded-lg text-center font-medium transition-all",
              isBusinessOwner 
                ? "bg-pulse-500 text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            I'm a Business Owner
          </button>
          <button
            onClick={() => handleToggleChange('student')}
            className={cn(
              "w-full py-3 px-4 rounded-lg text-center font-medium transition-all",
              !isBusinessOwner 
                ? "bg-pulse-500 text-white shadow-md" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            I'm a Student
          </button>
        </div>

        <nav className="flex flex-col space-y-2">
          <a 
            href="#" 
            className="text-lg font-medium py-3 px-4 w-full text-center rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={(e) => {
              e.preventDefault();
              handleNavigation('/business-owner');
            }}
          >
            Home
          </a>
          <a 
            href="#how-it-works" 
            className="text-lg font-medium py-3 px-4 w-full text-center rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            className="text-lg font-medium py-3 px-4 w-full text-center rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Client Stories
          </a>
          <a 
            href="#free-tools" 
            className="text-lg font-medium py-3 px-4 w-full text-center rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Free Tools
          </a>
          <a 
            href="#cta" 
            className="text-lg font-medium py-3 px-4 w-full text-center rounded-lg hover:bg-gray-100 transition-colors" 
            onClick={() => {
              setIsMenuOpen(false);
              document.body.style.overflow = '';
            }}
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
