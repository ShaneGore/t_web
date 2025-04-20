import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CrossPromotionSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">
          Looking for women's health services?
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          ReVive Health also offers specialized healthcare services for women.
        </p>
        <Link
          to="/women"
          className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition duration-300 inline-flex items-center group"
        >
          Explore Women's Services <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
};

export default CrossPromotionSection;