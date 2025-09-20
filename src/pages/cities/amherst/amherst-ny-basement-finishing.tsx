import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Droplets, Zap, Wrench } from 'lucide-react';

const AmherstBasementFinishingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Basement Finishing Amherst NY",
    "description": "Expert basement finishing contractors in Amherst NY specializing in premium waterproof basement renovations. Transform your Amherst basement into sophisticated living space with proper moisture control.",
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
      "priceRange": "$38000-$105000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Basement Finishing Amherst NY | Premium Waterproof Basement Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert basement finishing contractors in Amherst NY. Premium waterproof basement renovations with sophisticated finishes. Family rooms, home offices, accessible features. Call 716-533-7108.');
    }
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
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Basement Finishing Amherst</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Basement Finishing <span className="text-blue-300">Amherst NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-slate-100 leading-relaxed">
                Expert basement finishing contractors in Amherst NY specializing in premium waterproof basement renovations for Western New York's premier educational community. 
                Transform your Amherst basement into sophisticated living space with advanced moisture control and accessibility features. 
                <strong className="text-white"> Create valuable premium living space that meets Amherst's sophisticated standards.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Amherst Basement Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">38+</div>
                  <div className="text-sm">Amherst Basements</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Premium Waterproofed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Amherst Basement Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Premium moisture evaluation and advanced waterproofing needs",
                    "Structural assessment and ceiling height review for sophisticated finishes", 
                    "Amherst building code compliance check for premium projects",
                    "HVAC and electrical system evaluation for advanced features",
                    "Design consultation with accessibility and entertainment options"
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
      <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Amherst Basement Into Premium Living Space
          </h2>
          <p className="text-xl mb-8 text-slate-100">
            Don't let your basement remain unused storage space in Western New York's premier educational community. 
            Our Amherst-certified premium waterproofing and finishing creates sophisticated, accessible living areas that enhance your property value and lifestyle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-slate-200">
            <strong>Serving Amherst, Williamsville, Getzville, East Amherst, Clarence, Buffalo, Tonawanda, Kenmore, Cheektowaga & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AmherstBasementFinishingPage;