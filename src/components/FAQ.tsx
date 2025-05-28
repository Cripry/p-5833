import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
interface FAQProps {
  variant?: "business" | "student";
}
const FAQ = ({
  variant = "business"
}: FAQProps) => {
  const [showAll, setShowAll] = useState(false);
  const businessFAQs = [{
    question: "What should I do if I have too many business ideas and no clear plan?",
    answer: "You don't need fewer ideas — you need structure. Coaching helps you filter, prioritize, and turn your best ideas into a focused action plan. You'll walk away with clarity on what to build first, what can wait, and how to move forward without overwhelm."
  }, {
    question: "Can coaching help if I've tried other business programs and they didn't work?",
    answer: "Yes — many clients come to me after courses or programs that left them confused. This isn't generic advice; it's personalized, one-on-one strategy that meets you where you are. We build clarity, not complexity, and help you take focused action fast."
  }, {
    question: "What kind of coaching do I need if I don't know where to start in my business?",
    answer: "Clarity coaching is ideal if you feel lost or stuck. You don't need a detailed plan to begin — that's what we'll create together. You'll leave with a step-by-step path tailored to your goals, stage, and brain."
  }, {
    question: "Is business clarity coaching useful for beginner entrepreneurs or solopreneurs?",
    answer: "Absolutely. Beginners benefit most from clarity work — it saves time, energy, and mistakes. Whether you're validating an idea or building your first offer, we'll cut through the noise and help you start strong."
  }, {
    question: "How can I move forward if I've been stuck in my business for months?",
    answer: "Feeling stuck often means you lack clarity — not motivation. Coaching helps you break out of decision loops, overwhelm, and mental blocks. Even one session can reset your momentum and give you clear next steps."
  }, {
    question: "Will business coaching help me if I already feel too busy and overwhelmed?",
    answer: "Yes — in fact, that's the best time to start. Coaching isn't about adding more; it's about simplifying. We remove distractions, focus your energy, and reduce decision fatigue so you can get more done with less stress."
  }, {
    question: "How quickly can I see results from small business coaching sessions?",
    answer: "Most clients experience clarity and direction after the very first session. You'll leave with a clear action plan and tools you can use right away. If you continue, each session builds momentum toward your long-term goals."
  }, {
    question: "Can coaching help me prioritize tasks and goals in my business?",
    answer: "Yes. If everything feels urgent or important, we'll fix that. I use proven prioritization methods to help you make sense of your to-do list, focus on what actually matters, and stay aligned with your big-picture goals."
  }, {
    question: "How does coaching help with business decision-making and overthinking?",
    answer: "Coaching gives you frameworks to stop overthinking and make clear, confident choices. You'll stop spinning and start acting with intention — even when stakes feel high. Decision fatigue disappears when your path is clear."
  }, {
    question: "Do I need to commit long-term to benefit from business coaching?",
    answer: "Not at all. You can start with a one-time clarity session. Many clients see huge shifts after just one call. If it's a fit, you can continue — but there's no pressure or lock-in. You stay in control."
  }];
  const studentFAQs = [{
    question: "What if I'm behind on my thesis and need help catching up fast?",
    answer: "No stress — we'll assess where you are and build a catch-up plan that doesn't involve panic. Together, we'll prioritize tasks, structure your chapters, and help you move forward quickly and calmly — without burnout."
  }, {
    question: "Can a thesis coach help me choose and refine my research topic?",
    answer: "Yes. Whether you're still choosing or your topic feels too broad, we'll work together to clarify and narrow it. A strong research question sets the foundation for your thesis — and we'll build it together."
  }, {
    question: "Is academic coaching helpful if I've been procrastinating on my thesis for weeks?",
    answer: "Definitely. Procrastination is often caused by confusion and pressure. Coaching replaces that with clarity and structure. You'll get simple tasks, clear steps, and accountability — so you can finally stop avoiding your work."
  }, {
    question: "How does thesis writing coaching work if I've never done it before?",
    answer: "It's a 1-on-1 session where we talk through where you're stuck, build a structure, and create an action plan. It's not tutoring — it's strategic support to help you think clearly, stay focused, and keep writing."
  }, {
    question: "What's the best way to organize my ideas when writing a thesis?",
    answer: "We'll build a clear outline that matches your university's expectations while fitting your topic. You'll know exactly what goes in each chapter — no more scattered notes or rewriting the same section 10 times."
  }, {
    question: "Can academic coaching help when I feel overwhelmed and can't start?",
    answer: "Yes — we begin exactly where you are. I'll help you take one doable step, remove mental pressure, and build momentum. You don't need to be ready — you just need to show up."
  }, {
    question: "Is this thesis writing support only for PhD students, or for MA students too?",
    answer: "It's for both. I work with MA and PhD students — the method adapts to your level, topic, and goals. Whether it's your first big research paper or your final dissertation, you'll get the support you need."
  }, {
    question: "How do you help students stop procrastinating on their thesis?",
    answer: "We create structure, reduce overwhelm, and build accountability. You'll stop relying on last-minute sprints and start working consistently. I'll help you make thesis writing feel doable — not dreadful."
  }, {
    question: "Can a thesis coach help me finish my dissertation without last-minute stress?",
    answer: "Absolutely. We'll break your work into weekly milestones, create realistic deadlines, and keep you on track. The goal is to finish well — not just finish. You'll feel confident, not rushed."
  }, {
    question: "What if I feel stuck and afraid I'll never finish my thesis?",
    answer: "That fear is valid — and solvable. You're not alone, and you're not broken. Coaching helps you get unstuck by creating clarity, structure, and confidence. You can finish — and I'll guide you every step of the way."
  }];
  const faqs = variant === "business" ? businessFAQs : studentFAQs;
  const visibleFAQs = showAll ? faqs : faqs.slice(0, 5);
  return <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="pulse-chip mx-auto mb-6">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">06</span>
              <span>FAQ</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              FAQ
            </h2>
            
            <p className="text-gray-600 text-lg">
              Everything you need to know about Tharsis and how it can help you
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <Accordion type="single" collapsible className="w-full">
              {visibleFAQs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100 last:border-b-0">
                  <AccordionTrigger className="text-left py-4 hover:no-underline">
                    <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>)}
            </Accordion>

            {faqs.length > 5 && <div className="text-center mt-6 pt-6 border-t border-gray-100">
                <Button variant="outline" onClick={() => setShowAll(!showAll)} className="text-pulse-600 border-pulse-300 hover:bg-pulse-50">
                  {showAll ? "Show Less" : `Show ${faqs.length - 5} More Questions`}
                </Button>
              </div>}
          </div>
        </div>
      </div>
    </section>;
};
export default FAQ;