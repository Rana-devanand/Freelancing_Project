import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <NavLink to="/">BrandLogo</NavLink>
        </div>

        {/* Hamburger Menu */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Links */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:space-x-6 absolute md:static top-16 left-0 w-full bg-blue-600 md:w-auto md:bg-transparent z-10`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block md:inline-block px-4 py-2 text-white ${
                isActive ? 'bg-blue-800 rounded-md' : 'hover:bg-blue-700'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block md:inline-block px-4 py-2 text-white ${
                isActive ? 'bg-blue-800 rounded-md' : 'hover:bg-blue-700'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `block md:inline-block px-4 py-2 text-white ${
                isActive ? 'bg-blue-800 rounded-md' : 'hover:bg-blue-700'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block md:inline-block px-4 py-2 text-white ${
                isActive ? 'bg-blue-800 rounded-md' : 'hover:bg-blue-700'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
