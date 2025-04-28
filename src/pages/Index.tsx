
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ResumeSection from '@/components/sections/ResumeSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ContactSection from '@/components/sections/ContactSection';

const Index = () => {
  // Intersection Observer setup for reveal animations
  useEffect(() => {
    const setupRevealAnimations = () => {
      const allRevealElements = document.querySelectorAll('.reveal');
      
      const revealElementOnScroll = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        },
        { threshold: 0.1 }
      );
      
      allRevealElements.forEach((el) => {
        revealElementOnScroll.observe(el);
      });
      
      return revealElementOnScroll;
    };
    
    const observer = setupRevealAnimations();
    
    // Clean up the observer when component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ResumeSection />
        <SkillsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
