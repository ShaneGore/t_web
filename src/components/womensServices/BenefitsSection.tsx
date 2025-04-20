import React from 'react';
import { Link } from 'react-router-dom';

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative">
              <div className="absolute -left-4 -top-4 w-48 h-48 bg-teal-100 rounded-full opacity-50"></div>
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-coral-100 rounded-full opacity-50"></div>
              <img
                src="https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg"
                alt="Woman feeling energetic and happy"
                className="relative rounded-2xl shadow-lg w-full max-w-md mx-auto z-10"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
              Benefits of Hormone Therapy for Women
            </h2>
            <p className="text-gray-600 mb-8">
              Our personalized hormone therapy helps women of all ages reclaim their vitality,
              emotional balance, and quality of life by addressing the root causes of hormonal imbalance.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 text-teal-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Renewed Energy & Vitality
                  </h3>
                  <p className="text-gray-600">
                    Experience improved physical energy, better sleep quality, and enhanced mental clarity 
                    throughout your day, helping you engage fully in all aspects of your life.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 text-teal-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Emotional Balance
                  </h3>
                  <p className="text-gray-600">
                    Stabilize mood swings, reduce anxiety, and relieve depression by restoring 
                    optimal hormone levels, helping you feel more emotionally resilient and centered.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 text-teal-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l4-4m0 0l4 4m-4-4v18"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Enhanced Body Composition
                  </h3>
                  <p className="text-gray-600">
                    Support healthy weight management, improve muscle tone, and reduce stubborn fat 
                    deposits by restoring hormonal balance that regulates metabolism and energy usage.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 text-teal-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Better Cognitive Function
                  </h3>
                  <p className="text-gray-600">
                    Improve memory, focus, and mental clarity while reducing brain fog and cognitive 
                    decline associated with hormonal changes and aging.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-100 text-teal-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Reduced Menopausal Symptoms
                  </h3>
                  <p className="text-gray-600">
                    Alleviate hot flashes, night sweats, insomnia, and other uncomfortable 
                    symptoms of perimenopause and menopause for greater comfort and well-being.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <Link
                to="/womenscontact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-teal-500 text-white font-medium transition-all hover:bg-teal-600 hover:shadow-lg">
                Experience the Benefits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;