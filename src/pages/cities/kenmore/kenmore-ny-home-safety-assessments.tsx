import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Eye, AlertTriangle, Search } from 'lucide-react';

const KenmoreHomeSafetyAssessmentsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Safety Assessments Kenmore NY",
    "description": "Professional home safety assessments in Kenmore NY. Comprehensive fall risk evaluation and accessibility planning for luxury homes. Expert safety consultation for aging in place.",
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
      "priceRange": "$250-$650",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Home Safety Assessments Kenmore NY | Luxury Home Fall Risk Evaluation | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional home safety assessments Kenmore NY. Comprehensive fall risk evaluation and accessibility planning for luxury homes. Expert safety consultation. Call 716-533-7108.');
    }
    
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);
    
    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/x-icon';
      newFavicon.href = '/favicon.ico';
      document.head.appendChild(newFavicon);
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
      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-indigo-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Kenmore Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Home Safety Assessments</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Home Safety Assessments <span className="text-indigo-300">Kenmore NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-indigo-100 leading-relaxed">
                Professional home safety assessments in Kenmore NY with comprehensive fall risk evaluation and accessibility planning for luxury homes. 
                Expert safety consultation for aging in place throughout Western New York's premier suburban community. 
                <strong className="text-white"> Sophisticated safety planning that protects your family while preserving Kenmore's upscale character.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-indigo-700 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Schedule Kenmore Safety Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">425+</div>
                  <div className="text-sm">Assessments</div>
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
                <h3 className="text-2xl font-bold mb-4">Kenmore Safety Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Comprehensive luxury home fall risk evaluation",
                    "Room-by-room accessibility barrier identification", 
                    "Future-proofing recommendations for changing needs",
                    "Prioritized modification timeline with cost estimates",
                    "Insurance and funding guidance for Kenmore residents"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-indigo-800 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Protect Your Kenmore Home Investment with Professional Safety Assessment
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Don't wait for an accident to identify safety risks in your luxury Kenmore home. 
            Our professional safety assessment provides peace of mind and a roadmap for maintaining independence with sophistication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Assessment
            </button>
          </div>
          
          <p className="mt-6 text-indigo-200">
            <strong>Serving Kenmore, Tonawanda, Buffalo, Amherst & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default KenmoreHomeSafetyAssessmentsPage;