import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Accessibility, Snowflake, Thermometer } from 'lucide-react';

const TonawandaWheelchairRampInstallationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wheelchair Ramp Installation Tonawanda NY",
    "description": "Professional wheelchair ramp installation in Tonawanda NY. Wood, composite, and concrete ramps designed for WNY snow loads and Twin Cities waterfront conditions. ADA compliant with local slope guidelines.",
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
      "priceRange": "$2600-$8800",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Wheelchair Ramp Installation Tonawanda NY | ADA Ramps for Twin Cities | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional wheelchair ramp installation Tonawanda NY. Wood, composite, concrete ramps designed for WNY snow loads, Twin Cities waterfront conditions. ADA compliant. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-teal-900 via-cyan-800 to-blue-900 text-white relative overflow-hidden">
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
                  <span>Tonawanda Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Wheelchair Ramp Installation</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Wheelchair Ramp Installation <span className="text-teal-300">Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-teal-100 leading-relaxed">
                Professional wheelchair ramp installation in Tonawanda NY with wood, composite, and concrete options designed for Western New York's snow loads and Twin Cities waterfront conditions. 
                <strong className="text-white"> ADA compliant ramps engineered for riverside living and historic preservation.</strong>
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
                  Free Tonawanda Ramp Quote
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">145+</div>
                  <div className="text-sm">Tonawanda Ramps</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">180</div>
                  <div className="text-sm">lbs/sq ft Snow Load</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Tonawanda Ramp Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Site evaluation for Twin Cities snow load requirements",
                    "Material recommendations for waterfront climate", 
                    "ADA slope compliance and historic preservation",
                    "Permit requirements and approval process",
                    "Cost breakdown with insurance options"
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

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Wheelchair Ramp Installation Tonawanda NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Wheelchair ramp installation in Tonawanda NY requires specialized expertise that combines ADA compliance with Western New York's extreme weather challenges and the Twin Cities' unique waterfront considerations.</strong> After installing 145+ wheelchair ramps throughout Tonawanda, North Tonawanda, and surrounding areas, we understand that Twin Cities homeowners need ramps that provide safe, reliable access through Buffalo's harsh winters while addressing the moisture challenges of riverside living and historic neighborhood preservation requirements.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Wheelchair Ramp Types for Tonawanda NY Twin Cities Climate
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-teal-900 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Wood Wheelchair Ramps
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Pressure-treated lumber for Twin Cities weather
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Custom design for historic Tonawanda properties
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Cost: $2,600-$6,200
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-cyan-900 flex items-center">
                        <Accessibility className="w-5 h-5 mr-2" />
                        Composite Wheelchair Ramps
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Low-maintenance, waterfront-resistant
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Superior grip in snow and riverside humidity
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Cost: $3,800-$7,800
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center">
                        <Shield className="w-5 h-5 mr-2" />
                        Concrete Wheelchair Ramps
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Permanent solution for Tonawanda homes
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Textured surfaces for winter safety
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Cost: $5,200-$8,800
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Snow & Waterfront Considerations for Tonawanda Wheelchair Ramps
                  </h3>

                  <div className="bg-blue-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6 flex items-center">
                      <Snowflake className="w-8 h-8 mr-3" />
                      Tonawanda Twin Cities Winter Engineering Requirements
                    </h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4 text-teal-200">Snow Load Engineering</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• 180 lbs/sq ft snow load capacity required</li>
                          <li>• Reinforced connections and footings</li>
                          <li>• Proper drainage to prevent ice buildup</li>
                          <li>• Snow removal accessibility planning</li>
                          <li>• Heated ramp options for severe conditions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-4 text-teal-200">Waterfront Protection</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Footings below 42-inch frost line</li>
                          <li>• Moisture-resistant materials and finishes</li>
                          <li>• Materials rated for riverside humidity</li>
                          <li>• Proper ventilation and drainage</li>
                          <li>• Ice prevention surface treatments</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Related Tonawanda Accessibility Services
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">
                        <Link to="/tonawanda-ny-bathroom-remodeling" className="text-blue-600 hover:text-blue-800">
                          Accessible Bathroom Remodeling Tonawanda
                        </Link>
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Complete your accessibility transformation with beautiful accessible bathrooms featuring walk-in showers, grab bars, and waterfront-appropriate finishes for Twin Cities homes.
                      </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">
                        <Link to="/tonawanda-ny-basement-finishing-egress" className="text-blue-600 hover:text-blue-800">
                          Basement Finishing & Egress Tonawanda
                        </Link>
                      </h4>
                      <p className="text-gray-700 mb-3">
                        Professional basement finishing with egress windows, waterproofing, and accessibility features designed for Twin Cities waterfront properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Wheelchair Ramp Installation in Tonawanda NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "What wheelchair ramp materials work best in Tonawanda NY Twin Cities climate?",
                      answer: "For Tonawanda's harsh winters and waterfront humidity, composite decking and textured concrete perform best. Composite provides excellent slip resistance in snow and ice while resisting moisture from the Niagara River. Textured concrete offers superior durability and ice grip but costs more initially. Pressure-treated wood works well with proper maintenance and moisture protection. All materials must be engineered for 180 lbs/sq ft snow loads and riverside humidity common in the Twin Cities area."
                    },
                    {
                      question: "How do snow loads and waterfront conditions affect wheelchair ramp design in Tonawanda?",
                      answer: "Tonawanda wheelchair ramps must be engineered for 180 lbs/sq ft snow loads and riverside moisture conditions. This requires reinforced connections, deeper footings below the 42-inch frost line, proper drainage systems to prevent ice buildup, and moisture-resistant materials for the Twin Cities waterfront environment. Our Tonawanda ramps include snow removal considerations, humidity protection, and materials rated for extreme temperature fluctuations common in Western New York."
                    },
                    {
                      question: "What are the local slope guidelines for wheelchair ramps in Tonawanda?",
                      answer: "Tonawanda follows ADA guidelines requiring maximum 1:12 slope (1 inch rise per 12 inches run) with landings every 30 feet. However, many Twin Cities families choose gentler slopes (1:15 or 1:20) for enhanced safety, especially in winter conditions and for historic home preservation. Handrails are required on both sides for ramps over 6 inches rise, with 12-inch extensions at top and bottom. Our Tonawanda ramps exceed minimum requirements to ensure safe navigation year-round."
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="bg-teal-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready for Safe Access?</h3>
                <p className="mb-6">Get your free wheelchair ramp quote from Twin Cities accessibility specialists.</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span className="font-semibold">716-533-7108</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>Mon-Fri 7AM-6PM</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>Serving Twin Cities & WNY</span>
                  </div>
                </div>
                
                <a 
                  href="tel:716-533-7108" 
                  className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Quote
                </a>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Tonawanda Services</h3>
                <div className="space-y-3">
                  <Link to="/accessible-remodeling-tonawanda-ny" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-blue-900">Accessible Remodeling</h4>
                    <p className="text-sm text-blue-700">Complete home accessibility solutions</p>
                  </Link>
                  <Link to="/tonawanda-ny-bathroom-remodeling" className="block p-3 bg-teal-50 rounded-lg hover:bg-teal-100 transition-colors">
                    <h4 className="font-semibold text-teal-900">Accessible Bathrooms</h4>
                    <p className="text-sm text-teal-700">ADA compliant bathroom renovations</p>
                  </Link>
                  <Link to="/services/door-widening" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <h4 className="font-semibold text-green-900">Door Widening</h4>
                    <p className="text-sm text-green-700">Wheelchair accessible doorways</p>
                  </Link>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Tonawanda Families Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years WNY construction experience",
                    "145+ Tonawanda wheelchair ramps installed", 
                    "Licensed contractor with waterfront expertise",
                    "Twin Cities building specialists",
                    "180 lbs/sq ft snow load engineering",
                    "ADA compliance guaranteed",
                    "Family-owned Buffalo business",
                    "Licensed & insured"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{reason}</span>
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
            Install Your Tonawanda Wheelchair Ramp with Twin Cities Engineering Expertise
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Don't let steps keep you from accessing your Tonawanda home safely. 
            Our wheelchair ramps are engineered for Western New York's extreme weather and Twin Cities waterfront conditions.
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
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-teal-200">
            <strong>Serving Tonawanda, North Tonawanda, Kenmore, Buffalo & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-teal-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Twin Cities Engineering Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TonawandaWheelchairRampInstallationPage;