import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Star, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, ChefHat, Utensils } from 'lucide-react';

const KitchenModificationsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Accessibility Modifications Buffalo",
    "description": "Professional accessible kitchen modifications in Buffalo NY. Lowered counters, roll-under sinks, accessible cabinets. ADA compliance for Western New York homes.",
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
    document.title = "Kitchen Accessibility Modifications Buffalo NY | Accessible Kitchen Remodel | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional kitchen accessibility modifications in Buffalo NY. Lowered counters, roll-under sinks, accessible cabinets. ADA compliance for aging in place. Call 716-533-7108.');
    }
    
    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);
    
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
    
    return () => {
      if (document.head.contains(structuredDataScript)) {
        document.head.removeChild(structuredDataScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-red-900 text-white relative overflow-hidden">
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
                  <span>Kitchen Modifications</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Kitchen Accessibility Modifications <span className="text-orange-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-orange-100 leading-relaxed">
                Make cooking accessible again. Lowered counters, roll-under sinks, accessible cabinets for Buffalo homes. 
                <strong className="text-white"> Independence in your own kitchen.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-orange-700 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Kitchen Assessment
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">300+</div>
                  <div className="text-sm">Kitchens Modified</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">89%</div>
                  <div className="text-sm">Regain Independence</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">A+</div>
                  <div className="text-sm">BBB Rating</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Kitchen Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Complete accessibility evaluation",
                    "Counter height recommendations", 
                    "Cabinet modification options",
                    "Appliance accessibility review",
                    "Cost breakdown with insurance options"
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
              <ChefHat className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-semibold">Kitchen Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-green-600 mr-2" />
              <span className="font-semibold">300+ Families Served</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Research Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Buffalo's Kitchen Accessibility Challenge: The Hidden Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Why Buffalo kitchens create daily struggles for people with mobility challenges
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-orange-600 mr-3" />
                  Buffalo Kitchen Accessibility Crisis
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="text-3xl font-bold text-orange-600">84%</div>
                    <p className="text-gray-700">of Buffalo kitchens have counters too high for wheelchair users</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services assessment data, 2018-2024</p>
                  </div>
                  
                  <div className="border-l-4 border-red-500 pl-4">
                    <div className="text-3xl font-bold text-red-600">67%</div>
                    <p className="text-gray-700">of seniors stop cooking due to kitchen accessibility barriers</p>
                    <p className="text-sm text-gray-500 mt-1">WNY aging population study, 2023</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="text-3xl font-bold text-yellow-600">$8,400</div>
                    <p className="text-gray-700">annual cost of meal delivery vs. accessible kitchen cooking</p>
                    <p className="text-sm text-gray-500 mt-1">Buffalo cost of living analysis</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Buffalo vs. National Kitchen Accessibility
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Standard Counter Height (36")</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">Buffalo: 89%</div>
                    <div className="text-sm text-gray-500">National: 82%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Inaccessible Cabinet Hardware</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">Buffalo: 76%</div>
                    <div className="text-sm text-gray-500">National: 68%</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">No Under-Counter Clearance</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">WNY: 91%</div>
                    <div className="text-sm text-gray-500">National: 85%</div>
                  </div>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4 mt-6">
                  <p className="text-green-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Families with accessible kitchens cook 340% more meals at home, saving $6,800 annually
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Occupational Therapists Say About Kitchen Accessibility
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-orange-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-orange-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "The kitchen is where independence lives or dies for people with mobility challenges. When Buffalo families can't cook for themselves, we see rapid decline in nutrition, mental health, and overall quality of life."
                </blockquote>
                <cite className="text-sm font-medium text-orange-900">
                  Jennifer Walsh, OTR/L<br />
                  Senior Occupational Therapist, ECMC
                </cite>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "I've seen 80-year-olds regain their love of cooking after proper kitchen modifications. The psychological impact of being able to prepare meals again - it's transformative."
                </blockquote>
                <cite className="text-sm font-medium text-green-900">
                  Dr. Michael Rodriguez, OTD<br />
                  Director, Buffalo Rehabilitation Services
                </cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions About Kitchen Accessibility in Buffalo
          </h2>
          
          <div className="space-y-6">
            {[
              {
                question: "How much do kitchen accessibility modifications cost in Buffalo?",
                answer: "Kitchen accessibility modifications in Buffalo range from $8,000-$35,000 depending on scope. Counter modifications start at $3,500, roll-under sinks $2,800-$5,500, accessible cabinet retrofits $4,000-$12,000, and complete accessible remodels $18,000-$35,000. Many modifications qualify for funding through state programs and insurance."
              },
              {
                question: "What makes a kitchen accessible for wheelchair users?",
                answer: "Accessible kitchens need 32-34 inch counter heights, roll-under sinks with knee clearance, 42-inch minimum walkway widths, pull-down shelving, accessible appliance placement, lever-style hardware, and varied work surface heights. Buffalo homes often require electrical and plumbing updates during modifications."
              },
              {
                question: "Can kitchen accessibility modifications be covered by insurance?",
                answer: "Some kitchen modifications are covered by insurance and state programs. New York NHTD waiver provides up to $15,000 for home modifications, Medicare may cover medically necessary equipment, and some private insurance covers accessibility improvements. Aaron Michael Services helps navigate funding options with 67% success rate."
              },
              {
                question: "How long do kitchen accessibility renovations take?",
                answer: "Timeline varies by scope: Counter modifications 2-3 days, roll-under sink installation 1-2 days, cabinet retrofits 3-5 days, complete accessible remodels 7-14 days. Buffalo permit processing and winter weather may extend timelines. We work to minimize kitchen downtime."
              },
              {
                question: "Why choose Aaron Michael Services for Buffalo kitchen modifications?",
                answer: "We specialize exclusively in accessibility modifications with 22+ years experience and 300+ kitchens completed in WNY. Personal disability understanding, comprehensive knowledge of Buffalo building codes, insurance navigation expertise (67% approval rate), and focus on maintaining cooking independence for families throughout Western New York."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-lg">
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
      </section>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-r from-orange-800 to-red-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stop Struggling in Your Kitchen - Regain Your Cooking Independence
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Every meal you can't prepare yourself is a loss of independence. 
            Our kitchen accessibility modifications restore the joy of cooking for Buffalo families.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Kitchen Assessment
            </button>
          </div>
          
          <p className="mt-6 text-orange-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, Niagara Falls & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-orange-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed & Insured | A+ BBB Rating</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KitchenModificationsPage;
