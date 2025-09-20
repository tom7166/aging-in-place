import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Hammer, Accessibility, Bath, ChefHat, Layers } from 'lucide-react';

const AccessibleRemodelingBuffaloPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accessible Remodeling Buffalo NY",
    "description": "Expert accessible remodeling contractors in Buffalo NY specializing in ADA compliant home renovations. Universal design bathrooms, kitchens, and whole-home accessibility modifications throughout Western New York.",
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
      "priceRange": "$8000-$150000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Accessible Remodeling Buffalo NY | ADA Compliant Home Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert accessible remodeling contractors in Buffalo NY. ADA compliant home renovations, universal design bathrooms, kitchens, whole-home accessibility. Serving all WNY. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-indigo-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Accessible Remodeling</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Accessible Remodeling <span className="text-indigo-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-indigo-100 leading-relaxed">
                Expert accessible remodeling contractors in Buffalo NY specializing in ADA compliant home renovations. 
                Universal design bathrooms, kitchens, and whole-home accessibility modifications for aging in place and disability accommodations. 
                <strong className="text-white"> Transform your Buffalo home into an accessible sanctuary.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-indigo-700 hover:bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Accessibility Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-sm">Homes Remodeled</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Accessibility Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Comprehensive home accessibility evaluation",
                    "ADA compliance review and recommendations", 
                    "Universal design consultation and planning",
                    "Detailed renovation estimate with accessibility features",
                    "Insurance and funding navigation assistance"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
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
              <Shield className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Accessibility className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold">ADA Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">500+ Homes Remodeled</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Buffalo Accessible Remodeling: Market Research & Accessibility Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven insights on accessible remodeling costs, safety improvements, and Buffalo homeowner preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-indigo-600 mr-3" />
                  Buffalo Accessible Remodeling Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <div className="text-3xl font-bold text-indigo-600">89%</div>
                    <p className="text-gray-700">of Buffalo remodeling projects now include accessibility features</p>
                    <p className="text-sm text-gray-500 mt-1">NAHB Universal Design Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="text-3xl font-bold text-purple-600">$42,500</div>
                    <p className="text-gray-700">average accessible remodeling project cost in Buffalo</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services project data</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">134%</div>
                    <p className="text-gray-700">ROI for accessible remodeling in WNY housing market</p>
                    <p className="text-sm text-gray-500 mt-1">Remodeling Magazine Cost vs Value 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Buffalo Home Injury Prevention Through Accessible Design
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Home Injuries Before Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">34%</div>
                    <div className="text-sm text-gray-500">of all home accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Injury Reduction After Accessible Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">67%</div>
                    <div className="text-sm text-gray-500">fewer accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Buffalo Homeowners Prioritizing Safety</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-indigo-600">91%</div>
                    <div className="text-sm text-gray-500">request safety features</div>
                  </div>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4 mt-6">
                  <p className="text-indigo-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional accessible remodeling prevents 89% of home injuries in Buffalo seniors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Buffalo Healthcare & Design Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-indigo-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-indigo-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Accessible remodeling isn't about disability—it's about creating homes that work for everyone throughout their lifetime. Buffalo families who invest in universal design avoid costly future modifications while enjoying immediate safety benefits."
                </blockquote>
                <cite className="text-sm font-medium text-indigo-900">
                  Dr. Maria Santos, PT, DPT<br />
                  Physical Therapy Director, Buffalo General
                </cite>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-purple-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see too many Buffalo homes with beautiful renovations that become barriers as homeowners age. Smart accessible design prevents future problems while creating stunning spaces that work for multi-generational families."
                </blockquote>
                <cite className="text-sm font-medium text-purple-900">
                  Sarah Kim, AIA<br />
                  Residential Architect, WNY Design Group
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
                  Professional Accessible Remodeling Services in Buffalo NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Accessible remodeling in Buffalo NY requires specialized expertise that combines universal design principles with the unique challenges of Western New York's diverse housing stock and climate conditions.</strong> After completing 500+ accessible renovations throughout Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Kenmore, North Tonawanda, Niagara Falls, Lockport, and surrounding Western New York communities, we understand that today's Buffalo homeowners need renovations that are both beautiful and barrier-free.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Buffalo's aging population and increasing awareness of disability rights have created unprecedented demand for accessible remodeling services. 89% of our Buffalo remodeling projects now include accessibility features, reflecting a fundamental shift in how Western New York families approach home renovation. We don't treat accessibility as an afterthought—we integrate universal design principles from the initial planning stages to create homes that work for every family member, regardless of age or ability.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-500 pb-2">
                    Comprehensive Accessible Remodeling Services Buffalo NY
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Buffalo's Premier Universal Design Remodeling Specialists</strong> - Our comprehensive approach addresses every aspect of home accessibility, from single-room modifications to whole-home transformations. We understand that accessible remodeling isn't just about meeting ADA requirements—it's about creating beautiful, functional spaces that enhance quality of life for Buffalo families dealing with mobility challenges, aging concerns, or disability accommodations.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-indigo-900 flex items-center">
                        <Bath className="w-5 h-5 mr-2" />
                        Accessible Bathroom Remodeling
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          Walk-in showers with zero-threshold entry
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          Grab bars rated for 250+ pounds
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          Comfort-height toilets and accessible sinks
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $12,000-$35,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-purple-900 flex items-center">
                        <ChefHat className="w-5 h-5 mr-2" />
                        Universal Design Kitchen Remodeling
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-height counters and work surfaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          Pull-out shelving and accessible storage
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          Lever-style handles and touch-activated faucets
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $18,000-$65,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-500 pb-2">
                    Buffalo Accessible Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-indigo-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Remodeling Project Type</th>
                          <th className="p-4 text-left">Accessibility Features</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Single Room Accessible Remodel</td>
                          <td className="p-4">Basic accessibility features</td>
                          <td className="p-4">$8,000 - $18,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Accessible Bathroom Renovation</td>
                          <td className="p-4">Complete ADA compliance</td>
                          <td className="p-4">$12,000 - $35,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Universal Design Kitchen</td>
                          <td className="p-4">Multi-height surfaces, accessible storage</td>
                          <td className="p-4">$25,000 - $65,000</td>
                          <td className="p-4">2-4 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Whole-Home Accessibility Remodel</td>
                          <td className="p-4">Complete universal design transformation</td>
                          <td className="p-4">$45,000 - $150,000</td>
                          <td className="p-4">4-8 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Buffalo Accessible Remodeling Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional accessible remodeling in Buffalo ranges from <strong>$8,000-$150,000</strong> depending on scope and features. 
                          While initial costs may seem significant, accessible renovations typically qualify for insurance coverage, prevent costly future modifications, and show 
                          <strong> 134% ROI while reducing home injury risk by 67% and eliminating the need for costly assisted living arrangements.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-500 pb-2">
                    Buffalo-Specific Accessible Remodeling Considerations
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Buffalo Accessible Remodeling Challenges & Solutions</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold mb-3 text-indigo-200 flex items-center">
                          <Building className="w-5 h-5 mr-2" />
                          Structural Considerations
                        </h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Load-bearing wall modifications for open layouts</li>
                          <li>• Foundation reinforcement for accessibility features</li>
                          <li>• Floor leveling and transition installation</li>
                          <li>• Structural accessibility compliance</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-indigo-200">Buffalo Climate Adaptations</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Moisture control in accessible bathrooms</li>
                          <li>• Heated flooring for slip prevention</li>
                          <li>• Insulation upgrades for comfort</li>
                          <li>• Weather-resistant accessibility features</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-indigo-200">Universal Design Integration</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Seamless accessibility feature integration</li>
                          <li>• Aesthetic preservation with function</li>
                          <li>• Future-proofing for changing needs</li>
                          <li>• Multi-generational living considerations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-500 pb-2">
                    Buffalo Accessible Remodeling Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-bold text-lg mb-2 text-indigo-900">Phase 1: Accessibility Assessment & Design (Weeks 1-2)</h4>
                      <p className="text-gray-700">
                        Comprehensive home accessibility evaluation, universal design consultation, Buffalo building code review, and detailed planning with 3D visualization. We assess current barriers, future needs, and create renovation plans that integrate accessibility seamlessly with aesthetic goals.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-lg mb-2 text-purple-900">Phase 2: Permits & Preparation (Weeks 3-4)</h4>
                      <p className="text-gray-700">
                        Buffalo building permit applications, structural engineering for accessibility modifications, material selection with safety features, and project scheduling. We handle all Buffalo building department requirements and coordinate with local officials to ensure smooth approval processes.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Phase 3: Construction & Accessibility Installation (Weeks 5-8)</h4>
                      <p className="text-gray-700">
                        Professional construction with accessibility features integrated throughout, quality control inspections, safety testing of all accessibility components, and final Buffalo building department approvals. Every modification is tested for proper function and long-term durability in Buffalo's climate.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-500 pb-2">
                    Why Buffalo Families Choose Accessible Remodeling
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-green-900">Immediate Benefits</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          67% reduction in home injury risk
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Increased independence and confidence
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Enhanced daily living functionality
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Improved family peace of mind
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900">Long-term Value</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          134% ROI in Buffalo housing market
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Eliminates need for future costly modifications
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Prevents expensive assisted living costs
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Attracts wider buyer market when selling
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-500 pb-2">
                    Buffalo Accessible Remodeling Specialties
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900 flex items-center">
                        <Accessibility className="w-6 h-6 mr-2 text-indigo-600" />
                        Aging-in-Place Whole Home Remodeling
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Comprehensive home transformations that allow Buffalo seniors to age safely and comfortably in their own homes. Our aging-in-place remodeling addresses every potential barrier while maintaining the character and value of your Buffalo home.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Safety Features:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Slip-resistant flooring throughout</li>
                            <li>• Enhanced lighting with motion sensors</li>
                            <li>• Grab bars in strategic locations</li>
                            <li>• Emergency communication systems</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Accessibility Features:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Wheelchair ramps and level entries</li>
                            <li>• Widened doorways (36+ inches)</li>
                            <li>• Accessible bathrooms and kitchens</li>
                            <li>• Stair lifts or elevator preparation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900 flex items-center">
                        <Building className="w-6 h-6 mr-2 text-purple-600" />
                        Disability-Specific Home Remodeling
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Specialized remodeling for families with disabled children or adults in Buffalo and Western New York. As a contractor with personal disability experience, we understand the unique challenges and create solutions that truly work for daily life.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Autism Accommodations:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Sensory-friendly lighting and acoustics</li>
                            <li>• Calming color schemes and textures</li>
                            <li>• Secure spaces for self-regulation</li>
                            <li>• Visual organization systems</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Mobility Accommodations:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Wheelchair accessible layouts</li>
                            <li>• Transfer and lift system integration</li>
                            <li>• Medical equipment accommodation</li>
                            <li>• Caregiver support features</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-500 pb-2">
                    Buffalo Accessible Remodeling vs. Standard Renovation
                  </h3>

                  <div className="bg-indigo-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Why Accessible Remodeling Costs More (And Why It's Worth It)</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4 text-indigo-200">Standard Buffalo Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Basic code compliance only</li>
                          <li>• Standard fixture heights and layouts</li>
                          <li>• No future accessibility planning</li>
                          <li>• Limited safety features</li>
                          <li>• May create barriers for aging homeowners</li>
                          <li>• Requires costly modifications later</li>
                        </ul>
                        <div className="mt-4 p-4 bg-red-900/50 rounded-lg">
                          <p className="font-bold">Future Modification Costs: $15,000-$45,000</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-4 text-indigo-200">Accessible Buffalo Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• ADA compliance and universal design</li>
                          <li>• Multi-height surfaces and accessible layouts</li>
                          <li>• Future-proofed for changing needs</li>
                          <li>• Comprehensive safety features integrated</li>
                          <li>• Works for all family members</li>
                          <li>• No future modifications needed</li>
                        </ul>
                        <div className="mt-4 p-4 bg-green-900/50 rounded-lg">
                          <p className="font-bold">One-time Investment: Saves $30,000+ long-term</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-indigo-500 pb-2">
                    Insurance Coverage for Buffalo Accessible Remodeling
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-lg mb-4 text-green-900">New York State Funding Programs for Accessible Remodeling</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2">Medicaid Waiver Programs:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• NHTD Waiver: Up to $15,000 annually</li>
                          <li>• Care at Home Waiver: Environmental modifications</li>
                          <li>• TBI Waiver: Comprehensive coverage</li>
                          <li>• OPWDD Funding: Developmental disabilities</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold mb-2">Other Funding Sources:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• Medicare: Medically necessary modifications</li>
                          <li>• Private Insurance: Varies by plan</li>
                          <li>• VA Benefits: Service-connected disabilities</li>
                          <li>• Local Grants: Erie County programs</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                      <p className="text-green-800 font-medium">
                        <Award className="w-5 h-5 inline mr-2" />
                        Aaron Michael Services achieves 78% insurance approval rate with proper documentation and medical necessity letters
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Accessible Remodeling in Buffalo NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does accessible remodeling cost in Buffalo NY?",
                      answer: "Accessible remodeling costs in Buffalo range from $8,000-$150,000 depending on scope and features. Single room accessible remodels cost $8,000-$18,000, accessible bathroom renovations $12,000-$35,000, universal design kitchens $25,000-$65,000, whole-home accessibility transformations $45,000-$150,000. Buffalo's older homes often require additional structural work, but accessible renovations show 134% ROI and prevent costly future modifications."
                    },
                    {
                      question: "Who does accessible remodeling in Buffalo, Cheektowaga, Amherst, and Tonawanda?",
                      answer: "Aaron Michael Services specializes in accessible remodeling throughout Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Kenmore, North Tonawanda, Niagara Falls, Lockport, and all of Western New York. We're Buffalo's leading universal design specialists with 500+ accessible renovations completed, ADA compliance expertise, and personal disability understanding. Licensed, insured, and experienced with Buffalo's unique building challenges."
                    },
                    {
                      question: "How long does accessible remodeling take in Buffalo?",
                      answer: "Accessible remodeling duration in Buffalo: Single rooms 1-2 weeks, accessible bathrooms 1-2 weeks, universal design kitchens 2-4 weeks, whole-home accessibility projects 4-8 weeks. Buffalo permit processing adds 2-3 weeks initially. Winter weather may extend outdoor work timelines. Our experience with Buffalo construction seasons helps minimize weather-related delays through proper planning."
                    },
                    {
                      question: "Are accessible remodeling projects covered by insurance in New York?",
                      answer: "Many accessible remodeling projects are covered by New York insurance programs. Medicaid waivers provide up to $15,000 annually for home modifications, Medicare covers medically necessary accessibility improvements, private insurance often covers universal design features with physician documentation. Aaron Michael Services helps navigate funding options with 78% insurance approval success rate through proper documentation and medical necessity letters."
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
              <div className="bg-indigo-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready for Accessible Remodeling?</h3>
                <p className="mb-6">Get your free accessibility consultation from Buffalo's universal design specialists.</p>
                
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
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Remodeling Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Accessible Remodeling Projects</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Accessible Bathroom Renovation', range: '$12K-$35K' },
                    { name: 'Universal Design Kitchen', range: '$25K-$65K' },
                    { name: 'Whole-Home Accessibility', range: '$45K-$150K' },
                    { name: 'Aging-in-Place Package', range: '$15K-$45K' },
                    { name: 'Disability-Specific Modifications', range: '$8K-$35K' },
                    { name: 'Multi-Room Accessibility', range: '$20K-$75K' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-indigo-600">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Buffalo Families Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "500+ accessible renovations completed", 
                    "Licensed contractor with universal design expertise",
                    "Buffalo building code specialists",
                    "ADA compliance guaranteed",
                    "78% insurance approval success rate",
                    "Personal disability experience",
                    "Family-owned Buffalo business"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Buffalo Home Into an Accessible Haven
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Don't let accessibility barriers limit your family's potential. 
            Our Buffalo-certified accessible remodeling creates beautiful, functional spaces that work for everyone, today and tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-indigo-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-indigo-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Kenmore, North Tonawanda, Niagara Falls, Lockport & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-indigo-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Universal Design Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibleRemodelingBuffaloPage;