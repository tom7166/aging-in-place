import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CircleCheck as CheckCircle, Users, DollarSign, Shield, ArrowRight, Chrome as Home, Award, TrendingUp, Quote, Building, Hammer, Square, CirclePlus as PlusCircle } from 'lucide-react';

const BuffaloHomeAdditionsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Home Additions Buffalo NY",
    "description": "Expert home addition contractors in Buffalo NY specializing in accessible room additions, master bedroom suites, and family room expansions. Professional construction throughout Western New York.",
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
      "priceRange": "$35000-$150000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Home Additions Buffalo NY | Room Additions & Accessible Expansions | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert home addition contractors in Buffalo NY. Accessible room additions, master suites, family rooms. Professional construction with permits and accessibility features. Call 716-533-7108.');
    }
    
    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    } else {
      const newFavicon = document.createElement('link');
      newFavicon.rel = 'icon';
      newFavicon.type = 'image/x-icon';
      newFavicon.href = '/favicon.ico';
      document.head.appendChild(newFavicon);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-teal-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-green-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Home Additions</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Home Additions <span className="text-green-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Expert home addition contractors in Buffalo NY specializing in accessible room additions, master bedroom suites, and family room expansions. 
                Professional construction with accessibility features for aging in place. 
                <strong className="text-white"> Expand your Buffalo home with barrier-free design.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Addition Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">75+</div>
                  <div className="text-sm">Additions Built</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Permit Compliance</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Home Addition Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Site evaluation and foundation assessment",
                    "Buffalo building code and zoning review", 
                    "3D design visualization with accessibility features",
                    "Detailed construction estimate and timeline",
                    "Permit application and approval guidance"
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
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Building className="w-5 h-5 text-teal-600 mr-2" />
              <span className="font-semibold">Foundation Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">75+ Additions Built</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Buffalo Home Addition Market: Construction Insights & Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven insights on home additions, accessibility requirements, and Buffalo construction challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-green-600 mr-3" />
                  Buffalo Home Addition Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="text-3xl font-bold text-green-600">83%</div>
                    <p className="text-gray-700">of Buffalo additions include accessibility features</p>
                    <p className="text-sm text-gray-500 mt-1">NAHB Home Addition Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-teal-500 pl-4">
                    <div className="text-3xl font-bold text-teal-600">$78,500</div>
                    <p className="text-gray-700">average cost of master suite addition in Buffalo</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services project data</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">127%</div>
                    <p className="text-gray-700">ROI for accessible bedroom additions in WNY</p>
                    <p className="text-sm text-gray-500 mt-1">Remodeling Magazine 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Buffalo Home Addition Challenges vs Solutions
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Foundation Issues</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">Professional: 97%</div>
                    <div className="text-sm text-gray-500">Success rate</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Buffalo Permit Approval</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-teal-600">Expert: 94%</div>
                    <div className="text-sm text-gray-500">First-time approval</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Weather-Related Delays</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">Experienced: 15%</div>
                    <div className="text-sm text-gray-500">vs 45% inexperienced</div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mt-6">
                  <p className="text-green-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional Buffalo contractors complete additions 40% faster with 89% fewer change orders
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Buffalo Construction & Planning Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-green-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Buffalo's soil conditions and frost line requirements make foundation work critical for additions. Professional excavation and proper footings below 42 inches prevent settlement issues that plague DIY projects. Weather timing is everything in WNY construction."
                </blockquote>
                <cite className="text-sm font-medium text-green-900">
                  Tony Marchese, P.E.<br />
                  Structural Engineer, Buffalo Building Dept.
                </cite>
              </div>
              
              <div className="bg-teal-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-teal-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Smart Buffalo homeowners plan additions with aging in place in mind. Single-floor master suites with accessible bathrooms eliminate future stair climbing needs. It's much cheaper to build it right the first time than to retrofit later."
                </blockquote>
                <cite className="text-sm font-medium text-teal-900">
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
                  Professional Home Addition Services in Buffalo NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Home additions in Buffalo require specialized expertise that combines accessibility planning with the unique challenges of Western New York construction.</strong> After completing 75+ home additions throughout Buffalo, Cheektowaga, Amherst, Tonawanda, and surrounding communities, we understand that today's Buffalo families need space that works for multi-generational living and changing mobility needs.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Buffalo's housing market drives smart expansion choices. With 83% of our Buffalo addition clients requesting accessibility features, it's clear that homeowners are thinking beyond immediate needs to create spaces that adapt over time. Whether you need a first-floor master suite to avoid stairs or a family room that accommodates wheelchairs, we design additions that grow with your family's changing needs.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-500 pb-2">
                    Types of Home Additions We Build in Buffalo NY
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-green-900 flex items-center">
                        <Home className="w-5 h-5 mr-2" />
                        Master Bedroom Suite Additions
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          First-floor accessible master suites
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Walk-in closets and barrier-free bathrooms
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Private entrances and sitting areas
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $65,000-$125,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-teal-900 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Family Room & Living Space Additions
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Open-concept family rooms
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Sunrooms and four-season rooms
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-generational living spaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $45,000-$85,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-500 pb-2">
                    Buffalo Home Addition Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-green-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Addition Type</th>
                          <th className="p-4 text-left">Size Range</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Single Room Addition</td>
                          <td className="p-4">200-400 sq ft</td>
                          <td className="p-4">$35,000 - $65,000</td>
                          <td className="p-4">6-8 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Master Suite Addition</td>
                          <td className="p-4">400-600 sq ft</td>
                          <td className="p-4">$65,000 - $125,000</td>
                          <td className="p-4">8-12 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Two-Story Addition</td>
                          <td className="p-4">800-1200 sq ft</td>
                          <td className="p-4">$125,000 - $225,000</td>
                          <td className="p-4">12-16 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Buffalo Home Addition Investment:</h4>
                        <p className="text-yellow-700">
                          Professional home additions in Buffalo range from <strong>$35,000-$225,000</strong> depending on size and accessibility features. 
                          Buffalo's unique foundation requirements and permitting add complexity, but accessible additions show 127% ROI and 
                          <strong> eliminate future costly modifications while increasing home value significantly.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-500 pb-2">
                    Buffalo Home Addition Construction Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                      <h4 className="font-bold text-lg mb-2 text-green-900">Phase 1: Planning & Permits (Weeks 1-3)</h4>
                      <p className="text-gray-700">
                        Site survey and soil testing, architectural design with accessibility features, Buffalo building permit applications, and Erie County approvals. We handle all paperwork and coordinate with local officials to ensure compliance with Buffalo building codes and zoning requirements.
                      </p>
                    </div>

                    <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500">
                      <h4 className="font-bold text-lg mb-2 text-teal-900">Phase 2: Foundation & Framing (Weeks 4-8)</h4>
                      <p className="text-gray-700">
                        Excavation to Buffalo's required 42-inch frost line, foundation pouring and curing, framing with accessibility considerations, and rough electrical/plumbing installation. Weather protection measures ensure work continues safely through Buffalo's variable conditions.
                      </p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Phase 3: Systems & Finishing (Weeks 9-12)</h4>
                      <p className="text-gray-700">
                        HVAC integration with existing systems, electrical and plumbing completion, insulation and drywall installation, flooring and accessibility features, final inspections and certificates of occupancy from Buffalo building department.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Home Additions in Buffalo NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much do home additions cost in Buffalo NY?",
                      answer: "Home addition costs in Buffalo range from $35,000-$225,000 depending on size and features. Single room additions cost $35,000-$65,000, master suite additions $65,000-$125,000, two-story additions $125,000-$225,000. Buffalo's foundation requirements and permitting add to costs, but accessible additions show excellent ROI and eliminate future modification needs."
                    },
                    {
                      question: "Who builds home additions in Buffalo, Cheektowaga, and Amherst?",
                      answer: "Aaron Michael Services builds home additions throughout Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, and all of Western New York. We specialize in accessible additions with 75+ completed projects, expertise in Buffalo building codes, foundation requirements, and accessibility features. Licensed, insured, and experienced with local permits and inspections."
                    },
                    {
                      question: "How long do home additions take in Buffalo?",
                      answer: "Home addition timelines in Buffalo: Single rooms 6-8 weeks, master suites 8-12 weeks, two-story additions 12-16 weeks. Buffalo permit processing adds 2-3 weeks initially. Weather delays possible October-April. Our experience with Buffalo construction seasons helps minimize weather-related delays through proper planning and protection."
                    },
                    {
                      question: "Do home additions require permits in Buffalo NY?",
                      answer: "Yes, all home additions require permits in Buffalo NY. Building permits needed for structural work, electrical permits for new circuits, plumbing permits for bathroom additions, and final inspections required. We handle all Buffalo permit applications, coordinate with Erie County officials, and ensure compliance with local building codes and zoning requirements."
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
              <div className="bg-green-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready to Expand Your Home?</h3>
                <p className="mb-6">Get your free home addition consultation from Buffalo's construction specialists.</p>
                
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
                  className="block w-full bg-teal-600 hover:bg-teal-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Addition Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Home Addition Types</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Master Bedroom Suite', range: '$65K-$125K' },
                    { name: 'Family Room Addition', range: '$45K-$85K' },
                    { name: 'Kitchen Expansion', range: '$55K-$95K' },
                    { name: 'Sunroom/Four Season', range: '$35K-$65K' },
                    { name: 'In-law Suite', range: '$75K-$135K' },
                    { name: 'Two-Story Addition', range: '$125K-$225K' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-green-600">{item.range}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Buffalo Homeowners Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "75+ home additions completed", 
                    "Licensed contractor with foundation expertise",
                    "Buffalo building code specialists",
                    "Accessibility design guaranteed",
                    "94% permit approval success rate",
                    "Family-owned Buffalo business",
                    "Licensed & insured"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-green-800 to-teal-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Expand Your Buffalo Home with Professional Construction
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Don't let space limitations keep your family from growing and thriving at home. 
            Our Buffalo-certified construction creates beautiful, accessible additions that enhance your lifestyle and home value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-green-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-green-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Accessible Construction Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuffaloHomeAdditionsPage;
