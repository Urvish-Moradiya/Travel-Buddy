
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface ContactFormSimpleProps {
  className?: string;
}

const ContactFormSimple = ({ className }: ContactFormSimpleProps) => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    
    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div 
      className={cn(
        'bg-white shadow-lg rounded-lg p-6 md:p-8',
        className
      )}
    >
      <h3 className="font-display text-2xl font-semibold mb-4 text-charcoal-800">
        Quick Inquiry
      </h3>
      <p className="text-charcoal-600 mb-6">
        Have a question? Fill out the form below and we'll get back to you soon.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input 
            type="text" 
            placeholder="Your Name" 
            required 
            className="border-gray-300"
          />
        </div>
        <div>
          <Input 
            type="email" 
            placeholder="Your Email" 
            required 
            className="border-gray-300"
          />
        </div>
        <div>
          <Textarea 
            placeholder="Your Message" 
            required 
            className="border-gray-300 min-h-[120px]"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-teal-500 hover:bg-teal-600"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactFormSimple;
