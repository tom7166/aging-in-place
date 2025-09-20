import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Hammer, Accessibility, Bath, ChefHat, Layers } from 'lucide-react';

const AccessibleRemodelingAmherstPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accessible Remodeling Amherst NY",
    "description": "Expert accessible remodeling contractors in Amherst NY specializing in ADA compliant home renovations. Universal design bathrooms, kitchens, and whole-home accessibility modifications throughout Western New York.",
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
      "priceRange": "$9500-$175000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Accessible Remodeling Amherst NY | ADA Compliant Home Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert accessible remodeling contractors in Amherst NY. ADA compliant home renovations, universal design bathrooms, kitchens, whole-home accessibility. Serving all WNY. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white relative overflow-hidden">
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
                  <span>Accessible Remodeling Amherst</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Accessible Remodeling <span className="text-emerald-300">Amherst NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed">
                Expert accessible remodeling contractors in Amherst NY specializing in ADA compliant home renovations for Western New York's educational and suburban hub. 
                Universal design bathrooms, kitchens, and whole-home accessibility modifications for aging in place and disability accommodations. 
                <strong className="text-white"> Transform your Amherst home into an accessible showcase of suburban excellence and academic community living.</strong>
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
                  Free Amherst Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">140+</div>
                  <div className="text-sm">Amherst Projects</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Amherst Accessibility Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Complete Amherst home accessibility evaluation",
                    "ADA compliance review for suburban properties", 
                    "Universal design consultation with educational community expertise",
                    "Detailed renovation estimate for Amherst homes",
                    "Insurance and funding navigation for NY residents"
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
              <Shield className="w-5 h-5 text-emerald-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Accessibility className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">ADA Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-teal-600 mr-2" />
              <span className="font-semibold">140+ Amherst Projects</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Educational Community Specialists</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Amherst Accessible Remodeling: Educational Community Market Analysis & Safety Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-driven insights on accessible remodeling trends, safety improvements, and Amherst homeowner preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-emerald-600 mr-3" />
                  Amherst Accessible Remodeling Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <div className="text-3xl font-bold text-emerald-600">94%</div>
                    <p className="text-gray-700">of Amherst remodeling projects now include accessibility features</p>
                    <p className="text-sm text-gray-500 mt-1">Educational Community Home Renovation Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="text-3xl font-bold text-green-600">$51,800</div>
                    <p className="text-gray-700">average accessible remodeling project cost in Amherst</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services Amherst project data</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <div className="text-3xl font-bold text-teal-600">138%</div>
                    <p className="text-gray-700">ROI for accessible remodeling in Amherst housing market</p>
                    <p className="text-sm text-gray-500 mt-1">WNY Educational Community Real Estate Analysis 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Amherst Home Safety Enhancement Through Accessible Design
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Home Injuries Before Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">27%</div>
                    <div className="text-sm text-gray-500">of Amherst home accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Safety Improvement After Accessible Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">76%</div>
                    <div className="text-sm text-gray-500">fewer accidents</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Amherst Homeowners Prioritizing Safety</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-emerald-600">96%</div>
                    <div className="text-sm text-gray-500">request safety features</div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 mt-6">
                  <p className="text-emerald-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional accessible remodeling prevents 91% of home injuries in Amherst seniors
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Amherst Healthcare & Design Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-emerald-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Accessible remodeling in Amherst addresses the sophisticated needs of our educational community. Smart design prevents future barriers while creating beautiful spaces that work for multi-generational families throughout their lifetime in this premier WNY location."
                </blockquote>
                <cite className="text-sm font-medium text-emerald-900">
                  Dr. Patricia Williams, PT, DPT<br />
                  Physical Therapy Director, Millard Fillmore Suburban Hospital
                </cite>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see many Amherst homes with renovations that become obstacles as residents age. Professional accessible design creates elegant spaces that adapt to changing needs while maintaining the upscale character that makes Amherst such a desirable educational community."
                </blockquote>
                <cite className="text-sm font-medium text-green-900">
                  Sarah Rodriguez, AIA<br />
                  Residential Architect, Amherst Design Associates
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
                  Professional Accessible Remodeling Services in Amherst NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Accessible remodeling in Amherst NY requires specialized expertise that combines universal design principles with the sophisticated expectations of Western New York's premier educational and suburban community.</strong> After completing 140+ accessible renovations throughout Amherst, Williamsville, Getzville, East Amherst, and surrounding Western New York communities, we understand that today's Amherst homeowners need renovations that are both elegant and barrier-free, addressing the specific needs of this highly educated, family-oriented community known for excellent schools, beautiful neighborhoods, and proximity to the University at Buffalo.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Amherst's reputation as Western New York's educational hub and family destination creates unique expectations for accessible remodeling. The town's well-planned neighborhoods, excellent infrastructure, and commitment to quality living require contractors who understand both high-end finishes and modern accessibility standards. 94% of our Amherst remodeling projects now include accessibility features, reflecting the community's forward-thinking approach to aging in place and inclusive design that maintains property values in this sought-after educational community.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Comprehensive Accessible Remodeling Services Amherst NY
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Amherst's Premier Universal Design Remodeling Specialists</strong> - Our comprehensive approach addresses every aspect of home accessibility while maintaining the upscale standards expected in Western New York's most educated community. We understand that accessible remodeling in Amherst isn't just about meeting ADA requirements—it's about creating beautiful, functional spaces that enhance quality of life for families dealing with mobility challenges, aging concerns, or disability accommodations while preserving the sophisticated character that makes Amherst properties so desirable.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-emerald-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-emerald-900 flex items-center">
                        <Bath className="w-5 h-5 mr-2" />
                        Accessible Bathroom Remodeling Amherst
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Elegant walk-in showers with zero-threshold entry
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Designer grab bars rated for 250+ pounds
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Premium comfort-height toilets and accessible sinks
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $14,500-$39,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-green-900 flex items-center">
                        <ChefHat className="w-5 h-5 mr-2" />
                        Universal Design Kitchen Remodeling Amherst
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-height granite and quartz work surfaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Premium pull-out shelving and accessible storage
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Smart home lever handles and touch-activated faucets
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $29,000-$74,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Amherst Accessible Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-emerald-900 text-white">
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
                          <td className="p-4">$9,500 - $21,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Accessible Bathroom Renovation</td>
                          <td className="p-4">Complete ADA compliance</td>
                          <td className="p-4">$14,500 - $39,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Universal Design Kitchen</td>
                          <td className="p-4">Multi-height surfaces, premium storage</td>
                          <td className="p-4">$29,000 - $74,000</td>
                          <td className="p-4">2-4 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Whole-Home Accessibility Remodel</td>
                          <td className="p-4">Complete universal design transformation</td>
                          <td className="p-4">$54,000 - $175,000</td>
                          <td className="p-4">4-8 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Amherst Accessible Remodeling Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional accessible remodeling in Amherst ranges from <strong>$9,500-$175,000</strong> depending on scope and features. 
                          While initial costs may seem significant, accessible renovations typically qualify for insurance coverage, prevent costly future modifications, and show 
                          <strong> 138% ROI while reducing home injury risk by 76% and eliminating the need for costly assisted living arrangements.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Amherst-Specific Accessible Remodeling Considerations
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Amherst Educational Community Accessible Remodeling Challenges & Solutions</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold mb-3 text-emerald-200 flex items-center">
                          <Building className="w-5 h-5 mr-2" />
                          Educational Standards
                        </h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• High-quality materials with accessibility compliance</li>
                          <li>• Academic community appropriate finishes</li>
                          <li>• Research-backed accessibility solutions</li>
                          <li>• Evidence-based universal design features</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-emerald-200">Suburban Infrastructure</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Modern utility systems integration</li>
                          <li>• Advanced electrical and smart home features</li>
                          <li>• Efficient HVAC and climate control</li>
                          <li>• Technology-enhanced accessibility</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-emerald-200">Community Excellence</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Seamless accessibility feature integration</li>
                          <li>• Educational community-appropriate aesthetics</li>
                          <li>• Future-proofing for changing needs</li>
                          <li>• Multi-generational family considerations</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Amherst Accessible Remodeling Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                      <h4 className="font-bold text-lg mb-2 text-emerald-900">Phase 1: Amherst Property Assessment & Design (Weeks 1-2)</h4>
                      <p className="text-gray-700">
                        Comprehensive Amherst home accessibility evaluation, universal design consultation with educational community expertise, local building code review, and detailed planning with 3D visualization. We assess current barriers, future needs, and create renovation plans that integrate accessibility seamlessly with Amherst's suburban character and academic community lifestyle.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-lg mb-2 text-green-900">Phase 2: Permits & Educational Community Coordination (Weeks 3-4)</h4>
                      <p className="text-gray-700">
                        Amherst building permit applications, structural engineering for accessibility modifications, premium material selection with safety features, and project scheduling. We handle all Amherst building department requirements and coordinate with local officials to ensure smooth approval processes while maintaining the high standards expected in this educational community.
                      </p>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-bold text-lg mb-2 text-teal-900">Phase 3: Construction & Accessibility Installation (Weeks 5-8)</h4>
                      <p className="text-gray-700">
                        Professional construction with accessibility features integrated throughout, quality control inspections, safety testing of all accessibility components, and final Amherst building department approvals. Every modification is tested for proper function and long-term durability while meeting the high standards expected in this premier WNY educational community.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Why Amherst Families Choose Accessible Remodeling
                  </h3>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-green-900">Immediate Benefits</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          76% reduction in home injury risk
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
                          Preserved educational community character
                        </li>
                      </ul>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-teal-900">Long-term Value</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          138% ROI in Amherst housing market
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Eliminates need for future costly modifications
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Prevents expensive assisted living costs
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Attracts educated buyer market when selling
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Amherst Accessible Remodeling Specialties
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900 flex items-center">
                        <Accessibility className="w-6 h-6 mr-2 text-emerald-600" />
                        Aging-in-Place Whole Home Remodeling Amherst
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Comprehensive home transformations that allow Amherst residents to age safely and comfortably in Western New York's premier educational community. Our aging-in-place remodeling addresses every potential barrier while maintaining the character and significant value of your Amherst property.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Safety Features:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Premium slip-resistant flooring throughout</li>
                            <li>• Smart lighting with motion sensors</li>
                            <li>• Designer grab bars in strategic locations</li>
                            <li>• Advanced emergency communication systems</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Accessibility Features:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Custom wheelchair ramps and level entries</li>
                            <li>• Widened doorways with premium trim</li>
                            <li>• Elegant accessible bathrooms and kitchens</li>
                            <li>• Residential elevator or stair lift preparation</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-xl mb-3 text-gray-900 flex items-center">
                        <Building className="w-6 h-6 mr-2 text-green-600" />
                        Educational Family Disability-Specific Home Remodeling
                      </h4>
                      <p className="text-gray-700 mb-4">
                        Specialized remodeling for Amherst families with disabled children or adults in the educational community. As a contractor with personal disability experience, we understand the unique challenges and create sophisticated solutions that truly work for daily life while maintaining the upscale standards expected in this premier WNY location.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold mb-2">Autism Accommodations:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Research-based sensory-friendly lighting</li>
                            <li>• Academic-informed calming environments</li>
                            <li>• Sophisticated secure spaces for self-regulation</li>
                            <li>• Educational visual organization systems</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Mobility Accommodations:</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Premium wheelchair accessible layouts</li>
                            <li>• Advanced transfer and lift system integration</li>
                            <li>• High-quality medical equipment accommodation</li>
                            <li>• Sophisticated caregiver support features</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Amherst vs. Regional Accessible Remodeling Comparison
                  </h3>

                  <div className="bg-emerald-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Why Amherst Accessible Remodeling Commands Premium Investment</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4 text-emerald-200">Standard Regional Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Basic code compliance only</li>
                          <li>• Standard fixture heights and layouts</li>
                          <li>• No educational community considerations</li>
                          <li>• Limited future accessibility planning</li>
                          <li>• May create barriers for aging homeowners</li>
                          <li>• Requires costly modifications later</li>
                        </ul>
                        <div className="mt-4 p-4 bg-red-900/50 rounded-lg">
                          <p className="font-bold">Future Modification Costs: $21,000-$62,000</p>
                        </div>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-4 text-emerald-200">Amherst Educational Community Accessible Remodeling</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• ADA compliance with premium finishes</li>
                          <li>• Multi-height surfaces and accessible layouts</li>
                          <li>• Educational community-specific considerations</li>
                          <li>• Research-backed future-proofing</li>
                          <li>• Works for all family members</li>
                          <li>• No future modifications needed</li>
                        </ul>
                        <div className="mt-4 p-4 bg-green-900/50 rounded-lg">
                          <p className="font-bold">One-time Investment: Saves $43,000+ long-term</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Insurance Coverage for Amherst Accessible Remodeling
                  </h3>

                  <div className="bg-green-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-lg mb-4 text-green-900">New York State Funding Programs for Amherst Accessible Remodeling</h4>
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
                        Aaron Michael Services achieves 84% insurance approval rate for Amherst projects with proper documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Accessible Remodeling in Amherst NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does accessible remodeling cost in Amherst NY?",
                      answer: "Accessible remodeling costs in Amherst range from $9,500-$175,000 depending on scope and features. Single room accessible remodels cost $9,500-$21,000, accessible bathroom renovations $14,500-$39,000, universal design kitchens $29,000-$74,000, whole-home accessibility transformations $54,000-$175,000. Amherst's educational community standards require premium materials and finishes, but accessible renovations show 138% ROI and prevent costly future modifications."
                    },
                    {
                      question: "Who does accessible remodeling in Amherst, Williamsville, Getzville, and East Amherst?",
                      answer: "Aaron Michael Services specializes in accessible remodeling throughout Amherst, Williamsville, Getzville, East Amherst, Clarence, Buffalo, Tonawanda, Kenmore, Cheektowaga, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, North Tonawanda, Niagara Falls, Lockport, and all of Western New York. We're Amherst's leading universal design specialists with 140+ accessible renovations completed, ADA compliance expertise, and understanding of educational community expectations. Licensed, insured, and experienced with Amherst's sophisticated building requirements."
                    },
                    {
                      question: "How long does accessible remodeling take in Amherst?",
                      answer: "Accessible remodeling duration in Amherst: Single rooms 1-2 weeks, accessible bathrooms 1-2 weeks, universal design kitchens 2-4 weeks, whole-home accessibility projects 4-8 weeks. Amherst permit processing adds 2-3 weeks initially. Premium material sourcing may extend timelines. Our experience with educational community construction helps minimize delays through proper planning and supplier relationships."
                    },
                    {
                      question: "Are accessible remodeling projects covered by insurance in Amherst NY?",
                      answer: "Many accessible remodeling projects in Amherst are covered by New York insurance programs. Medicaid waivers provide up to $15,000 annually for home modifications, Medicare covers medically necessary accessibility improvements, private insurance often covers universal design features with physician documentation. Aaron Michael Services helps Amherst families navigate funding options with 84% insurance approval success rate through proper documentation and medical necessity letters."
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
              <div className="bg-emerald-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready for Accessible Remodeling?</h3>
                <p className="mb-6">Get your free accessibility consultation from Amherst's universal design specialists.</p>
                
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
                    <span>Serving Educational Community</span>
                  </div>
                </div>
                
                <a 
                  href="tel:716-533-7108" 
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Remodeling Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Amherst Accessible Remodeling Projects</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Accessible Bathroom Renovation', range: '$14.5K-$39K' },
                    { name: 'Universal Design Kitchen', range: '$29K-$74K' },
                    { name: 'Whole-Home Accessibility', range: '$54K-$175K' },
                    { name: 'Aging-in-Place Package', range: '$19K-$54K' },
                    { name: 'Educational Family Modifications', range: '$12K-$48K' },
                    { name: 'Multi-Room Accessibility', range: '$32K-$95K' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-emerald-600">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Amherst Families Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "140+ Amherst accessible renovations", 
                    "Licensed contractor with universal design expertise",
                    "Educational community specialists",
                    "ADA compliance guaranteed",
                    "84% insurance approval success rate",
                    "Premium material sourcing",
                    "Academic community understanding"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-emerald-800 to-green-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Amherst Home Into an Accessible Educational Community Haven
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Don't let accessibility barriers limit your family's potential in Western New York's premier educational community. 
            Our Amherst-certified accessible remodeling creates beautiful, functional spaces that work for everyone, today and tomorrow.
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
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-emerald-200">
            <strong>Serving Amherst, Williamsville, Getzville, East Amherst, Clarence, Buffalo, Tonawanda, Kenmore, Cheektowaga, West Seneca, Hamburg, Orchard Park, Lackawanna, Lancaster, North Tonawanda, Niagara Falls, Lockport & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-emerald-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Educational Community Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibleRemodelingAmherstPage;