import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Home, Truck, DollarSign, Clock, Shield, Star, MapPin, Wrench, Camera, FileText, TrendingUp, Users, Package } from 'lucide-react';
import Footer from '../components/Footer';

const InvestorServices: React.FC = () => {
  const services = [
    {
      icon: <Truck className="w-12 h-12 text-blue-600" />,
      title: 'Property Cleanouts & Debris Removal',
      description: 'Complete property clearing for foreclosures, estate sales, evictions, and rental turnovers.',
      details: 'Full-service removal of furniture, appliances, debris, and unwanted items. We handle donation coordination and proper disposal, leaving properties broom-clean and ready for renovations.'
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: 'Turnkey Renovation Services',
      description: 'Complete rehab from demo to final walkthrough - kitchens, bathrooms, flooring, painting, and more.',
      details: 'Full-service renovations including kitchen remodels, bathroom updates, flooring installation, interior/exterior painting, drywall repair, trim work, and finishing touches that maximize property value.'
    },
    {
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: 'Rental Property Maintenance',
      description: 'Ongoing maintenance and turnover services for landlords managing multiple Buffalo rental properties.',
      details: 'Fast turnover between tenants, emergency repairs, seasonal maintenance, property inspections, and preventive maintenance to minimize vacancy and protect your investment.'
    },
    {
      icon: <Camera className="w-12 h-12 text-purple-600" />,
      title: 'Property Documentation & Reporting',
      description: 'Detailed before/after photos, video walkthroughs, and progress reports for remote investors.',
      details: 'Complete photo documentation, video updates, itemized work reports, and transparent communication so you know exactly what\'s happening with your Buffalo properties from anywhere in the country.'
    },
    {
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: 'Budget-Conscious Renovations',
      description: 'Maximize ROI with cost-effective upgrades that appeal to Buffalo buyers and renters.',
      details: 'We understand investor budgets. Strategic improvements that increase property value without overcapitalizing. Volume pricing available for investors with multiple properties.'
    },
    {
      icon: <Clock className="w-12 h-12 text-red-600" />,
      title: 'Emergency Response Services',
      description: 'Fast response to property emergencies - water damage, vandalism, break-ins, weather damage.',
      details: '24/7 emergency response for investor properties. Board-up services, water extraction, emergency repairs to protect your investment and minimize losses.'
    }
  ];

  const whyOutOfTownInvestors = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-600" />,
      title: 'Your Local Buffalo Eyes & Hands',
      description: 'We serve as your on-the-ground team in Buffalo, managing properties so you don\'t have to fly in for every issue. Complete communication via phone, email, and video updates.'
    },
    {
      icon: <Camera className="w-8 h-8 text-purple-600" />,
      title: 'Photo & Video Documentation',
      description: 'Every project includes detailed photo/video documentation. You see exactly what we see - before, during, and after every job. No surprises, complete transparency.'
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-600" />,
      title: 'Detailed Estimates & Invoicing',
      description: 'Itemized estimates with clear scope of work. Digital invoicing with photo receipts. Coordinate with your property managers, accountants, or direct to you.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Licensed, Bonded & Insured',
      description: 'Full insurance coverage protects your investment. Licensed contractors, proper permits, code compliance. We handle all local Buffalo regulations.'
    },
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: 'Fast Response Times',
      description: 'Same-day response for emergencies. Quick turnaround on quotes and projects. We understand time = money for investors. Minimize vacancy, maximize cash flow.'
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: 'Property Manager Coordination',
      description: 'We work seamlessly with your Buffalo property managers, real estate agents, and other vendors. Coordinated scheduling, key access, and project management.'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Initial Contact & Property Assessment',
      description: 'Call or email us with your property address and needs. We schedule a walkthrough, take photos/video, and provide detailed written estimate.',
      timeline: 'Same day response'
    },
    {
      step: 2,
      title: 'Detailed Estimate & Scope Agreement',
      description: 'Receive itemized estimate with photo documentation. Review scope via phone/video call. Approve work remotely - no need to fly to Buffalo.',
      timeline: '24-48 hours'
    },
    {
      step: 3,
      title: 'Work Completion with Updates',
      description: 'We complete work on schedule with photo/video progress updates. You always know the status of your Buffalo property from anywhere.',
      timeline: 'Per project scope'
    },
    {
      step: 4,
      title: 'Final Walkthrough & Documentation',
      description: 'Receive complete before/after documentation, final invoice, and any warranties. Property ready for listing, rental, or next phase.',
      timeline: 'Final day'
    }
  ];

  const serviceAreas = [
    { city: 'Buffalo', details: 'City properties, multi-units, flips, rentals across all Buffalo neighborhoods' },
    { city: 'Amherst', details: 'Suburban investment properties, single-family homes, small multi-units' },
    { city: 'Tonawanda', details: 'Residential rentals, foreclosure cleanouts, property turnovers' },
    { city: 'North Tonawanda', details: 'Investment properties, rental maintenance, property management support' },
    { city: 'Kenmore', details: 'Village properties, rental units, investor renovations' },
    { city: 'Cheektowaga', details: 'Large inventory of rental properties, multi-family units' },
    { city: 'West Seneca', details: 'Suburban rentals, single-family investment properties' },
    { city: 'Lancaster', details: 'Growing rental market, property flips, investment opportunities' }
  ];

  const faqs = [
    {
      question: 'Do you work with out-of-town real estate investors in Buffalo?',
      answer: 'Yes! Most of our investor clients are out-of-state. We specialize in serving remote investors who own Buffalo properties but live elsewhere. We handle everything locally - walkthroughs, estimates, work, and documentation - with complete photo/video updates so you never need to fly in. We coordinate with your property managers, communicate via phone/email/video, and serve as your eyes and hands in Buffalo.'
    },
    {
      question: 'How do you communicate with remote investors about Buffalo properties?',
      answer: 'We use phone, email, text, and video calls for all communication. Every project includes detailed photo documentation before, during, and after work. You receive video walkthroughs, itemized estimates with photos, progress updates with pictures, and final documentation. We schedule calls at your convenience across any time zone. Many investors never visit their Buffalo properties - we handle everything remotely.'
    },
    {
      question: 'What types of properties do you work on for investors?',
      answer: 'We handle all Buffalo investment properties: single-family rentals, multi-family units (duplexes, triplexes, apartment buildings), foreclosures, REO properties, estate purchases, distressed properties, fix-and-flip projects, BRRRR properties, and commercial buildings. From small condos to large multi-units, we have experience with Buffalo\'s diverse property types.'
    },
    {
      question: 'How fast can you turn around investor properties in Buffalo?',
      answer: 'Speed depends on project scope. Property cleanouts typically take 1-3 days. Basic renovations (paint, flooring, minor repairs) take 1-2 weeks. Full rehabs (kitchen, bathroom, multiple rooms) take 3-6 weeks. Emergency repairs are handled same-day. We prioritize investor timelines to minimize vacancy and maximize cash flow. Volume discounts available for investors with multiple Buffalo properties.'
    },
    {
      question: 'Do you provide estimates without in-person meetings?',
      answer: 'Yes! For out-of-town investors, we can provide estimates based on photos/video you send, property manager walkthrough, lockbox access, or coordinated site visit. We send detailed photo/video documentation with itemized written estimates. Many investors approve entire projects remotely without ever visiting Buffalo. We make long-distance investing easy.'
    },
    {
      question: 'What are your rates for investor services in Buffalo?',
      answer: 'Rates vary by project scope. Property cleanouts: $800-5,000. Basic renovations: $5,000-15,000. Full rehabs: $15,000-50,000+. We provide transparent, itemized estimates with no hidden fees. Volume discounts for investors with multiple properties. Our goal is maximizing your ROI with budget-conscious solutions that appeal to Buffalo buyers/renters.'
    },
    {
      question: 'Can you coordinate with my Buffalo property manager or real estate agent?',
      answer: 'Absolutely! We work with property managers, real estate agents, and other vendors regularly. We coordinate scheduling, key access, inspections, and communication. Many property management companies refer us to their investor clients. We integrate seamlessly into your team and can invoice property managers directly if preferred.'
    },
    {
      question: 'Do you handle foreclosure and REO property cleanouts in Buffalo?',
      answer: 'Yes, foreclosure cleanouts are a specialty. We work with banks, asset managers, and investors purchasing foreclosed Buffalo properties. Complete property clearing, securing (board-up if needed), debris removal, cleaning, and renovation. We understand the unique challenges of distressed properties and work fast to get them market-ready.'
    },
    {
      question: 'What documentation do you provide for investor records?',
      answer: 'Complete documentation for your records and tax purposes: itemized invoices with labor/material breakdown, before/after photos, video walkthroughs, receipts for materials, donation receipts (if applicable), permit documentation, warranty information, and project completion reports. Digital delivery via email for easy filing.'
    },
    {
      question: 'Can you handle emergency situations at my Buffalo rental properties?',
      answer: 'Yes, 24/7 emergency response for investor properties. Water damage, break-ins, vandalism, weather damage, pipe bursts, tenant damage - we respond quickly to protect your investment. Board-up services, emergency repairs, water extraction, and temporary solutions until full repairs can be scheduled. Call anytime for emergencies.'
    },
    {
      question: 'Do you offer volume discounts for investors with multiple Buffalo properties?',
      answer: 'Yes! We offer preferred pricing for investors managing multiple Buffalo properties. Whether you own 3 rentals or 30, volume discounts apply to ongoing maintenance, multiple simultaneous projects, and recurring services. We value long-term investor relationships and reward portfolio owners with better rates.'
    },
    {
      question: 'How do I get started if I\'m an out-of-state investor with Buffalo properties?',
      answer: 'Call 716-533-7108 or email us with your property address and needs. We\'ll coordinate a walkthrough (with you via video call, your property manager, or using lockbox access), send detailed photo/video documentation and written estimate within 24-48 hours. Approve remotely and we handle everything. It\'s that simple - no need to fly to Buffalo.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Buffalo Real Estate Investor Services | Out-of-Town Property Management & Renovation</title>
        <meta name="description" content="Buffalo property services for out-of-town investors. Complete cleanouts, renovations, maintenance for remote real estate investors. Photo documentation, fast turnaround. Call 716-533-7108." />
        <meta name="keywords" content="buffalo investor services, out of town real estate investors buffalo, remote property management buffalo, buffalo rental property services, foreclosure cleanout buffalo, buffalo property renovation investors, turnkey buffalo properties" />
        <link rel="canonical" href="https://aaronmichaelservices.com/services/investor-services" />

        <meta property="og:title" content="Buffalo Real Estate Investor Services | Remote Property Management" />
        <meta property="og:description" content="Full-service property management for out-of-town Buffalo investors. Cleanouts, renovations, maintenance with complete photo documentation. Your local Buffalo team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aaronmichaelservices.com/services/investor-services" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Real Estate Investor Property Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Aaron Michael Services",
              "telephone": "716-533-7108",
              "priceRange": "$800-$50000",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Buffalo",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              "areaServed": serviceAreas.map(area => ({
                "@type": "City",
                "name": `${area.city}, NY`
              }))
            },
            "audience": {
              "@type": "BusinessAudience",
              "name": "Out-of-Town Real Estate Investors"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "800",
              "highPrice": "50000"
            },
            "additionalType": [
              "Property Cleanout Services",
              "Property Renovation Services",
              "Rental Property Maintenance",
              "Foreclosure Cleanup",
              "Property Management Support"
            ]
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

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <TrendingUp className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Buffalo Real Estate Investor Services for Out-of-Town Owners
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100">
                Your Local Buffalo Team | Complete Property Management | Remote Investor Specialists
              </p>
              <p className="text-lg mb-8 text-blue-200">
                Cleanouts, Renovations, Maintenance & Emergency Response - We're Your Eyes & Hands in Buffalo
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:716-533-7108"
                  className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (716) 533-7108
                </a>
                <Link
                  to="/contact"
                  className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-all duration-300 shadow-lg"
                >
                  Free Property Assessment
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Photo/Video Documentation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Remote Investor Specialists</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>24/7 Emergency Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Volume Discounts</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-around gap-6 text-center">
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Out-of-Town</div>
                  <div className="text-sm text-gray-600">Investor Focused</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="w-6 h-6 text-purple-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Photo/Video</div>
                  <div className="text-sm text-gray-600">Complete Documentation</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Fast Response</div>
                  <div className="text-sm text-gray-600">Same Day Quotes</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Volume Pricing</div>
                  <div className="text-sm text-gray-600">Portfolio Discounts</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Specialized Services for Out-of-Town Buffalo Real Estate Investors
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  If you're a <strong>real estate investor from outside Buffalo</strong> who owns rental properties, fix-and-flip projects, or multi-family buildings in <strong>Buffalo, Amherst, Tonawanda, Kenmore, or Western New York</strong>, Aaron Michael Services is your local boots-on-the-ground team. We specialize in serving <strong>remote investors</strong> who need reliable, trustworthy property services without flying to Buffalo for every issue.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Managing Buffalo investment properties from another state is challenging. You need someone local who understands Buffalo's real estate market, responds quickly, communicates clearly, and provides complete transparency. That's exactly what we do. With <strong>photo/video documentation</strong>, <strong>detailed reporting</strong>, and <strong>fast turnaround times</strong>, we keep your Buffalo properties profitable while you focus on finding the next deal.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you need <strong>foreclosure cleanouts</strong>, <strong>turnkey renovations</strong>, <strong>rental turnovers</strong>, <strong>emergency repairs</strong>, or <strong>ongoing maintenance</strong>, we handle it all. You'll receive complete before/after documentation, itemized invoicing, and transparent communication every step of the way. Many of our investor clients have never even visited their Buffalo properties—we make remote investing that easy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Complete Investor Property Services in Buffalo
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-blue-600">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-3 font-medium">{service.description}</p>
                    <p className="text-sm text-gray-600">{service.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Why Out-of-Town Investors Choose Us for Buffalo Properties
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                We understand the unique challenges of managing investment properties remotely
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyOutOfTownInvestors.map((item, idx) => (
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                How We Work with Remote Real Estate Investors
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-sm mb-3">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-blue-600 font-medium">
                      <Clock className="w-4 h-4" />
                      <span>{step.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Related Property Services for Buffalo Investors
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Comprehensive solutions for every stage of your Buffalo investment property
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/services/foreclosure-clean-out" className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow border-l-4 border-red-600 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600">Foreclosure Cleanouts</h3>
                  <p className="text-gray-600 text-sm mb-3">Complete cleanout services for REO and foreclosed Buffalo properties</p>
                  <span className="text-red-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/property-cleanouts" className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow border-l-4 border-blue-600 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Property Cleanouts</h3>
                  <p className="text-gray-600 text-sm mb-3">Fast property clearing for investor turnovers and acquisitions</p>
                  <span className="text-blue-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/kitchen-remodeling" className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow border-l-4 border-orange-600 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600">Kitchen Remodeling</h3>
                  <p className="text-gray-600 text-sm mb-3">Budget-conscious kitchen renovations that maximize rental/resale value</p>
                  <span className="text-orange-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/bathroom-remodeling" className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow border-l-4 border-green-600 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Bathroom Remodeling</h3>
                  <p className="text-gray-600 text-sm mb-3">High-ROI bathroom updates for Buffalo rental and flip properties</p>
                  <span className="text-green-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/hardwood-floors" className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow border-l-4 border-purple-600 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Flooring Installation</h3>
                  <p className="text-gray-600 text-sm mb-3">Hardwood, LVP, and laminate flooring for investment properties</p>
                  <span className="text-purple-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/basement-repairs" className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow border-l-4 border-teal-600 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600">Basement Repairs</h3>
                  <p className="text-gray-600 text-sm mb-3">Waterproofing, egress windows, and basement finishing for Buffalo properties</p>
                  <span className="text-teal-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/carpentry" className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow border-l-4 border-yellow-600 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-700">Carpentry Services</h3>
                  <p className="text-gray-600 text-sm mb-3">Trim work, doors, stairs, and finish carpentry for investor properties</p>
                  <span className="text-yellow-700 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/residential-junk-removal" className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow border-l-4 border-pink-600 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Junk Removal</h3>
                  <p className="text-gray-600 text-sm mb-3">Fast debris and junk removal for renovation projects</p>
                  <span className="text-pink-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/mobile-handyman-services" className="bg-white p-6 rounded-xl hover:shadow-xl transition-shadow border-l-4 border-indigo-600 group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Handyman Services</h3>
                  <p className="text-gray-600 text-sm mb-3">General repairs and maintenance for Buffalo rental properties</p>
                  <span className="text-indigo-600 font-medium text-sm">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Buffalo Investment Property Service Areas
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Serving real estate investors throughout Western New York
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="bg-white border-2 border-blue-200 rounded-lg p-6 hover:shadow-md transition-shadow hover:border-blue-400">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      {area.city}, NY
                    </h3>
                    <p className="text-gray-600 text-sm">{area.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Questions from Out-of-Town Buffalo Investors
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-sm border-l-4 border-blue-600">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 pl-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Your Local Buffalo Team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Call now for property assessment, detailed estimates, or emergency response
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:716-533-7108"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                (716) 533-7108
              </a>
              <Link
                to="/contact"
                className="bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg"
              >
                Email for Property Assessment
              </Link>
            </div>
            <p className="mt-6 text-blue-200">
              Serving out-of-town investors with Buffalo properties | Complete documentation | Fast response
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default InvestorServices;
