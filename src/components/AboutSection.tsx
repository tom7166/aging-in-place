import React from 'react';
import { Heart, Users, Award, Home } from 'lucide-react';

interface AboutSectionProps {
  highContrastMode: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ highContrastMode }) => {
  return (
    <section 
      id="about" 
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
              Our Story
            </h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              highContrastMode ? 'text-white' : 'text-gray-600'
            }`}>
              Born from personal experience, built with Buffalo pride
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Story Content */}
            <div className="space-y-6">
              <div className={`p-8 rounded-2xl ${
                highContrastMode 
                  ? 'bg-gray-900 border-2 border-white' 
                  : 'bg-white shadow-xl border border-gray-100'
              }`}>
                <div className="flex items-start space-x-4 mb-6">
                  <Heart className={`flex-shrink-0 mt-1 ${
                    highContrastMode ? 'text-yellow-400' : 'text-green-600'
                  }`} size={32} />
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      highContrastMode ? 'text-white' : 'text-blue-900'
                    }`}>
                      It Started with Aaron
                    </h3>
                    <p className={`text-lg leading-relaxed mb-4 ${
                      highContrastMode ? 'text-white' : 'text-gray-700'
                    }`}>
                      When our family member Aaron was born with disabilities, we quickly learned that Buffalo homes weren't built for everyone. Simple things like getting through doorways, using the bathroom safely, or accessing the kitchen became daily challenges.
                    </p>
                    <p className={`text-lg leading-relaxed ${
                      highContrastMode ? 'text-white' : 'text-gray-700'
                    }`}>
                      That's when we realized our calling wasn't just construction—it was creating independence, dignity, and safety for Buffalo families facing similar challenges.
                    </p>
                  </div>
                </div>
              </div>

              <div className={`p-8 rounded-2xl ${
                highContrastMode 
                  ? 'bg-gray-900 border-2 border-white' 
                  : 'bg-blue-50 border border-blue-100'
              }`}>
                <div className="flex items-start space-x-4">
                  <Home className={`flex-shrink-0 mt-1 ${
                    highContrastMode ? 'text-yellow-400' : 'text-blue-600'
                  }`} size={32} />
                  <div>
                    <h3 className={`text-2xl font-bold mb-4 ${
                      highContrastMode ? 'text-white' : 'text-blue-900'
                    }`}>
                      Buffalo Built Us
                    </h3>
                    <p className={`text-lg leading-relaxed ${
                      highContrastMode ? 'text-white' : 'text-gray-700'
                    }`}>
                      For over two decades, Buffalo neighborhoods have been our classroom. From Cheektowaga to Amherst, from West Seneca to Tonawanda, we've learned that every home has its own personality and every family has unique needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="space-y-6">
              <div className={`rounded-2xl overflow-hidden shadow-2xl ${
                highContrastMode ? 'border-4 border-white' : ''
              }`}>
                <img 
                  src="https://images.pexels.com/photos/7659575/pexels-photo-7659575.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Aaron Michael Services team working on accessibility modifications in Buffalo home"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className={`p-6 rounded-xl text-center ${
                highContrastMode ? 'bg-gray-900 border border-white' : 'bg-white shadow-lg'
              }`}>
                <p className={`text-xl font-semibold italic ${
                  highContrastMode ? 'text-yellow-400' : 'text-blue-900'
                }`}>
                  "Every modification we make isn't just construction—it's independence."
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className={`text-center p-8 rounded-2xl ${
              highContrastMode 
                ? 'bg-gray-900 border-2 border-white' 
                : 'bg-white shadow-xl hover:shadow-2xl transition-shadow'
            }`}>
              <Users className={`mx-auto mb-4 ${
                highContrastMode ? 'text-yellow-400' : 'text-green-600'
              }`} size={48} />
              <h3 className={`text-xl font-bold mb-3 ${
                highContrastMode ? 'text-white' : 'text-blue-900'
              }`}>
                Family Experience
              </h3>
              <p className={`${
                highContrastMode ? 'text-white' : 'text-gray-700'
              }`}>
                Personal disability experience guides every decision we make
              </p>
            </div>

            <div className={`text-center p-8 rounded-2xl ${
              highContrastMode 
                ? 'bg-gray-900 border-2 border-white' 
                : 'bg-white shadow-xl hover:shadow-2xl transition-shadow'
            }`}>
              <Award className={`mx-auto mb-4 ${
                highContrastMode ? 'text-yellow-400' : 'text-blue-600'
              }`} size={48} />
              <h3 className={`text-xl font-bold mb-3 ${
                highContrastMode ? 'text-white' : 'text-blue-900'
              }`}>
                22+ Years Expertise
              </h3>
              <p className={`${
                highContrastMode ? 'text-white' : 'text-gray-700'
              }`}>
                Over two decades perfecting accessibility solutions in Buffalo
              </p>
            </div>

            <div className={`text-center p-8 rounded-2xl ${
              highContrastMode 
                ? 'bg-gray-900 border-2 border-white' 
                : 'bg-white shadow-xl hover:shadow-2xl transition-shadow'
            }`}>
              <Home className={`mx-auto mb-4 ${
                highContrastMode ? 'text-yellow-400' : 'text-green-600'
              }`} size={48} />
              <h3 className={`text-xl font-bold mb-3 ${
                highContrastMode ? 'text-white' : 'text-blue-900'
              }`}>
                Buffalo Roots
              </h3>
              <p className={`${
                highContrastMode ? 'text-white' : 'text-gray-700'
              }`}>
                Born, raised, and building independence throughout WNY
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;