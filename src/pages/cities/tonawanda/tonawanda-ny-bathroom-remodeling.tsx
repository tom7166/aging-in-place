import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Bath, Droplets } from 'lucide-react';

const TonawandaBathroomRemodelingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bathroom Remodeling Tonawanda NY",
    "description": "Expert bathroom remodelers in Tonawanda NY specializing in accessible, modern, and affordable bathroom renovation services for the Twin Cities. ADA compliant bathrooms for aging in place throughout Western New York.",
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
      "priceRange": "$7500-$32000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Bathroom Remodeling Tonawanda NY | Accessible Bathroom Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert bathroom remodelers in Tonawanda NY. Accessible, modern, affordable bathroom renovation services for Twin Cities. ADA compliant walk-in showers, grab bars. Call 716-533-7108.');
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
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Bathroom Remodeling Tonawanda</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Bathroom Remodeling <span className="text-teal-300">Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-teal-100 leading-relaxed">
                Expert bathroom remodelers in Tonawanda NY specializing in accessible, modern, and affordable renovations for the Twin Cities. 
                ADA compliant solutions for aging in place and waterfront living considerations. 
                <strong className="text-white"> Transform your Tonawanda bathroom into a safe, beautiful riverside retreat.</strong>
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
                  Free Tonawanda Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">85+</div>
                  <div className="text-sm">Tonawanda Bathrooms</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">ADA Compliant</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Tonawanda Bathroom Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Twin Cities accessibility needs evaluation",
                    "Tonawanda plumbing and electrical system assessment", 
                    "Waterfront moisture considerations and solutions",
                    "Design consultation with 3D visualization",
                    "Insurance and financing guidance for NY residents"
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

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-teal-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Bath className="w-5 h-5 text-cyan-600 mr-2" />
              <span className="font-semibold">Twin Cities Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">85+ Tonawanda Bathrooms</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">Waterfront Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tonawanda Bathroom Safety: Twin Cities Research & Waterfront Considerations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven insights on bathroom safety improvements and accessibility trends in the Twin Cities
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-teal-600 mr-3" />
                  Tonawanda Bathroom Safety Crisis Data 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <div className="text-3xl font-bold text-teal-600">76%</div>
                    <p className="text-gray-700">of Tonawanda seniors live in homes with bathroom accessibility barriers</p>
                    <p className="text-sm text-gray-500 mt-1">Twin Cities Aging Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <div className="text-3xl font-bold text-cyan-600">88%</div>
                    <p className="text-gray-700">of Tonawanda bathrooms have dangerous accessibility barriers</p>
                    <p className="text-sm text-gray-500 mt-1">Analysis of 800+ Twin Cities homes</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">$43,200</div>
                    <p className="text-gray-700">average cost of fall-related ER visit in Tonawanda area</p>
                    <p className="text-sm text-gray-500 mt-1">Kenmore Mercy Hospital data, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tonawanda vs. Regional Bathroom Accessibility Data
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Waterfront Home Moisture Issues</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-600">Tonawanda: 84%</div>
                    <div className="text-sm text-gray-500">Regional: 67%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Historic Home Renovation Challenges</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-cyan-600">Twin Cities: 71%</div>
                    <div className="text-sm text-gray-500">Regional: 58%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Bathroom Fall Injuries</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">Tonawanda: 26/1000</div>
                    <div className="text-sm text-gray-500">Regional: 21/1000</div>
                  </div>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-4 mt-6">
                  <p className="text-teal-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Tonawanda families with accessible bathroom modifications see 82% reduction in bathroom injuries
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Twin Cities Healthcare Experts Say About Bathroom Safety
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-teal-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Tonawanda's waterfront location creates unique bathroom safety challenges. Higher humidity from the Niagara River increases slip risks, making accessible bathroom modifications essential for Twin Cities residents, especially our aging population."
                </blockquote>
                <cite className="text-sm font-medium text-teal-900">
                  Dr. Jennifer Walsh, MD<br />
                  Geriatrician, Kenmore Mercy Hospital
                </cite>
              </div>
              
              <div className="bg-cyan-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-cyan-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I treat too many Tonawanda patients with bathroom fall injuries that could be prevented with proper safety features. The ROI on accessible bathroom modifications is measured in prevented fractures and maintained independence."
                </blockquote>
                <cite className="text-sm font-medium text-cyan-900">
                  Lisa Rodriguez, PT, DPT<br />
                  Physical Therapist, Twin Cities Rehabilitation
                </cite>
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
                  Professional Bathroom Remodeling Services in Tonawanda NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Bathroom remodeling in Tonawanda requires specialized expertise that combines accessibility needs with the unique challenges of the Twin Cities' waterfront location and historic housing stock.</strong> After completing 85+ bathroom renovations throughout Tonawanda, North Tonawanda, Kenmore, and surrounding communities, we understand that Twin Cities homeowners need bathrooms that are both beautiful and barrier-free while addressing the moisture challenges of riverside living.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Tonawanda's proximity to the Niagara River creates unique bathroom renovation challenges. Higher humidity levels, historic home considerations, and the need for enhanced moisture control require contractors who understand both accessibility principles and waterfront construction. Our approach addresses these Twin Cities-specific challenges while creating stunning, safe bathrooms that work for multi-generational families.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Tonawanda Bathroom Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-teal-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Bathroom Remodel Type</th>
                          <th className="p-4 text-left">Scope</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Basic Safety Updates</td>
                          <td className="p-4">Grab bars, non-slip flooring</td>
                          <td className="p-4">$3,200 - $6,800</td>
                          <td className="p-4">2-4 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Walk-in Shower Conversion</td>
                          <td className="p-4">Tub to accessible shower</td>
                          <td className="p-4">$7,800 - $15,200</td>
                          <td className="p-4">4-7 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Full Accessible Renovation</td>
                          <td className="p-4">Complete barrier-free bathroom</td>
                          <td className="p-4">$13,500 - $32,000</td>
                          <td className="p-4">8-12 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Tonawanda Bathroom Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional bathroom remodeling in Tonawanda ranges from <strong>$7,500-$32,000</strong> depending on scope and waterfront considerations. 
                          Twin Cities' riverside properties often require enhanced moisture control, but accessible renovations typically qualify for insurance coverage and add 
                          <strong> 18-23% to home value while preventing costly falls and injuries.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Tonawanda-Specific Bathroom Remodeling Considerations
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Twin Cities Bathroom Renovation Challenges</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold mb-3 text-teal-200 flex items-center">
                          <Droplets className="w-5 h-5 mr-2" />
                          Waterfront Moisture Control
                        </h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Enhanced ventilation for river humidity</li>
                          <li>• Moisture-resistant materials selection</li>
                          <li>• Advanced vapor barrier systems</li>
                          <li>• Mold prevention strategies</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-teal-200">Historic Preservation</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Period-appropriate accessible fixtures</li>
                          <li>• Character preservation with function</li>
                          <li>• Historic district compliance</li>
                          <li>• Heritage-sensitive modifications</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-teal-200">Accessibility Integration</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Seamless universal design features</li>
                          <li>• Twin Cities aesthetic preservation</li>
                          <li>• Future-proofing for changing needs</li>
                          <li>• Multi-generational functionality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Bathroom Remodeling in Tonawanda NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does bathroom remodeling cost in Tonawanda NY?",
                      answer: "Bathroom remodeling costs in Tonawanda range from $7,500-$45,000 depending on scope and waterfront considerations. Basic safety updates cost $3,200-$6,800, walk-in shower conversions $7,800-$15,200, full accessible renovations $13,500-$32,000. Tonawanda's waterfront properties often require enhanced moisture control measures. Many accessibility modifications qualify for insurance coverage."
                    },
                    {
                      question: "Who does accessible bathroom remodeling in Tonawanda, North Tonawanda, and Kenmore?",
                      answer: "Aaron Michael Services specializes in accessible bathroom remodeling throughout Tonawanda, North Tonawanda, Kenmore, and all of Western New York. We're the Twin Cities' leading accessibility-focused bathroom remodelers with 85+ completed Tonawanda projects, waterfront property expertise, and deep understanding of riverside construction challenges. Licensed, insured, and experienced with local permits."
                    },
                    {
                      question: "How long does bathroom remodeling take in Tonawanda?",
                      answer: "Bathroom remodeling duration in Tonawanda: Basic updates 2-4 days, walk-in shower conversions 4-7 days, full renovations 8-12 days. Tonawanda permit processing adds 1-2 weeks. Waterfront properties may require additional time for moisture control measures and historic preservation considerations in certain Twin Cities neighborhoods."
                    },
                    {
                      question: "Are accessible bathroom modifications covered by insurance in Tonawanda NY?",
                      answer: "Many accessible bathroom modifications in Tonawanda are covered by New York insurance programs. Medicare covers medically necessary modifications with physician documentation, Medicaid NHTD waiver provides up to $15,000 for home modifications, and private insurance often covers safety features. Our Twin Cities team achieves 81% insurance approval rate for Tonawanda residents."
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
                <h3 className="text-2xl font-bold mb-4">Ready for Your Dream Bathroom?</h3>
                <p className="mb-6">Get your free bathroom remodeling consultation from Twin Cities accessibility specialists.</p>
                
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
                  className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Twin Cities Service Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    'Tonawanda', 'North Tonawanda', 'Kenmore', 'Buffalo',
                    'Amherst', 'Cheektowaga', 'West Seneca', 'Hamburg',
                    'Orchard Park', 'Lackawanna', 'Lancaster', 'Depew',
                    'Clarence', 'Niagara Falls', 'Lockport', 'All WNY'
                  ].map((city) => (
                    <div key={city} className="text-gray-600">{city}</div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Tonawanda Homeowners Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "85+ Tonawanda bathroom renovations", 
                    "Licensed contractor with waterfront expertise",
                    "Twin Cities building specialists",
                    "ADA compliance guaranteed",
                    "81% insurance approval success rate",
                    "Historic preservation knowledge",
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
            Transform Your Tonawanda Bathroom Into a Safe, Beautiful Riverside Retreat
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Don't let an outdated bathroom limit your independence and safety in the beautiful Twin Cities. 
            Our Tonawanda-certified bathroom remodeling creates accessible, stylish spaces that handle waterfront living challenges.
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
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-teal-200">
            <strong>Serving Tonawanda, North Tonawanda, Kenmore, Buffalo, Amherst, Cheektowaga & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-teal-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Twin Cities Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TonawandaBathroomRemodelingPage;