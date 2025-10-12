import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, CheckCircle, Wrench, Home, Hammer, DollarSign, Shield, Star, Settings, Zap } from 'lucide-react';
import Footer from '../components/Footer';

const MobileHandymanServices: React.FC = () => {
  const services = [
    {
      category: 'Door Services',
      items: [
        { service: 'Interior Door Repair/Adjustment', priceRange: '$75 - $150', time: '1-2 hours', description: 'Fix sticking doors, adjust hinges, tighten hardware' },
        { service: 'Exterior Door Repair', priceRange: '$100 - $250', time: '1-3 hours', description: 'Weather seal replacement, hardware repair, alignment' },
        { service: 'Door Lock Installation', priceRange: '$85 - $175', time: '1 hour', description: 'Install new deadbolts, handle sets, smart locks' },
        { service: 'Screen Door Repair', priceRange: '$65 - $140', time: '1 hour', description: 'Replace screens, adjust closers, fix latches' },
        { service: 'Sliding Door Repair', priceRange: '$125 - $300', time: '2-3 hours', description: 'Roller replacement, track cleaning, lock repair' }
      ]
    },
    {
      category: 'Window Services',
      items: [
        { service: 'Window Screen Repair', priceRange: '$50 - $100', time: '30 min - 1 hour', description: 'Patch or replace torn screens, fix frames' },
        { service: 'Window Balance Replacement', priceRange: '$100 - $200 per window', time: '1-2 hours', description: 'Fix stuck or falling windows' },
        { service: 'Window Caulking/Weather Sealing', priceRange: '$75 - $150', time: '1-2 hours', description: 'Seal drafty windows, improve energy efficiency' },
        { service: 'Window Lock/Hardware Repair', priceRange: '$60 - $120', time: '30 min - 1 hour', description: 'Replace broken locks, handles, latches' }
      ]
    },
    {
      category: 'Carpentry & Trim Work',
      items: [
        { service: 'Baseboard Installation', priceRange: '$150 - $400 per room', time: '2-4 hours', description: 'Install new baseboards, paint-grade or stain-grade' },
        { service: 'Crown Molding Installation', priceRange: '$200 - $600 per room', time: '3-5 hours', description: 'Decorative crown molding, custom cuts' },
        { service: 'Trim Repair/Replacement', priceRange: '$100 - $250', time: '1-3 hours', description: 'Fix damaged window/door trim, casing' },
        { service: 'Chair Rail Installation', priceRange: '$175 - $350 per room', time: '2-3 hours', description: 'Decorative wall trim at chair height' },
        { service: 'Stair Tread Repair', priceRange: '$125 - $300', time: '2-3 hours', description: 'Fix squeaky or damaged stairs' },
        { service: 'Railing Installation', priceRange: '$200 - $500', time: '3-5 hours', description: 'Interior/exterior handrails for safety' }
      ]
    },
    {
      category: 'Drywall Services',
      items: [
        { service: 'Small Drywall Hole Repair', priceRange: '$75 - $150', time: '1-2 hours', description: 'Patch holes up to 6 inches' },
        { service: 'Large Drywall Repair', priceRange: '$150 - $400', time: '2-4 hours', description: 'Replace damaged sections, texture matching' },
        { service: 'Drywall Anchor Installation', priceRange: '$50 - $100', time: '30 min - 1 hour', description: 'Heavy-duty anchors for TVs, shelves' },
        { service: 'Wall Texturing', priceRange: '$125 - $350', time: '2-3 hours', description: 'Match existing texture, orange peel, knockdown' }
      ]
    },
    {
      category: 'Painting Services',
      items: [
        { service: 'Room Painting (Small)', priceRange: '$200 - $400', time: '4-6 hours', description: 'Single room up to 12x12, walls only' },
        { service: 'Room Painting (Medium)', priceRange: '$350 - $650', time: '6-8 hours', description: 'Bedroom or living room, walls and trim' },
        { service: 'Ceiling Painting', priceRange: '$150 - $350', time: '2-4 hours', description: 'Standard 10x12 ceiling' },
        { service: 'Cabinet Painting', priceRange: '$400 - $1,200', time: '1-2 days', description: 'Kitchen cabinet refresh, professional finish' },
        { service: 'Deck Staining', priceRange: '$500 - $1,500', time: '1-2 days', description: 'Pressure wash, stain, seal' },
        { service: 'Touch-Up Painting', priceRange: '$75 - $150', time: '1-2 hours', description: 'Minor wall repairs and paint matching' }
      ]
    },
    {
      category: 'Fixture Installation',
      items: [
        { service: 'Light Fixture Installation', priceRange: '$85 - $175', time: '1-2 hours', description: 'Ceiling lights, chandeliers, vanity lights' },
        { service: 'Ceiling Fan Installation', priceRange: '$125 - $250', time: '1-2 hours', description: 'Install new fan with light kit' },
        { service: 'Outlet/Switch Installation', priceRange: '$75 - $150', time: '1 hour', description: 'Add new electrical outlets or switches' },
        { service: 'Towel Bar/Grab Bar Installation', priceRange: '$65 - $125', time: '30 min - 1 hour', description: 'Secure bathroom hardware mounting' },
        { service: 'Toilet Installation', priceRange: '$150 - $300', time: '2-3 hours', description: 'Remove old, install new toilet' },
        { service: 'Faucet Replacement', priceRange: '$125 - $250', time: '1-2 hours', description: 'Kitchen or bathroom faucet swap' },
        { service: 'Garbage Disposal Installation', priceRange: '$150 - $300', time: '1-2 hours', description: 'Install new disposal unit' }
      ]
    },
    {
      category: 'Floor Services',
      items: [
        { service: 'Floor Squeaks Repair', priceRange: '$100 - $250', time: '1-2 hours', description: 'Secure loose floorboards, eliminate noise' },
        { service: 'Transition Strip Installation', priceRange: '$75 - $150', time: '1 hour', description: 'Install threshold between floor types' },
        { service: 'Baseboard Shoe Molding', priceRange: '$100 - $250', time: '2-3 hours', description: 'Quarter round or shoe molding for flooring' },
        { service: 'Hardwood Floor Repair (Small)', priceRange: '$150 - $350', time: '2-3 hours', description: 'Replace damaged boards, refinish' }
      ]
    },
    {
      category: 'Shelving & Storage',
      items: [
        { service: 'Shelf Installation (per shelf)', priceRange: '$60 - $125', time: '30 min - 1 hour', description: 'Floating shelves, bracket shelves' },
        { service: 'Closet Rod Installation', priceRange: '$75 - $150', time: '1 hour', description: 'Install single or double closet rods' },
        { service: 'Garage Storage System', priceRange: '$200 - $600', time: '3-5 hours', description: 'Wall-mounted organization system' },
        { service: 'TV Wall Mounting', priceRange: '$125 - $250', time: '1-2 hours', description: 'Professional TV mounting, cable management' }
      ]
    },
    {
      category: 'Exterior Services',
      items: [
        { service: 'Gutter Cleaning', priceRange: '$100 - $250', time: '1-2 hours', description: 'Clean gutters and downspouts' },
        { service: 'Minor Gutter Repair', priceRange: '$125 - $300', time: '1-3 hours', description: 'Fix leaks, reattach sections' },
        { service: 'Pressure Washing (Small)', priceRange: '$150 - $350', time: '2-3 hours', description: 'Deck, patio, or walkway cleaning' },
        { service: 'Mailbox Installation', priceRange: '$85 - $175', time: '1-2 hours', description: 'Post mount or wall mount mailbox' },
        { service: 'House Numbers Installation', priceRange: '$50 - $100', time: '30 min', description: 'Mount address numbers' },
        { service: 'Gate Repair', priceRange: '$100 - $250', time: '1-2 hours', description: 'Fix sagging gates, replace hardware' }
      ]
    },
    {
      category: 'Assembly Services',
      items: [
        { service: 'Furniture Assembly (Small)', priceRange: '$75 - $150', time: '1-2 hours', description: 'Chairs, small tables, nightstands' },
        { service: 'Furniture Assembly (Medium)', priceRange: '$125 - $250', time: '2-3 hours', description: 'Beds, dressers, bookshelves' },
        { service: 'Furniture Assembly (Large)', priceRange: '$200 - $400', time: '3-5 hours', description: 'Entertainment centers, wardrobes' },
        { service: 'Swing Set Assembly', priceRange: '$250 - $600', time: '4-6 hours', description: 'Backyard play equipment' },
        { service: 'Basketball Hoop Installation', priceRange: '$150 - $350', time: '2-4 hours', description: 'In-ground or portable system' }
      ]
    },
    {
      category: 'Miscellaneous Services',
      items: [
        { service: 'Smoke Detector Installation', priceRange: '$50 - $100', time: '30 min', description: 'Hardwired or battery-operated' },
        { service: 'Weather Stripping', priceRange: '$75 - $150', time: '1-2 hours', description: 'Seal doors and windows' },
        { service: 'Caulking Services', priceRange: '$100 - $200', time: '1-2 hours', description: 'Bathroom, kitchen, window caulking' },
        { service: 'Minor Plumbing Repair', priceRange: '$100 - $250', time: '1-2 hours', description: 'Fix leaks, replace washers, unclog drains' },
        { service: 'Vent Cover Installation', priceRange: '$60 - $120', time: '1 hour', description: 'HVAC vent covers and registers' },
        { service: 'Mirror Installation', priceRange: '$85 - $175', time: '1 hour', description: 'Wall-mounted mirrors' },
        { service: 'Child Safety Installation', priceRange: '$100 - $200', time: '2-3 hours', description: 'Cabinet locks, outlet covers, gates' }
      ]
    }
  ];

  const serviceAreas = [
    'Buffalo, NY',
    'Amherst, NY',
    'Tonawanda, NY',
    'North Tonawanda, NY',
    'Kenmore, NY',
    'Cheektowaga, NY',
    'West Seneca, NY',
    'Williamsville, NY',
    'Lancaster, NY',
    'Depew, NY',
    'Clarence, NY',
    'Orchard Park, NY',
    'Hamburg, NY',
    'East Amherst, NY'
  ];

  const faqs = [
    {
      question: 'What is mobile handyman service?',
      answer: 'Mobile handyman service means we come directly to your Buffalo area home with all necessary tools and equipment to complete repairs and installations on-site. No need to bring items to a shop or wait days for service.'
    },
    {
      question: 'How much does a handyman cost in Buffalo?',
      answer: 'Handyman rates in Buffalo typically range from $50-$150 per hour depending on the job complexity. Most jobs include a service call fee of $75-$100. We provide transparent pricing before starting any work.'
    },
    {
      question: 'Do you charge a trip fee?',
      answer: 'Yes, we charge a standard service call fee of $75 within Buffalo city limits, which covers travel time and initial assessment. This fee is waived for jobs over $300.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We provide mobile handyman services throughout Western New York including Buffalo, Amherst, Tonawanda, Kenmore, Cheektowaga, and surrounding communities within a 20-mile radius.'
    },
    {
      question: 'How quickly can you come out?',
      answer: 'We offer same-day and next-day service for most repairs. Emergency services are available for urgent issues like door locks, security concerns, or accessibility needs.'
    },
    {
      question: 'Do you provide estimates before starting work?',
      answer: 'Absolutely. We provide clear, written estimates before beginning any job. If we discover additional work needed, we discuss it with you first and get approval before proceeding.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, Aaron Michael Services is fully licensed, bonded, and insured. We carry liability insurance and workers compensation coverage for your protection.'
    },
    {
      question: 'What forms of payment do you accept?',
      answer: 'We accept cash, checks, credit cards (Visa, Mastercard, Discover, American Express), and digital payment options. Payment is due upon job completion.'
    },
    {
      question: 'Do you offer senior discounts?',
      answer: 'Yes, we offer a 10% discount for seniors (65+) and veterans on most handyman services. Ask when scheduling your appointment.'
    },
    {
      question: 'Can you handle multiple jobs in one visit?',
      answer: 'Absolutely! We encourage bundling multiple small jobs into one visit to save you time and money. We call this our "honey-do list" service.'
    },
    {
      question: 'Do you guarantee your work?',
      answer: 'Yes, all work is guaranteed for quality and workmanship. If you are not satisfied, we will make it right. Most repairs include a 90-day warranty.'
    },
    {
      question: 'What if you cannot fix something?',
      answer: 'In rare cases where a job requires specialized licensing (like major electrical or plumbing), we will refer you to trusted local professionals and only charge the service call fee.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: '25+ Years Experience',
      description: 'Trusted Buffalo contractor with decades of home repair expertise'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: 'Fast Response',
      description: 'Same-day and next-day service available throughout WNY'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: 'Transparent Pricing',
      description: 'Clear estimates before work begins, no surprise charges'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Fully Insured',
      description: 'Licensed, bonded, and insured for your peace of mind'
    },
    {
      icon: <Settings className="w-8 h-8 text-gray-700" />,
      title: 'Fully Equipped',
      description: 'Mobile service with professional tools and equipment'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: 'Quality Guaranteed',
      description: 'Workmanship warranty on all repairs and installations'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mobile Handyman Services Buffalo NY | Same Day Repairs | Pricing Guide</title>
        <meta name="description" content="Mobile handyman services in Buffalo NY with transparent pricing. Same-day service available. Door repair $75-150, painting $200-650, fixture installation $85-250. Call 716-533-7108 for free estimate." />
        <meta name="keywords" content="mobile handyman buffalo ny, handyman prices buffalo, handyman cost buffalo, same day handyman, mobile repair service buffalo, handyman rates buffalo, home repair buffalo ny" />
        <link rel="canonical" href="https://aaronmichaelservices.com/services/mobile-handyman-services" />

        <meta property="og:title" content="Mobile Handyman Services Buffalo NY | Pricing Per Job" />
        <meta property="og:description" content="Professional mobile handyman serving Buffalo & WNY. Transparent pricing, same-day service, 25+ years experience. Free estimates on all jobs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aaronmichaelservices.com/services/mobile-handyman-services" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Mobile Handyman Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Aaron Michael Services",
              "image": "https://aaronmichaelservices.com/logo.png",
              "telephone": "716-533-7108",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buffalo",
                "addressRegion": "NY",
                "addressCountry": "US"
              }
            },
            "areaServed": serviceAreas.map(area => ({
              "@type": "City",
              "name": area
            })),
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "50",
              "highPrice": "1500"
            }
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <Wrench className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mobile Handyman Services in Buffalo, NY
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-green-50">
                Professional Home Repairs with Transparent Pricing
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:716-533-7108"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (716) 533-7108
                </a>
                <Link
                  to="/contact"
                  className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-all duration-300 shadow-lg"
                >
                  Get Free Estimate
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Same Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>25+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Info Bar */}
        <section className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-around gap-6 text-center">
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Fast Service</div>
                  <div className="text-sm text-gray-600">Same/Next Day</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">From $50</div>
                  <div className="text-sm text-gray-600">Per Job</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Buffalo & WNY</div>
                  <div className="text-sm text-gray-600">20 Mile Radius</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Fully Insured</div>
                  <div className="text-sm text-gray-600">Licensed & Bonded</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Complete Handyman Services with Clear Pricing
                </h2>
                <p className="text-xl text-gray-600">
                  Professional mobile repair services throughout Buffalo and Western New York
                </p>
              </div>

              <div className="space-y-8">
                {services.map((category, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4">
                      <h3 className="text-2xl font-bold flex items-center gap-3">
                        <Hammer className="w-6 h-6" />
                        {category.category}
                      </h3>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Service</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Price Range</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Time</th>
                            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {category.items.map((item, itemIdx) => (
                            <tr key={itemIdx} className="hover:bg-gray-50 transition-colors">
                              <td className="px-6 py-4 text-gray-900 font-medium">{item.service}</td>
                              <td className="px-6 py-4 text-green-600 font-bold whitespace-nowrap">{item.priceRange}</td>
                              <td className="px-6 py-4 text-gray-600 whitespace-nowrap">{item.time}</td>
                              <td className="px-6 py-4 text-gray-600">{item.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Pricing Notes:</h4>
                    <ul className="text-gray-700 space-y-1 text-sm">
                      <li>• Prices include labor, standard materials, and service call within Buffalo city limits</li>
                      <li>• Additional trip fee may apply outside 10-mile radius</li>
                      <li>• Specialty materials or custom parts billed at cost</li>
                      <li>• Senior (65+) and veteran discounts available</li>
                      <li>• Bundle multiple jobs for better rates</li>
                      <li>• Free estimates on all jobs over $300</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Why Choose Aaron Michael Services?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                    <div className="mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Serving Buffalo & Western New York
              </h2>
              <div className="flex items-center justify-center gap-2 mb-8">
                <MapPin className="w-6 h-6 text-green-600" />
                <p className="text-lg text-gray-600">Mobile handyman service throughout WNY</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-3 text-gray-700 font-medium hover:bg-green-50 transition-colors">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Your Home Repairs Done?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Call now for same-day service or schedule your free estimate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:716-533-7108"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                (716) 533-7108
              </a>
              <Link
                to="/contact"
                className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-all duration-300 shadow-lg"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default MobileHandymanServices;
