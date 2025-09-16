import React from 'react';
import { Phone, MapPin, Star, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface HeroSectionProps {
  highContrastMode: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ highContrastMode }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/546627908_1593237335374251_3492794431366842422_n.jpg?...')`,
          backgroundSize: 'cover', // ✅ fill the screen
          backgroundPosition: 'center', // ✅ keeps subject visible
        }}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            highContrastMode
              ? 'bg-black/70'
              : 'bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80'
          }`}
        ></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight ${
              highContrastMode ? 'text-white' : 'text-white'
            }`}
          >
            Buffalo’s #1 ADA & Accessibility Contractor
            <span
              className={`block mt-2 ${
                highContrastMode ? 'text-yellow-400' : 'text-green-400'
              }`}
            >
              Helping Families Stay Independent at Home
            </span>
          </h1>

          <p
            className={`text-xl md:text-2xl mb-10 leading-relaxed ${
              highContrastMode ? 'text-white' : 'text-blue-100'
            }`}
          >
            25+ years of hands-on trade experience. <br />
            Family-owned, disability-informed, and trusted across Western New
            York since 2011.
          </p>

          {/* Highlights */}
          <div
            className={`flex flex-wrap justify-center items-center gap-8 mb-12 ${
              highContrastMode ? 'text-white' : 'text-blue-100'
            }`}
          >
            <div className="flex items-center space-x-2">
              <Star
                className={
                  highContrastMode ? 'text-yellow-400' : 'text-yellow-300'
                }
                size={22}
              />
              <span className="font-semibold">5-Star Local Reputation</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin
                className={
                  highContrastMode ? 'text-yellow-400' : 'text-green-400'
                }
                size={22}
              />
              <span className="font-semibold">Serving Buffalo & WNY</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck
                className={
                  highContrastMode ? 'text-yellow-400' : 'text-green-400'
                }
                size={22}
              />
              <span className="font-semibold">
                Licensed • Insured • ADA Specialist
              </span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={`inline-flex items-center justify-center space-x-4 px-10 md:px-14 py-6 md:py-8 rounded-2xl font-bold text-2xl md:text-4xl transition-all duration-300 hover:scale-105 transform shadow-2xl ${
                highContrastMode
                  ? 'bg-white text-black hover:bg-yellow-400 border-4 border-white'
                  : 'bg-green-600 text-white hover:bg-green-500 border-4 border-green-400'
              }`}
              aria-label={`Call Aaron Michael Services at ${CONTACT_INFO.displayPhone}`}
            >
              <Phone size={34} className="md:w-10 md:h-10" />
              <span>Free Quote: {CONTACT_INFO.displayPhone}</span>
            </a>

            <p
              className={`text-lg md:text-xl font-semibold ${
                highContrastMode ? 'text-white' : 'text-blue-100'
              }`}
            >
              Emergency Service • Same-Day Consultations Available
            </p>
          </div>

          {/* Quote */}
          <div
            className={`mt-12 p-6 rounded-xl ${
              highContrastMode
                ? 'bg-black/60 border-2 border-white'
                : 'bg-white/10 backdrop-blur-sm border border-white/20'
            }`}
          >
            <p
              className={`text-lg md:text-xl font-semibold italic ${
                highContrastMode ? 'text-white' : 'text-white'
              }`}
            >
              “Buffalo raised us. Buffalo built us. Buffalo made us.”
            </p>
            <p
              className={`mt-2 ${
                highContrastMode ? 'text-white' : 'text-blue-100'
              }`}
            >
              We’re a local family with personal disability experience —
              committed to making WNY homes safer, stronger, and more accessible
              for generations.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div
          className={`w-6 h-10 border-2 rounded-full flex justify-center ${
            highContrastMode ? 'border-white' : 'border-white/50'
          }`}
        >
          <div
            className={`w-1 h-3 rounded-full mt-2 animate-bounce ${
              highContrastMode ? 'bg-white' : 'bg-white/70'
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;