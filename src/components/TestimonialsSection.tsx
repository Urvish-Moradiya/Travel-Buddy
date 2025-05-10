
import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '@/data/trips';
import { cn } from '@/lib/utils';

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={cn('bg-sand-100 py-20', className)}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle mx-auto">
            Hear directly from our community of adventurers about their experiences with RavelXplorer.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-coral-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
