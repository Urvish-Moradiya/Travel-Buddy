
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import TripCard from '@/components/TripCard';
import CustomizeTrip from '@/components/CustomizeTrip';
import { trips } from '@/data/trips';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

const TripListing = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredTrips, setFilteredTrips] = useState(trips);
  const [filters, setFilters] = useState({
    search: '',
    destination: searchParams.get('destination') || '',
    minPrice: 0,
    maxPrice: 5000,
    duration: 'all', // all, short, medium, long
    tags: [] as string[],
  });

  // Get unique destinations and tags
  const destinations = [...new Set(trips.map(trip => trip.destination.split(',')[0].trim()))];
  const allTags = [...new Set(trips.flatMap(trip => trip.tags))];

  useEffect(() => {
    let result = [...trips];
    
    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(trip => 
        trip.title.toLowerCase().includes(searchLower) ||
        trip.destination.toLowerCase().includes(searchLower) ||
        trip.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Filter by destination
    if (filters.destination) {
      result = result.filter(trip => trip.destination.toLowerCase().includes(filters.destination.toLowerCase()));
    }
    
    // Filter by price range
    result = result.filter(trip => 
      trip.price >= filters.minPrice && trip.price <= filters.maxPrice
    );
    
    // Filter by duration
    if (filters.duration !== 'all') {
      result = result.filter(trip => {
        const days = parseInt(trip.duration.split(' ')[0]);
        switch (filters.duration) {
          case 'short': return days <= 7;
          case 'medium': return days > 7 && days <= 14;
          case 'long': return days > 14;
          default: return true;
        }
      });
    }
    
    // Filter by tags
    if (filters.tags.length > 0) {
      result = result.filter(trip => 
        filters.tags.some(tag => trip.tags.includes(tag))
      );
    }
    
    setFilteredTrips(result);
  }, [filters]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setFilters({
      ...filters,
      search: formData.get('search') as string,
    });
  };
  
  const handleTagToggle = (tag: string) => {
    setFilters(prev => {
      const newTags = prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag];
      
      return { ...prev, tags: newTags };
    });
  };
  
  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      minPrice: value[0],
      maxPrice: value[1],
    }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      destination: '',
      minPrice: 0,
      maxPrice: 5000,
      duration: 'all',
      tags: [],
    });
    setSearchParams({});
  };

  return (
    <Layout>
      <HeroSection 
        title="Explore Our Trips"
        subtitle="Find your perfect adventure from our handcrafted collection of experiences"
        backgroundImage="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=2000&auto=format&fit=crop"
        size="md"
        overlay="medium"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="font-display text-xl font-semibold mb-6">Filters</h3>
                
                {/* Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <Label htmlFor="search" className="mb-2 block">Search</Label>
                  <div className="flex">
                    <Input
                      id="search"
                      name="search"
                      type="text"
                      placeholder="Search trips..."
                      value={filters.search}
                      onChange={(e) => setFilters({...filters, search: e.target.value})}
                    />
                    <Button type="submit" variant="ghost" className="ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </Button>
                  </div>
                </form>
                
                {/* Destination */}
                <div className="mb-6">
                  <Label htmlFor="destination" className="mb-2 block">Destination</Label>
                  <select
                    id="destination"
                    value={filters.destination}
                    onChange={(e) => setFilters({...filters, destination: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">All Destinations</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>
                        {dest}
                      </option>
                    ))}
                  </select>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <Label className="mb-2 block">Price Range</Label>
                  <div className="px-2">
                    <Slider
                      defaultValue={[filters.minPrice, filters.maxPrice]}
                      min={0}
                      max={5000}
                      step={100}
                      onValueChange={handlePriceChange}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>${filters.minPrice}</span>
                    <span>${filters.maxPrice}</span>
                  </div>
                </div>
                
                {/* Duration */}
                <div className="mb-6">
                  <Label htmlFor="duration" className="mb-2 block">Duration</Label>
                  <select
                    id="duration"
                    value={filters.duration}
                    onChange={(e) => setFilters({...filters, duration: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="all">Any Duration</option>
                    <option value="short">Short (1-7 Days)</option>
                    <option value="medium">Medium (8-14 Days)</option>
                    <option value="long">Long (14+ Days)</option>
                  </select>
                </div>
                
                {/* Tags */}
                <div className="mb-6">
                  <Label className="mb-3 block">Trip Types</Label>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => handleTagToggle(tag)}
                        className={`py-1 px-3 rounded-full text-sm font-medium ${
                          filters.tags.includes(tag)
                            ? 'bg-teal-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Clear Filters Button */}
                <Button
                  onClick={clearFilters}
                  variant="outline"
                  className="w-full"
                >
                  Clear All Filters
                </Button>

                {/* Customize Trip Button */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium mb-4">Can't find what you're looking for?</h4>
                  <CustomizeTrip />
                </div>
              </div>
            </div>
            
            {/* Trips Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-center">
                <h2 className="text-2xl font-display font-semibold">
                  {filteredTrips.length} {filteredTrips.length === 1 ? 'Trip' : 'Trips'} Found
                </h2>
                <div className="flex items-center mt-3 sm:mt-0 gap-3">
                  <select
                    className="p-2 border border-gray-300 rounded-md"
                    onChange={(e) => {
                      const value = e.target.value;
                      setFilteredTrips(prev => {
                        const sorted = [...prev];
                        if (value === 'price-low') {
                          sorted.sort((a, b) => a.price - b.price);
                        } else if (value === 'price-high') {
                          sorted.sort((a, b) => b.price - a.price);
                        } else if (value === 'rating') {
                          sorted.sort((a, b) => b.rating - a.rating);
                        }
                        return sorted;
                      });
                    }}
                  >
                    <option value="default">Sort By</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
              </div>
              
              {filteredTrips.length === 0 ? (
                <div className="bg-sand-100 rounded-lg p-8 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-xl font-semibold mb-2">No trips found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your search filters, explore our other amazing destinations, or customize your own trip.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button onClick={clearFilters}>
                      Reset Filters
                    </Button>
                    <CustomizeTrip />
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {filteredTrips.map((trip) => (
                    <TripCard 
                      key={trip.id} 
                      trip={trip} 
                      featured={trip.featured}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TripListing;
