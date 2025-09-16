import React from 'react';
import { Heart, Home, Users, Award, Shield, CheckCircle } from 'lucide-react';

const CONTACT_INFO = {
  phone: '716-239-8969',
  displayPhone: '(716) 239-8969'
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            My Personal Mission to Transform Homes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From hospitality construction to life-changing accessibility solutions — 
            here's why I shifted my entire career to serve Buffalo families like yours.
          </p>
        </div>

        {/* Main Story Container */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Story Content */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Heart className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Moment Everything Changed</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                My name is <strong>Tom Story</strong>, and I've been swinging hammers and building dreams across Buffalo for over 25 years. I thought I had construction figured out — from luxury hotel builds to hundreds of residential remodels and flips throughout Western New York.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                But life has a way of showing you what truly matters. When my child was diagnosed with autism and I watched my aging parents struggle with mobility in their own home, everything shifted. Suddenly, construction wasn't just about beautiful spaces — it became about <em>livable, accessible spaces that could change lives.</em>
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Why I Chose This Path</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                I realized that all my years building hotels and flipping houses meant nothing if I couldn't help the people who needed it most — families right here in Buffalo who wanted to age gracefully at home, parents caring for children with special needs, and individuals fighting to maintain their independence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                So I made a decision that changed everything: <strong>I would dedicate my entire business to aging-in-place services and disability modifications.</strong> No more cookie-cutter projects. Just life-changing work for Buffalo families who deserve to feel safe, comfortable, and independent in their own homes.
              </p>
            </div>
          </div>

          {/* Credentials & Trust Signals */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Proven Buffalo Experience</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>25+ Years</strong> in construction across Western New York</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Licensed City of Buffalo Contractor</strong> since 2011</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Hundreds of Residential Projects</strong> completed successfully</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Hospitality Sector Experience</strong> building new hotels</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700"><strong>Personal Disability Experience</strong> — I understand your challenges</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Licensed • Insured • Trusted</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                As a family-owned business with deep Buffalo roots, we're not just contractors — we're neighbors who understand that your home modifications need to be done right the first time, on budget, and with genuine care.
              </p>
              <div className="bg-white rounded-xl p-6 border border-blue-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">Our Promise to You:</p>
                <p className="text-gray-700 italic">
                  "Every project we take on is treated as if it were for our own family members. Because in Buffalo, we take care of each other."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center text-white mb-16">
          <div className="flex items-center justify-center mb-6">
            <Users className="w-12 h-12 mr-4" />
            <h3 className="text-3xl font-bold">Our Mission</h3>
          </div>
          <p className="text-2xl font-light leading-relaxed max-w-4xl mx-auto mb-8">
            Help Buffalo families maintain independence, dignity, and quality of life at home through 
            professional ADA-compliant modifications that are built to last generations.
          </p>
          <p className="text-xl opacity-90">
            Because everyone deserves to feel safe and comfortable in their own home.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Home?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can make your Buffalo home safer, more accessible, and perfectly suited for your family's needs.
          </p>
          <a
            href={`tel:${CONTACT_INFO.phone}`}
            className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold text-xl py-6 px-12 rounded-2xl shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            <Heart className="w-6 h-6 mr-3" />
            Get Your Free Consultation Today
          </a>
          <p className="text-gray-500 mt-4">
            Same-day consultations available • Emergency service • Buffalo family-owned
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
