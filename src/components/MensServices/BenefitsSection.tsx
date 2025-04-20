import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BenefitsSectionProps {
  workoutImage: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ workoutImage }) => {
  const benefits = [
    {
      title: "Increased Energy & Vitality",
      description: "Experience improved energy levels and reduced fatigue throughout your day."
    },
    {
      title: "Enhanced Muscle Mass",
      description: "Build and maintain lean muscle mass more effectively with proper hormone levels."
    },
    {
      title: "Improved Mood",
      description: "Experience better mental clarity and emotional well-being."
    },
    {
      title: "Revitalized Libido & Sexual Health",
      description: "Rediscover a healthy sex drive and improved sexual performance with balanced testosterone levels."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits of TRT Treatment
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group hover:transform hover:scale-105 transition duration-300">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link
              to="/contact"
              className="mt-8 bg-[#1E3D59] text-white hover:bg-[#2a5580]'  px-8 py-4 rounded-full hover:bg-[#2a5580] transition duration-300 flex items-center inline-flex group"
            >
              Start Your Journey <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={workoutImage}
              alt="Middle-aged man exercising at the gym"
              className="rounded-2xl shadow-xl transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;