import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowRight, Phone, MapPin, CheckCircle, Star, Clock, Award, Shield, Hammer, Layers, TreePine, Ruler, DollarSign, Sparkles, Wrench } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';

const PHONE_DISPLAY = '(716) 533-7108';
const PHONE_TEL = 'tel:+17165337108';
const EMAIL = 'Thomasstory716@hotmail.com';
const ADDRESS = '14 Mariemont Ave, Buffalo, NY 14220';
const CANONICAL = 'https://aaronmichaelservices.com/services/hardwood-floors';

const SERVICE_AREAS = [
  'Buffalo', 'Kenmore', 'Tonawanda', 'North Tonawanda', 'Cheektowaga',
  'Amherst', 'West Seneca', 'Hamburg', 'Lancaster', 'Williamsville',
  'Depew', 'Lackawanna', 'Orchard Park', 'Grand Island', 'Clarence'
];

const WOOD_SPECIES = [
  { name: 'Red Oak', janka: '1290', characteristics: 'Classic grain, versatile, affordable' },
  { name: 'White Oak', janka: '1360', characteristics: 'Water-resistant, contemporary look' },
  { name: 'Maple', janka: '1450', characteristics: 'Hard, light color, minimal grain' },
  { name: 'Hickory', janka: '1820', characteristics: 'Extremely durable, rustic character' },
  { name: 'Cherry', janka: '995', characteristics: 'Rich color, smooth grain, elegant' },
  { name: 'Walnut', janka: '1010', characteristics: 'Dark, luxurious, dramatic' }
];

