import React from 'react';
import { LineChart, Clock, BarChart3 } from 'lucide-react';

const TreatmentTracking: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6">
              Personalized Treatment Tracking
            </h2>
            <p className="text-gray-600 mb-10">
              Monitor your progress and optimize your treatment with our
              advanced tracking system. Our intuitive tools help you stay
              connected to your body's changing needs and allow your provider
              to make real-time adjustments for optimal results.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-teal-100 rounded-full text-teal-600">
                  <LineChart size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Track Your Progress</h3>
                  <p className="text-gray-600">
                    Monitor your hormone levels, symptoms, and overall wellbeing with intuitive
                    charts and personalized insights.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-teal-100 rounded-full text-teal-600">
                  <Clock size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Timely Reminders</h3>
                  <p className="text-gray-600">
                    Never miss a dose with our smart notification system that adapts to your 
                    schedule and treatment plan.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-teal-100 rounded-full text-teal-600">
                  <BarChart3 size={24} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
                  <p className="text-gray-600">
                    Get personalized recommendations based on your progress data, helping
                    you and your provider make informed decisions about your care.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="rounded-2xl bg-white shadow-xl p-2 max-w-md mx-auto transform transition-transform hover:scale-105 duration-300">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg" 
                  alt="Woman reviewing health data on tablet" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900">Your Progress</h4>
                    <p className="text-sm text-gray-500">Last updated: Today</p>
                  </div>
                  <div className="bg-teal-100 text-teal-600 px-3 py-1 rounded-full text-sm font-medium">
                    On Track
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">Energy Levels</span>
                      <span className="text-teal-600">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">Mood Stability</span>
                      <span className="text-teal-600">82%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-gray-700">Sleep Quality</span>
                      <span className="text-teal-600">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">Next Check-in:</div>
                    <div className="text-sm font-medium text-gray-900">May 15, 2025</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-teal-100 rounded-lg p-4 shadow-lg max-w-xs hidden md:block">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white p-2 rounded-full">
                  <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-teal-800">
                    "Your hormones are balancing nicely! Consider adding 20 minutes of yoga to your morning routine."
                  </p>
                  <p className="text-xs text-teal-600 mt-1">
                    — Dr. Sarah, Your Provider
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

export default TreatmentTracking;