import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight, Chrome as Home, MessageCircle, Shield, Award, Users, Heart, CircleCheck as CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';
import SEOHelmet from '../components/SEOHelmet';

const Contact: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHelmet
        title="Contact Aaron Michael Services | Buffalo ADA Contractor | Free Consultations"
        description="Contact Aaron Michael Services in Buffalo NY for wheelchair ramps, accessible bathrooms, and aging-in-place home modifications. Free consultations available across Western New York. Call 716-533-7108 today."
        keywords="contact Buffalo ADA contractor, free accessibility consultation, wheelchair ramp quote Buffalo, accessible bathroom estimate"
        canonicalUrl="https://aaronmichaelservices.com/contact"
      />
      <Header highContrastMode={false} toggleHighContrast={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-24 pt-32">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <nav className="mb-6 text-blue-200">
            <div className="flex items-center justify-center space-x-2 text-sm">
              <Home className="w-4 h-4" />
              <Link to="/" className="hover:text-white">Home</Link>
              <ArrowRight className="w-3 h-3" />
              <span>Contact</span>
            </div>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to make your Buffalo home more accessible? Get your free consultation today.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:716-533-7108" className="text-lg text-blue-600 hover:text-blue-800">
                      (716) 533-7108
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:thomasstory716@hotmail.com" className="text-lg text-blue-600 hover:text-blue-800">
                      thomasstory716@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Area</h3>
                    <p className="text-lg text-gray-600">Buffalo & All of Western New York</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Hours</h3>
                    <p className="text-lg text-gray-600">Mon-Fri: 7AM-6PM</p>
                    <p className="text-lg text-gray-600">Emergency Services Available</p>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-md mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2262.679990005937!2d-78.8256862248745!3d42.8414862711523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d30f006c770741%3A0xe549fa00be8e34c!2sAaron%20Michael%20Services!5e1!3m2!1sen!2sus!4v1760239899059!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Aaron Michael Services - Buffalo, NY"
                ></iframe>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Buffalo Families Trust Us</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Shield className="w-6 h-6 text-blue-600 mr-3" />
                    <span className="font-semibold">Licensed & Insured Contractor</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-6 h-6 text-green-600 mr-3" />
                    <span className="font-semibold">22+ Years Construction Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-6 h-6 text-purple-600 mr-3" />
                    <span className="font-semibold">500+ Families Served</span>
                  </div>
                  <div className="flex items-center">
                    <Heart className="w-6 h-6 text-red-600 mr-3" />
                    <span className="font-semibold">Personal Disability Experience</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4">Emergency Services</h3>
                <p className="text-blue-100 mb-6">
                  Urgent accessibility needs can't wait. We provide emergency installation services 
                  throughout Buffalo and Western New York.
                </p>
                <a 
                  href="tel:716-533-7108"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Emergency Service
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                'Buffalo', 'Cheektowaga', 'Amherst', 'Tonawanda', 'West Seneca', 'Lackawanna',
                'Kenmore', 'Depew', 'Lancaster', 'Williamsville', 'East Amherst', 'Clarence',
                'Orchard Park', 'Hamburg', 'Niagara Falls', 'Lockport'
              ].map((city) => (
                <div key={city} className="p-3 bg-blue-50 rounded-lg text-blue-900 font-medium">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FloatingCallButton highContrastMode={false} />
      <Footer />
    </div>
  );
};

export default Contact;