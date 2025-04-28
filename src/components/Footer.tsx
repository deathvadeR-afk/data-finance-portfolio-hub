
import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-navy-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - Logo & Description */}
          <div>
            <h3 className="text-xl font-bold mb-4">John.DataScience</h3>
            <p className="text-navy-100 mb-4">
              A data scientist with expertise in finance and analytics, creating impactful solutions through code and analysis.
            </p>
          </div>
          
          {/* Middle - Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-navy-100 hover:text-gold-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-navy-100 hover:text-gold-400 transition-colors">Projects</a></li>
              <li><a href="#resume" className="text-navy-100 hover:text-gold-400 transition-colors">Resume</a></li>
              <li><a href="#contact" className="text-navy-100 hover:text-gold-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Right - Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-navy-100 hover:text-gold-400 transition-colors" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-navy-100 hover:text-gold-400 transition-colors" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href="mailto:john@example.com" className="text-navy-100 hover:text-gold-400 transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-navy-100">
              <a href="mailto:john@example.com" className="hover:text-gold-400 transition-colors">
                john@example.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-navy-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-navy-300 text-sm flex items-center">
            Built with <span className="text-red-500 mx-1">♥</span> and modern technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
