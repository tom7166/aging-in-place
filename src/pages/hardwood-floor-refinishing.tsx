import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Chrome as Home, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';
import schemaData from './hardwood-floor-refinishing-schema.json';

const HardwoodFloorRefinishing: React.FC = () => {
  useEffect(() => {
    document.title = "Hardwood Floor Refinishing Buffalo NY | Bella Floor Refinishing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Bella Floor Refinishing in Buffalo, NY provides expert hardwood floor refinishing, repair, and installation services. Free estimates. Serving Kenmore, Tonawanda, North Tonawanda, Cheektowaga."
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
        title="Hardwood Floor Refinishing Buffalo NY | Bella Floor Refinishing"
        description="Bella Floor Refinishing in Buffalo, NY provides expert hardwood floor refinishing, repair, and installation services. Free estimates. Serving Kenmore, Tonawanda, North Tonawanda, Cheektowaga."
        keywords="hardwood floor refinishing Buffalo NY, floor sanding Buffalo, hardwood floor repair Buffalo, Bella Floor Refinishing, hardwood floor installation Buffalo, screen and recoat floors Buffalo, hardwood floor water damage repair Buffalo"
        canonicalUrl="https://aaronmichaelservices.com/services/hardwood-flooring-buffalo-ny"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-800 to-yellow-600 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="mb-6 text-yellow-200 text-sm flex items-center justify-center space-x-2">
            <Home className="w-4 h-4" />
            <Link to="/" className="hover:text-white">Home</Link>
            <ArrowRight className="w-3 h-3" />
            <span>Hardwood Floor Refinishing</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bella Floor Refinishing: Buffalo, NY’s Premier Hardwood Floor Experts
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            Transform Your Home with Expert Refinishing, Repair, and Installation Services
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6">
            Serving Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga, and surrounding Western New York. Call <strong>716-533-7108</strong> today for a free, no-obligation estimate!
          </p>
          <div>
            <a href="tel:+17165337108" className="bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-lg">
              Call Now: 716-533-7108
            </a>
          </div>
        </div>
      </section>

      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* About Bella Floor Refinishing */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Why Choose Bella Floor Refinishing?</h2>
            <p>
              At <strong>Bella Floor Refinishing</strong>, a division of <strong>Aaron Michael Services</strong>, we take pride in transforming homes across Buffalo and surrounding areas with unparalleled craftsmanship. Our locally owned and operated team has over a decade of experience in hardwood floor refinishing, repair, and installation. Every project is approached with precision, transparency, and a dedication to excellence.
            </p>
            <p>
              Our technicians are highly trained in the latest sanding, staining, and finishing techniques. We use only premium products such as Bona, Loba, and Pallmann to ensure your floors are durable, beautiful, and long-lasting. Whether your hardwood floors need a simple refresh or a full-scale restoration, Bella Floor Refinishing provides the expertise, care, and attention to detail you can trust.
            </p>
            <p>
              Customer satisfaction is at the core of our business. From your initial phone call to the final walk-through, we focus on clear communication, respecting your home, and delivering a finished product that exceeds expectations. Serving Buffalo, Kenmore, Tonawanda, North Tonawanda, and Cheektowaga, we ensure every home receives local, personalized service backed by years of experience.
            </p>
          </section>

          {/* Comprehensive Hardwood Flooring Services */}
          <section className="space-y-8 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Hardwood Floor Services</h2>

            {/* Refinishing */}
            <article className="space-y-4">
              <h3 className="text-2xl font-semibold mb-2">Hardwood Floor Refinishing</h3>
              <p>
                Refinishing your hardwood floors restores their natural beauty, extends lifespan, and increases home value. Bella Floor Refinishing offers a comprehensive process from start to finish:
              </p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li><strong>Initial Consultation:</strong> We assess your floors, discuss your vision, identify wood species, and evaluate any damage or wear.</li>
                <li><strong>Preparation:</strong> Protect surrounding areas, remove furniture, check subfloor integrity, and ensure a clean workspace.</li>
                <li><strong>Sanding:</strong> Multi-stage sanding with fine-grit progression to achieve smooth, level surfaces. We meticulously clean between stages to reduce dust and disruption.</li>
                <li><strong>Repairs:</strong> Fix deep scratches, dents, water damage, pet stains, loose boards, or minor board replacement with seamless blending.</li>
                <li><strong>Custom Staining (Optional):</strong> Professional color matching and stain application to achieve the perfect tone for your home.</li>
                <li><strong>Premium Finish Application:</strong> Water-based, oil-modified, or natural oil finishes are applied according to your preference for durability and beauty.</li>
                <li><strong>Curing & Walkthrough:</strong> Floors are properly cured, ventilated, and inspected with you to ensure satisfaction.</li>
              </ol>
            </article>

            {/* Installation */}
            <article className="space-y-4">
              <h3 className="text-2xl font-semibold mb-2">Hardwood Floor Installation</h3>
              <p>
                We install solid and engineered hardwood floors with precision. Our installation process ensures long-lasting results:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Selection of wood species: Oak, Maple, Cherry, Walnut, Hickory, and more.</li>
                <li>Subfloor preparation: Ensuring level, dry, and stable surfaces.</li>
                <li>Installation techniques: Nail-down, glue-down, or floating, chosen for durability and performance.</li>
                <li>Seamless finishing: Professional trim, molding, and transitions for a polished look.</li>
              </ul>
            </article>

            {/* Repairs */}
            <article className="space-y-4">
              <h3 className="text-2xl font-semibold mb-2">Hardwood Floor Repair & Restoration</h3>
              <p>
                From scratches and dents to water damage and pet stains, Bella Floor Refinishing addresses all common floor issues. Our repair process matches existing floors for seamless restoration.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2">
                <li>Scratch and dent removal</li>
                <li>Water damage mitigation</li>
                <li>Pet stain removal</li>
                <li>Loose or squeaky boards repair</li>
                <li>Gap filling and blending to match original finish</li>
              </ul>
            </article>

            {/* Maintenance */}
            <article className="space-y-4">
              <h3 className="text-2xl font-semibold mb-2">Screen & Recoat Services</h3>
              <p>
                Screen and recoat services extend floor life and refresh dull surfaces without full sanding. This quick, cost-effective maintenance restores shine and protects your investment.
              </p>
              <p>
                <strong>Process:</strong> Light abrasion of existing finish, thorough cleaning, and application of a fresh topcoat. Ideal for minor scratches and wear.
              </p>
            </article>

            <article className="space-y-4">
              <h3 className="text-2xl font-semibold mb-2">Wax & Residue Removal</h3>
              <p>
                DIY products often leave wax build-up, dulling floors and trapping dirt. We safely remove residues to prepare floors for proper finishing or recoating, ensuring optimal results.
              </p>
            </article>
          </section>

          {/* Benefits of Hardwood Floors */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Why Hardwood Floors Are Worth It</h2>
            <ul className="list-disc list-inside ml-4 space-y-2 text-gray-700">
              <li>Durability & Longevity: Can last for decades with proper care.</li>
              <li>Increased Property Value: Hardwood floors boost resale value.</li>
              <li>Healthy Indoor Environment: Hypoallergenic, easy to clean.</li>
              <li>Timeless Aesthetic: Elegant, versatile, complements any decor.</li>
              <li>Low Maintenance: Simple cleaning routines keep floors beautiful.</li>
            </ul>
          </section>

          {/* Process / Customer Journey */}
          <section className="space-y-6 bg-gray-100 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Our Transparent Process</h2>
            <ol className="list-decimal list-inside ml-4 space-y-2 text-gray-700">
              <li><strong>Free Consultation & Estimate:</strong> We evaluate your floors and provide a detailed, no-obligation estimate.</li>
              <li><strong>Expert Execution:</strong> Our team works efficiently using premium materials and proven techniques.</li>
              <li><strong>Enjoy Your Floors:</strong> Post-project guidance, maintenance tips, and a final walkthrough ensure satisfaction.</li>
            </ol>
          </section>

          {/* Testimonials */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold mb-4">Client Testimonials & Project Showcase</h2>
            <p>“Bella Floor Refinishing transformed my old floors into something I’m proud to show off. Professional, on-time, and meticulous.” – Buffalo Resident</p>
            <p>“The team repaired water-damaged areas seamlessly. Couldn’t be happier!” – North Tonawanda Client</p>
            <p>Extensive before-and-after gallery and video testimonials can be embedded here to show transformations.</p>
          </section>

          {/* FAQs */}
          <section className="space-y-6 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">How long does refinishing take?</h3>
              <p>Typically 2–5 days depending on floor size and extent of repairs. We provide a precise timeline during consultation.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Do you handle water-damaged floors?</h3>
              <p>Yes. We assess, repair, and restore water-damaged hardwood with professional techniques to prevent future issues.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Can you match existing stains?</h3>
              <p>Absolutely. We custom match stains to blend repairs seamlessly with your current floor color.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Do you install new floors?</h3>
              <p>Yes, we install solid and engineered hardwood with all necessary prep and finishing work included.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Are your services insured?</h3>
              <p>Bella Floor Refinishing, under Aaron Michael Services, is fully licensed and insured, guaranteeing peace of mind for every project.</p>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">What areas do you serve?</h3>
              <p>Buffalo, Kenmore, Tonawanda, North Tonawanda, Cheektowaga, and surrounding Western New York neighborhoods.</p>
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-yellow-100 p-8 rounded-lg text-center space-y-6">
            <h2 className="text-3xl font-bold mb-4">Contact Bella Floor Refinishing</h2>
            <p>Call us today at <strong>716-533-7108</strong> or email <strong>Thomasstory716@hotmail.com</strong> to schedule a free consultation.</p>
            <p>Visit us at our office: <strong>14 Mariemont Ave, Buffalo, NY 14220</strong></p>
            <Link
              to="/contact"
              className="inline-block bg-yellow-700 hover:bg-yellow-800 text-white font-bold py-3 px-6 rounded-lg"
            >
              Request a Free Estimate
            </Link>
          </section>

        </div>
      </main>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default HardwoodFloorRefinishing;