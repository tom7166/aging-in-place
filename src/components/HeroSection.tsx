import React from 'react';
import { Phone, MapPin, Star } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface HeroSectionProps {
  highContrastMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ highContrastMode }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://www.facebook.com/photo?fbid=1593237332040918&set=a.753432222688104"
        >
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-elderly-man-using-wheelchair-ramp-40213-large.mp4" 
            type="video/mp4" 
          />
          <source 
            src="https://assets.mixkit.co/videos/preview/mixkit-senior-woman-with-walker-in-modern-home-40208-large.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Video Overlay */}
        <div className={`absolute inset-0 ${
          highContrastMode 
            ? 'bg-black/80' 
            : 'bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90'
        }`}></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            highContrastMode ? 'text-white' : 'text-white'
          }`}>
            Buffalo's Trusted 
            <span className={`block ${
              highContrastMode ? 'text-yellow-400' : 'text-green-400'
            }`}>
              ADA Contractor
            </span>
          </h1>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl mb-8 leading-relaxed ${
            highContrastMode ? 'text-white' : 'text-blue-100'
          }`}>
            Building Independence Since 2011
            <span className="block mt-2 font-semibold">
              Wheelchair ramps, accessible bathrooms, aging-in-place upgrades
            </span>
          </p>

          {/* Trust Indicators */}
          <div className={`flex flex-wrap justify-center items-center gap-6 mb-10 ${
            highContrastMode ? 'text-white' : 'text-blue-100'
          }`}>
            <div className="flex items-center space-x-2">
              <Star className={highContrastMode ? 'text-yellow-400' : 'text-yellow-300'} size={20} />
              <span className="font-semibold">25+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className={highContrastMode ? 'text-yellow-400' : 'text-green-400'} size={20} />
              <span className="font-semibold">Serving Buffalo & All of WNY</span>
            </div>
          </div>

          {/* MASSIVE Call Button */}
          <div className="space-y-6">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={`inline-flex items-center justify-center space-x-4 px-8 md:px-12 py-6 md:py-8 rounded-2xl font-bold text-2xl md:text-4xl transition-all duration-300 hover:scale-105 transform shadow-2xl ${
                highContrastMode
                  ? 'bg-white text-black hover:bg-yellow-400 border-4 border-white'
                  : 'bg-green-600 text-white hover:bg-green-500 border-4 border-green-400'
              }`}
              aria-label={`Call Aaron Michael Services at ${CONTACT_INFO.displayPhone}`}
            >
              <Phone size={32} className="md:w-10 md:h-10" />
              <span>Call Now: {CONTACT_INFO.displayPhone}</span>
            </a>

            <p className={`text-lg md:text-xl font-semibold ${
              highContrastMode ? 'text-white' : 'text-blue-100'
            }`}>
              Free Consultations • Emergency Services Available
            </p>
          </div>

          {/* Buffalo Connection */}
          <div className={`mt-12 p-6 rounded-xl ${
            highContrastMode 
              ? 'bg-black/60 border-2 border-white' 
              : 'bg-white/10 backdrop-blur-sm border border-white/20'
          }`}>
            <p className={`text-lg md:text-xl font-semibold italic ${
              highContrastMode ? 'text-white' : 'text-white'
            }`}>
              "Buffalo raised us. Buffalo built us. Buffalo made us."
            </p>
            <p className={`mt-2 ${
              highContrastMode ? 'text-white' : 'text-blue-100'
            }`}>
              Family-owned • Personal disability experience • ADA specialization
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          highContrastMode ? 'border-white' : 'border-white/50'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
            highContrastMode ? 'bg-white' : 'bg-white/70'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
