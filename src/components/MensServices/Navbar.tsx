import React, { useState, useEffect } from 'react';
import { HeartPulse, ArrowLeftRight, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md' : 'bg-[#1E3D59]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <HeartPulse className={`h-8 w-8 transition-colors duration-300 ${
                scrolled ? 'text-[#1E3D59]' : 'text-white'
              }`} />
              <span className={`text-2xl font-extrabold tracking-wide transition-colors duration-300 ${
                scrolled ? 'text-[#1E3D59]' : 'text-white'
              }`}>
                ReVive Health
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link
                to="/about"
                className={`font-medium transition duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-[#1E3D59]' : 'text-blue-100 hover:text-white'
                }`}
              >
                About
              </Link>
              <a
                href="#how-it-works"
                className={`font-medium transition duration-300 ${
                  scrolled ? 'text-gray-700 hover:text-[#1E3D59]' : 'text-blue-100 hover:text-white'
                }`}
              >
                How It Works
              </a>
            </div>

            <div className="pl-2 border-l border-gray-200">
              <Link
                to="/women"
                className="text-teal-600 hover:text-teal-700 px-4 py-2 rounded-full border border-teal-200 transition font-medium flex items-center"
              >
                <ArrowLeftRight className="h-4 w-4 mr-2" />
                Switch to Women's Services
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className={`px-6 py-2 rounded-full transition duration-300 font-medium ${
                scrolled 
                  ? 'bg-[#1E3D59] text-white hover:bg-[#2a5580]' 
                  : 'bg-white text-[#1E3D59] hover:bg-blue-50'
              }`}
            >
              Start Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`p-2 rounded-md transition duration-300 ${
                scrolled 
                  ? 'hover:bg-gray-100 text-gray-700' 
                  : 'hover:bg-white/10 text-white'
              }`}
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;