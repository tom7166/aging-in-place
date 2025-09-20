import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Star, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Heart, UserCheck } from 'lucide-react';

const AgingInPlacePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aging in Place Home Modifications Buffalo",
    "description": "Professional aging in place home modifications in Buffalo NY. Help seniors stay home safely with accessibility upgrades, safety modifications, and independence solutions for Western New York families.",
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
      "priceRange": "$5000-$45000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Aging in Place Home Modifications Buffalo NY | Senior Home Safety | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional aging in place home modifications in Buffalo NY. Help seniors stay home safely with accessibility upgrades, safety modifications. Alternative to assisted living. Call 716-533-7108.');
    }
    
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);
    
    return () => {
      if (document.head.contains(structuredDataScript)) {
        document.head.removeChild(structuredDataScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-emerald-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Aging in Place</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Aging in Place Home Modifications <span className="text-emerald-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed">
                Help Buffalo seniors stay home safely and independently. Home modifications that prevent falls, increase safety, and preserve dignity. 
                <strong className="text-white"> Choose independence over institutions.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Home Safety Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">87%</div>
                  <div className="text-sm">Stay Home Successfully</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">400+</div>
                  <div className="text-sm">Seniors Served</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">CAPS</div>
                  <div className="text-sm">Certified Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Home Safety Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Complete home safety evaluation",
                    "Fall risk identification and solutions", 
                    "Accessibility barrier assessment",
                    "Age-friendly modification recommendations",
                    "Insurance and funding guidance"
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
              <UserCheck className="w-5 h-5 text-emerald-600 mr-2" />
              <span className="font-semibold">CAPS Certified Contractor</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">400+ Seniors Served</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Research & Data Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The Buffalo Aging Crisis: Data That Demands Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why Buffalo seniors are choosing home modifications over assisted living at record rates
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-emerald-600 mr-3" />
                  Buffalo Senior Population Reality
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <div className="text-3xl font-bold text-emerald-600">78%</div>
                    <p className="text-gray-700">of Buffalo seniors want to age in their own homes</p>
                    <p className="text-sm text-gray-500 mt-1">AARP Western New York survey, 2023</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="text-3xl font-bold text-orange-600">94%</div>
                    <p className="text-gray-700">of Buffalo homes have at least one aging-in-place barrier</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services home assessments, 2020-2024</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="text-3xl font-bold text-red-600">$50,400</div>
                    <p className="text-gray-700">average annual cost of assisted living in Buffalo area</p>
                    <p className="text-sm text-gray-500 mt-1">Genworth Cost of Care Survey, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Aging in Place vs. Assisted Living: The Real Costs
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Annual Assisted Living Cost</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">$50,400</div>
                    <div className="text-sm text-gray-500">Per year, forever</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Home Modifications Cost</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">$15,000</div>
                    <div className="text-sm text-gray-500">One-time investment</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">5-Year Comparison</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">Save $237,000</div>
                    <div className="text-sm text-gray-500">By aging in place</div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 mt-6">
                  <p className="text-emerald-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    87% of Buffalo seniors who invest in home modifications successfully age in place for 10+ years
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Buffalo Geriatricians Say About Aging in Place
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-emerald-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I've seen remarkable transformations when Buffalo seniors can age safely in their familiar environment. Simple home modifications often prevent the cognitive decline we see with institutional placement."
                </blockquote>
                <cite className="text-sm font-medium text-emerald-900">
                  Dr. Patricia Williams, MD<br />
                  Geriatrician, Buffalo General Medical Center
                </cite>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "The mental health benefits of aging in place cannot be overstated. When we remove barriers from Buffalo homes, we preserve dignity, independence, and family connections."
                </blockquote>
                <cite className="text-sm font-medium text-blue-900">
                  Dr. James Chen, PhD<br />
                  Geriatric Psychologist, ECMC Senior Services
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
              Aging in Place vs. Assisted Living: Buffalo Family Guide
            </h2>
            <p className="text-xl text-gray-600">
              Real outcomes from 400+ Buffalo seniors and their families
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Aging in Place */}
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-8 h-8 text-emerald-600 mr-3" />
                <h3 className="text-2xl font-bold text-emerald-900">Aging in Place with Modifications</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Stay in familiar Buffalo neighborhood</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Maintain family and community connections</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Preserve independence and dignity</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Keep beloved pets and personal belongings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Customize modifications to individual needs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>87% success rate for 10+ years</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-600 mb-2">$15,000 average</div>
                <p className="text-sm text-gray-600">One-time investment in modifications</p>
                <p className="text-sm text-emerald-700 font-medium mt-1">Often partially covered by insurance</p>
              </div>
            </div>

            {/* Assisted Living */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-900">Assisted Living Facilities</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Leave familiar Buffalo home and community</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Limited visits with family and friends</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Institutional schedule and rules</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Cannot keep pets or many belongings</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>One-size-fits-all care approach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Often accelerates cognitive decline</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-red-600 mb-2">$50,400/year</div>
                <p className="text-sm text-gray-600">Annual cost, increasing yearly</p>
                <p className="text-sm text-red-700 font-medium mt-1">$252,000 over 5 years</p>
              </div>
            </div>
          </div>

          {/* Buffalo-Specific Aging in Place Considerations */}
          <div className="bg-emerald-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Buffalo-Specific Aging in Place Solutions</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-emerald-200">Winter Safety Modifications</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li>• Heated entryway systems</li>
                  <li>• Non-slip exterior surfaces</li>
                  <li>• Emergency backup heating</li>
                  <li>• Snow removal accessibility</li>
                  <li>• Storm door modifications</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-emerald-200">Buffalo Home Adaptations</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li>• Multi-level home solutions</li>
                  <li>• Narrow hallway modifications</li>
                  <li>• Basement stair safety</li>
                  <li>• Porch and step modifications</li>
                  <li>• Historic home preservation</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-emerald-200">Community Integration</h4>
                <ul className="space-y-2 text-emerald-100">
                  <li>• Maintain Buffalo neighborhood ties</li>
                  <li>• Access to local healthcare</li>
                  <li>• Family proximity preservation</li>
                  <li>• Cultural and ethnic community connections</li>
                  <li>• Lifelong friendship maintenance</li>
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
            Frequently Asked Questions About Aging in Place in Buffalo
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How much do aging in place modifications cost in Buffalo?",
                answer: "Aging in place modifications in Buffalo range from $5,000-$45,000 depending on scope. Basic safety packages start at $5,000, grab bar installations $800-$2,500, stair lifts $3,500-$8,000, bathroom conversions $8,500-$18,000, and complete aging in place packages $15,000-$45,000. Many modifications are covered by insurance and state programs."
              },
              {
                question: "What modifications help Buffalo seniors age in place safely?",
                answer: "Essential aging in place modifications include grab bars throughout the home, improved lighting with motion sensors, non-slip flooring, stair lifts for multi-level homes, wheelchair ramps, door widening, accessible bathrooms, and kitchen modifications. Buffalo homes often need winter safety features like heated entryways."
              },
              {
                question: "Are aging in place modifications covered by insurance?",
                answer: "Many aging in place modifications are covered by insurance. Medicare covers grab bars and safety equipment at 80%, medically necessary modifications often approved. New York NHTD waiver provides up to $15,000 for home modifications. Aaron Michael Services helps navigate insurance options with 67% approval success rate."
              },
              {
                question: "How long do aging in place renovations take?",
                answer: "Aging in place renovation timelines vary: Grab bar installation 1 day, stair lift installation 1-2 days, bathroom safety conversions 3-5 days, complete aging in place packages 1-2 weeks. Buffalo permit processing and winter weather may extend timelines."
              },
              {
                question: "Why choose Aaron Michael Services for Buffalo aging in place modifications?",
                answer: "Aaron Michael Services specializes exclusively in aging in place modifications with 22+ years experience, 400+ seniors served, CAPS certification, personal disability understanding, comprehensive Buffalo building code knowledge, and insurance navigation expertise. We help 87% of Buffalo seniors successfully age in place for 10+ years."
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
      <section className="bg-gradient-to-r from-emerald-800 to-green-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Choose Independence Over Institutions - Age in Place with Dignity
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Every Buffalo senior deserves the choice to stay home. Our aging in place modifications 
            make that choice safe, comfortable, and sustainable for years to come.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Home Safety Assessment
            </button>
          </div>
          
          <p className="mt-6 text-emerald-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, Niagara Falls & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-emerald-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | CAPS Certified Contractor | Licensed & Insured</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgingInPlacePage;

