
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    location: string;
    quote: string;
    rating: number;
    image: string;
  };
  className?: string;
}

const TestimonialCard = ({ testimonial, className }: TestimonialCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const fallbackImage = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop";
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  return (
    <div 
      className={cn(
        'bg-white rounded-xl p-6 shadow-lg flex flex-col h-full',
        className
      )}
    >
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden relative">
          {!imageLoaded && !imageError && (
            <Skeleton className="w-full h-full absolute inset-0" />
          )}
          <img 
            src={imageError ? fallbackImage : testimonial.image}
            alt={testimonial.name} 
            className={cn(
              "w-full h-full object-cover",
              !imageLoaded && "opacity-0",
              imageLoaded && "opacity-100"
            )}
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
        <div className="ml-4">
          <h3 className="font-display font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-charcoal-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-charcoal-700 flex-grow">
        <q className="italic">{testimonial.quote}</q>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
