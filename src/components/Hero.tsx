
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";
import LottieAnimation from "./LottieAnimation";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [lottieData, setLottieData] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isBusinessOwner, setIsBusinessOwner] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch('/loop-header.lottie')
      .then(response => response.json())
      .then(data => setLottieData(data))
      .catch(error => console.error("Error loading Lottie animation:", error));
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current || !imageRef.current) return;
      
      const {
        left,
        top,
        width,
        height
      } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      imageRef.current.style.transform = `perspective(1000px) rotateY(${x * 2.5}deg) rotateX(${-y * 2.5}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = () => {
      if (!imageRef.current) return;
      imageRef.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }
    
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [isMobile]);
  
  useEffect(() => {
    if (isMobile) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const elements = document.querySelectorAll('.parallax');
      elements.forEach(el => {
        const element = el as HTMLElement;
        const speed = parseFloat(element.dataset.speed || '0.1');
        const yPos = -scrollY * speed;
        element.style.setProperty('--parallax-y', `${yPos}px`);
      });
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    const handleStorageChange = () => {
      const toggleState = localStorage.getItem('isBusinessOwner');
      if (toggleState !== null) {
        setIsBusinessOwner(JSON.parse(toggleState));
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  
  return (
    <section 
      className="overflow-hidden relative bg-cover min-h-screen flex items-center justify-center overflow-x-hidden" 
      id="hero" 
      style={{
        backgroundImage: 'url("/Header-background.webp")',
        backgroundPosition: 'center 30%', 
        padding: isMobile ? '120px 16px 60px' : '120px 20px 60px'
      }}
    >
      <div className="absolute -top-[10%] -right-[5%] w-1/2 h-[70%] bg-pulse-gradient opacity-20 blur-3xl rounded-full"></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto" ref={containerRef}>
        <div className="space-y-6 sm:space-y-8">
          <h1 
            className={cn(
              "font-bold leading-tight opacity-0 animate-fade-in",
              isMobile 
                ? "text-3xl sm:text-4xl" 
                : "text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
            )}
            style={{ animationDelay: "0.1s" }}
          >
            Clarity. Focus.<br />
            <span className="text-pulse-500">Momentum.</span>
          </h1>
          
          <p 
            style={{ animationDelay: "0.3s" }} 
            className={cn(
              "leading-relaxed opacity-0 animate-fade-in text-gray-700 font-normal max-w-2xl mx-auto",
              isMobile ? "text-lg sm:text-xl mb-6" : "text-xl sm:text-2xl mb-8"
            )}
          >
            {isBusinessOwner 
              ? "Stuck in idea overload? Let's simplify your strategy."
              : "Lost in your thesis? Get a clear path to finish fast."
            }
          </p>
          
          <div 
            className="opacity-0 animate-fade-in" 
            style={{ animationDelay: "0.5s" }}
          >
            <a 
              href="#cta" 
              className={cn(
                "inline-flex items-center justify-center group text-center text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg",
                isMobile 
                  ? "w-full sm:w-auto text-base px-6 py-3" 
                  : "text-lg px-8 py-4"
              )}
              style={{
                backgroundColor: '#FE5C02',
                border: '1px solid white',
              }}
            >
              <Phone className="mr-3 w-5 h-5" />
              Book Free Clarity Call
            </a>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute bottom-0 left-1/4 w-64 h-64 bg-pulse-100/30 rounded-full blur-3xl -z-10 parallax" data-speed="0.05"></div>
    </section>
  );
};

export default Hero;
