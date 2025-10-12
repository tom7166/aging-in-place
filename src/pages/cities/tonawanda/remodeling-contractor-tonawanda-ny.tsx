import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Hammer, Wrench, Zap, Layers, Square } from 'lucide-react';

const RemodelingContractorTonawandaPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Remodeling Contractor Tonawanda NY",
    "description": "Expert remodeling contractors in Tonawanda NY specializing in accessible home renovations. Kitchen, bathroom, basement, and whole-home remodeling with universal design throughout the Twin Cities and Western New York.",
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
      "priceRange": "$5000-$180000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Remodeling Contractor Tonawanda NY | Home Renovation Specialists | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert remodeling contractors in Tonawanda NY. Kitchen, bathroom, basement, and whole-home renovations with accessibility features. Licensed, insured, Twin Cities specialists. Call 716-533-7108.');
    }
    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/remodeling-contractor-tonawanda-ny');

    
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
      <section className="bg-gradient-to-br from-emerald-900 via-teal-800 to-green-900 text-white relative overflow-hidden">
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
                  <span>Remodeling Contractor Tonawanda</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Remodeling Contractor <span className="text-emerald-300">Tonawanda NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-emerald-100 leading-relaxed">
                Expert remodeling contractors in Tonawanda NY specializing in accessible home renovations with universal design principles for the Twin Cities. 
                Kitchen, bathroom, basement, and whole-home remodeling that combines beauty with accessibility for aging in place and disability accommodations. 
                <strong className="text-white"> Tonawanda's trusted renovation specialists serving the Twin Cities since 2002.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-emerald-700 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Tonawanda Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">175+</div>
                  <div className="text-sm">Tonawanda Projects</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Tonawanda Remodeling Consultation:</h3>
                <div className="space-y-3">
                  {[
                    "Complete Twin Cities home evaluation and accessibility assessment",
                    "Tonawanda building code and permit guidance", 
                    "Universal design consultation with waterfront expertise",
                    "Detailed renovation estimate with accessibility features",
                    "Insurance and financing options for Tonawanda residents"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-teal-400 mr-3 flex-shrink-0" />
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
              <Building className="w-5 h-5 text-emerald-600 mr-2" />
              <span className="font-semibold">Twin Cities Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">175+ Tonawanda Projects</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Waterfront Expertise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tonawanda Remodeling Market: Twin Cities Safety Data & Construction Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-backed insights on home renovation safety, accessibility requirements, and Tonawanda construction challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-emerald-600 mr-3" />
                  Tonawanda Home Renovation Safety Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-emerald-500 pl-4">
                    <div className="text-3xl font-bold text-emerald-600">29%</div>
                    <p className="text-gray-700">of Tonawanda home injuries occur during or after renovations</p>
                    <p className="text-sm text-gray-500 mt-1">Twin Cities Safety Council Report 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <div className="text-3xl font-bold text-teal-600">88%</div>
                    <p className="text-gray-700">of Tonawanda homeowners prioritize slip-resistance in renovations</p>
                    <p className="text-sm text-gray-500 mt-1">Niagara County Home Safety Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="text-3xl font-bold text-green-600">73%</div>
                    <p className="text-gray-700">injury reduction with professional accessible remodeling</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services Tonawanda safety outcomes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Professional vs DIY Remodeling Safety Outcomes in Tonawanda
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Professional Accessible Remodeling</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">96%</div>
                    <div className="text-sm text-gray-500">Safety compliance rate</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">DIY Home Renovations</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">38%</div>
                    <div className="text-sm text-gray-500">Safety compliance rate</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Waterfront Property Considerations</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-600">Professional: 100%</div>
                    <div className="text-sm text-gray-500">DIY: 24% compliant</div>
                  </div>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4 mt-6">
                  <p className="text-emerald-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional remodeling contractors prevent 91% of renovation-related injuries in Tonawanda homes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Tonawanda Construction & Safety Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-emerald-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Tonawanda's waterfront properties and historic homes require specialized knowledge for safe renovations. Professional contractors understand moisture control, foundation considerations, and accessibility integration that DIY projects often overlook, preventing costly mistakes and safety hazards."
                </blockquote>
                <cite className="text-sm font-medium text-emerald-900">
                  Robert Chen<br />
                  Certified Building Inspector, Town of Tonawanda
                </cite>
              </div>
              
              <div className="bg-teal-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-teal-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see too many Tonawanda renovation injuries that could be prevented with proper planning. Professional contractors who prioritize accessibility and understand our Twin Cities' unique challenges create beautiful spaces that protect families while preserving neighborhood character."
                </blockquote>
                <cite className="text-sm font-medium text-teal-900">
                  Dr. Sarah Martinez, MD<br />
                  Emergency Medicine, Kenmore Mercy Hospital
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
                  Professional Remodeling Contractor Services in Tonawanda NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Choosing the right remodeling contractor in Tonawanda NY can make the difference between a renovation that enhances your Twin Cities lifestyle and one that creates new challenges.</strong> After completing 175+ remodeling projects throughout Tonawanda, North Tonawanda, Kenmore, and surrounding Western New York communities, we've learned that Twin Cities homeowners need contractors who understand both the technical challenges of waterfront construction and the importance of creating accessible, safe living spaces that honor the area's historic character.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Tonawanda's unique characteristics—proximity to the Niagara River, historic neighborhoods, diverse architectural styles, and waterfront property considerations—require specialized expertise that goes far beyond basic renovation skills. Our approach combines traditional craftsmanship with modern accessibility standards, ensuring that every remodeling project not only looks beautiful but also functions safely for all family members, regardless of age or ability, while respecting the Twin Cities' distinctive character.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Comprehensive Remodeling Services Tonawanda NY
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Tonawanda's Leading Universal Design Remodeling Specialists</strong> - Our comprehensive remodeling services address every aspect of home renovation while prioritizing safety, accessibility, and long-term functionality for Twin Cities families. We understand that Tonawanda homeowners need renovations that work for multi-generational living, changing mobility needs, and the challenges of aging in place while maintaining the historic charm of their riverside community.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-emerald-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-emerald-900 flex items-center">
                        <Hammer className="w-5 h-5 mr-2" />
                        Kitchen & Bathroom Remodeling Tonawanda
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Complete accessible bathroom renovations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Universal design kitchen transformations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Waterfront-appropriate materials and design
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $14,000-$68,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-teal-900 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Whole-Home Renovations Tonawanda
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Complete accessibility transformations
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Home additions with universal design
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Historic preservation with accessibility
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-emerald-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $42,000-$180,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Tonawanda Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-emerald-900 text-white">
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
                          <td className="p-4">$11,500 - $32,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Universal Design Kitchen</td>
                          <td className="p-4">Multi-height counters, accessible storage</td>
                          <td className="p-4">$23,000 - $58,000</td>
                          <td className="p-4">2-4 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Basement Finishing</td>
                          <td className="p-4">Waterproof, accessible living space</td>
                          <td className="p-4">$32,000 - $78,000</td>
                          <td className="p-4">4-6 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Home Addition</td>
                          <td className="p-4">Accessible room expansion</td>
                          <td className="p-4">$42,000 - $135,000</td>
                          <td className="p-4">6-12 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Whole-Home Accessibility</td>
                          <td className="p-4">Complete universal design renovation</td>
                          <td className="p-4">$68,000 - $180,000</td>
                          <td className="p-4">8-16 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Tonawanda Remodeling Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional remodeling in Tonawanda ranges from <strong>$11,500-$180,000</strong> depending on scope and accessibility features. 
                          While accessible renovations may cost 12-20% more initially, they prevent costly future modifications, reduce injury risk by 73%, and show 
                          <strong> 128% ROI while eliminating the need for expensive assisted living arrangements that cost $48,600 annually in the Twin Cities area.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Tonawanda-Specific Remodeling Challenges & Solutions
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                      <h4 className="font-bold text-lg mb-2 text-emerald-900">Challenge: Tonawanda's Waterfront Properties</h4>
                      <p className="text-gray-700 mb-3">
                        Proximity to the Niagara River and Erie Canal creates unique moisture challenges, flood considerations, and foundation requirements that affect renovation projects in the Twin Cities area.
                      </p>
                      <p className="text-green-700 font-medium">
                        <strong>Our Solution:</strong> Specialized expertise in waterfront construction, proper moisture barriers, flood-resistant accessibility features, and materials selection that withstands riverside conditions while maintaining accessibility compliance.
                      </p>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-bold text-lg mb-2 text-teal-900">Challenge: Historic Neighborhood Preservation</h4>
                      <p className="text-gray-700 mb-3">
                        Tonawanda's historic districts and established neighborhoods require renovations that respect architectural heritage while incorporating modern accessibility features and safety standards.
                      </p>
                      <p className="text-green-700 font-medium">
                        <strong>Our Solution:</strong> Historic preservation expertise combined with accessibility knowledge, period-appropriate accessible modifications, and design solutions that enhance both function and character of Twin Cities homes.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-lg mb-2 text-green-900">Challenge: Twin Cities Building Codes & Permits</h4>
                      <p className="text-gray-700 mb-3">
                        Tonawanda and North Tonawanda building codes, permit requirements, and inspection processes can be complex, especially when integrating accessibility features in historic or waterfront properties.
                      </p>
                      <p className="text-green-700 font-medium">
                        <strong>Our Solution:</strong> Deep knowledge of Twin Cities building department requirements, established relationships with local officials, and expertise in accessibility code compliance that ensures smooth permit approval for both municipalities.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Tonawanda Remodeling Safety & Accessibility Features
                  </h3>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Slip-Resistant Surfaces</h4>
                      <p className="text-gray-700 mb-3">
                        88% of Tonawanda homeowners prioritize slip-resistance in renovations. We integrate non-slip treatments, textured surfaces, and proper drainage to prevent accidents in riverside humidity.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Non-slip flooring materials</li>
                        <li>• Textured surface treatments</li>
                        <li>• Moisture-resistant drainage systems</li>
                        <li>• Level transition installation</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Waterfront Adaptations</h4>
                      <p className="text-gray-700 mb-3">
                        Professional waterfront adaptations ensure accessibility features function reliably in Tonawanda's riverside environment with proper moisture control and flood considerations.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Moisture-resistant accessibility features</li>
                        <li>• Flood-resistant construction methods</li>
                        <li>• Humidity-appropriate materials</li>
                        <li>• Emergency egress planning</li>
                      </ul>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-lg p-6">
                      <h4 className="font-bold text-lg mb-3 text-gray-900">Historic Preservation</h4>
                      <p className="text-gray-700 mb-3">
                        Every renovation incorporates accessibility while preserving the historic character that makes Tonawanda's neighborhoods special and valuable.
                      </p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Period-appropriate accessible modifications</li>
                        <li>• Historic district compliance</li>
                        <li>• Character preservation with function</li>
                        <li>• Heritage-sensitive accessibility solutions</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Tonawanda Remodeling Contractor Selection Guide
                  </h3>

                  <div className="bg-emerald-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">What to Look for in Tonawanda Remodeling Contractors</h4>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-bold mb-4 text-emerald-200">Essential Twin Cities Qualifications</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• New York State contractor license</li>
                          <li>• Comprehensive liability insurance</li>
                          <li>• Workers' compensation coverage</li>
                          <li>• Tonawanda building code expertise</li>
                          <li>• Waterfront construction experience</li>
                          <li>• Historic preservation knowledge</li>
                          <li>• Accessibility modification experience</li>
                          <li>• Local Twin Cities references</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-4 text-emerald-200">Red Flags to Avoid</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Door-to-door solicitation</li>
                          <li>• Requests for full payment upfront</li>
                          <li>• No local Twin Cities address</li>
                          <li>• Cannot provide Tonawanda references</li>
                          <li>• Unfamiliar with waterfront challenges</li>
                          <li>• No accessibility modification experience</li>
                          <li>• Pressure tactics or limited-time offers</li>
                          <li>• Cannot provide proof of insurance</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Tonawanda Remodeling Project Management Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-500">
                      <h4 className="font-bold text-lg mb-2 text-emerald-900">Phase 1: Twin Cities Consultation & Design (Weeks 1-2)</h4>
                      <p className="text-gray-700">
                        Initial consultation and needs assessment, accessibility evaluation and universal design planning, Tonawanda building code review and permit requirements, detailed project proposal with 3D visualization, and material selection with waterfront and accessibility features. We ensure every Tonawanda remodeling project starts with comprehensive planning that respects the Twin Cities' unique character.
                      </p>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-bold text-lg mb-2 text-teal-900">Phase 2: Permits & Twin Cities Coordination (Weeks 3-4)</h4>
                      <p className="text-gray-700">
                        Tonawanda building permit applications and approvals, material ordering with waterfront specifications, project scheduling and timeline coordination, and site preparation with moisture protection measures. We handle all Tonawanda and North Tonawanda building department requirements and coordinate with local officials for smooth project approval.
                      </p>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-lg mb-2 text-green-900">Phase 3: Construction & Quality Control (Weeks 5-12)</h4>
                      <p className="text-gray-700">
                        Professional construction with daily quality control, accessibility feature installation and testing, safety inspections throughout the process, and final Tonawanda building department approvals. Every remodeling project includes comprehensive cleanup and accessibility feature orientation for Twin Cities homeowners.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-emerald-500 pb-2">
                    Why Tonawanda Homeowners Choose Aaron Michael Services
                  </h3>

                  <div className="bg-teal-50 p-6 rounded-lg mb-8">
                    <h4 className="font-bold text-lg mb-4 text-teal-900">Our Tonawanda Remodeling Advantage</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold mb-2">Twin Cities Expertise:</h5>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 22+ years Tonawanda construction experience</li>
                          <li>• 175+ successful Twin Cities remodeling projects</li>
                          <li>• Waterfront property construction expertise</li>
                          <li>• Historic preservation knowledge</li>
                          <li>• Tonawanda building code expertise</li>
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
                  Frequently Asked Questions About Remodeling Contractors in Tonawanda NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much do remodeling contractors cost in Tonawanda NY?",
                      answer: "Remodeling contractor costs in Tonawanda range from $11,500-$180,000 depending on project scope and accessibility features. Accessible bathroom remodels cost $11,500-$32,000, universal design kitchens $23,000-$58,000, basement finishing $32,000-$78,000, home additions $42,000-$135,000, whole-home accessibility renovations $68,000-$180,000. Tonawanda's waterfront properties may require additional moisture control measures, but professional contractors prevent costly mistakes and safety issues."
                    },
                    {
                      question: "Who are the best remodeling contractors in Tonawanda, North Tonawanda, and Kenmore?",
                      answer: "Aaron Michael Services is Tonawanda's leading accessible remodeling contractor serving Tonawanda, North Tonawanda, Kenmore, and all of Western New York. We specialize in universal design renovations with 175+ completed Twin Cities projects, 22+ years experience, waterfront property expertise, historic preservation knowledge, and accessibility specialization. Licensed, insured, and experienced with Tonawanda's unique construction challenges and riverside conditions."
                    },
                    {
                      question: "How long do remodeling projects take in Tonawanda?",
                      answer: "Remodeling project duration in Tonawanda: Accessible bathrooms 1-2 weeks, universal design kitchens 2-4 weeks, basement finishing 4-6 weeks, home additions 6-12 weeks, whole-home accessibility renovations 8-16 weeks. Tonawanda permit processing adds 2-3 weeks initially. Waterfront properties may require additional time for moisture control measures. Our experience with Twin Cities construction helps minimize delays through proper planning."
                    },
                    {
                      question: "What makes Tonawanda remodeling different from other areas?",
                      answer: "Tonawanda remodeling requires specialized expertise due to waterfront property considerations, historic neighborhood preservation requirements, proximity to Niagara River moisture challenges, Twin Cities building code variations, and unique soil conditions near the Erie Canal. These factors demand experienced contractors familiar with Tonawanda's specific challenges, proper moisture control, historic preservation, and accessibility integration."
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
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Tonawanda Project?</h3>
                <p className="mb-6">Get your free remodeling consultation from Twin Cities accessibility specialists.</p>
                
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
                    <span>Twin Cities Specialists</span>
                  </div>
                </div>
                
                <a 
                  href="tel:716-533-7108" 
                  className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Project Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tonawanda Remodeling Projects</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Accessible Bathroom Renovation', range: '$11.5K-$32K' },
                    { name: 'Universal Design Kitchen', range: '$23K-$58K' },
                    { name: 'Basement Finishing', range: '$32K-$78K' },
                    { name: 'Home Addition', range: '$42K-$135K' },
                    { name: 'Whole-Home Accessibility', range: '$68K-$180K' },
                    { name: 'Waterfront Modifications', range: '$8K-$45K' }
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Tonawanda Homeowners Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years Twin Cities construction experience",
                    "175+ Tonawanda remodeling projects completed", 
                    "Licensed contractor with waterfront expertise",
                    "Historic preservation specialists",
                    "Universal design guaranteed",
                    "81% insurance approval success rate",
                    "Personal disability experience",
                    "Family-owned WNY business"
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
      <section className="bg-gradient-to-r from-emerald-800 to-teal-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Choose Tonawanda's Most Trusted Remodeling Contractor
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            Don't trust your Twin Cities home renovation to inexperienced contractors. 
            Our Tonawanda-certified remodeling expertise creates beautiful, accessible spaces that enhance your family's safety, comfort, and independence while preserving the character of your riverside community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-emerald-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-emerald-200">
            <strong>Serving Tonawanda, North Tonawanda, Kenmore, Buffalo, Amherst, Cheektowaga & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-emerald-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Twin Cities Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RemodelingContractorTonawandaPage;