const HardwoodFloors: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hardwood Flooring Installation Buffalo NY",
    "description": "Professional hardwood floor installation in Buffalo, NY and Western New York. Expert installation of solid and engineered hardwood, custom patterns, and premium finishes. Trusted local contractor since 2010.",
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
      }))
    },
    "serviceType": "Hardwood Floor Installation",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "description": "Free estimates on all hardwood flooring installation projects"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "142"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What's the difference between solid and engineered hardwood flooring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Solid hardwood is milled from a single piece of wood, typically 3/4 inch thick, and can be refinished 6-10 times over its lifetime. It's best for above-grade installations and adds maximum value. Engineered hardwood has a real wood veneer over layers of plywood or fiberboard, making it more stable in humid environments. It can be installed over concrete, below grade, and with radiant heat. Engineered can be refinished 1-3 times depending on veneer thickness. Both offer authentic wood beauty."
        }
      },
      {
        "@type": "Question",
        "name": "How much does hardwood floor installation cost in Buffalo, NY?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hardwood floor installation costs in Buffalo and Western NY vary based on wood species, installation method, and project complexity. Materials typically range from $3-$12 per square foot depending on wood species and grade. Professional installation adds $3-$8 per square foot. Total costs including materials and labor average $8-$15 per square foot for standard installations. Complex patterns, custom finishes, and premium species cost more. We provide free, detailed estimates with transparent pricing."
        }
      },
      {
        "@type": "Question",
        "name": "Can hardwood floors be installed in basements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engineered hardwood can be installed in basements in Buffalo homes if moisture levels are controlled. We test concrete moisture levels before installation and recommend proper vapor barriers. Solid hardwood is not recommended for below-grade spaces due to moisture sensitivity. We also ensure proper HVAC operation and humidity control to prevent warping and cupping. Some basement installations require specific underlayment and installation methods."
        }
      },
      {
        "@type": "Question",
        "name": "How long does hardwood floor installation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most residential hardwood floor installations in Buffalo take 3-7 days depending on square footage and complexity. This includes subfloor preparation, installation, and finishing (if site-finished). Prefinished hardwood installs faster, often 2-4 days. Site-finished floors require additional time for sanding, staining, and polyurethane application with proper drying between coats. We provide a detailed timeline during your free consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What wood species is best for high-traffic areas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For high-traffic areas in Buffalo homes, we recommend harder wood species with high Janka ratings. Hickory (1820) is the hardest domestic option, extremely durable for busy families. Maple (1450) and White Oak (1360) offer excellent durability with refined appearance. Red Oak (1290) provides good durability at lower cost. Brazilian hardwoods like Ipe and Brazilian Cherry are even harder but more expensive. We help you balance durability, aesthetics, and budget."
        }
      },
      {
        "@type": "Question",
        "name": "Do you install hardwood on stairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in hardwood stair installation throughout Buffalo and WNY. Stair installation requires precise measurement, custom cuts, and expert installation to ensure safety and durability. We install treads, risers, landings, and can refinish or replace existing stair components. Stairs can match your floor or feature contrasting wood species. We use proper fastening methods to prevent squeaking and ensure long-term stability."
        }
      },
      {
        "@type": "Question",
        "name": "Can hardwood floors be installed over radiant heat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, engineered hardwood is compatible with radiant heat systems in Buffalo homes. The multi-layer construction provides dimensional stability during temperature changes. We recommend specific engineered products rated for radiant heat, proper installation methods, and gradual temperature adjustments. Solid hardwood is not recommended over radiant heat due to expansion and contraction risks. We work with your HVAC contractor to ensure proper system operation and floor longevity."
        }
      },
      {
        "@type": "Question",
        "name": "What's better: prefinished or site-finished hardwood?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both have advantages. Prefinished hardwood has factory-applied UV-cured finish, extremely durable and consistent. Installation is faster with less dust and odor, and you can walk on floors immediately. Site-finished (unfinished) hardwood allows custom stain colors, seamless appearance between boards, and unlimited design options. We sand and finish on-site with 2-3 days additional time. Most Buffalo homeowners choose prefinished for convenience, but site-finished offers maximum customization."
        }
      },
      {
        "@type": "Question",
        "name": "How do I maintain hardwood floors after installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hardwood floor maintenance in Buffalo includes: sweep or vacuum regularly to remove grit that scratches finish; use manufacturer-approved hardwood cleaners, never water-mop; place doormats at entries to trap dirt; use furniture pads under legs; maintain 35-55% humidity year-round to prevent gaps or cupping; clean spills immediately; avoid high heels and pet claws that dent wood; screen and recoat every 3-5 years to refresh finish; full refinishing every 7-10 years or as needed."
        }
      },
      {
        "@type": "Question",
        "name": "What areas in Western New York do you serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide hardwood floor installation services throughout Western New York, including Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga, Amherst, West Seneca, Hamburg, Lancaster, Williamsville, Depew, Lackawanna, Orchard Park, Grand Island, and Clarence. Contact us to confirm service availability in your specific area."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide flooring materials or do I need to purchase them separately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer both options for Buffalo homeowners. We can source premium hardwood flooring from trusted suppliers and include materials in your estimate for convenience and wholesale pricing. Alternatively, if you've already purchased flooring or prefer selecting materials yourself, we provide installation-only services. We advise on proper quantities, species selection, acclimation requirements, and quality to ensure successful installation."
        }
      },
      {
        "@type": "Question",
        "name": "How long should hardwood flooring acclimate before installation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hardwood flooring should acclimate in your Buffalo home for 3-14 days before installation, depending on wood species, thickness, and seasonal conditions. We deliver flooring to your home, unwrap bundles, and allow wood to adjust to your home's temperature and humidity. This prevents post-installation gaps, cupping, or buckling. We test moisture levels in both flooring and subfloor before proceeding. Proper acclimation is critical for long-term performance in Western New York's variable climate."
        }
      }
    ]
  };

  useEffect(() => {
    document.title = "Hardwood Floor Installation Buffalo NY | Expert Flooring Contractors | Aaron Michael Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Expert hardwood floor installation in Buffalo, NY. Professional solid & engineered hardwood, custom patterns, premium finishes. Serving Kenmore, Tonawanda, Amherst. Free estimates. Call 716-533-7108."
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
        title="Hardwood Floor Installation Buffalo NY | Expert Flooring Contractors | Aaron Michael Services"
        description="Expert hardwood floor installation in Buffalo, NY. Professional solid & engineered hardwood, custom patterns, premium finishes. Serving Kenmore, Tonawanda, Amherst. Free estimates. Call 716-533-7108."
        keywords="hardwood floor installation Buffalo NY, hardwood flooring Buffalo, wood floor installation Kenmore, engineered hardwood Tonawanda, solid hardwood Amherst, flooring contractors Buffalo, hardwood floor installer Cheektowaga, custom hardwood floors Buffalo"
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
            <span>Hardwood Floor Installation</span>
          </nav>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <TreePine className="w-8 h-8 text-green-300" />
              <span className="text-green-300 font-semibold text-lg">Expert Hardwood Flooring</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Professional Hardwood Floor Installation in Buffalo, NY
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl">
              Transform your home with beautiful, durable hardwood floors. Expert installation of solid and engineered hardwood throughout Western New York.
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
              { icon: Wrench, title: 'Expert Installation', desc: 'Precision craftsmanship guaranteed' }
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
              Buffalo's Premier Hardwood Flooring Specialists
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Aaron Michael Services</strong> brings over 15 years of professional hardwood floor installation expertise to Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga, Amherst, and all of Western New York.
              </p>
              <p>
                Hardwood floors are a timeless investment that transforms your home with natural beauty, increases property value by up to 10%, and provides durability that lasts generations. Whether you're building new, renovating, or replacing worn carpet and vinyl, professional hardwood installation ensures stunning results that stand the test of time.
              </p>
              <p>
                We specialize in both solid and engineered hardwood installation, working with premium domestic and exotic species. From classic red oak to luxurious walnut, from contemporary white oak to rustic hickory, we help Buffalo homeowners select the perfect wood species, grade, finish, and pattern for their lifestyle and aesthetic preferences.
              </p>
            </div>
          </section>

          {/* Installation Types */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Hardwood Flooring Installation Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Layers,
                  title: 'Solid Hardwood Installation',
                  desc: 'Traditional 3/4-inch thick solid wood flooring milled from single pieces of hardwood. Ideal for above-grade installations in living rooms, bedrooms, dining rooms, and hallways.',
                  features: [
                    'Can be refinished 6-10 times',
                    'Maximum home value increase',
                    'Authentic wood throughout',
                    'Nail-down installation method',
                    'Available unfinished or prefinished',
                    'Lifetime durability with proper care'
                  ]
                },
                {
                  icon: Layers,
                  title: 'Engineered Hardwood Installation',
                  desc: 'Multi-layer construction with real wood veneer over stable plywood core. Perfect for basements, concrete subfloors, radiant heat, and moisture-prone areas.',
                  features: [
                    'Dimensionally stable in humidity',
                    'Can install below-grade',
                    'Compatible with radiant heat',
                    'Glue-down or floating installation',
                    'Refinishable 1-3 times',
                    'Contemporary styling options'
                  ]
                },
                {
                  icon: Ruler,
                  title: 'Custom Patterns & Borders',
                  desc: 'Elevate your Buffalo home with custom hardwood patterns that create visual interest and showcase craftsmanship.',
                  features: [
                    'Herringbone patterns',
                    'Chevron designs',
                    'Diagonal installations',
                    'Decorative borders',
                    'Mixed-width planks',
                    'Medallions and inlays'
                  ]
                },
                {
                  icon: Hammer,
                  title: 'Stair Installation',
                  desc: 'Complete hardwood stair installation including treads, risers, landings, and refinishing existing stairs to match your new floors.',
                  features: [
                    'Precision measurement and cutting',
                    'Proper fastening for safety',
                    'Matching or contrasting species',
                    'Stain matching available',
                    'Nosing and trim included',
                    'Eliminates squeaks'
                  ]
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

          {/* Wood Species Selection */}
          <section className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Popular Hardwood Species for Buffalo Homes</h2>
            <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
              Wood hardness is measured by the Janka scale. Higher numbers indicate greater resistance to denting and wear. We help you select the perfect species for your lifestyle and traffic patterns.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {WOOD_SPECIES.map((wood, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-600">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{wood.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm font-semibold text-amber-700">Janka: {wood.janka}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{wood.characteristics}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
              <h4 className="font-bold text-lg mb-3 text-center">Other Premium Options Available:</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-gray-700">
                <div>• Brazilian Cherry (Jatoba) - 2350</div>
                <div>• Brazilian Walnut (Ipe) - 3680</div>
                <div>• Bamboo - 1380-1780</div>
                <div>• Acacia - 2300</div>
                <div>• Ash - 1320</div>
                <div>• Birch - 1260</div>
              </div>
            </div>
          </section>

          {/* Installation Process */}
          <section className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-t-4 border-amber-600">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Professional Installation Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: '1',
                  title: 'Free In-Home Consultation',
                  desc: 'We visit your Buffalo home, take measurements, assess subfloor conditions, discuss your vision, recommend wood species and installation methods, and provide detailed written estimates.'
                },
                {
                  step: '2',
                  title: 'Material Selection & Ordering',
                  desc: 'Help you select wood species, grade, width, finish, and pattern. Source premium materials from trusted suppliers. Coordinate delivery and acclimation timeline.'
                },
                {
                  step: '3',
                  title: 'Acclimation Period',
                  desc: 'Deliver flooring to your home 3-14 days before installation. Unwrap bundles and allow wood to adjust to your home\'s temperature and humidity. Test moisture levels.'
                },
                {
                  step: '4',
                  title: 'Subfloor Preparation',
                  desc: 'Remove existing flooring, inspect and repair subfloor damage, ensure level surface within 3/16" over 10 feet, install proper underlayment or vapor barriers as needed.'
                },
                {
                  step: '5',
                  title: 'Professional Installation',
                  desc: 'Precise layout planning, proper expansion gaps, nail-down, glue-down, or floating installation per manufacturer specs. Maintain straight lines and tight seams throughout.'
                },
                {
                  step: '6',
                  title: 'Trim & Transitions',
                  desc: 'Install matching baseboards, quarter-round, or shoe molding. Custom cut transition strips between flooring types and rooms. Clean lines and professional finish.'
                },
                {
                  step: '7',
                  title: 'Site Finishing (If Unfinished)',
                  desc: 'For site-finished floors: sand smooth, apply custom stain if desired, apply 2-3 coats of polyurethane with proper drying time. Dustless equipment used.'
                },
                {
                  step: '8',
                  title: 'Final Walkthrough & Care Guide',
                  desc: 'Inspect completed installation together, provide maintenance instructions, warranty information, and cleaning product recommendations. Ensure your complete satisfaction.'
                }
              ].map((item) => (
                <div key={item.step} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border-l-4 border-amber-600">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Buffalo Homeowners Choose Aaron Michael Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Locally owned and operated in Buffalo since 2010',
                '15+ years of hardwood flooring experience',
                'Licensed, insured, and bonded contractor',
                'Expert installation of solid and engineered hardwood',
                'Work with all major wood species and brands',
                'Custom patterns: herringbone, chevron, borders',
                'Proper subfloor preparation and moisture testing',
                'Precise cuts and professional craftsmanship',
                'Clean, organized work and respect for your home',
                'Transparent pricing with no hidden fees',
                'On-time project completion guaranteed',
                'Post-installation support and guidance',
                'Comprehensive warranty on workmanship',
                'Free estimates with detailed scope of work',
                'Local references and portfolio available'
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
              Professional hardwood floor installation throughout the Greater Buffalo area. Local expertise, quality materials, and exceptional craftsmanship for every Western NY home.
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

          {/* FAQ Section */}
          <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-amber-600">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions About Hardwood Floor Installation
            </h2>
            <div className="space-y-8 max-w-5xl mx-auto">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">What's the best width for hardwood flooring planks?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Plank width is a design choice. Traditional hardwood is 2.25-3.25 inches wide, offering classic proportions. Wide plank flooring (5-10+ inches) creates contemporary, open feel and showcases wood grain dramatically. Narrow spaces look larger with wider planks. Wide planks show more wood movement and cost more. We help Buffalo homeowners select width that complements their home's architecture and room size.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Should I choose prefinished or unfinished hardwood?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Prefinished hardwood arrives with factory-applied finish, offering faster installation, no dust or fumes, immediate use, and extremely durable UV-cured coating. Micro-beveled edges are visible between boards. Site-finished (unfinished) hardwood is sanded and finished in your home, providing unlimited custom stain colors, seamless appearance, and ability to match existing floors. Requires 3-4 additional days and dust control. Most Buffalo homeowners choose prefinished for convenience.
                </p>
              </div>

              <div className="pb-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Can hardwood floors be installed in kitchens?</h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, hardwood can be installed in Buffalo kitchens with proper precautions. Engineered hardwood is more moisture-stable than solid. Choose harder species like oak, maple, or hickory for durability. Use rugs near sinks and dishwashers. Clean spills immediately. Avoid water-mopping. Site-sealed finishes provide better moisture protection than prefinished. Many homeowners successfully enjoy beautiful hardwood in kitchens with proper care and maintenance.
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">What Buffalo Homeowners Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  text: "Aaron Michael Services installed beautiful red oak floors throughout our Kenmore home. The craftsmanship is outstanding, and their attention to detail is incredible. Our floors are absolutely gorgeous!",
                  author: "David & Lisa T.",
                  location: "Kenmore, NY"
                },
                {
                  text: "We replaced old carpet with engineered hickory in our North Tonawanda home. The transformation is amazing! The team was professional, clean, and finished on schedule. Highly recommend!",
                  author: "Robert K.",
                  location: "North Tonawanda, NY"
                },
                {
                  text: "They installed white oak in our Amherst condo, including a beautiful herringbone pattern in the entry. Everyone who visits compliments the floors. Worth every penny!",
                  author: "Michelle S.",
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
              Ready to Install Beautiful Hardwood Floors?
            </h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Get a free, no-obligation estimate from Buffalo's trusted hardwood flooring experts. Professional installation, quality materials, and exceptional results.
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

export default HardwoodFloors;
