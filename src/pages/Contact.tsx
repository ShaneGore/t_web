import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Menu,
  Mail,
  Phone,
  MapPin,
  HeartPulse,
  Dumbbell,
} from 'lucide-react';

export default function MensContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    adamAnswers: Array(10).fill(false),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (index) => {
    const updated = [...formData.adamAnswers];
    updated[index] = !updated[index];
    setFormData({ ...formData, adamAnswers: updated });
  };

  const calculateAdamScore = () => {
    const yesCount = formData.adamAnswers.filter(Boolean).length;
    const suggestive = formData.adamAnswers[0] || formData.adamAnswers[6] || yesCount > 3;
    return { score: yesCount, suggestive };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const adamScore = calculateAdamScore();
    // Placeholder for submission logic with adamScore
    alert(`Form submitted. ADAM Score: ${adamScore.score}. Suggestive of low T: ${adamScore.suggestive}`);
  };

  const adamQuestions = [
    'Do you have a decrease in libido (sex drive)?',
    'Do you have a lack of energy?',
    'Do you have a decrease in strength and/or endurance?',
    'Have you lost height?',
    'Have you noticed a decreased "enjoyment of life"?',
    'Are you sad and/or grumpy?',
    'Are your erections less strong?',
    'Have you noticed a recent deterioration in your ability to play sports?',
    'Are you falling asleep after dinner?',
    'Has there been a recent deterioration in your work performance?',
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white shadow-md fixed w-full z-50 top-0 left-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <HeartPulse className="h-8 w-8 text-blue-900" />
                <span className="text-2xl font-extrabold tracking-wide text-blue-900">
                  ReVive Health
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="text-gray-700 hover:text-blue-900 font-medium">
                About
              </Link>
              <a href="/men#how-it-works" className="text-gray-700 hover:text-blue-900 font-medium">
                How It Works
              </a>
            </div>
            <div className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h1>
              <p className="text-xl text-gray-600 mb-8">
                Fill out the form below and our team will get back to you to discuss your personalized men's health plan.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-blue-800" />
                  <span className="text-gray-600">1-800-TRT-HELP</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-blue-800" />
                  <span className="text-gray-600">contact@trtclinic.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-blue-800" />
                  <span className="text-gray-600">
                    Brandon, Dublin Road, Ashbourne, Co. Meath, A84 YX33, Ireland
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <iframe
                  title="clinic-location"
                  src="https://www.google.com/maps?q=Brandon,+Dublin+Road,+Ashbourne,+Co.+Meath,+Ireland&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="name" placeholder="Full Name" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" onChange={handleChange} />
                <input type="tel" name="phone" placeholder="Phone" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" onChange={handleChange} />
                <textarea name="message" rows={4} placeholder="Message" required className="w-full px-4 py-2 border border-gray-300 rounded-lg" onChange={handleChange}></textarea>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">ADAM Questionnaire</h3>
                  {adamQuestions.map((question, index) => (
                    <label key={index} className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.adamAnswers[index]}
                        onChange={() => handleCheckbox(index)}
                        className="form-checkbox text-blue-800"
                      />
                      <span className="text-gray-700 text-sm">{question}</span>
                    </label>
                  ))}
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded text-sm text-gray-600">
                  Your responses help us assess possible symptoms of low testosterone. This is not a diagnosis.
                </div>
                <div className="bg-gray-50 border border-gray-300 rounded px-4 py-2 text-sm text-gray-500">
                  Placeholder for reCAPTCHA
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-900 transition"
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