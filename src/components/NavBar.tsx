import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Test - Simple visible button */}
      <div className="fixed top-4 right-4 z-50 bg-red-500 text-white p-4 rounded">
        TEST - Can you see this?
      </div>
      
      {/* Floating Hamburger Button */}
      <button
        className="fixed top-16 right-4 z-50 p-4 rounded-full bg-green-700 text-white shadow-lg"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Simple Menu */}
      {menuOpen && (
        <div className="fixed top-32 right-4 z-50 w-64 bg-green-700 text-white p-4 rounded shadow-lg">
          <ul className="space-y-2">
            <li className="p-2 hover:bg-green-600 rounded">Services</li>
            <li className="p-2 hover:bg-green-600 rounded">About</li>
            <li className="p-2 hover:bg-green-600 rounded">Contact</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default nav;
