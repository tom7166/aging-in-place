import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CircleCheck as CheckCircle,
  Trash2,
  Clock,
  Shield,
  Chrome as Home,
  Truck,
} from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './property-cleanouts-schema.json';

const PHONE = '716-533-7108'; // Use this constant everywhere
const TEL = PHONE.replace(/-/g, '');

export default function PropertyCleanouts() {
  return (
    <>
      <SEOHelmet
        title="Property Cleanouts Buffalo NY | Complete Removal Services"
        description="Professional property cleanout services in Buffalo, Amherst, Tonawanda & Kenmore NY. Estate, rental, foreclosure & commercial cleanouts. Fast, reliable removal. Call (716) 533-7108."
        keywords="property cleanouts Buffalo NY, estate cleanouts Western New York, rental property cleanout, foreclosure cleanout Buffalo, commercial cleanout services, debris removal Buffalo NY"
        canonicalUrl="https://aaronmichaelservices.com/services/property-cleanouts"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* HERO */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Property Cleanouts in Buffalo & Western New York
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Estate, rental, foreclosure & commercial cleanouts — fast, respectful, and eco-conscious.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
                aria-label={`Call ${PHONE}`}
              >
                <Phone className="h-6 w-6" />
                {PHONE}
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors border-2 border-white"
              >
                Free Estimate
              </Link>
            </div>

            <p className="mt-6 text-gray-100 text-lg">
              Serving Buffalo, Amherst, Tonawanda, Kenmore & all surrounding Western New York communities.
            </p>
          </div>
        </section>

        {/* SHORT INTRO */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-4">
              Aaron Michael Services provides complete property cleanouts across the Buffalo-Niagara region.
              Whether you’re an estate executor, property manager, real estate investor, or a homeowner decluttering
              before a sale, our experienced crews handle every cleanout with sensitivity, speed, and strict attention
              to environmentally responsible disposal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on clear communication, fair and transparent pricing, and documented donation or recycling when
              appropriate. That focus has made us the chosen local partner for property owners throughout Western New York.
            </p>
          </div>
        </section>

        {/* CORE SERVICES */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-center">Property Cleanout Services</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Estate & Foreclosure Cleanouts</h3>
                <p className="text-blue-50 mb-4">
                  Sensitive handling for estate executors and bank-owned properties — we inventory valuables, set aside items for review,
                  coordinate donations, and prepare the property for sale or auction.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    Inventory & valuables review
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    Donation & recycling coordination
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    Full property clearance & documentation
                  </li>
                </ul>
              </div>

              {/* Service Card 2 */}
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Rental Turnovers & Eviction Cleanouts</h3>
                <p className="text-blue-50 mb-4">
                  Rapid, reliable cleanouts that minimize vacancy time and get units back on the market fast. We work with managers to meet tight timelines.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    Abandoned property removal & documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    Fast turnaround & flexible scheduling
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    Final sweep & move-in readiness
                  </li>
                </ul>
              </div>

              {/* Service Card 3 */}
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Commercial & Large-Scale Cleanouts</h3>
                <p className="text-blue-50 mb-4">
                  Offices, retail spaces, warehouses — we plan around your business hours to reduce disruption and handle large-volume projects safely and quickly.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    Office furniture & equipment removal
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    After-hours scheduling & staged removal
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 mt-0.5" />
                    Large-scale debris hauling & recycling
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS OVERVIEW */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Process — Simple, Transparent, Proven</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center">1</span>
                Assessment & Quote
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We inspect the property, assess volume, access, and any special handling. You get a clear, itemized quote — no surprises. For estate and foreclosure jobs we document items and recommend donation paths where appropriate.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center">2</span>
                Systematic Clearing
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We remove items room-by-room, taking care with appliances and large pieces. Our crew protects floors and doorways, ensuring the property is handled respectfully and safely.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center">3</span>
                Sorting, Donation & Recycling
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Usable goods are sorted for donation (we work with Buffalo-area charities), recyclables are separated, and hazardous materials are handled per EPA and local guidelines. You get documentation for donated items when requested.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center">4</span>
                Final Sweep & Handoff
              </h3>
              <p className="text-gray-700 leading-relaxed">
                After clearing we perform a final walkthrough, provide before/after photos and receipts for disposal/donations, and leave the property ready for whatever comes next — renovation, staging, listing, or new tenants.
              </p>
            </div>
          </div>
        </section>

        {/* IDEAL FOR */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Solutions For</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <Home className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Real Estate Investors</h3>
                <p className="text-gray-700">Fast clearouts to prepare flips and foreclosures for renovation or listing.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Property Managers</h3>
                <p className="text-gray-700">Turnover services to minimize vacancy and handle abandoned items professionally.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Estate Executors</h3>
                <p className="text-gray-700">Compassionate, careful service that documents items and preserves potential family heirlooms.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <Truck className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Homeowners Downsizing</h3>
                <p className="text-gray-700">Full-service clearing for moves, sales, or downsizing with donation coordination.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <Trash2 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Commercial Owners</h3>
                <p className="text-gray-700">Flexible scheduling and staged removals for minimal business disruption.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Foreclosure Properties</h3>
                <p className="text-gray-700">Complete clearance and documentation to make properties market-ready.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICE AREAS */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Serving Western New York</h2>

          <p className="text-gray-700 mb-6">
            Aaron Michael Services is local to Buffalo and specializes in property cleanouts across the region. We know local disposal rules, have strong donation partnerships, and move quickly when time is critical.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link
              to="/cities/buffalo"
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo</h3>
              <p className="text-gray-600 mb-2">Complete property clearing services in the city and neighborhoods.</p>
              <p className="text-gray-700 text-sm">
                Fast response for estate clearouts, rental turnovers, and commercial projects throughout Buffalo.
              </p>
            </Link>

            <Link
              to="/cities/amherst"
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst</h3>
              <p className="text-gray-600 mb-2">Professional removal specialists in Amherst and surrounding areas.</p>
              <p className="text-gray-700 text-sm">
                We handle tenant turnovers, estate jobs, and donation pickups locally and efficiently.
              </p>
            </Link>

            <Link
              to="/cities/tonawanda"
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda</h3>
              <p className="text-gray-600 mb-2">Fast, reliable property cleanouts across Tonawanda.</p>
              <p className="text-gray-700 text-sm">
                Quick scheduling and clear documentation for property managers and investors.
              </p>
            </Link>

            <Link
              to="/cities/kenmore"
              className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore</h3>
              <p className="text-gray-600 mb-2">Comprehensive removal solutions in Kenmore.</p>
              <p className="text-gray-700 text-sm">
                Careful handling for older homes and properties needing special attention.
              </p>
            </Link>
          </div>

          <p className="text-gray-700">
            We also serve Cheektowaga, West Seneca, Lancaster, Depew, Williamsville, Hamburg, Orchard Park, East Amherst, Clarence,
            and all surrounding Western New York communities. Call {PHONE} for local scheduling and same-day options when available.
          </p>
        </section>

        {/* WHY CHOOSE US */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Western New York Chooses Us</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold mb-3">Local Knowledge & Experience</h3>
                <p className="text-gray-300 mb-6">
                  Decades of local experience means we understand property types, weather impacts, and regional disposal regulations.
                  That knowledge saves you time and money.
                </p>

                <h3 className="text-xl font-bold mb-3">Transparent Pricing</h3>
                <p className="text-gray-300">
                  You receive a clear, itemized estimate — phased work is available to spread costs. No surprise fees, ever.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Environmentally Responsible</h3>
                <p className="text-gray-300 mb-6">
                  We maximize donation and recycling to reduce landfill waste, and provide receipts and documentation for donated items.
                </p>

                <h3 className="text-xl font-bold mb-3">Fully Insured & Trustworthy</h3>
                <p className="text-gray-300">
                  Comprehensive insurance protects your property. Our crews follow strict handling and protection standards during every job.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">How much does a property cleanout cost?</h3>
                <p className="text-gray-700">
                  Costs depend on property size, volume, access (stairs/narrow entries), and disposal requirements. Typical residential single-family cleanouts range broadly — we provide free on-site estimates with itemized pricing. For accurate pricing call {PHONE} and schedule a walkthrough.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">How fast can you do a cleanout?</h3>
                <p className="text-gray-700">
                  Small apartments can often be completed in 4–8 hours. Average single-family homes commonly take 1–2 days; larger estates may take 3–5 days. Urgent jobs can often begin within 24–48 hours—call {PHONE} to discuss same-day options.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Do you donate or recycle items?</h3>
                <p className="text-gray-700">
                  Yes — usable furniture, appliances, and household goods are donated to local charities when acceptable. Recyclables and e-waste are routed to approved facilities. We provide donation receipts when requested.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Can you look for valuables or documents?</h3>
                <p className="text-gray-700">
                  Absolutely. For estate cleanouts we follow agreed-upon instructions to set aside potential valuables and important documents. We document finds and communicate promptly with executors or representatives.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Do I need to be present?</h3>
                <p className="text-gray-700">
                  You don’t need to be present for the full job. Many clients prefer to join the initial walkthrough to give instructions. We provide photos and documentation throughout multi-day projects and conduct a final walkthrough at completion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST & METRICS */}
        <section className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">1500+</div>
                <div className="text-gray-300">Properties Cleared</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5★</div>
                <div className="text-gray-300">Customer Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24hr</div>
                <div className="text-gray-300">Fast Response</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Eco</div>
                <div className="text-gray-300">Friendly Disposal</div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Clear Your Property?</h2>
            <p className="text-lg mb-6 text-gray-200">
              Get a free on-site estimate and clear your property quickly and professionally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href={`tel:${TEL}`}
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
                aria-label={`Call ${PHONE}`}
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

            <p className="text-gray-200">Serving Buffalo, Amherst, Tonawanda, Kenmore & all of Western New York.</p>
          </div>
        </section>

        {/* RELATED SERVICES */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Services</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Link to="/estate-cleanouts" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Estate Cleanouts</h3>
              <p className="text-gray-600 text-sm mb-3">Sensitive estate property clearing and settlement services.</p>
              <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
            </Link>

            <Link to="/disability-modifications" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accessibility Remodeling</h3>
              <p className="text-gray-600 text-sm mb-3">Professional accessibility modifications for all properties.</p>
              <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
            </Link>

            <Link to="/accessible-bathrooms" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bathroom Remodeling</h3>
              <p className="text-gray-600 text-sm mb-3">Complete bathroom renovations and accessibility upgrades.</p>
              <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
            </Link>

            <Link to="/kitchen-modifications" className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kitchen Remodeling</h3>
              <p className="text-gray-600 text-sm mb-3">Full kitchen renovations and accessibility modifications.</p>
              <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
            </Link>
          </div>
        </section>

        {/* FINAL CONTENT */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Property Cleanouts Across Buffalo & Western New York</h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p>
              Whether you are handling an estate settlement, preparing an investment property for renovation, turning over a rental unit,
              or clearing a foreclosure, Aaron Michael Services provides the professional property cleanout expertise Western New York
              property owners depend on. We combine local knowledge with transparent pricing and responsible disposal practices to
              deliver consistent, high-quality results.
            </p>

            <p>
              Clear communication is central to our work — from the initial walkthrough and written quote through the final walkthrough
              and delivery of donation receipts. We understand the emotional and financial stakes involved in estate and foreclosure
              cleanouts and treat every property as if it were our own.
            </p>

            <p>
              Our crews are trained to identify reusable items, handle appliances safely, work around tight access conditions, and
              coordinate with property managers, realtors, and executors. We offer phased work when budgets require it and always
              document donation and disposal for your records.
            </p>

            <p>
              For local businesses and commercial properties, we provide after-hours scheduling and staged removals so your operations
              continue uninterrupted. For homeowners ready to sell, our efficient clearing services speed up listing and staging workflows,
              ultimately saving time and reducing carrying costs associated with vacant properties.
            </p>

            <p>
              To schedule a free on-site estimate, call {PHONE} or use our contact form. We’ll provide a clear, itemized plan for your property
              cleanout and work with you to meet deadlines, budgets, and documentation needs.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}