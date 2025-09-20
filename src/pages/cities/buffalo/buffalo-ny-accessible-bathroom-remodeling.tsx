import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Bath, Droplets, Wrench } from 'lucide-react';

const BuffaloAccessibleBathroomRemodelingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Accessible Bathroom Remodel Buffalo NY",
    "description": "Professional accessible bathroom remodeling in Buffalo NY. ADA compliant walk-in showers, grab bars, comfort-height toilets. Expert installation with permits and insurance assistance.",
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
      "priceRange": "$8500-$28000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Accessible Bathroom Remodeling — Buffalo, NY | ADA Compliant Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional accessible bathroom remodel Buffalo NY. ADA compliant walk-in showers, grab bars, comfort-height toilets. Expert permits, insurance assistance. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-blue-900 via-teal-800 to-blue-900 text-white relative overflow-hidden">
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
                  <span>Buffalo Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Accessible Bathroom Remodeling</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Accessible Bathroom Remodel <span className="text-blue-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Professional accessible bathroom remodeling in Buffalo NY with ADA compliant features. Walk-in showers, grab bars, comfort-height toilets. 
                <strong className="text-white"> Expert permits, insurance assistance, and Buffalo building code compliance.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Buffalo Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">300+</div>
                  <div className="text-sm">Buffalo Bathrooms</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Buffalo Bathroom Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Complete ADA compliance evaluation",
                    "Buffalo permit requirements review", 
                    "Insurance coverage guidance",
                    "Custom design with 3D visualization",
                    "Detailed cost breakdown with timeline"
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

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Professional Accessible Bathroom Remodel Buffalo NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Accessible bathroom remodeling in Buffalo NY requires specialized expertise that combines ADA compliance with the unique challenges of Western New York's older housing stock and harsh climate conditions.</strong> After completing 300+ accessible bathroom renovations throughout Buffalo, we understand that Buffalo homeowners need bathrooms that are both beautiful and barrier-free while addressing the specific challenges of WNY's diverse architectural styles and weather extremes.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Essential ADA Features for Buffalo Accessible Bathroom Remodels
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Buffalo's Premier ADA Bathroom Specialists</strong> - Our accessible bathroom remodels incorporate all required ADA features while addressing Buffalo's unique construction challenges. Every renovation includes walk-in showers with zero-threshold entry, grab bars rated for 250+ pounds, comfort-height toilets, accessible sinks with knee clearance, slip-resistant flooring, and enhanced lighting systems designed for Buffalo's variable weather conditions.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-teal-900 flex items-center">
                        <Bath className="w-5 h-5 mr-2" />
                        Walk-in Shower Conversions
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Zero-threshold entry for wheelchair access
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Built-in shower seats and grab bars
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Non-slip surfaces and proper drainage
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Cost range: $8,500-$16,500
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-blue-900 flex items-center">
                        <Wrench className="w-5 h-5 mr-2" />
                        Complete ADA Compliance Package
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          36-inch minimum doorway width
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          60-inch wheelchair turning radius
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Accessible sink and mirror placement
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          Cost range: $15,000-$28,000
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Buffalo Accessible Bathroom Remodel Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-teal-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Remodel Type</th>
                          <th className="p-4 text-left">ADA Features</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Basic Safety Updates</td>
                          <td className="p-4">Grab bars, non-slip flooring</td>
                          <td className="p-4">$3,500 - $7,500</td>
                          <td className="p-4">2-3 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Walk-in Shower Conversion</td>
                          <td className="p-4">Zero-threshold, grab bars, seat</td>
                          <td className="p-4">$8,500 - $16,500</td>
                          <td className="p-4">5-7 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Complete ADA Renovation</td>
                          <td className="p-4">Full compliance, all features</td>
                          <td className="p-4">$15,000 - $28,000</td>
                          <td className="p-4">10-14 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Buffalo Permits & Timeline for Accessible Bathroom Remodels
                  </h3>

                  <p className="text-gray-700 mb-6">
                    <strong>Buffalo Building Department Requirements</strong> - Most accessible bathroom remodels in Buffalo require building permits, especially when modifying plumbing, electrical, or structural elements. We handle all permit applications, coordinate with Buffalo building inspectors, and ensure compliance with both ADA standards and local building codes. Typical permit processing takes 2-3 weeks, with construction beginning immediately upon approval.
                  </p>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Buffalo Accessible Bathroom Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional accessible bathroom remodels in Buffalo range from <strong>$8,500-$28,000</strong> depending on scope and ADA features. 
                          Buffalo's older homes often require additional plumbing and electrical updates, but accessible renovations typically qualify for insurance coverage and add 
                          <strong> 18-25% to home value while preventing costly falls and injuries.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Buffalo-Specific Accessible Bathroom Considerations
                  </h3>

                  <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                    <h4 className="text-2xl font-bold mb-6">Buffalo Accessible Bathroom Challenges & Solutions</h4>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h5 className="font-bold mb-3 text-teal-200 flex items-center">
                          <Droplets className="w-5 h-5 mr-2" />
                          Buffalo Climate Considerations
                        </h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Enhanced ventilation for humidity control</li>
                          <li>• Moisture-resistant materials selection</li>
                          <li>• Heated flooring for winter comfort</li>
                          <li>• Mold prevention strategies</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-teal-200">Buffalo Building Codes</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Electrical updates for GFCI compliance</li>
                          <li>• Plumbing modifications for accessibility</li>
                          <li>• Ventilation requirements</li>
                          <li>• Permit coordination and inspections</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-bold mb-3 text-teal-200">ADA Integration</h5>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Seamless accessibility feature integration</li>
                          <li>• Buffalo aesthetic preservation</li>
                          <li>• Future-proofing for changing needs</li>
                          <li>• Multi-generational functionality</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Accessible Bathroom Remodels in Buffalo NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "Do I need permits for accessible bathroom remodeling in Buffalo NY?",
                      answer: "Yes, most accessible bathroom remodels in Buffalo require building permits, especially when modifying plumbing, electrical, or structural elements. Permits are required for walk-in shower conversions, grab bar installations into structural walls, electrical upgrades for GFCI outlets, and plumbing modifications. Aaron Michael Services handles all Buffalo permit applications, coordinates with building inspectors, and ensures compliance with both ADA standards and local codes. Typical permit processing takes 2-3 weeks with construction beginning immediately upon approval."
                    },
                    {
                      question: "How much does an accessible bathroom remodel cost in Buffalo NY?",
                      answer: "Accessible bathroom remodel costs in Buffalo range from $8,500-$28,000 depending on scope and ADA features. Basic safety updates (grab bars, non-slip flooring) cost $3,500-$7,500, walk-in shower conversions $8,500-$16,500, complete ADA renovations $15,000-$28,000. Buffalo's older homes often require additional plumbing and electrical updates. Many accessibility modifications qualify for Medicare coverage and insurance benefits with proper documentation."
                    },
                    {
                      question: "Are there grants available for accessible bathroom remodels in Buffalo NY?",
                      answer: "Yes, several funding sources are available for Buffalo accessible bathroom remodels. New York Medicaid NHTD waiver provides up to $15,000 annually for home modifications, Medicare covers medically necessary accessibility improvements at 80%, Erie County Office for the Aging offers grants, and many private insurance plans cover ADA modifications with physician documentation. Aaron Michael Services helps Buffalo families navigate funding options with 78% approval success rate through proper documentation and medical necessity letters."
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
                <h3 className="text-2xl font-bold mb-4">Ready for Your Accessible Bathroom?</h3>
                <p className="mb-6">Get your free accessible bathroom consultation from Buffalo's ADA specialists.</p>
                
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
                  Call Now for Free Assessment
                </a>
              </div>

              {/* Related Services */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Buffalo Services</h3>
                <div className="space-y-3">
                  <Link to="/accessible-remodeling-buffalo-ny" className="block p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                    <h4 className="font-semibold text-blue-900">Accessible Remodeling Buffalo</h4>
                    <p className="text-sm text-blue-700">Complete home accessibility solutions</p>
                  </Link>
                  <Link to="/services/wheelchair-ramps" className="block p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                    <h4 className="font-semibold text-green-900">Wheelchair Ramps</h4>
                    <p className="text-sm text-green-700">ADA compliant ramp installation</p>
                  </Link>
                  <Link to="/services/aging-in-place" className="block p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                    <h4 className="font-semibold text-purple-900">Aging in Place</h4>
                    <p className="text-sm text-purple-700">Senior home safety modifications</p>
                  </Link>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Buffalo Families Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years Buffalo construction experience",
                    "300+ accessible bathroom renovations", 
                    "Licensed contractor with ADA expertise",
                    "Buffalo permit specialists",
                    "100% ADA compliance guaranteed",
                    "78% insurance approval success rate",
                    "Family-owned Buffalo business",
                    "Licensed & insured"
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
      <section className="bg-gradient-to-r from-teal-800 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Transform Your Buffalo Bathroom Into an Accessible Safe Haven
          </h2>
          <p className="text-xl mb-8 text-teal-100">
            Don't let an inaccessible bathroom limit your independence and safety in Buffalo. 
            Our certified accessible bathroom remodeling creates beautiful, ADA-compliant spaces that work for every family member.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-teal-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-teal-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-teal-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | ADA Compliance Specialists</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuffaloAccessibleBathroomRemodelingPage;