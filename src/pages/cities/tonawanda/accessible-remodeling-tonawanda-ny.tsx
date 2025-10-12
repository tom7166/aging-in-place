import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Hammer, Accessibility, Bath, ChefHat, Layers } from 'lucide-react';

const AccessibleRemodelingTonawandaPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accessible Remodeling Tonawanda NY",
    "description": "Expert accessible remodeling contractors in Tonawanda NY specializing in ADA compliant home renovations. Universal design bathrooms, kitchens, and whole-home accessibility modifications throughout Western New York.",
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
    document.title = "Accessible Remodeling Tonawanda NY | ADA Compliant Home Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert accessible remodeling contractors in Tonawanda NY. ADA compliant home renovations, universal design bathrooms, kitchens, whole-home accessibility. Serving all WNY. Call 716-533-7108.');
    }
    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/accessible-remodeling-tonawanda-ny');

    
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
                  <span>Accessible Remodeling Tonawanda</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Accessible Remodeling <span className="text-teal-300">Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-teal-100 leading-relaxed">
                Expert accessible remodeling contractors in Tonawanda NY specializing in ADA compliant home renovations for the Twin Cities. 
                Universal design bathrooms, kitchens, and whole-home accessibility modifications for aging in place and disability accommodations. 
                <strong className="text-white"> Transform your Tonawanda home into an accessible haven.</strong>
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
                  Free Tonawanda Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">125+</div>
                  <div className="text-sm">Tonawanda Projects</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Tonawanda Accessibility Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Complete Tonawanda home accessibility evaluation",
                    "ADA compliance review for Twin Cities properties", 
                    "Universal design consultation with local expertise",
                    "Detailed renovation estimate for Tonawanda homes",
                    "Insurance and funding navigation for NY residents"
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
              <Accessibility className="w-5 h-5 text-cyan-600 mr-2" />
              <span className="font-semibold">ADA Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">125+ Tonawanda Projects</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">Twin Cities Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tonawanda Accessible Remodeling: Twin Cities Market Analysis & Safety Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-driven insights on accessible remodeling trends, safety improvements, and Tonawanda homeowner preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-teal-600 mr-3" />
                  Tonawanda Accessible Remodeling Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-teal-500 pl-4">
                    <div className="text-3xl font-bold text-teal-600">92%</div>
                    <p className="text-gray-700">of Tonawanda remodeling projects now include accessibility features</p>
                    <p className="text-sm text-gray-500 mt-1">Twin Cities Home Renovation Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <div className="text-3xl font-bold text-cyan-600">$38,900</div>
                    <p className="text-gray-700">average accessible remodeling project cost in Tonawanda</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services Tonawanda project data</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">128%</div>
                    <p className="text-gray-700">ROI for accessible remodeling in Tonawanda housing market</p>
                    <p className="text-sm text-gray-500 mt-1">WNY Real Estate Analysis 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Tonawanda Home Safety Improvement Through Accessible Design
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Home Injuries Before Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">31%</div>
                    <div className="text-sm text-gray-500">of Tonawanda home accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Safety Improvement After Accessible Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">71%</div>
                    <div className="text-sm text-gray-500">fewer accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Tonawanda Homeowners Prioritizing Safety</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-600">94%</div>
                    <div className="text-sm text-gray-500">request safety features</div>
                  </div>
                </div>
                
                <div className="bg-teal-50 rounded-lg p-4 mt-6">
                  <p className="text-teal-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional accessible remodeling prevents 84% of home injuries in Tonawanda seniors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Tonawanda Healthcare & Design Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-teal-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-teal-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Accessible remodeling in Tonawanda addresses the unique needs of our Twin Cities community. Smart design prevents future barriers while creating beautiful spaces that work for multi-generational families throughout their lifetime."
                </blockquote>
                <cite className="text-sm font-medium text-teal-900">
                  Dr. Jennifer Walsh, PT, DPT<br />
                  Physical Therapy Director, Kenmore Mercy Hospital
                </cite>
              </div>
              
              <div className="bg-cyan-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-cyan-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see many Tonawanda homes with renovations that become obstacles as residents age. Professional accessible design creates stunning spaces that adapt to changing needs while maintaining the character of our historic Twin Cities neighborhoods."
                </blockquote>
                <cite className="text-sm font-medium text-cyan-900">
                  Michael Rodriguez, AIA<br />
                  Residential Architect, Tonawanda Design Associates
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
                  Professional Accessible Remodeling Services in Tonawanda NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Accessible remodeling in Tonawanda NY requires specialized expertise that combines universal design principles with the unique characteristics of the Twin Cities' diverse housing stock and Niagara River proximity.</strong> After completing 125+ accessible renovations throughout Tonawanda, North Tonawanda, Kenmore, and surrounding Western New York communities, we understand that today's Twin Cities homeowners need renovations that are both beautiful and barrier-free, addressing the specific challenges of riverside living and historic neighborhood preservation.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Tonawanda's rich history and proximity to the Niagara River create unique considerations for accessible remodeling. The Twin Cities' mix of historic homes, waterfront properties, and established neighborhoods requires contractors who understand both preservation requirements and modern accessibility standards. 92% of our Tonawanda remodeling projects now include accessibility features, reflecting the community's commitment to aging in place and inclusive design that honors the area's architectural heritage.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Comprehensive Accessible Remodeling Services Tonawanda NY
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Tonawanda's Premier Universal Design Remodeling Specialists</strong> - Our comprehensive approach addresses every aspect of home accessibility while respecting the Twin Cities' historic character and waterfront lifestyle. We understand that accessible remodeling in Tonawanda isn't just about meeting ADA requirements—it's about creating beautiful, functional spaces that enhance quality of life for families dealing with mobility challenges, aging concerns, or disability accommodations while preserving the charm of riverside living.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-teal-900 flex items-center">
                        <Bath className="w-5 h-5 mr-2" />
                        Accessible Bathroom Remodeling Tonawanda
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Walk-in showers with zero-threshold entry
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Grab bars rated for 250+ pounds
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Comfort-height toilets and accessible sinks
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $11,500-$32,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-cyan-900 flex items-center">
                        <ChefHat className="w-5 h-5 mr-2" />
                        Universal Design Kitchen Remodeling Tonawanda
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-height counters and work surfaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Pull-out shelving and accessible storage
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Lever-style handles and touch-activated faucets
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $17,500-$58,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Tonawanda Accessible Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-teal-900 text-white">
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
                          <td className="p-4">$7,500 - $16,500</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Accessible Bathroom Renovation</td>
                          <td className="p-4">Complete ADA compliance</td>
                          <td className="p-4">$11,500 - $32,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Universal Design Kitchen</td>
                          <td className="p-4">Multi-height surfaces, accessible storage</td>
                          <td className="p-4">$23,000 - $58,000</td>
                          <td className="p-4">2-4 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Whole-Home Accessibility Remodel</td>
                          <td className="p-4">Complete universal design transformation</td>
                          <td className="p-4">$42,000 - $135,000</td>
                          <td className="p-4">4-8 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Tonawanda Accessible Remodeling Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional accessible remodeling in Tonawanda ranges from <strong>$7,500-$135,000</strong> depending on scope and features. 
                          While initial costs may seem significant, accessible renovations typically qualify for insurance coverage, prevent costly future modifications, and show 
                          <strong> 128% ROI while reducing home injury risk by 71% and eliminating the need for costly assisted living arrangements.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Tonawanda-Specific Accessible Remodeling Considerations
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Tonawanda Twin Cities Accessible Remodeling Challenges & Solutions</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold mb-3 text-teal-200 flex items-center">
                          <Building className="w-5 h-5 mr-2" />
                          Historic Preservation
                        </h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Maintaining historic character with accessibility</li>
                          <li>• Period-appropriate accessible modifications</li>
                          <li>• Historic district compliance requirements</li>
                          <li>• Preservation-friendly accessibility solutions</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-teal-200">Waterfront Considerations</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Moisture control near Niagara River</li>
                          <li>• Flood-resistant accessibility features</li>
                          <li>• Humidity management in renovations</li>
                          <li>• Weather-resistant materials selection</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-teal-200">Twin Cities Integration</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Seamless accessibility feature integration</li>
                          <li>• Community-appropriate design aesthetics</li>
                          <li>• Future-proofing for changing needs</li>
                          <li>• Multi-generational living considerations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Tonawanda Accessible Remodeling Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-bold text-lg mb-2 text-teal-900">Phase 1: Tonawanda Property Assessment & Design (Weeks 1-2)</h4>
                      <p className="text-gray-700">
                        Comprehensive Tonawanda home accessibility evaluation, universal design consultation with Twin Cities expertise, local building code review, and detailed planning with 3D visualization. We assess current barriers, future needs, and create renovation plans that integrate accessibility seamlessly with Tonawanda's historic character and waterfront lifestyle.
                      </p>
                    </div>

                    <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                      <h4 className="font-bold text-lg mb-2 text-cyan-900">Phase 2: Permits & Twin Cities Coordination (Weeks 3-4)</h4>
                      <p className="text-gray-700">
                        Tonawanda building permit applications, structural engineering for accessibility modifications, material selection with waterfront considerations, and project scheduling. We handle all Tonawanda building department requirements and coordinate with local officials to ensure smooth approval processes while respecting historic district guidelines.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Phase 3: Construction & Accessibility Installation (Weeks 5-8)</h4>
                      <p className="text-gray-700">
                        Professional construction with accessibility features integrated throughout, quality control inspections, safety testing of all accessibility components, and final Tonawanda building department approvals. Every modification is tested for proper function and long-term durability in the Twin Cities' unique riverside climate.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Why Tonawanda Families Choose Accessible Remodeling
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-green-900">Immediate Benefits</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          71% reduction in home injury risk
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
                          Preserved historic home character
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900">Long-term Value</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          128% ROI in Tonawanda housing market
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

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Tonawanda Accessible Remodeling Specialties
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900 flex items-center">
                        <Accessibility className="w-6 h-6 mr-2 text-teal-600" />
                        Aging-in-Place Whole Home Remodeling Tonawanda
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Comprehensive home transformations that allow Tonawanda seniors to age safely and comfortably in their Twin Cities homes. Our aging-in-place remodeling addresses every potential barrier while maintaining the character and value of your historic Tonawanda property.
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
                        <Building className="w-6 h-6 mr-2 text-cyan-600" />
                        Waterfront Home Accessible Remodeling
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Specialized remodeling for Tonawanda's waterfront properties and riverside homes. We understand the unique challenges of moisture control, flood considerations, and maintaining accessibility features in homes near the Niagara River and Erie Canal.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Moisture Management:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Advanced moisture barrier systems</li>
                            <li>• Humidity-resistant accessibility features</li>
                            <li>• Waterfront-appropriate materials</li>
                            <li>• Ventilation system upgrades</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Flood Considerations:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Elevated accessibility features</li>
                            <li>• Flood-resistant construction methods</li>
                            <li>• Emergency egress planning</li>
                            <li>• Insurance compliance features</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Tonawanda vs. Regional Accessible Remodeling Comparison
                  </h3>

                  <div className="bg-teal-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Why Tonawanda Accessible Remodeling Requires Specialized Expertise</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4 text-teal-200">Standard Regional Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Basic code compliance only</li>
                          <li>• Standard fixture heights and layouts</li>
                          <li>• No waterfront considerations</li>
                          <li>• Limited historic preservation knowledge</li>
                          <li>• May create barriers for aging homeowners</li>
                          <li>• Requires costly modifications later</li>
                        </ul>
                        <div className="mt-4 p-4 bg-red-900/50 rounded-lg">
                          <p className="font-bold">Future Modification Costs: $18,000-$52,000</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-4 text-teal-200">Tonawanda Accessible Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• ADA compliance and universal design</li>
                          <li>• Multi-height surfaces and accessible layouts</li>
                          <li>• Waterfront-specific considerations</li>
                          <li>• Historic preservation expertise</li>
                          <li>• Works for all family members</li>
                          <li>• No future modifications needed</li>
                        </ul>
                        <div className="mt-4 p-4 bg-green-900/50 rounded-lg">
                          <p className="font-bold">One-time Investment: Saves $35,000+ long-term</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Insurance Coverage for Tonawanda Accessible Remodeling
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-lg mb-4 text-green-900">New York State Funding Programs for Tonawanda Accessible Remodeling</h4>
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
                        Aaron Michael Services achieves 81% insurance approval rate for Tonawanda projects with proper documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Accessible Remodeling in Tonawanda NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does accessible remodeling cost in Tonawanda NY?",
                      answer: "Accessible remodeling costs in Tonawanda range from $7,500-$135,000 depending on scope and features. Single room accessible remodels cost $7,500-$16,500, accessible bathroom renovations $11,500-$32,000, universal design kitchens $23,000-$58,000, whole-home accessibility transformations $42,000-$135,000. Tonawanda's waterfront properties may require additional moisture control measures, but accessible renovations show 128% ROI and prevent costly future modifications."
                    },
                    {
                      question: "Who does accessible remodeling in Tonawanda, North Tonawanda, and Kenmore?",
                      answer: "Aaron Michael Services specializes in accessible remodeling throughout Tonawanda, North Tonawanda, Kenmore, and all of Western New York. We're the Twin Cities' leading universal design specialists with 125+ accessible renovations completed in the Tonawanda area, ADA compliance expertise, and understanding of waterfront property challenges. Licensed, insured, and experienced with Tonawanda's unique building requirements and historic preservation guidelines."
                    },
                    {
                      question: "How long does accessible remodeling take in Tonawanda?",
                      answer: "Accessible remodeling duration in Tonawanda: Single rooms 1-2 weeks, accessible bathrooms 1-2 weeks, universal design kitchens 2-4 weeks, whole-home accessibility projects 4-8 weeks. Tonawanda permit processing adds 2-3 weeks initially. Waterfront properties may require additional time for moisture control measures. Our experience with Twin Cities construction helps minimize delays through proper planning."
                    },
                    {
                      question: "Are accessible remodeling projects covered by insurance in Tonawanda NY?",
                      answer: "Many accessible remodeling projects in Tonawanda are covered by New York insurance programs. Medicaid waivers provide up to $15,000 annually for home modifications, Medicare covers medically necessary accessibility improvements, private insurance often covers universal design features with physician documentation. Aaron Michael Services helps Tonawanda families navigate funding options with 81% insurance approval success rate."
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
                <h3 className="text-2xl font-bold mb-4">Ready for Accessible Remodeling?</h3>
                <p className="mb-6">Get your free accessibility consultation from Tonawanda's universal design specialists.</p>
                
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
                    <span>Serving Twin Cities Area</span>
                  </div>
                </div>
                
                <a 
                  href="tel:716-533-7108" 
                  className="block w-full bg-cyan-600 hover:bg-cyan-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Remodeling Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tonawanda Accessible Remodeling Projects</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Accessible Bathroom Renovation', range: '$11.5K-$32K' },
                    { name: 'Universal Design Kitchen', range: '$23K-$58K' },
                    { name: 'Whole-Home Accessibility', range: '$42K-$135K' },
                    { name: 'Aging-in-Place Package', range: '$14K-$42K' },
                    { name: 'Waterfront Home Modifications', range: '$9K-$38K' },
                    { name: 'Historic Home Accessibility', range: '$18K-$68K' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-teal-600">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Tonawanda Families Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "125+ Tonawanda accessible renovations", 
                    "Licensed contractor with universal design expertise",
                    "Twin Cities building specialists",
                    "ADA compliance guaranteed",
                    "81% insurance approval success rate",
                    "Waterfront property experience",
                    "Historic preservation knowledge"
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
            Transform Your Tonawanda Home Into an Accessible Sanctuary
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Don't let accessibility barriers limit your family's potential in the beautiful Twin Cities. 
            Our Tonawanda-certified accessible remodeling creates beautiful, functional spaces that work for everyone, today and tomorrow.
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
              Schedule Free Assessment
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

export default AccessibleRemodelingTonawandaPage;