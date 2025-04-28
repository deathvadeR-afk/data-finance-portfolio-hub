
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MessageSquare, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const contactRef = useRef<HTMLElement>(null);
  
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
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white dark:bg-navy-800" ref={contactRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-primary mb-2 reveal">Get In Touch</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 reveal stagger-1">Contact Me</h3>
          <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto reveal stagger-2">
            Interested in working together or have questions about my services? Feel free to reach out through any of the following channels.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4 reveal stagger-3">
            <Card className="p-6 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-primary/10 text-primary">
                  <Mail size={24} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <a 
                    href="mailto:john@example.com" 
                    className="text-navy-600 dark:text-navy-300 hover:text-primary transition-colors"
                  >
                    john@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-primary/10 text-primary">
                  <Phone size={24} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <a 
                    href="tel:+11234567890" 
                    className="text-navy-600 dark:text-navy-300 hover:text-primary transition-colors"
                  >
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="p-3 rounded-full bg-primary/10 text-primary">
                  <MessageSquare size={24} />
                </span>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Social Media</h4>
                  <div className="flex gap-3 mt-2">
                    <a 
                      href="https://github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="p-2 rounded-full bg-navy-100 dark:bg-navy-700 text-navy-800 dark:text-navy-200 hover:bg-primary hover:text-white transition-all"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="p-2 rounded-full bg-navy-100 dark:bg-navy-700 text-navy-800 dark:text-navy-200 hover:bg-primary hover:text-white transition-all"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 reveal stagger-4">
            <Card className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can I help you?"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or inquiry..."
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
