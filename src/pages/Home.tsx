
import React, { useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import DestinationCard from '@/components/DestinationCard';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import CategorySelector from '@/components/CategorySelector';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactFormSimple from '@/components/ContactFormSimple';
import { destinations } from '@/data/trips';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';

const Home = () => {
  // Get featured destinations
  const featuredDestinations = destinations.filter(dest => dest.featured);
  
  // Animation effect when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection 
        title="Discover Your Dream Destination"
        subtitle="Unforgettable journeys begin with Travel Buddy. Experience the world's wonders with expert guidance and personalized adventures."
        backgroundImage="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2000&auto=format&fit=crop"
        buttonText="Start Your Journey"
        buttonLink="/trips"
        size="full"
        overlay="medium"
      />

      {/* Stats Section */}
      <section className="bg-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-4xl font-display font-bold text-teal-500 mb-2">50+</p>
              <p className="text-charcoal-600">Destinations</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-display font-bold text-teal-500 mb-2">10k+</p>
              <p className="text-charcoal-600">Happy Travelers</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-display font-bold text-teal-500 mb-2">15+</p>
              <p className="text-charcoal-600">Years Experience</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-display font-bold text-teal-500 mb-2">24/7</p>
              <p className="text-charcoal-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations - Auto Sliding Carousel */}
      <section className="section-padding bg-sand-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Destinations</h2>
            <p className="section-subtitle mx-auto">
              Explore our most popular destinations loved by travelers from around the world.
            </p>
          </div>
          
          <div className="px-4">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
                containScroll: "trimSnaps",
              }}
              data-autoscroll="true"
              className="w-full" 
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {featuredDestinations.map((destination) => (
                  <CarouselItem key={destination.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                    <DestinationCard 
                      destination={destination} 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-8">
                <CarouselPrevious className="relative inset-auto translate-y-0 hover:bg-accent" />
                <CarouselNext className="relative inset-auto translate-y-0 hover:bg-accent" />
              </div>
            </Carousel>
          </div>
          
          <div className="flex justify-center mt-10">
            <Button asChild variant="secondary" size="lg" className="group">
              <Link to="/trips" className="flex items-center">
                Browse All Destinations 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle mx-auto">
              Planning your dream vacation with RavelXplorer is simple and stress-free.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center p-6 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-coral-500 text-white flex items-center justify-center font-bold">1</div>
              <MapPin className="w-12 h-12 mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-display font-semibold mb-3">Choose Destination</h3>
              <p className="text-charcoal-600">Browse our selection of breathtaking destinations and find the perfect match for your travel desires.</p>
            </div>
            
            <div className="text-center p-6 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-coral-500 text-white flex items-center justify-center font-bold">2</div>
              <Calendar className="w-12 h-12 mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-display font-semibold mb-3">Book Your Trip</h3>
              <p className="text-charcoal-600">Select your dates, customize your itinerary, and secure your booking with our simple reservation system.</p>
            </div>
            
            <div className="text-center p-6 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-coral-500 text-white flex items-center justify-center font-bold">3</div>
              <Users className="w-12 h-12 mx-auto mb-4 text-teal-500" />
              <h3 className="text-xl font-display font-semibold mb-3">Enjoy Your Journey</h3>
              <p className="text-charcoal-600">Relax and enjoy your perfectly planned adventure with 24/7 support from our travel experts.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      
      {/* Find Your Trip by Category */}
      <CategorySelector />
      
      {/* Special Offers */}
      <section className="section-padding bg-gradient-to-br from-teal-500/20 to-teal-500/5">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Special Offers</h2>
            <p className="section-subtitle mx-auto">
              Take advantage of our limited-time deals and exclusive packages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2000&auto=format&fit=crop" 
                  alt="Summer Adventure" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-coral-500 text-white font-semibold py-1 px-3 rounded-full">
                  25% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">Summer Adventure Package</h3>
                <p className="text-charcoal-600 mb-4">Explore mountain trails and pristine lakes with our adventure package. Limited time offer.</p>
                <Button asChild variant="outline">
                  <Link to="/trips">View Details</Link>
                </Button>
              </div>
            </Card>
            
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img 
                  src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2000&auto=format&fit=crop" 
                  alt="Beach Relaxation" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-coral-500 text-white font-semibold py-1 px-3 rounded-full">
                  30% OFF
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">Tropical Beach Getaway</h3>
                <p className="text-charcoal-600 mb-4">Relax on white sandy beaches and enjoy crystal clear waters with our premium beach package.</p>
                <Button asChild variant="outline">
                  <Link to="/trips">View Details</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-500">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Start Your Adventure?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-lg">
                Contact us today to plan your perfect getaway. Our travel specialists are ready to craft an unforgettable experience just for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg">info@travelbuddy.com</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg">88888 88888</span>
                </div>
              </div>
            </div>
            <ContactFormSimple />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
