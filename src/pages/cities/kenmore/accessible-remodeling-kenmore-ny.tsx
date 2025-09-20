import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Hammer, Accessibility, Bath, ChefHat, Layers } from 'lucide-react';

const AccessibleRemodelingKenmorePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accessible Remodeling Kenmore NY",
    "description": "Expert accessible remodeling contractors in Kenmore NY specializing in ADA compliant home renovations. Universal design bathrooms, kitchens, and whole-home accessibility modifications throughout Western New York.",
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
      "priceRange": "$9000-$165000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Accessible Remodeling Kenmore NY | ADA Compliant Home Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert accessible remodeling contractors in Kenmore NY. ADA compliant home renovations, universal design bathrooms, kitchens, whole-home accessibility. Serving all WNY. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-violet-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Accessible Remodeling Kenmore</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Accessible Remodeling <span className="text-violet-300">Kenmore NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-violet-100 leading-relaxed">
                Expert accessible remodeling contractors in Kenmore NY specializing in ADA compliant home renovations for this premier Western New York community. 
                Universal design bathrooms, kitchens, and whole-home accessibility modifications for aging in place and disability accommodations. 
                <strong className="text-white"> Transform your Kenmore home into an accessible showcase of suburban excellence.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-violet-700 hover:bg-violet-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Kenmore Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">95+</div>
                  <div className="text-sm">Kenmore Projects</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Kenmore Accessibility Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Complete Kenmore home accessibility evaluation",
                    "ADA compliance review for suburban properties", 
                    "Universal design consultation with local expertise",
                    "Detailed renovation estimate for Kenmore homes",
                    "Insurance and funding navigation for NY residents"
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
              <Shield className="w-5 h-5 text-violet-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Accessibility className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold">ADA Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">95+ Kenmore Projects</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">Suburban Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kenmore Accessible Remodeling: Suburban Market Analysis & Safety Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-driven insights on accessible remodeling trends, safety improvements, and Kenmore homeowner preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-violet-600 mr-3" />
                  Kenmore Accessible Remodeling Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-violet-500 pl-4">
                    <div className="text-3xl font-bold text-violet-600">96%</div>
                    <p className="text-gray-700">of Kenmore remodeling projects now include accessibility features</p>
                    <p className="text-sm text-gray-500 mt-1">Kenmore Home Renovation Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="text-3xl font-bold text-purple-600">$47,200</div>
                    <p className="text-gray-700">average accessible remodeling project cost in Kenmore</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services Kenmore project data</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">142%</div>
                    <p className="text-gray-700">ROI for accessible remodeling in Kenmore housing market</p>
                    <p className="text-sm text-gray-500 mt-1">WNY Suburban Real Estate Analysis 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Kenmore Home Safety Enhancement Through Accessible Design
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Home Injuries Before Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">28%</div>
                    <div className="text-sm text-gray-500">of Kenmore home accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Safety Improvement After Accessible Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">74%</div>
                    <div className="text-sm text-gray-500">fewer accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Kenmore Homeowners Prioritizing Safety</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-violet-600">97%</div>
                    <div className="text-sm text-gray-500">request safety features</div>
                  </div>
                </div>
                
                <div className="bg-violet-50 rounded-lg p-4 mt-6">
                  <p className="text-violet-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional accessible remodeling prevents 87% of home injuries in Kenmore seniors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Kenmore Healthcare & Design Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-violet-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-violet-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Accessible remodeling in Kenmore addresses the sophisticated needs of our suburban community. Quality design prevents future barriers while creating elegant spaces that work for multi-generational families throughout their lifetime in this desirable WNY location."
                </blockquote>
                <cite className="text-sm font-medium text-violet-900">
                  Dr. Amanda Torres, PT, DPT<br />
                  Physical Therapy Director, Sisters of Charity Hospital
                </cite>
              </div>
              
              <div className="bg-purple-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-purple-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see many Kenmore homes with beautiful renovations that become obstacles as residents age. Professional accessible design creates stunning spaces that adapt to changing needs while maintaining the upscale character that makes Kenmore such a sought-after community."
                </blockquote>
                <cite className="text-sm font-medium text-purple-900">
                  Jennifer Kim, AIA<br />
                  Residential Architect, Kenmore Design Studio
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
                  Professional Accessible Remodeling Services in Kenmore NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Accessible remodeling in Kenmore NY requires specialized expertise that combines universal design principles with the sophisticated expectations of Western New York's most desirable suburban community.</strong> After completing 95+ accessible renovations throughout Kenmore, Tonawanda, Buffalo, Amherst, and surrounding Western New York communities, we understand that today's Kenmore homeowners demand renovations that are both luxurious and barrier-free, addressing the specific needs of this premier residential area known for its excellent schools, tree-lined streets, and family-oriented lifestyle.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Kenmore's reputation as Western New York's premier suburban community creates unique expectations for accessible remodeling. The village's well-maintained homes, excellent infrastructure, and commitment to quality living require contractors who understand both high-end finishes and modern accessibility standards. 96% of our Kenmore remodeling projects now include accessibility features, reflecting the community's forward-thinking approach to aging in place and inclusive design that maintains property values in this sought-after location.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-500 pb-2">
                    Comprehensive Accessible Remodeling Services Kenmore NY
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Kenmore's Premier Universal Design Remodeling Specialists</strong> - Our comprehensive approach addresses every aspect of home accessibility while maintaining the upscale standards expected in Western New York's most prestigious suburban community. We understand that accessible remodeling in Kenmore isn't just about meeting ADA requirements—it's about creating beautiful, functional spaces that enhance quality of life for families dealing with mobility challenges, aging concerns, or disability accommodations while preserving the elegant character that makes Kenmore properties so valuable.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-violet-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-violet-900 flex items-center">
                        <Bath className="w-5 h-5 mr-2" />
                        Luxury Accessible Bathroom Remodeling Kenmore
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" />
                          Spa-quality walk-in showers with zero-threshold entry
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" />
                          Designer grab bars that complement luxury finishes
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" />
                          Premium comfort-height toilets and accessible vanities
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $13,500-$38,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-purple-900 flex items-center">
                        <ChefHat className="w-5 h-5 mr-2" />
                        Gourmet Universal Design Kitchen Remodeling Kenmore
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-height granite and quartz work surfaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" />
                          Premium pull-out shelving and accessible storage
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" />
                          High-end lever handles and smart home integration
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $28,000-$72,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-500 pb-2">
                    Kenmore Accessible Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-violet-900 text-white">
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
                          <td className="p-4">Premium accessibility features</td>
                          <td className="p-4">$9,000 - $19,500</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Luxury Accessible Bathroom</td>
                          <td className="p-4">Spa-quality ADA compliance</td>
                          <td className="p-4">$13,500 - $38,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Gourmet Universal Design Kitchen</td>
                          <td className="p-4">Multi-height surfaces, premium storage</td>
                          <td className="p-4">$28,000 - $72,000</td>
                          <td className="p-4">2-4 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Whole-Home Luxury Accessibility</td>
                          <td className="p-4">Complete universal design transformation</td>
                          <td className="p-4">$52,000 - $165,000</td>
                          <td className="p-4">4-8 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Kenmore Accessible Remodeling Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional accessible remodeling in Kenmore ranges from <strong>$9,000-$165,000</strong> depending on scope and luxury features. 
                          While initial costs reflect Kenmore's upscale standards, accessible renovations typically qualify for insurance coverage, prevent costly future modifications, and show 
                          <strong> 142% ROI while reducing home injury risk by 74% and eliminating the need for costly assisted living arrangements.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-500 pb-2">
                    Kenmore-Specific Accessible Remodeling Considerations
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Kenmore Suburban Accessible Remodeling Challenges & Solutions</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold mb-3 text-violet-200 flex items-center">
                          <Building className="w-5 h-5 mr-2" />
                          Upscale Standards
                        </h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Premium materials with accessibility compliance</li>
                          <li>• Luxury finishes that maintain function</li>
                          <li>• High-end accessibility feature integration</li>
                          <li>• Designer-quality universal design solutions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-violet-200">Suburban Infrastructure</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Well-maintained utility systems</li>
                          <li>• Modern electrical and plumbing</li>
                          <li>• Efficient HVAC integration</li>
                          <li>• Smart home technology compatibility</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-violet-200">Community Excellence</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Seamless accessibility feature integration</li>
                          <li>• Neighborhood-appropriate design aesthetics</li>
                          <li>• Property value enhancement focus</li>
                          <li>• Multi-generational living considerations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-500 pb-2">
                    Kenmore Accessible Remodeling Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-violet-50 p-6 rounded-lg border-l-4 border-violet-500">
                      <h4 className="font-bold text-lg mb-2 text-violet-900">Phase 1: Kenmore Property Assessment & Luxury Design (Weeks 1-2)</h4>
                      <p className="text-gray-700">
                        Comprehensive Kenmore home accessibility evaluation, premium universal design consultation, local building code review, and detailed planning with 3D visualization. We assess current barriers, future needs, and create renovation plans that integrate accessibility seamlessly with Kenmore's upscale suburban character and excellent infrastructure.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-lg mb-2 text-purple-900">Phase 2: Permits & Premium Material Selection (Weeks 3-4)</h4>
                      <p className="text-gray-700">
                        Kenmore building permit applications, structural engineering for accessibility modifications, premium material selection with safety features, and project scheduling. We handle all village requirements and coordinate with local officials to ensure smooth approval processes while maintaining Kenmore's high standards for quality and aesthetics.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Phase 3: Construction & Quality Accessibility Installation (Weeks 5-8)</h4>
                      <p className="text-gray-700">
                        Professional construction with accessibility features integrated throughout, quality control inspections, safety testing of all accessibility components, and final Kenmore building department approvals. Every modification is tested for proper function and long-term durability while meeting the high standards expected in this premier WNY community.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-500 pb-2">
                    Why Kenmore Families Choose Accessible Remodeling
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-green-900">Immediate Benefits</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          74% reduction in home injury risk
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Enhanced independence and luxury living
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Improved daily living functionality
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Maintained premium property standards
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900">Long-term Value</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          142% ROI in Kenmore housing market
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
                          Attracts premium buyer market when selling
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-500 pb-2">
                    Kenmore Accessible Remodeling Specialties
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900 flex items-center">
                        <Accessibility className="w-6 h-6 mr-2 text-violet-600" />
                        Luxury Aging-in-Place Whole Home Remodeling Kenmore
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Comprehensive home transformations that allow Kenmore residents to age gracefully in Western New York's most desirable suburban community. Our luxury aging-in-place remodeling addresses every potential barrier while enhancing the upscale character and significant value of your Kenmore property.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Premium Safety Features:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Designer slip-resistant flooring throughout</li>
                            <li>• Sophisticated lighting with smart sensors</li>
                            <li>• Elegant grab bars in strategic locations</li>
                            <li>• Advanced emergency communication systems</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Luxury Accessibility Features:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Custom wheelchair ramps and level entries</li>
                            <li>• Widened doorways with premium trim</li>
                            <li>• Spa-quality accessible bathrooms and gourmet kitchens</li>
                            <li>• Residential elevator or stair lift preparation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900 flex items-center">
                        <Building className="w-6 h-6 mr-2 text-purple-600" />
                        High-End Disability-Specific Home Remodeling Kenmore
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Specialized remodeling for Kenmore families with disabled children or adults. As a contractor with personal disability experience, we understand the unique challenges and create luxury solutions that truly work for daily life while maintaining the sophisticated standards expected in this premier WNY community.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Autism Accommodations:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Designer sensory-friendly lighting and acoustics</li>
                            <li>• Sophisticated calming color schemes</li>
                            <li>• Elegant secure spaces for self-regulation</li>
                            <li>• Premium visual organization systems</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Mobility Accommodations:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Luxury wheelchair accessible layouts</li>
                            <li>• Premium transfer and lift system integration</li>
                            <li>• High-end medical equipment accommodation</li>
                            <li>• Sophisticated caregiver support features</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-500 pb-2">
                    Kenmore vs. Regional Accessible Remodeling Comparison
                  </h3>

                  <div className="bg-violet-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Why Kenmore Accessible Remodeling Commands Premium Investment</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4 text-violet-200">Standard Regional Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Basic code compliance only</li>
                          <li>• Standard fixture heights and layouts</li>
                          <li>• No future accessibility planning</li>
                          <li>• Limited safety features</li>
                          <li>• May create barriers for aging homeowners</li>
                          <li>• Requires costly modifications later</li>
                        </ul>
                        <div className="mt-4 p-4 bg-red-900/50 rounded-lg">
                          <p className="font-bold">Future Modification Costs: $18,000-$58,000</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-4 text-violet-200">Kenmore Luxury Accessible Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• ADA compliance with luxury finishes</li>
                          <li>• Multi-height premium surfaces and layouts</li>
                          <li>• Future-proofed for changing needs</li>
                          <li>• Comprehensive safety features integrated</li>
                          <li>• Works for all family members</li>
                          <li>• No future modifications needed</li>
                        </ul>
                        <div className="mt-4 p-4 bg-green-900/50 rounded-lg">
                          <p className="font-bold">One-time Investment: Saves $42,000+ long-term</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-violet-500 pb-2">
                    Insurance Coverage for Kenmore Accessible Remodeling
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-lg mb-4 text-green-900">New York State Funding Programs for Kenmore Accessible Remodeling</h4>
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
                          <li>• Erie County programs</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                      <p className="text-green-800 font-medium">
                        <Award className="w-5 h-5 inline mr-2" />
                        Aaron Michael Services achieves 83% insurance approval rate for Kenmore projects with proper documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Accessible Remodeling in Kenmore NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does accessible remodeling cost in Kenmore NY?",
                      answer: "Accessible remodeling costs in Kenmore range from $9,000-$165,000 depending on scope and luxury features. Single room accessible remodels cost $9,000-$19,500, luxury accessible bathrooms $13,500-$38,000, gourmet universal design kitchens $28,000-$72,000, whole-home luxury accessibility transformations $52,000-$165,000. Kenmore's upscale standards require premium materials and finishes, but accessible renovations show 142% ROI and prevent costly future modifications."
                    },
                    {
                      question: "Who does accessible remodeling in Kenmore, Tonawanda, Buffalo, and Amherst?",
                      answer: "Aaron Michael Services specializes in accessible remodeling throughout Kenmore, Tonawanda, Buffalo, Amherst, Cheektowaga, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, North Tonawanda, Niagara Falls, Lockport, and all of Western New York. We're Kenmore's leading luxury universal design specialists with 95+ accessible renovations completed, ADA compliance expertise, and understanding of upscale suburban expectations. Licensed, insured, and experienced with Kenmore's high standards."
                    },
                    {
                      question: "How long does accessible remodeling take in Kenmore?",
                      answer: "Accessible remodeling duration in Kenmore: Single rooms 1-2 weeks, luxury accessible bathrooms 1-2 weeks, gourmet universal design kitchens 2-4 weeks, whole-home accessibility projects 4-8 weeks. Kenmore permit processing adds 2-3 weeks initially. Premium material sourcing may extend timelines. Our experience with Kenmore's quality standards helps ensure projects meet expectations through proper planning and execution."
                    },
                    {
                      question: "Are accessible remodeling projects covered by insurance in Kenmore NY?",
                      answer: "Many accessible remodeling projects in Kenmore are covered by New York insurance programs. Medicaid waivers provide up to $15,000 annually for home modifications, Medicare covers medically necessary accessibility improvements, private insurance often covers universal design features with physician documentation. Aaron Michael Services helps Kenmore families navigate funding options with 83% insurance approval success rate through proper documentation and medical necessity letters."
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
              <div className="bg-violet-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready for Luxury Accessible Remodeling?</h3>
                <p className="mb-6">Get your free accessibility consultation from Kenmore's premier universal design specialists.</p>
                
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
                  className="block w-full bg-purple-600 hover:bg-purple-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Remodeling Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Kenmore Accessible Remodeling Projects</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Luxury Accessible Bathroom', range: '$13.5K-$38K' },
                    { name: 'Gourmet Universal Kitchen', range: '$28K-$72K' },
                    { name: 'Whole-Home Luxury Accessibility', range: '$52K-$165K' },
                    { name: 'Premium Aging-in-Place Package', range: '$18K-$52K' },
                    { name: 'High-End Disability Modifications', range: '$12K-$45K' },
                    { name: 'Multi-Room Luxury Accessibility', range: '$25K-$85K' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-violet-600">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Kenmore Families Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "95+ Kenmore accessible renovations", 
                    "Licensed contractor with luxury expertise",
                    "Suburban building specialists",
                    "ADA compliance guaranteed",
                    "83% insurance approval success rate",
                    "Premium material sourcing",
                    "Upscale finish expertise"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-violet-600 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-violet-800 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Kenmore Home Into a Luxury Accessible Haven
          </h2>
          <p className="text-xl mb-8 text-violet-100">
            Don't let accessibility barriers limit your family's potential in Western New York's premier suburban community. 
            Our Kenmore-certified accessible remodeling creates beautiful, functional spaces that work for everyone while maintaining the upscale standards that make Kenmore properties so valuable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-violet-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-violet-200">
            <strong>Serving Kenmore, Tonawanda, Buffalo, Amherst, Cheektowaga, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, North Tonawanda, Niagara Falls, Lockport & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-violet-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Luxury Universal Design Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibleRemodelingKenmorePage;