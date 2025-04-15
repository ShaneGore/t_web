import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, ArrowRight, Award, Users, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-indigo-900">TRT Clinic</Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-indigo-900">About</Link>
              <Link to="/#how-it-works" className="text-gray-700 hover:text-indigo-900">How It Works</Link>
              <Link to="/#treatment" className="text-gray-700 hover:text-indigo-900">Treatment</Link>
              <Link to="/contact" className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition">
                Start Your Journey
              </Link>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Revolutionizing Men's Health Through Technology
            </h1>
            <p className="text-xl text-gray-600">
              We're on a mission to make hormone optimization accessible, convenient, and personalized for every man who needs it.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in medical care and patient service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Making hormone therapy accessible through telemedicine and technology.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Patient-Centered</h3>
              <p className="text-gray-600">
                Your health and well-being are at the center of everything we do.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Safety</h3>
              <p className="text-gray-600">
                Following strict medical protocols and FDA guidelines for your safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Medical Team</h2>
            <p className="text-xl text-gray-600">
              Led by board-certified physicians specializing in hormone optimization and men's health.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3"
                alt="Doctor"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dr. Michael Thompson</h3>
              <p className="text-gray-600 mb-4">Medical Director</p>
              <p className="text-gray-600">
                Board-certified in Endocrinology with 15+ years of experience in hormone therapy.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3"
                alt="Doctor"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dr. Sarah Martinez</h3>
              <p className="text-gray-600 mb-4">Clinical Research Director</p>
              <p className="text-gray-600">
                Specializing in hormone optimization and preventive medicine.
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3"
                alt="Doctor"
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Dr. James Wilson</h3>
              <p className="text-gray-600 mb-4">Patient Care Coordinator</p>
              <p className="text-gray-600">
                Expert in telemedicine and personalized treatment protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards optimizing your health with our expert medical team.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-indigo-900 px-8 py-4 rounded-full hover:bg-indigo-50 transition"
          >
            Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}