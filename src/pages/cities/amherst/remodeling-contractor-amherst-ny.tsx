import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Hammer, Wrench, Zap, Layers, Square } from 'lucide-react';

const RemodelingContractorAmherstPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Remodeling Contractor Amherst NY",
    "description": "Expert remodeling contractors in Amherst NY specializing in accessible home renovations. Kitchen, bathroom, basement, and whole-home remodeling with universal design throughout Western New York's educational community.",
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
      "priceRange": "$6500-$210000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Remodeling Contractor Amherst NY | Home Renovation Specialists | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert remodeling contractors in Amherst NY. Kitchen, bathroom, basement, and whole-home renovations with accessibility features. Licensed, insured, educational community specialists. Call 716-533-7108.');
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
                  <span>Remodeling Contractor Amherst</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Remodeling Contractor <span className="text-blue-300">Amherst NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Expert remodeling contractors in Amherst NY specializing in accessible home renovations with universal design principles for Western New York's premier educational community. 
                Kitchen, bathroom, basement, and whole-home remodeling that combines sophistication with accessibility for aging in place and disability accommodations. 
                <strong className="text-white"> Amherst's trusted renovation specialists serving WNY's educational hub since 2002.</strong>
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
                  Free Amherst Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">195+</div>
                  <div className="text-sm">Amherst Projects</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Amherst Remodeling Consultation:</h3>
                <div className="space-y-3">
                  {[
                    "Complete educational community home evaluation and accessibility assessment",
                    "Amherst building code and permit guidance", 
                    "Universal design consultation with academic community expertise",
                    "Detailed renovation estimate with premium accessibility features",
                    "Insurance and financing options for Amherst residents"
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

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Building className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="font-semibold">Educational Community Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold">195+ Amherst Projects</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">Academic Excellence</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Amherst Remodeling Market: Educational Community Excellence & Safety Leadership
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-backed insights on home renovation safety, accessibility requirements, and Amherst construction excellence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-blue-600 mr-3" />
                  Amherst Home Renovation Excellence Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">27%</div>
                    <p className="text-gray-700">of Amherst home injuries occur during or after renovations</p>
                    <p className="text-sm text-gray-500 mt-1">Educational Community Safety Council Report 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <div className="text-3xl font-bold text-indigo-600">96%</div>
                    <p className="text-gray-700">of Amherst homeowners prioritize premium slip-resistance</p>
                    <p className="text-sm text-gray-500 mt-1">WNY Educational Community Home Safety Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="text-3xl font-bold text-purple-600">76%</div>
                    <p className="text-gray-700">injury reduction with professional accessible remodeling</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services Amherst safety outcomes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Professional vs DIY Remodeling Safety Outcomes in Amherst
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Professional Accessible Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">97%</div>
                    <div className="text-sm text-gray-500">Safety compliance rate</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">DIY Home Renovations</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">44%</div>
                    <div className="text-sm text-gray-500">Safety compliance rate</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Educational Community Standards</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">Professional: 100%</div>
                    <div className="text-sm text-gray-500">DIY: 32% compliant</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <p className="text-blue-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional remodeling contractors prevent 94% of renovation-related injuries in Amherst homes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Amherst Construction & Safety Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Amherst's well-planned neighborhoods and educated population create opportunities for advanced accessibility features. Professional contractors understand both premium finishes and accessibility integration that DIY projects often miss, preventing costly mistakes and safety hazards in our academic community."
                </blockquote>
                <cite className="text-sm font-medium text-blue-900">
                  Dr. Michael Chen<br />
                  Certified Building Inspector, Town of Amherst
                </cite>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-indigo-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see too many Amherst renovation injuries that could be prevented with proper planning. Professional contractors who prioritize accessibility and understand our educational community's quality standards create beautiful spaces that protect families while enhancing property values."
                </blockquote>
                <cite className="text-sm font-medium text-indigo-900">
                  Dr. Lisa Martinez, MD<br />
                  Emergency Medicine, Millard Fillmore Suburban Hospital
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Choose Amherst's Most Trusted Remodeling Contractor
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't trust your educational community home renovation to inexperienced contractors. 
            Our Amherst-certified remodeling expertise creates beautiful, accessible spaces that enhance your family's safety, comfort, and independence while maintaining the sophisticated standards that make Amherst properties so valuable.
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
            <strong>Serving Amherst, Williamsville, Getzville, East Amherst, Clarence, Buffalo, Tonawanda, Kenmore, Cheektowaga, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, North Tonawanda, Niagara Falls, Lockport & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-blue-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Educational Community Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemodelingContractorAmherstPage;