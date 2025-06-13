
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  variant?: "business" | "student";
}

const FAQ = ({ variant = "business" }: FAQProps) => {
  const businessFAQs = [
    {
      question: "How is this different from regular business coaching?",
      answer: "Most business coaching gives you frameworks and strategies. I focus on one thing: clarity. We cut through the noise, identify what's actually blocking you, and create a simple path forward. No complicated systems or overwhelming action plans."
    },
    {
      question: "What if I don't know what my real problem is?",
      answer: "That's exactly why we start with a free discovery call. Most people think they know their main challenge, but it's usually something deeper. I help you uncover the real issue so we can solve the right problem."
    },
    {
      question: "How quickly will I see results?",
      answer: "Clarity often comes in the first session. You'll leave knowing exactly what to focus on next. Real momentum typically builds within 2-4 weeks of consistent action on the right priorities."
    },
    {
      question: "Do you work with all types of businesses?",
      answer: "I work best with entrepreneurs who feel stuck, overwhelmed, or unclear about their next steps. Whether you're just starting out or scaling up, if you need clarity and focus, we can work together."
    },
    {
      question: "What happens if we're not a good fit?",
      answer: "That's what the free discovery call is for. If I can't help you, I'll tell you honestly and point you toward someone who can. No hard feelings, no pressure."
    }
  ];

  const studentFAQs = [
    {
      question: "I'm completely stuck on my thesis. Can you really help?",
      answer: "Yes. Thesis paralysis is usually about clarity, not capability. We'll break down your project into manageable pieces, identify your real obstacles, and create a clear path to completion."
    },
    {
      question: "How is this different from academic advising?",
      answer: "Your advisor helps with content and research. I help with process and psychology. We focus on overcoming mental blocks, staying motivated, and maintaining momentum throughout your thesis journey."
    },
    {
      question: "What if I'm behind on my timeline?",
      answer: "Most students feel behind. We'll assess where you actually are versus where you need to be, then create a realistic plan to get back on track. No judgment, just practical solutions."
    },
    {
      question: "Do you help with writing or just strategy?",
      answer: "I focus on strategy, structure, and overcoming blocks. I won't write your thesis for you, but I'll help you figure out how to write it effectively and consistently."
    },
    {
      question: "What if my field is highly technical?",
      answer: "The challenges of thesis completion are similar across fields. While I won't help with your technical content, I can definitely help with organization, motivation, and the psychological aspects of finishing."
    }
  ];

  const faqs = variant === "student" ? studentFAQs : businessFAQs;

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 overflow-x-hidden" id="faq">
      <div className="section-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <div className="pulse-chip mx-auto mb-4 sm:mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span>
              <span>FAQ</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Common Questions
            </h2>
            
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              {variant === "student" 
                ? "Everything you need to know about thesis coaching and support."
                : "Everything you need to know about clarity coaching and how it works."
              }
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white rounded-2xl shadow-elegant border-0 px-6 py-2"
                >
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline hover:text-pulse-600 transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
