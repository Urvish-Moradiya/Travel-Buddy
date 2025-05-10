
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  size?: 'sm' | 'md' | 'lg' | 'full';
  overlay?: 'light' | 'medium' | 'dark';
  className?: string;
}

const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttonText,
  buttonLink = '/trips',
  size = 'full',
  overlay = 'medium',
  className
}: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const fallbackImage = "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop";
  
  const getHeightClass = () => {
    switch (size) {
      case 'sm': return 'h-[50vh]';
      case 'md': return 'h-[70vh]';
      case 'lg': return 'h-[85vh]';
      case 'full': return 'h-screen';
      default: return 'h-screen';
    }
  };
  
  const getOverlayClass = () => {
    switch (overlay) {
      case 'light': return 'from-transparent via-charcoal/30 to-charcoal/70';
      case 'medium': return 'from-transparent via-charcoal/40 to-charcoal/90';
      case 'dark': return 'from-charcoal/30 via-charcoal/60 to-charcoal/95';
      default: return 'from-transparent via-charcoal/40 to-charcoal/90';
    }
  };
  
  const scrollToContent = () => {
    const contentSection = document.querySelector('.scroll-target');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Preload the image
  React.useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, [backgroundImage]);
  
  return (
    <div 
      className={cn(
        'relative flex items-center justify-center',
        getHeightClass(),
        className
      )}
    >
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-200">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 transition-transform duration-10000"
        style={{ 
          backgroundImage: `url(${imageError ? fallbackImage : backgroundImage})`,
          animation: 'subtle-zoom 30s infinite alternate ease-in-out',
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
      <div 
        className={cn(
          'absolute inset-0 bg-gradient-to-b',
          getOverlayClass()
        )}
      />
      
      <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-white text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            {title}
          </h1>
          
          {subtitle && (
            <p 
              className="text-white/90 text-xl md:text-2xl mb-8 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {subtitle}
            </p>
          )}
          
          {buttonText && (
            <Button 
              asChild
              size="lg" 
              className="animate-fade-in bg-coral-500 hover:bg-coral-600 text-lg py-6 px-8"
              style={{ animationDelay: '0.6s' }}
            >
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>
          )}
        </div>
      </div>
      
      <button 
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator opacity-75 hover:opacity-100 transition-opacity"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-10 h-10 text-white" />
      </button>
      
      {/* Hidden element to be scrolled to */}
      <div className="scroll-target absolute bottom-0"></div>
    </div>
  );
};

export default HeroSection;
