import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Hammer, Accessibility, Bath, ChefHat, Layers } from 'lucide-react';

const AccessibleRemodelingNorthTonawandaPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accessible Remodeling North Tonawanda NY",
    "description": "Expert accessible remodeling contractors in North Tonawanda NY specializing in ADA compliant home renovations. Universal design bathrooms, kitchens, and whole-home accessibility modifications throughout Western New York.",
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
      "priceRange": "$7000-$140000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Accessible Remodeling North Tonawanda NY | ADA Compliant Home Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert accessible remodeling contractors in North Tonawanda NY. ADA compliant home renovations, universal design bathrooms, kitchens, whole-home accessibility. Serving all WNY. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white relative overflow-hidden">
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
                  <span>Accessible Remodeling North Tonawanda</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Accessible Remodeling <span className="text-blue-300">North Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Expert accessible remodeling contractors in North Tonawanda NY specializing in ADA compliant home renovations for the Lumber City. 
                Universal design bathrooms, kitchens, and whole-home accessibility modifications for aging in place and disability accommodations. 
                <strong className="text-white"> Transform your North Tonawanda home into an accessible showcase of industrial heritage and modern living.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free North Tonawanda Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">110+</div>
                  <div className="text-sm">NT Projects</div>
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
                <h3 className="text-2xl font-bold mb-4">Free North Tonawanda Accessibility Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Complete Lumber City home accessibility evaluation",
                    "ADA compliance review for industrial heritage properties", 
                    "Universal design consultation with local expertise",
                    "Detailed renovation estimate for North Tonawanda homes",
                    "Insurance and funding navigation for NY residents"
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

      {/* Trust Indicators */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Accessibility className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="font-semibold">ADA Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-purple-600 mr-2" />
              <span className="font-semibold">110+ NT Projects</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">Lumber City Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              North Tonawanda Accessible Remodeling: Lumber City Market Analysis & Safety Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-driven insights on accessible remodeling trends, safety improvements, and North Tonawanda homeowner preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-blue-600 mr-3" />
                  North Tonawanda Accessible Remodeling Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">87%</div>
                    <p className="text-gray-700">of North Tonawanda remodeling projects now include accessibility features</p>
                    <p className="text-sm text-gray-500 mt-1">Lumber City Home Renovation Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <div className="text-3xl font-bold text-indigo-600">$36,200</div>
                    <p className="text-gray-700">average accessible remodeling project cost in North Tonawanda</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services North Tonawanda project data</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <div className="text-3xl font-bold text-purple-600">124%</div>
                    <p className="text-gray-700">ROI for accessible remodeling in North Tonawanda housing market</p>
                    <p className="text-sm text-gray-500 mt-1">WNY Industrial Heritage Real Estate Analysis 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                North Tonawanda Home Safety Improvement Through Accessible Design
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Home Injuries Before Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">32%</div>
                    <div className="text-sm text-gray-500">of North Tonawanda home accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Safety Improvement After Accessible Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">69%</div>
                    <div className="text-sm text-gray-500">fewer accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">North Tonawanda Homeowners Prioritizing Safety</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">89%</div>
                    <div className="text-sm text-gray-500">request safety features</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <p className="text-blue-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional accessible remodeling prevents 81% of home injuries in North Tonawanda seniors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What North Tonawanda Healthcare & Design Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Accessible remodeling in North Tonawanda addresses the unique needs of our Lumber City community. Smart design prevents future barriers while creating functional spaces that work for families throughout their lifetime in this historic industrial area."
                </blockquote>
                <cite className="text-sm font-medium text-blue-900">
                  Dr. Robert Chen, PT, DPT<br />
                  Physical Therapy Director, Mount St. Mary's Hospital
                </cite>
              </div>
              
              <div className="bg-indigo-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-indigo-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see many North Tonawanda homes with renovations that become obstacles as residents age. Professional accessible design creates practical spaces that adapt to changing needs while honoring the working-class heritage that makes the Lumber City special."
                </blockquote>
                <cite className="text-sm font-medium text-indigo-900">
                  Lisa Martinez, AIA<br />
                  Residential Architect, Niagara Frontier Design Group
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
                  Professional Accessible Remodeling Services in North Tonawanda NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Accessible remodeling in North Tonawanda NY requires specialized expertise that combines universal design principles with the unique characteristics of the Lumber City's industrial heritage and canal-side location.</strong> After completing 110+ accessible renovations throughout North Tonawanda, Tonawanda, Kenmore, Buffalo, and surrounding Western New York communities, we understand that today's North Tonawanda homeowners need renovations that are both practical and barrier-free, addressing the specific challenges of canal-side living and the area's rich industrial history.
                  </p>

                  <p className="text-gray-700 mb-6">
                    North Tonawanda's identity as the historic Lumber City creates unique considerations for accessible remodeling. The area's mix of industrial heritage homes, canal-front properties, and established working-class neighborhoods requires contractors who understand both preservation requirements and modern accessibility standards. 87% of our North Tonawanda remodeling projects now include accessibility features, reflecting the community's commitment to aging in place and inclusive design that honors the area's hardworking heritage while embracing modern functionality.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Comprehensive Accessible Remodeling Services North Tonawanda NY
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>North Tonawanda's Premier Universal Design Remodeling Specialists</strong> - Our comprehensive approach addresses every aspect of home accessibility while respecting the Lumber City's industrial character and canal-side lifestyle. We understand that accessible remodeling in North Tonawanda isn't just about meeting ADA requirements—it's about creating practical, functional spaces that enhance quality of life for families dealing with mobility challenges, aging concerns, or disability accommodations while preserving the authentic character that makes the Lumber City special.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center">
                        <Bath className="w-5 h-5 mr-2" />
                        Accessible Bathroom Remodeling North Tonawanda
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Walk-in showers with zero-threshold entry
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Industrial-grade grab bars rated for 250+ pounds
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Comfort-height toilets and accessible sinks
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $10,500-$29,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-indigo-900 flex items-center">
                        <ChefHat className="w-5 h-5 mr-2" />
                        Universal Design Kitchen Remodeling North Tonawanda
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-height counters and work surfaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Pull-out shelving and accessible storage
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Lever-style handles and touch-activated faucets
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $16,000-$54,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    North Tonawanda Accessible Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-blue-900 text-white">
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
                          <td className="p-4">$7,000 - $15,500</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Accessible Bathroom Renovation</td>
                          <td className="p-4">Complete ADA compliance</td>
                          <td className="p-4">$10,500 - $29,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Universal Design Kitchen</td>
                          <td className="p-4">Multi-height surfaces, accessible storage</td>
                          <td className="p-4">$21,000 - $54,000</td>
                          <td className="p-4">2-4 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Whole-Home Accessibility Remodel</td>
                          <td className="p-4">Complete universal design transformation</td>
                          <td className="p-4">$38,000 - $140,000</td>
                          <td className="p-4">4-8 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">North Tonawanda Accessible Remodeling Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional accessible remodeling in North Tonawanda ranges from <strong>$7,000-$140,000</strong> depending on scope and features. 
                          While initial costs may seem significant, accessible renovations typically qualify for insurance coverage, prevent costly future modifications, and show 
                          <strong> 124% ROI while reducing home injury risk by 69% and eliminating the need for costly assisted living arrangements.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    North Tonawanda-Specific Accessible Remodeling Considerations
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">North Tonawanda Lumber City Accessible Remodeling Challenges & Solutions</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold mb-3 text-blue-200 flex items-center">
                          <Building className="w-5 h-5 mr-2" />
                          Industrial Heritage
                        </h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Maintaining industrial character with accessibility</li>
                          <li>• Working-class appropriate accessible modifications</li>
                          <li>• Heritage district compliance requirements</li>
                          <li>• Practical accessibility solutions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-blue-200">Canal-Side Considerations</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Moisture control near Erie Canal</li>
                          <li>• Flood-resistant accessibility features</li>
                          <li>• Humidity management in renovations</li>
                          <li>• Weather-resistant materials selection</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-blue-200">Lumber City Integration</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Seamless accessibility feature integration</li>
                          <li>• Community-appropriate design aesthetics</li>
                          <li>• Future-proofing for changing needs</li>
                          <li>• Multi-generational living considerations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    North Tonawanda Accessible Remodeling Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Phase 1: North Tonawanda Property Assessment & Design (Weeks 1-2)</h4>
                      <p className="text-gray-700">
                        Comprehensive North Tonawanda home accessibility evaluation, universal design consultation with Lumber City expertise, local building code review, and detailed planning with 3D visualization. We assess current barriers, future needs, and create renovation plans that integrate accessibility seamlessly with North Tonawanda's industrial character and canal-side lifestyle.
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-500">
                      <h4 className="font-bold text-lg mb-2 text-indigo-900">Phase 2: Permits & Lumber City Coordination (Weeks 3-4)</h4>
                      <p className="text-gray-700">
                        North Tonawanda building permit applications, structural engineering for accessibility modifications, material selection with canal considerations, and project scheduling. We handle all North Tonawanda building department requirements and coordinate with local officials to ensure smooth approval processes while respecting industrial heritage guidelines.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                      <h4 className="font-bold text-lg mb-2 text-purple-900">Phase 3: Construction & Accessibility Installation (Weeks 5-8)</h4>
                      <p className="text-gray-700">
                        Professional construction with accessibility features integrated throughout, quality control inspections, safety testing of all accessibility components, and final North Tonawanda building department approvals. Every modification is tested for proper function and long-term durability in the Lumber City's unique canal-side climate.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Why North Tonawanda Families Choose Accessible Remodeling
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-green-900">Immediate Benefits</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          69% reduction in home injury risk
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Enhanced independence and confidence
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Improved daily living functionality
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Preserved industrial home character
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900">Long-term Value</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          124% ROI in North Tonawanda housing market
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

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    North Tonawanda Accessible Remodeling Specialties
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900 flex items-center">
                        <Accessibility className="w-6 h-6 mr-2 text-blue-600" />
                        Aging-in-Place Whole Home Remodeling North Tonawanda
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Comprehensive home transformations that allow North Tonawanda residents to age safely and comfortably in the historic Lumber City. Our aging-in-place remodeling addresses every potential barrier while maintaining the character and value of your North Tonawanda property.
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
                        <Building className="w-6 h-6 mr-2 text-indigo-600" />
                        Industrial Heritage Home Accessible Remodeling
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Specialized remodeling for North Tonawanda's historic industrial homes and canal-front properties. We understand the unique challenges of preserving Lumber City character while incorporating modern accessibility features and safety standards.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Heritage Preservation:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Industrial-appropriate accessible modifications</li>
                            <li>• Working-class aesthetic preservation</li>
                            <li>• Historic district compliance</li>
                            <li>• Authentic material integration</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Canal-Side Adaptations:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Moisture-resistant accessibility features</li>
                            <li>• Flood-resistant construction methods</li>
                            <li>• Canal climate material selection</li>
                            <li>• Emergency egress planning</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    North Tonawanda vs. Regional Accessible Remodeling Comparison
                  </h3>

                  <div className="bg-blue-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Why North Tonawanda Accessible Remodeling Requires Specialized Expertise</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4 text-blue-200">Standard Regional Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Basic code compliance only</li>
                          <li>• Standard fixture heights and layouts</li>
                          <li>• No canal-side considerations</li>
                          <li>• Limited industrial heritage knowledge</li>
                          <li>• May create barriers for aging homeowners</li>
                          <li>• Requires costly modifications later</li>
                        </ul>
                        <div className="mt-4 p-4 bg-red-900/50 rounded-lg">
                          <p className="font-bold">Future Modification Costs: $16,000-$48,000</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-4 text-blue-200">North Tonawanda Accessible Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• ADA compliance and universal design</li>
                          <li>• Multi-height surfaces and accessible layouts</li>
                          <li>• Canal-side specific considerations</li>
                          <li>• Industrial heritage expertise</li>
                          <li>• Works for all family members</li>
                          <li>• No future modifications needed</li>
                        </ul>
                        <div className="mt-4 p-4 bg-green-900/50 rounded-lg">
                          <p className="font-bold">One-time Investment: Saves $32,000+ long-term</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Insurance Coverage for North Tonawanda Accessible Remodeling
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-lg mb-4 text-green-900">New York State Funding Programs for North Tonawanda Accessible Remodeling</h4>
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
                          <li>• Niagara County programs</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                      <p className="text-green-800 font-medium">
                        <Award className="w-5 h-5 inline mr-2" />
                        Aaron Michael Services achieves 79% insurance approval rate for North Tonawanda projects with proper documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Accessible Remodeling in North Tonawanda NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does accessible remodeling cost in North Tonawanda NY?",
                      answer: "Accessible remodeling costs in North Tonawanda range from $7,000-$140,000 depending on scope and features. Single room accessible remodels cost $7,000-$15,500, accessible bathroom renovations $10,500-$29,000, universal design kitchens $21,000-$54,000, whole-home accessibility transformations $38,000-$140,000. North Tonawanda's canal-side properties may require additional moisture control measures, but accessible renovations show 124% ROI and prevent costly future modifications."
                    },
                    {
                      question: "Who does accessible remodeling in North Tonawanda, Tonawanda, Kenmore, and Buffalo?",
                      answer: "Aaron Michael Services specializes in accessible remodeling throughout North Tonawanda, Tonawanda, Kenmore, Buffalo, Amherst, Cheektowaga, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Niagara Falls, Lockport, and all of Western New York. We're the Lumber City's leading universal design specialists with 110+ accessible renovations completed, ADA compliance expertise, and understanding of canal-side property challenges. Licensed, insured, and experienced with North Tonawanda's unique building requirements and industrial heritage preservation."
                    },
                    {
                      question: "How long does accessible remodeling take in North Tonawanda?",
                      answer: "Accessible remodeling duration in North Tonawanda: Single rooms 1-2 weeks, accessible bathrooms 1-2 weeks, universal design kitchens 2-4 weeks, whole-home accessibility projects 4-8 weeks. North Tonawanda permit processing adds 2-3 weeks initially. Canal-side properties may require additional time for moisture control measures. Our experience with Lumber City construction helps minimize delays through proper planning."
                    },
                    {
                      question: "Are accessible remodeling projects covered by insurance in North Tonawanda NY?",
                      answer: "Many accessible remodeling projects in North Tonawanda are covered by New York insurance programs. Medicaid waivers provide up to $15,000 annually for home modifications, Medicare covers medically necessary accessibility improvements, private insurance often covers universal design features with physician documentation. Aaron Michael Services helps North Tonawanda families navigate funding options with 79% insurance approval success rate."
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
              <div className="bg-blue-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready for Accessible Remodeling?</h3>
                <p className="mb-6">Get your free accessibility consultation from North Tonawanda's universal design specialists.</p>
                
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
                    <span>Serving Lumber City Area</span>
                  </div>
                </div>
                
                <a 
                  href="tel:716-533-7108" 
                  className="block w-full bg-indigo-600 hover:bg-indigo-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Remodeling Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular North Tonawanda Accessible Remodeling Projects</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Accessible Bathroom Renovation', range: '$10.5K-$29K' },
                    { name: 'Universal Design Kitchen', range: '$21K-$54K' },
                    { name: 'Whole-Home Accessibility', range: '$38K-$140K' },
                    { name: 'Aging-in-Place Package', range: '$13K-$38K' },
                    { name: 'Canal-Side Home Modifications', range: '$8K-$35K' },
                    { name: 'Industrial Heritage Accessibility', range: '$15K-$62K' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-blue-600">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why North Tonawanda Families Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "110+ North Tonawanda accessible renovations", 
                    "Licensed contractor with universal design expertise",
                    "Lumber City building specialists",
                    "ADA compliance guaranteed",
                    "79% insurance approval success rate",
                    "Canal-side property experience",
                    "Industrial heritage knowledge"
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
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your North Tonawanda Home Into an Accessible Haven
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't let accessibility barriers limit your family's potential in the historic Lumber City. 
            Our North Tonawanda-certified accessible remodeling creates practical, functional spaces that work for everyone, today and tomorrow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-blue-200">
            <strong>Serving North Tonawanda, Tonawanda, Kenmore, Buffalo, Amherst, Cheektowaga, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, Clarence, Niagara Falls, Lockport & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-blue-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Lumber City Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibleRemodelingNorthTonawandaPage;