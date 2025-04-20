import React from 'react';
import { BookOpen, Check } from 'lucide-react';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-16 pb-20 md:py-24 overflow-hidden bg-gradient-to-r from-teal-500 to-teal-600">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full opacity-10">
          <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,1000 C300,900 400,800 500,750 C600,700 700,600 1000,550 L1000,1000 L0,1000 Z" fill="white"></path>
            <path d="M0,800 C200,750 300,700 400,680 C500,650 600,600 1000,550 L1000,800 L0,800 Z" fill="white" opacity="0.5"></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium mb-6">
              WELL WOMAN
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
              Expert Hormone Therapy, <br />Tailored for Women
            </h1>
            <p className="text-teal-50 text-lg mb-8 max-w-lg">
              Personalized hormone replacement therapy designed around your unique needs, helping you reclaim your vitality, balance, and confidence.
            </p>
            <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
              <Link
                to="/womenscontact"
                className="w-full md:w-auto bg-white text-[#1E3D59] px-8 py-4 rounded-full hover:bg-blue-50 transition duration-300 flex items-center justify-center group"
              >
                Start Your Journey{" "}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="w-full md:w-auto border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition duration-300 flex items-center justify-center group">
                See How It Works{" "}
                <Play className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/7578803/pexels-photo-7578803.jpeg"
                alt="Female doctor consulting with patient"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div className="ml-4">
                  <p className="text-xs text-gray-500 font-medium">Building trusted relationships, one patient at a time.
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex-shrink-0 mr-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Check className="w-5 h-5 text-teal-600" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium">Licensed Physicians</h3>
              <p className="text-teal-100 text-sm">Board-certified specialists in women's health</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex-shrink-0 mr-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Check className="w-5 h-5 text-teal-600" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium">Personalized Care Plans</h3>
              <p className="text-teal-100 text-sm">Tailored to your unique hormonal needs</p>
            </div>
          </div>
          
          <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="flex-shrink-0 mr-4">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <Check className="w-5 h-5 text-teal-600" />
              </div>
            </div>
            <div>
              <h3 className="text-white font-medium">EMA-Approved</h3>
              <p className="text-teal-100 text-sm">Safe, regulated hormone treatments</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;