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
        title="Pier & Beam Foundation Repair Buffalo NY | Specialists Since 2003 | Aaron Michael Services"
        description="Buffalo's pier & beam foundation repair specialists. One of the last contractors in WNY with this expertise. Floor leveling, joist sistering, pier replacement, crawlspace repair. 22+ years experience. Call (716) 533-7108."
        keywords="pier and beam foundation repair Buffalo NY, pier beam foundation specialist Buffalo, pier and beam Buffalo, crawlspace repair Buffalo, joist sistering Buffalo, foundation leveling Buffalo NY, pier replacement Western New York, pier and beam contractor Kenmore NY"
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
              Pier & Beam Foundation Repair Buffalo NY
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-gray-100">
              Expert Pier & Beam Foundation Specialists | One of the Last Few Contractors in WNY with This Expertise | 22+ Years Experience
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
              Serving Buffalo, Kenmore, Tonawanda, Amherst & all Western New York. Specializing exclusively in pier & beam foundation repair, leveling, joist sistering, and crawlspace restoration.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              <strong>We specialize exclusively in pier & beam foundation repair.</strong> While most contractors in Western New York won't touch pier & beam foundations,
              we've spent over 22 years mastering this dying trade. If you own a historic Buffalo-area home built on pier & beam construction and you're dealing with
              sagging floors, bouncy spots, settling, or crawlspace issues — we're the contractors to call.
            </p>

            <p>
              <strong>Pier & beam foundations require specialized expertise.</strong> You can't fix them the same way you'd repair poured concrete or block foundations.
              They demand precise jacking and leveling techniques, expert joist sistering, proper pier replacement, crawlspace moisture management, and careful shimming
              to restore structural integrity without causing damage. Most contractors simply don't have this knowledge anymore.
            </p>

            <p>
              Aaron Michael Services is one of the last few contractors in Western New York with genuine pier & beam foundation repair expertise. We work on historic
              Buffalo bungalows, Kenmore craftsman homes, North Tonawanda cottages, and Amherst properties built in the early-to-mid 1900s. We understand the original
              construction methods, source the right materials, and execute repairs that last for decades.
            </p>
          </div>
        </section>

        {/* KEY SERVICES */}
        <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-10">Pier & Beam Foundation Repair Services</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Floor Leveling & Jacking</h3>
                <p className="text-blue-50 mb-3">
                  Precision hydraulic jacking to lift and level sagging floors without damaging joists or beams. We restore proper elevation
                  and eliminate bouncy or uneven floors.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Hydraulic floor jacking systems</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Beam & joist leveling</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Precision shimming techniques</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Pier Replacement & Installation</h3>
                <p className="text-blue-50 mb-3">
                  Replacing failing, settled, or rotted piers with properly-sized concrete or masonry supports that match original construction methods.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Concrete pier replacement</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Load-bearing pier installation</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Foundation post upgrades</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Joist Sistering & Reinforcement</h3>
                <p className="text-blue-50 mb-3">
                  Sistering new treated lumber alongside weakened or sagging joists to restore structural strength and eliminate bounce.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Joist sistering with treated lumber</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Rim joist replacement</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Beam reinforcement & support</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Crawlspace Repair & Moisture Control</h3>
                <p className="text-blue-50 mb-3">
                  Managing crawlspace moisture, improving ventilation, and installing vapor barriers to prevent rot and pest damage.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Vapor barrier installation</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Crawlspace ventilation improvements</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Moisture remediation</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Beam & Girder Repair</h3>
                <p className="text-blue-50 mb-3">
                  Repairing or replacing damaged main beams and load-bearing girders that support the entire pier & beam system.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Main beam replacement</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Girder sistering & reinforcement</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Load-bearing beam upgrades</li>
                </ul>
              </div>

              <div className="bg-blue-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Foundation Inspections & Reports</h3>
                <p className="text-blue-50 mb-3">
                  Detailed written evaluations of pier & beam condition with repair plans and cost estimates for insurance, buyers, or property managers.
                </p>
                <ul className="text-blue-50 text-sm space-y-2">
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Crawlspace inspections</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Structural assessment reports</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5" /> Real estate transaction documentation</li>
                </ul>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Pier & Beam Experience in Buffalo Matters</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              Western New York presents unique challenges for pier & beam foundations. Freeze-thaw cycles, high water tables, and clay-heavy soils
              create movement and moisture problems that accelerate pier settling and wood rot. A contractor who understands how Buffalo-area
              foundations behave — and who knows the original construction methods used in 1920s-1950s homes — delivers repairs that last.
            </p>

            <p>
              Most contractors simply don't work on pier & beam foundations anymore. They'll turn down the job or attempt repairs using incorrect
              techniques meant for concrete foundations. At Aaron Michael Services, we've been repairing pier & beam foundations for over 22 years.
              We know the right way to jack floors, replace piers, sister joists, and manage crawlspace moisture for historic Western New York homes.
            </p>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Pier & Beam Foundation Repair Process</h2>

            <div className="space-y-8 text-gray-700">
              <div>
                <h3 className="text-2xl font-bold mb-2">1. Comprehensive Crawlspace Inspection</h3>
                <p>
                  We enter the crawlspace and inspect every pier, joist, beam, and support structure. We look for settling piers, rotted wood,
                  moisture damage, improper shimming, and structural weakness. We use moisture meters and levels to quantify problems and document
                  everything with photos.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">2. Detailed Written Report & Repair Plan</h3>
                <p>
                  You receive a clear written report showing exactly what's failing, why it's failing, and what needs to be done. We provide a detailed
                  cost breakdown and timeline. No surprises, no vague estimates — just honest assessment from contractors who know pier & beam foundations.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">3. Expert Pier & Beam Repair Execution</h3>
                <p>
                  We execute repairs using proper pier & beam techniques — hydraulic jacking for leveling, sistering joists with treated lumber,
                  replacing failing piers, installing vapor barriers, and improving ventilation. Every repair is done to restore long-term structural
                  stability, not just mask symptoms.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2">4. Final Inspection & Documentation</h3>
                <p>
                  After repairs are complete, we walk you through the work, provide before/after photos, and hand over all documentation. This is
                  essential for insurance claims, real estate transactions, or simply having a record of professional repairs for future homeowners.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Pier & Beam Foundation Repair Throughout Western New York</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <Link to="/cities/buffalo" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo</h3>
              <p className="text-gray-700 text-sm">Pier & beam foundation repair for historic Buffalo bungalows, craftsman homes, and older properties throughout the city.</p>
            </Link>

            <Link to="/cities/kenmore" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore</h3>
              <p className="text-gray-700 text-sm">Specialized pier & beam service for Kenmore's historic housing stock — one of our most common service areas.</p>
            </Link>

            <Link to="/cities/tonawanda" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda & North Tonawanda</h3>
              <p className="text-gray-700 text-sm">Pier & beam foundation leveling, joist sistering, and crawlspace repairs for older Tonawanda homes.</p>
            </Link>

            <Link to="/cities/amherst" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst</h3>
              <p className="text-gray-700 text-sm">Pier & beam foundation work for historic Amherst properties and older construction throughout the town.</p>
            </Link>
          </div>

          <p className="text-gray-700">
            We also serve Cheektowaga, West Seneca, Lancaster, Depew, Williamsville, Hamburg, Orchard Park, Clarence, East Amherst, and all surrounding Western New York communities.
            If you have a pier & beam foundation that needs repair, call {PHONE} to schedule an inspection.
          </p>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pier & Beam Foundation Repair FAQ</h2>

            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-semibold text-lg">How do I know if I have a pier & beam foundation?</h3>
                <p>
                  If your home was built before the 1960s and has a crawlspace underneath (not a full basement or slab), you likely have a pier & beam foundation.
                  These homes typically have wooden floors that feel slightly bouncy, and you can access the crawlspace to see the wooden joists, beams, and
                  concrete or masonry piers supporting the structure.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">What are signs my pier & beam foundation needs repair?</h3>
                <p>
                  Common signs include sagging or sloping floors, bouncy spots when walking, doors and windows that stick or won't close properly, visible gaps
                  between floors and walls, cracks in interior walls or ceilings, and musty odors from the crawlspace. If you notice any of these, schedule an inspection.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Why can't most contractors fix pier & beam foundations?</h3>
                <p>
                  Pier & beam repair requires specialized knowledge that most modern contractors don't have. It involves understanding load distribution,
                  proper jacking techniques to avoid damaging joists, selecting the right lumber for sistering, and knowing how to match historic construction methods.
                  Most contractors today only work with concrete foundations, so they decline pier & beam jobs or attempt repairs using incorrect techniques.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">How long do pier & beam foundation repairs take?</h3>
                <p>
                  Repair timelines depend on the scope of work. Simple pier replacements or limited joist sistering can take 1-3 days. More extensive repairs
                  involving multiple piers, significant leveling, and crawlspace moisture remediation may take 5-7 days. We provide a clear timeline in your estimate.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Will repairing my pier & beam foundation increase home value?</h3>
                <p>
                  Absolutely. Properly documented pier & beam foundation repairs increase buyer confidence and marketability. Many buyers and real estate
                  agents are concerned about pier & beam foundations, so having professional documentation of recent repairs is a major selling point.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">Do you provide warranties on pier & beam foundation work?</h3>
                <p>
                  Yes. We provide workmanship warranties on all pier & beam repairs. Warranty details and coverage terms are included in your estimate
                  and final documentation.
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
            <h2 className="text-3xl font-bold mb-4">Ready for a Pier & Beam Foundation Inspection?</h2>
            <p className="mb-6 text-gray-300">Schedule a comprehensive crawlspace inspection with one of the last contractors in WNY who specializes in pier & beam foundations.</p>

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
                Request Free Estimate
              </Link>
            </div>

            <p className="text-gray-300">Licensed, insured, and serving Western New York for over 22 years.</p>
          </div>
        </section>

        {/* FINAL CONTENT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-lg text-gray-700">
          <h2 className="text-2xl font-bold mb-4">Buffalo's Pier & Beam Foundation Repair Specialists</h2>

          <p>
            <strong>If you own a historic Buffalo-area home built on pier & beam construction, you need a contractor who actually knows how to repair it.</strong>
            Most contractors will turn you down. Some will attempt repairs using techniques meant for concrete foundations — which can cause more damage
            than they fix. At Aaron Michael Services, pier & beam foundation repair is what we do. It's our specialty. We've been doing it for over 22 years.
          </p>

          <p>
            We understand the structural challenges of Western New York's freeze-thaw cycles, clay soils, and high water tables. We know how to properly
            jack floors without cracking plaster or damaging joists. We know which lumber to use for sistering. We know how to replace piers using methods
            that match the original construction. And we know how to manage crawlspace moisture to prevent future rot.
          </p>

          <p>
            <strong>This is specialized work, and there aren't many contractors left who can do it.</strong> If you're one of the homeowners dealing with
            sagging floors, settling piers, or crawlspace issues — and you've been turned away by other contractors — call us. We'll inspect your pier & beam
            foundation, provide a detailed written report, and give you a clear repair plan and cost estimate.
          </p>

          <p>
            Call <strong>{PHONE}</strong> to schedule a pier & beam foundation inspection, or use our contact form for a prompt reply. We serve Buffalo, Kenmore,
            Tonawanda, Amherst, and all surrounding Western New York communities.
          </p>
        </section>
      </div>
    </>
  );
}