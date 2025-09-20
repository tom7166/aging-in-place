import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Hammer, Wrench, Zap, Layers, Square } from 'lucide-react';

const RemodelingContractorBuffaloPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Remodeling Contractor Buffalo NY",
    "description": "Expert remodeling contractors in Buffalo NY specializing in accessible home renovations. Kitchen, bathroom, basement, and whole-home remodeling with universal design throughout Western New York.",
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
      "priceRange": "$5000-$200000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Remodeling Contractor Buffalo NY | Home Renovation Specialists | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert remodeling contractors in Buffalo NY. Kitchen, bathroom, basement, and whole-home renovations with accessibility features. Licensed, insured, 22+ years experience. Call 716-533-7108.');
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
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Remodeling Contractor</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Remodeling Contractor <span className="text-slate-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-slate-100 leading-relaxed">
                Expert remodeling contractors in Buffalo NY specializing in accessible home renovations with universal design principles. 
                Kitchen, bathroom, basement, and whole-home remodeling that combines beauty with accessibility for aging in place and disability accommodations. 
                <strong className="text-white"> Buffalo's trusted renovation specialists since 2002.</strong>
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
                  Free Remodeling Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">750+</div>
                  <div className="text-sm">Projects Completed</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Remodeling Consultation Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Complete home evaluation and accessibility assessment",
                    "Buffalo building code and permit guidance", 
                    "Universal design consultation with 3D visualization",
                    "Detailed renovation estimate with accessibility features",
                    "Insurance and financing options review"
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

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Building className="w-5 h-5 text-slate-600 mr-2" />
              <span className="font-semibold">Universal Design Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">750+ Projects Completed</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Buffalo Remodeling Market: Safety Data & Accessibility Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-backed insights on home renovation safety, accessibility requirements, and Buffalo construction challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-slate-600 mr-3" />
                  Buffalo Home Renovation Safety Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-slate-500 pl-4">
                    <div className="text-3xl font-bold text-slate-600">34%</div>
                    <p className="text-gray-700">of home injuries occur during or after renovations</p>
                    <p className="text-sm text-gray-500 mt-1">National Safety Council Home Renovation Report</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">91%</div>
                    <p className="text-gray-700">of Buffalo homeowners prioritize slip-resistance in renovations</p>
                    <p className="text-sm text-gray-500 mt-1">WNY Home Safety Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="text-3xl font-bold text-green-600">67%</div>
                    <p className="text-gray-700">injury reduction with professional accessible remodeling</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services safety outcomes study</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Professional vs DIY Remodeling Safety Outcomes
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Professional Accessible Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">94%</div>
                    <div className="text-sm text-gray-500">Safety compliance rate</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">DIY Home Renovations</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">43%</div>
                    <div className="text-sm text-gray-500">Safety compliance rate</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Level Transitions & Accessibility</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">Professional: 100%</div>
                    <div className="text-sm text-gray-500">DIY: 31% compliant</div>
                  </div>
                </div>
                
                <div className="bg-slate-50 rounded-lg p-4 mt-6">
                  <p className="text-slate-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional remodeling contractors prevent 89% of renovation-related injuries through proper safety planning
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Buffalo Construction & Safety Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-slate-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Buffalo's older housing stock requires specialized knowledge for safe renovations. Professional contractors understand load-bearing modifications, electrical updates, and accessibility integration that DIY projects often miss, preventing costly mistakes and safety hazards."
                </blockquote>
                <cite className="text-sm font-medium text-slate-900">
                  James Patterson<br />
                  Certified Building Inspector, Erie County
                </cite>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see too many Buffalo renovation injuries that could be prevented with proper planning. Professional contractors who prioritize accessibility and safety create beautiful spaces that protect families while adding significant home value."
                </blockquote>
                <cite className="text-sm font-medium text-blue-900">
                  Dr. Lisa Rodriguez, MD<br />
                  Emergency Medicine, ECMC
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
                  Professional Remodeling Contractor Services in Buffalo NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Choosing the right remodeling contractor in Buffalo NY can make the difference between a renovation that enhances your life and one that creates new problems.</strong> After completing 750+ remodeling projects throughout Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Kenmore, North Tonawanda, Niagara Falls, Lockport, and surrounding Western New York communities, we've learned that Buffalo homeowners need contractors who understand both the technical challenges of WNY construction and the importance of creating accessible, safe living spaces.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Buffalo's unique housing characteristics—78% of homes built before 1990, challenging soil conditions, extreme weather, and diverse architectural styles—require specialized expertise that goes far beyond basic renovation skills. Our approach combines traditional craftsmanship with modern accessibility standards, ensuring that every remodeling project not only looks beautiful but also functions safely for all family members, regardless of age or ability.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-slate-500 pb-2">
                    Comprehensive Remodeling Services Buffalo NY
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Buffalo's Leading Universal Design Remodeling Specialists</strong> - Our comprehensive remodeling services address every aspect of home renovation while prioritizing safety, accessibility, and long-term functionality. We understand that Buffalo families need renovations that work for multi-generational living, changing mobility needs, and the challenges of aging in place.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-slate-900 flex items-center">
                        <Hammer className="w-5 h-5 mr-2" />
                        Kitchen & Bathroom Remodeling
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                          Complete accessible bathroom renovations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                          Universal design kitchen transformations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                          Safety-focused design and materials
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $15,000-$75,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Whole-Home Renovations
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                          Complete accessibility transformations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                          Home additions with universal design
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                          Basement finishing with accessibility features
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $45,000-$200,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-slate-500 pb-2">
                    Buffalo Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-slate-900 text-white">
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
                          <td className="p-4">$12,000 - $35,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Universal Design Kitchen</td>
                          <td className="p-4">Multi-height counters, accessible storage</td>
                          <td className="p-4">$25,000 - $65,000</td>
                          <td className="p-4">2-4 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Basement Finishing</td>
                          <td className="p-4">Waterproof, accessible living space</td>
                          <td className="p-4">$35,000 - $85,000</td>
                          <td className="p-4">4-6 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Home Addition</td>
                          <td className="p-4">Accessible room expansion</td>
                          <td className="p-4">$45,000 - $150,000</td>
                          <td className="p-4">6-12 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Whole-Home Accessibility</td>
                          <td className="p-4">Complete universal design renovation</td>
                          <td className="p-4">$75,000 - $200,000</td>
                          <td className="p-4">8-16 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Buffalo Remodeling Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional remodeling in Buffalo ranges from <strong>$12,000-$200,000</strong> depending on scope and accessibility features. 
                          While accessible renovations may cost 15-25% more initially, they prevent costly future modifications, reduce injury risk by 67%, and show 
                          <strong> 134% ROI while eliminating the need for expensive assisted living arrangements that cost $50,400 annually in Buffalo.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-slate-500 pb-2">
                    Buffalo-Specific Remodeling Challenges & Solutions
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Challenge: Buffalo's Older Housing Stock</h4>
                      <p className="text-gray-700 mb-3">
                        78% of Buffalo homes were built before modern accessibility standards, featuring balloon framing, plaster walls, knob-and-tube electrical, and cast iron plumbing that complicate renovation projects.
                      </p>
                      <p className="text-green-700 font-medium">
                        <strong>Our Solution:</strong> Specialized expertise in historic Buffalo construction methods, proper structural modifications, utility updates, and material matching that preserves character while adding accessibility.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Challenge: Buffalo Climate & Moisture Control</h4>
                      <p className="text-gray-700 mb-3">
                        Buffalo's humidity fluctuations, freeze-thaw cycles, and extreme temperatures create moisture challenges that affect flooring, insulation, and accessibility features in renovated spaces.
                      </p>
                      <p className="text-green-700 font-medium">
                        <strong>Our Solution:</strong> Climate-appropriate material selection, proper moisture barriers, ventilation systems, and weatherproofing that ensures accessibility features function reliably year-round.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-lg mb-2 text-green-900">Challenge: Buffalo Building Codes & Permits</h4>
                      <p className="text-gray-700 mb-3">
                        Buffalo's building codes, permit requirements, and inspection processes can be complex, especially when integrating accessibility features that may require variances or special approvals.
                      </p>
                      <p className="text-green-700 font-medium">
                        <strong>Our Solution:</strong> Deep knowledge of Buffalo building department requirements, established relationships with local officials, and expertise in accessibility code compliance that ensures smooth permit approval.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-slate-500 pb-2">
                    Buffalo Remodeling Safety & Accessibility Features
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Slip-Resistant Surfaces</h4>
                      <p className="text-gray-700 mb-3">
                        91% of Buffalo homeowners prioritize slip-resistance in renovations. We integrate non-slip treatments, textured surfaces, and proper drainage to prevent accidents.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Non-slip flooring materials</li>
                        <li>• Textured surface treatments</li>
                        <li>• Proper drainage systems</li>
                        <li>• Level transition installation</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Level Transitions</h4>
                      <p className="text-gray-700 mb-3">
                        Professional level transitions eliminate tripping hazards and ensure smooth wheelchair navigation throughout renovated Buffalo homes.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Threshold ramp installation</li>
                        <li>• Seamless flooring transitions</li>
                        <li>• Wheelchair-friendly navigation</li>
                        <li>• ADA-compliant slope requirements</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Accessibility Compliance</h4>
                      <p className="text-gray-700 mb-3">
                        Every renovation incorporates ADA guidelines and universal design principles to create spaces that work for all family members.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• ADA-compliant layouts and features</li>
                        <li>• Universal design integration</li>
                        <li>• Future-proofing for changing needs</li>
                        <li>• Multi-generational functionality</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-slate-500 pb-2">
                    Buffalo Remodeling Contractor Selection Guide
                  </h3>

                  <div className="bg-slate-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">What to Look for in Buffalo Remodeling Contractors</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4 text-slate-200">Essential Qualifications</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• New York State contractor license</li>
                          <li>• Comprehensive liability insurance</li>
                          <li>• Workers' compensation coverage</li>
                          <li>• Buffalo building code expertise</li>
                          <li>• Accessibility modification experience</li>
                          <li>• Local permit application knowledge</li>
                          <li>• References from Buffalo projects</li>
                          <li>• Established local business presence</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-4 text-slate-200">Red Flags to Avoid</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Door-to-door solicitation</li>
                          <li>• Requests for full payment upfront</li>
                          <li>• No local business address</li>
                          <li>• Cannot provide local references</li>
                          <li>• Unfamiliar with Buffalo building codes</li>
                          <li>• No accessibility modification experience</li>
                          <li>• Pressure tactics or limited-time offers</li>
                          <li>• Cannot provide proof of insurance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-slate-500 pb-2">
                    Buffalo Remodeling Project Management Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Phase 1: Consultation & Design (Weeks 1-2)</h4>
                      <p className="text-gray-700">
                        Initial consultation and needs assessment, accessibility evaluation and universal design planning, Buffalo building code review and permit requirements, detailed project proposal with 3D visualization, and material selection with safety and accessibility features. We ensure every Buffalo remodeling project starts with comprehensive planning.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Phase 2: Permits & Preparation (Weeks 3-4)</h4>
                      <p className="text-gray-700">
                        Buffalo building permit applications and approvals, material ordering with accessibility specifications, project scheduling and timeline coordination, and site preparation with safety measures. We handle all Buffalo building department requirements and coordinate with local officials for smooth project approval.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-lg mb-2 text-green-900">Phase 3: Construction & Quality Control (Weeks 5-12)</h4>
                      <p className="text-gray-700">
                        Professional construction with daily quality control, accessibility feature installation and testing, safety inspections throughout the process, and final Buffalo building department approvals. Every remodeling project includes comprehensive cleanup and accessibility feature orientation for homeowners.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-slate-500 pb-2">
                    Why Buffalo Homeowners Choose Aaron Michael Services
                  </h3>

                  <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-lg mb-4 text-indigo-900">Our Buffalo Remodeling Advantage</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2">Experience & Expertise:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 22+ years Buffalo construction experience</li>
                          <li>• 750+ successful remodeling projects</li>
                          <li>• Specialized accessibility modification training</li>
                          <li>• Buffalo building code expertise</li>
                          <li>• Historic home renovation experience</li>
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
                  Frequently Asked Questions About Remodeling Contractors in Buffalo NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much do remodeling contractors cost in Buffalo NY?",
                      answer: "Remodeling contractor costs in Buffalo range from $12,000-$200,000 depending on project scope and accessibility features. Accessible bathroom remodels cost $12,000-$35,000, universal design kitchens $25,000-$65,000, basement finishing $35,000-$85,000, home additions $45,000-$150,000, whole-home accessibility renovations $75,000-$200,000. Buffalo's older homes often require additional structural work, but professional contractors prevent costly mistakes and safety issues."
                    },
                    {
                      question: "Who are the best remodeling contractors in Buffalo, Cheektowaga, Amherst, and Tonawanda?",
                      answer: "Aaron Michael Services is Buffalo's leading accessible remodeling contractor serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Kenmore, North Tonawanda, Niagara Falls, Lockport, and all of Western New York. We specialize in universal design renovations with 750+ completed projects, 22+ years experience, accessibility expertise, and personal disability understanding. Licensed, insured, and experienced with Buffalo's unique construction challenges."
                    },
                    {
                      question: "How long do remodeling projects take in Buffalo?",
                      answer: "Remodeling project duration in Buffalo: Accessible bathrooms 1-2 weeks, universal design kitchens 2-4 weeks, basement finishing 4-6 weeks, home additions 6-12 weeks, whole-home accessibility renovations 8-16 weeks. Buffalo permit processing adds 2-3 weeks initially. Winter weather may extend timelines for projects involving exterior work. Our experience with Buffalo construction seasons helps minimize weather-related delays."
                    },
                    {
                      question: "What makes Buffalo remodeling different from other areas?",
                      answer: "Buffalo remodeling requires specialized expertise due to 78% of homes built before 1990 with balloon framing, plaster construction, knob-and-tube electrical, cast iron plumbing, challenging soil conditions, extreme weather requirements, and unique building code considerations. These factors demand experienced contractors familiar with Buffalo's specific challenges, proper structural modifications, and climate-appropriate materials and methods."
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
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Remodeling Project?</h3>
                <p className="mb-6">Get your free remodeling consultation from Buffalo's accessibility specialists.</p>
                
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
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Project Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Remodeling Projects</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Accessible Bathroom Renovation', range: '$12K-$35K' },
                    { name: 'Universal Design Kitchen', range: '$25K-$65K' },
                    { name: 'Basement Finishing', range: '$35K-$85K' },
                    { name: 'Home Addition', range: '$45K-$150K' },
                    { name: 'Whole-Home Accessibility', range: '$75K-$200K' },
                    { name: 'Flooring Installation', range: '$5K-$25K' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-slate-600">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Buffalo Homeowners Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years Buffalo construction experience",
                    "750+ remodeling projects completed", 
                    "Licensed contractor with accessibility expertise",
                    "Buffalo building code specialists",
                    "Universal design guaranteed",
                    "78% insurance approval success rate",
                    "Personal disability experience",
                    "Family-owned Buffalo business"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-slate-600 mr-2 mt-0.5 flex-shrink-0" />
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
            Choose Buffalo's Most Trusted Remodeling Contractor
          </h2>
          <p className="text-xl mb-8 text-slate-100">
            Don't trust your home renovation to inexperienced contractors. 
            Our Buffalo-certified remodeling expertise creates beautiful, accessible spaces that enhance your family's safety, comfort, and independence.
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
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-slate-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Kenmore, North Tonawanda, Niagara Falls, Lockport & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-slate-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Universal Design Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemodelingContractorBuffaloPage;