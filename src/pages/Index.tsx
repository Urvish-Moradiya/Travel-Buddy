
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Preload main assets
    const preloadImages = [
      // Add key images that should be preloaded
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21'
    ];
    
    // Preload each image
    let loadedCount = 0;
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === preloadImages.length) {
          setLoading(false);
          // Smooth transition to home page after assets are loaded
          const timer = setTimeout(() => {
            navigate('/home');
          }, 1000);
          return () => clearTimeout(timer);
        }
      };
    });
    
    // Fallback in case images don't load
    const fallbackTimer = setTimeout(() => {
      if (loading) {
        setLoading(false);
        navigate('/home');
      }
    }, 3000);
    
    return () => clearTimeout(fallbackTimer);
  }, [navigate, loading]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-teal-500 to-teal-600">
      <div className="animate-fade-in text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Travel Buddy
        </h1>
        <p className="text-white/80 text-lg">Taking you to amazing destinations...</p>
        <div className="mt-6 w-16 h-1 bg-white/50 mx-auto rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Index;
