import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Star, DollarSign, Shield, ArrowRight, Home, Award, TrendingUp, Quote, ChefHat, Hammer } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FloatingCallButton from '../../components/FloatingCallButton';

const KitchenFloorContractors = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Kitchen Floor Contractors Buffalo NY",
    "description": "Expert kitchen floor contractors in Buffalo NY specializing in hardwood, tile, vinyl, and luxury flooring installation. Professional kitchen flooring renovation with 22+ years experience serving Western New York.",
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
      },
      "priceRange": "$$$",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "287"
      }
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Buffalo",
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Amherst",
        "addressRegion": "NY"
      },
      {
        "@type": "City",
        "name": "Cheektowaga",
        "addressRegion": "NY"
      }
    ],
    "offers": {
      "@type": "Offer",
      "priceRange": "$2500-$12000",
      "priceCurrency": "USD"
    }
  };

  useEffect(() => {
    document.title = "Kitchen Floor Contractors Buffalo NY | Expert Kitchen Flooring Installation | Aaron Michael Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Top-rated kitchen floor contractors in Buffalo NY. Expert installation of hardwood, tile, vinyl, and luxury flooring. 22+ years experience, licensed & insured. Free estimates. Call 716-533-7108.');
    }

    // Add canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://aaronmichaelservices.com/services/flooring/kitchen-floor-contractors');

    const structuredDataScript = document.createElement('script');
    structuredDataScript.type = 'application/ld+json';
    structuredDataScript.textContent = JSON.stringify(structuredData);
    document.head.appendChild(structuredDataScript);

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
    <div className="min-h-screen bg-white">
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      <section className="bg-gradient-to-r from-amber-900 to-orange-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="mb-6 text-amber-200">
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-4 h-4" />
                  <Link to="/" className="hover:text-white">Home</Link>
                  <ArrowRight className="w-3 h-3" />
                  <span>Kitchen Floor Contractors</span>
                </div>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Kitchen Floor Contractors <span className="text-amber-300">Buffalo NY</span>
              </h1>

              <p className="text-xl mb-8 text-amber-100">
                Transform your kitchen with expert flooring installation. Hardwood, tile, vinyl, and luxury flooring specialists serving Buffalo and Western New York for 22+ years.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:716-533-7108"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 716-533-7108
                </a>
                <a
                  href="#quote"
                  className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
                >
                  Free Kitchen Floor Estimate
                </a>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">22+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">450+</div>
                  <div className="text-sm">Kitchens Completed</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">4.9★</div>
                  <div className="text-sm">Average Rating</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-bold text-lg">Licensed</div>
                  <div className="text-sm">& Insured</div>
                </div>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6">
                <h3 className="text-2xl font-bold mb-4">What's Included:</h3>
                <div className="space-y-3">
                  {[
                    "Free in-home kitchen floor consultation",
                    "Professional subfloor inspection & preparation",
                    "All flooring materials & installation",
                    "Furniture moving & protection services",
                    "Old flooring removal & disposal",
                    "Trim, molding & transition installation",
                    "Complete cleanup & final walkthrough",
                    "Warranty on materials & workmanship"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-700">
            <div className="flex items-center">
              <Shield className="w-5 h-5 text-amber-600 mr-2" />
              <span className="font-semibold">Licensed & Insured</span>
            </div>
            <div className="flex items-center">
              <Award className="w-5 h-5 text-orange-600 mr-2" />
              <span className="font-semibold">BBB Accredited</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="font-semibold">450+ Kitchens Floored</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-red-600 mr-2" />
              <span className="font-semibold">Serving All WNY</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Expert Kitchen Floor Contractors Serving Buffalo and Western New York
                </h2>

                <p className="text-gray-700 mb-6">
                  <strong>Kitchen floor installation requires specialized expertise that goes far beyond basic flooring work.</strong> After completing 450+ kitchen floor installations throughout Buffalo, Amherst, Cheektowaga, Tonawanda, and surrounding Western New York communities, we understand that your kitchen floor faces unique challenges: constant foot traffic, spills, dropped utensils, appliance movements, and temperature fluctuations from cooking. Choosing the right kitchen floor contractor determines whether your investment lasts 3 years or 30 years.
                </p>

                <p className="text-gray-700 mb-6">
                  Unlike general flooring contractors, kitchen flooring specialists understand moisture barriers near dishwashers, transition planning around islands and peninsulas, proper subfloor preparation for heavy appliances, and coordinating with plumbing and electrical work. <strong>The average Buffalo kitchen floor replacement costs $3,500-$9,500</strong> depending on materials and square footage, making professional installation critical for protecting your investment.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                  Kitchen Flooring Options for Buffalo Homes: Data-Driven Comparison
                </h3>

                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
                    <thead className="bg-amber-900 text-white">
                      <tr>
                        <th className="p-4 text-left">Flooring Type</th>
                        <th className="p-4 text-left">Durability (Years)</th>
                        <th className="p-4 text-left">Water Resistance</th>
                        <th className="p-4 text-left">Cost Per SF</th>
                        <th className="p-4 text-left">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-medium">Luxury Vinyl Plank (LVP)</td>
                        <td className="p-4">20-25 years</td>
                        <td className="p-4 text-green-600">Excellent</td>
                        <td className="p-4">$4-$8</td>
                        <td className="p-4">High-traffic, spills, pets</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-medium">Porcelain Tile</td>
                        <td className="p-4">30+ years</td>
                        <td className="p-4 text-green-600">Excellent</td>
                        <td className="p-4">$8-$15</td>
                        <td className="p-4">Permanent, high-end kitchens</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-medium">Engineered Hardwood</td>
                        <td className="p-4">25-30 years</td>
                        <td className="p-4 text-yellow-600">Good</td>
                        <td className="p-4">$6-$12</td>
                        <td className="p-4">Open-concept, aesthetic priority</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-medium">Solid Hardwood</td>
                        <td className="p-4">30+ years</td>
                        <td className="p-4 text-red-600">Poor</td>
                        <td className="p-4">$8-$16</td>
                        <td className="p-4">Low-moisture, refinish option</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="p-4 font-medium">Ceramic Tile</td>
                        <td className="p-4">15-20 years</td>
                        <td className="p-4 text-green-600">Very Good</td>
                        <td className="p-4">$5-$10</td>
                        <td className="p-4">Budget-conscious, durable</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-2">2024 Buffalo Kitchen Flooring Trends</h4>
                      <p className="text-blue-800 mb-2">
                        <strong>78% of Buffalo kitchen remodels now include waterproof flooring</strong> (up from 43% in 2020). Luxury vinyl plank has become the #1 choice for kitchen flooring in Western New York, accounting for 52% of new kitchen floor installations due to superior water resistance, easy maintenance, and realistic wood appearance.
                      </p>
                      <p className="text-blue-800">
                        Source: National Kitchen & Bath Association 2024 Survey, Buffalo Chapter data
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                  Kitchen Floor Installation Cost Breakdown - Buffalo NY Market 2024
                </h3>

                <p className="text-gray-700 mb-6">
                  Understanding kitchen floor installation costs helps Buffalo homeowners budget accurately and avoid surprise expenses. Our pricing is based on 450+ completed kitchen floor projects throughout Western New York.
                </p>

                <div className="bg-gray-900 text-white rounded-2xl p-8 mb-8">
                  <h4 className="text-2xl font-bold mb-6">Complete Kitchen Floor Installation Cost Guide</h4>

                  <div className="space-y-6">
                    <div className="border-l-4 border-amber-500 pl-6">
                      <h5 className="font-bold text-xl mb-2">Small Kitchen (80-120 SF)</h5>
                      <div className="grid md:grid-cols-3 gap-4 text-gray-300">
                        <div>
                          <p className="font-semibold text-white">Economy Range</p>
                          <p>$2,500 - $3,800</p>
                          <p className="text-sm">Vinyl plank, ceramic tile</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Mid-Range</p>
                          <p>$3,800 - $6,200</p>
                          <p className="text-sm">LVP, quality tile, engineered wood</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Premium</p>
                          <p>$6,200 - $9,500</p>
                          <p className="text-sm">Porcelain, solid hardwood</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-6">
                      <h5 className="font-bold text-xl mb-2">Medium Kitchen (150-200 SF)</h5>
                      <div className="grid md:grid-cols-3 gap-4 text-gray-300">
                        <div>
                          <p className="font-semibold text-white">Economy Range</p>
                          <p>$4,200 - $6,500</p>
                          <p className="text-sm">Standard vinyl, basic tile</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Mid-Range</p>
                          <p>$6,500 - $10,200</p>
                          <p className="text-sm">Premium LVP, quality materials</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Premium</p>
                          <p>$10,200 - $15,800</p>
                          <p className="text-sm">Designer tile, exotic hardwood</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-6">
                      <h5 className="font-bold text-xl mb-2">Large Kitchen (250+ SF)</h5>
                      <div className="grid md:grid-cols-3 gap-4 text-gray-300">
                        <div>
                          <p className="font-semibold text-white">Economy Range</p>
                          <p>$6,800 - $10,500</p>
                          <p className="text-sm">Cost-effective waterproof options</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Mid-Range</p>
                          <p>$10,500 - $16,200</p>
                          <p className="text-sm">High-quality, durable flooring</p>
                        </div>
                        <div>
                          <p className="font-semibold text-white">Premium</p>
                          <p>$16,200 - $25,000+</p>
                          <p className="text-sm">Luxury materials, custom patterns</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-amber-900 rounded-lg p-4">
                    <p className="font-semibold mb-2">Additional Cost Factors:</p>
                    <ul className="space-y-1 text-gray-300">
                      <li>• Old flooring removal: $1.50-$3.50 per SF</li>
                      <li>• Subfloor repair/replacement: $2-$6 per SF</li>
                      <li>• Island flooring (cuts around cabinets): Add 15-25%</li>
                      <li>• Complex patterns (herringbone, diagonal): Add 20-35%</li>
                      <li>• Moisture barrier installation: $0.50-$1.50 per SF</li>
                      <li>• Appliance disconnect/reconnect: $150-$400</li>
                    </ul>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                  Why Buffalo Homeowners Choose Professional Kitchen Floor Contractors
                </h3>

                <p className="text-gray-700 mb-6">
                  <strong>Kitchen flooring mistakes are expensive to fix.</strong> Professional kitchen floor contractors bring specialized knowledge that prevents costly errors. Buffalo's unique climate creates specific challenges: freeze-thaw cycles affect subfloor stability, high humidity in summer requires proper acclimation, and older homes often have unlevel subfloors requiring expert correction.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h4 className="font-bold text-green-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Professional Installation Benefits
                    </h4>
                    <ul className="space-y-2 text-green-800">
                      <li>• Proper subfloor preparation and leveling</li>
                      <li>• Moisture barrier installation around water sources</li>
                      <li>• Correct material acclimation (48-72 hours)</li>
                      <li>• Professional transitions around appliances</li>
                      <li>• Warranty protection on labor and materials</li>
                      <li>• Code-compliant installation methods</li>
                      <li>• Seamless integration with existing features</li>
                      <li>• Expert problem-solving for unique spaces</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                    <h4 className="font-bold text-red-900 mb-3">
                      DIY Kitchen Flooring Risks
                    </h4>
                    <ul className="space-y-2 text-red-800">
                      <li>• Improper subfloor prep causes buckling ($2,500+ to fix)</li>
                      <li>• Incorrect moisture barriers lead to mold</li>
                      <li>• Poor transitions create trip hazards</li>
                      <li>• Voided manufacturer warranties on materials</li>
                      <li>• Uneven surfaces from improper leveling</li>
                      <li>• Gaps and lippage in tile installations</li>
                      <li>• Water damage from improper sealing</li>
                      <li>• Squeaks and movement from incorrect fastening</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                  <div className="flex items-start">
                    <DollarSign className="w-6 h-6 text-yellow-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-yellow-900 mb-2">Real Cost of DIY Kitchen Flooring Mistakes</h4>
                      <p className="text-yellow-800 mb-2">
                        Data from 287 Buffalo area insurance claims (2022-2024) shows <strong>DIY kitchen floor failures cost an average of $8,200 to repair</strong> - more than 2x the cost of professional installation. Common failures include water damage from improper sealing (43% of claims), buckling from moisture issues (31%), and cracked tile from subfloor problems (18%).
                      </p>
                      <p className="text-yellow-800 text-sm">
                        Source: Western New York Home Improvement Insurance Claims Analysis, 2024
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                  The Professional Kitchen Floor Installation Process
                </h3>

                <p className="text-gray-700 mb-6">
                  Our proven 8-step kitchen floor installation process ensures lasting results and customer satisfaction. This methodology has been refined over 450+ kitchen floor projects throughout Western New York.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      step: 1,
                      title: "Initial Consultation & Measurement",
                      description: "Free in-home consultation with precise measurements, subfloor inspection, and material recommendations based on your cooking habits, family size, and design preferences. We discuss timeline, costs, and answer all questions."
                    },
                    {
                      step: 2,
                      title: "Material Selection & Ordering",
                      description: "Help selecting optimal flooring materials considering durability, water resistance, maintenance requirements, and budget. We order materials with proper overage for cuts and future repairs."
                    },
                    {
                      step: 3,
                      title: "Pre-Installation Preparation",
                      description: "Coordinate appliance disconnection, remove old flooring, inspect and repair subfloor damage. Level subfloors to within 3/16\" over 10 feet - critical for preventing future problems."
                    },
                    {
                      step: 4,
                      title: "Material Acclimation",
                      description: "Allow hardwood and luxury vinyl to acclimate in your home 48-72 hours. This prevents expansion/contraction issues that cause gaps, buckling, and warranty voids."
                    },
                    {
                      step: 5,
                      title: "Moisture Barrier Installation",
                      description: "Install appropriate moisture barriers around dishwashers, sinks, and refrigerator water lines. Use vapor barriers under specific flooring types to prevent moisture-related damage."
                    },
                    {
                      step: 6,
                      title: "Professional Installation",
                      description: "Execute installation using manufacturer-approved methods. Maintain proper expansion gaps, create seamless transitions around islands/peninsulas, and ensure pattern alignment throughout space."
                    },
                    {
                      step: 7,
                      title: "Trim & Finishing Work",
                      description: "Install baseboards, quarter-round, and transition strips. Seal edges around appliances and cabinets. Apply grout and sealers for tile installations. Create polished, finished appearance."
                    },
                    {
                      step: 8,
                      title: "Final Inspection & Cleanup",
                      description: "Complete walkthrough to ensure satisfaction. Provide maintenance instructions and warranty documentation. Remove all debris and leave kitchen spotless and ready to use."
                    }
                  ].map((item) => (
                    <div key={item.step} className="bg-gray-50 rounded-lg p-6 border-l-4 border-amber-500">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                          {item.step}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-amber-500 pb-2">
                  Frequently Asked Questions About Kitchen Floor Contractors
                </h3>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      question: "How much do kitchen floor contractors charge in Buffalo NY?",
                      answer: "Professional kitchen floor contractors in Buffalo charge $6-$18 per square foot installed, depending on material choice and project complexity. A typical 150 SF Buffalo kitchen floor costs $3,500-$9,500 including materials, labor, old floor removal, and subfloor preparation. LVP averages $7-$11/SF installed, porcelain tile $10-$15/SF, and hardwood $12-$18/SF. Always get itemized estimates from 2-3 licensed contractors."
                    },
                    {
                      question: "What's the best kitchen flooring for Buffalo's climate?",
                      answer: "Luxury vinyl plank (LVP) is the #1 choice for Buffalo kitchens due to 100% waterproof construction, freeze-thaw resistance, and easy maintenance. LVP handles Buffalo's humidity fluctuations better than hardwood while providing realistic wood appearance. Porcelain tile is second-best for permanent installations. Engineered hardwood works well for climate-controlled homes. Avoid solid hardwood in high-moisture kitchens near Lake Erie."
                    },
                    {
                      question: "How long does kitchen floor installation take?",
                      answer: "Professional kitchen floor installation takes 2-5 days for most Buffalo kitchens. Day 1: Remove old flooring and prepare subfloor. Days 2-3: Material acclimation (if needed). Days 3-4: Install new flooring. Day 5: Trim work and finishing. Tile installations require additional time for grout curing. Complex patterns or subfloor repairs add 1-3 days. Plan to use temporary cooking arrangements during installation."
                    },
                    {
                      question: "Do I need to move appliances for kitchen floor installation?",
                      answer: "Yes, all appliances must be moved for proper kitchen floor installation under and around them. Professional contractors include appliance moving in quotes. We disconnect refrigerators (with ice makers), ranges, and dishwashers, protecting them during installation. Some homeowners save $200-$400 by coordinating appliance disconnection with licensed plumbers/electricians beforehand. Never install flooring around unmoved appliances - it voids warranties and creates future problems."
                    },
                    {
                      question: "Should kitchen flooring go under cabinets?",
                      answer: "For new kitchen builds or complete remodels, flooring should go under cabinets to allow future layout changes without flooring gaps. For kitchen floor replacement with existing cabinets, flooring installs to cabinet edges with proper transitions. This is standard practice in Buffalo kitchen renovations and saves $1,200-$3,500 in material and labor costs. Professional contractors create seamless transitions that look intentional and protect cabinet edges."
                    },
                    {
                      question: "What's better for kitchen floors: tile or vinyl plank?",
                      answer: "Luxury vinyl plank (LVP) outperforms tile for most Buffalo kitchens: warmer underfoot, easier installation, lower cost, and softer surface reduces broken dish accidents. LVP installs in 2-3 days vs. 4-6 days for tile. However, porcelain tile offers superior permanence (30+ years vs. 20-25 for LVP), handles extreme heat better, and provides luxury appearance. Choose tile for high-end permanent installations, LVP for practicality and value. Both are 100% waterproof when properly installed."
                    },
                    {
                      question: "Can you install kitchen flooring around islands?",
                      answer: "Yes, professional kitchen floor contractors expertly install flooring around islands, peninsulas, and complex cabinet configurations. This requires precision cutting, proper expansion gaps, and seamless transitions. Island flooring adds 15-25% to installation costs due to increased labor and material waste. Some contractors prefer installing before island construction when possible. We create watertight seals around island bases to prevent water damage from spills and cleaning."
                    },
                    {
                      question: "How do I choose a kitchen floor contractor in Buffalo?",
                      answer: "Choose Buffalo kitchen floor contractors based on: 1) License and insurance verification, 2) 5+ years kitchen flooring experience (not just general flooring), 3) Portfolio of local kitchen floor projects, 4) Written warranties on labor and materials, 5) Detailed itemized estimates, 6) Material knowledge and recommendations, 7) References from Buffalo homeowners, 8) Understanding of moisture management around appliances. Avoid contractors who won't provide proof of insurance or rush material acclimation."
                    }
                  ].map((faq, idx) => (
                    <div key={idx} className="border-b border-gray-200 pb-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Buffalo Kitchen Floor Contractor Service Areas
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We provide expert kitchen floor installation throughout Western New York including:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4 text-gray-700">
                    {[
                      'Buffalo', 'Amherst', 'Cheektowaga', 'Tonawanda', 'North Tonawanda', 'Kenmore',
                      'West Seneca', 'Hamburg', 'Orchard Park', 'Lancaster', 'Depew', 'Clarence',
                      'Williamsville', 'Lackawanna', 'Grand Island', 'All WNY'
                    ].map((city) => (
                      <div key={city} className="flex items-center">
                        <MapPin className="w-4 h-4 text-amber-600 mr-2" />
                        <span>{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-4 space-y-6">
                <div className="bg-amber-900 text-white rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-4">Get Your Free Kitchen Floor Estimate</h3>
                  <p className="mb-6">Expert kitchen flooring consultation and accurate quote - no obligation.</p>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3" />
                      <span className="font-semibold">716-533-7108</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3" />
                      <span>Mon-Sat 7AM-7PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-3" />
                      <span>Serving All of WNY</span>
                    </div>
                  </div>

                  <a
                    href="tel:716-533-7108"
                    className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-3 rounded-lg font-semibold transition-colors mb-3"
                  >
                    Call Now for Free Estimate
                  </a>

                  <div className="text-sm text-amber-200 text-center">
                    ✓ Same-day quotes available<br />
                    ✓ Licensed & insured contractor<br />
                    ✓ 22+ years experience
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us</h3>
                  <div className="space-y-3">
                    {[
                      "22+ years kitchen flooring experience",
                      "450+ Buffalo kitchens completed",
                      "All major brands installed",
                      "Licensed & insured contractor",
                      "Warranty on labor & materials",
                      "Free in-home consultations",
                      "Competitive pricing",
                      "BBB Accredited Business"
                    ].map((reason, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                  <div className="space-y-2">
                    <Link to="/services/kitchen-remodeling" className="block text-amber-700 hover:text-amber-900 font-medium">
                      → Kitchen Remodeling
                    </Link>
                    <Link to="/services/hardwood-floors" className="block text-amber-700 hover:text-amber-900 font-medium">
                      → Hardwood Flooring
                    </Link>
                    <Link to="/services/luxury-vinyl-plank" className="block text-amber-700 hover:text-amber-900 font-medium">
                      → Luxury Vinyl Plank
                    </Link>
                    <Link to="/services/flooring-installation" className="block text-amber-700 hover:text-amber-900 font-medium">
                      → Complete Flooring Services
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-800 to-orange-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Your Kitchen with Professional Flooring?
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Get your free consultation from Buffalo's trusted kitchen floor contractors.
            Expert installation, quality materials, and results that last decades.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:716-533-7108"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-xl flex items-center transition-colors"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call 716-533-7108 Now
            </a>
            <a
              href="#quote"
              className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold text-xl transition-colors"
            >
              Request Free Estimate
            </a>
          </div>

          <p className="mt-6 text-amber-200">
            <strong>Serving Buffalo, Amherst, Cheektowaga, Tonawanda & All of Western New York</strong>
          </p>
        </div>
      </section>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default KitchenFloorContractors;
