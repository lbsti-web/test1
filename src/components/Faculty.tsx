import React from 'react';
import { Award, BookOpen, Users, ExternalLink, Linkedin, Mail } from 'lucide-react';

const Faculty = () => {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      title: 'Director & Professor',
      department: 'Computer Science',
      experience: '20+ years',
      education: 'PhD Computer Science, IIT Delhi',
      specialization: 'Artificial Intelligence, Machine Learning',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['50+ Research Publications', 'IEEE Senior Member', 'Industry Consultant - Google, Microsoft'],
      linkedin: '#',
      email: 'rajesh.kumar@lbsti.edu'
    },
    {
      name: 'Prof. Priya Sharma',
      title: 'Head of Department',
      department: 'Data Science',
      experience: '15+ years',
      education: 'PhD Statistics, ISI Kolkata',
      specialization: 'Big Data Analytics, Statistical Modeling',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['40+ Research Papers', 'Data Science Consultant', 'Author - "Modern Analytics"'],
      linkedin: '#',
      email: 'priya.sharma@lbsti.edu'
    },
    {
      name: 'Dr. Amit Patel',
      title: 'Senior Professor',
      department: 'Embedded Systems',
      experience: '18+ years',
      education: 'PhD Electronics, IIT Bombay',
      specialization: 'IoT, Microcontrollers, VLSI Design',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['35+ Patents Filed', 'Industry Expert - Intel, ARM', 'IEEE Distinguished Lecturer'],
      linkedin: '#',
      email: 'amit.patel@lbsti.edu'
    },
    {
      name: 'Prof. Sarah Johnson',
      title: 'Associate Professor',
      department: 'Cybersecurity',
      experience: '12+ years',
      education: 'MS Cybersecurity, Carnegie Mellon',
      specialization: 'Network Security, Ethical Hacking',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['CISSP Certified', 'Security Consultant', 'Bug Bounty Expert'],
      linkedin: '#',
      email: 'sarah.johnson@lbsti.edu'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Professor',
      department: 'Cloud Computing',
      experience: '16+ years',
      education: 'PhD Distributed Systems, Stanford',
      specialization: 'Cloud Architecture, DevOps',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['AWS Solutions Architect', 'Former Google Engineer', 'Cloud Migration Expert'],
      linkedin: '#',
      email: 'michael.chen@lbsti.edu'
    },
    {
      name: 'Prof. Lisa Thompson',
      title: 'Assistant Professor',
      department: 'Digital Innovation',
      experience: '10+ years',
      education: 'MBA Technology, Wharton',
      specialization: 'Digital Strategy, Innovation Management',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
      achievements: ['Digital Transformation Expert', 'Startup Advisor', 'TEDx Speaker'],
      linkedin: '#',
      email: 'lisa.thompson@lbsti.edu'
    }
  ];

  const departments = [
    { name: 'Computer Science', faculty: 12, head: 'Dr. Rajesh Kumar' },
    { name: 'Data Science', faculty: 8, head: 'Prof. Priya Sharma' },
    { name: 'Embedded Systems', faculty: 6, head: 'Dr. Amit Patel' },
    { name: 'Cybersecurity', faculty: 5, head: 'Prof. Sarah Johnson' },
    { name: 'Cloud Computing', faculty: 7, head: 'Dr. Michael Chen' },
    { name: 'Digital Innovation', faculty: 4, head: 'Prof. Lisa Thompson' }
  ];

  return (
    <section id="faculty" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Users className="h-4 w-4 text-blue-600" />
            <span className="text-blue-800 text-sm font-semibold uppercase tracking-wide">Faculty Excellence</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Distinguished
            <span className="block text-amber-600">Academic Leaders</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Learn from industry veterans and renowned academicians who bring decades of 
            experience and cutting-edge research to the classroom.
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {faculty.map((member, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a href={member.linkedin} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a href={`mailto:${member.email}`} className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200">
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-amber-600 font-semibold text-sm">{member.title}</p>
                  <p className="text-slate-600 text-sm">{member.department}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-slate-600">
                    <Award className="h-4 w-4 mr-2 text-slate-400" />
                    {member.education}
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <BookOpen className="h-4 w-4 mr-2 text-slate-400" />
                    {member.specialization}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 text-sm">Key Achievements</h4>
                  {member.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Departments Overview */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Academic Departments</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our faculty is organized into specialized departments, each led by distinguished 
              academicians and industry experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-xl hover:bg-slate-100 transition-colors duration-200">
                <h4 className="font-bold text-slate-900 mb-2">{dept.name}</h4>
                <p className="text-sm text-slate-600 mb-3">Head: {dept.head}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Faculty Members</span>
                  <span className="font-semibold text-slate-900">{dept.faculty}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Faculty Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">42</div>
            <div className="text-slate-600 font-medium">Total Faculty</div>
            <div className="text-sm text-slate-500 mt-1">PhD & Industry Experts</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">15:1</div>
            <div className="text-slate-600 font-medium">Student-Faculty Ratio</div>
            <div className="text-sm text-slate-500 mt-1">Personalized Attention</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">200+</div>
            <div className="text-slate-600 font-medium">Research Publications</div>
            <div className="text-sm text-slate-500 mt-1">In Last 3 Years</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-slate-900 mb-2">85%</div>
            <div className="text-slate-600 font-medium">Industry Experience</div>
            <div className="text-sm text-slate-500 mt-1">Practical Knowledge</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;