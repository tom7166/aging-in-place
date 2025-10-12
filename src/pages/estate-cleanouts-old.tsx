import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, CircleCheck as CheckCircle, Trash2, Clock, Shield, Chrome as Home, Truck, Heart } from 'lucide-react';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './estate-cleanouts-schema.json';

export default function EstateCleanouts() {
  return (
    <>
      <SEOHelmet
        title="Estate Cleanouts Buffalo NY | Compassionate Property Clearing"
        description="Professional estate cleanout services in Buffalo, Amherst, Tonawanda & Kenmore NY. Compassionate, thorough property clearing for estates, downsizing & transitions. Call (716) 533-7108."
        keywords="estate cleanouts Buffalo NY, estate sale cleanup Western New York, downsizing services Buffalo, compassionate estate clearing, property clearing after death, estate liquidation Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/services/estate-cleanouts"
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
                Compassionate Estate Cleanout Services in Buffalo & Western New York
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Professional Estate Clearing, Downsizing & Property Transition Services
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:7165337108"
                  className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
                >
                  <Phone className="h-6 w-6" />
                  Call (716) 533-7108
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors border-2 border-white"
                >
                  Free Consultation
                </Link>
              </div>
              <p className="mt-6 text-gray-100 text-lg">
                Compassionate Service | Licensed & Insured | Donation Coordination
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              At <strong>Aaron Michael Services</strong>, we understand that handling an estate cleanout is often an emotional and overwhelming process. Whether you're managing the estate of a loved one, downsizing for a family member, or preparing a property for sale, our compassionate team provides professional estate cleanout services throughout <strong>Buffalo, Amherst, Tonawanda, Kenmore, and all of Western New York</strong>.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Estate cleanouts require sensitivity, organization, and expertise. Our team carefully sorts through belongings, identifying items of value, coordinating donations to local charities, and responsibly disposing of unwanted materials. We work closely with families, executors, attorneys, and estate sale companies to ensure every aspect of the cleanout is handled with care and respect. From small condos in Kenmore to large family estates in Amherst, we provide comprehensive estate cleanout solutions tailored to your specific needs.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Aaron Michael Services for Estate Cleanouts
            </h2>
            <div className="space-y-6 prose prose-lg text-gray-700">
              <p>
                <strong>Compassionate Approach:</strong> We understand the emotional nature of estate cleanouts. Our team treats every property and its contents with the utmost respect, providing support and understanding during a difficult time.
              </p>
              <p>
                <strong>Local Expertise:</strong> Our team knows Western New York homes and families. We work with local estate attorneys, appraisers, and donation centers, ensuring a smooth and coordinated process.
              </p>
              <p>
                <strong>Licensed & Insured:</strong> Safety and security are our top priorities. We are fully licensed and insured, providing peace of mind for families and executors throughout the estate settlement process.
              </p>
              <p>
                <strong>Donation Coordination:</strong> We partner with Buffalo-area charities to ensure usable items benefit the community. We provide donation receipts for tax purposes and help extend your loved one's legacy through charitable giving.
              </p>
              <p>
                <strong>Thorough & Organized:</strong> From attic to basement, we systematically clear every space while carefully identifying valuable items, important documents, and sentimental belongings for family review.
              </p>
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Comprehensive Estate Cleanout Services
          </h2>

          {/* Complete Estate Clearing */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Estate Clearing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our full estate cleanout service handles every aspect of clearing a property after the loss of a loved one. From sorting personal belongings to coordinating with estate sale companies, we manage the entire process with compassion and professionalism. We understand the emotional weight of this work and provide support throughout every step.
            </p>
          </div>

          {/* Downsizing Assistance */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Downsizing & Senior Transitions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Helping seniors transition to smaller homes or assisted living facilities requires patience and care. Our downsizing services help families sort through decades of memories, identifying items to keep, donate, or dispose of. We coordinate donations to local Buffalo charities and ensure the process is as stress-free as possible for everyone involved.
            </p>
          </div>

          {/* Estate Sale Support */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Post-Estate Sale Cleanup</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              After an estate sale, properties often still contain unwanted items, furniture, and debris. Our post-sale cleanup service completes the process by removing everything that wasn't sold, leaving the property clean and ready for the next chapter. We work with estate sale companies and auctioneers throughout Western New York.
            </p>
          </div>

          {/* Donation Coordination */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Donation Coordination</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We partner with local Buffalo-area charities, thrift stores, and donation centers to ensure usable items find new homes. From furniture and clothing to household goods and antiques, we carefully sort items suitable for donation and provide tax-deductible receipts. Your loved one's belongings can continue to benefit the community.
            </p>
          </div>

          {/* Sensitive Item Handling */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Sensitive Item Identification</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our experienced team knows how to identify valuable items, important documents, photographs, and sentimental belongings. We set aside anything that may have personal or financial value, allowing families to review these items before final decisions are made. Nothing important is discarded without your approval.
            </p>
          </div>

          {/* Property Preparation */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Preparation for Sale</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once an estate is cleared, we can prepare the property for listing. This includes final cleaning, minor repairs, and ensuring the home is presented in the best possible condition. We work with real estate agents throughout Western New York to facilitate quick, successful sales.
            </p>
          </div>
        </section>

        {/* Service Areas Expanded */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Serving Western New York Communities
            </h2>
            <div className="space-y-6 prose prose-lg text-gray-700">

              <p>
                <strong>Buffalo, NY:</strong> From historic homes in Elmwood Village to waterfront properties, our Buffalo estate cleanout services address the unique needs of older homes and diverse neighborhoods. We understand local property layouts and work with Buffalo-area estate professionals.
              </p>

              <p>
                <strong>Amherst, NY:</strong> In Amherst, we handle estate cleanouts for properties of all sizes, from apartments to large family estates. Our team provides careful, respectful handling of belongings while coordinating with local donation centers and estate sale companies.
              </p>

              <p>
                <strong>Tonawanda & North Tonawanda, NY:</strong> Our local knowledge and connections allow us to provide seamless estate cleanout services in the Tonawandas. We work efficiently while maintaining the compassion and respect that every estate deserves.
              </p>

              <p>
                <strong>Kenmore, NY:</strong> Kenmore families trust our professional estate cleanout services for thorough, compassionate property clearing. We handle everything from small apartments to large family homes with care and attention to detail.
              </p>

            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-8 prose prose-lg text-gray-700">

            <div>
              <h3 className="text-xl font-bold">How much does an estate cleanout cost?</h3>
              <p>Estate cleanout costs vary based on property size, volume of contents, and services required. For a typical 3-bedroom home in Buffalo or Western New York, most estate cleanouts range from $1,500 to $5,000. We provide free consultations and written quotes.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">How long does an estate cleanout take?</h3>
              <p>Most residential estate cleanouts are completed within 1-5 days, depending on property size and contents. A small apartment might take just one day, while a large family home could take 3-5 days.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Do I need to be present during the cleanout?</h3>
              <p>You don't need to be present for the entire process, but we recommend being available for the initial walkthrough to identify items of value or importance. We can photograph items for your review and approval.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">What happens to donated items?</h3>
              <p>We partner with local Buffalo-area charities, thrift stores, and donation centers. We provide donation receipts for tax purposes and ensure usable items benefit the community rather than ending up in landfills.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Can you handle valuable or sentimental items?</h3>
              <p>Absolutely. Our team carefully identifies valuable items, important documents, photographs, and sentimental belongings. We set these aside for family review before any final disposal decisions are made.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Do you work with estate attorneys and executors?</h3>
              <p>Yes, we regularly work with estate attorneys, executors, and estate sale companies throughout Western New York. We understand the legal and procedural requirements involved in estate settlements.</p>
            </div>

            <div>
              <h3 className="text-xl font-bold">What makes your service different?</h3>
              <p>We combine compassionate service with professional expertise. Our team understands this is a difficult time and treats every property and family with respect, care, and understanding while providing thorough, efficient estate clearing services.</p>
            </div>

          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Need Compassionate Estate Cleanout Services?</h2>
            <p className="text-lg mb-8">Call (716) 533-7108 today or request a free consultation. We're here to help during this difficult time with professional, respectful estate clearing services across Western New York.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:7165337108"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors"
              >
                <Phone className="h-6 w-6" />
                Call (716) 533-7108
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 transition-colors border-2 border-white"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
