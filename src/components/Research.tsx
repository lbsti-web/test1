import React from 'react';
import { Microscope, Lightbulb, TrendingUp, Users, Award, ExternalLink } from 'lucide-react';

const Research = () => {
  const researchAreas = [
    {
      icon: Lightbulb,
      title: 'Artificial Intelligence',
      description: 'Advanced research in machine learning, deep learning, and neural networks',
      projects: 12,
      publications: 28,
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: TrendingUp,
      title: 'Data Analytics',
      description: 'Big data processing, predictive analytics, and business intelligence',
      projects: 8,
      publications: 22,
      color: 'from-purple-600 to-purple-700'
    },
    {
      icon: Users,
      title: 'Cybersecurity',
      description: 'Network security, cryptography, and digital forensics research',
      projects: 6,
      publications: 18,
      color: 'from-red-600 to-red-700'
    },
    {
      icon: Award,
      title: 'IoT & Embedded',
      description: 'Internet of Things, embedded systems, and smart device development',
      projects: 10,
      publications: 25,
      color: 'from-green-600 to-green-700'
    }
  ];

  const publications = [
    {
      title: 'Advanced Machine Learning Algorithms for Predictive Maintenance',
      authors: 'Dr. Rajesh Kumar, Prof. Priya Sharma',
      journal: 'IEEE Transactions on Industrial Informatics',
      year: '2024',
      citations: 45
    },
    {
      title: 'Blockchain-Based Security Framework for IoT Networks',
      authors: 'Prof. Sarah Johnson, Dr. Amit Patel',
      journal: 'Journal of Network and Computer Applications',
      year: '2024',
      citations: 32
    },
    {
      title: 'Optimized Cloud Resource Allocation Using Deep Reinforcement Learning',
      authors: 'Dr. Michael Chen, Prof. Lisa Thompson',
      journal: 'IEEE Cloud Computing',
      year: '2023',
      citations: 58
    }
  ];

  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <Microscope className="h-4 w-4 text-green-600" />
            <span className="text-green-800 text-sm font-semibold uppercase tracking-wide">Research & Innovation</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Pioneering
            <span className="block text-amber-600">Research Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our research initiatives drive technological advancement and innovation, 
            contributing to global knowledge while solving real-world challenges.
          </p>
        </div>

        {/* Research Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
              <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <area.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{area.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Active Projects</span>
                  <span className="font-semibold text-slate-900">{area.projects}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">Publications</span>
                  <span className="font-semibold text-slate-900">{area.publications}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Research Stats */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Research Impact</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Our research contributions have made significant impact in academia and industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">150+</div>
              <div className="text-slate-300 font-medium">Research Papers</div>
              <div className="text-sm text-slate-400 mt-1">Published in top journals</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">25</div>
              <div className="text-slate-300 font-medium">Patents Filed</div>
              <div className="text-sm text-slate-400 mt-1">Innovation & IP creation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">₹2.5Cr</div>
              <div className="text-slate-300 font-medium">Research Funding</div>
              <div className="text-sm text-slate-400 mt-1">Government & industry grants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-400 mb-2">15</div>
              <div className="text-slate-300 font-medium">Industry Partners</div>
              <div className="text-sm text-slate-400 mt-1">Collaborative research</div>
            </div>
          </div>
        </div>

        {/* Recent Publications */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Recent Publications</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Latest research contributions from our faculty in prestigious international journals
            </p>
          </div>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{pub.title}</h4>
                    <p className="text-slate-600 mb-2">{pub.authors}</p>
                    <div className="flex items-center space-x-4 text-sm text-slate-500">
                      <span>{pub.journal}</span>
                      <span>•</span>
                      <span>{pub.year}</span>
                      <span>•</span>
                      <span>{pub.citations} citations</span>
                    </div>
                  </div>
                  <button className="ml-4 p-2 text-slate-400 hover:text-slate-600 transition-colors duration-200">
                    <ExternalLink className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Research Facilities */}
        <div className="bg-slate-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Research Facilities</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              State-of-the-art laboratories and equipment supporting cutting-edge research
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-2">AI Research Lab</h4>
              <p className="text-slate-600 text-sm mb-3">High-performance computing cluster with GPU acceleration</p>
              <div className="text-xs text-slate-500">Equipment: NVIDIA DGX systems, Tesla V100 GPUs</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-2">IoT Innovation Center</h4>
              <p className="text-slate-600 text-sm mb-3">Prototyping and testing facility for IoT devices</p>
              <div className="text-xs text-slate-500">Equipment: 3D printers, PCB fabrication, sensor arrays</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-2">Cybersecurity Lab</h4>
              <p className="text-slate-600 text-sm mb-3">Isolated network environment for security research</p>
              <div className="text-xs text-slate-500">Equipment: Network simulators, penetration testing tools</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;