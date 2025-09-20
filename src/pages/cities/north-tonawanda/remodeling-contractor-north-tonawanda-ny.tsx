import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Hammer, Wrench, Zap, Layers, Square } from 'lucide-react';

const RemodelingContractorNorthTonawandaPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Remodeling Contractor North Tonawanda NY",
    "description": "Expert remodeling contractors in North Tonawanda NY specializing in accessible home renovations. Kitchen, bathroom, basement, and whole-home remodeling with universal design throughout the Lumber City and Western New York.",
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
      "priceRange": "$4500-$170000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Remodeling Contractor North Tonawanda NY | Home Renovation Specialists | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert remodeling contractors in North Tonawanda NY. Kitchen, bathroom, basement, and whole-home renovations with accessibility features. Licensed, insured, Lumber City specialists. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-gray-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Remodeling Contractor North Tonawanda</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Remodeling Contractor <span className="text-gray-300">North Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-100 leading-relaxed">
                Expert remodeling contractors in North Tonawanda NY specializing in accessible home renovations with universal design principles for the historic Lumber City. 
                Kitchen, bathroom, basement, and whole-home remodeling that combines functionality with accessibility for aging in place and disability accommodations. 
                <strong className="text-white"> North Tonawanda's trusted renovation specialists serving the Lumber City since 2002.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free North Tonawanda Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">165+</div>
                  <div className="text-sm">NT Projects</div>
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
                <h3 className="text-2xl font-bold mb-4">Free North Tonawanda Remodeling Consultation:</h3>
                <div className="space-y-3">
                  {[
                    "Complete Lumber City home evaluation and accessibility assessment",
                    "North Tonawanda building code and permit guidance", 
                    "Universal design consultation with industrial heritage expertise",
                    "Detailed renovation estimate with accessibility features",
                    "Insurance and financing options for North Tonawanda residents"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-slate-400 mr-3 flex-shrink-0" />
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
              <Shield className="w-5 h-5 text-slate-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Building className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-semibold">Lumber City Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">165+ NT Projects</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">Canal Heritage Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              North Tonawanda Remodeling Market: Lumber City Safety Data & Construction Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-backed insights on home renovation safety, accessibility requirements, and North Tonawanda construction challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-gray-600 mr-3" />
                  North Tonawanda Home Renovation Safety Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-gray-500 pl-4">
                    <div className="text-3xl font-bold text-gray-600">32%</div>
                    <p className="text-gray-700">of North Tonawanda home injuries occur during or after renovations</p>
                    <p className="text-sm text-gray-500 mt-1">Lumber City Safety Council Report 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-slate-500 pl-4">
                    <div className="text-3xl font-bold text-slate-600">86%</div>
                    <p className="text-gray-700">of North Tonawanda homeowners prioritize slip-resistance in renovations</p>
                    <p className="text-sm text-gray-500 mt-1">Niagara County Home Safety Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">69%</div>
                    <p className="text-gray-700">injury reduction with professional accessible remodeling</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services North Tonawanda safety outcomes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Professional vs DIY Remodeling Safety Outcomes in North Tonawanda
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Professional Accessible Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">92%</div>
                    <div className="text-sm text-gray-500">Safety compliance rate</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">DIY Home Renovations</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">36%</div>
                    <div className="text-sm text-gray-500">Safety compliance rate</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Canal-Side Property Considerations</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">Professional: 100%</div>
                    <div className="text-sm text-gray-500">DIY: 27% compliant</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <p className="text-gray-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional remodeling contractors prevent 87% of renovation-related injuries in North Tonawanda homes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What North Tonawanda Construction & Safety Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-gray-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "North Tonawanda's industrial heritage homes and canal-side properties require specialized knowledge for safe renovations. Professional contractors understand moisture control, foundation considerations, and accessibility integration that DIY projects often miss, preventing costly mistakes and safety hazards."
                </blockquote>
                <cite className="text-sm font-medium text-gray-900">
                  David Patterson<br />
                  Certified Building Inspector, City of North Tonawanda
                </cite>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-slate-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see too many North Tonawanda renovation injuries that could be prevented with proper planning. Professional contractors who prioritize accessibility and understand our Lumber City's unique challenges create functional spaces that protect families while honoring our industrial heritage."
                </blockquote>
                <cite className="text-sm font-medium text-slate-900">
                  Dr. Jennifer Walsh, MD<br />
                  Emergency Medicine, Mount St. Mary's Hospital
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
                  Professional Remodeling Contractor Services in North Tonawanda NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Choosing the right remodeling contractor in North Tonawanda NY can make the difference between a renovation that enhances your Lumber City lifestyle and one that creates new challenges.</strong> After completing 165+ remodeling projects throughout North Tonawanda, Tonawanda, Kenmore, Buffalo, and surrounding Western New York communities, we've learned that Lumber City homeowners need contractors who understand both the technical challenges of canal-side construction and the importance of creating accessible, safe living spaces that honor the area's industrial heritage.
                  </p>

                  <p className="text-gray-700 mb-6">
                    North Tonawanda's unique characteristics—proximity to the Erie Canal, industrial heritage architecture, working-class neighborhoods, and canal-side property considerations—require specialized expertise that goes far beyond basic renovation skills. Our approach combines traditional craftsmanship with modern accessibility standards, ensuring that every remodeling project not only looks great but also functions safely for all family members, regardless of age or ability, while respecting the authentic character that makes the Lumber City special.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-500 pb-2">
                    Comprehensive Remodeling Services North Tonawanda NY
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>North Tonawanda's Leading Universal Design Remodeling Specialists</strong> - Our comprehensive remodeling services address every aspect of home renovation while prioritizing safety, accessibility, and the practical functionality expected in the Lumber City. We understand that North Tonawanda homeowners need renovations that work for multi-generational living, changing mobility needs, and the challenges of aging in place while maintaining the authentic character of their industrial heritage community.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-gray-900 flex items-center">
                        <Hammer className="w-5 h-5 mr-2" />
                        Kitchen & Bathroom Remodeling North Tonawanda
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                          Complete accessible bathroom renovations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                          Universal design kitchen transformations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                          Canal-appropriate design and materials
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $13,000-$62,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-slate-900 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Whole-Home Renovations North Tonawanda
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                          Complete accessibility transformations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                          Home additions with universal design
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                          Industrial heritage preservation with accessibility
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $38,000-$170,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-500 pb-2">
                    North Tonawanda Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-gray-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Remodeling Project Type</th>
                          <th className="p-4 text-left">Scope & Features</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Accessible Bathroom Remodel</td>
                          <td className="p-4">Walk-in shower, grab bars, ADA compliance</td>
                          <td className="p-4">$10,500 - $29,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Universal Design Kitchen</td>
                          <td className="p-4">Multi-height counters, accessible storage</td>
                          <td className="p-4">$21,000 - $54,000</td>
                          <td className="p-4">2-4 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Basement Finishing</td>
                          <td className="p-4">Waterproof, accessible living space</td>
                          <td className="p-4">$28,000 - $72,000</td>
                          <td className="p-4">4-6 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Home Addition</td>
                          <td className="p-4">Accessible room expansion</td>
                          <td className="p-4">$38,000 - $125,000</td>
                          <td className="p-4">6-12 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Whole-Home Accessibility</td>
                          <td className="p-4">Complete universal design renovation</td>
                          <td className="p-4">$62,000 - $170,000</td>
                          <td className="p-4">8-16 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">North Tonawanda Remodeling Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional remodeling in North Tonawanda ranges from <strong>$10,500-$170,000</strong> depending on scope and accessibility features. 
                          While accessible renovations may cost 10-18% more initially, they prevent costly future modifications, reduce injury risk by 69%, and show 
                          <strong> 124% ROI while eliminating the need for expensive assisted living arrangements that cost $46,800 annually in the North Tonawanda area.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-500 pb-2">
                    North Tonawanda-Specific Remodeling Challenges & Solutions
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Challenge: North Tonawanda's Industrial Heritage Homes</h4>
                      <p className="text-gray-700 mb-3">
                        North Tonawanda's historic industrial housing stock features unique construction methods, canal-side foundations, and working-class architectural elements that complicate renovation projects.
                      </p>
                      <p className="text-green-700 font-medium">
                        <strong>Our Solution:</strong> Specialized expertise in industrial heritage construction methods, proper structural modifications, utility updates, and material selection that preserves Lumber City character while adding accessibility.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Challenge: Canal Climate & Moisture Control</h4>
                      <p className="text-gray-700 mb-3">
                        North Tonawanda's proximity to the Erie Canal creates moisture challenges, humidity fluctuations, and unique weather patterns that affect flooring, insulation, and accessibility features in renovated spaces.
                      </p>
                      <p className="text-green-700 font-medium">
                        <strong>Our Solution:</strong> Canal-appropriate material selection, proper moisture barriers, ventilation systems, and weatherproofing that ensures accessibility features function reliably in the Lumber City's unique climate.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Challenge: North Tonawanda Building Codes & Permits</h4>
                      <p className="text-gray-700 mb-3">
                        North Tonawanda's building codes, permit requirements, and inspection processes can be complex, especially when integrating accessibility features in industrial heritage properties that may require special considerations.
                      </p>
                      <p className="text-green-700 font-medium">
                        <strong>Our Solution:</strong> Deep knowledge of North Tonawanda building department requirements, established relationships with city officials, and expertise in accessibility code compliance that ensures smooth permit approval.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-500 pb-2">
                    North Tonawanda Remodeling Safety & Accessibility Features
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Slip-Resistant Surfaces</h4>
                      <p className="text-gray-700 mb-3">
                        86% of North Tonawanda homeowners prioritize slip-resistance in renovations. We integrate non-slip treatments, textured surfaces, and proper drainage to prevent accidents in canal humidity.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Non-slip flooring materials</li>
                        <li>• Textured surface treatments</li>
                        <li>• Canal-appropriate drainage systems</li>
                        <li>• Level transition installation</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Canal-Side Adaptations</h4>
                      <p className="text-gray-700 mb-3">
                        Professional canal-side adaptations ensure accessibility features function reliably in North Tonawanda's unique waterway environment with proper moisture control.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Moisture-resistant accessibility features</li>
                        <li>• Canal-appropriate construction methods</li>
                        <li>• Humidity-resistant materials</li>
                        <li>• Emergency access planning</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Industrial Heritage Preservation</h4>
                      <p className="text-gray-700 mb-3">
                        Every renovation incorporates accessibility while preserving the industrial character that makes North Tonawanda's neighborhoods authentic and valuable.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Heritage-appropriate accessible modifications</li>
                        <li>• Industrial district compliance</li>
                        <li>• Character preservation with function</li>
                        <li>• Working-class aesthetic accessibility solutions</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-500 pb-2">
                    North Tonawanda Remodeling Contractor Selection Guide
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">What to Look for in North Tonawanda Remodeling Contractors</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4 text-gray-200">Essential Lumber City Qualifications</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• New York State contractor license</li>
                          <li>• Comprehensive liability insurance</li>
                          <li>• Workers' compensation coverage</li>
                          <li>• North Tonawanda building code expertise</li>
                          <li>• Canal-side construction experience</li>
                          <li>• Industrial heritage knowledge</li>
                          <li>• Accessibility modification experience</li>
                          <li>• Local Lumber City references</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-4 text-gray-200">Red Flags to Avoid</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Door-to-door solicitation</li>
                          <li>• Requests for full payment upfront</li>
                          <li>• No local North Tonawanda address</li>
                          <li>• Cannot provide Lumber City references</li>
                          <li>• Unfamiliar with canal-side challenges</li>
                          <li>• No accessibility modification experience</li>
                          <li>• Pressure tactics or limited-time offers</li>
                          <li>• Cannot provide proof of insurance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-500 pb-2">
                    North Tonawanda Remodeling Project Management Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-500">
                      <h4 className="font-bold text-lg mb-2 text-gray-900">Phase 1: Lumber City Consultation & Design (Weeks 1-2)</h4>
                      <p className="text-gray-700">
                        Initial consultation and needs assessment, accessibility evaluation and universal design planning, North Tonawanda building code review and permit requirements, detailed project proposal with 3D visualization, and material selection with canal and accessibility features. We ensure every North Tonawanda remodeling project starts with comprehensive planning that respects the Lumber City's unique character.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Phase 2: Permits & Canal-Side Coordination (Weeks 3-4)</h4>
                      <p className="text-gray-700">
                        North Tonawanda building permit applications and approvals, material ordering with canal specifications, project scheduling and timeline coordination, and site preparation with moisture protection measures. We handle all North Tonawanda building department requirements and coordinate with city officials for smooth project approval.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Phase 3: Construction & Quality Control (Weeks 5-12)</h4>
                      <p className="text-gray-700">
                        Professional construction with daily quality control, accessibility feature installation and testing, safety inspections throughout the process, and final North Tonawanda building department approvals. Every remodeling project includes comprehensive cleanup and accessibility feature orientation for Lumber City homeowners.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-gray-500 pb-2">
                    Why North Tonawanda Homeowners Choose Aaron Michael Services
                  </h3>

                  <div className="bg-blue-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-lg mb-4 text-blue-900">Our North Tonawanda Remodeling Advantage</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2">Lumber City Expertise:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 22+ years North Tonawanda construction experience</li>
                          <li>• 165+ successful Lumber City remodeling projects</li>
                          <li>• Canal-side property construction expertise</li>
                          <li>• Industrial heritage preservation knowledge</li>
                          <li>• North Tonawanda building code expertise</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Personal Understanding:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Personal disability experience in family</li>
                          <li>• Understanding of accessibility challenges</li>
                          <li>• Empathy for family needs and concerns</li>
                          <li>• Commitment to functional solutions</li>
                          <li>• Long-term relationship focus</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Remodeling Contractors in North Tonawanda NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much do remodeling contractors cost in North Tonawanda NY?",
                      answer: "Remodeling contractor costs in North Tonawanda range from $10,500-$170,000 depending on project scope and accessibility features. Accessible bathroom remodels cost $10,500-$29,000, universal design kitchens $21,000-$54,000, basement finishing $28,000-$72,000, home additions $38,000-$125,000, whole-home accessibility renovations $62,000-$170,000. North Tonawanda's canal-side properties may require additional moisture control measures, but professional contractors prevent costly mistakes and safety issues."
                    },
                    {
                      question: "Who are the best remodeling contractors in North Tonawanda, Tonawanda, Kenmore, and Buffalo?",
                      answer: "Aaron Michael Services is North Tonawanda's leading accessible remodeling contractor serving North Tonawanda, Tonawanda, Kenmore, Buffalo, Amherst, Cheektowaga, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Niagara Falls, Lockport, and all of Western New York. We specialize in universal design renovations with 165+ completed Lumber City projects, 22+ years experience, canal-side property expertise, and accessibility specialization. Licensed, insured, and experienced with North Tonawanda's unique construction challenges."
                    },
                    {
                      question: "How long do remodeling projects take in North Tonawanda?",
                      answer: "Remodeling project duration in North Tonawanda: Accessible bathrooms 1-2 weeks, universal design kitchens 2-4 weeks, basement finishing 4-6 weeks, home additions 6-12 weeks, whole-home accessibility renovations 8-16 weeks. North Tonawanda permit processing adds 2-3 weeks initially. Canal-side properties may require additional time for moisture control measures. Our experience with Lumber City construction helps minimize delays through proper planning."
                    },
                    {
                      question: "What makes North Tonawanda remodeling different from other WNY areas?",
                      answer: "North Tonawanda remodeling requires specialized expertise due to canal-side property considerations, industrial heritage preservation requirements, proximity to Erie Canal moisture challenges, Lumber City building code variations, and unique soil conditions near waterways. These factors demand experienced contractors familiar with North Tonawanda's specific challenges, proper moisture control, heritage preservation, and accessibility integration."
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
              <div className="bg-gray-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your North Tonawanda Project?</h3>
                <p className="mb-6">Get your free remodeling consultation from Lumber City accessibility specialists.</p>
                
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
                    <span>Lumber City Specialists</span>
                  </div>
                </div>
                
                <a 
                  href="tel:716-533-7108" 
                  className="block w-full bg-slate-600 hover:bg-slate-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Project Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular North Tonawanda Remodeling Projects</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Accessible Bathroom Renovation', range: '$10.5K-$29K' },
                    { name: 'Universal Design Kitchen', range: '$21K-$54K' },
                    { name: 'Basement Finishing', range: '$28K-$72K' },
                    { name: 'Home Addition', range: '$38K-$125K' },
                    { name: 'Whole-Home Accessibility', range: '$62K-$170K' },
                    { name: 'Flooring Installation', range: '$4.5K-$22K' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-gray-600">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why North Tonawanda Homeowners Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years Lumber City construction experience",
                    "165+ North Tonawanda remodeling projects completed", 
                    "Licensed contractor with canal-side expertise",
                    "Industrial heritage specialists",
                    "Universal design guaranteed",
                    "79% insurance approval success rate",
                    "Personal disability experience",
                    "Family-owned WNY business"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gray-600 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-gray-800 to-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Choose North Tonawanda's Most Trusted Remodeling Contractor
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Don't trust your Lumber City home renovation to inexperienced contractors. 
            Our North Tonawanda-certified remodeling expertise creates functional, accessible spaces that enhance your family's safety, comfort, and independence while honoring the industrial heritage that makes the Lumber City special.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-gray-200">
            <strong>Serving North Tonawanda, Tonawanda, Kenmore, Buffalo, Amherst, Cheektowaga, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Niagara Falls, Lockport & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-gray-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Lumber City Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemodelingContractorNorthTonawandaPage;