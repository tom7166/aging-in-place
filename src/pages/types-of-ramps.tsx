import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './types-of-ramps-schema.json';

export default function TypesOfRamps() {
  useEffect(() => {
    document.title = "Types of Ramps | Accessibility Ramps Buffalo NY | Aaron Michael Services";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Explore wood, aluminum, concrete, modular, and portable ramps for homes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Professional ADA-compliant ramp installation and carpentry expertise."
      );
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title="Types of Ramps | Accessibility Ramps Buffalo NY | Aaron Michael Services"
        description="Explore wood, aluminum, concrete, modular, and portable ramps for homes in Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga. Professional ADA-compliant ramp installation and carpentry expertise."
        keywords="types of ramps Buffalo, wheelchair ramp types, modular ramps, portable ramps, aluminum ramps"
        canonicalUrl="https://aaronmichaelservices.com/services/types-of-ramps"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <nav className="mb-6 text-blue-200">
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Home className="w-4 h-4" />
                <Link to="/" className="hover:text-white">Home</Link>
                <ArrowRight className="w-3 h-3" />
                <span>Types of Ramps</span>
              </div>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Types of Ramps: Wood, Aluminum, Concrete, Modular & Portable</h1>
            <p className="text-xl max-w-3xl mx-auto">
              At Aaron Michael Services, we provide safe, durable, and ADA-compliant ramp solutions
              for homeowners in Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga, and
              throughout Western New York. With over 25 years of carpentry expertise, our ramps
              help seniors, people with disabilities, and families create safer, more accessible homes.
            </p>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Accessibility Ramps Are Essential</h2>
            <p className="text-lg text-gray-700 mb-4">
              A safe, well-built ramp is more than just a convenience — it is a lifeline.
              According to the <a href="https://www.cdc.gov/falls/" className="text-blue-600 hover:underline">Centers for Disease Control and Prevention (CDC)</a>,
              falls are the leading cause of injury among older adults. Ramps significantly reduce
              this risk by replacing uneven steps with a smooth, gradual incline. The
              <a href="https://www.ada.gov/resources/2010-ada-standards/" className="text-blue-600 hover:underline"> ADA Standards for Accessible Design</a>
              {' '}recommend a slope ratio of 1:12, meaning every inch of rise requires 12 inches of ramp length.
              Physical therapists and rehabilitation specialists consistently recommend ramps as a key
              home modification for those recovering from surgery or managing mobility challenges.
            </p>
            <p className="text-lg text-gray-700">
              From permanent concrete structures to lightweight portable ramps, there are multiple
              options depending on your home layout, your budget, and your long-term needs. Below,
              we break down the five most common types of ramps — their pros, cons, maintenance
              requirements, and which situations they are best suited for.
            </p>
          </section>

          <section id="wood-ramps" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Wood Ramps</h2>
            <p className="text-lg text-gray-700 mb-4">
              Wood ramps are one of the most traditional and customizable ramp options. Built from
              pressure-treated lumber, cedar, or composite materials, they blend seamlessly with
              residential architecture. Many Buffalo homeowners choose wood ramps for their natural look
              and versatility in design. Wood allows custom railings, landings, and finishes, making
              them ideal for permanent installations.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Advantages of Wood Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Customizable:</strong> Can be built to fit any home, porch, or entryway.</li>
                <li><strong>Cost-effective upfront:</strong> Generally less expensive to build than concrete ramps.</li>
                <li><strong>Aesthetics:</strong> Can be stained, painted, or sealed to match your home's exterior.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Drawbacks of Wood Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Maintenance:</strong> Requires sealing and inspection to prevent rot, warping, or splinters.</li>
                <li><strong>Lifespan:</strong> Typically lasts 7–10 years, less than aluminum or concrete.</li>
                <li><strong>Weather impact:</strong> Buffalo winters with snow and ice can increase wear and tear.</li>
              </ul>
            </div>
            <p className="text-gray-600 italic">
              Expert insight: Nurses at <a href="https://www.clevelandclinic.org/" className="text-blue-600 hover:underline">Cleveland Clinic</a>
              {' '}often recommend wooden ramps for short-term recovery situations, since they can be
              built quickly and customized for medical equipment access.
            </p>
          </section>

          <section id="aluminum-ramps" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Aluminum Ramps</h2>
            <p className="text-lg text-gray-700 mb-4">
              Aluminum ramps are lightweight, durable, and virtually maintenance-free. Many modular
              systems are pre-engineered, meaning they can be installed faster than wood or concrete
              options. In Buffalo, aluminum ramps are popular for both residential and medical facilities.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Advantages of Aluminum Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Durability:</strong> Won't rust, warp, or crack like wood or concrete.</li>
                <li><strong>Low maintenance:</strong> No sealing or painting required.</li>
                <li><strong>Quick installation:</strong> Modular sections can be assembled in a day.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Drawbacks of Aluminum Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Cost:</strong> Higher upfront cost than wood.</li>
                <li><strong>Aesthetics:</strong> Metallic look may not blend with all homes.</li>
                <li><strong>Heat & Cold:</strong> Surface can get hot in summer or icy in winter.</li>
              </ul>
            </div>
            <p className="text-gray-600 italic">
              Expert insight: Physical therapists at <a href="https://www.mayoclinic.org/" className="text-blue-600 hover:underline">Mayo Clinic</a>
              {' '}highlight aluminum ramps as one of the best long-term solutions for patients with
              progressive mobility conditions due to their durability and modular flexibility.
            </p>
          </section>

          <section id="concrete-ramps" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Concrete Ramps</h2>
            <p className="text-lg text-gray-700 mb-4">
              Concrete ramps are the most permanent and durable ramp option. Poured-in-place concrete
              creates a solid, weather-resistant surface that can last for decades with little
              maintenance. In Buffalo, where snow and ice are common, concrete ramps provide excellent
              traction when treated with non-slip finishes.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Advantages of Concrete Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Durability:</strong> Can last 20–30 years with minimal upkeep.</li>
                <li><strong>Strength:</strong> Supports heavy loads, including scooters and power wheelchairs.</li>
                <li><strong>Weather-resistant:</strong> Handles Buffalo's freeze-thaw cycles better than wood.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Drawbacks of Concrete Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Cost:</strong> Highest initial investment compared to wood or aluminum.</li>
                <li><strong>Permanence:</strong> Not easily removed or relocated.</li>
                <li><strong>Construction time:</strong> Requires curing time before use.</li>
              </ul>
            </div>
            <p className="text-gray-600 italic">
              Expert insight: Occupational therapists at the <a href="https://www.nia.nih.gov/" className="text-blue-600 hover:underline">National Institute on Aging</a>
              {' '}recommend concrete ramps for long-term aging-in-place modifications, especially when
              paired with handrails and textured finishes for slip resistance.
            </p>
          </section>

          <section id="modular-ramps" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Modular Ramps</h2>
            <p className="text-lg text-gray-700 mb-4">
              Modular ramps are pre-fabricated systems made of aluminum or steel that can be
              configured in different layouts. They are ideal for situations where quick installation
              or relocation is required. Many Buffalo healthcare facilities rely on modular ramps
              during renovations or temporary accessibility needs.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Advantages of Modular Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Flexible:</strong> Can be reconfigured, extended, or relocated.</li>
                <li><strong>Fast setup:</strong> Installs quickly compared to custom builds.</li>
                <li><strong>Durability:</strong> Usually aluminum, offering a long lifespan.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Drawbacks of Modular Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Cost:</strong> More expensive than wood in many cases.</li>
                <li><strong>Appearance:</strong> Industrial look may not suit residential homes.</li>
              </ul>
            </div>
            <p className="text-gray-600 italic">
              Expert insight: Rehab nurses often recommend modular ramps for patients
              discharged from hospitals in Buffalo when quick, safe access is required before a
              permanent solution can be installed.
            </p>
          </section>

          <section id="portable-ramps" className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Portable Ramps</h2>
            <p className="text-lg text-gray-700 mb-4">
              Portable ramps are lightweight, foldable, and designed for temporary use. They are
              commonly used for travel, rental properties, or short-term rehabilitation. While not
              a permanent solution, they provide valuable flexibility.
            </p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Advantages of Portable Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Affordable:</strong> Least expensive ramp option.</li>
                <li><strong>Lightweight:</strong> Easy to carry and set up without tools.</li>
                <li><strong>Convenience:</strong> Can be used in multiple locations, indoors or outdoors.</li>
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Drawbacks of Portable Ramps:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Weight capacity:</strong> Limited compared to permanent ramps.</li>
                <li><strong>Stability:</strong> Not as secure as wood, aluminum, or concrete installations.</li>
                <li><strong>Not permanent:</strong> Not designed for daily, long-term use.</li>
              </ul>
            </div>
            <p className="text-gray-600 italic">
              Expert insight: According to the <a href="https://www.aarp.org/" className="text-blue-600 hover:underline">AARP</a>,
              {' '}portable ramps are an excellent solution for caregivers and family members who need
              a temporary way to move loved ones safely in and out of the home.
            </p>
          </section>

          <section className="mb-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Choosing the Right Ramp in Buffalo</h2>
            <p className="text-lg text-gray-700">
              The best ramp for your home depends on your long-term needs, budget, and space.
              For temporary recovery, portable or wood ramps may suffice. For permanent aging-in-place
              solutions, aluminum, modular, or concrete ramps provide greater durability and safety.
              Our team at Aaron Michael Services helps Buffalo-area homeowners choose the right
              ramp type with free consultations and expert recommendations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Local Expertise in Buffalo & Surrounding Areas</h2>
            <p className="text-lg text-gray-700">
              Serving Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga with over
              25 years of carpentry experience, Aaron Michael Services specializes in ADA-compliant
              accessibility modifications. Call <a href="tel:+17165337108" className="text-blue-600 hover:underline font-semibold">(716) 533-7108</a> to
              schedule your free consultation and make your home safer and more accessible today.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Are wood ramps ADA compliant?</h3>
              <p className="text-gray-700">
                Yes, wood ramps can meet ADA standards if built with a 1:12 slope, proper handrails,
                and a non-slip surface. Regular maintenance is essential for safety.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Which ramp lasts the longest?</h3>
              <p className="text-gray-700">
                Concrete ramps typically last 20–30 years, making them the most durable choice for
                permanent accessibility.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Can portable ramps be used in Buffalo winters?</h3>
              <p className="text-gray-700">
                Yes, but they require caution. Portable ramps can become slippery with snow and ice,
                so using anti-slip mats or traction strips is recommended.
              </p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}
