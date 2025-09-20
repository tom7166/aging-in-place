import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Droplets, AlertTriangle, Eye } from 'lucide-react';

const TonawandaBasementFinishingEgressPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Basement Finishing & Egress Tonawanda NY",
    "description": "Professional basement finishing with egress windows in Tonawanda NY. Waterproofing, insulation for WNY climate, egress window rules compliance. Expert basement renovations for Twin Cities.",
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
      "priceRange": "$28000-$85000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Basement Finishing & Egress — Tonawanda, NY | Waterproofing & Egress Windows | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional basement finishing Tonawanda NY with egress windows. Waterproofing, insulation for WNY climate, code compliance. Twin Cities specialists. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-slate-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Tonawanda Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Basement Finishing & Egress</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Basement Finishing & Egress <span className="text-blue-300">Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-slate-100 leading-relaxed">
                Professional basement finishing with egress windows in Tonawanda NY. Waterproofing, insulation for WNY climate, and egress window rules compliance. 
                <strong className="text-white"> Expert basement renovations for Twin Cities waterfront properties.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Tonawanda Basement Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">45+</div>
                  <div className="text-sm">Tonawanda Basements</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Code Compliant</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Tonawanda Basement Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Egress window requirements evaluation",
                    "Waterproofing needs for Twin Cities climate", 
                    "Insulation planning for WNY conditions",
                    "Timeline and permit coordination",
                    "Cost breakdown with financing options"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
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
                  Professional Basement Finishing & Egress Tonawanda NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Basement finishing in Tonawanda NY requires specialized expertise that addresses the Twin Cities' unique waterfront challenges while ensuring proper egress window compliance for safety.</strong> After completing 45+ basement renovations throughout Tonawanda and North Tonawanda, we understand that Twin Cities basements face moisture pressures from the Niagara River and Erie Canal that demand professional waterproofing and climate-appropriate construction methods.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Egress Window Rules for Tonawanda Basement Finishing
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Tonawanda Building Code Requirements</strong> - All finished basements used as living space in Tonawanda must have proper egress windows for emergency exit. Egress windows must have minimum 5.7 square feet of opening, minimum 20-inch width, minimum 24-inch height, and maximum 44-inch sill height from floor. We handle all Tonawanda permit applications and coordinate with building inspectors to ensure compliance.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center">
                        <Eye className="w-5 h-5 mr-2" />
                        Egress Window Installation
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Professional excavation and window wells
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Waterproof window well systems
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Drainage and gravel installation
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Cost: $3,500-$6,500 per window
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-slate-900 flex items-center">
                        <Droplets className="w-5 h-5 mr-2" />
                        Waterproofing for Twin Cities
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Advanced moisture barrier systems
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Sump pump and drainage integration
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Humidity control systems
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Cost: $8,500-$15,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Insulation for WNY Climate & Common Issues
                  </h3>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Common Tonawanda Basement Issues We Prevent:</h4>
                        <ul className="text-yellow-700 space-y-1">
                          <li>• <strong>Moisture infiltration</strong> from Niagara River proximity</li>
                          <li>• <strong>Inadequate insulation</strong> leading to condensation and mold</li>
                          <li>• <strong>Poor ventilation</strong> causing humidity problems</li>
                          <li>• <strong>Improper egress windows</strong> failing safety inspections</li>
                          <li>• <strong>Foundation settling</strong> from waterfront soil conditions</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Project Component</th>
                          <th className="p-4 text-left">Tonawanda Requirements</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Egress Window Installation</td>
                          <td className="p-4">5.7 sq ft minimum opening</td>
                          <td className="p-4">$3,500 - $6,500</td>
                          <td className="p-4">2-3 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Waterproofing System</td>
                          <td className="p-4">Advanced moisture barriers</td>
                          <td className="p-4">$8,500 - $15,000</td>
                          <td className="p-4">3-5 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Insulation & Framing</td>
                          <td className="p-4">R-15 minimum for WNY</td>
                          <td className="p-4">$6,500 - $12,000</td>
                          <td className="p-4">4-6 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Complete Finishing</td>
                          <td className="p-4">All systems integrated</td>
                          <td className="p-4">$28,000 - $85,000</td>
                          <td className="p-4">4-8 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Tonawanda Basement Finishing Timeline & Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Week 1-2: Assessment & Permits</h4>
                      <p className="text-gray-700">
                        Comprehensive moisture testing, egress window planning, Tonawanda building permit applications, and structural evaluation. We assess waterfront-specific challenges and coordinate with Twin Cities building departments for smooth approval.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Week 3-4: Waterproofing & Egress</h4>
                      <p className="text-gray-700">
                        Professional waterproofing installation, egress window excavation and installation, drainage system setup, and moisture barrier application. Critical phase for Tonawanda's waterfront moisture challenges.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Week 5-8: Finishing & Systems</h4>
                      <p className="text-gray-700">
                        Insulation installation rated for WNY climate, electrical and HVAC integration, framing and drywall, flooring installation, and final Tonawanda building inspections. Complete basement transformation with accessibility features.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Basement Finishing & Egress in Tonawanda NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "What are the egress window requirements for Tonawanda basement finishing?",
                      answer: "Tonawanda egress window requirements follow New York State building codes: minimum 5.7 square feet of opening area, minimum 20-inch width, minimum 24-inch height, maximum 44-inch sill height from floor, and direct access to grade or approved window well. Egress windows are required for any basement bedroom or living space. We handle all Tonawanda permit applications and ensure compliance with Twin Cities building departments."
                    },
                    {
                      question: "How do you handle waterproofing for Tonawanda's waterfront location?",
                      answer: "Tonawanda's proximity to the Niagara River and Erie Canal creates unique moisture challenges requiring advanced waterproofing systems. We install comprehensive moisture barriers, interior and exterior drainage systems, sump pumps with battery backup, humidity control systems, and mold-resistant materials. Our waterproofing approach addresses both groundwater infiltration and humidity from the Twin Cities' waterfront location."
                    },
                    {
                      question: "What insulation is best for WNY basement finishing?",
                      answer: "Western New York basement finishing requires R-15 minimum insulation with proper vapor barriers to handle extreme temperature fluctuations. We use closed-cell spray foam for superior moisture resistance, rigid foam boards for consistent R-value, and proper air sealing to prevent condensation. Tonawanda's waterfront humidity requires special attention to vapor barriers and ventilation systems to prevent mold and moisture problems."
                    },
                    {
                      question: "How long does basement finishing take in Tonawanda?",
                      answer: "Tonawanda basement finishing typically takes 4-8 weeks depending on size and complexity. Timeline includes 1-2 weeks for permits and planning, 1-2 weeks for waterproofing and egress windows, 2-4 weeks for finishing work. Twin Cities permit processing and waterfront considerations may extend timelines. Winter weather can affect excavation for egress windows, so we recommend starting projects in spring or fall."
                    },
                    {
                      question: "What are common issues with Tonawanda basement finishing?",
                      answer: "Common Tonawanda basement issues include moisture infiltration from waterfront location, inadequate drainage leading to flooding, poor insulation causing condensation, improper egress window installation failing inspections, and foundation settling from canal-area soil conditions. Professional contractors prevent these issues through proper waterproofing, drainage systems, climate-appropriate insulation, and code-compliant egress window installation."
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
              <div className="bg-slate-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready to Finish Your Basement?</h3>
                <p className="mb-6">Get your free basement finishing consultation from Tonawanda's waterproofing specialists.</p>
                
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
                    <span>Serving Twin Cities</span>
                  </div>
                </div>
                
                <a 
                  href="tel:716-533-7108" 
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Assessment
                </a>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Tonawanda Services</h3>
                <div className="space-y-3">
                  <Link to="/buffalo-ny-basement-finishing" className="block p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                    <h4 className="font-semibold text-slate-900">Basement Finishing Buffalo</h4>
                    <p className="text-sm text-slate-700">Complete basement renovation services</p>
                  </Link>
                  <Link to="/accessible-remodeling-buffalo-ny" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-blue-900">Accessible Remodeling</h4>
                    <p className="text-sm text-blue-700">Complete home accessibility solutions</p>
                  </Link>
                  <Link to="/services/home-additions" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <h4 className="font-semibold text-green-900">Home Additions</h4>
                    <p className="text-sm text-green-700">Room additions and expansions</p>
                  </Link>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Tonawanda Families Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years Twin Cities construction experience",
                    "45+ Tonawanda basement renovations", 
                    "Licensed contractor with waterproofing expertise",
                    "Waterfront property specialists",
                    "100% egress window code compliance",
                    "Advanced moisture control systems",
                    "Family-owned Buffalo business",
                    "Licensed & insured"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-slate-800 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Tonawanda Basement Into Safe, Dry Living Space
          </h2>
          <p className="text-xl mb-8 text-slate-100">
            Don't let moisture and code issues prevent you from using your basement. 
            Our Tonawanda specialists create beautiful, code-compliant basements that withstand Twin Cities waterfront conditions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-slate-200">
            <strong>Serving Tonawanda, North Tonawanda, Kenmore, Buffalo, Amherst & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-slate-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Twin Cities Waterproofing Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TonawandaBasementFinishingEgressPage;