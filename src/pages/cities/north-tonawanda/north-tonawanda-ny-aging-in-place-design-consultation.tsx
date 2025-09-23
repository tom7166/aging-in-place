import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Heart, UserCheck, Eye } from 'lucide-react';

const NorthTonawandaAgingInPlaceDesignConsultationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aging-in-Place Design Consultation North Tonawanda NY",
    "description": "Professional aging-in-place design consultation in North Tonawanda NY. Comprehensive home accessibility planning for Lumber City homes. Expert guidance for aging in place throughout Western New York.",
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
      "priceRange": "$275-$675",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Aging-in-Place Design Consultation North Tonawanda NY | Lumber City Home Accessibility Planning | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional aging-in-place design consultation North Tonawanda NY. Comprehensive home accessibility planning for Lumber City homes. Expert guidance for aging in place. Call 716-533-7108.');
    }
    
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);
    
    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
    
    return () => {
      if (document.head.contains(structuredDataScript)) {
        document.head.removeChild(structuredDataScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-slate-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>North Tonawanda Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Aging-in-Place Design Consultation</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Aging-in-Place Design Consultation <span className="text-slate-300">North Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-slate-100 leading-relaxed">
                Professional aging-in-place design consultation in North Tonawanda NY with comprehensive home accessibility planning for Lumber City homes. 
                Expert guidance for aging in place throughout Western New York's historic canal community. 
                <strong className="text-white"> Practical accessibility planning that honors Lumber City character.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Schedule North Tonawanda Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">225+</div>
                  <div className="text-sm">Consultations</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">CAPS</div>
                  <div className="text-sm">Certified Specialist</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">North Tonawanda Design Consultation Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Comprehensive Lumber City home accessibility evaluation",
                    "Future-proofing recommendations for canal-side living", 
                    "Modification prioritization and phasing for industrial heritage homes",
                    "Detailed cost estimates with preservation considerations",
                    "Insurance and funding navigation for North Tonawanda residents"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-slate-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Plan Your North Tonawanda Home's Accessible Future with Expert Design Consultation
          </h2>
          <p className="text-xl mb-8 text-slate-100">
            Don't wait for accessibility needs to become urgent in your Lumber City home. 
            Our professional design consultation creates a roadmap for aging in place while preserving the industrial heritage that makes North Tonawanda special.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Consultation
            </button>
          </div>
          
          <p className="mt-6 text-slate-200">
            <strong>Serving North Tonawanda, Tonawanda, Kenmore, Buffalo & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default NorthTonawandaAgingInPlaceDesignConsultationPage;