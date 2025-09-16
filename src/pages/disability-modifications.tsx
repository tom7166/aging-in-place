import React, { useEffect } from 'react';

const DisabilityModifications: React.FC = () => {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Disability Modifications",
      "description": "Specialized modifications for all disabilities in Buffalo homes. Vision, mobility, and cognitive accessibility solutions.",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Aaron Michael Services",
        "telephone": "+17165337108",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "14 Mariemont Ave",
          "addressLocality": "Buffalo",
          "addressRegion": "NY",
          "postalCode": "14220",
          "addressCountry": "US"
        }
      },
      "areaServed": [
        "Buffalo", "Cheektowaga", "Amherst", "Tonawanda", "West Seneca", "Lackawanna", "Niagara Falls", "North Tonawanda", "Lockport",
        "Alden", "Aurora", "Boston", "Brant", "Clarence", "Colden", "Collins", "Concord", "Eden", "Elma", "Evans", "Grand Island", 
        "Hamburg", "Holland", "Lancaster", "Marilla", "Newstead", "Orchard Park", "Sardinia", "Wales", "West Seneca",
        "Akron", "Angola", "Blasdell", "Depew", "East Aurora", "Farnham", "Gowanda", "Kenmore", "Sloan", "Springville",
        "Appleton", "Barker", "Cambria", "Hartland", "Lewiston", "Lockport", "Newfane", "Niagara", "Pendleton", "Porter", "Royalton", "Somerset", "Wheatfield", "Wilson",
        "Gasport", "Lewiston", "Middleport", "Niagara University", "Olcott", "Ransomville", "Sanborn", "Wilson", "Youngstown",
        "Erie County", "Niagara County", "Western New York", "WNY"
      ]
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Disability Modifications</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive accessibility solutions for all types of disabilities in Western New York
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessible Home Solutions</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Every person deserves to live independently and comfortably in their home, regardless of their abilities. 
                Our disability modification services address the unique needs of individuals with mobility, vision, hearing, 
                and cognitive disabilities.
              </p>
              <p>
                We work closely with occupational therapists, healthcare providers, and families to create customized 
                solutions that enhance safety, independence, and quality of life.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Assessment</h4>
                  <p className="text-gray-600 text-sm">Comprehensive evaluation of needs and home layout</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Custom Design</h4>
                  <p className="text-gray-600 text-sm">Personalized modifications for specific disabilities</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Installation</h4>
                  <p className="text-gray-600 text-sm">ADA-compliant installation by licensed professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Disability-Specific Modifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">♿</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Mobility Disabilities</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Wheelchair-accessible ramps and lifts</li>
                <li>• Widened doorways and hallways</li>
                <li>• Lowered countertops and cabinets</li>
                <li>• Roll-in showers and accessible bathrooms</li>
                <li>• Stair lifts and elevators</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Vision Disabilities</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Tactile markers and Braille labels</li>
                <li>• Enhanced lighting systems</li>
                <li>• High-contrast visual elements</li>
                <li>• Voice-activated controls</li>
                <li>• Textured flooring transitions</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👂</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hearing Disabilities</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Visual alert systems</li>
                <li>• Vibrating notification devices</li>
                <li>• Flashing doorbell systems</li>
                <li>• Visual smoke/carbon monoxide alarms</li>
                <li>• Video communication systems</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cognitive Disabilities</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Simplified control systems</li>
                <li>• Memory aid installations</li>
                <li>• Safety monitoring systems</li>
                <li>• Clear navigation markers</li>
                <li>• Automated home features</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Safety Features</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Emergency response systems</li>
                <li>• Anti-slip flooring</li>
                <li>• Rounded corner modifications</li>
                <li>• Motion sensor lighting</li>
                <li>• Fall prevention equipment</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Home Integration</h3>
              <ul className="text-gray-600 space-y-2 text-sm">
                <li>• Voice-controlled lighting</li>
                <li>• Automated door systems</li>
                <li>• Smart thermostat controls</li>
                <li>• Remote monitoring capabilities</li>
                <li>• Adaptive technology integration</li>
              </ul>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Home Accessibility?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us for a personalized consultation. We'll work with you and your care team to create 
            the perfect accessibility solutions for your specific needs.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Consultation
            </a>
            <a 
              href="tel:+17165337108" 
              className="inline-block border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Call Now: (716) 533-7108
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisabilityModifications;

