import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Star, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Ruler, Zap } from 'lucide-react';

const WheelchairRampsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Wheelchair Ramp Installation Buffalo",
    "description": "Professional wheelchair ramp installation in Buffalo NY. ADA compliant ramps designed for Buffalo weather. Custom aluminum and wood ramps for homes and businesses throughout Western New York.",
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
      "priceRange": "$2400-$12000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Wheelchair Ramp Installation Buffalo NY | ADA Compliant Ramps | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional wheelchair ramp installation in Buffalo NY. ADA compliant ramps designed for Buffalo weather. Custom aluminum and wood ramps. Free quotes. Call 716-533-7108.');
    }
    
    // Set favicon
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = '/favicon.ico';
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-800 to-blue-900 text-white relative overflow-hidden">
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
                  <span>Wheelchair Ramps</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Wheelchair Ramp Installation <span className="text-blue-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                ADA compliant wheelchair ramps designed for Buffalo's harsh weather. Professional installation with snow load engineering. 
                <strong className="text-white"> Safe access every season.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-blue-700 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Ramp Quote
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">500+</div>
                  <div className="text-sm">Ramps Installed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">ADA Compliant</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">CAPS</div>
                  <div className="text-sm">Certified Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Ramp Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Accurate measurements and site evaluation",
                    "ADA compliance requirements review", 
                    "Buffalo weather-specific design features",
                    "Material options and cost comparison",
                    "Insurance and funding guidance"
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
              <Shield className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Ruler className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="font-semibold">ADA Compliant Design</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">500+ Ramps Installed</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
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
                  Professional Wheelchair Ramp Installation for Buffalo Homes
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>A wheelchair ramp isn't just a construction project - it's independence, dignity, and access to the world.</strong> After installing over 500 ramps throughout Western New York, I've learned that Buffalo's unique challenges require specialized expertise that goes far beyond basic carpentry skills.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Buffalo's harsh winters, extreme temperature swings, and heavy snow loads destroy improperly installed ramps within months. That's why Aaron Michael Services has developed Buffalo-specific engineering standards that ensure your ramp provides safe, reliable access for 15+ years, regardless of what Mother Nature throws at it.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-blue-500 pb-2">
                    Buffalo Wheelchair Ramp Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-blue-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Ramp Type</th>
                          <th className="p-4 text-left">Length</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Installation Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Straight Ramp</td>
                          <td className="p-4">12-16 feet</td>
                          <td className="p-4">$2,400 - $3,800</td>
                          <td className="p-4">1 day</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">L-Shaped Ramp</td>
                          <td className="p-4">20-24 feet</td>
                          <td className="p-4">$4,800 - $6,500</td>
                          <td className="p-4">1-2 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Switch-Back Ramp</td>
                          <td className="p-4">30+ feet</td>
                          <td className="p-4">$6,500 - $12,000</td>
                          <td className="p-4">2-3 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Investment vs. Alternative Reality:</h4>
                        <p className="text-yellow-700">
                          Professional wheelchair ramp installation averages <strong>$2,400-8,500</strong> depending on configuration. 
                          Compare that to moving costs ($15,000+), assisted living ($50,400/year), or the risk of serious injury from unsafe access. 
                          <strong> A quality ramp pays for itself immediately in safety and independence.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Wheelchair Ramps in Buffalo
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much do wheelchair ramps cost in Buffalo?",
                      answer: "Wheelchair ramp costs in Buffalo range from $2,400-$12,000 depending on type and length. Straight ramps (12-16 feet) cost $2,400-$3,800, L-shaped ramps $4,800-$6,500, switch-back ramps $6,500-$12,000. Many ramps qualify for insurance coverage with proper documentation."
                    },
                    {
                      question: "Who installs wheelchair ramps in Buffalo NY?",
                      answer: "Aaron Michael Services installs wheelchair ramps in Buffalo NY. We specialize in ADA-compliant ramps engineered for Buffalo weather with 22+ years experience, 500+ ramps installed, CAPS certification, and 72% insurance approval success rate. Serving all of Western New York. Call 716-533-7108."
                    },
                    {
                      question: "Are wheelchair ramps covered by insurance in New York?",
                      answer: "Many wheelchair ramps are covered by insurance in New York. Medicare covers ramps supporting home health services, Medicaid waivers provide up to $15,000 for home modifications, and private insurance often covers medically necessary accessibility improvements. Aaron Michael Services helps navigate coverage with 72% approval rate."
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
                <h3 className="text-2xl font-bold mb-4">Ready for Safe Access?</h3>
                <p className="mb-6">Get your free wheelchair ramp quote from Buffalo's ramp specialists.</p>
                
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
                  className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Quote
                </a>
              </div>

              {/* Ramp Types & Costs */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Wheelchair Ramp Costs</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Straight Ramp (12-16 ft)', cost: '$2,400-$3,800' },
                    { name: 'L-Shaped Ramp (20-24 ft)', cost: '$4,800-$6,500' },
                    { name: 'Switch-Back Ramp (30+ ft)', cost: '$6,500-$12,000' },
                    { name: 'Aluminum Ramp System', cost: '$3,200-$8,500' },
                    { name: 'Portable Ramp Installation', cost: '$800-$2,400' },
                    { name: 'Ramp Permit & Inspection', cost: '$200-$500' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700">{item.name}</span>
                      <span className="font-medium text-blue-600">{item.cost}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Buffalo Families Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "500+ wheelchair ramps installed", 
                    "CAPS Certified accessibility specialist",
                    "Buffalo weather-specific engineering",
                    "100% ADA compliant installations",
                    "72% insurance approval success rate",
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
      <section className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't Let Steps Keep You From Home - Install a Safe Wheelchair Ramp Today
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Every day without safe access is a day of unnecessary risk and lost independence. 
            Our Buffalo-engineered wheelchair ramps provide reliable access in all weather conditions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Quote
            </button>
          </div>
          
          <p className="mt-6 text-blue-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, Niagara Falls & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-blue-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | CAPS Certified Contractor | ADA Compliant Installations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WheelchairRampsPage;

