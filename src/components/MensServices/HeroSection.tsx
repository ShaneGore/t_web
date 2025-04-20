import React from 'react';
import { ArrowRight, Play, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/images/hero-lab.png';


const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#1E3D59]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full text-white text-sm font-medium mb-4">
              <span>WELL MAN</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Expert TRT Treatment, <br />
              <span className="text-blue-200">Focused on You</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Personalized testosterone therapy designed around your health
              goals. Start with an easy online assessment.
            </p>
            <div className="space-y-4 md:space-y-0 md:flex md:space-x-4">
              <Link
                to="/contact"
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
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">Licensed Providers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">Personalized Care Plans</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">EMA-Approved</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt="Patient"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img
                    src="https://images.pexels.com/photos/7477748/pexels-photo-7477748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Patient"
                    className="w-10 h-10 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://images.pexels.com/photos/6670973/pexels-photo-6670973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
  );
};

export default HeroSection;