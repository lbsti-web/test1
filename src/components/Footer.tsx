import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'About LBSTI', href: '#about' },
    { label: 'Academic Programs', href: '#programs' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Research', href: '#research' },
    { label: 'Admissions', href: '#contact' },
    { label: 'Alumni Network', href: '#' }
  ];

  const programs = [
    { label: 'Software Engineering', href: '#' },
    { label: 'Data Science & AI', href: '#' },
    { label: 'Embedded Systems', href: '#' },
    { label: 'Cloud Architecture', href: '#' },
    { label: 'Cybersecurity', href: '#' },
    { label: 'Digital Innovation', href: '#' }
  ];

  const resources = [
    { label: 'Student Portal', href: '#' },
    { label: 'Library', href: '#' },
    { label: 'Career Services', href: '#' },
    { label: 'Research Publications', href: '#' },
    { label: 'Industry Partners', href: '#' },
    { label: 'Campus Facilities', href: '#' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg">
                  <GraduationCap className="h-7 w-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <span className="text-2xl font-bold text-white tracking-tight">LBSTI</span>
                <div className="text-xs text-slate-400 font-medium">TECHNICAL INSTITUTE</div>
              </div>
            </div>
            
            <p className="text-slate-400 mb-6 leading-relaxed">
              Leading technical institute providing world-class education and research 
              opportunities for the next generation of technology professionals.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-400">
                <MapPin className="h-4 w-4 text-amber-400" />
                <span className="text-sm">Sector 15, Tech City, Haryana</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Phone className="h-4 w-4 text-amber-400" />
                <span className="text-sm">+91 124 456 7890</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-400">
                <Mail className="h-4 w-4 text-amber-400" />
                <span className="text-sm">info@lbsti.edu</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    {link.label}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Programs</h3>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <a 
                    href={program.href} 
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    {program.label}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3 mb-6">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-200 text-sm flex items-center group"
                  >
                    {resource.label}
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-200">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-400 transition-all duration-200">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-pink-600 transition-all duration-200">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-700 transition-all duration-200">
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              &copy; 2024 LBSTI Technical Institute. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-amber-400 transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-slate-800">
            <div className="text-center">
              <p className="text-slate-500 text-xs">
                Accredited by National Technical Education Board | ISO 9001:2015 Certified | 
                Member of Association of Indian Technical Institutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;