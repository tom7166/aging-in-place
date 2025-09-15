import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-gray-900 text-white border-t border-gray-700">
      <div className="container mx-auto px-4">
        <p className="text-lg font-semibold mb-2">
          Aaron Michael Services - Buffalo's Trusted ADA Contractor
        </p>
        <p className="text-gray-300 mb-2">
          Building Independence Throughout Buffalo & Western New York Since 2015
        </p>
        <p className="text-gray-400 text-sm">
          Licensed • Insured • Family-Owned • Emergency Services Available
        </p>
        <div className="mt-6 pt-4 border-t border-gray-700 text-gray-400 text-sm">
          © 2025 Aaron Michael Services — 14 Mariemont Ave, Buffalo, NY 14220
        </div>
      </div>
    </footer>
  );
};

export default Footer;
