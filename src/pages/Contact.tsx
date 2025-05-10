
import React from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <Layout>
      <HeroSection 
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our travel experts."
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2000&auto=format&fit=crop"
        size="sm"
        overlay="medium"
      />
      
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-display font-semibold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      type="text" 
                      placeholder="Your name" 
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Your phone number" 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input 
                    id="subject" 
                    type="text" 
                    placeholder="What is this regarding?" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help..." 
                    className="min-h-[150px]" 
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="file">Attachments (Optional)</Label>
                  <Input 
                    id="file" 
                    type="file" 
                    accept=".pdf,.doc,.docx,.jpg,.png"
                  />
                  <p className="text-xs text-gray-500">
                    Max file size: 5MB. Supported formats: PDF, DOC, JPG, PNG
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-teal-500 hover:bg-teal-600"
                >
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">Contact Information</h2>
                <p className="text-charcoal-700 mb-6">
                  Have questions about our trips or need help planning your next adventure? 
                  Reach out to our friendly team using any of the methods below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                      <p className="text-charcoal-700">
                        123 Adventure Avenue<br />
                        Explore District<br />
                        San Francisco, CA 94111<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email Us</h3>
                      <p className="text-charcoal-700 mb-1">
                        <strong>General Inquiries:</strong><br />
                        <a href="mailto:info@travelbuddy.com" className="text-teal-600 hover:underline">
                          info@travelbuddy.com
                        </a>
                      </p>
                      <p className="text-charcoal-700 mb-1">
                        <strong>Bookings:</strong><br />
                        <a href="mailto:bookings@travelbuddy.com" className="text-teal-600 hover:underline">
                          bookings@travelbuddy.com
                        </a>
                      </p>
                      <p className="text-charcoal-700">
                        <strong>Support:</strong><br />
                        <a href="mailto:support@travelbuddy.com" className="text-teal-600 hover:underline">
                          support@travelbuddy.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-12 w-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Call Us</h3>
                      <p className="text-charcoal-700 mb-1">
                        <strong>Main Office:</strong><br />
                        <a href="tel:+15551234567" className="text-teal-600 hover:underline">
                          +1 (555) 123-4567
                        </a>
                      </p>
                      <p className="text-charcoal-700">
                        <strong>Customer Support:</strong><br />
                        <a href="tel:+15559876543" className="text-teal-600 hover:underline">
                          +1 (555) 987-6543
                        </a>
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Available Monday-Friday, 9am-6pm PT
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-display font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://facebook.com" 
                    className="bg-teal-100 hover:bg-teal-200 text-teal-600 h-12 w-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </a>
                  <a 
                    href="https://instagram.com" 
                    className="bg-teal-100 hover:bg-teal-200 text-teal-600 h-12 w-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    className="bg-teal-100 hover:bg-teal-200 text-teal-600 h-12 w-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://youtube.com" 
                    className="bg-teal-100 hover:bg-teal-200 text-teal-600 h-12 w-12 rounded-full flex items-center justify-center transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <h2 className="text-2xl font-display font-semibold mb-6 text-center">Find Us</h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.26132174465!2d-122.4505186918891!3d37.77493286390406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1632834287432!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="TravelBuddy Location"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-sand-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle mx-auto">
              Find quick answers to common questions about contacting and booking with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-display font-semibold mb-3">How quickly will I receive a response?</h3>
              <p className="text-charcoal-700">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call our customer support line directly.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-display font-semibold mb-3">Can I visit your office in person?</h3>
              <p className="text-charcoal-700">
                Yes! We welcome visitors during our business hours (Mon-Fri, 9am-6pm). 
                We recommend scheduling an appointment for personalized trip planning.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-display font-semibold mb-3">How do I modify or cancel my booking?</h3>
              <p className="text-charcoal-700">
                Please email our bookings team at bookings@travelbuddy.com with your booking reference number. 
                Cancellation policies vary by trip, so please refer to your booking confirmation.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-display font-semibold mb-3">Do you offer virtual consultations?</h3>
              <p className="text-charcoal-700">
                Absolutely! We can arrange video calls with our travel specialists to discuss your trip plans. 
                Please mention your preference for a virtual meeting in your inquiry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
