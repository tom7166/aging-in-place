import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import Footer from '../../components/Footer';

const AmherstEngineeredHardwoodInstallation: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Amherst Engineered Hardwood Installation | Expert Installers NY</title>
        <meta name="description" content="Professional engineered hardwood installation in Amherst NY. Moisture-resistant, durable, beautiful. All brands installed. Free estimates. Call 716-533-7108." />
        <meta name="keywords" content="amherst engineered hardwood installation, amherst hardwood flooring, hardwood floors amherst ny" />
        <link rel="canonical" href="https://aaronmichaelservices.com/services/hardwood-flooring/amherst-engineered-hardwood-installation" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Amherst Engineered Hardwood Installation",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Aaron Michael Services",
              "telephone": "716-533-7108",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Amherst",
                "addressRegion": "NY"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Amherst, NY"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Amherst Engineered Hardwood Installation</h1>
              <p className="text-xl mb-8">Expert Service in Amherst, NY</p>
              <a href="tel:716-533-7108" className="bg-white text-amber-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call (716) 533-7108
              </a>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2>Benefits of Engineered Hardwood for Amherst Homes</h2>
              <h2>Engineered vs Solid Hardwood: Which is Best for Amherst NY?</h2>
              <h2>How Much Does Engineered Hardwood Cost in Amherst?</h2>
              
              <p>Engineered hardwood flooring offers Amherst homeowners the beauty of real hardwood with enhanced stability and versatility. This innovative flooring solution works beautifully in basements, over radiant heat, and in areas where solid hardwood isn't recommended.</p>
              <p>Engineered hardwood consists of a real hardwood veneer (wear layer) over multiple layers of plywood or high-density fiberboard. This construction makes it more dimensionally stable than solid hardwood, meaning it resists expansion and contraction from humidity changes that affect Amherst homes year-round.</p>
              <p>Amherst homeowners choose engineered hardwood for several key advantages. It can be installed in basements where moisture levels fluctuate, works over concrete subfloors, and installs faster than solid hardwood. Many engineered products feature click-lock systems allowing floating installation without nails or glue, reducing installation time and cost.</p>
              <p>Quality engineered hardwood looks identical to solid hardwood once installed. The wear layer thickness determines longevity—thicker wear layers (4-6mm) can be refinished 1-2 times, extending floor life to 30+ years. We install all major brands including Bruce, Shaw, Mohawk, and Armstrong throughout Amherst.</p>
              <p>Installation methods for engineered hardwood in Amherst include floating (over underlayment), glue-down (for concrete), and nail-down (for wood subfloors). We assess your home's specific conditions and recommend the best installation method for long-term performance. Most Amherst installations complete in 2-4 days depending on square footage.</p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services in Amherst</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/amherst-ny-basement-finishing" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Amherst Basement Finishing
                  </Link>
                  <Link to="/amherst-ny-home-additions" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Amherst Home Additions
                  </Link>
                  <Link to="/services/modern-flooring" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Modern Flooring Options
                  </Link>
                  <Link to="/services/laminate-flooring" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Laminate Flooring
                  </Link>
                </div>
              </div>

              <h2>Frequently Asked Questions</h2>

              <div className="space-y-6 not-prose">
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Is engineered hardwood real wood?</h3>
                  <p className="text-gray-700">Yes! Engineered hardwood features a real hardwood wear layer over a stable core. The top surface is genuine oak, maple, hickory, or exotic wood. It looks, feels, and performs like solid hardwood with added stability benefits.</p>
                </div>
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">How long does engineered hardwood last in Amherst homes?</h3>
                  <p className="text-gray-700">Quality engineered hardwood lasts 25-40 years in Amherst homes with proper care. Thick wear layers (4mm+) can be refinished once or twice, significantly extending floor life. Many brands include 25-year warranties.</p>
                </div>
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Can engineered hardwood be installed in Amherst basements?</h3>
                  <p className="text-gray-700">Yes! Engineered hardwood's stable construction handles basement humidity better than solid hardwood. Ensure proper moisture barriers and that concrete moisture levels are within manufacturer specifications before Amherst basement installation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-amber-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Expert Service in Amherst?</h2>
            <p className="text-xl mb-6">Free estimates on all Amherst hardwood flooring projects</p>
            <a href="tel:716-533-7108" className="bg-white text-amber-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              (716) 533-7108
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default AmherstEngineeredHardwoodInstallation;
