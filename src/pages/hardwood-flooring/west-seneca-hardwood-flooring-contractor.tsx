import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Phone, CheckCircle } from 'lucide-react';
import Footer from '../../components/Footer';

const WestSenecaHardwoodFlooringContractor: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>West Seneca Hardwood Flooring Contractor | Installation & Refinishing</title>
        <meta name="description" content="Trusted hardwood flooring contractor in West Seneca NY. Installation, refinishing, repair services. 25+ years experience. Free estimates. Call 716-533-7108." />
        <meta name="keywords" content="west seneca hardwood flooring contractor, west seneca hardwood flooring, hardwood floors west seneca ny" />
        <link rel="canonical" href="https://aaronmichaelservices.com/services/hardwood-flooring/west-seneca-hardwood-flooring-contractor" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "West Seneca Hardwood Flooring Contractor",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Aaron Michael Services",
              "telephone": "716-533-7108",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "West Seneca",
                "addressRegion": "NY"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "West Seneca, NY"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white">
        <section className="bg-gradient-to-r from-amber-700 to-amber-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">West Seneca Hardwood Flooring Contractor</h1>
              <p className="text-xl mb-8">Expert Service in West Seneca, NY</p>
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
              <h2>Complete Hardwood Flooring Services for West Seneca Homes</h2>
              <h2>Why Choose a Licensed Hardwood Flooring Contractor in West Seneca?</h2>
              <h2>Hardwood vs Engineered Flooring: What's Best for West Seneca?</h2>
              
              <p>West Seneca homeowners seeking quality hardwood flooring services need an experienced contractor who understands local homes and delivers exceptional results. From Union Road to Seneca Street, we provide comprehensive hardwood flooring installation, refinishing, and repair services throughout West Seneca.</p>
              <p>As a licensed and insured hardwood flooring contractor, we bring 25+ years of experience to every West Seneca project. Our services include new hardwood installation, floor refinishing, board repair, sanding, staining, and protective finish application. We work with all wood species and can match existing floors for additions or renovations.</p>
              <p>West Seneca's mix of ranch homes, split-levels, and colonials each present unique flooring challenges. Ranch homes often benefit from continuous hardwood throughout main living areas, creating flow and visual spaciousness. Split-levels may need transitions between floor types, which we handle with precision and attention to detail.</p>
              <p>Choosing between solid hardwood and engineered flooring depends on your West Seneca home's characteristics. Solid hardwood offers traditional beauty and can be refinished multiple times, making it ideal for main living areas. Engineered hardwood provides better moisture resistance, making it suitable for basements or rooms with humidity concerns.</p>
              <p>Our West Seneca hardwood flooring projects include detailed consultations, accurate estimates, scheduled installations that respect your timeline, and thorough cleanup. We protect your home's furnishings and ensure minimal disruption to your daily routine. The result is stunning hardwood floors that enhance your home's value and beauty for decades.</p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8 not-prose">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Services in West Seneca</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/services/kitchen-remodeling" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Kitchen Remodeling Services
                  </Link>
                  <Link to="/services/bathroom-remodeling" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Bathroom Remodeling
                  </Link>
                  <Link to="/services/basement-finishing" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Basement Finishing
                  </Link>
                  <Link to="/services/home-additions" className="text-amber-700 hover:text-amber-900 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Home Additions
                  </Link>
                </div>
              </div>

              <h2>Frequently Asked Questions</h2>

              <div className="space-y-6 not-prose">
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">How do I choose a hardwood flooring contractor in West Seneca?</h3>
                  <p className="text-gray-700">Look for licensed and insured contractors with local references, 10+ years experience, detailed written estimates, and portfolios of completed West Seneca projects. Check online reviews and ask about warranties on materials and workmanship.</p>
                </div>
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">What's included in hardwood flooring installation in West Seneca?</h3>
                  <p className="text-gray-700">Professional installation includes subfloor inspection and preparation, moisture barrier installation, hardwood acclimation, precise layout and installation, trim and transition pieces, and final inspection. Finishing is included for site-finished floors.</p>
                </div>
                <div className="bg-white border rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer warranties on hardwood flooring work?</h3>
                  <p className="text-gray-700">Yes, we provide workmanship warranties on all West Seneca installations and repairs. Manufacturer warranties cover materials. We stand behind our work and address any concerns promptly and professionally.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-amber-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Expert Service in West Seneca?</h2>
            <p className="text-xl mb-6">Free estimates on all West Seneca hardwood flooring projects</p>
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

export default WestSenecaHardwoodFlooringContractor;
