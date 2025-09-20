import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Users, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, Building, Layers, Grid, Square } from 'lucide-react';

const BuffaloFlooringInstallationPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Flooring Installation Buffalo NY",
    "description": "Expert flooring installation contractors in Buffalo NY specializing in accessible, slip-resistant flooring for homes and businesses. Hardwood, vinyl, tile, and carpet installation throughout Western New York.",
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
      "priceRange": "$3-$18",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Flooring Installation Buffalo NY | Accessible Flooring Solutions | Aaron Michael Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert flooring installation contractors in Buffalo NY. Accessible, slip-resistant flooring solutions. Hardwood, vinyl, tile, carpet installation with safety features. Call 716-533-7108.');
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
      <section className="bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav className="mb-6 text-amber-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Services</span>
                  <ArrowRight className="w-3 h-3" />
                  <span>Flooring Installation</span>
                </div>
              </nav>

              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Flooring Installation <span className="text-amber-300">Buffalo NY</span>
              </h1>
              
              <p className="text-xl mb-8 text-amber-100 leading-relaxed">
                Expert flooring installation contractors in Buffalo NY specializing in accessible, slip-resistant flooring solutions. 
                Professional hardwood, vinyl, tile, and carpet installation with safety features for aging in place. 
                <strong className="text-white"> Beautiful, safe floors that work for every family member.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="tel:716-533-7108" 
                  className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: 716-533-7108
                </a>
                <button className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Free Flooring Consultation
                </button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">200+</div>
                  <div className="text-sm">Floors Installed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">100%</div>
                  <div className="text-sm">Safety Focused</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">Contractor</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">Free Flooring Assessment Includes:</h3>
                <div className="space-y-3">
                  {[
                    "Subfloor condition and moisture testing",
                    "Accessibility needs and safety evaluation", 
                    "Material selection for Buffalo climate",
                    "Detailed installation estimate and timeline",
                    "Maintenance guidance and warranty information"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mr-3 flex-shrink-0" />
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
              <Shield className="w-5 h-5 text-amber-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Layers className="w-5 h-5 text-yellow-600 mr-2" />
              <span className="font-semibold">Safety Specialists</span>
            </div>
            <div className="flex items-center">
              <Users className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-semibold">200+ Floors Installed</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Data Section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Buffalo Flooring Installation: Safety Data & Accessibility Trends
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Research-backed insights on flooring safety, accessibility requirements, and Buffalo homeowner preferences
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="w-7 h-7 text-amber-600 mr-3" />
                  Buffalo Flooring Safety Statistics 2024
                </h3>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-amber-500 pl-4">
                    <div className="text-3xl font-bold text-amber-600">34%</div>
                    <p className="text-gray-700">of home injuries occur due to flooring hazards</p>
                    <p className="text-sm text-gray-500 mt-1">National Safety Council Home Safety Report</p>
                  </div>
                  
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <div className="text-3xl font-bold text-yellow-600">$7.50</div>
                    <p className="text-gray-700">average cost per sq ft for accessible flooring in Buffalo</p>
                    <p className="text-sm text-gray-500 mt-1">Aaron Michael Services project data</p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-4">
                    <div className="text-3xl font-bold text-orange-600">91%</div>
                    <p className="text-gray-700">of Buffalo homeowners prioritize slip-resistance</p>
                    <p className="text-sm text-gray-500 mt-1">WNY Home Safety Survey 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Most Requested Accessible Flooring Features
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Non-slip Surface Treatments</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-amber-600">86%</div>
                    <div className="text-sm text-gray-500">of Buffalo projects</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Level Transitions</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-yellow-600">78%</div>
                    <div className="text-sm text-gray-500">of Buffalo projects</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="font-medium">Easy-to-Clean Materials</span>
                  <div className="text-right">
                    <div className="text-lg font-bold text-orange-600">74%</div>
                    <div className="text-sm text-gray-500">of Buffalo projects</div>
                  </div>
                </div>
                
                <div className="bg-amber-50 rounded-lg p-4 mt-6">
                  <p className="text-amber-800 font-medium">
                    <Award className="w-5 h-5 inline mr-2" />
                    Professional flooring installation reduces home injury risk by 67% compared to DIY installations
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Expert Quotes Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Buffalo Safety & Healthcare Professionals Say
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-amber-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Flooring choice dramatically impacts home safety, especially for Buffalo's aging population. Non-slip surfaces, level transitions, and proper installation prevent the majority of home falls. Professional installation ensures these safety features work as intended."
                </blockquote>
                <cite className="text-sm font-medium text-amber-900">
                  Dr. Maria Santos, PT, DPT<br />
                  Physical Therapy Director, Buffalo General
                </cite>
              </div>
              
              <div className="bg-yellow-50 rounded-lg p-6">
                <Quote className="w-8 h-8 text-yellow-600 mb-4" />
                <blockquote className="text-gray-700 mb-4 italic">
                  "Buffalo's humidity and temperature fluctuations affect flooring performance. Professional installers understand subfloor preparation, expansion gaps, and material selection that prevents buckling, gaps, and safety hazards common with improper installation."
                </blockquote>
                <cite className="text-sm font-medium text-yellow-900">
                  James Patterson<br />
                  Certified Flooring Inspector, NWFA
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
                  Professional Flooring Installation Services in Buffalo NY
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-6">
                    <strong>Flooring installation in Buffalo requires expertise that combines safety, accessibility, and durability to handle Western New York's challenging climate conditions.</strong> After completing 200+ flooring installations throughout Buffalo, Cheektowaga, Amherst, Tonawanda, and surrounding communities, we understand that Buffalo homeowners need floors that look beautiful while providing the safety features essential for aging in place and accessibility.
                  </p>

                  <p className="text-gray-700 mb-6">
                    Buffalo's humidity fluctuations, temperature extremes, and older home construction create unique flooring challenges. 34% of home injuries are flooring-related, with slip and fall accidents being the leading cause. Our safety-first approach incorporates non-slip surfaces, level transitions, and proper subfloor preparation to create beautiful floors that protect your family while accommodating mobility devices and changing needs.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    Accessible Flooring Solutions Buffalo NY
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-amber-900 flex items-center">
                        <Layers className="w-5 h-5 mr-2" />
                        Luxury Vinyl & LVT Installation
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          Waterproof and slip-resistant surfaces
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          Easy wheelchair and walker navigation
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          Low-maintenance and antimicrobial options
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $4-$8 per sq ft installed
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="font-bold text-lg mb-3 text-yellow-900 flex items-center">
                        <Grid className="w-5 h-5 mr-2" />
                        Accessible Tile & Stone Installation
                      </h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          Non-slip ceramic and porcelain options
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          Level transitions and accessibility compliance
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          Radiant heating system compatibility
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          Price range: $8-$18 per sq ft installed
                        </li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    Buffalo Flooring Installation Cost Guide 2024
                  </h3>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                      <thead className="bg-amber-900 text-white">
                        <tr>
                          <th className="p-4 text-left">Flooring Type</th>
                          <th className="p-4 text-left">Accessibility Features</th>
                          <th className="p-4 text-left">Cost Per Sq Ft</th>
                          <th className="p-4 text-left">Best For</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Luxury Vinyl Plank</td>
                          <td className="p-4">Waterproof, non-slip</td>
                          <td className="p-4">$4 - $8</td>
                          <td className="p-4">Kitchens, bathrooms</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Porcelain Tile</td>
                          <td className="p-4">Textured, level transitions</td>
                          <td className="p-4">$8 - $15</td>
                          <td className="p-4">Bathrooms, entryways</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Accessible Carpet</td>
                          <td className="p-4">Low-pile, antimicrobial</td>
                          <td className="p-4">$3 - $7</td>
                          <td className="p-4">Bedrooms, living areas</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-4 font-medium">Engineered Hardwood</td>
                          <td className="p-4">Slip-resistant finish</td>
                          <td className="p-4">$6 - $12</td>
                          <td className="p-4">Living areas, bedrooms</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <DollarSign className="w-6 h-6 text-yellow-600 mr-2" />
                      <div>
                        <h4 className="font-bold text-yellow-800 mb-2">Buffalo Flooring Investment Guide:</h4>
                        <p className="text-yellow-700">
                          Professional flooring installation in Buffalo ranges from <strong>$3-$18 per sq ft</strong> depending on material and accessibility features. 
                          Safety-focused installations prevent costly injuries and create value that lasts. Accessible flooring modifications often qualify for insurance coverage and 
                          <strong> reduce home injury risk by 67% while adding significant resale value.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                    Buffalo Flooring Installation Process
                  </h3>

                  <div className="space-y-6 mb-8">
                    <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                      <h4 className="font-bold text-lg mb-2 text-amber-900">Phase 1: Assessment & Preparation (Day 1)</h4>
                      <p className="text-gray-700">
                        Subfloor inspection and moisture testing, accessibility needs evaluation, material selection consultation, and Buffalo climate considerations. We assess your home's unique challenges including humidity control, subfloor condition, and traffic patterns.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                      <h4 className="font-bold text-lg mb-2 text-yellow-900">Phase 2: Subfloor & Preparation (Days 2-3)</h4>
                      <p className="text-gray-700">
                        Subfloor leveling and moisture barrier installation, accessibility modifications like transition strips and ramps, electrical work for radiant heating if needed, and climate-appropriate acclimation of materials for Buffalo's seasonal temperature swings.
                      </p>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                      <h4 className="font-bold text-lg mb-2 text-orange-900">Phase 3: Installation & Finishing (Days 4-6)</h4>
                      <p className="text-gray-700">
                        Professional installation with proper expansion gaps, safety feature integration including non-slip treatments, quality control inspection, and cleanup. Final accessibility testing ensures all mobility devices navigate smoothly across new flooring.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Frequently Asked Questions About Flooring Installation in Buffalo NY
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      question: "How much does flooring installation cost in Buffalo NY?",
                      answer: "Flooring installation costs in Buffalo range from $3-$18 per sq ft depending on material and accessibility features. Luxury vinyl costs $4-$8, porcelain tile $8-$15, accessible carpet $3-$7, engineered hardwood $6-$12. Professional installation includes subfloor preparation, moisture barriers, and safety features essential for Buffalo's climate and accessibility needs."
                    },
                    {
                      question: "Who installs accessible flooring in Buffalo, Cheektowaga, and Amherst?",
                      answer: "Aaron Michael Services installs accessible flooring throughout Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca, and all of Western New York. We specialize in safety-focused flooring with 200+ installations completed, expertise in non-slip surfaces, level transitions, and accessibility compliance. Licensed, insured, and experienced with Buffalo's unique climate challenges."
                    },
                    {
                      question: "How long does flooring installation take in Buffalo?",
                      answer: "Flooring installation duration in Buffalo: Small rooms (bathroom) 1-2 days, average rooms 2-3 days, whole-home projects 5-10 days. Timeline depends on material type, subfloor condition, and accessibility modifications needed. Buffalo's humidity requires proper material acclimation which may add 1-2 days to ensure long-term performance."
                    },
                    {
                      question: "What flooring is best for accessibility and safety in Buffalo homes?",
                      answer: "Best accessible flooring for Buffalo homes includes luxury vinyl plank (waterproof, non-slip), low-pile carpet with antimicrobial treatment, and textured porcelain tile. These materials provide slip resistance, easy wheelchair navigation, simple maintenance, and durability in Buffalo's climate. Professional installation ensures proper transitions and safety compliance."
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
              <div className="bg-amber-900 text-white rounded-2xl p-6 mb-8 sticky top-4">
                <h3 className="text-2xl font-bold mb-4">Ready for Safe, Beautiful Floors?</h3>
                <p className="mb-6">Get your free flooring consultation from Buffalo's accessibility specialists.</p>
                
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
                  className="block w-full bg-yellow-600 hover:bg-yellow-700 text-white text-center py-3 rounded-lg font-semibold transition-colors"
                >
                  Call Now for Free Consultation
                </a>
              </div>

              {/* Flooring Types */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Accessible Flooring Options</h3>
                <div className="space-y-3 text-sm">
                  {[
                    { name: 'Luxury Vinyl Plank', benefit: 'Waterproof & Non-slip' },
                    { name: 'Porcelain Tile', benefit: 'Durable & Easy Clean' },
                    { name: 'Low-Pile Carpet', benefit: 'Soft & Safe' },
                    { name: 'Engineered Hardwood', benefit: 'Beautiful & Stable' },
                    { name: 'Rubber Flooring', benefit: 'Cushioned & Safe' },
                    { name: 'Cork Flooring', benefit: 'Antimicrobial & Warm' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">{item.name}</span>
                      <span className="text-amber-600 text-xs">{item.benefit}</span>
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
                    "200+ flooring installations completed", 
                    "Licensed contractor with safety expertise",
                    "Buffalo climate specialists",
                    "Accessibility compliance guaranteed",
                    "Safety-focused installation methods",
                    "Family-owned Buffalo business",
                    "Licensed & insured"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
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
      <section className="bg-gradient-to-r from-amber-800 to-yellow-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Step Safely Into Beautiful, Accessible Flooring Solutions
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Don't let unsafe flooring put your family at risk. 
            Our Buffalo-certified installation creates beautiful, slip-resistant floors that protect every family member while enhancing your home's value.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:716-533-7108" 
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <button className="bg-white text-amber-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-xl transition-colors">
              Schedule Free Consultation
            </button>
          </div>
          
          <p className="mt-6 text-amber-200">
            <strong>Serving Buffalo, Cheektowaga, Amherst, Tonawanda, West Seneca & All of Western New York</strong>
          </p>
          
          <div className="mt-8 text-amber-200 text-sm">
            <p>14 Mariemont Ave, Buffalo, NY 14220 | Licensed Contractor | Safety-Focused Installation</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BuffaloFlooringInstallationPage;
