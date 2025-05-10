
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Trip } from '@/data/trips';
import { Skeleton } from '@/components/ui/skeleton';

interface TripCardProps {
  trip: Trip;
  className?: string;
  featured?: boolean;
}

const TripCard = ({ trip, className, featured = false }: TripCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const fallbackImage = "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000&auto=format&fit=crop";
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div 
      className={cn(
        'trip-card',
        featured && 'border-l-4 border-coral-500',
        className
      )}
    >
      <div className="trip-card-image-container">
        {!imageLoaded && !imageError && (
          <Skeleton className="w-full h-full absolute inset-0" />
        )}
        <img 
          src={imageError ? fallbackImage : trip.image}
          alt={trip.title} 
          className={cn(
            "trip-card-image",
            !imageLoaded && "opacity-0",
            imageLoaded && "opacity-100"
          )}
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
        {featured && (
          <div className="absolute top-3 right-3 bg-coral-500 text-white py-1 px-3 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>
      <div className="trip-card-content">
        <div className="flex justify-between items-start mb-2">
          <h3 className="trip-card-title">{trip.title}</h3>
        </div>
        <p className="text-charcoal-600 mb-2">{trip.destination}</p>
        <div className="flex items-center mb-4">
          <div className="flex mr-2">
            {[...Array(5)].map((_, i) => (
              <svg 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(trip.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-charcoal-600">({trip.reviews} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {trip.tags.map((tag) => (
            <span key={tag} className="badge badge-primary">
              #{tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-sm text-charcoal-600">{trip.duration}</p>
            <p className="trip-card-price">From ${trip.price}</p>
          </div>
          <Link 
            to={`/trips/${trip.id}`}
            className="btn-outline text-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
