
import React, { useEffect, useRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const skills: Skill[] = [
  // Technical skills
  { name: "Python", level: 95, category: "technical" },
  { name: "R", level: 85, category: "technical" },
  { name: "SQL", level: 90, category: "technical" },
  { name: "Machine Learning", level: 90, category: "technical" },
  { name: "Deep Learning", level: 80, category: "technical" },
  { name: "Data Visualization", level: 92, category: "technical" },
  { name: "Statistical Analysis", level: 88, category: "technical" },
  { name: "Big Data Tools", level: 75, category: "technical" },
  
  // Finance skills
  { name: "Financial Modeling", level: 90, category: "finance" },
  { name: "Risk Analysis", level: 85, category: "finance" },
  { name: "Portfolio Management", level: 80, category: "finance" },
  { name: "Algorithmic Trading", level: 75, category: "finance" },
  { name: "Financial Forecasting", level: 85, category: "finance" },
  { name: "Valuation", level: 80, category: "finance" },
  
  // Soft skills
  { name: "Project Management", level: 85, category: "soft" },
  { name: "Communication", level: 90, category: "soft" },
  { name: "Problem Solving", level: 95, category: "soft" },
  { name: "Team Leadership", level: 80, category: "soft" }
];

const SkillsSection = () => {
  const skillsRef = useRef<HTMLElement>(null);
  
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
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  const technicalSkills = skills.filter(skill => skill.category === "technical");
  const financeSkills = skills.filter(skill => skill.category === "finance");
  const softSkills = skills.filter(skill => skill.category === "soft");
  
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-navy-900" ref={skillsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-2 reveal">My Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 reveal stagger-1">Skills & Proficiencies</h3>
          <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto reveal stagger-2">
            A comprehensive overview of my technical skills, financial expertise, and professional capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <Card className="p-6 reveal stagger-3">
            <h4 className="text-xl font-bold mb-6 pb-2 border-b">Technical Skills</h4>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-navy-600 dark:text-navy-300">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
          
          {/* Finance Skills */}
          <Card className="p-6 reveal stagger-3" style={{ transitionDelay: '0.1s' }}>
            <h4 className="text-xl font-bold mb-6 pb-2 border-b">Finance Skills</h4>
            <div className="space-y-4">
              {financeSkills.map((skill, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-navy-600 dark:text-navy-300">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Soft Skills */}
        <Card className="p-6 mt-8 reveal stagger-4">
          <h4 className="text-xl font-bold mb-6 pb-2 border-b">Professional Skills</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <div key={index} className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-navy-600 dark:text-navy-300">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </Card>
        
        {/* Tools and Technologies */}
        <div className="mt-12 reveal stagger-5">
          <h4 className="text-xl font-bold mb-6 text-center">Tools & Technologies</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {["TensorFlow", "PyTorch", "Scikit-Learn", "Pandas", "NumPy", "SQL", "Tableau", "Power BI", 
              "Git", "AWS", "Azure", "Bloomberg Terminal", "Excel", "JIRA", "Docker", "Kubernetes"].map((tool) => (
              <div 
                key={tool} 
                className="px-4 py-2 bg-white dark:bg-navy-700 rounded-full shadow-sm border border-gray-200 dark:border-navy-600"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
