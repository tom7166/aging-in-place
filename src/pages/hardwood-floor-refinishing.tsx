import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowRight, Phone, MapPin, CheckCircle, Star, Clock, Award, Shield, Hammer, Sparkles, Droplet, DollarSign } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';

const PHONE_DISPLAY = '(716) 533-7108';
const PHONE_TEL = 'tel:+17165337108';
const EMAIL = 'Thomasstory716@hotmail.com';
const ADDRESS = '14 Mariemont Ave, Buffalo, NY 14220';
const CANONICAL = 'https://aaronmichaelservices.com/services/hardwood-floor-refinishing';

const SERVICE_AREAS = [
  'Buffalo', 'Kenmore', 'Tonawanda', 'North Tonawanda', 'Cheektowaga',
  'Amherst', 'West Seneca', 'Hamburg', 'Lancaster', 'Williamsville',
  'Depew', 'Lackawanna', 'Orchard Park', 'Grand Island', 'Clarence'
];

const HardwoodFloorRefinishing: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hardwood Floor Refinishing Buffalo NY",
    "description": "Expert hardwood floor refinishing, sanding, staining, and restoration services in Buffalo, NY and Western New York. Professional craftsmanship, premium finishes, and trusted local service since 2010.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Aaron Michael Services - Bella Floor Refinishing",
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
      }))
    },
    "serviceType": "Hardwood Floor Refinishing",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "description": "Free estimates on all hardwood floor refinishing projects"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does hardwood floor refinishing take in Buffalo, NY?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential hardwood floor refinishing projects in Buffalo take 3-5 days. This includes sanding, staining, and multiple coats of finish with proper drying time. Larger homes or floors requiring extensive repairs may take up to a week. We provide a precise timeline during your free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the cost of hardwood floor refinishing in Western New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hardwood floor refinishing in Buffalo and Western NY starts at $6.00 per square foot for standard refinishing, including sanding, staining, and polyurethane finish. Screen and recoat services start at $3.50 per square foot. Stair refinishing is $100 per step. Water damage repair with board replacement ranges from $10-$16 per square foot. Factors affecting final price include floor condition, square footage, wood species, stain selection, and extent of repairs needed. We provide free, detailed estimates with transparent pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Can you refinish water-damaged hardwood floors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in restoring water-damaged hardwood floors throughout Buffalo and WNY. Our process includes assessing moisture levels, replacing severely damaged boards, sanding to remove stains and cupping, and refinishing to match existing floors. We address the moisture source to prevent future damage."
        }
      },
      {
        "@type": "Question",
        "name": "Do you use dustless sanding equipment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we use professional dustless sanding systems that capture 95-99% of dust during the refinishing process. This keeps your Buffalo home cleaner and healthier during the project. We also use plastic barriers and floor protection to minimize disruption."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between water-based and oil-based finishes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Water-based finishes dry faster (2-3 hours between coats), have low odor, maintain the wood's natural color, and are more eco-friendly. Oil-based finishes take longer to dry (8-24 hours), have a stronger odor, add amber warmth to wood, and are extremely durable. We help Buffalo homeowners choose based on their needs, timeline, and preferences."
        }
      },
      {
        "@type": "Question",
        "name": "Can you match the stain color of my existing hardwood floors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. We perform custom color matching and create test patches on your actual floors before full application. This ensures seamless blending when refinishing specific rooms or doing repairs. We use premium stains from Minwax, DuraSeal, and Bona for consistent, beautiful results."
        }
      },
      {
        "@type": "Question",
        "name": "How soon can I walk on refinished hardwood floors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With water-based finishes, you can walk on floors in socks after 24 hours and replace furniture after 3-4 days. Oil-based finishes require 48-72 hours before walking and 7-10 days before furniture. Full curing takes 30 days for both. We provide detailed care instructions for Buffalo homeowners."
        }
      },
      {
        "@type": "Question",
        "name": "Do you refinish hardwood stairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we refinish hardwood stairs, including treads, risers, and banisters. Stair refinishing requires special techniques to ensure safety and durability. We can match your floor finish or create contrast with different stains. Projects in Buffalo homes typically take 2-3 days with staggered access for safety."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Western New York do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide hardwood floor refinishing services throughout Western New York, including Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga, Amherst, West Seneca, Hamburg, Lancaster, Williamsville, Depew, Lackawanna, Orchard Park, Grand Island, and Clarence."
        }
      },
      {
        "@type": "Question",
        "name": "Can hardwood floors be refinished multiple times?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, solid hardwood floors can typically be refinished 6-10 times over their lifetime, depending on the thickness of the wood. Each refinishing removes about 1/32 to 1/16 inch of wood. Engineered hardwood can usually be refinished 1-3 times depending on the veneer thickness. We assess your Buffalo home's floors and provide honest recommendations."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer screen and recoat services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, screen and recoat (also called buff and coat) is a maintenance service that refreshes your floor's finish without full sanding. It's ideal for floors with minor scratches and wear but no deep damage. This service takes 1-2 days, costs less than full refinishing, and extends floor life by 3-5 years."
        }
      },
      {
        "@type": "Question",
        "name": "What brands of finish do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use premium professional-grade finishes including Bona Traffic HD, Loba 2K, Pallmann X-Zero, and PolyWhey natural oil finishes. These are superior to retail products and provide exceptional durability, clarity, and longevity for Buffalo homes."
        }
      }
    ]
  };

  useEffect(() => {
    document.title = "Hardwood Floor Refinishing Buffalo NY | Bella Floor Refinishing | Aaron Michael Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Expert hardwood floor refinishing in Buffalo, NY. Professional sanding, staining & restoration. Serving Kenmore, Tonawanda, Amherst, Cheektowaga. Free estimates. Call 716-533-7108."
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
        title="Hardwood Floor Refinishing Buffalo NY | Bella Floor Refinishing | Aaron Michael Services"
        description="Expert hardwood floor refinishing in Buffalo, NY. Professional sanding, staining & restoration. Serving Kenmore, Tonawanda, Amherst, Cheektowaga. Free estimates. Call 716-533-7108."
        keywords="hardwood floor refinishing Buffalo NY, floor sanding Buffalo, hardwood refinishing Kenmore, floor restoration Tonawanda, wood floor refinishing Cheektowaga, floor staining Amherst, hardwood repair Buffalo, Bella Floor Refinishing, screen and recoat Buffalo, hardwood floor water damage Buffalo"
        canonicalUrl={CANONICAL}
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="relative text-white py-24 pt-32 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full" style={{ transform: 'scale(1.5)' }}>
            <iframe
              className="absolute top-1/2 left-1/2 w-screen h-screen -translate-x-1/2 -translate-y-1/2"
              style={{
                width: '100vw',
                height: '56.25vw',
                minHeight: '100vh',
                minWidth: '177.77vh',
                pointerEvents: 'none',
              }}
              src="https://www.youtube.com/embed/Li3peiv0tJQ?autoplay=1&mute=1&loop=1&playlist=Li3peiv0tJQ&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1&enablejsapi=1&disablekb=1&fs=0"
              title="Background Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 via-amber-800/80 to-yellow-700/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-amber-200 text-sm flex items-center justify-center md:justify-start space-x-2">
            <HomeIcon className="w-4 h-4" />
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <Link to="/services/hardwood-floors" className="hover:text-white transition-colors">Hardwood Floors</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Refinishing</span>
          </nav>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <span className="text-yellow-300 font-semibold text-lg">Bella Floor Refinishing</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Buffalo's Premier Hardwood Floor Refinishing Experts
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl">
              Transform worn, scratched hardwood floors into stunning showpieces. Professional refinishing, sanding, and restoration throughout Western New York.
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
                <Award className="w-5 h-5 text-blue-400" />
                <span>15+ Years Experience</span>
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
              { icon: Shield, title: 'Licensed & Insured', desc: 'Full coverage for your peace of mind' },
              { icon: Award, title: '15+ Years', desc: 'Trusted Western NY contractor' },
              { icon: DollarSign, title: 'Free Estimates', desc: 'Transparent, detailed quotes' },
              { icon: Clock, title: 'Fast Turnaround', desc: 'Most projects done in 3-5 days' }
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
              Transform Your Home with Expert Hardwood Floor Refinishing
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Bella Floor Refinishing</strong>, a division of <strong>Aaron Michael Services</strong>, brings over 15 years of professional hardwood floor refinishing expertise to Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga, Amherst, and all of Western New York.
              </p>
              <p>
                Your hardwood floors are a significant investment and a defining feature of your home. Over time, daily wear, pet activity, water exposure, and sunlight can leave floors looking dull, scratched, and worn. Our refinishing process restores their original beauty, extends their lifespan by decades, and dramatically increases your home's value.
              </p>
              <p>
                We combine old-school craftsmanship with modern equipment and premium finishes from <strong>Bona</strong>, <strong>Loba</strong>, and <strong>Pallmann</strong> to deliver results that exceed expectations. Every project receives meticulous attention to detail, transparent communication, and respect for your home and schedule.
              </p>
            </div>
          </section>

          {/* Our Process */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Proven Refinishing Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Free Consultation & Assessment',
                  desc: 'We visit your Buffalo home, inspect floors, identify wood species, assess damage, discuss your vision, and provide a detailed written estimate with timeline and product options.'
                },
                {
                  step: '2',
                  title: 'Preparation & Protection',
                  desc: 'Remove furniture, protect walls and trim with plastic barriers, tape off doorways, ensure proper ventilation, and prepare your home for a clean, efficient refinishing process.'
                },
                {
                  step: '3',
                  title: 'Professional Sanding',
                  desc: 'Multi-stage sanding with coarse, medium, and fine grits removes old finish, scratches, stains, and imperfections. Dustless equipment captures 95-99% of particles for a cleaner home.'
                },
                {
                  step: '4',
                  title: 'Repairs & Board Replacement',
                  desc: 'Replace damaged boards, fill gaps and cracks, repair squeaks and loose boards, sand repairs flush, and ensure seamless blending with existing flooring.'
                },
                {
                  step: '5',
                  title: 'Custom Staining (Optional)',
                  desc: 'Choose from dozens of stain colors or custom match existing finishes. We apply test patches, allow you to approve the color, then professionally stain the entire floor for even, beautiful results.'
                },
                {
                  step: '6',
                  title: 'Premium Finish Application',
                  desc: 'Apply 2-3 coats of water-based, oil-modified, or natural oil finish. Each coat is meticulously applied, dried, and lightly buffed between coats for a flawless, durable surface.'
                },
                {
                  step: '7',
                  title: 'Final Inspection & Care Guide',
                  desc: 'Walk through completed project together, provide detailed maintenance instructions, answer all questions, and ensure complete satisfaction before considering the job finished.'
                },
                {
                  step: '8',
                  title: 'Curing & Follow-Up',
                  desc: 'Provide guidance on curing times, furniture placement, cleaning products, and long-term care. We follow up to ensure you\'re thrilled with your beautiful refinished floors.'
                }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-l-4 border-amber-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Services Offered */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Complete Hardwood Floor Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Hammer,
                  title: 'Complete Refinishing',
                  desc: 'Full sanding, staining, and finishing to restore floors to like-new condition. Remove decades of wear, scratches, water stains, and pet damage.',
                  features: ['Multi-stage sanding process', 'Custom stain matching', 'Premium finish options', 'UV protection available']
                },
                {
                  icon: Sparkles,
                  title: 'Screen & Recoat',
                  desc: 'Light maintenance service that refreshes your finish without full sanding. Ideal for floors in good condition with minor surface wear.',
                  features: ['1-2 day turnaround', 'Minimal disruption', 'Cost-effective maintenance', 'Extends floor life 3-5 years']
                },
                {
                  icon: Droplet,
                  title: 'Water Damage Restoration',
                  desc: 'Specialized repair for water-damaged hardwood floors. We assess moisture levels, replace damaged boards, sand cupping, and refinish to match.',
                  features: ['Moisture testing', 'Board replacement', 'Cupping correction', 'Mold prevention']
                },
                {
                  icon: CheckCircle,
                  title: 'Stain Matching & Repairs',
                  desc: 'Seamlessly blend repairs and replacements with existing floors. Perfect for expanding rooms or fixing localized damage in Buffalo homes.',
                  features: ['Custom color matching', 'Test patches provided', 'Seamless blending', 'Spot repair options']
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

          {/* Why Choose Us */}
          <section className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Buffalo Homeowners Choose Bella Floor Refinishing</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Locally owned and operated in Buffalo since 2010',
                '15+ years of professional refinishing experience',
                'Licensed, insured, and bonded for your protection',
                'Dustless sanding systems for minimal mess',
                'Premium Bona, Loba, and Pallmann products',
                'Water-based and oil-based finish expertise',
                'Custom stain matching and color consultation',
                'Transparent pricing with detailed written estimates',
                'Respect your home with clean, organized work',
                'Clear communication throughout the project',
                'On-time completion and scheduling reliability',
                'Comprehensive warranty on workmanship',
                'Before/after photos of Buffalo area projects',
                'Local references available upon request',
                'Emergency water damage response available'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Service Areas */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Serving All of Western New York
            </h2>
            <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto text-lg">
              Bella Floor Refinishing proudly serves homeowners throughout the Greater Buffalo area and Western New York region. Local expertise, fast response times, and deep knowledge of area homes.
            </p>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border-2 border-amber-200">
              <div className="flex items-center justify-center gap-2 mb-6">
                <MapPin className="w-6 h-6 text-amber-700" />
                <h3 className="text-2xl font-bold text-amber-900">Our Service Area</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center">
                {SERVICE_AREAS.map((area, idx) => (
                  <div key={idx} className="bg-white rounded-lg px-4 py-3 shadow-sm hover:shadow-md transition-shadow font-medium text-gray-700">
                    {area}
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-600 mt-6">
                Don't see your town? <a href={PHONE_TEL} className="text-amber-700 font-semibold hover:underline">Call us</a> - we serve additional areas throughout WNY!
              </p>
            </div>
          </section>

          {/* FAQ Section - Enhanced */}
          <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-amber-600">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions About Hardwood Floor Refinishing in Buffalo, NY
            </h2>
            <div className="space-y-8 max-w-5xl mx-auto">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Should I choose water-based or oil-based polyurethane for my Buffalo home?</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  The choice depends on your priorities:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2 text-blue-900">Water-Based Finish</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Dries in 2-3 hours between coats</li>
                      <li>• Low odor, safe for families with children</li>
                      <li>• Maintains wood's natural color</li>
                      <li>• Non-yellowing over time</li>
                      <li>• Eco-friendly with low VOCs</li>
                      <li>• Ready for furniture in 3-4 days</li>
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-bold mb-2 text-amber-900">Oil-Based Finish</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Dries in 8-24 hours between coats</li>
                      <li>• Stronger odor, requires ventilation</li>
                      <li>• Adds warm amber tone to wood</li>
                      <li>• Traditional, rich appearance</li>
                      <li>• Extremely durable and hard-wearing</li>
                      <li>• Ready for furniture in 7-10 days</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-700 mt-3">
                  Most Buffalo homeowners choosing contemporary looks prefer water-based finishes, while those seeking traditional warmth select oil-based. We help you decide during consultation.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">How often should hardwood floors be refinished in Western New York?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hardwood floors in Buffalo homes typically need refinishing every 7-10 years with normal use. High-traffic areas, homes with large dogs, or floors exposed to moisture may need refinishing every 5-7 years. Proactive screen and recoat maintenance every 3-5 years can extend the time between full refinishes to 10-15 years. We assess your floor's condition and provide honest recommendations based on wear patterns, finish quality, and your goals.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">What's the best time of year to refinish hardwood floors in Buffalo?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Spring and fall are ideal for hardwood floor refinishing in Buffalo, NY. Moderate temperatures (60-80°F) and lower humidity levels help finishes cure properly. We can refinish floors year-round with proper climate control, but avoid extreme summer humidity or winter dryness when possible. We monitor indoor conditions and use dehumidifiers or fans as needed to ensure optimal results regardless of season.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Can you refinish engineered hardwood floors?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, engineered hardwood can be refinished 1-3 times depending on the thickness of the top veneer layer. Standard engineered flooring has a 2-3mm veneer and can typically handle one or two refinishes. Premium engineered products with 4-6mm veneers can be refinished multiple times like solid hardwood. We measure the veneer thickness and advise whether refinishing is viable for your Buffalo home's floors.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Do you offer eco-friendly or low-VOC refinishing options?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, we specialize in eco-friendly hardwood refinishing using water-based finishes with extremely low VOC (Volatile Organic Compound) levels. Products like Bona Traffic HD and Loba 2K are GreenGuard certified, safe for families with children and pets, and have minimal environmental impact. We also offer natural oil finishes like PolyWhey for completely non-toxic, food-safe applications. Buffalo homeowners increasingly request these healthier options, and we're proud to offer them.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">What if I'm not sure whether my floors need refinishing or replacing?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Schedule a free consultation with Bella Floor Refinishing in Buffalo. We'll assess your floors, check for structural issues, measure remaining wood thickness, and provide honest recommendations. Many floors homeowners think need replacement can be beautifully restored through refinishing at a fraction of the cost. If floors are too damaged, too thin, or structurally compromised, we'll recommend replacement and provide referrals to trusted installers. Our goal is always to give you the best long-term solution for your Buffalo home.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Information */}
          <section className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Transparent Pricing for Buffalo Homeowners</h2>
              <p className="text-center text-gray-700 text-lg mb-8">
                Hardwood floor refinishing is an investment in your home's beauty and value. We provide clear, detailed estimates with no hidden fees.
              </p>

              <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
                <h3 className="text-2xl font-bold mb-4 text-center">Average Refinishing Costs in Western NY</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold text-gray-700">Standard Refinishing (sanding, staining, 3 coats poly)</span>
                    <span className="text-amber-700 font-bold text-lg">Starting at $6.00/sq ft</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold text-gray-700">Screen & Recoat (maintenance)</span>
                    <span className="text-amber-700 font-bold text-lg">Starting at $3.50/sq ft</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-3">
                    <span className="font-semibold text-gray-700">Stair Refinishing (per step, tread + riser)</span>
                    <span className="text-amber-700 font-bold text-lg">$100/step</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Water Damage Repair (includes board replacement)</span>
                    <span className="text-amber-700 font-bold text-lg">$10.00 - $16.00/sq ft</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                <h4 className="font-bold text-lg mb-3">Factors Affecting Final Cost:</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {[
                    'Total square footage',
                    'Current floor condition',
                    'Wood species and hardness',
                    'Number of rooms and layout',
                    'Furniture moving requirements',
                    'Repairs and board replacement',
                    'Custom stain color matching',
                    'Premium finish upgrades',
                    'Stairs included in project',
                    'Accessibility and home location'
                  ].map((factor, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{factor}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-center text-gray-600 mt-8 text-lg">
                <strong>Every project is unique.</strong> Call <a href={PHONE_TEL} className="text-amber-700 font-bold hover:underline">{PHONE_DISPLAY}</a> for a free, detailed estimate with transparent pricing and no obligations.
              </p>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Buffalo Homeowners Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  text: "Bella Floor Refinishing transformed our 100-year-old oak floors in our Kenmore home. They look brand new! Tom and his team were professional, on time, and respectful. Highly recommend.",
                  author: "Sarah M.",
                  location: "Kenmore, NY"
                },
                {
                  text: "We had severe water damage in our dining room. Bella replaced damaged boards, refinished the entire first floor, and matched the stain perfectly. You'd never know there was damage. Outstanding work.",
                  author: "Mike R.",
                  location: "North Tonawanda, NY"
                },
                {
                  text: "Best decision we made for our home! The floors were scratched and dull after years of wear. Now they're gorgeous. The dustless sanding kept our house clean. Worth every penny.",
                  author: "Jennifer L.",
                  location: "Amherst, NY"
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
              Ready to Restore Your Hardwood Floors?
            </h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Get a free, no-obligation estimate from Buffalo's trusted hardwood floor refinishing experts. Fast scheduling, transparent pricing, and exceptional results.
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
            </div>
          </section>

        </div>
      </main>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default HardwoodFloorRefinishing;
