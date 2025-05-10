
import React from 'react';
import { cn } from '@/lib/utils';

interface WhyChooseUsProps {
  className?: string;
}

const WhyChooseUs = ({ className }: WhyChooseUsProps) => {
  const reasons = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-teal-500 mb-4">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
      title: "Handcrafted Experiences",
      description: "Every trip is thoughtfully designed by our travel experts who have explored these destinations themselves."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-teal-500 mb-4">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      ),
      title: "24/7 Support",
      description: "Travel with peace of mind knowing our dedicated support team is available around the clock during your journey."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-teal-500 mb-4">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Safety First",
      description: "We prioritize your safety with carefully vetted accommodations, experienced guides, and comprehensive travel insurance."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-12 h-12 text-teal-500 mb-4">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Value for Money",
      description: "Experience exceptional quality without breaking the bank. Our trips are competitively priced with no hidden costs."
    }
  ];

  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose RavelXplorer?</h2>
          <p className="section-subtitle mx-auto">
            We're passionate about crafting meaningful travel experiences that create lifelong memories.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center">
                {reason.icon}
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-charcoal-800">
                {reason.title}
              </h3>
              <p className="text-charcoal-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
