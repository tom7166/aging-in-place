import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowRight, Phone, MapPin, CheckCircle, Star, Award, Shield, Sparkles, TreePine } from 'lucide-react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import FloatingCallButton from '../../../components/FloatingCallButton';
import SEOHelmet from '../../../components/SEOHelmet';

const PHONE = '(716) 533-7108';
const PHONE_HREF = 'tel:+17165337108';
const CITY = 'Tonawanda';
const STATE = 'NY';

const TonawandaHardwoodRefinishing: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Hardwood Floor Refinishing ${CITY} ${STATE}`,
    "description": `Professional hardwood floor refinishing in ${CITY}, ${STATE}. Expert sanding, staining, and finishing services. Restore beauty to worn hardwood floors. Licensed and insured.`,
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
      "areaServed": {
        "@type": "City",
        "name": CITY,
        "addressRegion": STATE
      }
    },
    "serviceType": "Hardwood Floor Refinishing",
    "areaServed": {
      "@type": "City",
      "name": CITY,
      "addressRegion": STATE
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "152"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `How much does hardwood floor refinishing cost in ${CITY}, ${STATE}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Hardwood floor refinishing in ${CITY}, ${STATE} typically costs $3-$5 per square foot depending on floor condition, wood species, and finish type. This includes sanding, staining (if desired), and applying protective finish coats. Additional repairs, deep scratches, or custom finishes may increase cost. We provide free estimates for ${CITY} homeowners.`
        }
      },
      {
        "@type": "Question",
        "name": `How long does hardwood floor refinishing take in ${CITY}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most hardwood floor refinishing projects in ${CITY} take 3-5 days. Day 1-2: sanding and preparation. Day 2-3: staining (if desired) with drying time. Day 3-5: applying 2-3 coats of polyurethane with proper drying between coats. Actual timeline depends on square footage, wood condition, and weather affecting drying times.`
        }
      },
      {
        "@type": "Question",
        "name": `Can all hardwood floors be refinished in ${CITY}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most solid hardwood floors in ${CITY} can be refinished 6-10 times over their lifetime. Engineered hardwood can be refinished 1-3 times depending on veneer thickness. We inspect floors to determine remaining wood thickness before refinishing. Floors worn down to tongue-and-groove or with severe water damage may need replacement. Free assessments available for ${CITY} homes.`
        }
      },
      {
        "@type": "Question",
        "name": `Do I need to move out during hardwood floor refinishing in ${CITY}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most ${CITY} homeowners don't need to move out during refinishing. Sanding creates dust despite dustless equipment, so keeping pets and children away is recommended. Strong odors from stains and finishes require ventilation. You can stay in bedrooms on different floors. We seal work areas and use low-VOC finishes when possible for ${CITY} homes.`
        }
      },
      {
        "@type": "Question",
        "name": `What's the difference between oil-based and water-based finishes?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Oil-based polyurethane provides warm amber tone, extreme durability, and takes 24+ hours between coats. Strong odor requires ventilation. Water-based polyurethane dries clear, dries in 2-3 hours, has low odor, and won't yellow. Both work well in ${CITY} climate. We help homeowners choose based on desired appearance, timeline, and sensitivity to fumes.`
        }
      }
    ]
  };

  useEffect(() => {
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
        title={`Hardwood Floor Refinishing ${CITY} ${STATE} | Expert Refinishing Services | Aaron Michael Services`}
        description={`Professional hardwood floor refinishing in ${CITY}, ${STATE}. Expert sanding, staining & finishing. Restore worn floors to beautiful condition. Free estimates. Call ${PHONE}.`}
        keywords={`hardwood floor refinishing ${CITY} ${STATE}, floor refinishing ${CITY}, hardwood refinishing ${CITY}, wood floor sanding ${CITY}, floor restoration ${CITY}`}
        canonicalUrl={`https://aaronmichaelservices.com/cities/${CITY.toLowerCase()}-ny-hardwood-floor-refinishing`}
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      <section className="relative bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-700 text-white py-24 pt-32">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 text-amber-200 text-sm flex items-center justify-center md:justify-start space-x-2">
            <HomeIcon className="w-4 h-4" />
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <Link to="/services/hardwood-floors" className="hover:text-white transition-colors">Hardwood Floors</Link>
            <ArrowRight className="w-3 h-3" />
            <span>{CITY} Refinishing</span>
          </nav>

          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-300" />
              <span className="text-yellow-300 font-semibold text-lg">Expert Floor Restoration</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Hardwood Floor Refinishing in {CITY}, {STATE}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-amber-100 max-w-3xl">
              Professional sanding, staining, and refinishing services. Restore the natural beauty of your {CITY} home's hardwood floors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-amber-50 transition-all hover:scale-105">
                <Phone className="w-5 h-5" />
                Call {PHONE}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-amber-700 transition-all">
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
                <span>Serving {CITY}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          <section className="grid md:grid-cols-4 gap-6 -mt-12 relative z-10">
            {[
              { icon: Sparkles, title: 'Expert Refinishing', desc: 'Professional restoration services' },
              { icon: Shield, title: 'Dustless Sanding', desc: 'Clean process for your home' },
              { icon: Award, title: '15+ Years', desc: `Trusted ${CITY} contractor` },
              { icon: TreePine, title: 'All Wood Types', desc: 'Oak, maple, cherry & more' }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-amber-600">
                <item.icon className="w-12 h-12 mx-auto mb-3 text-amber-700" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </section>

          <section className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Professional Hardwood Floor Refinishing in {CITY}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                <strong>Aaron Michael Services</strong> provides expert hardwood floor refinishing throughout {CITY}, {STATE}. Over time, even the finest hardwood floors become worn, scratched, and dull. Professional refinishing restores your floors to like-new condition, extending their life by decades and dramatically improving your home's appearance.
              </p>
              <p>
                Our refinishing process uses state-of-the-art dustless sanding equipment to minimize mess in your {CITY} home. We carefully sand away the worn finish and surface imperfections, then apply your choice of stain colors and protective finish coats. The result is stunning, durable floors that look brand new.
              </p>
              <p>
                Whether your {CITY} home has classic red oak, elegant maple, rich cherry, or exotic hardwoods, we have the expertise to refinish them beautifully. We work with both traditional oil-based and modern water-based finishes, helping you select the perfect option for your lifestyle and aesthetic preferences.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Refinishing Process</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Inspection & Prep', desc: `Assess floor condition, move furniture, seal off work area in your ${CITY} home.` },
                { step: '2', title: 'Sanding', desc: 'Progressive sanding with coarse to fine grits removes old finish and smooths surface.' },
                { step: '3', title: 'Staining (Optional)', desc: 'Apply custom stain color if desired. Wide range of colors available.' },
                { step: '4', title: 'Finishing', desc: 'Apply 2-3 coats of protective polyurethane with proper drying between coats.' }
              ].map((item) => (
                <div key={item.step} className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-amber-600">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-amber-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Choose Us for {CITY} Hardwood Floor Refinishing?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                `15+ years refinishing ${CITY} hardwood floors`,
                'State-of-the-art dustless sanding equipment',
                'Expert color matching and custom staining',
                'Both oil-based and water-based finishes',
                'Licensed, insured, and bonded',
                'Respectful of your home and schedule',
                'Transparent pricing with free estimates',
                'Meticulous attention to detail',
                `Knowledge of ${CITY} home architecture`
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-amber-600">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions - {CITY} Hardwood Floor Refinishing
            </h2>
            <div className="space-y-8 max-w-5xl mx-auto">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{faq.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-amber-900 to-amber-700 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Restore Your {CITY} Hardwood Floors?
            </h2>
            <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
              Get a free estimate for professional hardwood floor refinishing in {CITY}. Transform worn floors into beautiful focal points.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-white text-amber-900 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:bg-amber-50 transition-all hover:scale-105">
                <Phone className="w-5 h-5" />
                Call {PHONE}
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 bg-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-amber-600 transition-all">
                Request Free Estimate
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

        </div>
      </main>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default TonawandaHardwoodRefinishing;
