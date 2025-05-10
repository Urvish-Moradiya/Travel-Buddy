import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '@/data/trips';
import { cn } from '@/lib/utils';

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection = ({ className }: TestimonialsSectionProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current === totalSlides - 1 ? 0 : current + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  // Get the testimonials for the current slide
  const currentTestimonials = testimonials.slice(
    activeIndex * testimonialsPerSlide,
    (activeIndex + 1) * testimonialsPerSlide
  );

  return (
    <section className={cn('bg-sand-100 py-20', className)}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Hear directly from our community of adventurers about their experiences with RavelXplorer.
          </p>
        </div>

        <div className="relative">
          <div className="flex flex-row justify-center gap-4">
            {currentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-1/3 px-2">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeIndex ? 'bg-coral-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;