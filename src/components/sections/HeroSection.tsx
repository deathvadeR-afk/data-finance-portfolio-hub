
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = entry.target.querySelectorAll('.reveal');
          if (entry.isIntersecting) {
            elements.forEach((el) => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);
  
  return (
    <section id="hero" className="min-h-screen flex items-center relative" ref={heroRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-900 z-[-1]"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00bS0xNiAwYzAtMi4yIDEuOC00IDQtNHM0IDEuOCA0IDQtMS44IDQtNCA0LTQtMS44LTQtNG0tMTYgMGMwLTIuMiAxLjgtNCA0LTRzNCAxLjggNCA0LTEuOCA0LTQgNC00LTEuOC00LTQiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] z-[-1]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/2">
            <p className="text-gold-400 font-semibold mb-4 reveal">Hello, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 reveal stagger-1">
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl text-navy-100 mb-6 reveal stagger-2">
              Data Scientist & Financial Analyst
            </h2>
            <p className="text-navy-200 text-lg mb-8 max-w-xl reveal stagger-3">
              I combine data science with financial expertise to deliver actionable insights 
              and build powerful analytical solutions for complex problems.
            </p>
            <div className="flex flex-wrap gap-4 reveal stagger-4">
              <Button size="lg" className="rounded-md bg-primary hover:bg-primary/90">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-md text-white border-white hover:bg-white/10">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary to-gold-500 p-1 reveal stagger-3">
              <div className="absolute inset-0 rounded-full overflow-hidden bg-navy-800">
                {/* This would be a profile picture */}
                <div className="w-full h-full bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center text-white text-6xl font-bold">
                  JD
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-white" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
