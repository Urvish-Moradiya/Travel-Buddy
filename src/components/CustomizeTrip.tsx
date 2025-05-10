
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';

const CustomizeTrip = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/customize-trip');
  };

  return (
    <Button 
      onClick={handleClick}
      className="bg-coral-500 hover:bg-coral-600 text-white flex items-center gap-2"
    >
      <Settings className="w-5 h-5" />
      Customize Your Trip
    </Button>
  );
};

export default CustomizeTrip;
