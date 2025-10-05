import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../../../components/SEOHelmet';
import { Phone, MapPin, Clock, CircleCheck as CheckCircle, Users, DollarSign, Shield, ArrowRight, Chrome as Home, Award, TrendingUp, Quote, Building, ChefHat, Utensils, Lightbulb } from 'lucide-react';

const AmherstKitchenRemodelingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Remodeling Amherst NY",
    "description": "Expert kitchen remodelers in Amherst NY specializing in accessible kitchen renovations for the educational community. ADA compliant kitchens for aging in place and universal design throughout Western New York.",
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
      "priceRange": "$19000-$82000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Kitchen Remodeling Amherst NY | Accessible Kitchen Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert kitchen remodelers in Amherst NY. Accessible kitchen renovations with universal design for educational community. ADA compliant solutions. Call 716-533-7108.');
    }
    
    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHelmet
        title="Kitchen Remodeling Amherst NY | Accessible Kitchen Renovations | Aaron Michael Services"
        description="Expert kitchen remodelers in Amherst NY. Accessible kitchen renovations with universal design for educational community. ADA compliant solutions. Call 716-533-7108."
        keywords="kitchen remodeling Amherst NY, kitchen renovation Amherst, accessible kitchen Amherst, ADA kitchen Amherst"
        canonicalUrl="https://aaronmichaelservices.com/amherst-ny-kitchen-remodeling"
      />
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-amber-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-orange-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Kitchen Remodeling Amherst</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Kitchen Remodeling <span className="text-orange-300">Amherst NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                Expert kitchen remodelers in Amherst NY specializing in accessible renovations with sophisticated universal design principles for Western New York's premier educational community. 
                ADA compliant solutions for aging in place and academic family multi-generational living. 
                <strong className="text-white"> Transform your Amherst kitchen into the heart of accessible educational community living.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Amherst Kitchen Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">78+</div>
                  <div className="text-sm">Amherst Kitchens</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Amherst Kitchen Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Universal design evaluation for educational community homes",
                    "Amherst electrical and plumbing assessment for premium appliances", 
                    "Sophisticated accessibility consultation with premium materials",
                    "3D design visualization with elegant layout options",
                    "Insurance and financing guidance for academic families"
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
      <section className="bg-gradient-to-r from-orange-800 to-amber-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Create the Heart of Your Accessible Amherst Home
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Your educational community kitchen should reflect the sophistication of Western New York's academic hub while working for every family member. 
            Our Amherst-certified universal design creates beautiful, functional spaces that adapt to changing needs while maintaining the upscale standards that make Amherst properties so valuable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-orange-200">
            <strong>Serving Amherst, Williamsville, Getzville, East Amherst, Clarence, Buffalo, Tonawanda, Kenmore, Cheektowaga & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AmherstKitchenRemodelingPage;