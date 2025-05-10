import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Calendar, Users, Compass, Flag, DollarSign } from 'lucide-react';
import { 
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const CustomizeTrip = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeStep, setActiveStep] = useState('destination');
  const [travelPreferences, setTravelPreferences] = useState({
    destinations: [] as string[],
    activities: [] as string[],
    accommodationType: '',
    transportationType: '',
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    startDate: '',
    endDate: '',
    duration: '',
    budget: 2500,
    travelers: 2,
    requirements: '',
    travelStyle: '',
    activities: [] as string[]
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSliderChange = (value: number[]) => {
    setFormData(prev => ({
      ...prev,
      budget: value[0],
    }));
  };

  const handleTravelerChange = (value: number[]) => {
    setFormData(prev => ({
      ...prev,
      travelers: value[0],
    }));
  };

  const handleActivityToggle = (activity: string) => {
    setFormData(prev => {
      const current = [...prev.activities];
      if (current.includes(activity)) {
        return {
          ...prev,
          activities: current.filter(a => a !== activity)
        };
      } else {
        return {
          ...prev,
          activities: [...current, activity]
        };
      }
    });
  };

  const handleStyleSelect = (style: string) => {
    setFormData(prev => ({
      ...prev,
      travelStyle: style
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this data to your backend
    console.log('Custom trip request:', formData);
    
    // Show success message
    toast({
      title: "Request Submitted!",
      description: "We'll contact you within 24 hours to discuss your custom trip.",
      duration: 5000,
    });
    
    // Show the success drawer
    setShowSuccessDrawer(true);
  };

  const activities = [
    "Beach & Relaxation", "Cultural Experiences", "Adventure & Outdoors", 
    "Food & Culinary", "Wildlife & Nature", "Historical Sites", 
    "City Exploration", "Shopping", "Wellness & Spa"
  ];

  const travelStyles = [
    { id: "luxury", name: "Luxury", description: "Premium accommodations and exclusive experiences" },
    { id: "budget", name: "Budget-Friendly", description: "Great value without compromising on experiences" },
    { id: "adventure", name: "Adventure", description: "Thrilling activities and unique destinations" },
    { id: "family", name: "Family", description: "Kid-friendly activities and accommodations" },
    { id: "romantic", name: "Romantic", description: "Intimate settings and couples experiences" },
    { id: "cultural", name: "Cultural", description: "Deep immersion in local traditions and history" }
  ];

  // Add state for success drawer
  const [showSuccessDrawer, setShowSuccessDrawer] = useState(false);
  
  // Handle redirection after submission
  const handleRedirectToTrips = () => {
    navigate('/trips');
  };
  
  const handleRedirectToHome = () => {
    navigate('/');
  };

  return (
    <Layout>
      <HeroSection 
        title="Design Your Dream Trip"
        subtitle="Let us create a personalized travel experience just for you"
        backgroundImage="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
        size="lg"
        overlay="medium"
      />
      
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Tabs value={activeStep} onValueChange={setActiveStep} className="w-full">
                <div className="bg-sand-100 px-6 py-4 border-b border-sand-200">
                  <TabsList className="grid grid-cols-3 w-full">
                    <TabsTrigger value="destination" className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" /> Destination
                    </TabsTrigger>
                    <TabsTrigger value="preferences" className="flex items-center gap-2">
                      <Compass className="h-4 w-4" /> Preferences
                    </TabsTrigger>
                    <TabsTrigger value="details" className="flex items-center gap-2">
                      <Flag className="h-4 w-4" /> Details
                    </TabsTrigger>
                  </TabsList>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <TabsContent value="destination" className="p-6 space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-display font-semibold">Where would you like to go?</h2>
                      <p className="text-gray-600">
                        Start by telling us your dream destination or let us suggest options based on your interests.
                      </p>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="destination">Dream Destination(s)</Label>
                          <Input 
                            id="destination"
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            placeholder="e.g. Bali, Japan, Italy, or 'Not sure yet'"
                            className="mt-1"
                          />
                          <p className="text-sm text-gray-500 mt-1">
                            Enter multiple destinations separated by commas, or let us know if you're open to suggestions.
                          </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="startDate">Start Date</Label>
                            <Input 
                              id="startDate"
                              name="startDate"
                              type="date"
                              value={formData.startDate}
                              onChange={handleChange}
                              className="mt-1"
                            />
                          </div>
                          
                          <div>
                            <Label htmlFor="endDate">End Date</Label>
                            <Input 
                              id="endDate"
                              name="endDate"
                              type="date"
                              value={formData.endDate}
                              onChange={handleChange}
                              className="mt-1"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <Label>Approximate Duration</Label>
                          <div className="text-sm text-gray-500 mt-1">
                            {formData.startDate && formData.endDate ? 
                              `${Math.max(1, Math.ceil((new Date(formData.endDate).getTime() - new Date(formData.startDate).getTime()) / (1000 * 60 * 60 * 24)))} days` : 
                              "Select dates above to calculate duration"}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 flex justify-end">
                      <Button 
                        type="button"
                        onClick={() => setActiveStep('preferences')}
                        className="bg-teal-500 hover:bg-teal-600"
                      >
                        Continue to Preferences
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="preferences" className="p-6 space-y-6">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-display font-semibold">Travel Preferences</h2>
                      <p className="text-gray-600">
                        Tell us about your travel style and what activities interest you most.
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <Label className="text-lg mb-3 block">Your Travel Style</Label>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {travelStyles.map((style) => (
                              <Card 
                                key={style.id} 
                                className={`cursor-pointer hover:shadow-md transition-shadow border-2 ${
                                  formData.travelStyle === style.id ? 'border-teal-500' : 'border-transparent'
                                }`}
                                onClick={() => handleStyleSelect(style.id)}
                              >
                                <CardContent className="p-4">
                                  <div className="font-medium">{style.name}</div>
                                  <p className="text-sm text-gray-600">{style.description}</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <Label className="text-lg mb-3 block">Interests & Activities</Label>
                          <div className="flex flex-wrap gap-2">
                            {activities.map((activity) => (
                              <button
                                key={activity}
                                type="button"
                                onClick={() => handleActivityToggle(activity)}
                                className={`py-1.5 px-3 rounded-full text-sm font-medium transition-colors ${
                                  formData.activities.includes(activity)
                                    ? 'bg-coral-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                              >
                                {activity}
                              </button>
                            ))}
                          </div>
                          <p className="text-sm text-gray-500 mt-2">
                            Select all that interest you
                          </p>
                        </div>
                        
                        <div>
                          <div className="flex justify-between">
                            <Label htmlFor="budget" className="text-lg mb-3 block">Budget per person</Label>
                            <span className="font-medium">${formData.budget}</span>
                          </div>
                          <div className="px-2">
                            <Slider
                              defaultValue={[formData.budget]}
                              max={10000}
                              min={500}
                              step={500}
                              onValueChange={handleSliderChange}
                              className="mt-2"
                            />
                          </div>
                          <div className="flex justify-between mt-1 text-sm text-gray-500">
                            <span>$500</span>
                            <span>$10,000+</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between">
                            <Label className="text-lg mb-3 block">Number of Travelers</Label>
                            <span className="font-medium">{formData.travelers}</span>
                          </div>
                          <div className="px-2">
                            <Slider
                              defaultValue={[formData.travelers]}
                              max={20}
                              min={1}
                              step={1}
                              onValueChange={handleTravelerChange}
                              className="mt-2"
                            />
                          </div>
                          <div className="flex justify-between mt-1 text-sm text-gray-500">
                            <span>1</span>
                            <span>20+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-6 flex justify-between">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setActiveStep('destination')}
                      >
                        Back
                      </Button>
                      <Button 
                        type="button"
                        onClick={() => setActiveStep('details')}
                        className="bg-teal-500 hover:bg-teal-600"
                      >
                        Continue to Details
                      </Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="details" className="p-6 space-y-6">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-display font-semibold">Your Details</h2>
                      <p className="text-gray-600">
                        Help us get in touch with you about your custom trip plan.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input 
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1"
                            required
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-1"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="requirements">Additional Requirements & Notes</Label>
                        <Textarea 
                          id="requirements"
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleChange}
                          placeholder="Tell us about any special requirements, interests, or questions you have..."
                          className="mt-1 h-32"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-6 flex justify-between">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setActiveStep('preferences')}
                      >
                        Back
                      </Button>
                      <Button 
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-600"
                      >
                        Submit Request
                      </Button>
                    </div>
                  </TabsContent>
                </form>
              </Tabs>
            </div>
            
            <div className="mt-12 bg-sand-100 rounded-lg p-8">
              <h3 className="font-display text-2xl font-semibold mb-4">
                Why Create a Custom Trip?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-teal-500 text-white p-3 rounded-full mb-4">
                    <Compass className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Tailored Experiences</h4>
                  <p className="text-gray-600">
                    Get a journey designed specifically for your interests, preferences, and travel style.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-coral-500 text-white p-3 rounded-full mb-4">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Flexible Scheduling</h4>
                  <p className="text-gray-600">
                    Travel on your own timeline with an itinerary that matches your availability.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="bg-charcoal-500 text-white p-3 rounded-full mb-4">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-medium mb-2">Budget Control</h4>
                  <p className="text-gray-600">
                    Work with a travel expert to maximize your budget and get the most value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Drawer */}
      <Drawer open={showSuccessDrawer} onOpenChange={setShowSuccessDrawer}>
        <DrawerContent>
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-2xl font-display text-teal-600">Thank You!</DrawerTitle>
            <DrawerDescription>
              Your custom trip request has been successfully submitted.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-6 space-y-6 text-center">
            <div className="mx-auto w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">What happens next?</h3>
              <p className="text-gray-600">
                One of our travel experts will review your preferences and contact you within 24 hours to discuss your custom trip details.
              </p>
            </div>
          </div>
          <DrawerFooter className="flex-row space-x-4">
            <Button 
              onClick={handleRedirectToTrips} 
              className="flex-1 bg-teal-500 hover:bg-teal-600"
            >
              Browse Trips
            </Button>
            <Button 
              onClick={handleRedirectToHome}
              variant="outline" 
              className="flex-1"
            >
              Return Home
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Layout>
  );
};

export default CustomizeTrip;
