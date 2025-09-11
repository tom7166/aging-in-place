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
        aria-label={`Call Aaron Michael Services at ${CONTACT_INFO.displayPhone}`}
        className={`fixed bottom-6 right-6 z-50 flex items-center space-x-3 px-6 py-4 rounded-full font-bold text-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl ${
          highContrastMode
            ? 'bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black'
            : 'bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white'
        }`}
        style={{
          animation: 'pulse 2.5s infinite',
          boxShadow: highContrastMode
            ? '0 8px 20px rgba(255, 223, 0, 0.4)'
            : '0 8px 20px rgba(34, 197, 94, 0.4)',
        }}
      >
        <Phone size={28} />
        <span className="hidden sm:inline">Call Now</span>
      </a>

      {/* Pulse keyframes */}
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.05);
              opacity: 0.85;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FloatingCallButton;
