import React from 'react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title: string;
  buttonText: string;
  linkTo: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ title, buttonText, linkTo }) => {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all hover:shadow-2xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-teal-600/30 z-0"></div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,1000 C300,900 400,800 500,750 C600,700 700,600 1000,550 L1000,1000 L0,1000 Z" fill="#0D9488"></path>
              <path d="M0,800 C200,750 300,700 400,680 C500,650 600,600 1000,550 L1000,800 L0,800 Z" fill="#0D9488" opacity="0.5"></path>
            </svg>
          </div>
          
          <div className="py-16 px-8 md:px-16 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-gray-900 mb-6 max-w-3xl mx-auto">
              {title}
            </h2>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              
              <Link
                 to="/wommenscontact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-teal-500 text-white font-medium transition-all hover:bg-teal-600 hover:shadow-lg"
              >
                {buttonText}
              </Link>
           
            </div>
            
            <div className="mt-8 flex items-center justify-center">
              <div className="flex -space-x-2">
                <img src="https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" />
                <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80" alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" />
              </div>
              
              <div className="ml-4 text-sm text-gray-600">
              Building trusted relationships, one patient at a time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;