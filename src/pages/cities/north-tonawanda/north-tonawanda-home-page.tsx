import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Star, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Heart, Building, Bath, ChefHat, Accessibility, Wrench, Eye, ArrowUp, DoorOpen, Layers } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingCallButton from '../../../components/FloatingCallButton';

const NorthTonawandaHomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aaron Michael Services - North Tonawanda NY",
    "description": "Professional ADA contractor and accessibility specialist serving North Tonawanda NY. Wheelchair ramps, accessible bathrooms, aging in place modifications for the Lumber City and Western New York.",
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
      "name": "North Tonawanda",
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
    document.title = "ADA Contractor North Tonawanda NY | Wheelchair Ramps & Accessible Bathrooms | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional ADA contractor serving North Tonawanda NY. Wheelchair ramps, accessible bathrooms, aging in place modifications for the Lumber City and Western New York. Call 716-533-7108.');
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
    <div className="min-h-screen bg-white">
      <Header highContrastMode={false} toggleHighContrast={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-gray-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            North Tonawanda NY ADA Contractor & Accessibility Specialist
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Professional wheelchair ramps, accessible bathrooms, and aging in place modifications for the Lumber City and Western New York.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="tel:716-533-7108" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 716-533-7108
            </a>
            <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Free North Tonawanda Consultation
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <div className="font-bold text-lg">22+</div>
              <div className="text-sm">Years Experience</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              <div className="font-bold text-lg">165+</div>
              <div className="text-sm">NT Projects</div>
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
              Accessibility Services for North Tonawanda NY
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive ADA modifications and aging in place solutions for the Lumber City and Western New York
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Accessibility className="w-8 h-8 text-slate-600" />,
                title: "Wheelchair Ramp Installation",
                description: "ADA compliant ramps designed for Lumber City canal conditions and industrial heritage.",
                link: "/north-tonawanda-ny-wheelchair-ramp-installation"
              },
              {
                icon: <Wrench className="w-8 h-8 text-gray-600" />,
                title: "Grab Bar Installation", 
                description: "Industrial-grade safety bars that complement Lumber City home character.",
                link: "/north-tonawanda-ny-grab-bar-installation"
              },
              {
                icon: <ArrowUp className="w-8 h-8 text-blue-600" />,
                title: "Stair Lift Installation",
                description: "Reliable stair lifts for safe multi-level access in canal-side homes.",
                link: "/north-tonawanda-ny-stair-lift-installation"
              },
              {
                icon: <Bath className="w-8 h-8 text-cyan-600" />,
                title: "Walk-In Tub Installation",
                description: "Therapeutic walk-in tubs with safety features for canal-side living.",
                link: "/north-tonawanda-ny-walk-in-tub-installation"
              },
              {
                icon: <Bath className="w-8 h-8 text-teal-600" />,
                title: "Roll-In Shower Installation",
                description: "Zero-threshold showers for wheelchair accessibility in Lumber City homes.",
                link: "/north-tonawanda-ny-roll-in-shower-installation"
              },
              {
                icon: <DoorOpen className="w-8 h-8 text-green-600" />,
                title: "Door Widening",
                description: "Wheelchair accessible doorways with industrial heritage preservation.",
                link: "/north-tonawanda-ny-door-widening"
              },
              {
                icon: <ChefHat className="w-8 h-8 text-orange-600" />,
                title: "Kitchen Modifications",
                description: "Accessible kitchens with universal design for Lumber City families.",
                link: "/north-tonawanda-ny-kitchen-modifications"
              },
              {
                icon: <Building className="w-8 h-8 text-red-600" />,
                title: "Bathroom Remodeling",
                description: "Complete accessible bathroom renovations for canal-side homes.",
                link: "/north-tonawanda-ny-bathroom-remodeling"
              },
              {
                icon: <Heart className="w-8 h-8 text-emerald-600" />,
                title: "Aging-in-Place Design Consultation",
                description: "Comprehensive accessibility planning for Lumber City homes.",
                link: "/north-tonawanda-ny-aging-in-place-design-consultation"
              },
              {
                icon: <Eye className="w-8 h-8 text-amber-600" />,
                title: "Home Safety Assessments",
                description: "Professional fall risk evaluation for canal-side properties.",
                link: "/north-tonawanda-ny-home-safety-assessments"
              },
              {
                icon: <Layers className="w-8 h-8 text-yellow-600" />,
                title: "Flooring Installation",
                description: "Safe, accessible flooring solutions for Lumber City homes.",
                link: "/north-tonawanda-ny-flooring-installation"
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
                    className="inline-flex items-center bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
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
              Serving North Tonawanda and all of Western New York from our Buffalo location
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
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make Your North Tonawanda Home More Accessible?
          </h2>
          <p className="text-xl mb-8">
            Contact the Lumber City's trusted ADA contractor for professional accessibility modifications and aging in place solutions.
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
              className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
          
          <p className="mt-6 text-slate-200">
            <strong>Serving North Tonawanda, Tonawanda, Kenmore, Buffalo & All of Western New York</strong>
          </p>
        </div>
      </section>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default NorthTonawandaHomePage;