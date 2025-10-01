import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Trash2, Clock, Shield, Home, Truck } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './property-cleanouts-schema.json';

export default function PropertyCleanouts() {
  return (
    <>
      <SEOHelmet
        title="Property Cleanouts Buffalo NY | Complete Removal Services"
        description="Professional property cleanout services in Buffalo, Amherst, Tonawanda & Kenmore NY. Full estate, rental, foreclosure & commercial cleanouts. Fast, reliable removal. Call (716) 575-2626."
        keywords="property cleanouts Buffalo NY, estate cleanouts Western New York, rental property cleanout, foreclosure cleanout Buffalo, commercial cleanout services, debris removal Buffalo NY"
        canonicalUrl="https://aaronmichaelservices.com/services/property-cleanouts"
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
                Professional Property Cleanout Services in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Complete Property Clearing, Debris Removal & Cleanout Solutions
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
                  Free Estimate
                </Link>
              </div>
              <p className="mt-6 text-gray-100 text-lg">
                Same-Day Service Available | Licensed & Insured | Eco-Friendly Disposal
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              When you need a property completely cleared and ready for its next chapter, Aaron Michael Services delivers comprehensive property cleanout solutions throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>. Whether you're managing an estate settlement, preparing a foreclosure for resale, turning over a rental property, or clearing commercial space, our professional team handles every aspect of property cleanout with efficiency, respect, and environmental responsibility.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Property cleanouts involve much more than simply hauling away unwanted items. Our systematic approach ensures nothing is overlooked—from attic to basement, garage to yard. We carefully sort items for donation, recycling, and proper disposal, maximizing value recovery while minimizing environmental impact. With years of experience serving Western New York property owners, real estate professionals, and property managers, we understand the urgency and sensitivity that different cleanout situations require.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Unlike general junk removal services, we specialize in complete property cleanouts that prepare spaces for their next use. Our team works systematically through every room, removing all contents, debris, and unwanted materials. We handle appliance disconnection and removal, fixture takedown, outdoor debris clearing, and final cleaning to leave properties truly ready for renovation, listing, or new occupancy.
            </p>
          </div>
        </section>

        {/* Comprehensive Services */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Complete Property Cleanout Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Full Property Clearing</h3>
                <p className="text-blue-50 mb-4">
                  Complete removal of all contents from every room, including furniture, appliances, personal belongings, and accumulated items throughout the property.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Living spaces and bedrooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Kitchens and bathrooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Basements and attics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Garages and storage areas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Appliance Removal</h3>
                <p className="text-blue-50 mb-4">
                  Safe disconnection and removal of all appliances, including proper handling of refrigerants and hazardous materials according to EPA regulations.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Refrigerators and freezers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Washers and dryers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Stoves and ovens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Water heaters and HVAC units</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Debris & Waste Removal</h3>
                <p className="text-blue-50 mb-4">
                  Comprehensive removal of all debris, trash, and unwanted materials with proper sorting for donation, recycling, and responsible disposal.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Construction debris</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Yard waste and outdoor debris</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Accumulated household items</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Electronics and e-waste</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Estate Cleanouts</h3>
                <p className="text-blue-50 mb-4">
                  Sensitive, respectful clearing of estate properties with careful attention to identifying valuable items and family heirlooms during the process.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Careful item sorting and review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Coordination with family members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Donation arrangements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Complete property preparation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Rental Property Turnovers</h3>
                <p className="text-blue-50 mb-4">
                  Fast, thorough cleanouts between tenants to minimize vacancy periods and prepare rental units for new occupants or showings.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Abandoned property removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Quick turnaround service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Move-out debris clearing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Final cleaning preparation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Commercial Cleanouts</h3>
                <p className="text-blue-50 mb-4">
                  Efficient clearing of commercial spaces including offices, retail locations, warehouses, and industrial properties with minimal business disruption.
                </p>
                <ul className="space-y-2 text-blue-50 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Office furniture and equipment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Retail fixture removal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>After-hours scheduling available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Large-scale cleanouts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Systematic Property Cleanout Process
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                Initial Assessment & Planning
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                Every successful property cleanout begins with careful planning. When you contact Aaron Michael Services for cleanout services in <strong>Buffalo, Amherst, Tonawanda, Kenmore</strong>, or anywhere throughout Western New York, we schedule an on-site assessment to evaluate the full scope of work required.
              </p>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                During this initial walkthrough, our team examines every area of the property from attic to basement, including garages, sheds, and outdoor spaces. We document the volume and type of items to be removed, identify any items requiring special handling (hazardous materials, valuable items, sensitive documents), assess access considerations like narrow doorways or stairs, and evaluate disposal requirements for different material categories.
              </p>
              <p className="text-gray-700 leading-relaxed ml-13">
                This thorough assessment allows us to provide an accurate, detailed quote with no hidden surprises. We discuss your timeline, any specific concerns or priorities, and whether you need us to watch for particular items during the cleanout process. For estate cleanouts, we work sensitively with family members to understand which items should be set aside for review. For rental or foreclosure properties, we coordinate with property managers or real estate agents to ensure proper documentation.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                Systematic Room-by-Room Clearing
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                On cleanout day, our experienced crew arrives with all necessary equipment, including dollies, hand trucks, protective materials, and appropriate vehicles for efficient hauling. We work systematically through the property, typically starting from upper floors and working downward to avoid moving items multiple times.
              </p>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                Our team carefully removes all contents from each room, including furniture, appliances, personal items, decorations, and accumulated belongings. We take special care with appliances that require disconnection—refrigerators are properly defrosted, gas appliances are safely disconnected, and water lines are shut off and capped as needed. Throughout the process, we protect the property with floor runners, door jamb protection, and corner guards to prevent damage to walls, floors, and doorways.
              </p>
              <p className="text-gray-700 leading-relaxed ml-13">
                For properties with outdoor areas, we clear yards, patios, decks, sheds, and garages of debris, overgrown vegetation, old equipment, and stored items. Western New York weather can lead to accumulated yard waste and outdoor deterioration, so we address these areas comprehensively to improve property appearance and value.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                Sorting, Donation & Responsible Disposal
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                Environmental responsibility is central to our cleanout process. Rather than simply hauling everything to a landfill, we carefully sort materials into appropriate categories for donation, recycling, and disposal. This approach not only benefits the environment but often recovers value from items that others can use.
              </p>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                <strong>Donation items:</strong> Furniture, appliances, clothing, household goods, and other usable items in good condition are donated to local Buffalo-area charities, nonprofit organizations, and community groups. We have established relationships with multiple donation centers throughout Western New York and provide documentation of donated items for tax purposes when requested.
              </p>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                <strong>Recyclable materials:</strong> Metals, electronics, cardboard, paper, plastics, and other recyclable materials are separated and delivered to appropriate recycling facilities. E-waste like computers, televisions, and appliances with electronic components receive special handling to ensure hazardous components are processed correctly according to EPA regulations.
              </p>
              <p className="text-gray-700 leading-relaxed ml-13">
                <strong>Proper disposal:</strong> Items that cannot be donated or recycled are transported to appropriate disposal facilities. We handle hazardous materials like paint, chemicals, batteries, and fluorescent bulbs according to local and federal regulations, ensuring nothing harmful enters the waste stream improperly.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                Final Sweep & Property Handoff
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                After all items are removed, our team performs a final walkthrough of the entire property to ensure nothing has been overlooked. We sweep and remove any remaining debris, leaving the property completely clear and ready for its next phase—whether that's renovation, listing for sale, new tenant move-in, or demolition.
              </p>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                For properties being prepared for listing, this clean slate makes it easier for real estate photographers, staging professionals, or renovation contractors to begin their work immediately. For rental properties, the cleared space allows property managers to assess needed repairs and prepare for turnover work. For estate settlements, the completed cleanout provides families with closure and allows them to move forward with property disposition.
              </p>
              <p className="text-gray-700 leading-relaxed ml-13">
                We provide before and after photos documenting the transformation, along with detailed receipts showing what was donated, recycled, and disposed of. This documentation is particularly valuable for estate executors, insurance claims, or tax purposes. Our goal is to deliver a completely cleared property with full transparency about how materials were handled.
              </p>
            </div>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Property Cleanout Solutions for Every Situation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Home className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Real Estate Investors</h3>
                <p className="text-gray-700">
                  Fast property clearing for flip properties, foreclosures, and investment homes. We understand tight timelines and work efficiently to get properties ready for renovation or resale quickly.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Property Managers</h3>
                <p className="text-gray-700">
                  Rapid rental turnovers and tenant cleanouts to minimize vacancy periods. We handle abandoned property, post-eviction clearing, and between-tenant preparation throughout Western New York.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Estate Executors</h3>
                <p className="text-gray-700">
                  Sensitive, respectful estate cleanouts with careful attention to valuable items and family belongings. We work with compassion during difficult times. See our <Link to="/estate-cleanouts" className="text-blue-600 hover:text-blue-800 font-semibold">estate cleanout services</Link>.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Truck className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Homeowners Downsizing</h3>
                <p className="text-gray-700">
                  Complete property clearing for seniors downsizing, families relocating, or anyone preparing a home for sale. We handle donations and ensure usable items find new homes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Trash2 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Commercial Property Owners</h3>
                <p className="text-gray-700">
                  Office, retail, and warehouse cleanouts with flexible scheduling to minimize business disruption. We handle everything from furniture removal to complete space clearing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <CheckCircle className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Foreclosure Properties</h3>
                <p className="text-gray-700">
                  Bank-owned and foreclosed property cleanouts preparing homes for auction or resale. We clear abandoned items, debris, and prepare properties to show their best potential.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Property Cleanout Services Across Western New York
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Aaron Michael Services provides professional property cleanout services throughout the Buffalo-Niagara region. Our local expertise means we understand Western New York properties, weather-related accumulation issues, and regional disposal regulations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/cities/buffalo/remodeling-contractor-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Cleanouts</h3>
              <p className="text-gray-600">Complete property clearing services</p>
            </Link>
            <Link to="/cities/amherst/remodeling-contractor-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Cleanouts</h3>
              <p className="text-gray-600">Professional removal specialists</p>
            </Link>
            <Link to="/cities/tonawanda/remodeling-contractor-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Cleanouts</h3>
              <p className="text-gray-600">Fast property clearing service</p>
            </Link>
            <Link to="/cities/kenmore/remodeling-contractor-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Cleanouts</h3>
              <p className="text-gray-600">Comprehensive removal solutions</p>
            </Link>
          </div>
          <p className="text-gray-700 leading-relaxed">
            We also serve Cheektowaga, West Seneca, Lancaster, Depew, Williamsville, Hamburg, Orchard Park, East Amherst, Clarence, and all surrounding Western New York communities with the same professional, reliable property cleanout services.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Buffalo Chooses Aaron Michael Services for Property Cleanouts
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Experience You Can Trust</h3>
                <p className="text-gray-300 mb-6">
                  With years of experience handling property cleanouts throughout Western New York, we've cleared everything from small apartments to large estate homes and commercial properties. Our team knows how to work efficiently while treating every property with respect and care.
                </p>
                <h3 className="text-xl font-bold mb-4">Transparent, Honest Pricing</h3>
                <p className="text-gray-300">
                  We provide detailed, itemized quotes with no hidden fees or surprise charges. Our pricing is based on volume, complexity, and disposal requirements, and we clearly explain all costs upfront so you know exactly what to expect.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Environmentally Responsible</h3>
                <p className="text-gray-300 mb-6">
                  We're committed to minimizing landfill waste through extensive donation and recycling efforts. Our partnerships with local Buffalo charities and recycling facilities ensure items find appropriate second lives whenever possible.
                </p>
                <h3 className="text-xl font-bold mb-4">Licensed & Fully Insured</h3>
                <p className="text-gray-300">
                  Complete insurance coverage protects your property throughout the cleanout process. We carry comprehensive liability insurance and workers' compensation, providing you complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Property Cleanout Questions Answered
            </h2>
            <div className="space-y-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How much does a property cleanout cost in Buffalo NY?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Property cleanout costs vary based on property size, volume of items, access difficulty, and disposal requirements. A typical single-family home cleanout in Buffalo, Amherst, or Tonawanda ranges from $1,500 to $5,000. Small apartments or condos might cost $800-$2,000, while larger estates or properties with extensive accumulation can exceed $7,000. Commercial cleanouts are priced based on square footage and material volume. We provide free on-site estimates with detailed, itemized pricing so you understand all costs before work begins. Factors affecting price include amount of furniture and appliances, presence of hazardous materials, accessibility challenges like stairs or narrow doors, disposal and recycling fees, and timeline urgency. We work within your budget and can often phase work to spread costs if needed.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How quickly can you complete a property cleanout?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Most residential property cleanouts in Western New York are completed in 1-3 days depending on size and volume. Small apartments or condos often take just 4-8 hours. Average single-family homes typically require 1-2 full days. Large estates or properties with extensive accumulation may need 3-5 days. We can often begin work within 24-48 hours of your call for urgent situations like rental turnovers, estate settlements with closing deadlines, or foreclosure clearing. For same-day service requests, call us early in the morning and we'll do everything possible to accommodate your timeline. We understand that vacant properties cost money, so we work efficiently without sacrificing thoroughness or quality.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  What items can you remove during a property cleanout?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We remove virtually everything from properties: furniture, appliances, electronics, clothing, personal belongings, yard debris, construction materials, and general household items. We handle refrigerators, freezers, washers, dryers, stoves, dishwashers, and water heaters with proper disconnection. Large items like pianos, hot tubs, pool tables, and exercise equipment are removed carefully. We also clear basements, attics, garages, sheds, and outdoor spaces. Items we cannot remove include hazardous chemicals in large quantities (though we handle typical household amounts), asbestos materials, underground fuel tanks, and items requiring specialized environmental remediation. For these specialized items, we can recommend qualified contractors. Everything else is fair game for our cleanout services.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you donate or recycle items, or does everything go to the landfill?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Environmental responsibility is a cornerstone of our service. We make every effort to divert items from landfills through donation and recycling. Usable furniture, appliances, clothing, and household goods are donated to Buffalo-area charities including Goodwill, Habitat for Humanity ReStore, Vietnam Veterans of America, and local churches and community organizations. Metals, electronics, cardboard, and other recyclables go to appropriate recycling facilities. We provide donation receipts for tax purposes when requested. Only items that are truly unusable—damaged beyond repair, unsanitary, or prohibited by donation centers—are sent to disposal facilities. This approach benefits the community, reduces environmental impact, and often lowers your costs since disposal fees are minimized.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Will you search for valuable items or important documents during the cleanout?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Yes, we can absolutely watch for specific items during the cleanout process. This service is especially important for estate cleanouts where family heirlooms, jewelry, collectibles, or important documents might be hidden among general belongings. Before we begin, we discuss what you'd like us to watch for—valuables, family photos, legal documents, financial records, or specific personal items. Our team examines drawers, checks pockets, looks through boxes, and carefully sorts rather than simply discarding. Items of potential value or importance are set aside for your review. While we cannot guarantee finding every small item in a house full of belongings, our careful, methodical approach dramatically increases the chances of recovering important items before they're lost forever. For estate cleanouts, this service provides tremendous peace of mind to families.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do I need to be present during the property cleanout?
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  You don't need to be present throughout the entire cleanout, though many clients prefer to be there at the start to point out any special instructions or areas of concern. After initial walkthroughs, most property owners, investors, or executors leave us to work independently. We're fully insured and trustworthy—we've built our Buffalo reputation on reliability and professionalism. For estate cleanouts where items need to be reviewed, we can set aside potential valuables for your inspection at convenient times. We provide progress photos and communicate regularly throughout multi-day projects. At completion, we do a final walkthrough with you (or your representative) to ensure you're completely satisfied before we leave. Flexible scheduling and communication ensure the process works around your availability while still moving forward efficiently.
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
                Western New York's Most Trusted Property Cleanout Service
              </h2>
              <p className="text-xl text-gray-300">
                Professional, Reliable, and Environmentally Responsible
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">1500+</div>
                <div className="text-gray-300">Properties Cleared</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5-Star</div>
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

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            The Aaron Michael Services Difference
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast, Efficient Service</h3>
              <p className="text-gray-700">
                We understand time is money, especially with vacant properties. Our experienced crews work quickly and systematically to minimize property vacancy time and get you to the next phase faster.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Protected Service</h3>
              <p className="text-gray-700">
                Comprehensive insurance coverage protects your property throughout the cleanout. We use floor protection, door guards, and careful handling techniques to prevent any damage during removal.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Complete Documentation</h3>
              <p className="text-gray-700">
                We provide before/after photos, itemized disposal records, and donation receipts for tax purposes. This documentation is invaluable for estate settlements, insurance claims, and property records.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-gray-700 to-gray-900 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Clear Your Property?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Get a free on-site estimate for complete property cleanout services. Fast, professional, and environmentally responsible.
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
                Request Free Estimate
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
            Related Property Services
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <Link to="/estate-cleanouts" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Estate Cleanouts</h3>
              <p className="text-gray-600 text-sm mb-3">
                Sensitive estate property clearing and settlement services.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800 text-sm">Learn More →</span>
            </Link>
            <Link to="/disability-modifications" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Accessibility Remodeling</h3>
              <p className="text-gray-600 text-sm mb-3">
                Professional accessibility modifications for all properties.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800 text-sm">Learn More →</span>
            </Link>
            <Link to="/accessible-bathrooms" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Bathroom Remodeling</h3>
              <p className="text-gray-600 text-sm mb-3">
                Complete bathroom renovations and accessibility upgrades.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800 text-sm">Learn More →</span>
            </Link>
            <Link to="/kitchen-modifications" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Kitchen Remodeling</h3>
              <p className="text-gray-600 text-sm mb-3">
                Full kitchen renovations and accessibility modifications.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800 text-sm">Learn More →</span>
            </Link>
          </div>
        </section>

        {/* Final Content Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Professional Property Cleanouts Throughout Buffalo & Western New York
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you're managing an estate settlement, preparing an investment property for renovation, turning over a rental unit, or clearing a foreclosure, Aaron Michael Services provides the professional property cleanout expertise Western New York property owners depend on. Our systematic approach, environmental responsibility, and commitment to customer satisfaction have made us the region's trusted choice for complete property clearing services.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Buffalo's real estate market moves quickly, and vacant properties represent ongoing costs in taxes, utilities, insurance, and maintenance. Our efficient cleanout process gets properties ready for their next phase faster, whether that means listing for sale, beginning renovations, or welcoming new tenants. We work around your schedule, communicate throughout the process, and deliver properties that are truly move-in ready or renovation-ready.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              From <strong>Amherst to Tonawanda, Buffalo to Kenmore</strong>, and throughout all of Western New York, property owners trust Aaron Michael Services for property cleanouts that are thorough, professional, and competitively priced. Our local knowledge, established donation partnerships, and understanding of regional property types ensure you receive service that's tailored to Western New York's unique needs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Contact us today at <a href="tel:7165752626" className="text-blue-600 hover:text-blue-800 font-bold">(716) 575-2626</a> for a free on-site assessment and detailed quote. We'll walk through your property, discuss your timeline and goals, and provide transparent pricing with no hidden fees. Let us show you why Western New York property owners, real estate investors, and property managers choose Aaron Michael Services for professional cleanout services that exceed expectations.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
