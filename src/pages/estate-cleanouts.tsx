import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle, Trash2, Clock, Shield, Home, Truck, Heart, Users, DollarSign, FileText, MapPin, Star, Package } from 'lucide-react';
import Footer from '../components/Footer';

const EstateCleanouts: React.FC = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: 'Complete Estate Clearing',
      description: 'Full property cleanout after loss of loved one, handling every room from attic to basement with compassion and respect.',
      details: 'We sort, organize, identify valuables, coordinate donations, and remove all unwanted items. Perfect for executors and family members managing estate settlements.'
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: 'Senior Downsizing Services',
      description: 'Helping seniors transition from large homes to smaller spaces or assisted living with patience and care.',
      details: 'We assist with sorting decades of belongings, identifying items to keep, donate, or sell. Coordinating moves to senior communities throughout Buffalo and WNY.'
    },
    {
      icon: <Package className="w-12 h-12 text-green-600" />,
      title: 'Post-Estate Sale Cleanup',
      description: 'Complete property clearing after estate sales, removing all unsold items and preparing home for next steps.',
      details: 'We work with estate sale companies to handle final cleanup, ensuring properties are broom-clean and ready for sale or occupancy.'
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: 'Donation Coordination',
      description: 'Partnership with Buffalo-area charities to donate usable items, extending your loved one\'s legacy through giving.',
      details: 'Tax-deductible donation receipts provided. We work with Goodwill, Salvation Army, Habitat ReStore, and local churches.'
    },
    {
      icon: <FileText className="w-12 h-12 text-orange-600" />,
      title: 'Document & Valuable Identification',
      description: 'Careful sorting to identify important documents, valuables, photos, and sentimental items for family review.',
      details: 'Nothing of value is discarded without approval. We set aside legal documents, financial records, jewelry, collectibles, and family heirlooms.'
    },
    {
      icon: <Truck className="w-12 h-12 text-indigo-600" />,
      title: 'Hoarding Cleanup Assistance',
      description: 'Specialized estate cleanouts for hoarding situations, working with compassion and understanding.',
      details: 'We handle extreme clutter situations with sensitivity, coordinating mental health resources when appropriate.'
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Free Consultation & Walkthrough',
      description: 'We tour the property, discuss your needs, identify special items, and provide a detailed written estimate.',
      timeline: '1 hour'
    },
    {
      step: 2,
      title: 'Sorting & Organization',
      description: 'Our team carefully sorts contents into keep, donate, sell, and dispose categories with family input.',
      timeline: '1-3 days'
    },
    {
      step: 3,
      title: 'Donation & Disposal',
      description: 'Items are delivered to charities, recyclables processed, and unwanted materials responsibly disposed.',
      timeline: '1-2 days'
    },
    {
      step: 4,
      title: 'Final Cleaning & Walkthrough',
      description: 'Property is cleaned, final items reviewed, and you receive donation receipts and completion documentation.',
      timeline: '1 day'
    }
  ];

  const serviceAreas = [
    { city: 'Buffalo', details: 'Historic homes in Elmwood Village, North Buffalo, South Buffalo, waterfront properties' },
    { city: 'Amherst', details: 'Williamsville, Snyder, Eggertsville, North Forest - apartments to large estates' },
    { city: 'Tonawanda', details: 'Residential properties, senior communities, riverside homes' },
    { city: 'North Tonawanda', details: 'Family homes, older properties, estate settlements' },
    { city: 'Kenmore', details: 'Village properties, multi-generation homes, downsizing assistance' },
    { city: 'Cheektowaga', details: 'Ranch homes, split-levels, senior transitions' },
    { city: 'West Seneca', details: 'Suburban estates, large properties, family homes' },
    { city: 'Lancaster', details: 'Rural properties, large estates, farm cleanouts' },
    { city: 'Orchard Park', details: 'Executive homes, estate properties' },
    { city: 'Hamburg', details: 'Lakefront properties, family estates' }
  ];

  const faqs = [
    {
      question: 'How much does an estate cleanout cost in Buffalo NY?',
      answer: 'Estate cleanout costs in Buffalo range from $1,500 to $5,000 for typical homes. Small apartments or condos start around $800-1,500. Large estates with extensive contents may cost $5,000-10,000+. Factors include property size, volume of contents, accessibility, donation coordination, and special handling requirements. We provide free consultations and written estimates with no obligation.'
    },
    {
      question: 'How long does an estate cleanout take in Western New York?',
      answer: 'Most Buffalo estate cleanouts take 1-5 days. Small apartments (1-2 bedrooms) typically take 1-2 days. Average homes (3-4 bedrooms) take 2-4 days. Large estates with basements, garages, and extensive contents may take 5-7 days. We work efficiently while maintaining respect for the property and family needs.'
    },
    {
      question: 'Do I need to be present during the estate cleanout?',
      answer: 'You don\'t need to be present for the entire cleanout. We recommend being available for the initial walkthrough to identify valuable or sentimental items. We can photograph items for your review, set aside anything questionable, and check in regularly for approval. Many Buffalo families provide initial guidance then let us work independently.'
    },
    {
      question: 'What items can be donated during estate cleanouts?',
      answer: 'Buffalo-area charities accept furniture, clothing, household goods, kitchenware, books, tools, and working appliances. We work with Goodwill, Salvation Army, Habitat for Humanity ReStore, AmVets, and local churches. Items must be clean and functional. We provide tax-deductible donation receipts for estate tax purposes.'
    },
    {
      question: 'How do you handle valuable items found during cleanouts?',
      answer: 'We carefully identify potential valuables including jewelry, coins, collectibles, artwork, antiques, and important documents. These items are set aside for family review before any decisions are made. We can coordinate with estate appraisers and auction houses for high-value items. Nothing of potential value is discarded without explicit approval.'
    },
    {
      question: 'Do you work with estate attorneys and executors in Buffalo?',
      answer: 'Yes, we regularly work with estate attorneys, executors, probate lawyers, and estate administrators throughout Western New York. We understand legal requirements, provide detailed documentation, maintain confidentiality, and coordinate timing with estate settlement schedules. We can invoice estates directly.'
    },
    {
      question: 'Can you help with senior downsizing before estate situations?',
      answer: 'Absolutely. Our senior downsizing services help Buffalo seniors transition from large homes to smaller spaces or assisted living. We work at the senior\'s pace, help sort belongings, coordinate donations, and manage the moving process. Many families use our services proactively to avoid future estate cleanout stress.'
    },
    {
      question: 'What happens to items that cannot be donated or sold?',
      answer: 'We responsibly dispose of items that cannot be donated. Recyclable materials go to Buffalo recycling centers. Furniture and items in poor condition are properly disposed at licensed facilities. We minimize landfill waste whenever possible and follow all local disposal regulations.'
    },
    {
      question: 'Do you provide cleaning after estate cleanouts?',
      answer: 'Yes, final cleaning is included in most estate cleanout packages. We leave properties broom-clean and ready for sale or occupancy. For deeper cleaning or repairs, we offer additional services or can coordinate with our maintenance team for painting, flooring, and home improvements needed before listing.'
    },
    {
      question: 'How do you handle hoarding situations in estate cleanouts?',
      answer: 'We approach hoarding cleanouts with compassion and understanding. Our team is trained in sensitive handling of extreme clutter situations. We work methodically, identifying items of value amidst the clutter, and can coordinate with mental health professionals when appropriate. Many Buffalo estate cleanouts involve some level of hoarding that requires specialized attention.'
    },
    {
      question: 'Can you coordinate with estate sale companies?',
      answer: 'Yes, we work closely with Buffalo-area estate sale companies. We can help prepare for estate sales by organizing and staging items, or handle post-sale cleanup of unsold items. We have established relationships with reputable estate liquidators throughout Western New York.'
    },
    {
      question: 'Do you provide documentation for estate settlements?',
      answer: 'Yes, we provide detailed documentation including itemized removal lists, donation receipts for tax purposes, disposal records, and before/after photos. This documentation is essential for estate tax filings and probate proceedings. We maintain organized records for Buffalo estate attorneys and executors.'
    }
  ];

  const whyChooseUs = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Compassionate Approach',
      description: 'We understand this is an emotional time. Our team treats every property and family with respect, dignity, and understanding.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: 'Fully Licensed & Insured',
      description: 'Complete insurance coverage protects families and properties. Licensed and bonded for your peace of mind.'
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: '25+ Years Local Experience',
      description: 'Deep roots in Western New York with established relationships with charities, attorneys, and estate professionals.'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: 'Efficient & Thorough',
      description: 'Systematic approach ensures nothing is missed. We work quickly while maintaining careful attention to detail.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-green-600" />,
      title: 'Transparent Pricing',
      description: 'Written estimates with no hidden fees. We clearly explain costs before starting any work.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: 'Family-Focused Service',
      description: 'We work around family schedules, provide regular updates, and involve you in all major decisions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Estate Cleanouts Buffalo NY | Compassionate Estate Clearing Services</title>
        <meta name="description" content="Professional estate cleanout services in Buffalo, Amherst, Tonawanda & Kenmore NY. Compassionate clearing, downsizing, donation coordination. Free estimates. Call 716-533-7108." />
        <meta name="keywords" content="estate cleanouts buffalo ny, estate sale cleanup western new york, downsizing services buffalo, property clearing after death, estate liquidation buffalo, senior downsizing amherst, compassionate estate clearing" />
        <link rel="canonical" href="https://aaronmichaelservices.com/services/estate-cleanouts" />

        <meta property="og:title" content="Estate Cleanouts Buffalo NY | Compassionate Estate Clearing" />
        <meta property="og:description" content="Professional estate cleanout services throughout Western New York. Compassionate, thorough, respectful. Free consultations. Call 716-533-7108." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aaronmichaelservices.com/services/estate-cleanouts" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Estate Cleanout Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Aaron Michael Services",
              "telephone": "716-533-7108",
              "priceRange": "$800-$10000",
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
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "lowPrice": "800",
              "highPrice": "10000"
            },
            "additionalType": [
              "Estate Clearing",
              "Senior Downsizing",
              "Property Cleanout",
              "Estate Sale Cleanup",
              "Hoarding Cleanup"
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
        <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
                  <Heart className="w-16 h-16" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Compassionate Estate Cleanout Services in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-100">
                Professional Estate Clearing | Senior Downsizing | Donation Coordination
              </p>
              <p className="text-lg mb-8 text-gray-200">
                Respectful, thorough property clearing with 25+ years of local experience
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="tel:716-533-7108"
                  className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  Call (716) 533-7108
                </a>
                <Link
                  to="/contact"
                  className="bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-600 transition-all duration-300 shadow-lg"
                >
                  Free Consultation
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Free Estimates</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>25+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span>Donation Coordination</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white border-b shadow-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap justify-around gap-6 text-center">
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Compassionate</div>
                  <div className="text-sm text-gray-600">Respectful Service</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">1-5 Days</div>
                  <div className="text-sm text-gray-600">Most Cleanouts</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-green-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">$1,500-$5,000</div>
                  <div className="text-sm text-gray-600">Typical Homes</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                <div className="text-left">
                  <div className="font-bold text-gray-900">Buffalo & WNY</div>
                  <div className="text-sm text-gray-600">10+ Communities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Understanding Estate Cleanouts in Buffalo & Western New York
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-xl leading-relaxed mb-6">
                  Handling an estate cleanout after the loss of a loved one is one of the most emotionally challenging tasks families face. At <strong>Aaron Michael Services</strong>, we provide compassionate, professional estate cleanout services throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong> with over 25 years of local experience.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  Estate cleanouts require more than just removing items—they demand sensitivity, organization, and expertise. Our team carefully sorts through belongings, identifies items of value, coordinates donations to Buffalo-area charities, and responsibly disposes of unwanted materials. We work closely with families, executors, estate attorneys, and estate sale companies to ensure every aspect is handled with care and respect.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you're managing a small Kenmore apartment or a large Amherst estate, we provide comprehensive cleanout solutions tailored to your specific needs and timeline. From initial consultation through final walkthrough, we're here to support you during this difficult time.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Comprehensive Estate Cleanout Services
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-700 mb-3">{service.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Our Estate Cleanout Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-xl mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-sm mb-3">{step.description}</p>
                    <div className="flex items-center gap-2 text-sm text-blue-600">
                      <Clock className="w-4 h-4" />
                      <span>{step.timeline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Related Services for Buffalo Families
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Comprehensive property services to support your family during transitions
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/services/hoarding-clean-up" className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600">Hoarding Cleanup Services</h3>
                  <p className="text-gray-600 text-sm mb-3">Specialized cleanup for hoarding situations with compassion and understanding</p>
                  <span className="text-purple-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/foreclosure-clean-out" className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600">Foreclosure Cleanouts</h3>
                  <p className="text-gray-600 text-sm mb-3">Property clearing for foreclosed homes, REO properties, and bank-owned assets</p>
                  <span className="text-blue-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/residential-junk-removal" className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600">Residential Junk Removal</h3>
                  <p className="text-gray-600 text-sm mb-3">General junk removal for homes, garages, basements, and attics</p>
                  <span className="text-green-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/property-cleanouts" className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600">Property Cleanout Services</h3>
                  <p className="text-gray-600 text-sm mb-3">Complete property clearing for rentals, investments, and transitions</p>
                  <span className="text-orange-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/garage-clean-out" className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-red-600">Garage Cleanouts</h3>
                  <p className="text-gray-600 text-sm mb-3">Garage and shed clearing, organization, and junk removal services</p>
                  <span className="text-red-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/basement-clean-out" className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600">Basement Cleanouts</h3>
                  <p className="text-gray-600 text-sm mb-3">Basement clearing, clutter removal, and organization services</p>
                  <span className="text-teal-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/aging-in-place" className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-indigo-600">Aging in Place Services</h3>
                  <p className="text-gray-600 text-sm mb-3">Home modifications to help seniors live independently and safely</p>
                  <span className="text-indigo-600 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/clean-out-services" className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-700">General Cleanout Services</h3>
                  <p className="text-gray-600 text-sm mb-3">All types of property cleanouts and decluttering services</p>
                  <span className="text-yellow-700 font-medium text-sm">Learn More →</span>
                </Link>

                <Link to="/services/investor-services" className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl hover:shadow-xl transition-shadow group">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-pink-600">Real Estate Investor Services</h3>
                  <p className="text-gray-600 text-sm mb-3">Property cleanup and preparation for investors and flippers</p>
                  <span className="text-pink-600 font-medium text-sm">Learn More →</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                Why Buffalo Families Choose Aaron Michael Services
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

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
                Serving Western New York Communities
              </h2>
              <p className="text-center text-gray-600 mb-12">
                Professional estate cleanout services throughout Buffalo and surrounding areas
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="bg-white border rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{area.city}, NY</h3>
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
                Estate Cleanout Questions Answered
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-lg p-6 shadow-sm">
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

        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Compassionate Estate Cleanout Services?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Call now for a free consultation or schedule a property walkthrough
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:716-533-7108"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                (716) 533-7108
              </a>
              <Link
                to="/contact"
                className="bg-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-600 transition-all duration-300 shadow-lg"
              >
                Request Free Consultation
              </Link>
            </div>
            <p className="mt-6 text-gray-300">
              Serving Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default EstateCleanouts;
