import React from 'react';
import { Target, Eye, Award, Users, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const achievements = [
    { year: '1998', title: 'Institute Founded', desc: 'Established with vision for technical excellence' },
    { year: '2005', title: 'Industry Recognition', desc: 'Accredited by National Technical Board' },
    { year: '2012', title: 'Research Center', desc: 'Advanced R&D facility inaugurated' },
    { year: '2020', title: 'Digital Transformation', desc: 'Hybrid learning ecosystem launched' },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-amber-100 px-4 py-2 rounded-full mb-6">
            <Award className="h-4 w-4 text-amber-600" />
            <span className="text-amber-800 text-sm font-semibold uppercase tracking-wide">About LBSTI</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Legacy of Technical
            <span className="block text-amber-600">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, LBSTI has been the cornerstone of technical education, 
            shaping industry leaders and fostering innovation through rigorous academic programs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Story Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Foundation</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Established in 1998, LBSTI emerged from a vision to bridge the critical gap between 
                academic theory and industry practice. Our founders, distinguished engineers and 
                educators, recognized the need for a technical institute that would produce 
                job-ready professionals equipped with both theoretical knowledge and practical expertise.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we stand as a testament to educational excellence, with our graduates 
                leading major corporations, founding successful startups, and contributing to 
                technological advancement across diverse industries.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-slate-900 mb-2">5,000+</div>
                <div className="text-slate-600 font-medium">Alumni Network</div>
                <div className="text-sm text-slate-500 mt-1">Across 50+ countries</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-slate-900 mb-2">95%</div>
                <div className="text-slate-600 font-medium">Placement Rate</div>
                <div className="text-sm text-slate-500 mt-1">Within 6 months</div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 to-amber-600"></div>
            <div className="space-y-8">
              {achievements.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {item.year.slice(-2)}
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <div className="text-sm text-amber-600 font-semibold mb-1">{item.year}</div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Mission</h4>
            <p className="text-slate-600 leading-relaxed">
              To deliver world-class technical education that empowers students with cutting-edge 
              skills, ethical values, and innovative thinking capabilities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Vision</h4>
            <p className="text-slate-600 leading-relaxed">
              To be the premier technical institute recognized globally for excellence in 
              education, research, and industry collaboration.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Innovation</h4>
            <p className="text-slate-600 leading-relaxed">
              Fostering a culture of innovation, research, and continuous learning to 
              address tomorrow's technological challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;