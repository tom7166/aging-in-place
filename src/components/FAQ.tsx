import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { FAQS } from '../utils/constants';

interface FAQProps {
  highContrastMode: boolean;
}

const FAQ: React.FC<FAQProps> = ({ highContrastMode }) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section 
      id="faq" 
      className={`py-20 ${
        highContrastMode ? 'bg-black text-white' : 'bg-gray-50'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center space-x-2 mb-4 ${
              highContrastMode ? 'text-yellow-400' : 'text-blue-600'
            }`}>
              <MessageCircle size={32} />
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              highContrastMode ? 'text-white' : 'text-blue-900'
            }`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed ${
              highContrastMode ? 'text-white' : 'text-gray-600'
            }`}>
              Common questions about ADA modifications and accessibility upgrades in Buffalo
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  highContrastMode 
                    ? 'bg-gray-900 border-2 border-white' 
                    : 'bg-white shadow-lg hover:shadow-xl border border-gray-100'
                }`}
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className={`w-full p-6 md:p-8 text-left flex items-center justify-between transition-colors ${
                    highContrastMode 
                      ? 'hover:bg-gray-800' 
                      : 'hover:bg-gray-50'
                  }`}
                  aria-expanded={openItems.includes(index)}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 
                    className={`text-lg md:text-xl font-bold pr-4 ${
                      highContrastMode ? 'text-white' : 'text-blue-900'
                    }`}
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  
                  <div className={`flex-shrink-0 ${
                    highContrastMode ? 'text-yellow-400' : 'text-blue-600'
                  }`}>
                    {openItems.includes(index) ? (
                      <ChevronUp size={24} />
                    ) : (
                      <ChevronDown size={24} />
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div 
                    id={`faq-answer-${index}`}
                    className={`px-6 md:px-8 pb-6 md:pb-8 ${
                      highContrastMode ? 'border-t border-gray-700' : 'border-t border-gray-100'
                    }`}
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p 
                      className={`text-lg leading-relaxed ${
                        highContrastMode ? 'text-white' : 'text-gray-700'
                      }`}
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Questions CTA */}
          <div className={`text-center p-8 md:p-12 rounded-2xl ${
            highContrastMode 
              ? 'bg-gray-900 border-2 border-white' 
              : 'bg-blue-600 text-white'
          }`}>
            <MessageCircle className={`mx-auto mb-4 ${
              highContrastMode ? 'text-yellow-400' : 'text-white'
            }`} size={48} />
            
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${
              highContrastMode ? 'text-white' : 'text-white'
            }`}>
              Have More Questions?
            </h3>
            
            <p className={`text-lg mb-6 max-w-2xl mx-auto ${
              highContrastMode ? 'text-white' : 'text-blue-100'
            }`}>
              Every accessibility need is unique. Call us for personalized answers about your specific situation in Buffalo or Western New York.
            </p>

            <div className="space-y-4">
              <p className={`text-xl font-semibold ${
                highContrastMode ? 'text-yellow-400' : 'text-white'
              }`}>
                Free consultations • No obligation • Expert advice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;