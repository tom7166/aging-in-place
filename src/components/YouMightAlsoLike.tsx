import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, ArrowRight } from 'lucide-react';

interface SuggestedPage {
  title: string;
  description: string;
  link: string;
}

interface YouMightAlsoLikeProps {
  suggestions: SuggestedPage[];
}

const YouMightAlsoLike: React.FC<YouMightAlsoLikeProps> = ({ suggestions }) => {
  return (
    <section className="bg-blue-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-8">
          <Lightbulb className="w-8 h-8 text-blue-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">
            You Might Also Be Interested In
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {suggestion.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {suggestion.description}
              </p>
              <Link
                to={suggestion.link}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
              >
                Explore <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouMightAlsoLike;
