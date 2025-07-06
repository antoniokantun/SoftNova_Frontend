import React from 'react';
// import { useScroll, useTransform } from 'framer-motion';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import StatsSection from './components/sections/StatsSection';
import ServicesSection from './components/sections/ServicesSection';
import TechnologiesSection from './components/sections/TechnologiesSection';
import ProcessSection from './components/sections/ProcessSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import BlogSection from './components/sections/BlogSection';
import ContactSection from './components/sections/ContactSection';



// Constants
import { colors } from './constants/colors';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50" style={{ 
      background: `linear-gradient(135deg, ${colors.mint} 0%, ${colors.lightGreen} 100%)` 
    }}>
      <Navbar />
      
      
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <TechnologiesSection />
        <ProcessSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;