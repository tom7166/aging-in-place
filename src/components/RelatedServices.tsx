import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export interface RelatedService {
  title: string;
  description: string;
  link: string;
  icon?: React.ReactNode;
}

interface RelatedServicesProps {
  services: RelatedService[];
  title?: string;
}

const RelatedServices: React.FC<RelatedServicesProps> = ({
  services,
  title = "Related Services"
}) => {
  return (
    <section className="bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6 group"
            >
              {service.icon && (
                <div className="mb-4 flex justify-center">
                  {service.icon}
                </div>
              )}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
