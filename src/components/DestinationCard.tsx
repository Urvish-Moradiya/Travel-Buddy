
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface DestinationCardProps {
  destination: {
    id: string;
    name: string;
    country: string;
    image: string;
    featured?: boolean;
  };
  className?: string;
}

const DestinationCard = ({ destination, className }: DestinationCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const fallbackImage = "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop";
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Link
      to={`/trips?destination=${destination.id}`}
      className={cn(
        'relative group overflow-hidden rounded-xl aspect-[4/5] block transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {!imageLoaded && !imageError && (
        <div className="w-full h-full">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      
      <img
        src={imageError ? fallbackImage : destination.image}
        alt={`${destination.name}, ${destination.country}`}
        className={cn(
          "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
          !imageLoaded && "opacity-0",
          imageLoaded && "opacity-100"
        )}
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="transform transition-transform duration-300">
          <h3 className="text-xl lg:text-2xl font-display font-semibold">{destination.name}</h3>
          <p className="text-white/80 mb-2">{destination.country}</p>
          
          <div className="flex items-center text-sm font-medium text-coral-400 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <span>Explore destination</span>
            <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
