import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../../../components/SEOHelmet';
import { Phone, MapPin, Clock, CircleCheck as CheckCircle, Users, DollarSign, Shield, ArrowRight, Chrome as Home, Award, TrendingUp, Quote, Building, Bath, Droplets } from 'lucide-react';

const KenmoreBathroomRemodelingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bathroom Remodeling Kenmore NY",
    "description": "Expert bathroom remodelers in Kenmore NY specializing in luxury accessible bathroom renovations. Premium ADA compliant bathrooms for aging in place in Western New York's premier suburban community.",
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
      "priceRange": "$9500-$42000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Bathroom Remodeling Kenmore NY | Luxury Accessible Bathroom Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert bathroom remodelers in Kenmore NY. Luxury accessible bathroom renovations with premium finishes. ADA compliant walk-in showers, spa features. Call 716-533-7108.');
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
        title="Bathroom Remodeling Kenmore NY | Luxury Accessible Bathroom Renovations | Aaron Michael Services"
        description="Expert bathroom remodelers in Kenmore NY. Luxury accessible bathroom renovations with premium finishes. ADA compliant walk-in showers, spa features. Call 716-533-7108."
        keywords="bathroom remodeling Kenmore NY, bathroom renovation Kenmore, accessible bathroom Kenmore, luxury bathroom Kenmore"
        canonicalUrl="https://aaronmichaelservices.com/kenmore-ny-bathroom-remodeling"
      />
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-blue-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Bathroom Remodeling Kenmore</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Bathroom Remodeling <span className="text-blue-300">Kenmore NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Expert bathroom remodelers in Kenmore NY specializing in luxury accessible renovations for Western New York's premier suburban community. 
                Premium ADA compliant solutions with spa-quality finishes for aging in place and sophisticated living. 
                <strong className="text-white"> Transform your Kenmore bathroom into a luxury accessible sanctuary.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Kenmore Bathroom Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">72+</div>
                  <div className="text-sm">Kenmore Bathrooms</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Luxury ADA Compliant</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Kenmore Luxury Bathroom Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Premium accessibility needs evaluation and luxury ADA compliance",
                    "Kenmore plumbing and electrical system assessment", 
                    "Spa-quality design consultation with 3D visualization",
                    "Detailed cost estimate with luxury material options",
                    "Insurance and financing guidance for premium renovations"
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
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Kenmore Bathroom Into a Luxury Accessible Spa
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't let an outdated bathroom limit your independence and luxury living in Western New York's premier community. 
            Our Kenmore-certified bathroom remodeling creates accessible, spa-quality spaces that meet the sophisticated standards expected in this exclusive area.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-blue-200">
            <strong>Serving Kenmore, Tonawanda, Buffalo, Amherst, Cheektowaga & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default KenmoreBathroomRemodelingPage;