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
        title="Foundation Repair Buffalo NY | Aaron Michael Services"
        description="Foundation repair in Buffalo, Amherst, Tonawanda & Kenmore. Crack repair, basement waterproofing, slab lifting, pier & beam foundation repair and structural stabilization. Call (716) 533-7108."
        keywords="foundation repair Buffalo NY, pier and beam repair, basement crack repair, foundation stabilization Buffalo, slab repair Tonawanda, waterproofing Kenmore"
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
              Foundation Repair in Buffalo & Western New York
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-100">
              Foundation crack repairs, basement waterproofing, slab lifting, stabilization, and pier & beam foundation solutions.
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
              Your home’s foundation is the single most important structural element — and when it shows signs of stress,
              early intervention saves thousands. Aaron Michael Services specializes in residential and light commercial
              foundation repair across Western New York. From visible cracks and uneven floors to moisture issues in basements,
              we diagnose the root cause, provide clear repair options, and execute work with long-term stability in mind.
            </p>

            <p>
              We treat foundation repair as structural engineering in the field: careful inspection, appropriate materials,
              and installation techniques matched to the type of foundation — whether poured concrete, concrete block, slab-on-grade,
              or pier & beam. Our approach prioritizes safety, durability, and clear documentation for insurance, buyers, or
              property managers.
            </p>
          </div>
        </section>

        {/* KEY SERVICES */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Foundation Repair Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h3 className="text-xl font-bold mb-3">Foundation Stabilization</h3>
                <p className="text-blue-50 mb-3">
                  Helical piers, pressed pilings, wall anchors, and carbon-fiber reinforcement to stop movement and restore structural integrity.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Helical pier installation</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Wall anchor systems</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Pier & Beam Foundation Repair</h3>
                <p className="text-blue-50 mb-3">
                  Leveling, sistering joists, replacing damaged piers, and improving crawlspace ventilation and support for pier & beam homes.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Jacking & beam leveling</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Replacement of failing piers</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Crawlspace repair & moisture control</li>
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
            <h2 className="text-2xl font-bold mb-4">Local Case Study — Buffalo Bungalow Stabilized</h2>
            <p>
              A Buffalo bungalow with settling near the back porch showed stair-step foundation cracks and a wet crawlspace.
              After an on-site evaluation we installed helical piers under affected bearing points, tied in a new interior drain,
              and leveled the porch slab. The homeowner received before/after documentation and a 5-year workmanship warranty on the pier work.
              Follow-up inspections showed full stabilization and no recurring water intrusion.
            </p>
            <p>
              Case studies like this illustrate how targeted stabilization plus drainage correction solves both the symptom and the cause —
              which is the only way to deliver lasting value.
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