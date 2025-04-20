import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      quote: "After struggling with fatigue and mood swings for years, RevVive's hormone therapy transformed my daily life. I have more energy, better sleep, and finally feel like myself again.",
      name: "Jennifer L.",
      age: 48,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    },
    {
      id: 2,
      quote: "The personalized approach made all the difference. My provider took the time to understand my symptoms and created a tailored plan that addressed my specific hormonal imbalances.",
      name: "Michelle K.",
      age: 52,
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    },
    {
      id: 3,
      quote: "As a busy professional in my 30s, I didn't realize hormones were behind my anxiety and sleep issues. RevVive's treatment not only helped my symptoms but improved my overall quality of life.",
      name: "Sarah T.",
      age: 36,
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-teal-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-4">
            Hear From Our Community
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real women sharing their experiences with our hormone therapy services and how it has transformed their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-teal-100"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">Age {testimonial.age}</p>
                </div>
              </div>

              <div className="mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>

              <blockquote className="italic text-gray-700 mb-6">"{testimonial.quote}"</blockquote>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-sm text-teal-600 font-medium">RevVive Women's Services Client</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-teal-600 rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-12">
              <h3 className="text-2xl font-semibold text-white mb-4">Start Your Transformation Today</h3>
              <p className="text-teal-50 mb-8">
                Join thousands of women who have reclaimed their energy, mood, and quality of life through personalized hormone therapy.
              </p>
              <Link
                to="/womenscontact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-teal-700 font-medium transition-all hover:bg-teal-50 hover:shadow-lg"
              >
                Book Your Consultation
              </Link>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Happy women after hormone therapy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600/80 to-transparent md:from-transparent md:via-transparent md:to-teal-600/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;