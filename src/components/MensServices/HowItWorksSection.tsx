import React from 'react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Complete Assessment",
      description: "Take our comprehensive online assessment to help us understand your symptoms and medical history."
    },
    {
      number: 2,
      title: "Meet Your Provider",
      description: "Connect with a licensed medical provider who will review your case and create a personalized treatment plan."
    },
    {
      number: 3,
      title: "Start Treatment",
      description: "Receive your prescribed medication and ongoing support from our medical team."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How TRT Treatment Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get the care you need in three simple steps—all with in-person support from our expert team.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center group hover:transform hover:scale-105 transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition duration-300">
                <span className="text-2xl font-bold text-blue-800">{step.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;