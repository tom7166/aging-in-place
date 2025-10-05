import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../../../components/SEOHelmet';
import { Phone, MapPin, Clock, CircleCheck as CheckCircle, Star, Users, DollarSign, Shield, ArrowRight, Chrome as Home, Award, TrendingUp, Quote, Heart, Building, Bath, ChefHat, Accessibility, Wrench, Eye, ArrowUp, DoorOpen, Layers } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingCallButton from '../../../components/FloatingCallButton';

const KenmoreHomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aaron Michael Services - Kenmore NY",
    "description": "Professional ADA contractor and accessibility specialist serving Kenmore NY. Wheelchair ramps, accessible bathrooms, aging in place modifications for Western New York's premier suburban community.",
    "telephone": "+17165337108",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14 Mariemont Ave",
      "addressLocality": "Buffalo",
      "addressRegion": "NY",
      "postalCode": "14220",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "City",
      "name": "Kenmore",
      "addressRegion": "NY"
    },
    "serviceType": [
      "Wheelchair Ramp Installation",
      "Accessible Bathroom Renovation", 
      "Kitchen Modifications",
      "Door Widening",
      "Aging in Place Modifications"
    ]
  };

  useEffect(() => {
    document.title = "ADA Contractor Kenmore NY | Wheelchair Ramps & Accessible Bathrooms | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional ADA contractor serving Kenmore NY. Wheelchair ramps, accessible bathrooms, aging in place modifications for Western New York\'s premier suburban community. Call 716-533-7108.');
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
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title="ADA Contractor Kenmore NY | Wheelchair Ramps & Accessible Bathrooms | Aaron Michael Services"
        description="Professional ADA contractor serving Kenmore NY. Wheelchair ramps, accessible bathrooms, aging in place modifications for Western New York's premier suburban community. Call 716-533-7108."
        keywords="ADA contractor Kenmore NY, wheelchair ramp Kenmore, accessible remodeling Kenmore, aging in place Kenmore"
        canonicalUrl="https://aaronmichaelservices.com/kenmore-home-page"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Kenmore NY ADA Contractor & Accessibility Specialist
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional wheelchair ramps, accessible bathrooms, and aging in place modifications for Western New York's premier suburban community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:716-533-7108" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 716-533-7108
            </a>
            <button className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Free Kenmore Consultation
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <div className="font-bold text-lg">22+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <div className="font-bold text-lg">185+</div>
              <div className="text-sm">Kenmore Projects</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <div className="font-bold text-lg">CAPS</div>
              <div className="text-sm">Certified</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <div className="font-bold text-lg">Licensed</div>
              <div className="text-sm">& Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accessibility Services for Kenmore NY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ADA modifications and aging in place solutions for Western New York's premier suburban community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Accessibility className="w-8 h-8 text-purple-600" />,
                title: "Wheelchair Ramp Installation",
                description: "Premium ADA compliant ramps designed for Kenmore's upscale standards and WNY weather conditions.",
                link: "/kenmore-ny-wheelchair-ramp-installation"
              },
              {
                icon: <Wrench className="w-8 h-8 text-blue-600" />,
                title: "Grab Bar Installation", 
                description: "Designer safety bars rated for 250+ pounds that complement luxury bathroom finishes.",
                link: "/kenmore-ny-grab-bar-installation"
              },
              {
                icon: <ArrowUp className="w-8 h-8 text-indigo-600" />,
                title: "Stair Lift Installation",
                description: "Premium curved and straight stair lifts for elegant multi-level access in luxury homes.",
                link: "/kenmore-ny-stair-lift-installation"
              },
              {
                icon: <Bath className="w-8 h-8 text-teal-600" />,
                title: "Walk-In Tub Installation",
                description: "Spa-quality therapeutic walk-in tubs with safety features and luxury finishes.",
                link: "/kenmore-ny-walk-in-tub-installation"
              },
              {
                icon: <Bath className="w-8 h-8 text-cyan-600" />,
                title: "Roll-In Shower Installation",
                description: "Zero-threshold luxury showers with premium accessibility features and spa-quality finishes.",
                link: "/kenmore-ny-roll-in-shower-installation"
              },
              {
                icon: <DoorOpen className="w-8 h-8 text-green-600" />,
                title: "Door Widening",
                description: "Seamless wheelchair access with premium finish matching for upscale homes.",
                link: "/kenmore-ny-door-widening"
              },
              {
                icon: <ChefHat className="w-8 h-8 text-orange-600" />,
                title: "Kitchen Modifications",
                description: "Gourmet accessible kitchens with luxury universal design and premium materials.",
                link: "/kenmore-ny-kitchen-modifications"
              },
              {
                icon: <Building className="w-8 h-8 text-red-600" />,
                title: "Bathroom Remodeling",
                description: "Complete luxury accessible bathroom renovations with spa-quality finishes.",
                link: "/kenmore-ny-bathroom-remodeling"
              },
              {
                icon: <Heart className="w-8 h-8 text-emerald-600" />,
                title: "Aging-in-Place Design Consultation",
                description: "Comprehensive accessibility planning for luxury homes and sophisticated living.",
                link: "/kenmore-ny-aging-in-place-design-consultation"
              },
              {
                icon: <Eye className="w-8 h-8 text-amber-600" />,
                title: "Home Safety Assessments",
                description: "Professional fall risk evaluation and safety planning for upscale properties.",
                link: "/kenmore-ny-home-safety-assessments"
              },
              {
                icon: <Layers className="w-8 h-8 text-yellow-600" />,
                title: "Flooring Installation",
                description: "Premium accessible flooring with luxury materials and safety features.",
                link: "/kenmore-ny-flooring-installation"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {service.description}
                </p>
                <div className="text-center">
                  <Link 
                    to={service.link}
                    className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Location
            </h2>
            <p className="text-xl text-gray-600">
              Serving Kenmore and all of Western New York from our Buffalo location
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-lg p-4">
              <iframe
                src="https://maps.app.goo.gl/yNeV4vdnd9p9NYis9"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Aaron Michael Services Location"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make Your Kenmore Home More Accessible?
          </h2>
          <p className="text-xl mb-8">
            Contact Kenmore's trusted ADA contractor for professional accessibility modifications and aging in place solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <Link 
              to="/contact"
              className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
          
          <p className="mt-6 text-purple-200">
            <strong>Serving Kenmore, Tonawanda, Buffalo, Amherst & All of Western New York</strong>
          </p>
        </div>
      </section>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default KenmoreHomePage;