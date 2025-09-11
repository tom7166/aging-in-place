import React, { useEffect } from 'react';
import { Phone, MapPin, Star } from 'lucide-react';
import { CONTACT_INFO, SERVICES, FAQs, localBusinessSchema, generateFAQSchema, injectSchema } from '../utils/constants';

const IndexPage: React.FC = () => {
  useEffect(() => {
    // Inject LocalBusiness schema
    injectSchema(localBusinessSchema);
    // Inject FAQ schema
    injectSchema(generateFAQSchema(FAQs));
  }, []);

  return (
    <div className="font-sans text-white">
      {/* Meta Tags */}
      <head>
        <title>Buffalo ADA Contractor | Wheelchair Ramps & Accessible Bathrooms | Aaron Michael Services</title>
        <meta name="description" content="Aaron Michael Services is Buffalo's trusted ADA contractor specializing in wheelchair ramps, accessible bathrooms, kitchen modifications, door widening, and aging-in-place upgrades. Serving Buffalo and all of WNY. Free consultations." />
        <meta name="keywords" content="Buffalo ADA contractor, wheelchair ramps Buffalo, accessible bathroom Buffalo, aging in place WNY, disability home modifications, ADA compliance Buffalo, home accessibility WNY" />
        <link rel="canonical" href="https://aaronmichaelservices.com/" />
      </head>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://scontent-ord5-3.xx.fbcdn.net/v/t39.30808-6/546627908_1593237335374251_3492794431366842422_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=CrR1h1E02pMQ7kNvwFF5QVS&_nc_oc=Adl5hwmn26fQU4fApodMylhad-W5HJF011S5vEnGT1pRYIB_2ywIBmU98D56coRUj8q-5Vlb3BXBglLRTwJTjSsp&_nc_zt=23&_nc_ht=scontent-ord5-3.xx&_nc_gid=iV6LtpRjIg7KRPusTL3VoQ&oh=00_AfbHjh0sM7WrtXYUnx-gavLFAVwoMn5h9vLUYjXBKmk5Bw&oe=68C8A4D9"
            alt="Buffalo ADA accessibility"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Buffalo's Trusted <span className="block text-green-400">ADA Contractor</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Building Independence Since 2011
            <span className="block mt-2 font-semibold">
              Wheelchair ramps, accessible bathrooms, aging-in-place upgrades
            </span>
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-blue-100">
            <div className="flex items-center space-x-2">
              <Star className="text-yellow-300" size={20} />
              <span className="font-semibold">22+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-green-400" size={20} />
              <span className="font-semibold">Serving Buffalo & All of WNY</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center justify-center space-x-4 px-8 md:px-12 py-6 md:py-8 rounded-2xl font-bold text-2xl md:text-4xl transition-all duration-300 hover:scale-105 transform shadow-2xl bg-green-600 text-white hover:bg-green-500 border-4 border-green-400"
            >
              <Phone size={32} className="md:w-10 md:h-10" />
              <span>Call Now: {CONTACT_INFO.displayPhone}</span>
            </a>
            <p className="text-lg md:text-xl font-semibold text-blue-100">
              Free Consultations • Emergency Services Available
            </p>
          </div>

          {/* Buffalo Connection */}
          <div className="mt-12 p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-lg md:text-xl font-semibold italic text-white">
              "Buffalo raised us. Buffalo built us. Buffalo made us."
            </p>
            <p className="mt-2 text-blue-100">
              Family-owned • Personal disability experience • ADA specialization
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100 text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Our ADA Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
                <div className="text-green-600 mb-4 text-4xl">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-700 mb-2">{service.description}</p>
                <p className="text-gray-500 text-sm">{service.keywords.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {FAQs.map((faq, idx) => (
              <div key={idx} className="border-b pb-4">
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <p className="mt-2 text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;
