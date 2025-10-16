import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200 py-3 px-6">
      <ol className="flex items-center space-x-2 max-w-7xl mx-auto text-sm">
        <li>
          <Link
            to="/"
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
            {index === items.length - 1 ? (
              <span className="text-gray-700 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.path}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
