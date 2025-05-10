import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { trips } from '@/data/trips';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxCaption, setLightboxCaption] = useState('');
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});
  const [errorImages, setErrorImages] = useState<Record<string, boolean>>({});
  
  const fallbackImage = "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=2000&auto=format&fit=crop";
  
  // Get all images from trips and de-duplicate by URL
  const getAllImages = () => {
    const imageMap = new Map();
    
    trips.forEach((trip) => {
      // Add main trip image
      if (!imageMap.has(trip.image)) {
        imageMap.set(trip.image, { 
          url: trip.image, 
          destination: trip.destination, 
          title: trip.title, 
          type: getImageType(trip) 
        });
      }
      
      // Add gallery images
      trip.gallery.forEach((img) => {
        if (!imageMap.has(img)) {
          imageMap.set(img, { 
            url: img, 
            destination: trip.destination, 
            title: trip.title, 
            type: getImageType(trip) 
          });
        }
      });
    });
    
    return Array.from(imageMap.values());
  };
  
  const allImages = getAllImages();
  
  function getImageType(trip: typeof trips[0]): string {
    if (trip.tags.includes('Beach')) return 'beach';
    if (trip.tags.includes('Nature') || trip.tags.includes('Wildlife')) return 'nature';
    if (trip.tags.includes('Cultural') || trip.tags.includes('Historical')) return 'cultural';
    if (trip.tags.includes('Adventure')) return 'adventure';
    return 'other';
  }
  
  const filteredImages = selectedCategory === 'all' 
    ? allImages 
    : allImages.filter((img) => img.type === selectedCategory);
  
  const openLightbox = (image: string, caption: string) => {
    setLightboxImage(image);
    setLightboxCaption(caption);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleImageLoad = (url: string) => {
    setLoadedImages(prev => ({...prev, [url]: true}));
  };

  const handleImageError = (url: string) => {
    setErrorImages(prev => ({...prev, [url]: true}));
  };

  return (
    <Layout>
      <HeroSection 
        title="Our Gallery"
        subtitle="Explore breathtaking destinations through our lens"
        backgroundImage="https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=2000&auto=format&fit=crop"
        size="md"
        overlay="medium"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center mb-12 gap-2 md:gap-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full transition-all text-lg font-medium ${
                selectedCategory === 'all' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-white text-charcoal-700 hover:bg-teal-50'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setSelectedCategory('beach')}
              className={`px-6 py-3 rounded-full transition-all text-lg font-medium ${
                selectedCategory === 'beach' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-white text-charcoal-700 hover:bg-teal-50'
              }`}
            >
              Beaches
            </button>
            <button
              onClick={() => setSelectedCategory('nature')}
              className={`px-6 py-3 rounded-full transition-all text-lg font-medium ${
                selectedCategory === 'nature' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-white text-charcoal-700 hover:bg-teal-50'
              }`}
            >
              Nature
            </button>
            <button
              onClick={() => setSelectedCategory('cultural')}
              className={`px-6 py-3 rounded-full transition-all text-lg font-medium ${
                selectedCategory === 'cultural' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-white text-charcoal-700 hover:bg-teal-50'
              }`}
            >
              Cultural
            </button>
            <button
              onClick={() => setSelectedCategory('adventure')}
              className={`px-6 py-3 rounded-full transition-all text-lg font-medium ${
                selectedCategory === 'adventure' 
                  ? 'bg-teal-500 text-white' 
                  : 'bg-white text-charcoal-700 hover:bg-teal-50'
              }`}
            >
              Adventure
            </button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer"
                onClick={() => openLightbox(errorImages[image.url] ? fallbackImage : image.url, `${image.title} - ${image.destination}`)}
              >
                <div className={`aspect-[4/5] ${index % 7 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
                  {!loadedImages[image.url] && !errorImages[image.url] && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <img 
                    src={errorImages[image.url] ? fallbackImage : image.url}
                    alt={`${image.destination}`} 
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110",
                      !loadedImages[image.url] && !errorImages[image.url] && "opacity-0"
                    )}
                    onLoad={() => handleImageLoad(image.url)}
                    onError={() => handleImageError(image.url)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-display font-semibold text-lg leading-tight">{image.title}</h3>
                    <p className="text-sm text-white/90">{image.destination}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors z-10"
          >
            &times;
          </button>
          <div className="max-w-4xl max-h-[90vh] w-full">
            {!loadedImages[lightboxImage] && !errorImages[lightboxImage] && (
              <div className="w-full aspect-video">
                <Skeleton className="w-full h-full" />
              </div>
            )}
            <img 
              src={errorImages[lightboxImage] ? fallbackImage : lightboxImage}
              alt={lightboxCaption} 
              className={cn(
                "w-full h-full object-contain",
                !loadedImages[lightboxImage] && !errorImages[lightboxImage] && "opacity-0"
              )}
              onLoad={() => handleImageLoad(lightboxImage)}
              onError={() => handleImageError(lightboxImage)}
            />
            <div className="text-white text-center mt-4">
              <p className="text-xl font-display">{lightboxCaption}</p>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
