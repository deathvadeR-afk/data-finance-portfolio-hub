
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink } from 'lucide-react';

const AboutSection = () => {
  const aboutRef = useRef<HTMLElement>(null);
  
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="py-20 bg-white dark:bg-navy-800" ref={aboutRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5 lg:w-1/2">
            <div className="relative">
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-navy-100 to-navy-300 dark:from-navy-600 dark:to-navy-800 rounded-lg overflow-hidden reveal">
                {/* This would be a professional photo */}
                <div className="w-full h-full bg-navy-200 dark:bg-navy-700 flex items-center justify-center text-navy-800 dark:text-white text-6xl font-bold">
                  <span className="sr-only">John Doe Portrait</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold-400 rounded-lg reveal stagger-2"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary rounded-lg reveal stagger-3"></div>
            </div>
          </div>
          
          <div className="md:w-3/5 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-primary mb-2 reveal">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 reveal stagger-1">
              Data Scientist with Financial Expertise
            </h3>
            
            <div className="space-y-4 mb-8">
              <p className="text-navy-700 dark:text-navy-200 reveal stagger-2">
                I'm a data scientist and financial analyst with a passion for turning complex data into actionable insights. 
                With expertise in both finance and computer science, I bridge the gap between technical implementation and 
                business strategy.
              </p>
              
              <p className="text-navy-700 dark:text-navy-200 reveal stagger-3">
                My background includes a Master's degree in Financial Engineering and a Bachelor's in Computer Science. 
                I've worked with financial institutions and tech companies to develop predictive models, optimize portfolios, 
                and create data visualization solutions that drive decision-making.
              </p>
              
              <p className="text-navy-700 dark:text-navy-200 reveal stagger-4">
                Outside of work, I contribute to open-source data science libraries and write articles about finance, 
                machine learning, and data analytics on my blog.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 reveal stagger-5">
              <Button className="rounded-md flex items-center gap-2">
                <FileText size={18} />
                <a href="#resume">View Resume</a>
              </Button>
              <Button variant="outline" className="rounded-md flex items-center gap-2">
                <ExternalLink size={18} />
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">Check GitHub</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
