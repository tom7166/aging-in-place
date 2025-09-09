import React from 'react';
import { Star, Shield, Clock, Users, Award, Heart } from 'lucide-react';

interface WhyChooseUsProps {
  highContrastMode: boolean;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ highContrastMode }) => {
  const reasons = [
    {
      icon: <Star size={40} />,
      title: "22+ Years Experience",
      description: "Over two decades of specialized ADA modifications throughout Buffalo and WNY",
      highlight: "Since 2000"
    },
    {
      icon: <Heart size={40} />,
      title: "Personal Disability Experience",
      description: "Family member with disabilities gives us unique insight into real accessibility needs",
      highlight: "Real Experience"
    },
    {
      icon: <Shield size={40} />,
      title: "ADA Compliance Guaranteed",
      description: "Every modification meets or exceeds ADA requirements with detailed documentation",
      highlight: "100% Compliant"
    },
    {
      icon: <Users size={40} />,
      title: "Family-Owned Buffalo Business",
      description: "Born and raised in Buffalo, serving our neighbors throughout Western New York",
      highlight: "Local Roots"
    },
    {
      icon: <Clock size={40} />,
      title: "Emergency Services Available",
      description: "Urgent accessibility needs don't wait - we provide emergency modification services",
      highlight: "24/7 Available"
    },
    {
      icon: <Award size={40} />,
      title: "Insurance & Medicare Assistance",
      description: "Help navigating insurance coverage and Medicare benefits for accessibility upgrades",
      highlight: "Payment Help"
    }
  ];

  return (
    <section 
      id="why-choose" 
      className={`py-20 ${
        highContrastMode ? 'bg-black text-white' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              highContrastMode ? 'text-white' : 'text-blue-900'
            }`}>
              Why Choose Aaron Michael Services?
            </h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              highContrastMode ? 'text-white' : 'text-gray-600'
            }`}>
              Buffalo's most trusted ADA contractor with the experience and heart to build true independence
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 transform ${
                  highContrastMode 
                    ? 'bg-gray-900 border-2 border-white hover:border-yellow-400' 
                    : 'bg-white shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200'
                }`}
              >
                {/* Icon and Highlight */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`${
                    highContrastMode ? 'text-yellow-400' : 'text-blue-600'
                  }`}>
                    {reason.icon}
                  </div>
                  <span className={`px-3 py-1 text-sm font-bold rounded-full ${
                    highContrastMode 
                      ? 'bg-yellow-400 text-black' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {reason.highlight}
                  </span>
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${
                  highContrastMode ? 'text-white' : 'text-blue-900'
                }`}>
                  {reason.title}
                </h3>
                
                <p className={`text-lg leading-relaxed ${
                  highContrastMode ? 'text-white' : 'text-gray-700'
                }`}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial/Quote Section */}
          <div className={`p-8 md:p-12 rounded-2xl text-center ${
            highContrastMode 
              ? 'bg-gray-900 border-2 border-white' 
              : 'bg-gradient-to-r from-blue-600 to-blue-800 text-white'
          }`}>
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-bold italic mb-6 leading-relaxed">
                "We don't just build ramps and modify bathrooms. We build independence, dignity, and the freedom to live safely in your own Buffalo home."
              </blockquote>
              <cite className={`text-xl font-semibold ${
                highContrastMode ? 'text-yellow-400' : 'text-blue-100'
              }`}>
                - The Aaron Michael Services Team
              </cite>
              
              <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-lg">
                <div className="flex items-center space-x-2">
                  <Shield size={24} />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award size={24} />
                  <span>BBB Accredited</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={24} />
                  <span>1000+ Families Served</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;