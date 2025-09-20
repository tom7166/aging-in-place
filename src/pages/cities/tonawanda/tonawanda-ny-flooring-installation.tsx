import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Layers, Grid, Square } from 'lucide-react';

const TonawandaFlooringInstallationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring Installation Tonawanda NY",
    "description": "Expert flooring installation contractors in Tonawanda NY specializing in accessible, slip-resistant flooring for Twin Cities homes and businesses. Hardwood, vinyl, tile installation with waterfront considerations.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aaron Michael Services",
      "telephone": "+17165337108",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14 Mariemont Ave",
        "addressLocality": "Buffalo",
        "addressRegion": "NY",
        "postalCode": "14220",
        "addressCountry": "US"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "$3.50-$16",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Flooring Installation Tonawanda NY | Accessible Flooring Solutions | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert flooring installation contractors in Tonawanda NY. Accessible, slip-resistant flooring solutions for Twin Cities. Hardwood, vinyl, tile with waterfront considerations. Call 716-533-7108.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-yellow-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Flooring Installation Tonawanda</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Flooring Installation <span className="text-yellow-300">Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-yellow-100 leading-relaxed">
                Expert flooring installation contractors in Tonawanda NY specializing in accessible, slip-resistant flooring solutions for Twin Cities homes and businesses. 
                Professional hardwood, vinyl, tile installation with waterfront moisture considerations and safety features for aging in place. 
                <strong className="text-white"> Beautiful, safe floors designed for Twin Cities riverside living.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-yellow-700 hover:bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Tonawanda Flooring Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">78+</div>
                  <div className="text-sm">Tonawanda Floors</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Safety Focused</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Tonawanda Flooring Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Subfloor condition and waterfront moisture testing",
                    "Twin Cities accessibility needs and safety evaluation", 
                    "Material selection for riverside climate conditions",
                    "Detailed installation estimate and timeline for Tonawanda",
                    "Maintenance guidance and warranty information"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-yellow-800 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Step Safely Into Beautiful, Accessible Flooring Solutions for Twin Cities Living
          </h2>
          <p className="text-xl mb-8 text-yellow-100">
            Don't let unsafe flooring put your Tonawanda family at risk. 
            Our Twin Cities-certified installation creates beautiful, slip-resistant floors that protect every family member while handling waterfront moisture challenges.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-yellow-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-yellow-200">
            <strong>Serving Tonawanda, North Tonawanda, Kenmore, Buffalo, Amherst, Cheektowaga & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TonawandaFlooringInstallationPage;