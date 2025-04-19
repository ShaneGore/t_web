import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Mail, Phone, MapPin, ArrowLeftRight, HeartPulse } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
 {/* Navigation */}
 <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <HeartPulse className="h-8 w-8 text-blue-800" />
                <span className="text-2xl font-extrabold tracking-wide text-blue-900">
                  ReVive Health
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                <Link
                  to="/about"
                  className="text-gray-700 hover:text-blue-900 font-medium"
                >
                  About
                </Link>
                <a
                  href="#how-it-works"
                  className="text-gray-700 hover:text-blue-900 font-medium"
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
                className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 transition font-medium"
              >
                Start Your Journey
              </Link>
            </div>

            <div className="md:hidden">
              <button
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Open Menu"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Open Menu"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </nav>


      {/* Contact Form Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Start Your Journey Today</h1>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and one of our medical professionals will contact you to discuss your personalized treatment plan.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-600">1-800-TRT-HELP</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-600">contact@trtclinic.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                  <span className="text-gray-600">123 Medical Center Drive, Suite 100<br />Los Angeles, CA 90001</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}