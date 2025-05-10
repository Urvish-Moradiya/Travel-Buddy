
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "With over 15 years of travel industry experience, Sarah founded TravelBuddy to share her passion for authentic travel experiences.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      bio: "Michael ensures every trip runs smoothly from start to finish. His attention to detail and operational expertise are unmatched.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Travel Experience Designer",
      bio: "Elena has visited over 60 countries and uses her extensive knowledge to create unforgettable travel experiences.",
      image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=500&auto=format&fit=crop"
    },
    {
      name: "David Williams",
      role: "Customer Experience Manager",
      bio: "David is dedicated to ensuring every traveler receives personalized attention and exceptional service throughout their journey.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop"
    }
  ];
  
  const values = [
    {
      title: "Authenticity",
      description: "We believe in creating genuine connections with local cultures and communities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: "Sustainability",
      description: "We're committed to environmentally conscious travel practices and supporting local communities.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service, from planning to execution.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We continuously seek new ways to enhance our travel experiences and services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-teal-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <Layout>
      <HeroSection 
        title="About TravelBuddy"
        subtitle="Our story, mission, and the people behind your incredible journeys"
        backgroundImage="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=2000&auto=format&fit=crop"
        size="md"
      />
      
      {/* Company Story */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-6">Our Story</h2>
              <div className="space-y-4 text-charcoal-700">
                <p>
                  Founded in 2010 by passionate traveler Sarah Johnson, TravelBuddy began with a simple mission: 
                  to create travel experiences that go beyond tourist attractions and truly connect people with the 
                  heart and soul of destinations.
                </p>
                <p>
                  After years of corporate travel planning, Sarah saw a gap in the market for authentic, immersive 
                  travel experiences that supported local communities while providing travelers with meaningful adventures.
                </p>
                <p>
                  What started as a small boutique agency has grown into a trusted name in experiential travel, 
                  but we've never lost sight of our core values. Every trip we plan is still crafted with the same 
                  attention to detail and passion for authentic experiences.
                </p>
                <p>
                  Today, TravelBuddy serves thousands of travelers annually, offering handcrafted journeys to over
                  40 destinations worldwide. Our team of experienced travel specialists, local guides, and operations
                  experts work together to ensure every journey exceeds expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1565220413360-634b7feb049a?q=80&w=700&auto=format&fit=crop" 
                alt="TravelBuddy beginnings" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -left-10 w-3/5 rounded-lg overflow-hidden shadow-xl border-8 border-white hidden md:block">
                <img 
                  src="https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?q=80&w=400&auto=format&fit=crop" 
                  alt="Travel planning session" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle mx-auto">
              These core principles guide everything we do at TravelBuddy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 text-center shadow-lg"
              >
                <div className="flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-4">{value.title}</h3>
                <p className="text-charcoal-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle mx-auto">
              The passionate travel experts behind your unforgettable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold">{person.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{person.role}</p>
                  <p className="text-charcoal-600 text-sm">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Journey</h2>
            <p className="section-subtitle mx-auto">
              The key milestones in our company's history.
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-teal-300 transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 md:space-y-24">
              {/* Item 1 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-display font-semibold mb-2">2010</h3>
                  <h4 className="text-xl text-teal-600 mb-3">The Beginning</h4>
                  <p className="text-charcoal-700">
                    TravelBuddy was founded by Sarah Johnson with a small office in San Francisco
                    and a big dream to transform travel experiences.
                  </p>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white shadow-lg mx-auto relative z-10 flex items-center justify-center text-white font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Item 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 order-2">
                  <h3 className="text-2xl font-display font-semibold mb-2">2013</h3>
                  <h4 className="text-xl text-teal-600 mb-3">Expansion</h4>
                  <p className="text-charcoal-700">
                    We expanded our team and opened our second office in New York City,
                    offering more destinations and customized travel experiences.
                  </p>
                </div>
                <div className="md:w-1/2 md:text-right order-1 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white shadow-lg mx-auto relative z-10 flex items-center justify-center text-white font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Item 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-2xl font-display font-semibold mb-2">2017</h3>
                  <h4 className="text-xl text-teal-600 mb-3">Award-Winning Recognition</h4>
                  <p className="text-charcoal-700">
                    TravelBuddy was recognized as "Best Adventure Travel Company" by Travel Magazine
                    and established our sustainable travel initiative.
                  </p>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white shadow-lg mx-auto relative z-10 flex items-center justify-center text-white font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Item 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 order-2">
                  <h3 className="text-2xl font-display font-semibold mb-2">2023</h3>
                  <h4 className="text-xl text-teal-600 mb-3">Global Network</h4>
                  <p className="text-charcoal-700">
                    Today, TravelBuddy operates in 40+ countries with a network of over 200 local guides,
                    delivering extraordinary experiences to travelers worldwide.
                  </p>
                </div>
                <div className="md:w-1/2 md:text-right order-1 mb-4 md:mb-0">
                  <div className="w-10 h-10 rounded-full bg-teal-500 border-4 border-white shadow-lg mx-auto relative z-10 flex items-center justify-center text-white font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-teal-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have experienced the TravelBuddy difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              <Link to="/trips">Browse Our Trips</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-coral-500 hover:bg-coral-600"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
