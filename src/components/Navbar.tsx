
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white bg-opacity-90 backdrop-blur-sm shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/" 
          className={cn(
            'font-display text-2xl font-bold transition-colors',
            isScrolled ? 'text-teal-500' : 'text-white'
          )}
        >
          TravelBuddy
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={cn(
              'nav-link',
              isScrolled && 'text-charcoal-700 hover:text-teal-500 after:bg-teal-500'
            )}
          >
            Home
          </Link>
          <Link 
            to="/trips" 
            className={cn(
              'nav-link',
              isScrolled && 'text-charcoal-700 hover:text-teal-500 after:bg-teal-500'
            )}
          >
            Trips
          </Link>
          <Link 
            to="/about" 
            className={cn(
              'nav-link',
              isScrolled && 'text-charcoal-700 hover:text-teal-500 after:bg-teal-500'
            )}
          >
            About
          </Link>
          <Link 
            to="/gallery" 
            className={cn(
              'nav-link',
              isScrolled && 'text-charcoal-700 hover:text-teal-500 after:bg-teal-500'
            )}
          >
            Gallery
          </Link>
          <Link 
            to="/contact" 
            className={cn(
              'nav-link',
              isScrolled && 'text-charcoal-700 hover:text-teal-500 after:bg-teal-500'
            )}
          >
            Contact
          </Link>
          <Button 
            asChild 
            className={cn(
              'ml-4 transition-all duration-300',
              isScrolled ? 'bg-teal-500 hover:bg-teal-600' : 'bg-coral-500 hover:bg-coral-600'
            )}
          >
            <Link to="/booking">Book a Trip</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleMobileMenu} 
          className={cn(
            'md:hidden',
            isScrolled ? 'text-charcoal-800' : 'text-white'
          )}
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Mobile Menu */}
        <div className={cn(
          'fixed inset-0 bg-charcoal-900/95 z-50 flex flex-col justify-center items-center transition-all duration-300 md:hidden',
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}>
          <button 
            onClick={toggleMobileMenu}
            className="absolute top-5 right-5 text-white text-xl"
          >
            &times;
          </button>
          <nav className="flex flex-col items-center space-y-6 text-center">
            <Link 
              to="/" 
              className="text-white text-2xl font-medium hover:text-coral-400"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/trips" 
              className="text-white text-2xl font-medium hover:text-coral-400"
              onClick={toggleMobileMenu}
            >
              Trips
            </Link>
            <Link 
              to="/about" 
              className="text-white text-2xl font-medium hover:text-coral-400"
              onClick={toggleMobileMenu}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className="text-white text-2xl font-medium hover:text-coral-400"
              onClick={toggleMobileMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className="text-white text-2xl font-medium hover:text-coral-400"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Button 
              asChild 
              className="mt-4 bg-coral-500 hover:bg-coral-600"
            >
              <Link 
                to="/booking"
                onClick={toggleMobileMenu}
              >
                Book a Trip
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
