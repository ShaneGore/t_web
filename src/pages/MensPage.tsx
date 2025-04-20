import React from 'react';
import Navbar from '../components/MensServices/Navbar';
import HeroSection from '../components/MensServices/HeroSection';
import HowItWorksSection from '../components/MensServices/HowItWorksSection';
import TrackingSection from '../components/MensServices/TrackingSection';
import BenefitsSection from '../components/MensServices/BenefitsSection';
import CrossPromotionSection from '../components/MensServices/CrossPromotionSection';
import Footer from '../components/MensServices/Footer';

// Images would typically be imported from assets folder
// Using placeholder URLs for now
const heroImage = "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
const workoutImage = "https://images.pexels.com/photos/4720236/pexels-photo-4720236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function MensPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection heroImage={heroImage} />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Personalized Tracking Section */}
      <TrackingSection />

      {/* Treatment Benefits Section */}
      <BenefitsSection workoutImage={workoutImage} />

      {/* Cross-promotion Section */}
      <CrossPromotionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MensPage;