import React from 'react';
import HeroSection from '../components/womensServices/HeroSection';
import TreatmentProcess from '../components/womensServices/TreatmentProcess';
import TreatmentTracking from '../components/womensServices/TreatmentTracking';
import BenefitsSection from '../components/womensServices/BenefitsSection';
import Testimonials from '../components/womensServices/Testimonials';
import FaqSection from '../components/womensServices/FaqSection';
import CallToAction from '../components/shared/CallToAction';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';




const WomensServices: React.FC = () => {
  return (
    <main className="overflow-hidden">

      <Navbar />
      <HeroSection />
      <TreatmentProcess />
      <TreatmentTracking />
      <BenefitsSection />
      <Testimonials />
      <FaqSection />
      <div className="py-16 bg-teal-50">
        <CallToAction 
          title="Ready to start your journey to hormonal balance?" 
          buttonText="Book Your Consultation" 
          linkTo="#consultation" 
        />
      </div>
      <Footer/>
    </main>
  );
};

export default WomensServices;