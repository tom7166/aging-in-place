import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, ChefHat, Utensils, Lightbulb } from 'lucide-react';

const TonawandaKitchenRemodelingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Remodeling Tonawanda NY",
    "description": "Expert kitchen remodelers in Tonawanda NY specializing in accessible, modern kitchen renovations for the Twin Cities. ADA compliant kitchens for aging in place and universal design throughout Western New York.",
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
      "priceRange": "$14000-$58000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Kitchen Remodeling Tonawanda NY | Accessible Kitchen Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert kitchen remodelers in Tonawanda NY. Accessible, modern kitchen renovations with universal design for Twin Cities. ADA compliant solutions. Call 716-533-7108.');
    }
    
    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-amber-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Kitchen Remodeling Tonawanda</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Kitchen Remodeling <span className="text-amber-300">Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-amber-100 leading-relaxed">
                Expert kitchen remodelers in Tonawanda NY specializing in accessible, modern renovations with universal design principles for the Twin Cities. 
                ADA compliant solutions for aging in place and waterfront living considerations. 
                <strong className="text-white"> Transform your Tonawanda kitchen into the heart of accessible Twin Cities living.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Tonawanda Kitchen Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">65+</div>
                  <div className="text-sm">Tonawanda Kitchens</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Universal Design</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Tonawanda Kitchen Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Universal design evaluation for Twin Cities homes",
                    "Tonawanda electrical and plumbing assessment", 
                    "Waterfront moisture considerations and solutions",
                    "3D design visualization with layout options",
                    "Insurance and financing guidance for NY residents"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-amber-800 to-orange-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Create the Heart of Your Accessible Tonawanda Home
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Your Twin Cities kitchen should work for every family member, regardless of age or ability. 
            Our Tonawanda-certified universal design creates beautiful, functional spaces that adapt to waterfront living and changing needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-amber-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-amber-200">
            <strong>Serving Tonawanda, North Tonawanda, Kenmore, Buffalo, Amherst, Cheektowaga & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TonawandaKitchenRemodelingPage;