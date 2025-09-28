import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Bath, Ruler, Maximize } from 'lucide-react';

const KenmoreSmallBathroomRemodelPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Small Bathroom Remodel Kenmore NY",
    "description": "Professional small bathroom remodels in Kenmore NY with space-saving fixtures and roll-in shower options. Budget and premium layouts for compact bathrooms in Western New York's premier community.",
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
      "priceRange": "$6500-$24000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Small Bathroom Remodels — Kenmore, NY (Budget & Layouts) | Space-Saving Solutions | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional small bathroom remodel Kenmore NY. Space-saving fixtures, roll-in shower options, budget to premium layouts. Maximize compact bathroom space. Call 716-533-7108.');
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
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-purple-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Kenmore Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Small Bathroom Remodels</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Small Bathroom Remodel <span className="text-purple-300">Kenmore NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Professional small bathroom remodels in Kenmore NY with space-saving fixtures and roll-in shower options. 
                Budget to premium layouts that maximize compact bathroom space in Western New York's premier suburban community. 
                <strong className="text-white"> Transform your small Kenmore bathroom into a luxury accessible space.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-purple-700 hover:bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Kenmore Design Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">85+</div>
                  <div className="text-sm">Small Bathrooms</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">3</div>
                  <div className="text-sm">Quality Tiers</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Kenmore Small Bathroom Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Space optimization and layout planning",
                    "Fixture selection for compact spaces", 
                    "Roll-in shower feasibility evaluation",
                    "3D design visualization with options",
                    "Budget tier recommendations and costs"
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

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Small Bathroom Remodel Kenmore NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Small bathroom remodeling in Kenmore NY requires specialized design expertise that maximizes limited space while maintaining the luxury standards expected in Western New York's premier suburban community.</strong> After completing 85+ small bathroom renovations throughout Kenmore, we understand that compact bathrooms present unique challenges that require creative solutions, space-saving fixtures, and innovative layouts that don't compromise on style or accessibility.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-500 pb-2">
                    Space-Saving Fixtures for Kenmore Small Bathrooms
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-purple-900 flex items-center">
                        <Maximize className="w-5 h-5 mr-2" />
                        Compact Fixture Solutions
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          Wall-mounted toilets for floor space
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          Corner sinks and vanities
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          Sliding shower doors vs swing doors
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          Recessed storage and medicine cabinets
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-indigo-900 flex items-center">
                        <Bath className="w-5 h-5 mr-2" />
                        Roll-in Shower Options
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          Curbless entry in 5x7 spaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          Linear drain systems for space efficiency
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          Fold-down shower seats
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          Grab bars integrated into design
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-500 pb-2">
                    Kenmore Small Bathroom Remodel Cost Brackets - 3 Quality Tiers
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-lg mb-2 text-green-900">Budget Tier: Essential Updates ($6,500-$12,000)</h4>
                      <p className="text-gray-700 mb-3">
                        Basic small bathroom remodel with essential space-saving features and safety improvements. Includes new vanity, toilet, shower/tub, flooring, and lighting. Perfect for Kenmore homeowners seeking functional improvements on a budget.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Included Features:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Standard fixtures and finishes</li>
                            <li>• Basic grab bar installation</li>
                            <li>• Non-slip flooring</li>
                            <li>• Improved lighting</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Space Solutions:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Compact vanity with storage</li>
                            <li>• Corner shower or tub</li>
                            <li>• Wall-mounted accessories</li>
                            <li>• Recessed medicine cabinet</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Mid-Range Tier: Enhanced Accessibility ($12,000-$18,000)</h4>
                      <p className="text-gray-700 mb-3">
                        Comprehensive small bathroom remodel with accessibility features and quality finishes. Includes walk-in shower conversion, premium fixtures, and space-maximizing design perfect for Kenmore's suburban standards.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Accessibility Features:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Walk-in shower with grab bars</li>
                            <li>• Comfort-height toilet</li>
                            <li>• Accessible sink height</li>
                            <li>• Enhanced lighting systems</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Quality Upgrades:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Quartz countertops</li>
                            <li>• Ceramic tile flooring</li>
                            <li>• Brushed nickel fixtures</li>
                            <li>• Custom storage solutions</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-lg mb-2 text-purple-900">Premium Tier: Luxury Small Bathroom ($18,000-$24,000)</h4>
                      <p className="text-gray-700 mb-3">
                        High-end small bathroom remodel with luxury finishes and advanced accessibility features. Roll-in shower options, premium materials, and sophisticated design that maximizes every inch while meeting Kenmore's upscale expectations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Luxury Features:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Roll-in shower with linear drain</li>
                            <li>• Heated flooring systems</li>
                            <li>• Smart lighting and ventilation</li>
                            <li>• Premium grab bars and accessories</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Premium Materials:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Natural stone or porcelain tile</li>
                            <li>• Custom vanity with soft-close drawers</li>
                            <li>• High-end plumbing fixtures</li>
                            <li>• Integrated storage solutions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-purple-500 pb-2">
                    Small Bathroom Layout Solutions for Kenmore Homes
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Kenmore Small Bathroom Design Strategies</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold mb-3 text-purple-200 flex items-center">
                          <Ruler className="w-5 h-5 mr-2" />
                          5x8 Bathroom Layouts
                        </h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Corner shower with fold-down seat</li>
                          <li>• Wall-mounted toilet and vanity</li>
                          <li>• Pocket door for space savings</li>
                          <li>• Vertical storage maximization</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-purple-200">6x9 Bathroom Layouts</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Walk-in shower with bench seating</li>
                          <li>• Floating vanity with knee clearance</li>
                          <li>• Comfort-height toilet placement</li>
                          <li>• Accessible storage at multiple heights</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-purple-200">Luxury Compact Design</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Roll-in shower with linear drain</li>
                          <li>• Custom vanity with accessibility</li>
                          <li>• Smart storage and organization</li>
                          <li>• Premium finishes in small spaces</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Small Bathroom Remodels in Kenmore NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "What's the best layout for a small bathroom remodel in Kenmore?",
                      answer: "The best small bathroom layout in Kenmore depends on your space dimensions and accessibility needs. For 5x8 bathrooms, corner showers with wall-mounted fixtures maximize floor space. 6x9 bathrooms can accommodate walk-in showers with bench seating. Roll-in showers work in spaces 5x7 or larger with proper planning. We create custom layouts that optimize every inch while meeting Kenmore's quality standards and any accessibility requirements."
                    },
                    {
                      question: "Can you install a roll-in shower in a small Kenmore bathroom?",
                      answer: "Yes, roll-in showers can be installed in small Kenmore bathrooms as compact as 5x7 feet with proper design. Key solutions include linear drain systems for efficient water management, fold-down shower seats to save space, sliding or no-door entries, and strategic grab bar placement. The key is custom design that maximizes accessibility while maintaining the sophisticated aesthetics expected in Kenmore homes."
                    },
                    {
                      question: "How much does a small bathroom remodel cost in Kenmore NY?",
                      answer: "Small bathroom remodel costs in Kenmore range from $6,500-$24,000 across three quality tiers. Budget tier (essential updates) costs $6,500-$12,000, mid-range tier (enhanced accessibility) costs $12,000-$18,000, premium tier (luxury small bathroom) costs $18,000-$24,000. Kenmore's upscale standards often favor mid-range to premium tiers. Many accessibility features qualify for insurance coverage with proper documentation."
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
              <div className="bg-purple-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready to Maximize Your Space?</h3>
                <p className="mb-6">Get your free small bathroom design consultation from Kenmore's space optimization specialists.</p>
                
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
                    <span>Serving Kenmore & WNY</span>
                  </div>
                </div>
                
                <a 
                  href="tel:716-533-7108" 
                  className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Design Consultation
                </a>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Kenmore Services</h3>
                <div className="space-y-3">
                  <Link to="/buffalo-ny-bathroom-remodeling" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-blue-900">Bathroom Remodeling Buffalo</h4>
                    <p className="text-sm text-blue-700">Complete bathroom renovation services</p>
                  </Link>
                  <Link to="/accessible-remodeling-buffalo-ny" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <h4 className="font-semibold text-purple-900">Accessible Remodeling</h4>
                    <p className="text-sm text-purple-700">Complete home accessibility solutions</p>
                  </Link>
                  <Link to="/services/aging-in-place" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <h4 className="font-semibold text-green-900">Aging in Place</h4>
                    <p className="text-sm text-green-700">Senior home safety modifications</p>
                  </Link>
                </div>
              </div>

              {/* Cost Breakdown */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Small Bathroom Cost Breakdown</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { tier: 'Budget Tier', range: '$6.5K-$12K' },
                    { tier: 'Mid-Range Tier', range: '$12K-$18K' },
                    { tier: 'Premium Tier', range: '$18K-$24K' },
                    { tier: 'Roll-in Shower Add', range: '+$2K-$4K' },
                    { tier: 'Heated Flooring Add', range: '+$1.5K-$3K' },
                    { tier: 'Smart Features Add', range: '+$800-$2K' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.tier}</span>
                      <span className="text-purple-600">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Small Kenmore Bathroom Into a Luxury Space
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Don't let limited space limit your bathroom's potential. 
            Our Kenmore small bathroom specialists create beautiful, functional spaces that maximize every square inch.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Design Consultation
            </button>
          </div>
          
          <p className="mt-6 text-purple-200">
            <strong>Serving Kenmore, Tonawanda, Buffalo, Amherst, Cheektowaga & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-purple-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Small Space Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KenmoreSmallBathroomRemodelPage;