import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Trash2, Clock, Shield, Chrome as Home } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './estate-cleanouts-schema.json';

export default function EstateCleanouts() {
  return (
    <>
      <SEOHelmet
        title="Estate Cleanouts Buffalo NY | Professional Cleanout Services | Aaron Michael Services"
        description="Professional estate cleanout services in Buffalo, Amherst, Tonawanda & Kenmore NY. Licensed, insured, compassionate service. Same-day consultations available. Call (716) 575-2626."
        keywords="estate cleanouts Buffalo NY, property cleanout services, estate sale cleanup, house cleanout Western New York, Amherst estate cleanouts, Tonawanda cleanout services"
        canonicalUrl="https://aaronmichaelservices.com/services/estate-cleanouts"
      />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Estate Cleanout Services in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Compassionate, Efficient, and Respectful Property Clearing Solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:7165752626"
                  className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  Call (716) 575-2626
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-blue-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-900 transition-colors border-2 border-white"
                >
                  Free Consultation
                </Link>
              </div>
              <p className="mt-6 text-blue-100 text-lg">
                Same-Day Consultations Available | Licensed & Insured | Family-Owned
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Dealing with an estate cleanout can be one of the most emotionally challenging and physically demanding tasks a family faces. Whether you're managing the belongings of a loved one who has passed away, downsizing for a senior family member moving to assisted living, or clearing out an inherited property, Aaron Michael Services provides compassionate, professional estate cleanout services throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As Buffalo's #1 ADA & Accessibility Contractor, we understand that estate cleanouts often intersect with accessibility needs. Many of our clients are transitioning from family homes that require modifications, or they're preparing properties for elderly family members. Our comprehensive approach means we can handle not just the cleanout, but also any necessary <Link to="/aging-in-place" className="text-blue-600 hover:text-blue-800 font-semibold">aging-in-place modifications</Link> or <Link to="/disability-modifications" className=\"text-blue-600 hover:text-blue-800 font-semibold">accessibility improvements</Link> the property may need.
            </p>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Aaron Michael Services for Estate Cleanouts?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Licensed & Insured</h3>
                <p className="text-gray-700">
                  Fully licensed and insured for your protection. We carry comprehensive liability coverage and workers' compensation insurance, giving you peace of mind during the entire cleanout process.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Home className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Family-Owned & Local</h3>
                <p className="text-gray-700">
                  As a family-owned business serving Western New York for years, we treat every estate with the same care and respect we'd want for our own family's belongings. Our 5-star reputation speaks to our commitment.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fast & Flexible Service</h3>
                <p className="text-gray-700">
                  We understand that estate situations often come with tight timelines. We offer same-day consultations and can often begin work within 24-48 hours of your initial call.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Service Description */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our Complete Estate Cleanout Process
          </h2>

          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                Initial Consultation & Assessment
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13">
                Our process begins with a thorough, no-obligation consultation. We'll visit the property in <strong>Buffalo, Amherst, Tonawanda, Kenmore</strong>, or anywhere in Western New York to assess the scope of work. During this visit, we'll walk through every room, basement, attic, garage, and outbuilding to understand exactly what needs to be removed, sorted, or preserved. We'll discuss your timeline, any items of sentimental or monetary value you want to keep, and your preferences for donation or recycling. This consultation allows us to provide you with an accurate, transparent quote with no hidden fees.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                Sorting & Organization
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13 mb-4">
                Before we remove anything, we carefully sort through all items. This is one of the most critical phases of estate cleanout, and it's where our compassionate approach truly shines. We create clear categories:
              </p>
              <ul className="list-disc list-inside ml-13 space-y-2 text-gray-700">
                <li><strong>Items to Keep:</strong> Personal belongings, heirlooms, documents, photos, and anything the family wishes to retain</li>
                <li><strong>Items for Donation:</strong> Gently used furniture, clothing, household goods, and other items suitable for local charities</li>
                <li><strong>Items for Recycling:</strong> Electronics, metals, paper products, and other recyclable materials</li>
                <li><strong>Items for Disposal:</strong> Damaged goods, expired products, and items that cannot be donated or recycled</li>
                <li><strong>Items of Potential Value:</strong> Antiques, collectibles, or items that might be sold through estate sales</li>
              </ul>
              <p className="text-gray-700 leading-relaxed ml-13 mt-4">
                We work with you to ensure that nothing of value or sentimental importance is accidentally discarded. If you're unable to be present during the entire process, we can photograph items and send them to you for approval before disposal.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                Responsible Removal & Hauling
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13">
                Once everything is sorted and approved, our experienced crew begins the physical removal process. We handle all heavy lifting, furniture disassembly, and hauling. Our team is trained to work efficiently while protecting the property from damage—we use floor runners, door protectors, and proper lifting techniques to ensure walls, floors, and doorways remain unscathed. This is especially important if the property will be listed for sale or if you're planning renovations afterward. Speaking of renovations, many of our estate cleanout clients also need <Link to="/kitchen-modifications" className="text-blue-600 hover:text-blue-800 font-semibold">kitchen modifications</Link> or <Link to="/accessible-bathrooms" className="text-blue-600 hover:text-blue-800 font-semibold">accessible bathroom remodeling</Link> to prepare the home for its next chapter.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">4</span>
                Donation & Recycling Coordination
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13">
                We partner with local Buffalo-area charities, donation centers, and recycling facilities to ensure that as much as possible is diverted from landfills. We have established relationships with organizations that accept furniture, clothing, household goods, and building materials. We'll handle all the logistics of drop-off or pickup, and we can provide you with donation receipts for tax purposes. Our commitment to environmental responsibility means we recycle electronics through certified e-waste facilities and dispose of hazardous materials according to New York State regulations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">5</span>
                Final Cleaning & Property Preparation
              </h3>
              <p className="text-gray-700 leading-relaxed ml-13">
                After everything is removed, we don't just leave you with an empty space. We provide a thorough sweep and basic cleaning of all cleared areas. This includes sweeping floors, wiping down surfaces, removing cobwebs, and ensuring the property is presentable. If you're preparing the home for sale or rent, we can also discuss additional services like minor repairs, painting, or accessibility modifications. Many clients who are selling inherited properties need <Link to="/door-widening" className="text-blue-600 hover:text-blue-800 font-semibold">door widening</Link> or <Link to="/wheelchair-ramps" className=\"text-blue-600 hover:text-blue-800 font-semibold">wheelchair ramp installation</Link> to improve marketability and meet potential buyers' needs.
              </p>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-blue-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What's Included in Our Estate Cleanout Service
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Complete property assessment and consultation',
                'Sorting and organization of all items',
                'Heavy lifting and furniture removal',
                'Appliance disconnection and removal',
                'Basement, attic, and garage cleanouts',
                'Yard debris and outdoor item removal',
                'Donation coordination with local charities',
                'Electronics recycling and e-waste disposal',
                'Proper disposal of hazardous materials',
                'Document shredding services (optional)',
                'Final sweep and basic cleaning',
                'Same-day emergency service available',
                'Flexible scheduling including weekends',
                'Detailed itemization and documentation',
                'Before and after photos (upon request)',
                'Full liability insurance coverage'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Estate Cleanout Services Throughout Western New York
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Aaron Michael Services proudly serves all of Western New York with professional estate cleanout services. We're locally based and familiar with the unique characteristics of homes throughout the region, from historic Buffalo properties to suburban Amherst residences, Tonawanda ranch homes, and Kenmore bungalows.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Link to="/cities/buffalo/accessible-remodeling-buffalo-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Buffalo Estate Cleanouts</h3>
              <p className="text-gray-600">Serving all Buffalo neighborhoods</p>
            </Link>
            <Link to="/cities/amherst/accessible-remodeling-amherst-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Amherst Estate Cleanouts</h3>
              <p className="text-gray-600">Complete cleanout services</p>
            </Link>
            <Link to="/cities/tonawanda/accessible-remodeling-tonawanda-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tonawanda Estate Cleanouts</h3>
              <p className="text-gray-600">Professional property clearing</p>
            </Link>
            <Link to="/cities/kenmore/accessible-remodeling-kenmore-ny" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-transparent hover:border-blue-600">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kenmore Estate Cleanouts</h3>
              <p className="text-gray-600">Compassionate cleanout services</p>
            </Link>
          </div>
        </section>

        {/* Special Situations */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Special Situations We Handle
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hoarding Situations</h3>
                <p className="text-gray-700 leading-relaxed">
                  We approach hoarding situations with sensitivity, discretion, and non-judgmental professionalism. Our team is trained to work with individuals and families dealing with hoarding disorder, and we coordinate with mental health professionals when appropriate. We work at a pace that's comfortable for the individual while ensuring safety and progress.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Foreclosure & Bank-Owned Properties</h3>
                <p className="text-gray-700 leading-relaxed">
                  We work with banks, real estate agents, and property management companies to clear foreclosed properties quickly and thoroughly. We understand the need for fast turnaround times and can coordinate with lock changes, utility shutoffs, and property securing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Senior Downsizing</h3>
                <p className="text-gray-700 leading-relaxed">
                  When elderly family members transition from a long-time home to assisted living or smaller accommodations, we provide patient, compassionate assistance. We help identify what can move to the new space and properly handle the remaining items, often coordinating with <Link to="/aging-in-place" className="text-blue-600 hover:text-blue-800 font-semibold">aging-in-place specialists</Link> for the new residence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Urgent Estate Settlements</h3>
                <p className="text-gray-700 leading-relaxed">
                  When probate timelines, property sales, or other legal matters require quick action, we can mobilize rapidly. Our team can often begin work within 24 hours and complete most residential estate cleanouts within 3-5 days, depending on property size and contents.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions About Estate Cleanouts
          </h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does an estate cleanout cost in Buffalo and Western New York?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Estate cleanout costs vary significantly based on property size, volume of contents, accessibility, and the specific services required. For a typical 3-bedroom home in Buffalo, Amherst, Tonawanda, or Kenmore, most estate cleanouts range from $1,500 to $5,000. Larger properties, hoarding situations, or properties with extensive basements and attics may cost more. We provide free, no-obligation consultations and written quotes before any work begins. Our pricing is transparent with no hidden fees, and we'll work with you to find solutions that fit your budget. Many clients find that the time, labor, and stress saved far outweigh the investment, especially considering the physical demands and emotional difficulty of doing it themselves.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does a typical estate cleanout take?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Most residential estate cleanouts in Western New York are completed within 1-5 days, depending on property size and volume of contents. A small apartment or condo might take just one day, while a large family home with a full basement, attic, and garage could take 3-5 days. We work efficiently without sacrificing thoroughness or care. For urgent situations—such as quick property sales or foreclosure timelines—we can bring additional crew members to expedite the process. During your initial consultation, we'll provide a realistic timeline based on your specific property and circumstances.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What happens to items that are donated or recycled?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We partner with numerous local Buffalo-area charities, thrift stores, and donation centers to ensure usable items find new homes rather than ending up in landfills. Furniture, clothing, household goods, and other items in good condition are donated to organizations that serve Western New York families in need. We provide donation receipts for tax deduction purposes when requested. Electronics are recycled through certified e-waste facilities that comply with New York State regulations. Metals, paper, cardboard, and other recyclable materials are sorted and taken to appropriate recycling centers. Our goal is to divert as much as possible from landfills while supporting our local community. You can learn more about responsible disposal practices from the <a href="https://www.epa.gov/recycle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold">EPA's recycling guidelines</a>.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can you handle hazardous materials or special disposal items?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Yes, we're equipped and licensed to handle most hazardous materials according to New York State regulations. This includes paint, chemicals, cleaning supplies, batteries, fluorescent bulbs, and similar items. We coordinate with proper disposal facilities to ensure environmental compliance and safety. For certain highly regulated materials (such as asbestos or large quantities of chemicals), we work with specialized contractors to ensure proper handling and disposal. During your consultation, we'll identify any special disposal items and explain our process for handling them safely and legally.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need to be present during the entire cleanout process?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                No, you don't need to be present for the entire process. Many of our clients live out of state or have other obligations that prevent them from being on-site. We can work with you to establish clear guidelines during the consultation, and we'll photograph items or categories of items for your approval before disposal. We're also happy to coordinate with real estate agents, attorneys, or other representatives. However, we do recommend being present for the initial walkthrough and sorting phase to help identify items of value or sentimental importance. For clients dealing with the emotional difficulty of estate cleanouts, having trusted professionals handle the physical work can provide significant relief.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if I find valuable items or need an estate sale?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                We're experienced at identifying items of potential value, including antiques, collectibles, jewelry, and other valuables. If we encounter items that appear valuable, we'll alert you immediately. We can work in conjunction with estate sale companies, appraisers, and auction houses to help you maximize the value of items before cleanout. Some clients choose to hold an estate sale first and then have us clean out remaining items. Others prefer that we identify valuable items, set them aside, and proceed with the cleanout while you arrange for separate sale or appraisal. We're flexible and will work with your preferred approach to ensure nothing of value is overlooked.
              </p>
            </div>
          </div>
        </section>

        {/* Trust & Authority Section */}
        <section className="bg-blue-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Buffalo's Most Trusted Estate Cleanout Service
              </h2>
              <p className="text-xl text-blue-100">
                Licensed, Insured, and Backed by Hundreds of 5-Star Reviews
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Estate Cleanouts Completed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5-Star</div>
                <div className="text-blue-100">Customer Rating</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24-48hr</div>
                <div className="text-blue-100">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Schedule Your Estate Cleanout?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Get a free consultation and transparent quote today. We're here to make this difficult process easier for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:7165752626"
                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-6 w-6" />
                (716) 575-2626
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition-colors border-2 border-white"
              >
                Request Free Quote
              </Link>
            </div>
            <p className="text-blue-100">
              Serving Buffalo, Amherst, Tonawanda, Kenmore & All of Western New York
            </p>
          </div>
        </section>

        {/* Additional Services Cross-Sell */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Related Services You May Need
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Many estate cleanout projects lead to home modifications and accessibility improvements. As Buffalo's #1 ADA & Accessibility Contractor, we can handle all your renovation needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/aging-in-place" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Aging-in-Place Modifications</h3>
              <p className="text-gray-600 mb-4">
                Help elderly family members stay safe and independent in their homes with professional accessibility modifications.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</span>
            </Link>
            <Link to="/accessible-bathrooms" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Accessible Bathroom Remodeling</h3>
              <p className="text-gray-600 mb-4">
                Transform bathrooms with walk-in tubs, roll-in showers, and grab bars for safety and accessibility.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</span>
            </Link>
            <Link to="/wheelchair-ramps" className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wheelchair Ramp Installation</h3>
              <p className="text-gray-600 mb-4">
                Professional ramp installation for improved home access and mobility independence.
              </p>
              <span className="text-blue-600 font-semibold hover:text-blue-800">Learn More →</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
