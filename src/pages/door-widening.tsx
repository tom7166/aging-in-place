import React, { useEffect } from 'react';
import { Phone, MapPin, Clock, CheckCircle, Star, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Ruler, Zap, Wrench, Building, AlertTriangle } from 'lucide-react';

const DoorWideningPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Door Widening Buffalo NY",
    "description": "Professional door widening services in Buffalo NY for wheelchair accessibility. ADA compliant door modifications for homes and businesses. Expert framing and drywall work throughout Western New York.",
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
      "priceRange": "$800-$3500",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Door Widening Buffalo NY | Wheelchair Accessible Doorways | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional door widening in Buffalo NY for wheelchair accessibility. ADA compliant door modifications. Expert framing, drywall, and finish work. Free quotes. Call 716-533-7108.');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 text-white relative overflow-hidden">
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
                  <span>Door Widening</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Door Widening Services <span className="text-green-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-green-100 leading-relaxed">
                Professional door widening for wheelchair accessibility in Buffalo homes and businesses. Expert framing modifications that maintain structural integrity. 
                <strong className="text-white"> ADA compliant doorway solutions since 2002.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-green-700 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Door Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">800+</div>
                  <div className="text-sm">Doors Widened</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Code Compliant</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Door Widening Assessment:</h3>
                <div className="space-y-3">
                  {[
                    "Structural analysis and load-bearing evaluation",
                    "ADA compliance requirements for your space", 
                    "Buffalo building code and permit requirements",
                    "Material matching and finish options",
                    "Insurance documentation assistance"
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
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Building className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Structural Expertise</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-semibold">800+ Doors Modified</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving WNY Since 2002</span>
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
                  Professional Door Widening Services for Buffalo Homes
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Door widening is one of the most requested accessibility modifications in Buffalo</strong> - and one of the most commonly botched DIY projects. After 22+ years of construction experience and 800+ successful door modifications, I've learned that Buffalo's unique building characteristics require specialized knowledge that goes far beyond basic carpentry.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Buffalo's housing stock presents unique challenges: 78% of homes were built before modern accessibility standards, featuring balloon framing, plaster walls, and complex utility routing. Professional door widening requires structural analysis, proper permitting, and finish work that matches your home's existing character.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-green-500 pb-2">
                    Buffalo Door Widening Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-green-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Door Type</th>
                          <th className="p-4 text-left">Complexity</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Interior Non-Load Bearing</td>
                          <td className="p-4">Simple</td>
                          <td className="p-4">$800 - $1,500</td>
                          <td className="p-4">1 day</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Interior Load-Bearing</td>
                          <td className="p-4">Moderate</td>
                          <td className="p-4">$1,500 - $2,800</td>
                          <td className="p-4">1-2 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Exterior Entry Door</td>
                          <td className="p-4">Complex</td>
                          <td className="p-4">$2,000 - $3,500</td>
                          <td className="p-4">2-3 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Investment Reality Check:</h4>
                        <p className="text-yellow-700">
                          Professional door widening costs <strong>$800-3,500</strong> but prevents thousands in structural damage. 
                          Compare to home renovation after DIY failure ($8,000+), reduced home value, or the cost of relocating to accessible housing. 
                          <strong> Most projects qualify for insurance coverage with proper documentation.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Door Widening in Buffalo
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does door widening cost in Buffalo NY?",
                      answer: "Door widening costs in Buffalo range from $800-$3,500 depending on complexity. Interior non-load bearing walls $800-$1,500, load-bearing modifications $1,500-$2,800, exterior doors $2,000-$3,500. Many projects qualify for insurance coverage or Medicare benefits with proper documentation."
                    },
                    {
                      question: "Who does door widening for wheelchair accessibility in Buffalo?",
                      answer: "Aaron Michael Services specializes in door widening for wheelchair accessibility in Buffalo NY. 22+ years experience, 800+ successful modifications, licensed contractor with expertise in Buffalo's unique building challenges. We handle permits, structural requirements, and insurance documentation. Call 716-533-7108."
                    },
                    {
                      question: "Do I need a permit for door widening in Buffalo NY?",
                      answer: "Yes, door widening typically requires permits in Buffalo NY. Structural permits are required for load-bearing wall modifications, electrical permits for wire rerouting, and building permits for exterior door changes. Aaron Michael Services handles all permit applications and inspections as part of our comprehensive service."
                    },
                    {
                      question: "How long does door widening take in Buffalo homes?",
                      answer: "Door widening duration varies by complexity: Interior non-load bearing doors 1 day, load-bearing modifications 1-2 days, exterior doors 2-3 days. Buffalo permit processing adds 1-2 weeks to timeline. We coordinate all work to minimize disruption to your daily routine."
                    },
                    {
                      question: "What makes Buffalo door widening different from other areas?",
                      answer: "Buffalo's older housing stock presents unique challenges: 78% built before 1990 with balloon framing, plaster walls, knob-and-tube wiring, and cast iron plumbing. These require specialized techniques for structural modifications, utility rerouting, and material matching that preserve your home's character and value."
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
                <h3 className="text-2xl font-bold mb-4">Ready for Accessible Doorways?</h3>
                <p className="mb-6">Get your free door widening assessment from Buffalo's accessibility specialists.</p>
                
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
                  className="block w-full bg-orange-600 hover:bg-orange-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Assessment
                </a>
              </div>

              {/* Door Widening Costs */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Door Widening Costs</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Interior Non-Load Bearing', cost: '$800-$1,500' },
                    { name: 'Interior Load-Bearing', cost: '$1,500-$2,800' },
                    { name: 'Exterior Entry Door', cost: '$2,000-$3,500' },
                    { name: 'Bathroom Door Widening', cost: '$1,200-$2,200' },
                    { name: 'Bedroom Door Access', cost: '$900-$1,800' },
                    { name: 'Permits & Inspections', cost: '$150-$400' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-medium text-green-600">{item.cost}</span>
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
                    "800+ door modifications completed", 
                    "Licensed contractor with structural expertise",
                    "Buffalo building code specialists",
                    "Perfect material matching guaranteed",
                    "85% insurance approval success rate",
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
      <section className="bg-gradient-to-r from-green-800 to-emerald-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stop Struggling With Narrow Doorways - Get Professional Door Widening Today
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Every narrow doorway is a barrier to independence and safety. 
            Our Buffalo-certified door widening creates accessible passages that preserve your home's value and character.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Assessment
            </button>
          </div>
          
          <p className="mt-6 text-green-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-green-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | ADA Compliant Modifications</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoorWideningPage;

