
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Stock Market Predictor",
    description: "A machine learning model that predicts stock price movements using historical data and sentiment analysis from financial news.",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    category: "finance",
    technologies: ["Python", "TensorFlow", "NLP", "Pandas"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 2,
    title: "Customer Churn Analysis",
    description: "Predictive analytics dashboard to identify customers at risk of churning based on behavior patterns and engagement metrics.",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    category: "analytics",
    technologies: ["R", "Shiny", "RandomForest", "SQL"],
    githubUrl: "https://github.com"
  },
  {
    id: 3,
    title: "Portfolio Optimization Tool",
    description: "Interactive tool that uses Modern Portfolio Theory to optimize investment allocations based on risk tolerance and expected returns.",
    image: "bg-gradient-to-br from-gold-400 to-amber-600",
    category: "finance",
    technologies: ["Python", "NumPy", "Streamlit", "Matplotlib"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 4,
    title: "Fraud Detection System",
    description: "Anomaly detection system that identifies potentially fraudulent financial transactions using advanced ML algorithms.",
    image: "bg-gradient-to-br from-red-500 to-pink-600",
    category: "finance",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Flask"],
    githubUrl: "https://github.com"
  },
  {
    id: 5,
    title: "Sales Forecasting Model",
    description: "Time series forecasting model that predicts future sales based on historical data, seasonal trends, and external factors.",
    image: "bg-gradient-to-br from-cyan-500 to-blue-600",
    category: "analytics",
    technologies: ["Python", "Prophet", "Pandas", "Plotly"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard displaying key business metrics and allowing for drill-down analysis of performance indicators.",
    image: "bg-gradient-to-br from-indigo-500 to-purple-600",
    category: "analytics",
    technologies: ["D3.js", "React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com"
  }
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const projectsRef = useRef<HTMLElement>(null);
  
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
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  
  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);
    
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-navy-900" ref={projectsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-2 reveal">My Work</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 reveal stagger-1">Featured Projects</h3>
          <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto reveal stagger-2">
            Explore my portfolio of data science and finance projects that demonstrate my technical skills and domain expertise.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full reveal stagger-3">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All Projects</TabsTrigger>
              <TabsTrigger value="finance" onClick={() => setActiveTab("finance")}>Finance</TabsTrigger>
              <TabsTrigger value="analytics" onClick={() => setActiveTab("analytics")}>Analytics</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <Card key={project.id} className="overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 h-full flex flex-col reveal" style={{transitionDelay: `${0.1 * index}s`}}>
                  <div className={`h-48 ${project.image} flex items-center justify-center`}>
                    <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle>{project.title}</CardTitle>
                    </div>
                    <CardDescription className="flex flex-wrap gap-2 mt-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="bg-navy-50 dark:bg-navy-800">{tech}</Badge>
                      ))}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-navy-700 dark:text-navy-200">{project.description}</p>
                  </CardContent>
                  <CardFooter className="flex gap-2 pt-2">
                    {project.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="finance" className="mt-0">
            {/* Content will be filtered by the same grid */}
          </TabsContent>
          
          <TabsContent value="analytics" className="mt-0">
            {/* Content will be filtered by the same grid */}
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12 reveal stagger-4">
          <Button variant="outline" size="lg">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
