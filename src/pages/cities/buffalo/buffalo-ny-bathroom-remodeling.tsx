import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Bath, Droplets } from 'lucide-react';

const BuffaloBathroomRemodelingPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Bathroom Remodeling Buffalo NY",
    "description": "Expert bathroom remodelers in Buffalo NY specializing in accessible, modern, and affordable bathroom renovation services. ADA compliant bathrooms for aging in place and disability accessibility throughout Western New York.",
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
      "priceRange": "$8000-$35000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Bathroom Remodeling Buffalo NY | Accessible Bathroom Renovations | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert bathroom remodelers in Buffalo NY. Accessible, modern, and affordable bathroom renovation services. ADA compliant walk-in showers, grab bars, aging in place solutions. Call 716-533-7108.');
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
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Bathroom Remodeling</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Bathroom Remodeling <span className="text-blue-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Expert bathroom remodelers in Buffalo NY specializing in accessible, modern, and affordable renovations. 
                ADA compliant solutions for aging in place and disability accessibility. 
                <strong className="text-white"> Transform your Buffalo bathroom into a safe, beautiful space.</strong>
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
                  Free Bathroom Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">300+</div>
                  <div className="text-sm">Bathrooms Remodeled</div>
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
                <h3 className="text-2xl font-bold mb-4">Free Bathroom Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Accessibility needs evaluation and ADA compliance review",
                    "Buffalo plumbing and electrical system assessment", 
                    "Design consultation with 3D visualization",
                    "Detailed cost estimate with material options",
                    "Insurance and financing guidance"
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
              <Bath className="w-5 h-5 text-blue-600 mr-2" />
              <span className="font-semibold">Accessibility Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">300+ Bathrooms Completed</span>
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
                  Professional Bathroom Remodeling Services in Buffalo NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Bathroom remodeling in Buffalo requires specialized expertise that combines accessibility needs with the unique challenges of Western New York's older housing stock.</strong> After completing 300+ bathroom renovations throughout Buffalo, Cheektowaga, Amherst, Tonawanda, and surrounding communities, we understand that today's Buffalo homeowners need bathrooms that are both beautiful and barrier-free.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-teal-500 pb-2">
                    Buffalo Bathroom Remodeling Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-teal-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Bathroom Remodel Type</th>
                          <th className="p-4 text-left">Scope</th>
                          <th className="p-4 text-left">Cost Range</th>
                          <th className="p-4 text-left">Timeline</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Basic Safety Updates</td>
                          <td className="p-4">Grab bars, non-slip flooring</td>
                          <td className="p-4">$3,500 - $7,500</td>
                          <td className="p-4">3-5 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Walk-in Shower Conversion</td>
                          <td className="p-4">Tub to accessible shower</td>
                          <td className="p-4">$8,500 - $16,500</td>
                          <td className="p-4">5-8 days</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Full Accessible Renovation</td>
                          <td className="p-4">Complete barrier-free bathroom</td>
                          <td className="p-4">$15,000 - $35,000</td>
                          <td className="p-4">10-15 days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Buffalo Bathroom Investment Reality:</h4>
                        <p className="text-yellow-700">
                          Professional bathroom remodeling in Buffalo ranges from <strong>$8,000-$35,000</strong> depending on scope and accessibility features. 
                          Buffalo's older homes often require additional updates, but accessible renovations typically qualify for insurance coverage and add 
                          <strong> 15-20% to home value while preventing costly falls and injuries.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Bathroom Remodeling in Buffalo NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does bathroom remodeling cost in Buffalo NY?",
                      answer: "Bathroom remodeling costs in Buffalo range from $8,000-$50,000 depending on scope and accessibility features. Basic safety updates cost $3,500-$7,500, walk-in shower conversions $8,500-$16,500, full accessible renovations $15,000-$35,000. Buffalo's older homes often require additional plumbing and electrical updates. Many accessibility modifications qualify for insurance coverage."
                    },
                    {
                      question: "Who does accessible bathroom remodeling in Buffalo, Cheektowaga, and Amherst?",
                      answer: "Aaron Michael Services specializes in accessible bathroom remodeling throughout Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, and all of Western New York. We're Buffalo's leading accessibility-focused bathroom remodelers with 300+ completed projects, ADA compliance expertise, and deep understanding of WNY's unique building challenges. Licensed, insured, and experienced with local permits."
                    },
                    {
                      question: "How long does bathroom remodeling take in Buffalo?",
                      answer: "Bathroom remodeling duration in Buffalo: Basic updates 3-5 days, walk-in shower conversions 5-8 days, full renovations 10-15 days. Buffalo permit processing adds 1-2 weeks. Older Buffalo homes may require additional time for plumbing upgrades, electrical modernization, and structural modifications."
                    },
                    {
                      question: "Are accessible bathroom modifications covered by insurance in New York?",
                      answer: "Many accessible bathroom modifications are covered by New York insurance programs. Medicare covers medically necessary modifications with physician documentation, Medicaid NHTD waiver provides up to $15,000 for home modifications, and private insurance often covers safety features. Our Buffalo team achieves 78% insurance approval rate."
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
                <h3 className="text-2xl font-bold mb-4">Ready for Your Dream Bathroom?</h3>
                <p className="mb-6">Get your free bathroom remodeling consultation from Buffalo's accessibility specialists.</p>
                
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

              {/* Service Areas */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bathroom Remodeling Service Areas</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {[
                    'Buffalo', 'Cheektowaga', 'Amherst', 'Tonawanda',
                    'N. Tonawanda', 'Kenmore', 'West Seneca', 'Hamburg',
                    'Orchard Park', 'Lackawanna', 'Lancaster', 'Depew',
                    'Clarence', 'Niagara Falls', 'Lockport', 'All WNY'
                  ].map((city) => (
                    <div key={city} className="text-gray-600">{city}</div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Why Buffalo Homeowners Choose Us</h3>
                <div className="space-y-3">
                  {[
                    "22+ years construction experience",
                    "300+ bathroom renovations completed", 
                    "Licensed contractor with accessibility expertise",
                    "Buffalo building code specialists",
                    "ADA compliance guaranteed",
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
            Transform Your Buffalo Bathroom Into a Safe, Beautiful Space
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't let an outdated bathroom limit your independence and safety. 
            Our Buffalo-certified bathroom remodeling creates accessible, stylish spaces that grow with your needs.
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
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-blue-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-blue-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | ADA Compliant Renovations</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuffaloBathroomRemodelingPage;
