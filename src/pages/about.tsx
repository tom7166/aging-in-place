import React from ‘react’;

const About: React.FC = () => {
return (
<div className="min-h-screen bg-gray-50">
{/* Hero Section */}
<div className="bg-blue-600 text-white py-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h1 className="text-4xl font-bold mb-4">About Aaron Michael Services</h1>
<p className="text-xl max-w-3xl mx-auto">
Creating safer, more accessible homes for independent living across Western New York
</p>
</div>
</div>
</div>

```
  {/* Main Content */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Story Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Aaron Michael Services was founded with a simple yet powerful mission: to help people 
            age comfortably and safely in their own homes. We understand that home isn't just a 
            place—it's where memories are made, families gather, and independence thrives.
          </p>
          <p>
            With years of experience in home modifications and accessibility solutions, we've 
            helped hundreds of families across Buffalo, Kenmore, Tonawanda, and throughout 
            Western New York create spaces that adapt to their changing needs.
          </p>
          <p>
            Every modification we make is designed with both safety and dignity in mind, ensuring 
            that your home remains a place of comfort and independence for years to come.
          </p>
        </div>
      </div>

      {/* Values/Stats Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">✓</span>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">Licensed & Insured</h4>
              <p className="text-gray-600">Fully licensed contractors with comprehensive insurance coverage</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">✓</span>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">ADA Compliant</h4>
              <p className="text-gray-600">All modifications meet or exceed ADA accessibility standards</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">✓</span>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">Quick Turnaround</h4>
              <p className="text-gray-600">Most projects completed within 1-3 weeks</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold">✓</span>
            </div>
            <div className="ml-4">
              <h4 className="font-semibold text-gray-900">Local Expertise</h4>
              <p className="text-gray-600">Serving Western NY with personalized, community-focused service</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Services Overview */}
    <div className="mt-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Specialized Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🚪</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Accessibility Modifications</h3>
          <p className="text-gray-600">Wheelchair ramps, door widening, and bathroom modifications for enhanced mobility</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🏠</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Aging-in-Place Solutions</h3>
          <p className="text-gray-600">Comprehensive home modifications to support independent living as you age</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl">🔧</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Kitchen & Bath Remodeling</h3>
          <p className="text-gray-600">Safe, accessible kitchens and bathrooms designed for all mobility levels</p>
        </div>

      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-16 bg-gray-900 rounded-lg p-8 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Ready to Make Your Home More Accessible?</h2>
      <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
        Contact us today for a free consultation. We'll assess your needs and provide personalized 
        recommendations to help you live safely and independently in your home.
      </p>
      <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
        <a 
          href="/contact" 
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Get Free Consultation
        </a>
        <a 
          href="tel:+1234567890" 
          className="inline-block border border-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Call Now: (123) 456-7890
        </a>
      </div>
    </div>
  </div>
</div>
```

);
};

export default About;
