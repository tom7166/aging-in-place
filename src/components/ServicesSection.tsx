import React from 'react';
import { 
  Accessibility, 
  Bath, 
  Home, 
  DoorOpen, 
  Heart, 
  Wrench,
  Phone,
  CheckCircle 
} from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../utils/constants';

interface ServicesSectionProps {
  highContrastMode: boolean;
}

const getServiceIcon = (iconName: string) => {
  const iconProps = { size: 48, className: 'mx-auto mb-4' };
  switch (iconName) {
    case 'accessibility': return <Accessibility {...iconProps} />;
    case 'bath': return <Bath {...iconProps} />;
    case 'home': return <Home {...iconProps} />;
    case 'door-open': return <DoorOpen {...iconProps} />;
    case 'heart': return <Heart {...iconProps} />;
    case 'wrench': return <Wrench {...iconProps} />;
    default: return <Accessibility {...iconProps} />;
  }
};

const ServicesSection: React.FC<ServicesSectionProps> = ({ highContrastMode }) => {
  return (
    <section 
      id="services" 
      className={`py-20 ${
        highContrastMode ? 'bg-gray-900 text-white' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              highContrastMode ? 'text-white' : 'text-blue-900'
            }`}>
              Our Services
            </h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              highContrastMode ? 'text-white' : 'text-gray-600'
            }`}>
              Comprehensive ADA modifications and accessibility solutions for Buffalo and Western New York
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((service, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl text-center transition-all duration-300 hover:scale-105 transform ${
                  highContrastMode 
                    ? 'bg-black border-2 border-white hover:border-yellow-400' 
                    : 'bg-gray-50 hover:bg-blue-50 shadow-lg hover:shadow-xl border border-gray-100'
                }`}
              >
                <div className={`${
                  highContrastMode ? 'text-yellow-400' : 'text-blue-600'
                }`}>
                  {getServiceIcon(service.icon)}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${
                  highContrastMode ? 'text-white' : 'text-blue-900'
                }`}>
                  {service.title}
                </h3>
                
                <p className={`text-lg mb-6 leading-relaxed ${
                  highContrastMode ? 'text-white' : 'text-gray-700'
                }`}>
                  {service.description}
                </p>

                {/* Keywords for SEO */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {service.keywords.slice(0, 2).map((keyword, idx) => (
                    <span 
                      key={idx}
                      className={`px-3 py-1 text-sm rounded-full ${
                        highContrastMode 
                          ? 'bg-gray-800 text-yellow-400 border border-yellow-400' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Service Highlights */}
          <div className={`p-8 md:p-12 rounded-2xl ${
            highContrastMode 
              ? 'bg-black border-2 border-white' 
              : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Why Buffalo Families Choose Us
              </h3>
              <p className="text-xl">
                Every project includes these essential features
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "ADA Compliance Guaranteed",
                "Insurance Assistance",
                "Free Consultations",
                "Emergency Services"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle 
                    className={highContrastMode ? 'text-yellow-400' : 'text-green-400'} 
                    size={24} 
                  />
                  <span className={`font-semibold ${
                    highContrastMode ? 'text-white' : 'text-white'
                  }`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA in Services */}
            <div className="text-center mt-10">
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className={`inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 transform ${
                  highContrastMode
                    ? 'bg-white text-black hover:bg-yellow-400 border-2 border-white'
                    : 'bg-green-600 text-white hover:bg-green-500 border-2 border-green-400'
                }`}
                aria-label={`Call Aaron Michael Services at ${CONTACT_INFO.displayPhone}`}
              >
                <Phone size={24} />
                <span>Get Your Free Consultation: {CONTACT_INFO.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;