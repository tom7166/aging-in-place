import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HandymanServices: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/services/mobile-handyman-services', { replace: true });
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-gray-600">Redirecting to Mobile Handyman Services...</p>
    </div>
  );
};

export default HandymanServices;
