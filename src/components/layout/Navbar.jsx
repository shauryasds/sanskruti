import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav
  className="bg-primary shadow-md"
  
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
          <Link 
        to="/" 
        className="flex items-center space-x-2 group"
      >
        <div className="p-2 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
          <img 
            src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg" 
            alt="Logo" 
            className="h-6 w-6 text-accent transition-transform group-hover:scale-110" 
          />
        </div>
        <span className="text-2xl font-bold text-gray-900 group-hover:text-accent transition-colors">
          Sanskruti
          <span className="text-accent">.</span>
        </span>
      </Link>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center ">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-gray-700 hover:text-accent transition-colors ${
                  location.pathname === link.path ? 'text-accent font-medium' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
              
              
           
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-accent"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.path
                    ? 'text-accent bg-accent bg-opacity-10'
                    : 'text-gray-700 hover:text-accent hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {/* <a
              href="https://wa.me/919886332684"
              className="block px-3 py-2 btn-primary text-center mt-4"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
            >
              Book Consultation
            </a> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;