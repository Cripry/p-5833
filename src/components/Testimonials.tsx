
import React, { useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface TestimonialProps {
  content: string;
  author: string;
  type: 'business' | 'student';
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [

  {
    content: "",
    author: "",
    type: 'business',
    backgroundImage: "/lovable-uploads/af80891e-bc32-4f2d-be17-f68760691935.png"
  },
  {
    content: "",
    author: "",
    type: 'business',
    backgroundImage: "/lovable-uploads/6e354870-1a4e-4adc-a832-28c06dcb5472.png"
  },
  {
    content: "",
    author: "",
    type: 'student',
    backgroundImage: "/lovable-uploads/beefa930-448f-40bc-86ac-7f7a019bc763.png"
  }
];

const TestimonialCard = ({
  content,
  author,
  type,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  const typeIcon = type === 'business' ? '💼' : '🎓';
  
  return (
    <div 
      className="bg-cover bg-center rounded-lg p-8 h-full flex flex-col justify-between text-white transform transition-transform duration-300 hover:-translate-y-2 relative overflow-hidden min-h-[280px]" 
      style={{
        backgroundImage: `url('${backgroundImage}')`
      }}
    >
      <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-2xl">
        {typeIcon}
      </div>
      
      <div className="relative z-10">
        <p className="text-xl mb-8 font-medium leading-relaxed pr-16">
          "{content}"
        </p>
        <div>
          <h4 className="font-semibold text-xl">– {author}</h4>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-white relative" id="testimonials" ref={sectionRef}>
      <div className="section-container opacity-0 animate-on-scroll">
        <div className="text-center mb-12">
          <div className="pulse-chip mx-auto mb-6">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
            <span>Success Stories</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mb-4">Spotlight Stories</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Real results from real people who found their clarity.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel className="w-full" opts={{ align: "start", loop: true }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <TestimonialCard 
                    content={testimonial.content} 
                    author={testimonial.author} 
                    type={testimonial.type}
                    backgroundImage={testimonial.backgroundImage} 
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-12" />
            <CarouselNext className="-right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
