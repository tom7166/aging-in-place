import React from 'react';
import { Link } from 'react-router-dom';

interface ContextualLinksProps {
  links: Array<{
    text: string;
    url: string;
    className?: string;
  }>;
}

export const InlineLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
    >
      {children}
    </Link>
  );
};

const ContextualLinks: React.FC<ContextualLinksProps> = ({ links }) => {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
      <p className="text-sm font-semibold text-gray-800 mb-2">Related Resources:</p>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              to={link.url}
              className={link.className || "text-blue-600 hover:text-blue-800 underline text-sm transition-colors"}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContextualLinks;
