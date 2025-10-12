import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './hardwood-flooring-schema.json';

const PHONE_DISPLAY = '(716) 533-7108';
const PHONE_TEL = 'tel:+17165337108';
const CANONICAL = 'https://aaronmichaelservices.com/hardwood-flooring-buffalo-ny';

const HardwoodFlooringBuffalo: React.FC = () => {
  useEffect(() => {
    document.title = 'Hardwood Floor Refinishing & Installation — Buffalo, NY | Aaron Michael Services';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Hardwood floor refinishing, installation, repair and maintenance serving Buffalo, Kenmore, Tonawanda, North Tonawanda and Cheektowaga. Call 716-533-7108 for a free estimate.'
      );
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEOHelmet
        title="Hardwood Floor Refinishing & Installation Buffalo NY | Aaron Michael Services"
        description="Hardwood floor refinishing, installation, repair and maintenance in Buffalo, Kenmore, Tonawanda, North Tonawanda & Cheektowaga. Call (716) 533-7108 for a free estimate."
        keywords="hardwood floor refinishing Buffalo NY, hardwood floor installation Buffalo, wood floor repair Buffalo, floor refinishing Buffalo, hardwood flooring Buffalo NY"
        canonicalUrl={CANONICAL}
      />

      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <nav className="mb-4 text-sm text-white/80 flex items-center justify-center gap-2">
            <HomeIcon className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Hardwood Flooring Buffalo, NY</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Hardwood Floor Refinishing & Installation — Buffalo, NY
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/90 mb-6">
            Expert hardwood floor refinishing, installation, repair and maintenance for Buffalo, Kenmore, Tonawanda, North Tonawanda and Cheektowaga — built to last and backed by local craftsmanship.
          </p>

          <div className="flex justify-center gap-4">
            <a href={PHONE_TEL} className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg">
              Call {PHONE_DISPLAY}
            </a>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white/20">
              Free Estimate
            </Link>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-12">

          {/* Intro / Value prop */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Buffalo’s Hardwood Flooring Specialists</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Aaron Michael Services brings old-school trade skills and modern finishing techniques together to restore and install hardwood floors across Western New York. From historic Queen City homes to modern condos, we tailor our approach to the structure, the wood species, and the result you want — beautiful, durable floors that last decades.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Whether your project is a full installation, a sand-and-refinish, a targeted repair after water or pet damage, or a screen-and-recoat maintenance job, our team provides transparent pricing, clear timelines, and craftsmanship backed by insurance and references from Buffalo-area homeowners and contractors.
            </p>
          </section>

          {/* Services overview */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Our Hardwood Flooring Services</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div>
                <h3 className="font-semibold mb-2">Refinishing & Restoration</h3>
                <p className="mb-3">
                  Full sanding and finish replacement to remove deep scratches, old finishes, and water stains. We use a staged sanding process, expert repairs (board replacement, gap filling), and premium finishes from brands such as Bona, Loba and Pallmann to deliver a long-lasting result.
                </p>

                <h3 className="font-semibold mb-2">Hardwood Installation</h3>
                <p className="mb-3">
                  Solid and engineered hardwood installation, custom layouts, niche species, and proper subfloor preparation. We choose species and installation methods that match the building’s needs: nail-down, glue-down, or floating systems.
                </p>

                <h3 className="font-semibold mb-2">Repairs & Spot Work</h3>
                <p>
                  Board replacement, water damage repair, stain blending, sanding of high-wear areas, squeak repair, and gap correction — done so the repair blends seamlessly with the rest of the floor.
                </p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Maintenance — Screen & Recoat</h3>
                <p className="mb-3">
                  Screen and recoat to restore sheen and protect surfaces between full refinishes. Fast turnaround and less invasive than full sanding.
                </p>

                <h3 className="font-semibold mb-2">Residue & Wax Removal</h3>
                <p className="mb-3">
                  Removing old wax, polish build-up, and residue that cause dullness or uneven appearance before proper sanding or recoating.
                </p>

                <h3 className="font-semibold mb-2">Commercial & Residential</h3>
                <p>
                  We work on homes, multi-family properties, retail spaces and offices. We plan jobs to minimize business disruption and meet commercial timelines where required.
                </p>
              </div>
            </div>
          </section>

          {/* Detailed refinishing guide */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Refinishing — Our Step-by-Step Approach</h2>

            <p className="text-gray-700 leading-relaxed mb-3">
              Our refinishing process is methodical because results matter. We begin with a detailed on-site consultation to identify wood species, existing finish, any structural issues (loose boards, cupping, water damage) and your desired outcome. From there:
            </p>

            <ol className="list-decimal list-inside ml-4 text-gray-700 space-y-2 mb-4">
              <li><strong>Inspection & Quote:</strong> Transparent estimate, photos and written scope.</li>
              <li><strong>Prep:</strong> Protect trim, doorways and nearby surfaces; remove furniture.</li>
              <li><strong>Sanding:</strong> Multi-pass sanding with correct grit progression to eliminate previous finish and imperfections.</li>
              <li><strong>Repair:</strong> Replace damaged boards, glue and screw loose boards, fill gaps where needed and feather repairs for a blended look.</li>
              <li><strong>Stain (optional):</strong> Color matching and test patches to ensure the exact tone you want.</li>
              <li><strong>Finish:</strong> Choose water-based for fast cure/low yellowing, oil-modified for deep amber tone, or specialty oil finishes for a natural look.</li>
              <li><strong>Cure & Handoff:</strong> Clear instructions, ventilation guidance, and a final walk-through to confirm satisfaction.</li>
            </ol>

            <p className="text-gray-700 leading-relaxed">
              We emphasize ventilation guidance and realistic curing expectations. Unlike quick job shortcuts, our finishes and procedures focus on durability, low VOC options where requested, and finishes that wear well in Buffalo’s climate.
            </p>
          </section>

          {/* Installation specifics */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Installation — Solid & Engineered Hardwood</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              New installations require proper acclimation, stable subfloors, and correct selection of species and construction (solid vs engineered). We advise on:
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
              <li>Species selection based on traffic, hardness, and aesthetic.</li>
              <li>Installation methods — nail-down, glue-down, or floating — chosen to match substrate and use-case.</li>
              <li>Transitions, thresholds and molding to create a finished, professional look.</li>
            </ul>
          </section>

          {/* Repairs and cause mitigation */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Repairs, Water Damage & Long-Term Care</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Water damage is one of the most common reasons floors fail. We repair damage where possible and advise on when full replacement is the safer long-term option. We also provide guidance for humidity control and routine care to prevent future issues — crucial in Buffalo’s seasonal climate.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our recommendations include humidity ranges to maintain, safe cleaning products, and schedules for maintenance recoats to extend the life of your floors.
            </p>
          </section>

          {/* Service area and local trust */}
          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Serving Buffalo & Western New York</h2>
            <p className="text-gray-700 leading-relaxed mb-2">
              We serve: <strong>Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga, Amherst, Clarence, Williamsville, Lancaster</strong> and surrounding WNY communities. Local knowledge helps: we understand regional building ages, trim styles, and homeowner expectations across neighborhoods.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Local references and documented before/after photos are available on request. We stand behind our workmanship with clear contracts and communication at every step.
            </p>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>

            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="font-semibold">How long does refinishing take?</h3>
                <p>Typical single-family rooms can be completed in 2–4 days depending on repairs and drying time. Larger or complex jobs may take longer. We provide a timeline in the estimate.</p>
              </div>

              <div>
                <h3 className="font-semibold">Will sanding create a lot of dust?</h3>
                <p>Modern equipment and proper containment minimize dust, and we clean thoroughly. We’ll explain the expected cleanup and any temporary disruptions during the quote.</p>
              </div>

              <div>
                <h3 className="font-semibold">Which finish should I pick?</h3>
                <p>We recommend water-based finishes for quick cure and low yellowing, and oil-modified for deep tone and durability where color shift is acceptable. We’ll help you choose based on your lifestyle and aesthetic goals.</p>
              </div>

              <div>
                <h3 className="font-semibold">Can you match existing floors?</h3>
                <p>Yes. We do color-matching and small test patches to blend repairs and replacements into existing flooring as seamlessly as possible.</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-gray-900 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to restore or install beautiful hardwood floors?</h2>
            <p className="mb-6">Call {PHONE_DISPLAY} for a free onsite estimate or <Link to="/contact" className="underline">request an estimate online</Link>.</p>
            <a href={PHONE_TEL} className="inline-block bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg">
              Call {PHONE_DISPLAY}
            </a>
          </section>

        </div>
      </main>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default HardwoodFlooringBuffalo;
