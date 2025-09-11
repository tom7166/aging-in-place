import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { SERVICE_AREAS, CONTACT_INFO } from '../utils/constants';

interface ServiceAreasProps {
  highContrastMode: boolean;
}

const ServiceAreas: React.FC<ServiceAreasProps> = ({ highContrastMode }) => {
  return (
    <section 
      id="service-areas" 
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
              Service Areas
            </h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              highContrastMode ? 'text-white' : 'text-gray-600'
            }`}>
              Proudly serving Buffalo and all of Western New York with professional ADA modifications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Map Placeholder */}
            <div className={`rounded-2xl overflow-hidden shadow-2xl ${
              highContrastMode ? 'border-4 border-white' : 'border border-gray-200'
            }`}>
              <div className={`h-96 flex items-center justify-center relative ${
                highContrastMode ? 'bg-gray-800' : 'bg-blue-50'
              }`}>
                <img 
                  src="https://upstatenyaatsp.org/wp-content/uploads/2015/05/nys-map-western.gif" 
                  alt="Buffalo and Western New York service area map showing Aaron Michael Services coverage"
                  className="w-full h-full object-cover opacity-80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={48} className="mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Buffalo & WNY</h3>
                    <p className="text-lg">Comprehensive Service Coverage</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas List */}
            <div className="space-y-8">
              <div>
                <h3 className={`text-3xl font-bold mb-6 ${
                  highContrastMode ? 'text-white' : 'text-blue-900'
                }`}>
                  We Serve All of Western New York
                </h3>
                <p className={`text-lg mb-6 leading-relaxed ${
                  highContrastMode ? 'text-white' : 'text-gray-700'
                }`}>
                  From Buffalo's East Side to Amherst's suburbs, from Cheektowaga's neighborhoods to West Seneca's communities - we bring accessibility modifications to your doorstep.
                </p>
              </div>

              {/* Areas Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {SERVICE_AREAS.map((area, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg text-center font-semibold transition-colors ${
                      highContrastMode 
                        ? 'bg-gray-800 text-white border border-gray-600 hover:border-yellow-400' 
                        : 'bg-blue-50 text-blue-900 hover:bg-blue-100 border border-blue-100'
                    }`}
                  >
                    {area}
                  </div>
                ))}
              </div>

              {/* Service Details */}
              <div className={`p-6 rounded-xl ${
                highContrastMode ? 'bg-gray-800 border border-gray-600' : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className={`flex-shrink-0 mt-1 ${
                      highContrastMode ? 'text-yellow-400' : 'text-green-600'
                    }`} size={20} />
                    <div>
                      <h4 className={`font-bold ${
                        highContrastMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Response Time
                      </h4>
                      <p className={`${
                        highContrastMode ? 'text-white' : 'text-gray-700'
                      }`}>
                        Same-day consultations available throughout Buffalo metro area
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className={`flex-shrink-0 mt-1 ${
                      highContrastMode ? 'text-yellow-400' : 'text-blue-600'
                    }`} size={20} />
                    <div>
                      <h4 className={`font-bold ${
                        highContrastMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Coverage Area
                      </h4>
                      <p className={`${
                        highContrastMode ? 'text-white' : 'text-gray-700'
                      }`}>
                        30-mile radius from Buffalo - including all of Erie County and parts of Niagara County
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`text-center p-8 md:p-12 rounded-2xl ${
            highContrastMode 
              ? 'bg-black border-2 border-white' 
              : 'bg-gradient-to-r from-green-600 to-green-800 text-white'
          }`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started in Your Area?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Free consultations available throughout Buffalo and Western New York. 
              No obligation - just expert advice on making your home more accessible.
            </p>
            
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className={`inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-bold text-xl transition-all duration-300 hover:scale-105 transform ${
                highContrastMode
                  ? 'bg-white text-black hover:bg-yellow-400 border-2 border-white'
                  : 'bg-white text-green-800 hover:bg-gray-100 border-2 border-white'
              }`}
              aria-label={`Call Aaron Michael Services at ${CONTACT_INFO.displayPhone}`}
            >
              <Phone size={24} />
              <span>Call {CONTACT_INFO.displayPhone} Today</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
