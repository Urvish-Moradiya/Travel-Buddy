
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import TripCard from './TripCard';
import { trips } from '@/data/trips';

interface CategorySelectorProps {
  className?: string;
}

const CategorySelector = ({ className }: CategorySelectorProps) => {
  const [activeCategory, setActiveCategory] = useState('beach');
  
  const categories = [
    {
      id: 'beach',
      name: 'Beach',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
          <path d="M16.5 19c-2.619 0-5.155-1.515-7.5-4.5s-3.603-5.919-3-8.5a5.5 5.5 0 0 1 10.719-1.54A5.5 5.5 0 0 1 16.5 8c1.55 0 3.045 0.15 4.25-0.67 1.206-0.82 2.75-1.825 3.25-3.33v12l-2 2c-1.55.55-3.055 1-5.5 1z" />
          <path d="M8 16l-1.818-1.818A1.996 1.996 0 0 0 2 16v4a2 2 0 0 0 2 2h12.9a1.998 1.998 0 0 0 1.974-1.641L20 16l-12 0z" />
        </svg>
      )
    },
    {
      id: 'adventure',
      name: 'Adventure',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
          <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
      )
    },
    {
      id: 'cultural',
      name: 'Cultural',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
          <rect x="3" y="11" width="18" height="10" rx="2" />
          <path d="M12 11V3" />
          <path d="M7 11V7" />
          <path d="M17 11V7" />
          <path d="M12 3h5a2 2 0 0 1 2 2v2" />
          <path d="M7 7V5a2 2 0 0 1 2-2h3" />
        </svg>
      )
    },
    {
      id: 'luxury',
      name: 'Luxury',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 mr-2">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      )
    }
  ];
  
  const filteredTrips = trips.filter(trip => {
    switch (activeCategory) {
      case 'beach': return trip.tags.includes('Beach');
      case 'adventure': return trip.tags.includes('Adventure');
      case 'cultural': return trip.tags.includes('Cultural');
      case 'luxury': return trip.tags.includes('Luxury');
      default: return true;
    }
  }).slice(0, 3); // Limit to 3 trips

  return (
    <section className={cn('py-16 md:py-24 bg-sand-50', className)}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Find Your Perfect Trip</h2>
          <p className="section-subtitle mx-auto">
            Explore our handpicked trips by category and discover your next dream vacation.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                'flex items-center px-6 py-3 rounded-full transition-all text-lg font-medium',
                activeCategory === category.id
                  ? 'bg-teal-500 text-white shadow-md'
                  : 'bg-white text-charcoal-700 hover:bg-teal-50 hover:shadow'
              )}
            >
              {category.icon}
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/trips" 
            className="btn-primary inline-flex items-center"
          >
            View All Trips
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySelector;
