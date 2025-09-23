import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Zap, ArrowUp, Settings } from 'lucide-react';

const TonawandaStairLiftInstallationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Stair Lift Installation Tonawanda NY",
    "description": "Professional stair lift installation in Tonawanda NY. Curved and straight stair lifts for Twin Cities homes. Safe multi-level access for aging in place throughout Western New York.",
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
      "priceRange": "$3800-$11500",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Stair Lift Installation Tonawanda NY | Twin Cities Stair Lifts | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional stair lift installation Tonawanda NY. Curved and straight stair lifts for Twin Cities homes. Safe multi-level access for aging in place. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-purple-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Tonawanda Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Stair Lift Installation</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Stair Lift Installation <span className="text-purple-300">Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Professional stair lift installation in Tonawanda NY with curved and straight stair lifts for Twin Cities homes. 
                Safe multi-level access for aging in place throughout Western New York's historic waterfront community. 
                <strong className="text-white"> Reliable mobility solutions that preserve Twin Cities home character.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Tonawanda Stair Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">95+</div>
                  <div className="text-sm">Stair Lifts Installed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Safe</div>
                  <div className="text-sm">Multi-Level Access</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Tonawanda Stair Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Twin Cities staircase evaluation and measurement",
                    "Stair lift model recommendations for waterfront homes", 
                    "Installation planning with historic preservation",
                    "Cost estimate with financing options",
                    "Insurance and Medicare guidance for Tonawanda residents"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mr-3 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Regain Access to Your Entire Tonawanda Home with Professional Stair Lifts
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Don't let stairs limit your access to your Twin Cities home. 
            Our professional stair lift installation provides safe, reliable mobility solutions that work with your home's historic character.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-purple-200">
            <strong>Serving Tonawanda, North Tonawanda, Kenmore, Buffalo & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TonawandaStairLiftInstallationPage;