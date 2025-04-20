import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Heart, Activity, ChevronRight, HeartPulse } from 'lucide-react';
import MensPage from './pages/MensPage.tsx';
import WomensPage from './pages/WomensPage';
import About from './pages/About';
import Contact from './pages/Contact';
import WomenImage from './assets/images/women_laughing.jpg';
import WomensContact from './pages/WomensContact.tsx';


function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<SplitLanding />} />
        <Route path="/women" element={<WomensPage />} />
        <Route path="/men" element={<MensPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/womenscontact" element={<WomensContact />} />

      </Routes>
    </BrowserRouter>
  );
}

function SplitLanding() {
  const navigate = useNavigate();
  const [hoveredSide, setHoveredSide] = useState<'women' | 'men' | null>(null);

  return (
    <div className="min-h-screen relative">
      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-4">
        <div className="w-full">
          <div className="flex justify-start h-20 items-center">
            <Link to="/" className="flex items-center space-x-2 text-white">
              <HeartPulse className="h-8 w-8 text-white" />
              <span className="text-3xl font-extrabold tracking-wide">ReVive Health</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Split Screen */}
      <div className="flex flex-col md:flex-row h-screen">
        {/* Women's Side */}
        <div
          role="button"
          tabIndex={0}
          className={`relative flex-1 transition-opacity duration-500 ${
            hoveredSide === "men" ? "opacity-60" : "opacity-100"
          }`}
          onMouseEnter={() => setHoveredSide("women")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => navigate("/women")}
        >
          <div className="absolute inset-0 bg-[#2A9D8F] opacity-90 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${WomenImage})` }}
          ></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white p-8 z-20 animate-fade-in">
            <Heart
              className={`h-16 w-16 mb-6 transition-transform duration-500 ${
                hoveredSide === "women" ? "scale-125" : "scale-100"
              }`}
            />
            <h2
              className={`text-5xl font-bold mb-4 text-center transition-transform duration-500 ${
                hoveredSide === "women" ? "scale-110" : ""
              }`}
            >
              WELL WOMAN
            </h2>
            <p className="text-xl mb-8 text-center max-w-md">
              Comprehensive care for women's health and wellness
            </p>
            <button className="group bg-white text-teal-700 px-8 py-3 rounded-full flex items-center hover:bg-opacity-90 transition">
              EXPLORE WOMEN'S SERVICES
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Center Icon */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <div className="bg-white rounded-full p-6 shadow-2xl">
            <Activity className="h-12 w-12 text-indigo-900" />
          </div>
        </div>

        {/* Men's Side */}
        <div
          role="button"
          tabIndex={0}
          className={`relative flex-1 transition-opacity duration-500 ${
            hoveredSide === "women" ? "opacity-60" : "opacity-100"
          }`}
          onMouseEnter={() => setHoveredSide("men")}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => navigate("/men")}
        >
          <div className="absolute inset-0 bg-[#1E3D59] opacity-90 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
            }}
          ></div>
          <div className="relative h-full flex flex-col items-center justify-center text-white p-8 z-20 animate-fade-in">
            <Activity
              className={`h-16 w-16 mb-6 transition-transform duration-500 ${
                hoveredSide === "men" ? "scale-125" : "scale-100"
              }`}
            />
            <h2
              className={`text-5xl font-bold mb-4 text-center transition-transform duration-500 ${
                hoveredSide === "men" ? "scale-110" : ""
              }`}
            >
              WELL MAN
            </h2>
            <p className="text-xl mb-8 text-center max-w-md">
              Specialized healthcare tailored for men's needs
            </p>
            <button className="group bg-white text-indigo-900 px-8 py-3 rounded-full flex items-center hover:bg-opacity-90 transition">
              EXPLORE MEN'S SERVICES
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
