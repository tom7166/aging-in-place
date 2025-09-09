import React from 'react';
import { Phone, Clock, Shield, Award, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../utils/constants';

interface ContactSectionProps {
  highContrastMode: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({ highContrastMode }) => {
  return (
    <section 
      id="contact" 
      className={`py-20 ${
        highContrastMode 
          ? 'bg-gray-900 text-white' 
          : 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main CTA Header */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Building Independence
              <span className={`block ${
                highContrastMode ? 'text-yellow-400' : 'text-green-400'
              }`}>
                Building Buffalo
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to make your Buffalo home more accessible? Let's start with a free consultation.
            </p>
          </div>

          {/* MASSIVE Final Call Button */}
          <div className="mb-16">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={`inline-flex items-center justify-center space-x-4 px-8 md:px-16 py-6 md:py-10 rounded-3xl font-bold text-2xl md:text-5xl transition-all duration-300 hover:scale-105 transform shadow-2xl ${
                highContrastMode
                  ? 'bg-white text-black hover:bg-yellow-400 border-4 border-white'
                  : 'bg-green-600 text-white hover:bg-green-500 border-4 border-green-400'
              }`}
              aria-label={`Call Aaron Michael Services now at ${CONTACT_INFO.displayPhone}`}
            >
              <Phone size={40} className="md:w-12 md:h-12" />
              <span>Call Now: {CONTACT_INFO.displayPhone}</span>
            </a>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className={`p-6 rounded-xl ${
              highContrastMode ? 'bg-black border border-white' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Clock className={`mx-auto mb-3 ${
                highContrastMode ? 'text-yellow-400' : 'text-green-400'
              }`} size={32} />
              <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
              <p className={`text-sm ${
                highContrastMode ? 'text-white' : 'text-blue-100'
              }`}>
                No cost, no obligation assessment
              </p>
            </div>

            <div className={`p-6 rounded-xl ${
              highContrastMode ? 'bg-black border border-white' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Shield className={`mx-auto mb-3 ${
                highContrastMode ? 'text-yellow-400' : 'text-green-400'
              }`} size={32} />
              <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
              <p className={`text-sm ${
                highContrastMode ? 'text-white' : 'text-blue-100'
              }`}>
                Full protection for your project
              </p>
            </div>

            <div className={`p-6 rounded-xl ${
              highContrastMode ? 'bg-black border border-white' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <Award className={`mx-auto mb-3 ${
                highContrastMode ? 'text-yellow-400' : 'text-green-400'
              }`} size={32} />
              <h3 className="font-bold text-lg mb-2">22+ Years Experience</h3>
              <p className={`text-sm ${
                highContrastMode ? 'text-white' : 'text-blue-100'
              }`}>
                Trusted by Buffalo families
              </p>
            </div>

            <div className={`p-6 rounded-xl ${
              highContrastMode ? 'bg-black border border-white' : 'bg-white/10 backdrop-blur-sm'
            }`}>
              <MapPin className={`mx-auto mb-3 ${
                highContrastMode ? 'text-yellow-400' : 'text-green-400'
              }`} size={32} />
              <h3 className="font-bold text-lg mb-2">Local Buffalo Team</h3>
              <p className={`text-sm ${
                highContrastMode ? 'text-white' : 'text-blue-100'
              }`}>
                Your neighbors helping neighbors
              </p>
            </div>
          </div>

          {/* Emergency Services */}
          <div className={`p-8 md:p-12 rounded-2xl mb-16 ${
            highContrastMode 
              ? 'bg-black border-2 border-red-500' 
              : 'bg-red-600 border-2 border-red-400'
          }`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Emergency Accessibility Services
            </h3>
            <p className="text-lg md:text-xl mb-6">
              Urgent accessibility needs can't wait. We provide emergency ramp installation, 
              grab bar installation, and safety modifications throughout Buffalo.
            </p>
            <p className={`text-xl font-bold ${
              highContrastMode ? 'text-red-400' : 'text-white'
            }`}>
              Call {CONTACT_INFO.displayPhone} - Available 24/7 for Emergencies
            </p>
          </div>

          {/* Final Message */}
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-bold italic mb-8 leading-relaxed">
              "Every day you wait is another day without the independence and safety you deserve. 
              Let's change that today."
            </blockquote>
            
            <p className="text-lg md:text-xl leading-relaxed">
              Aaron Michael Services has been making Buffalo homes more accessible for over two decades. 
              We understand that accessibility isn't just about building codes - it's about dignity, 
              independence, and the freedom to live safely in your own home.
            </p>
            
            <div className="mt-8">
              <p className={`text-xl font-semibold ${
                highContrastMode ? 'text-yellow-400' : 'text-green-400'
              }`}>
                Your accessibility journey starts with one phone call.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;