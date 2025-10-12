import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import Footer from '../../components/Footer';

const AmherstHardwoodFloorSanding: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Amherst Hardwood Floor Sanding | Professional Restoration NY</title>
        <meta name="description" content="Expert hardwood floor sanding in Amherst NY. Dustless sanding systems, professional restoration. Transform worn floors. Free estimates. Call 716-533-7108." />
        <meta name="keywords" content="amherst hardwood floor sanding, amherst hardwood flooring, hardwood floors amherst ny" />
        <link rel="canonical" href="https://aaronmichaelservices.com/services/hardwood-flooring/amherst-hardwood-floor-sanding" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Amherst Hardwood Floor Sanding & Restoration",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Amherst Hardwood Floor Sanding & Restoration</h1>
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
              <h2>Professional Dustless Sanding for Amherst Homes</h2>
              <h2>How Hardwood Floor Sanding Transforms Amherst Properties</h2>
              <h2>What to Expect During Floor Sanding in Amherst NY</h2>
              
              <p>Amherst homeowners with worn, scratched, or damaged hardwood floors can restore them to like-new condition with professional floor sanding. From Williamsville to Snyder, we provide expert hardwood floor sanding services that transform tired floors into beautiful focal points.</p>
              <p>Our advanced dustless sanding systems capture 99% of dust particles, keeping your Amherst home clean throughout the refinishing process. This is especially important for families with allergies or respiratory concerns. Traditional sanding created clouds of fine dust that settled throughout homes, but modern equipment makes the process virtually dust-free.</p>
              <p>Hardwood floor sanding removes the top layer of damaged wood, eliminating scratches, dents, water stains, and worn finish. We use multiple grits of sandpaper, starting with coarse grits to remove damage and progressing to fine grits for smooth surfaces. The process typically takes one full day for an average Amherst home, followed by staining and finishing.</p>
              <p>Amherst's diverse housing stock—from North Forest contemporary homes to classic Eggertsville colonials—often features beautiful hardwood floors hiding beneath carpet or damaged finishes. Floor sanding reveals the natural beauty of these woods and allows you to customize the color with stains that match your décor.</p>
              <p>Professional sanding ensures even removal of old finish without damaging the wood. DIY sanding often leaves waves, gouges, or uneven areas that are visible after staining. Our experienced craftsmen know exactly how much material to remove while preserving the wood's integrity for future refinishing.</p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services in Amherst</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/amherst-ny-kitchen-remodeling" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Amherst Kitchen Remodeling
                  </Link>
                  <Link to="/amherst-ny-bathroom-remodeling" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Amherst Bathroom Remodeling
                  </Link>
                  <Link to="/services/hardwood-floor-refinishing" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Hardwood Floor Refinishing
                  </Link>
                  <Link to="/services/carpentry-repairs" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Carpentry Repairs
                  </Link>
                </div>
              </div>

              <h2>Frequently Asked Questions</h2>

              <div className="space-y-6 not-prose">
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Is hardwood floor sanding messy in Amherst homes?</h3>
                  <p className="text-gray-700">Modern dustless sanding systems capture 99% of dust, making the process much cleaner than traditional methods. We also seal off work areas and use protective coverings throughout your Amherst home.</p>
                </div>
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">How often should hardwood floors be sanded in Amherst NY?</h3>
                  <p className="text-gray-700">Most Amherst hardwood floors need sanding and refinishing every 10-15 years with normal wear. High-traffic areas may need attention sooner. Solid hardwood can be sanded 6-10 times over its lifetime.</p>
                </div>
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Can you sand engineered hardwood floors?</h3>
                  <p className="text-gray-700">Engineered hardwood can be sanded if the wear layer is at least 3mm thick. We inspect Amherst floors to determine sanding eligibility and can often perform one light sanding on quality engineered products.</p>
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

export default AmherstHardwoodFloorSanding;
