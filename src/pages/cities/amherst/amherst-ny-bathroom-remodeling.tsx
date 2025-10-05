import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../../../components/SEOHelmet';
import { Phone, MapPin, Clock, CircleCheck as CheckCircle, Users, DollarSign, Shield, ArrowRight, Chrome as Home, Award, TrendingUp, Quote, Building, Bath, Droplets } from 'lucide-react';

const AmherstBathroomRemodelingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bathroom Remodeling Amherst NY",
    "description": "Expert bathroom remodelers in Amherst NY specializing in accessible, modern, and sophisticated bathroom renovation services for the educational community. ADA compliant bathrooms for aging in place throughout Western New York.",
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
    document.title = "Bathroom Remodeling Amherst NY | Accessible Bathroom Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert bathroom remodelers in Amherst NY. Accessible, modern, sophisticated bathroom renovation services for educational community. ADA compliant walk-in showers. Call 716-533-7108.');
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
      <SEOHelmet
        title="Bathroom Remodeling Amherst NY | Accessible Bathroom Renovations | Aaron Michael Services"
        description="Expert bathroom remodelers in Amherst NY. Accessible, modern, sophisticated bathroom renovation services for educational community. ADA compliant walk-in showers. Call 716-533-7108."
        keywords="bathroom remodeling Amherst NY, bathroom renovation Amherst, accessible bathroom Amherst, ADA bathroom Amherst"
        canonicalUrl="https://aaronmichaelservices.com/amherst-ny-bathroom-remodeling"
      />
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-teal-900 via-blue-800 to-cyan-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-teal-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Bathroom Remodeling Amherst</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Bathroom Remodeling <span className="text-teal-300">Amherst NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-teal-100 leading-relaxed">
                Expert bathroom remodelers in Amherst NY specializing in accessible, modern, and sophisticated renovations for Western New York's premier educational community. 
                ADA compliant solutions for aging in place and academic family living considerations. 
                <strong className="text-white"> Transform your Amherst bathroom into a safe, elegant educational community showcase.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-teal-700 hover:bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Amherst Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">92+</div>
                  <div className="text-sm">Amherst Bathrooms</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">ADA Compliant</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Amherst Bathroom Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Educational community accessibility needs evaluation",
                    "Amherst plumbing and electrical system assessment", 
                    "Premium design consultation with 3D visualization",
                    "Detailed cost estimate with sophisticated material options",
                    "Insurance and financing guidance for academic families"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-teal-800 to-cyan-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Amherst Bathroom Into a Safe, Sophisticated Space
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Don't let an outdated bathroom limit your independence and safety in Western New York's premier educational community. 
            Our Amherst-certified bathroom remodeling creates accessible, elegant spaces that meet the sophisticated standards expected in this academic hub.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-teal-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-teal-200">
            <strong>Serving Amherst, Williamsville, Getzville, East Amherst, Clarence, Buffalo, Tonawanda, Kenmore, Cheektowaga & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-teal-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Educational Community Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmherstBathroomRemodelingPage;