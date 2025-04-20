import React from 'react';
import { Activity, LineChart } from 'lucide-react';

const TrackingSection = () => {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white"
      id="treatment"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Personalized Treatment Tracking
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Monitor your progress and optimize your treatment with our advanced tracking system.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 hover:transform hover:scale-105 transition duration-300">
                <div className="flex-shrink-0">
                  <Activity className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Track Your Progress
                  </h3>
                  <p className="text-gray-600">
                    Monitor your testosterone levels, symptoms, and overall well-being.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 hover:transform hover:scale-105 transition duration-300">
                <div className="flex-shrink-0">
                  <LineChart className="h-6 w-6 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Data-Driven Insights
                  </h3>
                  <p className="text-gray-600">
                    Get personalized recommendations based on your progress and treatment response.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative order-1 md:order-2">
            <div className="relative mx-auto w-64 h-96 bg-gray-900 rounded-3xl border-8 border-gray-900 shadow-xl">
              {/* iPhone Notch */}
              <div className="absolute top-0 inset-x-0 h-6 bg-gray-900 rounded-b-3xl"></div>
              {/* Screen Content */}
              <div className="relative h-full w-full bg-white rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5699434/pexels-photo-5699434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
  );
};

export default TrackingSection;