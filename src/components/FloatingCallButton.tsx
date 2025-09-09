import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface FloatingCallButtonProps {
  highContrastMode: boolean;
}

const FloatingCallButton: React.FC<FloatingCallButtonProps> = ({ highContrastMode }) => {
  return (
    <div className="md:hidden">
      <a
        href={`tel:${CONTACT_INFO.phone}`}
        className={`fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-4 py-3 rounded-full font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-110 transform animate-pulse ${
          highContrastMode
            ? 'bg-white text-black border-4 border-yellow-400'
            : 'bg-green-600 text-white border-4 border-green-400'
        }`}
        aria-label={`Call Aaron Michael Services at ${CONTACT_INFO.displayPhone}`}
        style={{ 
          animation: 'pulse 2s infinite',
          boxShadow: highContrastMode 
            ? '0 0 30px rgba(255, 255, 255, 0.6)' 
            : '0 0 30px rgba(34, 197, 94, 0.6)'
        }}
      >
        <Phone size={24} />
        <span className="hidden sm:inline">Call Now</span>
      </a>
    </div>
  );
};

export default FloatingCallButton;