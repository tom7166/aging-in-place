// src/pages/FoundationRepair.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CircleCheck as CheckCircle,
  Hammer,
  Shield,
  Clock,
  Truck
} from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './foundation-schema.json';

const PHONE = '716-533-7108';
const TEL = PHONE.replace(/-/g, '');

export default function FoundationRepair() {
  return (
    <>
      <SEOHelmet
        title="Pier & Beam Foundation Repair Specialists Buffalo NY | Aaron Michael Services"
        description="One of the last contractors in WNY with pier & beam foundation expertise. Serving Buffalo, Kenmore, Tonawanda for 22+ years. Also: crack repair, waterproofing, slab lifting. Call (716) 533-7108."
        keywords="pier and beam foundation repair Buffalo NY, pier beam specialist Kenmore, foundation repair Buffalo, crawlspace repair, joist sistering, foundation leveling Western New York"
        canonicalUrl="https://aaronmichaelservices.com/services/foundation-repair"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* HERO */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pier & Beam Foundation Repair Specialists | Buffalo & Western NY
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-100">
              One of the last few contractors in Western New York with the expertise to repair pier & beam foundations. Serving Buffalo for over 22 years.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${TEL}`}
                aria-label={`Call ${PHONE}`}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="h-6 w-6" />
                {PHONE}
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors border-2 border-white"
              >
                Free Foundation Estimate
              </Link>
            </div>

            <p className="mt-6 text-gray-100 text-lg">
              Serving Buffalo, Amherst, Tonawanda, Kenmore & all surrounding Western New York communities. Fast inspections, thorough reports, dependable repairs.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              <strong>Pier & beam foundation repair is a dying trade in Western New York — and we're one of the last contractors with the know-how to do it right.</strong>
              Many older homes in Buffalo, Kenmore, Tonawanda, and surrounding areas were built on pier & beam foundations, but finding a contractor
              who understands the unique challenges of leveling, sistering joists, replacing failing piers, and managing crawlspace issues is increasingly difficult.
            </p>

            <p>
              Aaron Michael Services brings over 22 years of hands-on experience repairing pier & beam foundations across Western New York. We understand
              the structural nuances, moisture control requirements, and proper shimming techniques that keep these historic foundations stable for decades.
              Whether you're dealing with sagging floors, bouncy joists, settling piers, or crawlspace moisture, we diagnose the root cause and deliver
              long-term solutions — not quick patches.
            </p>

            <p>
              Beyond pier & beam work, we also handle poured concrete, concrete block, and slab-on-grade foundation repairs including crack repair,
              waterproofing, and stabilization. Our approach prioritizes safety, durability, and clear documentation for insurance, buyers, or property managers.
            </p>
          </div>
        </section>

        {/* KEY SERVICES */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Foundation Repair Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-800 p-6 rounded-lg border-2 border-yellow-400">
                <div className="inline-block bg-yellow-400 text-blue-900 px-3 py-1 rounded text-sm font-bold mb-3">
                  SPECIALTY SERVICE
                </div>
                <h3 className="text-xl font-bold mb-3">Pier & Beam Foundation Repair</h3>
                <p className="text-blue-50 mb-3">
                  <strong>One of the last contractors in WNY with pier & beam expertise.</strong> Leveling, sistering joists, replacing damaged piers,
                  and improving crawlspace ventilation and support for historic pier & beam homes.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Jacking & beam leveling</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Replacement of failing piers</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Crawlspace repair & moisture control</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Joist sistering & reinforcement</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Proper shimming techniques</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Foundation Stabilization</h3>
                <p className="text-blue-50 mb-3">
                  Helical piers, pressed pilings, wall anchors, and carbon-fiber reinforcement to stop movement and restore structural integrity.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Helical pier installation</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Wall anchor systems</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Carbon fiber reinforcement</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Crack Repair & Structural Patching</h3>
                <p className="text-blue-50 mb-3">
                  Epoxy injection and polyurethane systems for structural crack repair, plus mechanical reinforcement when needed.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Basement wall crack injection</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Hairline and structural crack solutions</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Documentation for inspections and listings</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Basement Waterproofing & Drainage</h3>
                <p className="text-blue-50 mb-3">
                  Interior/exterior drainage systems, sump pumps, perimeter drains, and vapor barriers to keep basements dry and healthy.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Interior French drain installs</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Sump pump selection & installation</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Exterior excavation & membrane work</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Slab Repair & Concrete Lifting</h3>
                <p className="text-blue-50 mb-3">
                  Polyjacking, mudjacking, and slab stabilization to repair settled slabs and restore level floors and patios.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Garage & porch slab lifting</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Void filling & base compaction</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Structural Inspections & Reports</h3>
                <p className="text-blue-50 mb-3">
                  Written evaluations, repair plans, and cost estimates — essential for insurance claims, real estate transactions, and long-term maintenance planning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY PIER & BEAM SPECIALISTS */}
        <section className="bg-yellow-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Pier & Beam Foundation Expertise Matters</h2>
            <div className="prose prose-lg text-gray-700 max-w-none">
              <p>
                <strong>Pier & beam foundations are a dying specialty.</strong> Most contractors today only work with poured concrete or
                block foundations. But many historic Buffalo-area homes — especially bungalows, craftsman-style houses, and older structures
                built before the 1950s — sit on pier & beam systems. These foundations require specialized knowledge of:
              </p>

              <ul>
                <li><strong>Proper jacking techniques</strong> to level floors without damaging joists or load-bearing beams</li>
                <li><strong>Crawlspace moisture management</strong> that prevents rot and pest damage</li>
                <li><strong>Shimming and pier replacement</strong> using materials that match the original construction methods</li>
                <li><strong>Joist sistering and reinforcement</strong> when original lumber has weakened or sagged</li>
                <li><strong>Ventilation improvements</strong> that reduce humidity while maintaining structural support</li>
              </ul>

              <p>
                We've spent over two decades mastering these techniques. When other contractors say "we don't do that type of foundation,"
                we show up with the tools, materials, and experience to fix it right. If you have a pier & beam foundation showing signs
                of settling, bouncy floors, or crawlspace issues — call us. We're one of the last few who can help.
              </p>
            </div>
          </div>
        </section>

        {/* WHY LOCAL MATTERS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Local Foundation Repair is Critical</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Western New York soil conditions, freeze-thaw cycles, and high water tables influence how foundations move and fail.
              A contractor who understands local soil behavior, municipal drainage, and regional construction practices makes better
              decisions on repairs. That local knowledge reduces the chance of repeat problems and protects property value.
            </p>

            <p>
              At Aaron Michael Services we pair on-site experience with proven repair technologies — not temporary fixes. We document
              the cause of movement, scope of necessary work, and provide options so you can choose the solution that fits your budget
              and long-term goals.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Foundation Repair Process</h2>

            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="text-2xl font-bold mb-2">1. Thorough Inspection</h3>
                <p>
                  Our field technician inspects interior and exterior signs — slab displacement, stair-step cracks, bowed walls, doors that stick,
                  drainage problems, and moisture. We use moisture meters and level measuring to quantify movement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">2. Detailed Report & Options</h3>
                <p>
                  You receive a written report describing the cause, recommended repairs, timeline, and precise cost breakdown. We present
                  short-term and long-term options so you can make an informed decision.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">3. Scheduled Stabilization & Repair</h3>
                <p>
                  We perform repairs using engineered systems — piers, anchors, epoxy systems or drainage installs — and keep you updated
                  throughout the process. Work areas are protected and cleaned daily.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">4. Final Walkthrough & Documentation</h3>
                <p>
                  After completion we do a final walkthrough, provide before/after photos, and hand over documentation for insurance, future buyers,
                  or city compliance if needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Serving Buffalo & All of Western New York</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Link to="/cities/buffalo" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo</h3>
              <p className="text-gray-700 text-sm">Foundation inspections, crack repair, and waterproofing across the city and neighborhoods.</p>
            </Link>

            <Link to="/cities/amherst" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst</h3>
              <p className="text-gray-700 text-sm">Residential and multi-unit foundation work for Amherst homeowners and managers.</p>
            </Link>

            <Link to="/cities/tonawanda" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda</h3>
              <p className="text-gray-700 text-sm">Rapid response for seasonal water issues and foundation settlement concerns.</p>
            </Link>

            <Link to="/cities/kenmore" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore</h3>
              <p className="text-gray-700 text-sm">Pier & beam service and crawlspace stabilization for older Kenmore homes.</p>
            </Link>
          </div>

          <p className="text-gray-700">
            We also serve Cheektowaga, West Seneca, Lancaster, Depew, Williamsville, Hamburg, Orchard Park, Clarence, East Amherst and surrounding Western New York communities. Call {PHONE} to schedule an inspection.
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Foundation Repair FAQ</h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg">How do I know if my foundation needs repair?</h3>
                <p>
                  Common signs include vertical or stair-step cracks in masonry, bowing or leaning walls, doors and windows that no longer close,
                  sloped or uneven floors, and persistent basement moisture. If you see multiple indicators, schedule an inspection.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">How long will repairs take?</h3>
                <p>
                  Repair times vary by scope. Small crack injections or localized slab lifts can be completed in a day; larger stabilization
                  systems (piers or anchors) often take several days depending on site conditions and permitting needs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Will foundation repair increase my home value?</h3>
                <p>
                  Properly documented structural repairs improve marketability and buyer confidence. A stabilized foundation is a major selling point;
                  buyers and lenders want to see professional inspection reports and completed repairs.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Do you provide warranties?</h3>
                <p>
                  Yes — many of our systems (pier installations, anchor systems, epoxy injections) come with manufacturer-backed or workmanship warranties.
                  Warranty details are provided in the estimate and final documentation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY (LOCAL) */}
        <section className="bg-gradient-to-r from-gray-100 to-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg text-gray-700">
            <h2 className="text-2xl font-bold mb-4">Case Study — Kenmore Pier & Beam Foundation Leveled</h2>
            <p>
              A 1940s Kenmore bungalow built on pier & beam showed significant floor sagging in the living room and bouncy spots near interior walls.
              Several contractors declined the job, citing lack of experience with pier & beam systems. After our inspection, we identified three
              failing piers, rotted rim joists, and inadequate crawlspace ventilation.
            </p>
            <p>
              We replaced the compromised piers with properly-sized concrete supports, sistered the damaged joists with treated lumber, and
              re-leveled the floor using hydraulic jacks and precision shimming. We also installed crawlspace vents and a vapor barrier to
              prevent future moisture damage. The homeowner now has a solid, level floor — and documentation for future resale.
            </p>
            <p>
              This is the kind of specialized work most contractors can't or won't do. But for homes built on pier & beam, it's the only
              way to restore structural integrity and protect property value.
            </p>
          </div>
        </section>

        {/* TRUST + CTA */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for a Professional Inspection?</h2>
            <p className="mb-6 text-gray-300">Schedule a thorough foundation inspection with clear, documented repair options and pricing.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href={`tel:${TEL}`}
                aria-label={`Call ${PHONE}`}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="h-6 w-6" />
                {PHONE}
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors border-2 border-white"
              >
                Request Estimate
              </Link>
            </div>

            <p className="text-gray-300">Licensed, insured, and locally experienced in Western New York.</p>
          </div>
        </section>

        {/* FINAL CONTENT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Foundation Repair Done Right — Long-Term Solutions</h2>

          <p>
            When foundation issues appear, the difference between a temporary patch and a lasting repair is professional diagnosis and
            the right engineered solution. Aaron Michael Services offers both — we don’t just fill cracks, we fix the reason they formed.
          </p>

          <p>
            From waterproofing systems that redirect water away from foundations to pier systems that lift and stabilize load-bearing points,
            our repairs are selected to maximize longevity and minimize disruption. We coordinate permits, inspections, and follow-up so you have
            a complete record of work performed.
          </p>

          <p>
            Call {PHONE} to schedule an inspection or use our contact form for a prompt reply. We’ll show up on time, document conditions, and lay out
            clear repair options so you can move forward with confidence.
          </p>
        </section>
      </div>
    </>
  );
}