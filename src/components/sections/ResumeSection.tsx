
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Briefcase, GraduationCap } from 'lucide-react';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
}

const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Data Scientist",
    company: "FinTech Innovations",
    location: "New York, NY",
    period: "Jan 2022 - Present",
    description: [
      "Lead a team of 3 data scientists in developing predictive models for loan default risk, improving accuracy by 15%",
      "Designed and implemented a real-time trading algorithm using machine learning, resulting in 12% ROI improvement",
      "Collaborated with product teams to integrate data-driven features into financial planning applications"
    ]
  },
  {
    id: 2,
    title: "Data Analyst",
    company: "Global Investment Bank",
    location: "Chicago, IL",
    period: "Jun 2019 - Dec 2021",
    description: [
      "Built interactive dashboards for portfolio performance monitoring used by 200+ investment advisors",
      "Automated monthly reporting processes, reducing preparation time by 75%",
      "Conducted statistical analysis of market trends to inform investment strategies"
    ]
  },
  {
    id: 3,
    title: "Financial Research Intern",
    company: "Economic Research Institute",
    location: "Boston, MA",
    period: "May 2018 - Aug 2018",
    description: [
      "Assisted senior researchers in collecting and analyzing economic data",
      "Developed Python scripts to clean and transform large financial datasets",
      "Contributed to research papers on market efficiency and algorithmic trading"
    ]
  }
];

const education: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Financial Engineering",
    institution: "MIT",
    location: "Cambridge, MA",
    period: "2018 - 2020",
    description: "Focused on quantitative methods, computational finance, and AI applications in finance. Thesis on predictive modeling for market volatility."
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California",
    location: "Berkeley, CA",
    period: "2014 - 2018",
    description: "Specialization in machine learning and data structures. Minor in Economics. Dean's List all semesters."
  }
];

const ResumeSection = () => {
  const resumeRef = useRef<HTMLElement>(null);
  
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
    
    if (resumeRef.current) {
      observer.observe(resumeRef.current);
    }
    
    return () => {
      if (resumeRef.current) {
        observer.unobserve(resumeRef.current);
      }
    };
  }, []);
  
  return (
    <section id="resume" className="py-20 bg-white dark:bg-navy-800" ref={resumeRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-2 reveal">My Background</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 reveal stagger-1">Resume & Experience</h3>
          <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto reveal stagger-2">
            A summary of my professional journey, education, and qualifications in data science and finance.
          </p>
          <div className="mt-6 reveal stagger-3">
            <Button className="rounded-md flex items-center gap-2">
              <Download size={18} />
              Download Resume
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 reveal">
              <span className="p-2 rounded-full bg-primary/10 text-primary">
                <Briefcase size={24} />
              </span>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={exp.id} className="border-l-4 border-l-primary reveal" style={{ transitionDelay: `${0.2 * index}s` }}>
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{exp.title}</h4>
                        <p className="text-navy-600 dark:text-navy-300">{exp.company} | {exp.location}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0 w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                    <ul className="space-y-2 list-disc list-inside text-navy-700 dark:text-navy-200">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8 reveal">
              <span className="p-2 rounded-full bg-primary/10 text-primary">
                <GraduationCap size={24} />
              </span>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={edu.id} className="border-l-4 border-l-gold-400 reveal" style={{ transitionDelay: `${0.2 * index}s` }}>
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{edu.degree}</h4>
                        <p className="text-navy-600 dark:text-navy-300">{edu.institution} | {edu.location}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 sm:mt-0 w-fit">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-navy-700 dark:text-navy-200">{edu.description}</p>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="mt-12 reveal" style={{ transitionDelay: '0.4s' }}>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Badge className="px-4 py-2 text-base font-normal whitespace-normal text-left h-auto flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                  CFA Level II Candidate
                </Badge>
                <Badge className="px-4 py-2 text-base font-normal whitespace-normal text-left h-auto flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                  AWS Certified Machine Learning Specialist
                </Badge>
                <Badge className="px-4 py-2 text-base font-normal whitespace-normal text-left h-auto flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                  Professional Certificate in Data Science (Harvard)
                </Badge>
                <Badge className="px-4 py-2 text-base font-normal whitespace-normal text-left h-auto flex items-center gap-2 bg-primary/10 text-primary hover:bg-primary/20 border-none">
                  TensorFlow Developer Certificate
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
