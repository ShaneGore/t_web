import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Mail, Phone, MapPin, HeartPulse } from 'lucide-react';
import Footer from '../components/womensServices/Footer';

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
                <HeartPulse className="h-8 w-8 text-teal-600" />
                <span className="text-2xl font-extrabold tracking-wide text-teal-800">
                  ReVive Health
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/about"
                className="text-gray-700 hover:text-teal-700 font-medium"
              >
                About
              </Link>
              <a
                href="/women#how-it-works"
                className="text-gray-700 hover:text-teal-700 font-medium"
              >
                How It Works
              </a>
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
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl font-bold text-teal-800 mb-6">
                Get In Touch
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and a member of our care team will reach out to you about your personalized wellness plan.
              </p>
              <div className="space-y-6 mb-10">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-600">1-800-TRT-HELP</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-teal-600" />
                  <span className="text-gray-600">contact@trtclinic.com</span>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                  <span className="text-gray-600">
                    Brandon, Dublin Road, Ashbourne, <br />
                    Co. Meath, A84 YX33, Ireland
                  </span>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  title="ReVive Health Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.1820562637175!2d-6.400456423237121!3d53.50686707231496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48674f4010dc3de7%3A0xa66f63c61e7c1c5a!2sBrandon%2C%20Dublin%20Road%2C%20Ashbourne%2C%20Co.%20Meath%2C%20A84%20YX33%2C%20Ireland!5e0!3m2!1sen!2sus!4v1713438202482!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  allowFullScreen
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                {/* Anti-Bot CAPTCHA Placeholder */}
                <div className="pt-2">
                  <div className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-500 text-center">
                    [ CAPTCHA - reCAPTCHA or equivalent goes here ]
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>

  );

}
