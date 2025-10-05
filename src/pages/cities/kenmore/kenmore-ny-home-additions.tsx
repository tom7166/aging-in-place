import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../../../components/SEOHelmet';
import { Phone, MapPin, Clock, CircleCheck as CheckCircle, Users, DollarSign, Shield, ArrowRight, Chrome as Home, Award, TrendingUp, Quote, Building, Hammer, Square, CirclePlus as PlusCircle } from 'lucide-react';

const KenmoreHomeAdditionsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Additions Kenmore NY",
    "description": "Expert home addition contractors in Kenmore NY specializing in luxury accessible room additions. Premium master bedroom suites, family room expansions for Western New York's premier suburban community.",
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
      "priceRange": "$42000-$165000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Home Additions Kenmore NY | Luxury Room Additions & Accessible Expansions | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert home addition contractors in Kenmore NY. Luxury accessible room additions, premium master suites, family rooms. Professional construction with upscale finishes. Call 716-533-7108.');
    }
    
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
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHelmet
        title="Home Additions Kenmore NY | Luxury Room Additions & Accessible Expansions | Aaron Michael Services"
        description="Expert home addition contractors in Kenmore NY. Luxury accessible room additions, premium master suites, family rooms. Professional construction with upscale finishes. Call 716-533-7108."
        keywords="home additions Kenmore NY, room additions Kenmore, home expansion Kenmore, accessible addition Kenmore"
        canonicalUrl="https://aaronmichaelservices.com/kenmore-ny-home-additions"
      />
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-green-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Home Additions Kenmore</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Home Additions <span className="text-green-300">Kenmore NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Expert home addition contractors in Kenmore NY specializing in luxury accessible room additions for Western New York's premier suburban community. 
                Premium master bedroom suites, family room expansions with sophisticated accessibility features for aging in place. 
                <strong className="text-white"> Expand your Kenmore home with luxury barrier-free design that enhances property value.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Kenmore Addition Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">34+</div>
                  <div className="text-sm">Kenmore Additions</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Luxury Compliance</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Kenmore Luxury Addition Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Premium site evaluation and foundation assessment",
                    "Kenmore building code and zoning review for luxury projects", 
                    "Sophisticated design consultation with 3D visualization",
                    "Detailed construction estimate with premium accessibility features",
                    "Permit application and approval guidance for upscale additions"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mr-3 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-green-800 to-emerald-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Expand Your Kenmore Home with Luxury Professional Construction
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Don't let space limitations keep your family from growing and thriving in Western New York's premier community. 
            Our Kenmore-certified luxury construction creates beautiful, accessible additions that enhance your sophisticated lifestyle and significant property value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-green-200">
            <strong>Serving Kenmore, Tonawanda, Buffalo, Amherst, Cheektowaga & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default KenmoreHomeAdditionsPage;