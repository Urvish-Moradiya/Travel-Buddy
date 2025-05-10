
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { trips } from '@/data/trips';
import { useToast } from '@/hooks/use-toast';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

interface BookingFormProps {
  preselectedTrip?: string;
  className?: string;
}

const BookingForm = ({ preselectedTrip, className }: BookingFormProps) => {
  const { toast } = useToast();
  const [selectedTrip, setSelectedTrip] = useState(preselectedTrip || '');
  const [numTravelers, setNumTravelers] = useState(2);
  const [date, setDate] = useState<Date | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking submission
    toast({
      title: "Booking Request Submitted!",
      description: "Thank you for your booking request. We'll be in touch shortly to confirm your trip details.",
    });
    
    // Reset form
    setSelectedTrip(preselectedTrip || '');
    setNumTravelers(2);
    setDate(undefined);
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  const calculatePrice = () => {
    if (!selectedTrip) return 0;
    
    const trip = trips.find(t => t.id === selectedTrip);
    if (!trip) return 0;
    
    return trip.price * numTravelers;
  };

  return (
    <div 
      className={cn(
        'bg-white rounded-lg shadow-lg p-6 md:p-8',
        className
      )}
    >
      <h2 className="font-display text-2xl font-semibold mb-6 text-charcoal-800">
        Book Your Adventure
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="trip">Select Trip</Label>
            <select
              id="trip"
              value={selectedTrip}
              onChange={(e) => setSelectedTrip(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              required
            >
              <option value="">-- Select a Trip --</option>
              {trips.map((trip) => (
                <option key={trip.id} value={trip.id}>
                  {trip.title} - {trip.destination}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <Label htmlFor="date">Travel Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Select a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => {
                    const today = new Date();
                    // Disable dates in the past and more than 1 year in the future
                    return (
                      date < today ||
                      date > new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
                    );
                  }}
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div>
            <Label htmlFor="travelers">Number of Travelers</Label>
            <Input
              id="travelers"
              type="number"
              min="1"
              max="20"
              value={numTravelers}
              onChange={(e) => setNumTravelers(parseInt(e.target.value))}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" type="text" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" required />
            </div>
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" required />
          </div>
          
          <div>
            <Label htmlFor="special-requests">Special Requests</Label>
            <Textarea
              id="special-requests"
              placeholder="Any dietary requirements, accessibility needs, or other preferences?"
              className="min-h-[100px]"
            />
          </div>
        </div>
        
        {selectedTrip && (
          <div className="bg-sand-100 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Estimated Price:</span>
              <span className="text-xl font-semibold text-teal-600">${calculatePrice().toLocaleString()}</span>
            </div>
            <p className="text-xs text-charcoal-500 mt-2">
              Final price will be confirmed by our travel specialists.
            </p>
          </div>
        )}
        
        <Button 
          type="submit" 
          className="w-full bg-coral-500 hover:bg-coral-600 text-lg py-6"
        >
          Submit Booking Request
        </Button>
        
        <p className="text-sm text-charcoal-500 text-center">
          By submitting this form, you agree to our terms and conditions and privacy policy.
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
