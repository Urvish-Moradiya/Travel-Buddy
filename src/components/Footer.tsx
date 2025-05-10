
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-charcoal-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold mb-4">TravelBuddy</h3>
            <p className="text-gray-300 mb-6">
              Crafting unforgettable travel experiences since 2010. We specialize in curated adventures 
              that combine cultural immersion, natural beauty, and authentic experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="https://instagram.com" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://twitter.com" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://youtube.com" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/trips" className="text-gray-300 hover:text-coral-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Our Trips
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-coral-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-coral-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-coral-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Book a Trip
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-coral-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-coral-400 transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-coral-400 mt-1 mr-3" />
                <p className="text-gray-300">
                  123 Adventure Avenue<br />
                  Explore District<br />
                  San Francisco, CA 94111
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-coral-400 mr-3" />
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-coral-400 mr-3" />
                <a href="mailto:info@travelbuddy.com" className="text-gray-300 hover:text-coral-400 transition-colors">
                  info@travelbuddy.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for travel tips, new destinations, and special offers.
            </p>
            <form className="space-y-3">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button type="submit" className="ml-2 bg-coral-500 hover:bg-coral-600">
                  Subscribe
                </Button>
              </div>
              <p className="text-xs text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} TravelBuddy. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/terms" className="hover:text-coral-400 transition-colors">Terms & Conditions</Link>
            <Link to="/privacy-policy" className="hover:text-coral-400 transition-colors">Privacy Policy</Link>
            <Link to="/faq" className="hover:text-coral-400 transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
