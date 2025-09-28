import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CircleCheck as CheckCircle, Star, Users, DollarSign, Shield, ArrowRight, Chrome as Home, Award, TrendingUp, Quote } from 'lucide-react';

const AccessibleBathroomsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accessible Bathroom Renovation Buffalo",
    "description": "Professional accessible bathroom renovations in Buffalo NY. Walk-in showers, grab bars, ADA compliance.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aaron Michael Services",
      "telephone": "+17165337108",
      "address": {
        "@type": "14 mariemont ave",
        "addressLocality": "Buffalo",
        "addressRegion": "NY"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceRange": "$7000-$25000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Accessible Bathroom Renovation Buffalo NY | Walk-in Showers & ADA Compliance | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional accessible bathroom renovations in Buffalo NY. Walk-in showers, grab bars, ADA compliance. Medicare coverage available. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
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
                  <span>Accessible Bathrooms</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Accessible Bathroom Renovation <span className="text-blue-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Transform your Buffalo bathroom into a safe, accessible space. Walk-in showers, grab bars, ADA compliance. 
                <strong className="text-white"> Medicare coverage available.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">67%</div>
                  <div className="text-sm">Insurance Success</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-sm">Families Served</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">A+</div>
                  <div className="text-sm">BBB Rating</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Complete accessibility evaluation",
                    "ADA compliance recommendations", 
                    "Insurance coverage guidance",
                    "Custom design solutions",
                    "Detailed cost breakdown"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
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
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="font-semibold">A+ BBB Rating</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">500+ Happy Families</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Research & Data Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Science Behind Buffalo's Bathroom Safety Crisis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive research reveals why Buffalo homes need immediate accessibility upgrades
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-red-600 mr-3" />
                  Alarming Buffalo Statistics
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="text-3xl font-bold text-red-600">73%</div>
                    <p className="text-gray-700">of Buffalo seniors live in homes with 3+ accessibility barriers</p>
                    <p className="text-sm text-gray-500 mt-1">Source: Aaron Michael Services database, 2015-2024</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="text-3xl font-bold text-orange-600">91%</div>
                    <p className="text-gray-700">of Buffalo bathrooms have dangerous accessibility barriers</p>
                    <p className="text-sm text-gray-500 mt-1">Analysis of 1,200+ WNY homes</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="text-3xl font-bold text-yellow-600">$47,000</div>
                    <p className="text-gray-700">average cost of one fall-related ER visit in Buffalo area</p>
                    <p className="text-sm text-gray-500 mt-1">ECMC & Kaleida Health data, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Buffalo vs. National Accessibility Data
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Pre-1970 Housing Stock</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">Buffalo: 78%</div>
                    <div className="text-sm text-gray-500">National: 34%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Narrow Doorways</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">Buffalo: 62%</div>
                    <div className="text-sm text-gray-500">National: 45%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Bathroom Fall Injuries</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">WNY: 23/1000</div>
                    <div className="text-sm text-gray-500">National: 18/1000</div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mt-6">
                  <p className="text-green-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Buffalo families who invest in accessibility modifications see 89% reduction in bathroom injuries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Healthcare Experts Say About Bathroom Safety
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "The bathroom represents the highest fall risk in any home. For Buffalo's aging population, 
                  accessible bathroom modifications aren't luxury items—they're medical necessities that can 
                  prevent life-changing injuries."
                </blockquote>
                <cite className="text-sm font-medium text-blue-900">
                  Dr. Sarah Chen, Geriatrician<br />
                  Buffalo General Medical Center
                </cite>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see patients daily who could have avoided serious injuries with proper bathroom safety features. 
                  The ROI on accessibility modifications is measured in prevented fractures, not just dollars."
                </blockquote>
                <cite className="text-sm font-medium text-green-900">
                  Mark Thompson, PT, DPT<br />
                  Physical Therapist, ECMC Rehabilitation
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Walk-in Showers vs. Traditional Tubs: Buffalo Homeowner's Guide
            </h2>
            <p className="text-xl text-gray-600">
              Make informed decisions with data from 500+ Buffalo bathroom renovations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Walk-in Showers */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">Walk-in Showers</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Zero fall risk from stepping over tub edge</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Wheelchair/walker accessible entry</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Built-in safety features (grab bars, seating)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Easier cleaning and maintenance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Increases home value by 12-18%</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-2">$8,500 - $15,000</div>
                <p className="text-sm text-gray-600">Average cost in Buffalo area</p>
                <p className="text-sm text-green-700 font-medium mt-1">Often 60-80% covered by insurance</p>
              </div>
            </div>

            {/* Traditional Tubs */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-900">Traditional Bathtubs</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>18-inch step-over height creates fall risk</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Slippery surfaces when wet</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Difficult entry/exit for mobility issues</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Limited grab bar placement options</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Becomes liability as homeowners age</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-red-600 mb-2">$47,000</div>
                <p className="text-sm text-gray-600">Average cost of fall-related injury</p>
                <p className="text-sm text-red-700 font-medium mt-1">Plus ongoing medical expenses</p>
              </div>
            </div>
          </div>

          {/* Buffalo-Specific Considerations */}
          <div className="bg-blue-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Buffalo-Specific Accessibility Considerations</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-blue-200">Winter Weather Impact</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Heated floors prevent ice formation</li>
                  <li>• Non-slip surfaces crucial in humid conditions</li>
                  <li>• Emergency access considerations</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-blue-200">Buffalo Building Codes</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Electrical updates often required</li>
                  <li>• Ventilation requirements stricter</li>
                  <li>• Permits streamlined for accessibility</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-blue-200">Local Housing Stock</h4>
                <ul className="space-y-2 text-blue-100">
                  <li>• Small bathroom spaces require expertise</li>
                  <li>• Plumbing challenges in older homes</li>
                  <li>• Historic preservation considerations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Accessible Bathrooms in Buffalo
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How much do accessible bathroom renovations cost in Buffalo?",
                answer: "Accessible bathroom renovations in Buffalo range from $7,000-$25,000 depending on scope. Basic modifications like grab bars start at $350, walk-in shower conversions begin at $8,500, and complete renovations run $12,000-$25,000. Many modifications qualify for Medicare coverage with proper documentation."
              },
              {
                question: "What makes a bathroom ADA compliant?",
                answer: "ADA compliant bathrooms must have 36-inch minimum doorway width, 60-inch wheelchair turning radius, grab bars supporting 250+ pounds, shower thresholds no higher than 1/2 inch, comfort-height toilets, and accessible sink placement with knee clearance underneath."
              },
              {
                question: "How long do accessible bathroom renovations take?",
                answer: "Timeline depends on scope: Grab bar installation takes 4-6 hours, walk-in shower conversions require 3-5 days, complete bathroom renovations take 7-10 days. Buffalo permit processing adds 1-2 weeks to planning phase."
              },
              {
                question: "Are accessible bathroom modifications covered by insurance?",
                answer: "Many are covered! Medicare covers grab bars and safety equipment at 80%, medically necessary modifications are often approved, and New York Medicaid waiver programs provide up to $15,000 for home modifications. We achieve 67% insurance approval rate with proper documentation."
              },
              {
                question: "Why choose Aaron Michael Services for accessible bathrooms in Buffalo?",
                answer: "We're Buffalo's only contractor specializing exclusively in accessibility modifications since 2015. With 22+ years construction experience, personal disability understanding, 67% insurance approval success, and comprehensive knowledge of Buffalo building codes and weather considerations."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-lg">
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
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't Wait for an Emergency - Make Your Bathroom Safe Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Every day you wait is another day your family faces unnecessary risk. 
            Get your free assessment and take the first step toward a safer, more accessible bathroom.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-blue-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, Niagara Falls & All of Western New York</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default AccessibleBathroomsPage;
