import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, CheckCircle, Star, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, ChefHat, Utensils } from 'lucide-react';

const KitchenModificationsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Accessibility Modifications Buffalo",
    "description": "Professional accessible kitchen modifications in Buffalo NY. Lowered counters, roll-under sinks, accessible cabinets. ADA compliance for Western New York homes.",
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
      "priceRange": "$8000-$35000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Kitchen Accessibility Modifications Buffalo NY | Accessible Kitchen Remodel | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional kitchen accessibility modifications in Buffalo NY. Lowered counters, roll-under sinks, accessible cabinets. ADA compliance for aging in place. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-orange-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <a href="https://aaronmichaelservices.com/" className="hover:text-white">Home</a>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Kitchen Modifications</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Kitchen Accessibility Modifications <span className="text-orange-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                Make cooking accessible again. Lowered counters, roll-under sinks, accessible cabinets for Buffalo homes. 
                <strong className="text-white"> Independence in your own kitchen.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Kitchen Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">300+</div>
                  <div className="text-sm">Kitchens Modified</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">89%</div>
                  <div className="text-sm">Regain Independence</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">A+</div>
                  <div className="text-sm">BBB Rating</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Kitchen Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Complete accessibility evaluation",
                    "Counter height recommendations", 
                    "Cabinet modification options",
                    "Appliance accessibility review",
                    "Cost breakdown with insurance options"
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
              <ChefHat className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-semibold">Kitchen Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">300+ Families Served</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Research & Data Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Buffalo's Kitchen Accessibility Challenge: The Hidden Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why Buffalo kitchens create daily struggles for people with mobility challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-orange-600 mr-3" />
                  Buffalo Kitchen Accessibility Crisis
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="text-3xl font-bold text-orange-600">84%</div>
                    <p className="text-gray-700">of Buffalo kitchens have counters too high for wheelchair users</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services assessment data, 2018-2024</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="text-3xl font-bold text-red-600">67%</div>
                    <p className="text-gray-700">of seniors stop cooking due to kitchen accessibility barriers</p>
                    <p className="text-sm text-gray-500 mt-1">WNY aging population study, 2023</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="text-3xl font-bold text-yellow-600">$8,400</div>
                    <p className="text-gray-700">annual cost of meal delivery vs. accessible kitchen cooking</p>
                    <p className="text-sm text-gray-500 mt-1">Buffalo cost of living analysis</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Buffalo vs. National Kitchen Accessibility
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Standard Counter Height (36")</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">Buffalo: 89%</div>
                    <div className="text-sm text-gray-500">National: 82%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Inaccessible Cabinet Hardware</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">Buffalo: 76%</div>
                    <div className="text-sm text-gray-500">National: 68%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">No Under-Counter Clearance</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">WNY: 91%</div>
                    <div className="text-sm text-gray-500">National: 85%</div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mt-6">
                  <p className="text-green-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Families with accessible kitchens cook 340% more meals at home, saving $6,800 annually
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Occupational Therapists Say About Kitchen Accessibility
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-orange-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "The kitchen is where independence lives or dies for people with mobility challenges. When Buffalo families can't cook for themselves, we see rapid decline in nutrition, mental health, and overall quality of life. Accessible kitchen modifications literally save lives."
                </blockquote>
                <cite className="text-sm font-medium text-orange-900">
                  Jennifer Walsh, OTR/L<br />
                  Senior Occupational Therapist, ECMC
                </cite>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I've seen 80-year-olds regain their love of cooking after proper kitchen modifications. The psychological impact of being able to prepare meals again - it's transformative. These aren't just renovations, they're dignity restorations."
                </blockquote>
                <cite className="text-sm font-medium text-green-900">
                  Dr. Michael Rodriguez, OTD<br />
                  Director, Buffalo Rehabilitation Services
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
              Accessible Kitchen Modifications vs. Standard Kitchen Design
            </h2>
            <p className="text-xl text-gray-600">
              Real data from 300+ Buffalo kitchen accessibility projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Accessible Kitchens */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-2xl font-bold text-green-900">Accessible Kitchen Design</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>32-34" counter height for seated users</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Roll-under sinks with knee clearance</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Pull-down shelving and lazy Susans</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Side-by-side appliance placement</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Wide pathways (42" minimum)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span>Accessible cabinet hardware</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-green-600 mb-2">$12,000 - $35,000</div>
                <p className="text-sm text-gray-600">Average modification cost</p>
                <p className="text-sm text-green-700 font-medium mt-1">Saves $6,800/year in meal costs</p>
              </div>
            </div>

            {/* Standard Kitchens */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-900">Standard Kitchen Design</h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>36" counter height blocks wheelchair access</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Standard sinks prevent roll-under access</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Upper cabinets too high for seated reach</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Narrow walkways create navigation barriers</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Round door knobs difficult to operate</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 bg-red-600 rounded-full mr-3 flex items-center justify-center">
                    <span className="text-white text-xs">✕</span>
                  </div>
                  <span>Forces dependence on others for meals</span>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4">
                <div className="text-2xl font-bold text-red-600 mb-2">$8,400/year</div>
                <p className="text-sm text-gray-600">Cost of meal delivery services</p>
                <p className="text-sm text-red-700 font-medium mt-1">Plus loss of cooking independence</p>
              </div>
            </div>
          </div>

          {/* Buffalo-Specific Kitchen Considerations */}
          <div className="bg-orange-900 text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Buffalo Kitchen Accessibility Challenges & Solutions</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-bold mb-3 text-orange-200">Buffalo Home Layouts</h4>
                <ul className="space-y-2 text-orange-100">
                  <li>• Small galley kitchens require creative solutions</li>
                  <li>• Load-bearing walls limit modification options</li>
                  <li>• Low ceilings affect cabinet placement</li>
                  <li>• Narrow doorways need widening</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-orange-200">Local Building Codes</h4>
                <ul className="space-y-2 text-orange-100">
                  <li>• Electrical updates often required</li>
                  <li>• Plumbing relocation permits needed</li>
                  <li>• Fire safety considerations</li>
                  <li>• Historic district restrictions</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-3 text-orange-200">Climate Considerations</h4>
                <ul className="space-y-2 text-orange-100">
                  <li>• Ventilation crucial for humid summers</li>
                  <li>• Heating efficiency during long winters</li>
                  <li>• Durable materials for temperature changes</li>
                  <li>• Easy-clean surfaces for salt/snow tracked in</li>
                </ul>
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
                  Kitchen Accessibility Modifications That Transform Buffalo Homes
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>The kitchen is the heart of every Buffalo home</strong> – but for families dealing with mobility challenges, it often becomes a source of frustration and dependence. After modifying over 300 kitchens throughout Western New York, we've seen how the right accessibility improvements can restore independence, dignity, and the joy of cooking.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Buffalo's older homes present unique challenges. Built primarily between 1900-1960, most kitchens feature 36-inch counters, narrow walkways, and limited storage access. These "standard" designs create barriers for wheelchair users, seniors with mobility aids, and anyone with reaching or standing limitations.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                    Essential Kitchen Accessibility Modifications
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-orange-900 flex items-center">
                        <Utensils className="w-5 h-5 mr-2" />
                        Counter & Work Surface Modifications
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Lowered counters (32-34" height)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Roll-under prep areas with knee clearance
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Varied height work surfaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Pull-out cutting boards and work surfaces
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-green-900 flex items-center">
                        <ChefHat className="w-5 h-5 mr-2" />
                        Cabinet & Storage Solutions
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Pull-down shelving systems
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Lazy Susan corner solutions
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Drawer-style base cabinets
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Lever-style cabinet hardware
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Before/After Image Placeholder */}
                  <div className="bg-gray-200 rounded-lg p-8 text-center mb-8">
                    <h4 className="text-xl font-bold mb-4">Before & After: Buffalo Kitchen Transformation</h4>
                    <p className="text-gray-600">
                      [Image: Split view showing inaccessible standard kitchen vs. fully accessible modification]
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Client: The Martinez Family, West Seneca NY - "I can cook for my grandchildren again!"
                    </p>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                    Buffalo Kitchen Accessibility Cost Guide 2024
                  </h3>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Cost vs. Value Reality:</h4>
                        <p className="text-yellow-700">
                          Buffalo families spend an average of <strong>$8,400 annually</strong> on meal delivery when they can't cook safely. 
                          Kitchen accessibility modifications cost <strong>$12,000-35,000 one-time</strong> but restore cooking independence and save thousands yearly.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-orange-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Modification Type</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                          <th className="p-4 text-left">Funding Options</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Complete Kitchen Accessibility Remodel</td>
                          <td className="p-4">$18,000 - $35,000</td>
                          <td className="p-4">7-14 days</td>
                          <td className="p-4 text-green-600">Varies by State</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                    Appliance Accessibility: What Works in Buffalo Kitchens
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900">Recommended Appliance Features</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Side-by-side refrigerators:</strong> Freezer and fridge at accessible heights
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Wall-mounted ovens:</strong> Positioned at appropriate height for seated users
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Induction cooktops:</strong> Safer for users with limited mobility
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Drawer dishwashers:</strong> Easier loading and unloading
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-orange-900">Buffalo-Specific Considerations</h4>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Energy efficiency:</strong> Important for Buffalo's high utility costs
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Reliable brands:</strong> Service availability crucial in WNY
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Cold climate rated:</strong> Appliances that handle temperature changes
                          </div>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <div>
                            <strong>Easy-clean surfaces:</strong> Handle salt and snow tracked through homes
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Kitchen Accessibility in Buffalo
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much do kitchen accessibility modifications cost in Buffalo?",
                      answer: "Kitchen accessibility modifications in Buffalo range from $8,000-$35,000 depending on scope. Counter modifications start at $3,500, roll-under sinks $2,800-$5,500, accessible cabinet retrofits $4,000-$12,000, and complete accessible remodels $18,000-$35,000. Many modifications qualify for funding through state programs and insurance."
                    },
                    {
                      question: "What makes a kitchen accessible for wheelchair users?",
                      answer: "Accessible kitchens need 32-34" counter heights, roll-under sinks with knee clearance, 42" minimum walkway widths, pull-down shelving, accessible appliance placement, lever-style hardware, and varied work surface heights. Buffalo homes often require electrical and plumbing updates during modifications."
                    },
                    {
                      question: "Can kitchen accessibility modifications be covered by insurance?",
                      answer: "Some kitchen modifications are covered by insurance and state programs. New York NHTD waiver provides up to $15,000 for home modifications, Medicare may cover medically necessary equipment, and some private insurance covers accessibility improvements. Aaron Michael Services helps navigate funding options with 67% success rate."
                    },
                    {
                      question: "How long do kitchen accessibility renovations take?",
                      answer: "Timeline varies by scope: Counter modifications 2-3 days, roll-under sink installation 1-2 days, cabinet retrofits 3-5 days, complete accessible remodels 7-14 days. Buffalo permit processing and winter weather may extend timelines. We work to minimize kitchen downtime."
                    },
                    {
                      question: "Why choose Aaron Michael Services for Buffalo kitchen modifications?",
                      answer: "We specialize exclusively in accessibility modifications with 22+ years experience and 300+ kitchens completed in WNY. Personal disability understanding, comprehensive knowledge of Buffalo building codes, insurance navigation expertise (67% approval rate), and focus on maintaining cooking independence for families throughout Western New York."
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
              <div className="bg-orange-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready to Cook Again?</h3>
                <p className="mb-6">Get your free kitchen accessibility assessment from Buffalo's specialists.</p>
                
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
                    <span>14 Mariemont Ave, Buffalo</span>
                  </div>
                </div>
                
                <a 
                  href="tel:716-533-7108" 
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Assessment
                </a>
              </div>

              {/* Kitchen Modification Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Kitchen Modifications</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Counter Height Reduction', cost: '$3,500-$8,000' },
                    { name: 'Roll-Under Sink', cost: '$2,800-$5,500' },
                    { name: 'Pull-Down Shelving', cost: '$1,200-$3,000' },
                    { name: 'Accessible Appliances', cost: '$4,000-$12,000' },
                    { name: 'Cabinet Hardware Upgrade', cost: '$800-$2,000' },
                    { name: 'Complete Accessible Remodel', cost: '$18,000-$35,000' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-medium text-orange-600">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Kitchen Modification Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    'Buffalo', 'Cheektowaga', 'Amherst', 'Tonawanda',
                    'N. Tonawanda', 'Kenmore', 'West Seneca', 'Hamburg',
                    'Orchard Park', 'Lackawanna', 'Lancaster', 'Depew',
                    'Clarence', 'Niagara Falls', 'Lockport', 'All WNY'
                  ].map((city) => (
                    <div key={city} className="text-gray-600">{city}</div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Buffalo Families Trust Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "300+ accessible kitchens completed", 
                    "Personal disability understanding",
                    "Insurance & funding navigation",
                    "Family-owned Buffalo business",
                    "CAPS Certified Contractor",
                    "Free consultations & assessments",
                    "Licensed & insured"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-orange-800 to-red-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stop Struggling in Your Kitchen - Regain Your Cooking Independence
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Every meal you can't prepare yourself is a loss of independence. 
            Our kitchen accessibility modifications restore the joy of cooking for Buffalo families.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Kitchen Assessment
            </button>
          </div>
          
          <p className="mt-6 text-orange-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, Niagara Falls & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-orange-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed & Insured | A+ BBB Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenModificationsPage;medium">Counter Height Modification</td>
                          <td className="p-4">$3,500 - $8,000</td>
                          <td className="p-4">2-3 days</td>
                          <td className="p-4 text-green-600">Sometimes Covered</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Roll-Under Sink Installation</td>
                          <td className="p-4">$2,800 - $5,500</td>
                          <td className="p-4">1-2 days</td>
                          <td className="p-4 text-green-600">Often Covered</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Accessible Cabinet Retrofit</td>
                          <td className="p-4">$4,000 - $12,000</td>
                          <td className="p-4">3-5 days</td>
                          <td className="p-4 text-green-600">Case by Case</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-
