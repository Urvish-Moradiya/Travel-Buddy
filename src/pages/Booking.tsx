
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import BookingForm from '@/components/BookingForm';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const preselectedTrip = searchParams.get('trip') || '';
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <HeroSection 
        title="Book Your Adventure"
        subtitle="Start your journey with us today"
        backgroundImage="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2000&auto=format&fit=crop"
        size="sm"
        overlay="medium"
      />
      
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <BookingForm preselectedTrip={preselectedTrip} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
