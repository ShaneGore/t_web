import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, HeartPulse, ArrowLeftRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <HeartPulse className={`w-8 h-8 ${isScrolled ? 'text-teal-600' : 'text-white'}`} />
            <span className={`ml-2 font-medium text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              ReVive Health
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`${
                isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-100'
              } transition-colors duration-300`}
            >
              About
            </Link>
            <a
                href="#how-it-works"
                className={`${isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-100'
                } transition-colors duration-300`}
            >
              How It Works
            </a>

            <div className="pl-2 border-l border-gray-200">
              <Link
                to="/men" 
                className={`px-4 py-2 rounded-full border border-teal-200 transition font-medium flex items-center ${
                  isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-100'
                }`}
              >
                <ArrowLeftRight className="h-4 w-4 mr-2" />
                Switch to Men's Services
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              to="/womenscontact"
              className={`inline-flex items-center justify-center px-5 py-2 rounded-full ${
                isScrolled
                  ? 'bg-teal-500 text-white hover:bg-teal-600'
                  : 'bg-white text-teal-700 hover:bg-teal-50'
              } font-medium transition-all hover:shadow-lg`}
            >
              Start Your Journey
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className={isScrolled ? 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Women's Services
              </Link>
              <Link 
                to="/mens-services" 
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Men's Services
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="#treatment-tracking" // Adjust this to the ID of the section if necessary
                className={`${isScrolled ? 'text-gray-700 hover:text-teal-600' : 'text-white hover:text-teal-100'
                  } transition-colors duration-300`}
              >
                How It Works
              </Link>
              <Link
                to="#consultation"
                className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-teal-500 text-white hover:bg-teal-600 font-medium transition-all hover:shadow-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Your Journey
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
