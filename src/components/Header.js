import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
function Header() {
 const [isOpen, setIsOpen] = useState(false);

 return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <Link to={'/'} className="flex items-center py-5 px-2">
                <span className="font-extrabold text-gray-900 text-xl">Furniture Shop</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Link to={'/'} className="py-5 px-3 text-gray-700 text-sm">Home</Link>
              <Link to={'/'} className="py-5 px-3 text-gray-700 text-sm">Shop</Link>
              <Link to={'/'} className="py-5 px-3 text-gray-700 text-sm">About</Link>
              <Link to={'/'} className="py-5 px-3 text-gray-700 text-sm">Contact</Link>
              <Link to={'/auth/login'} className="py-5 px-3 text-gray-700 text-sm">Login</Link>

            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-button">
              {isOpen ? <RxCross1 className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to={'/'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">Home</Link>
              <Link to={'/'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">Shop</Link>
              <Link to={'/'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">About</Link>
              <Link to={'/'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">Contact</Link>
              <Link to={'/auth/login'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
 );
}

export default Header;
