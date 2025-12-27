import React, { useState } from 'react';
import { Code, Database, Cpu, Globe, Shield, Zap, Clock, Users, Award, ArrowRight } from 'lucide-react';

const Programs = () => {
  const [activeProgram, setActiveProgram] = useState(0);

  const programs = [
    {
      icon: Code,
      title: 'Software Engineering',
      duration: '12 months',
      level: 'Advanced Diploma',
      description: 'Comprehensive program covering full-stack development, software architecture, and modern development methodologies.',
      curriculum: ['Advanced JavaScript & TypeScript', 'React/Angular/Vue.js', 'Node.js & Express', 'Database Design', 'DevOps & CI/CD', 'Software Testing'],
      career: ['Senior Developer', 'Tech Lead', 'Software Architect'],
      salary: '₹8-15 LPA',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Database,
      title: 'Data Science & AI',
      duration: '10 months',
      level: 'Professional Certificate',
      description: 'Master data analysis, machine learning, and artificial intelligence with hands-on projects using real-world datasets.',
      curriculum: ['Python & R Programming', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'Big Data Analytics', 'AI Ethics'],
      career: ['Data Scientist', 'ML Engineer', 'AI Specialist'],
      salary: '₹10-18 LPA',
      color: 'from-purple-600 to-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: Cpu,
      title: 'Embedded Systems',
      duration: '8 months',
      level: 'Specialized Program',
      description: 'Design and develop embedded systems for IoT, automotive, and industrial applications with cutting-edge hardware.',
      curriculum: ['C/C++ Programming', 'Microcontrollers', 'RTOS', 'IoT Protocols', 'PCB Design', 'Hardware Testing'],
      career: ['Embedded Engineer', 'IoT Developer', 'Hardware Designer'],
      salary: '₹6-12 LPA',
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      icon: Globe,
      title: 'Cloud Architecture',
      duration: '6 months',
      level: 'Industry Certification',
      description: 'Master cloud platforms, containerization, and scalable architecture design for enterprise applications.',
      curriculum: ['AWS/Azure/GCP', 'Docker & Kubernetes', 'Microservices', 'Cloud Security', 'Infrastructure as Code', 'Monitoring'],
      career: ['Cloud Architect', 'DevOps Engineer', 'Site Reliability Engineer'],
      salary: '₹12-20 LPA',
      color: 'from-amber-600 to-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      duration: '9 months',
      level: 'Advanced Certificate',
      description: 'Comprehensive cybersecurity training covering ethical hacking, network security, and digital forensics.',
      curriculum: ['Ethical Hacking', 'Network Security', 'Digital Forensics', 'Security Auditing', 'Incident Response', 'Compliance'],
      career: ['Security Analyst', 'Ethical Hacker', 'Security Consultant'],
      salary: '₹8-16 LPA',
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      icon: Zap,
      title: 'Digital Innovation',
      duration: '4 months',
      level: 'Executive Program',
      description: 'Strategic program for professionals focusing on digital transformation, emerging technologies, and innovation management.',
      curriculum: ['Digital Strategy', 'Emerging Technologies', 'Innovation Management', 'Digital Marketing', 'Analytics', 'Leadership'],
      career: ['Digital Manager', 'Innovation Lead', 'Technology Consultant'],
      salary: '₹15-25 LPA',
      color: 'from-indigo-600 to-indigo-700',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
            <Code className="h-4 w-4 text-slate-600" />
            <span className="text-slate-800 text-sm font-semibold uppercase tracking-wide">Academic Programs</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Industry-Aligned
            <span className="block text-amber-600">Technical Programs</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge curriculum designed in collaboration with industry leaders, 
            ensuring our graduates are equipped with the most relevant and in-demand skills.
          </p>
        </div>

        {/* Program Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {programs.map((program, index) => (
            <button
              key={index}
              onClick={() => setActiveProgram(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeProgram === index
                  ? `bg-gradient-to-r ${program.color} text-white shadow-lg`
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {(() => {
                const ProgramIcon = program.icon;
                return <ProgramIcon className="h-5 w-5" />;
              })()}
              <span>{program.title}</span>
            </button>
          ))}
        </div>

        {/* Active Program Details */}
        <div className={`${programs[activeProgram].bgColor} rounded-3xl p-8 lg:p-12 border ${programs[activeProgram].borderColor}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Program Info */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${programs[activeProgram].color} rounded-xl flex items-center justify-center`}>
                    {(() => {
                      const ActiveProgramIcon = programs[activeProgram].icon;
                      return <ActiveProgramIcon className="h-8 w-8 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-slate-900">{programs[activeProgram].title}</h3>
                    <p className="text-slate-600 font-medium">{programs[activeProgram].level}</p>
                  </div>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">{programs[activeProgram].description}</p>
              </div>

              {/* Program Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/70 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Clock className="h-5 w-5 text-slate-600" />
                    <span className="font-semibold text-slate-900">Duration</span>
                  </div>
                  <p className="text-slate-700">{programs[activeProgram].duration}</p>
                </div>
                <div className="bg-white/70 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-5 w-5 text-slate-600" />
                    <span className="font-semibold text-slate-900">Avg. Salary</span>
                  </div>
                  <p className="text-slate-700">{programs[activeProgram].salary}</p>
                </div>
              </div>

              {/* Career Paths */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3">Career Opportunities</h4>
                <div className="flex flex-wrap gap-2">
                  {programs[activeProgram].career.map((career, index) => (
                    <span key={index} className="bg-white/70 px-3 py-1 rounded-full text-sm font-medium text-slate-700">
                      {career}
                    </span>
                  ))}
                </div>
              </div>

              <button className={`bg-gradient-to-r ${programs[activeProgram].color} text-white px-8 py-4 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                <span>Apply Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Curriculum */}
            <div className="bg-white/70 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-slate-900 mb-6">Curriculum Highlights</h4>
              <div className="space-y-4">
                {programs[activeProgram].curriculum.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-2 h-2 bg-gradient-to-r ${programs[activeProgram].color} rounded-full`}></div>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center space-x-2 mb-2">
                  <Users className="h-5 w-5 text-slate-600" />
                  <span className="font-semibold text-slate-900">Class Size</span>
                </div>
                <p className="text-slate-700">Maximum 25 students per batch for personalized attention</p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Features */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Industry Certification</h4>
            <p className="text-slate-600">Recognized certificates from leading technology companies</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Expert Mentorship</h4>
            <p className="text-slate-600">One-on-one guidance from industry professionals</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Live Projects</h4>
            <p className="text-slate-600">Real-world projects with industry partners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;