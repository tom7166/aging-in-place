import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowRight, Phone, MapPin, CheckCircle, Star, Clock, Award, Shield, Hammer, Users, Truck, Wrench, TreePine, DollarSign, Search, Navigation } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';

const PHONE_DISPLAY = '(716) 533-7108';
const PHONE_TEL = 'tel:+17165337108';
const EMAIL = 'Thomasstory716@hotmail.com';
const ADDRESS = '14 Mariemont Ave, Buffalo, NY 14220';
const CANONICAL = 'https://aaronmichaelservices.com/services/hardwood-flooring-installers-near-me';

const SERVICE_AREAS = [
  'Buffalo', 'Kenmore', 'Tonawanda', 'North Tonawanda', 'Cheektowaga',
  'Amherst', 'West Seneca', 'Hamburg', 'Lancaster', 'Williamsville',
  'Depew', 'Lackawanna', 'Orchard Park', 'Grand Island', 'Clarence'
];

const HardwoodFlooringInstallersNearMe: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hardwood Flooring Installers Near Me Buffalo NY",
    "description": "Local hardwood flooring installers serving Buffalo, NY and Western New York. Professional installation of solid and engineered hardwood with expert craftsmanship. Licensed, insured, and trusted since 2010.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aaron Michael Services",
      "image": "https://aaronmichaelservices.com/logo.png",
      "telephone": "+17165337108",
      "email": "Thomasstory716@hotmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "14 Mariemont Ave",
        "addressLocality": "Buffalo",
        "addressRegion": "NY",
        "postalCode": "14220",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "42.8864",
        "longitude": "-78.8784"
      },
      "url": "https://aaronmichaelservices.com",
      "priceRange": "$$",
      "areaServed": SERVICE_AREAS.map(area => ({
        "@type": "City",
        "name": area,
        "addressRegion": "NY"
      })),
      "openingHours": "Mo-Fr 08:00-18:00, Sa 09:00-15:00"
    },
    "serviceType": "Hardwood Floor Installation",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "description": "Free estimates on hardwood flooring installation"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "148"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I find reliable hardwood flooring installers near me in Buffalo?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Look for local installers with valid licenses, insurance, and positive customer reviews. Aaron Michael Services has been serving Buffalo and Western NY since 2010 with licensed, insured professionals. We provide free estimates, transparent pricing, local references, and comprehensive warranties. Check for membership in professional organizations, Better Business Bureau ratings, and portfolio of completed projects in your area."
        }
      },
      {
        "@type": "Question",
        "name": "What should I ask hardwood flooring installers before hiring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Essential questions include: Are you licensed and insured? How long have you been installing hardwood floors? Can you provide local references? Do you offer warranties on installation? What's included in your estimate? How do you handle subfloor preparation? What installation methods do you use? Do you provide materials or installation only? What's your timeline for completion? How do you protect my home during installation?"
        }
      },
      {
        "@type": "Question",
        "name": "How much does hardwood floor installation cost near Buffalo, NY?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hardwood floor installation in Buffalo typically costs $8-$15 per square foot including materials and labor. This includes subfloor preparation, installation, trim work, and cleanup. Factors affecting cost include wood species selection, installation method (nail-down, glue-down, floating), room layout complexity, subfloor condition, and finishing requirements. Premium woods, custom patterns, and stairs cost more. We provide detailed free estimates for Buffalo-area homeowners."
        }
      },
      {
        "@type": "Question",
        "name": "Do local hardwood floor installers provide free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, reputable local hardwood floor installers in Buffalo typically provide free in-home estimates. Aaron Michael Services offers complimentary consultations where we measure your space, assess subfloor conditions, discuss material options, answer questions, and provide detailed written estimates with no obligation. Free estimates allow homeowners to compare quotes and make informed decisions."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of hiring local hardwood flooring installers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local installers in Buffalo offer faster response times, knowledge of Western NY building codes, understanding of regional climate challenges like humidity fluctuations, familiarity with local home construction styles, accountability within the community, easier warranty service, support for local businesses, and ability to provide local references. They're invested in reputation and deliver personalized service."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to install hardwood floors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential hardwood floor installations in Buffalo take 3-7 days depending on square footage and complexity. This includes subfloor preparation, installation, and finishing. Prefinished hardwood installs faster (2-4 days) since no on-site sanding or finishing is required. Site-finished installations take longer due to sanding, staining, and multiple polyurethane coats with drying time. We provide accurate timelines during your free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "Do hardwood flooring installers handle subfloor preparation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, professional hardwood flooring installers handle complete subfloor preparation. This includes removing existing flooring, inspecting subfloor for damage, repairing squeaks and damaged areas, ensuring level surface within 3/16 inch over 10 feet, installing appropriate underlayment or vapor barriers, and moisture testing. Proper subfloor preparation is critical for successful hardwood installation and long-term performance."
        }
      },
      {
        "@type": "Question",
        "name": "Can hardwood flooring installers work around my schedule?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional installers in Buffalo work with homeowners to schedule projects conveniently. Aaron Michael Services offers flexible scheduling including evenings and weekends when possible. We provide clear timelines, communicate schedule updates, and minimize disruption to your daily routine. Most homeowners remain in their homes during installation, with rooms completed in sections to maintain livability."
        }
      },
      {
        "@type": "Question",
        "name": "What areas near Buffalo do you serve for hardwood floor installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide hardwood floor installation throughout Western New York including Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga, Amherst, West Seneca, Hamburg, Lancaster, Williamsville, Depew, Lackawanna, Orchard Park, Grand Island, Clarence, and surrounding communities. Contact us to confirm service availability in your specific neighborhood."
        }
      },
      {
        "@type": "Question",
        "name": "Do hardwood flooring installers offer warranties?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Reputable hardwood flooring installers provide installation warranties covering workmanship. Aaron Michael Services offers comprehensive warranties on our installation work. Additionally, flooring materials come with manufacturer warranties covering defects. We explain all warranty coverage during consultation and provide documentation upon project completion. Quality installers stand behind their work and address any issues promptly."
        }
      },
      {
        "@type": "Question",
        "name": "Should I hire installers who provide materials or purchase flooring separately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both options work for Buffalo homeowners. Installers who source materials offer convenience, wholesale pricing, proper quantity calculations, and single-point responsibility. If you purchase separately, you control selection and pricing but assume responsibility for quantity accuracy, quality, delivery coordination, and acclimation. Aaron Michael Services offers both full-service and installation-only options to fit your preference."
        }
      },
      {
        "@type": "Question",
        "name": "How do I prepare my home for hardwood floor installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Preparation for hardwood installation includes: clear rooms of furniture and belongings, remove wall hangings and window treatments, create clear path for material delivery, protect adjacent areas from dust, arrange pet and child care during installation days, ensure HVAC operates normally for proper acclimation, and communicate special concerns to installers. Professional installers provide detailed preparation instructions during consultation."
        }
      }
    ]
  };

  useEffect(() => {
    document.title = "Hardwood Flooring Installers Near Me Buffalo NY | Local Experts | Aaron Michael Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Local hardwood flooring installers serving Buffalo, NY. Expert installation, licensed & insured, free estimates. Serving Kenmore, Tonawanda, Amherst, Cheektowaga. Call 716-533-7108."
      );
    }

    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify(structuredData);
    document.head.appendChild(schemaScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    return () => {
      if (schemaScript.parentNode) document.head.removeChild(schemaScript);
      if (faqScript.parentNode) document.head.removeChild(faqScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title="Hardwood Flooring Installers Near Me Buffalo NY | Local Experts | Aaron Michael Services"
        description="Local hardwood flooring installers serving Buffalo, NY. Expert installation, licensed & insured, free estimates. Serving Kenmore, Tonawanda, Amherst, Cheektowaga. Call 716-533-7108."
        keywords="hardwood flooring installers near me, hardwood installers Buffalo NY, local flooring contractors Buffalo, wood floor installation near me, hardwood installers Kenmore, flooring contractors Tonawanda, hardwood floor installer Amherst, local hardwood installation Cheektowaga"
        canonicalUrl={CANONICAL}
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 text-white py-24 pt-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-amber-200 text-sm flex items-center justify-center md:justify-start space-x-2">
            <HomeIcon className="w-4 h-4" />
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <Link to="/services/hardwood-floors" className="hover:text-white transition-colors">Hardwood Floors</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Installers Near Me</span>
          </nav>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Navigation className="w-8 h-8 text-green-300" />
              <span className="text-green-300 font-semibold text-lg">Local Hardwood Experts</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hardwood Flooring Installers Near Me in Buffalo, NY
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl">
              Trusted local experts for professional hardwood floor installation. Serving your neighborhood with quality craftsmanship, licensed professionals, and exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-amber-50 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-amber-700 transition-all"
              >
                Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 justify-center md:justify-start text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Serving Buffalo & WNY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* Trust Indicators */}
          <section className="grid md:grid-cols-4 gap-6 -mt-12 relative z-10">
            {[
              { icon: Search, title: 'Easy to Find', desc: 'Local hardwood experts near you' },
              { icon: Truck, title: 'Fast Response', desc: 'Quick scheduling & estimates' },
              { icon: Award, title: '15+ Years Local', desc: 'Trusted Buffalo contractor' },
              { icon: Users, title: 'Community Focus', desc: 'Your neighbors trust us' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-amber-600">
                <item.icon className="w-12 h-12 mx-auto mb-3 text-amber-700" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* Introduction */}
          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Your Local Hardwood Flooring Installation Experts
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                When searching for "<strong>hardwood flooring installers near me</strong>," you want professionals who combine expertise, reliability, and local knowledge. <strong>Aaron Michael Services</strong> has been Buffalo's trusted hardwood flooring contractor since 2010, serving homeowners throughout Western New York with exceptional installation services.
              </p>
              <p>
                As your local hardwood flooring specialists, we understand Buffalo-area homes, regional building codes, and climate challenges unique to Western New York. Our licensed and insured team provides personalized service, faster response times, and accountability that national chains simply can't match.
              </p>
              <p>
                We specialize in solid and engineered hardwood installation, working with all major wood species and brands. From classic oak and maple to exotic walnut and hickory, we help you select perfect flooring for your home and install it with precision craftsmanship that lasts generations.
              </p>
            </div>
          </section>

          {/* Why Choose Local */}
          <section className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-900">
              Why Choose Local Hardwood Flooring Installers?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Clock,
                  title: 'Faster Response & Scheduling',
                  desc: 'Local installers offer quick estimates, flexible scheduling, and faster project starts. We\'re just minutes away when you need us.'
                },
                {
                  icon: MapPin,
                  title: 'Knowledge of Buffalo Homes',
                  desc: 'We understand Western NY home construction, subfloor challenges, and seasonal climate variations affecting hardwood installation.'
                },
                {
                  icon: Shield,
                  title: 'Community Accountability',
                  desc: 'Local reputation matters. We\'re invested in Buffalo community and stand behind our work with accessible warranty service.'
                },
                {
                  icon: Users,
                  title: 'Personalized Service',
                  desc: 'Work directly with owners and experienced installers, not call centers. We build relationships with every Buffalo homeowner.'
                },
                {
                  icon: Award,
                  title: 'Local References Available',
                  desc: 'Talk to your neighbors! We provide references from completed projects throughout Buffalo and Western New York.'
                },
                {
                  icon: Wrench,
                  title: 'Follow-Up Support',
                  desc: 'Questions after installation? We\'re local and available to address concerns, provide maintenance tips, and ensure satisfaction.'
                }
              ].map((benefit, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <benefit.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Offered */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Local Hardwood Flooring Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Hammer,
                  title: 'Hardwood Floor Installation',
                  desc: 'Professional installation of solid and engineered hardwood with expert subfloor preparation and precision craftsmanship.',
                  features: ['Solid hardwood installation', 'Engineered hardwood installation', 'Subfloor preparation & repair', 'Trim and transition work']
                },
                {
                  icon: TreePine,
                  title: 'Material Consultation',
                  desc: 'Expert guidance selecting wood species, grades, finishes, and patterns perfect for your Buffalo home and lifestyle.',
                  features: ['Wood species selection', 'Grade and color guidance', 'Finish options consultation', 'Budget planning']
                },
                {
                  icon: Wrench,
                  title: 'Complete Project Management',
                  desc: 'From consultation to final walkthrough, we manage every detail ensuring smooth installation and exceptional results.',
                  features: ['Free in-home estimates', 'Material sourcing or install-only', 'Transparent scheduling', 'Post-installation support']
                }
              ].map((service, idx) => (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-lg border-t-4 border-amber-600 hover:shadow-2xl transition-shadow">
                  <service.icon className="w-14 h-14 text-amber-700 mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* What to Look For */}
          <section className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What to Look for in Local Hardwood Floor Installers</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Valid License & Insurance',
                  desc: 'Verify contractor license, liability insurance, and workers compensation coverage to protect your Buffalo home and investment.'
                },
                {
                  title: 'Established Local Presence',
                  desc: 'Choose installers with years of experience serving your community, demonstrating stability and commitment to quality.'
                },
                {
                  title: 'Positive Customer Reviews',
                  desc: 'Check Google reviews, Better Business Bureau ratings, and online testimonials from Buffalo-area homeowners.'
                },
                {
                  title: 'Free Written Estimates',
                  desc: 'Reputable installers provide detailed written estimates with scope of work, materials, timeline, and pricing breakdown.'
                },
                {
                  title: 'Portfolio of Local Work',
                  desc: 'Ask to see before/after photos and completed projects in Buffalo homes similar to yours.'
                },
                {
                  title: 'Local References Available',
                  desc: 'Quality installers gladly provide references from recent customers in your area you can contact directly.'
                },
                {
                  title: 'Comprehensive Warranties',
                  desc: 'Look for installation warranties covering workmanship and clear explanation of material manufacturer warranties.'
                },
                {
                  title: 'Clear Communication',
                  desc: 'Professional installers answer questions, explain processes, provide updates, and address concerns promptly.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    {item.title}
                  </h3>
                  <p className="text-gray-700 ml-7">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Service Areas */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Local Hardwood Floor Installation Throughout Western New York
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
              As your local hardwood flooring installers, we proudly serve Buffalo and surrounding communities with professional installation, free estimates, and personalized service.
            </p>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-amber-700" />
                <h3 className="text-2xl font-bold text-amber-900">Communities We Serve</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                {SERVICE_AREAS.map((area, idx) => (
                  <div key={idx} className="bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow font-medium text-gray-700">
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-700 mb-4 font-medium">
                  Looking for hardwood flooring installers in your neighborhood? We're local and ready to help!
                </p>
                <a href={PHONE_TEL} className="text-amber-700 font-bold text-lg hover:underline">
                  Call {PHONE_DISPLAY} for Free Estimate
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-amber-600">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions About Local Hardwood Floor Installers
            </h2>
            <div className="space-y-8 max-w-5xl mx-auto">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">What makes Aaron Michael Services different from other local installers?</h3>
                <p className="text-gray-700 leading-relaxed">
                  We combine 15+ years of hardwood flooring expertise with genuine commitment to Buffalo community. We're licensed, insured, and bonded with comprehensive warranties. Unlike larger companies, you work directly with experienced professionals who care about your satisfaction. We provide transparent pricing, detailed estimates, quality materials, and craftsmanship that exceeds expectations. Our local references speak for themselves.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">How quickly can local hardwood floor installers start my project?</h3>
                <p className="text-gray-700 leading-relaxed">
                  As local Buffalo installers, we typically schedule free estimates within 2-3 days. Once materials are selected and subfloor is assessed, projects often begin within 1-2 weeks depending on season and schedule. We provide accurate timelines during consultation and keep you informed throughout. Emergency installations may be accommodated. Contact us to discuss your timeline needs.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Your Buffalo Neighbors Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  text: "We searched for hardwood installers near us and found Aaron Michael Services. Best decision! They installed beautiful oak floors in our Kenmore home. Professional, punctual, and the results are stunning.",
                  author: "Tom & Nancy P.",
                  location: "Kenmore, NY"
                },
                {
                  text: "As local Buffalo residents, we wanted a local contractor. Aaron Michael Services exceeded expectations. They installed engineered hardwood throughout our first floor flawlessly. Highly recommend!",
                  author: "Jessica M.",
                  location: "Buffalo, NY"
                },
                {
                  text: "Called several local installers for estimates. Aaron Michael Services was most responsive and thorough. Installed maple floors in our North Tonawanda home perfectly. Great local company!",
                  author: "Brian R.",
                  location: "North Tonawanda, NY"
                }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-amber-600">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-br from-amber-900 to-amber-700 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work with Local Hardwood Flooring Experts?
            </h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Your search for "hardwood flooring installers near me" ends here. Get a free estimate from Buffalo's trusted local professionals. Fast response, transparent pricing, exceptional results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-amber-50 transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-amber-600 transition-all"
              >
                Request Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="border-t border-amber-600 pt-6 space-y-2 text-amber-100">
              <p className="flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{PHONE_DISPLAY}</span>
              </p>
              <p className="flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{ADDRESS}</span>
              </p>
              <p>
                Email: <a href={`mailto:${EMAIL}`} className="hover:underline">{EMAIL}</a>
              </p>
              <p className="mt-4 font-semibold">
                Serving Buffalo & Western New York Since 2010
              </p>
            </div>
          </section>

        </div>
      </main>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default HardwoodFlooringInstallersNearMe;
