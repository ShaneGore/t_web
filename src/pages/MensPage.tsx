import React from 'react';
import { Menu, ChevronRight, Play, Instagram, Facebook, Twitter, CheckCircle, ArrowRight, Star, LineChart, Activity, HeartPulse , ArrowLeftRight} from 'lucide-react';
import heroImage from '../assets/images/hero-lab.png';
import workoutImage from '../assets/images/workout.png';
import {Link} from 'react-router-dom';

function MensPage() {
  return <HomePage />;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white pt-16">
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 px-3 py-1 rounded-full text-blue-800 text-sm font-medium mb-4">
                <span>WELL MAN</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Expert TRT Treatment, <br />
                <span className="text-blue-800">Focused on You</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Personalized testosterone therapy designed around your health
                goals. Start with an easy online assessment.
              </p>
              <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
                <Link
                  to="/contact"
                  className="w-full md:w-auto bg-blue-800 text-white px-8 py-4 rounded-full hover:bg-blue-900 transition flex items-center justify-center"
                >
                  Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <button className="w-full md:w-auto border-2 border-blue-800 text-blue-800 px-8 py-4 rounded-full hover:bg-blue-50 transition flex items-center justify-center">
                  See How It Works <Play className="ml-2 h-5 w-5" />
                </button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Licensed Providers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">Personalized Care Plans</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-600">EMA-Approved</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Medical laboratory with testosterone testing equipment"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3"
                      alt="Patient"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1612349316228-5942a9b489c2?ixlib=rb-4.0.3"
                      alt="Patient"
                      className="w-10 h-10 rounded-full border-2 border-white"
                    />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400" />
                      <Star className="h-4 w-4 text-yellow-400" />
                    </div>
                    <p className="text-sm text-gray-600">
                      Building trusted relationships, one patient at a time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How TRT Treatment Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get the care you need in three simple steps—all with in-person
              support from our expert team.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition">
                <span className="text-2xl font-bold text-blue-800">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Complete Assessment
              </h3>
              <p className="text-gray-600">
                Take our comprehensive online assessment to help us understand
                your symptoms and medical history.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition">
                <span className="text-2xl font-bold text-blue-800">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Meet Your Provider</h3>
              <p className="text-gray-600">
                Connect with a licensed medical provider who will review your
                case and create a personalized treatment plan.
              </p>
            </div>
            <div className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition">
                <span className="text-2xl font-bold text-blue-800">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Start Treatment</h3>
              <p className="text-gray-600">
                Receive your prescribed medication and ongoing support from our
                medical team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Tracking Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
        id="treatment"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Personalized Treatment Tracking
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Monitor your progress and optimize your treatment with our
                advanced tracking system.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Activity className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Track Your Progress
                    </h3>
                    <p className="text-gray-600">
                      Monitor your testosterone levels, symptoms, and overall
                      well-being.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <LineChart className="h-6 w-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Data-Driven Insights
                    </h3>
                    <p className="text-gray-600">
                      Get personalized recommendations based on your progress
                      and treatment response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-3xl border-8 border-gray-900 shadow-xl">
                {/* iPhone Notch */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl"></div>
                {/* Screen Content */}
                <div className="relative h-full w-full bg-white rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3"
                    alt="Treatment tracking dashboard"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with Graph */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-800/20 to-blue-900/40 p-6">
                    <div className="h-full flex flex-col justify-between">
                      <div className="text-white">
                        <h4 className="text-lg font-semibold">Your Progress</h4>
                        <p className="text-sm opacity-80">Last 30 Days</p>
                      </div>
                      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4">
                        <div className="flex items-center justify-between text-white mb-2">
                          <span>Testosterone Levels</span>
                          <span className="text-green-300">+15%</span>
                        </div>
                        <div className="h-32 flex items-end space-x-2">
                          {[40, 45, 42, 50, 55, 60, 58, 65].map((height, i) => (
                            <div
                              key={i}
                              className="flex-1 bg-white/20 rounded-t"
                              style={{ height: `${height}%` }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Benefits of TRT Treatment
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Increased Energy & Vitality
                    </h3>
                    <p className="text-gray-600">
                      Experience improved energy levels and reduced fatigue
                      throughout your day.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Enhanced Muscle Mass
                    </h3>
                    <p className="text-gray-600">
                      Build and maintain lean muscle mass more effectively with
                      proper hormone levels.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group hover:transform hover:scale-105 transition duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Improved Mood
                    </h3>
                    <p className="text-gray-600">
                      Experience better mental clarity and emotional well-being.
                    </p>
                  </div>
                </div>
              </div>
              <Link
                to="/contact"
                className="mt-8 bg-blue-800 text-white px-8 py-4 rounded-full hover:bg-blue-900 transition flex items-center inline-flex"
              >
                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={workoutImage}
                alt="Middle-aged man exercising at the gym"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cross-promotion Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Looking for women's health services?
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            ReVive Health also offers specialized healthcare services for women.
          </p>
          <Link
            to="/women"
            className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition inline-flex items-center"
          >
            Explore Women's Services <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ReVive Health</h3>
              <p className="text-gray-400">
                Leading the way in specialized healthcare through modern medical
                services for men and women.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#careers" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#press" className="text-gray-400 hover:text-white">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#blog" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/revivehealth"
                  className="text-gray-400 hover:text-white"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/revivehealth"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://instagram.com/revivehealth"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 ReVive Health. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default MensPage;