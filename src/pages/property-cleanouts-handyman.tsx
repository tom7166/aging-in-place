import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Wrench, Trash2, Clock, Shield, Chrome as Home, Hammer } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './property-cleanouts-schema.json';

export default function PropertyCleanoutsHandyman() {
  return (
    <>
      <SEOHelmet
        title="Property Cleanouts Buffalo NY | Aaron Michael Services"
        description="Complete property cleanout and handyman services in Buffalo, Amherst, Tonawanda & Kenmore NY. Licensed contractor for renovations, repairs, and cleanouts. Call (716) 575-2626."
        keywords="property cleanouts Buffalo NY, handyman services Western New York, property cleanout contractor, renovation and repair Buffalo, Amherst handyman, Tonawanda property services"
        canonicalUrl="https://aaronmichaelservices.com/property-cleanouts-handyman"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Property Cleanouts & Handyman Services in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Complete Property Solutions: Cleanout, Repair, Renovate, and Restore
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:7165752626"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  Call (716) 575-2626
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors border-2 border-white"
                >
                  Free Consultation
                </Link>
              </div>
              <p className="mt-6 text-gray-100 text-lg">
                Same-Day Consultations | Licensed & Insured | Full-Service Contractor
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              When you need a property cleared and prepared for its next chapter, Aaron Michael Services offers a comprehensive solution that goes beyond simple cleanout. We combine professional property cleanout services with expert handyman and renovation capabilities to provide complete property transformation throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>. Whether you're a homeowner preparing a property for sale, a landlord turning over a rental unit, a real estate investor renovating a flip, or a business owner clearing commercial space, our integrated approach saves you time, money, and the hassle of coordinating multiple contractors.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As <strong>Buffalo's #1 ADA & Accessibility Contractor</strong>, we bring specialized expertise to every project. Our handyman services aren't just about basic repairs—we're licensed professionals who can handle everything from minor fixes to major renovations, including <Link to="/kitchen-modifications" className="text-blue-600 hover:text-blue-800 font-semibold">kitchen modifications</Link>, <Link to="/accessible-bathrooms" className="text-blue-600 hover:text-blue-800 font-semibold">accessible bathroom remodeling</Link>, <Link to="/wheelchair-ramps" className="text-blue-600 hover:text-blue-800 font-semibold">wheelchair ramp installation</Link>, and <Link to="/door-widening" className="text-blue-600 hover:text-blue-800 font-semibold">door widening</Link> for improved accessibility.
            </p>
          </div>
        </section>

        {/* Two-in-One Solution */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Why Hire Two Contractors When One Can Do It All?
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Trash2 className="h-16 w-16 text-blue-200" />
                  <h3 className="text-2xl font-bold">Property Cleanout Services</h3>
                </div>
                <ul className="space-y-3 text-blue-50">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Complete property clearing and debris removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Appliance disconnection and removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Furniture and fixture removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Yard debris and outdoor cleanout</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Post-construction cleanup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Rental property turnovers</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Hammer className="h-16 w-16 text-blue-200" />
                  <h3 className="text-2xl font-bold">Handyman & Renovation Services</h3>
                </div>
                <ul className="space-y-3 text-blue-50">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Minor and major repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Painting and drywall repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Flooring installation and repair</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Plumbing and electrical work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Cabinet installation and repairs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                    <span>Accessibility modifications</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Complete Process */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Complete Property Transformation Process
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                Comprehensive Property Assessment
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                Every successful project begins with thorough planning. When you contact Aaron Michael Services for property cleanout and handyman services in <strong>Buffalo, Amherst, Tonawanda, Kenmore</strong>, or anywhere in Western New York, we schedule a detailed on-site assessment. During this consultation, we:
              </p>
              <ul className="list-disc list-inside ml-13 space-y-2 text-gray-700">
                <li>Walk through every area of the property to assess cleanout needs</li>
                <li>Identify all repairs, renovations, or improvements required</li>
                <li>Evaluate structural issues, safety concerns, or code violations</li>
                <li>Discuss your timeline, budget, and end goals for the property</li>
                <li>Take measurements and photos for accurate project planning</li>
                <li>Provide a comprehensive, itemized quote covering all work</li>
              </ul>
              <p className="text-gray-700 leading-relaxed ml-13 mt-4">
                This integrated assessment is invaluable because it allows us to coordinate the cleanout and renovation work efficiently. We can identify what needs to be removed before repairs begin, which repairs should be prioritized, and how to sequence the work to minimize time and cost.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                Strategic Cleanout & Removal
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                Before any repair or renovation work begins, we complete the property cleanout. This strategic approach prevents damage to new materials and ensures workers have clear access to all areas. Our cleanout process includes:
              </p>
              <ul className="list-disc list-inside ml-13 space-y-2 text-gray-700">
                <li><strong>Debris Removal:</strong> All trash, unwanted items, and materials are hauled away</li>
                <li><strong>Appliance Removal:</strong> We disconnect and remove old appliances, including proper refrigerant handling for units with cooling systems</li>
                <li><strong>Fixture Removal:</strong> Old light fixtures, plumbing fixtures, cabinets, and countertops are carefully removed to prevent damage to walls and floors</li>
                <li><strong>Flooring Removal:</strong> When necessary, we remove old carpeting, tile, or damaged flooring materials</li>
                <li><strong>Demolition Work:</strong> If walls, cabinets, or other structures need to be removed for renovation, we handle controlled demolition safely</li>
                <li><strong>Yard Cleanup:</strong> Exterior areas are cleared of debris, overgrown vegetation, and unwanted items</li>
              </ul>
              <p className="text-gray-700 leading-relaxed ml-13 mt-4">
                Throughout the cleanout process, we protect the property with floor coverings, door protection, and proper dust containment. We sort materials for donation, recycling, and responsible disposal, minimizing environmental impact.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                Professional Handyman & Repair Services
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                With the property cleared, we move seamlessly into handyman and repair work. Our licensed contractors handle a comprehensive range of services:
              </p>

              <div className="ml-13 space-y-6 mt-6">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Structural Repairs</h4>
                  <p className="text-gray-700">
                    We address foundation issues, framing repairs, roof leaks, and structural deficiencies that could affect property value or safety. This is especially important for older Western New York homes that may have weathering or settling issues.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Drywall & Painting</h4>
                  <p className="text-gray-700">
                    From patching small holes to replacing entire walls, our drywall experts restore smooth, professional surfaces. We provide complete interior and exterior painting services with premium materials and meticulous preparation for lasting results.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Flooring Installation</h4>
                  <p className="text-gray-700">
                    We install hardwood, laminate, vinyl, tile, and carpet flooring. Whether you're updating a rental property with durable luxury vinyl or installing hardwood for a home sale, we ensure professional installation that enhances property value.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Plumbing Repairs</h4>
                  <p className="text-gray-700">
                    Our licensed plumbers handle everything from leaky faucets and running toilets to pipe replacements and fixture installations. We address water damage, update outdated plumbing, and ensure all work meets current code requirements.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Electrical Work</h4>
                  <p className="text-gray-700">
                    Licensed electricians on our team perform outlet and switch replacements, lighting upgrades, electrical panel work, and full rewiring when necessary. We ensure all electrical systems are safe, functional, and up to code.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Kitchen & Bathroom Updates</h4>
                  <p className="text-gray-700">
                    From simple cosmetic updates to complete remodels, we transform kitchens and bathrooms. This includes cabinet installation, countertop replacement, backsplash installation, and fixture upgrades. Our expertise in <Link to="/accessible-bathrooms" className="text-blue-600 hover:text-blue-800 font-semibold">accessible bathroom design</Link> and <Link to="/kitchen-modifications" className=\"text-blue-600 hover:text-blue-800 font-semibold">kitchen accessibility</Link> makes us uniquely qualified for aging-in-place modifications.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Accessibility Modifications</h4>
                  <p className="text-gray-700">
                    As accessibility specialists, we install grab bars, widen doorways, build wheelchair ramps, create zero-threshold entries, and implement universal design features that make properties safer and more marketable. Learn more about our <Link to="/aging-in-place" className="text-blue-600 hover:text-blue-800 font-semibold">aging-in-place solutions</Link>.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                Final Finishing & Property Preparation
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13">
                The final phase of our property transformation process ensures the space is move-in ready, market-ready, or rental-ready. We perform detailed finishing work including trim installation, hardware mounting, caulking, and touch-up painting. Properties receive a thorough final cleaning, with all work areas swept, wiped down, and ready for use. For properties being listed for sale, we can provide recommendations on staging and curb appeal improvements. For rental properties, we ensure all appliances are operational, fixtures are functional, and the unit meets all local housing code requirements. This comprehensive approach means you have a single point of contact for the entire property transformation, from initial cleanout through final walkthrough.
              </p>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Perfect Solutions for Every Property Need
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Home className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Investors</h3>
                <p className="text-gray-700">
                  Maximize ROI on flip properties with our combined cleanout and renovation services. We handle everything from initial clearing through final finishes, helping you get properties market-ready faster.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Property Managers</h3>
                <p className="text-gray-700">
                  Fast rental turnovers with one contractor handling cleanout, repairs, and make-ready work. We understand tight timelines and provide reliable service that minimizes vacancy periods.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Wrench className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Homeowners Selling</h3>
                <p className="text-gray-700">
                  Prepare your Buffalo-area home for sale with comprehensive cleanout, repairs, and updates that increase market value and appeal to buyers. We focus on high-impact improvements.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Estate Settlements</h3>
                <p className="text-gray-700">
                  Complete estate property preparation including cleanout and repairs needed for sale. We work sensitively with families during difficult transitions. See our <Link to="/estate-cleanouts" className="text-blue-600 hover:text-blue-800 font-semibold">estate cleanout services</Link>.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Hammer className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Properties</h3>
                <p className="text-gray-700">
                  Office cleanouts, retail space preparation, and commercial renovation services for Western New York businesses. We work efficiently to minimize business disruption.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility Upgrades</h3>
                <p className="text-gray-700">
                  Property modifications for aging homeowners or tenants with disabilities. Our integrated approach handles both the removal of barriers and installation of accessibility features.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Property Cleanout & Handyman Services Across Western New York
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Aaron Michael Services provides comprehensive property cleanout and handyman services throughout the Buffalo-Niagara region. Our local expertise means we understand Western New York construction standards, weather-related property issues, and local building codes.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/cities/buffalo/remodeling-contractor-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Property Services</h3>
              <p className="text-gray-600">Complete cleanout & handyman services</p>
            </Link>
            <Link to="/cities/amherst/remodeling-contractor-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Property Services</h3>
              <p className="text-gray-600">Professional renovation & cleanout</p>
            </Link>
            <Link to="/cities/tonawanda/remodeling-contractor-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Property Services</h3>
              <p className="text-gray-600">Handyman & cleanout specialists</p>
            </Link>
            <Link to="/cities/kenmore/remodeling-contractor-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Property Services</h3>
              <p className="text-gray-600">Full-service property solutions</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much can I save by using one contractor for cleanout and handyman services?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Property owners typically save 20-35% by using our integrated services compared to hiring separate contractors for cleanout and repairs. You save on coordination time, avoid duplicate mobilization fees, and benefit from volume pricing. Additionally, having one contractor eliminates scheduling conflicts and reduces the overall project timeline, which is especially valuable for rental properties where every day of vacancy costs money. Our streamlined approach means we can identify and address issues during cleanout that might otherwise require costly callback visits from separate contractors.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What types of properties do you handle?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We work with all property types throughout Buffalo, Amherst, Tonawanda, Kenmore, and Western New York: residential homes (single-family, multi-family, condos, apartments), commercial properties (offices, retail spaces, warehouses), investment properties (flips, rentals, foreclosures), and specialized properties (senior housing, accessible homes, estate properties). Our team has experience with everything from small apartments to large commercial buildings, and we scale our services to match project needs.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How quickly can you complete a cleanout and renovation project?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Timeline depends on property size and scope of work, but our integrated approach significantly accelerates projects compared to using multiple contractors. A typical rental property turnover (cleanout, minor repairs, painting, and flooring) takes 5-7 days. A moderate renovation with cleanout, kitchen and bathroom updates, and throughout painting takes 3-4 weeks. Large-scale renovations may take 6-8 weeks. We can often begin work within 24-48 hours of project approval, and we work with your timeline to meet deadlines for property sales, lease renewals, or other critical dates. For urgent situations, we can bring additional crew members to expedite completion.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Are you licensed and insured for all the services you provide?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, Aaron Michael Services is fully licensed and insured for all property cleanout, handyman, and renovation services we provide. We carry comprehensive general liability insurance, workers' compensation coverage, and appropriate contractor licenses for specialized work like plumbing and electrical. This protects both you and your property throughout the project. We're happy to provide certificates of insurance and license documentation upon request. As a reputable contractor serving Western New York for years, we maintain all required bonding and insurance to the highest standards.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Can you help with property code violations or failed inspections?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Absolutely. We frequently work with property owners who have received code violations or failed rental inspections in Buffalo, Amherst, Tonawanda, and other Western New York municipalities. We're familiar with local building codes and housing regulations, and we can quickly identify and remediate violations. Our comprehensive approach means we can address multiple issues simultaneously—from removing accumulated debris to installing required smoke detectors, fixing plumbing leaks, repairing electrical hazards, and addressing structural concerns. We provide documentation of all completed work for submission to code enforcement offices and can coordinate with inspectors for re-inspection scheduling.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you offer property management ongoing maintenance services?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, many property managers and landlords throughout Western New York rely on us for ongoing maintenance and turnover services. We can establish service agreements for regular maintenance, priority emergency response, and turnover work between tenants. This relationship approach means we become familiar with your properties and can respond quickly when issues arise. We maintain detailed records of all work performed, provide regular property condition reports, and offer preferred pricing for our ongoing service clients. Whether you manage a handful of rental units or a large portfolio, having a reliable, multi-service contractor on call protects your investment and keeps tenants satisfied. Learn more about property maintenance best practices from the <a href="https://www.nar.realtor/property-management" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">National Association of Realtors</a>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Signals */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Western New York's Most Trusted Property Services Contractor
              </h2>
              <p className="text-xl text-gray-300">
                Licensed, Insured, and Committed to Excellence
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-gray-300">Properties Transformed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5-Star</div>
                <div className="text-gray-300">Customer Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24hr</div>
                <div className="text-gray-300">Emergency Response</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Licensed</div>
                <div className="text-gray-300">Fully Insured</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Property?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Get a free consultation and comprehensive quote for cleanout and handyman services. One call, one contractor, complete solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:7165752626"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="h-6 w-6" />
                (716) 575-2626
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-700 transition-colors border-2 border-white"
              >
                Request Free Quote
              </Link>
            </div>
            <p className="text-gray-200">
              Serving Buffalo, Amherst, Tonawanda, Kenmore & All of Western New York
            </p>
          </div>
        </section>

        {/* Related Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Complete Property Solutions
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link to="/disability-modifications" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accessibility Modifications</h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional accessibility improvements for all property types.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800 text-sm">Learn More →</span>
            </Link>
            <Link to="/aging-in-place" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Aging-in-Place Design</h3>
              <p className="text-gray-600 text-sm mb-3">
                Help seniors stay safe and independent in their homes.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800 text-sm">Learn More →</span>
            </Link>
            <Link to="/kitchen-modifications" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kitchen Remodeling</h3>
              <p className="text-gray-600 text-sm mb-3">
                Complete kitchen renovations and accessibility updates.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800 text-sm">Learn More →</span>
            </Link>
            <Link to="/wheelchair-ramps" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ramp Installation</h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional wheelchair ramps for improved property access.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800 text-sm">Learn More →</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
