import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Award, Users, Heart, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-gray-800">ReVive Health</Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/men" className="text-gray-700 hover:text-indigo-700 font-medium">Male Services</Link>
              <Link to="/women" className="text-gray-700 hover:text-indigo-700 font-medium">Female Services</Link>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-50 via-white to-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Wellness Through Personalized Care
          </h1>
          <p className="text-xl text-gray-600">
            At ReVive Health, we offer a balanced approach to modern hormone therapy and holistic health—tailored to your needs and lifestyle.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Award />, title: 'Excellence', text: 'We maintain the highest standards in care and service.' },
              { icon: <Users />, title: 'Accessibility', text: 'Care that comes to you—anywhere, anytime.' },
              { icon: <Heart />, title: 'Compassion', text: 'Every patient is treated with empathy and respect.' },
              { icon: <Shield />, title: 'Trust & Safety', text: 'Licensed professionals. Clinical-grade care. Peace of mind.' }
            ].map(({ icon, title, text }, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {React.cloneElement(icon, { className: 'h-8 w-8 text-indigo-600' })}
                </div>
                <h3 className="text-xl font-semibold mb-4">{title}</h3>
                <p className="text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Our Clinical Experts</h2>
            <p className="text-xl text-gray-600">
              Our licensed professionals specialize in hormone balance, longevity medicine, and preventative health.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'Dr. Michael Thompson',
                title: 'Medical Director',
                desc: 'Endocrinology expert with 15+ years of clinical leadership.',
                image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3'
              },
              {
                name: 'Dr. Sarah Martinez',
                title: 'Clinical Research Director',
                desc: 'Leading evidence-based protocols and innovation in hormone therapy.',
                image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-4.0.3'
              },
              {
                name: 'Dr. James Wilson',
                title: 'Patient Experience Coordinator',
                desc: 'Focused on delivering compassionate, effective telehealth care.',
                image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3'
              }
            ].map((doc, i) => (
              <div key={i} className="text-center">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{doc.name}</h3>
                <p className="text-gray-600 mb-2">{doc.title}</p>
                <p className="text-gray-600">{doc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Section (Neutral, Stylish Ending) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-neutral-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
            Care That Evolves With You
          </h2>
          <p className="text-lg text-gray-600">
            Wherever you are in your health journey, ReVive Health is here with expert guidance and tailored support. Our focus is simple—empower you to feel your best every day.
          </p>
        </div>
      </section>
    </div>
  );
}
