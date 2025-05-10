
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import BookingForm from '@/components/BookingForm';
import TripCard from '@/components/TripCard';
import { trips, Trip } from '@/data/trips';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from 'lucide-react';

const TripDetail = () => {
  const { tripId } = useParams<{ tripId: string }>();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const foundTrip = trips.find(t => t.id === tripId);
    if (foundTrip) {
      setTrip(foundTrip);
    }
  }, [tripId]);
  
  if (!trip) {
    return (
      <Layout>
        <div className="py-32 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Trip not found</h2>
          <p className="text-gray-600 mb-8">Sorry, we couldn't find the trip you're looking for.</p>
          <Button asChild>
            <Link to="/trips">Browse All Trips</Link>
          </Button>
        </div>
      </Layout>
    );
  }
  
  // All images including main image
  const allImages = [trip.image, ...trip.gallery];
  
  return (
    <Layout>
      {/* Hero Section with Main Image */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: `url(${allImages[activeImageIndex]})` }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container-custom">
            <div className="flex items-center text-sm mb-2 text-white/90">
              <Link to="/" className="hover:text-white">Home</Link>
              <span className="mx-2">›</span>
              <Link to="/trips" className="hover:text-white">Trips</Link>
              <span className="mx-2">›</span>
              <span>{trip.title}</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">{trip.title}</h1>
            <div className="flex items-center flex-wrap gap-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
                </svg>
                <span>{trip.duration}</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>{trip.destination}</span>
              </div>
              <div className="flex items-center">
                <div className="flex mr-1">
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
                <span>({trip.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Gallery Preview */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-4">
          <div className="flex overflow-x-auto gap-3 pb-2">
            {allImages.map((image, index) => (
              <button
                key={index}
                className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 ${
                  index === activeImageIndex ? 'border-teal-500' : 'border-transparent'
                }`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${trip.title} - Photo ${index + 1}`}
                  className="w-full h-full object-cover" 
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="py-12 lg:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column: Trip Details */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="included">What's Included</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-display font-semibold mb-4">About this Trip</h2>
                    <p className="text-charcoal-700 leading-relaxed">{trip.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-3">Trip Highlights</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {trip.tags.map((tag) => (
                        <div key={tag} className="flex items-center bg-sand-100 p-3 rounded-md">
                          <div className="h-8 w-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="font-medium">{tag} Experience</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display font-semibold mb-4">Photo Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {allImages.map((image, index) => (
                        <div 
                          key={index}
                          className="aspect-square rounded-lg overflow-hidden cursor-pointer"
                          onClick={() => setActiveImageIndex(index)}
                        >
                          <img 
                            src={image} 
                            alt={`${trip.title} - Gallery ${index + 1}`} 
                            className="w-full h-full object-cover transition-transform hover:scale-110 duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerary" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-display font-semibold mb-6">Your Journey</h2>
                    <Accordion type="single" collapsible className="w-full">
                      {trip.itinerary.map((item) => (
                        <AccordionItem key={item.day} value={`day-${item.day}`}>
                          <AccordionTrigger className="text-lg font-display">
                            <span className="flex items-center">
                              <span className="bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
                                {item.day}
                              </span>
                              {item.title}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="text-charcoal-700 leading-relaxed pl-11">
                            {item.description}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
                
                <TabsContent value="included" className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-display font-semibold mb-6">What's Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                      {trip.included.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-teal-500 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-3xl font-display font-semibold mb-6">What's Not Included</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
                      {trip.notIncluded.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <X className="h-5 w-5 text-coral-500 mr-3 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="space-y-6">
                  <div>
                    <h2 className="text-3xl font-display font-semibold mb-6">Traveler Reviews</h2>
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-5 h-5 ${i < Math.floor(trip.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-lg font-semibold">{trip.rating} out of 5</span>
                      <span className="ml-2 text-gray-500">({trip.reviews} reviews)</span>
                    </div>
                    
                    <div className="bg-sand-50 rounded-lg p-6 text-center">
                      <p className="text-lg mb-4">Be the first to leave a review for this trip!</p>
                      <Button>Write a Review</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right Column: Booking Form */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
                <div className="mb-6">
                  <div className="text-3xl font-semibold text-teal-600 mb-1">
                    From ${trip.price}
                  </div>
                  <p className="text-charcoal-600">per person</p>
                </div>
                
                <Button 
                  onClick={() => navigate(`/booking?trip=${trip.id}`)}
                  className="w-full py-6 text-lg mb-4 bg-coral-500 hover:bg-coral-600"
                >
                  Book This Trip
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => {
                    // Simulate a share modal
                    window.alert("Share functionality would open here!");
                  }}
                >
                  Share This Trip
                </Button>
                
                <hr className="my-6" />
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Flexible Booking</h4>
                      <p className="text-sm text-charcoal-600">Free cancellation up to 30 days before departure</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Reserve Now, Pay Later</h4>
                      <p className="text-sm text-charcoal-600">Secure your spot with a 20% deposit</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Secure Payments</h4>
                      <p className="text-sm text-charcoal-600">All payments are encrypted and secure</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">24/7 Support</h4>
                      <p className="text-sm text-charcoal-600">Our travel experts are always ready to help</p>
                    </div>
                  </div>
                </div>
                
                <hr className="my-6" />
                
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-3">Need help booking?</p>
                  <a 
                    href="tel:+15551234567" 
                    className="text-teal-600 font-semibold text-lg hover:text-teal-700"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Trips */}
      <section className="py-16 bg-sand-50">
        <div className="container-custom">
          <h2 className="text-3xl font-display font-semibold mb-8 text-center">You Might Also Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips
              .filter(t => t.id !== trip.id && t.tags.some(tag => trip.tags.includes(tag)))
              .slice(0, 3)
              .map((relatedTrip) => (
                <TripCard key={relatedTrip.id} trip={relatedTrip} />
              ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TripDetail;
