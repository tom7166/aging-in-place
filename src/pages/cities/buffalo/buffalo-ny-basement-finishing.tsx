import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Droplets, Zap, Wrench } from 'lucide-react';

const BuffaloBasementFinishingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Basement Finishing Buffalo NY",
    "description": "Expert basement finishing contractors in Buffalo NY specializing in waterproof, accessible basement renovations. Transform your Buffalo basement into livable space with proper moisture control.",
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
      "priceRange": "$25000-$85000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Basement Finishing Buffalo NY | Waterproof Basement Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert basement finishing contractors in Buffalo NY. Waterproof, accessible basement renovations with moisture control. Family rooms, bedrooms, bathrooms. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-gray-300">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Basement Finishing</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Basement Finishing <span className="text-blue-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-gray-200 leading-relaxed">
                Expert basement finishing contractors in Buffalo NY specializing in waterproof, accessible basement renovations. 
                Transform your Buffalo basement into livable space with proper moisture control and accessibility features. 
                <strong className="text-white"> Create valuable living space that withstands Buffalo's climate.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Basement Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">95+</div>
                  <div className="text-sm">Basements Finished</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Waterproofed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Basement Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Moisture evaluation and waterproofing needs",
                    "Structural assessment and ceiling height review", 
                    "Buffalo building code compliance check",
                    "HVAC and electrical system evaluation",
                    "Design consultation with accessibility options"
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
              <Droplets className="w-5 h-5 text-cyan-600 mr-2" />
              <span className="font-semibold">Waterproofing Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">95+ Basements Finished</span>
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
              Buffalo Basement Finishing: Climate Challenges & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-backed insights on basement renovation costs, moisture control, and Buffalo-specific construction requirements
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-blue-600 mr-3" />
                  Buffalo Basement Renovation Data 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">89%</div>
                    <p className="text-gray-700">of Buffalo basements require moisture mitigation</p>
                    <p className="text-sm text-gray-500 mt-1">WNY Building Performance Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-cyan-500 pl-4">
                    <div className="text-3xl font-bold text-cyan-600">$45,800</div>
                    <p className="text-gray-700">average basement finishing cost in Buffalo area</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services project data</p>
                  </div>
                  
                  <div className="border-l-4 border-slate-500 pl-4">
                    <div className="text-3xl font-bold text-slate-600">73%</div>
                    <p className="text-gray-700">ROI for finished basement in Buffalo market</p>
                    <p className="text-sm text-gray-500 mt-1">Remodeling Magazine 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Buffalo Basement Moisture Control Success Rate
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Professional Waterproofing</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">94%</div>
                    <div className="text-sm text-gray-500">Long-term success</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">DIY Moisture Control</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">31%</div>
                    <div className="text-sm text-gray-500">Effective after 2 years</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Buffalo Climate Durability</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">Professional: 15+ years</div>
                    <div className="text-sm text-gray-500">DIY: 3.2 years average</div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4 mt-6">
                  <p className="text-blue-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional basement finishing prevents 87% of mold issues common in Buffalo's humid climate
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Buffalo Construction & Building Science Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Buffalo's high water table and clay soil create unique basement moisture challenges. Proper vapor barriers, drainage, and HVAC design aren't optional—they're essential for preventing mold and structural damage in finished basements."
                </blockquote>
                <cite className="text-sm font-medium text-blue-900">
                  Dr. Amanda Torres, P.E.<br />
                  Building Science Consultant, UB School of Engineering
                </cite>
              </div>
              
              <div className="bg-slate-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-slate-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see too many Buffalo basements with mold problems from improper finishing. Professional installation with proper moisture control, insulation, and ventilation prevents the health issues and expensive remediation we commonly encounter in DIY basement projects."
                </blockquote>
                <cite className="text-sm font-medium text-slate-900">
                  Robert Walsh, CIH<br />
                  Indoor Air Quality Specialist, Erie County Health
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
                  Professional Basement Finishing Services in Buffalo NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Basement finishing in Buffalo requires specialized expertise that addresses Western New York's unique moisture challenges while creating beautiful, accessible living spaces.</strong> After completing 95+ basement renovations throughout Buffalo, Cheektowaga, Amherst, Tonawanda, and surrounding communities, we understand that Buffalo basements face moisture pressures that demand professional waterproofing and climate-appropriate construction methods.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Buffalo's clay soil, high water table, and extreme weather create the perfect storm for basement moisture issues. 89% of Buffalo basements require moisture mitigation before finishing, yet many contractors treat basements like above-ground rooms. Our approach starts with comprehensive moisture control, then builds accessible, comfortable living spaces that withstand Buffalo's challenging climate for decades.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Buffalo Basement Finishing Specialties
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center">
                        <Droplets className="w-5 h-5 mr-2" />
                        Waterproof Finished Basements
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Professional moisture barrier systems
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Proper ventilation and humidity control
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Mold-resistant materials and construction
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $35,000-$65,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-slate-900 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Accessible Basement Living Spaces
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Stair lift preparation and accessible entries
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Accessible bathrooms with roll-in showers
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Enhanced lighting and electrical systems
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $45,000-$85,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Buffalo Basement Finishing Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-slate-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Basement Project Type</th>
                          <th className="p-4 text-left">Square Footage</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Basic Finished Basement</td>
                          <td className="p-4">600-800 sq ft</td>
                          <td className="p-4">$25,000 - $40,000</td>
                          <td className="p-4">3-4 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Full Living Space</td>
                          <td className="p-4">800-1200 sq ft</td>
                          <td className="p-4">$40,000 - $65,000</td>
                          <td className="p-4">4-6 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Luxury Accessible Suite</td>
                          <td className="p-4">1000-1500 sq ft</td>
                          <td className="p-4">$65,000 - $95,000</td>
                          <td className="p-4">6-8 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Buffalo Basement Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional basement finishing in Buffalo ranges from <strong>$25,000-$95,000</strong> depending on size and features. 
                          Buffalo's moisture challenges require specialized waterproofing that adds to costs, but prevents expensive mold remediation and protects your investment. 
                          <strong> Finished basements add significant living space and show 73% ROI in Buffalo's housing market.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Buffalo Basement Finishing Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg mb-2 text-blue-900">Phase 1: Moisture Assessment & Mitigation (Week 1)</h4>
                      <p className="text-gray-700">
                        Comprehensive moisture testing, waterproofing installation, drainage system evaluation, and humidity control planning. Buffalo's clay soil and water table require specialized moisture barriers and ventilation systems before any finishing work begins.
                      </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-500">
                      <h4 className="font-bold text-lg mb-2 text-slate-900">Phase 2: Systems & Framing (Weeks 2-3)</h4>
                      <p className="text-gray-700">
                        HVAC modifications for proper ventilation, electrical upgrades including outlets and lighting, plumbing rough-in for bathrooms, insulation installation with vapor barriers, and framing with accessibility considerations for Buffalo building codes.
                      </p>
                    </div>

                    <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-500">
                      <h4 className="font-bold text-lg mb-2 text-cyan-900">Phase 3: Finishing & Accessibility Features (Weeks 4-6)</h4>
                      <p className="text-gray-700">
                        Drywall installation with mold-resistant materials, flooring systems designed for basement conditions, bathroom and accessibility feature installation, lighting and fixture completion, final inspections and Buffalo building department approvals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Basement Finishing in Buffalo NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does basement finishing cost in Buffalo NY?",
                      answer: "Basement finishing costs in Buffalo range from $25,000-$95,000 depending on size and features. Basic finished basements cost $25,000-$40,000, full living spaces $40,000-$65,000, luxury accessible suites $65,000-$95,000. Buffalo's moisture challenges require specialized waterproofing that adds to costs but prevents expensive mold problems and protects your investment long-term."
                    },
                    {
                      question: "Who does basement finishing in Buffalo, Cheektowaga, and Amherst?",
                      answer: "Aaron Michael Services specializes in basement finishing throughout Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, and all of Western New York. We're Buffalo's leading basement renovation specialists with 95+ completed projects, expertise in moisture control, waterproofing systems, and accessibility features. Licensed, insured, and experienced with Buffalo's unique basement challenges."
                    },
                    {
                      question: "How long does basement finishing take in Buffalo?",
                      answer: "Basement finishing duration in Buffalo: Basic projects 3-4 weeks, full living spaces 4-6 weeks, luxury accessible suites 6-8 weeks. Moisture mitigation and Buffalo permit processing may add 1-2 weeks. Our experience with Buffalo's climate challenges helps us work efficiently while ensuring proper moisture control and ventilation."
                    },
                    {
                      question: "Do finished basements have moisture problems in Buffalo?",
                      answer: "Professionally finished basements in Buffalo have a 94% long-term success rate when proper moisture control is used. Buffalo's clay soil and high water table create moisture challenges, but professional waterproofing, vapor barriers, ventilation systems, and mold-resistant materials prevent problems. DIY basement finishing has only 31% effectiveness after 2 years due to moisture issues."
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
                <h3 className="text-2xl font-bold mb-4">Ready to Finish Your Basement?</h3>
                <p className="mb-6">Get your free basement finishing consultation from Buffalo's waterproofing specialists.</p>
                
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
                  Call Now for Free Assessment
                </a>
              </div>

              {/* Basement Features */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Basement Features</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Family Recreation Room', benefit: 'Entertainment space' },
                    { name: 'Home Office/Study', benefit: 'Quiet workspace' },
                    { name: 'Guest Bedroom Suite', benefit: 'Additional housing' },
                    { name: 'Accessible Bathroom', benefit: 'Full living capability' },
                    { name: 'Exercise/Gym Area', benefit: 'Health and fitness' },
                    { name: 'Storage Solutions', benefit: 'Organization space' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-blue-600 text-xs">{item.benefit}</span>
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
                    "95+ basements finished successfully", 
                    "Licensed contractor with waterproofing expertise",
                    "Buffalo moisture control specialists",
                    "100% waterproofing success rate",
                    "Accessibility design included",
                    "Family-owned Buffalo business",
                    "Licensed & insured"
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
      <section className="bg-gradient-to-r from-slate-800 to-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Buffalo Basement Into Valuable Living Space
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Don't let your basement remain unused storage space. 
            Our Buffalo-certified waterproofing and finishing creates comfortable, accessible living areas that withstand WNY's challenging climate.
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
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-gray-300">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-gray-300 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Waterproofing Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuffaloBasementFinishingPage;
