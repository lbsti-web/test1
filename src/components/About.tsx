import React from 'react';
import { Target, Eye, Award, Users, BookOpen, Lightbulb } from 'lucide-react';

const About = () => {
  const achievements = [
    { year: '1998', title: 'Institute Founded', desc: 'Started vocational training journey with computer courses' },
    { year: '2005', title: 'Expansion', desc: 'Added creative and business training programs' },
    { year: '2012', title: 'Diversification', desc: 'Launched teacher training and women empowerment courses' },
    { year: '2020', title: 'Digital Learning', desc: 'Introduced online and hybrid training options' },
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
            Legacy of Skill
            <span className="block text-amber-600">Development</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            For over two decades, LBSTI has been transforming lives through quality vocational
            training, helping thousands achieve their career dreams with practical, job-ready skills.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Story Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Foundation</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Established in 1998, LBSTI emerged from a vision to make quality vocational education
                accessible to everyone. We recognized the need for practical, job-oriented training
                that empowers individuals with skills that directly translate to employment opportunities
                and entrepreneurship.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we proudly serve as a launchpad for career success, with our students working
                in leading companies, running their own businesses, and achieving financial independence
                through the skills they learned at LBSTI.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-slate-900 mb-2">10,000+</div>
                <div className="text-slate-600 font-medium">Students Trained</div>
                <div className="text-sm text-slate-500 mt-1">Across multiple domains</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
                <div className="text-slate-600 font-medium">Course Offerings</div>
                <div className="text-sm text-slate-500 mt-1">Industry-focused programs</div>
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
              To provide accessible, affordable, and quality vocational training that empowers
              individuals with job-ready skills and opens doors to better career opportunities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Vision</h4>
            <p className="text-slate-600 leading-relaxed">
              To be the most trusted vocational training institute, recognized for transforming
              lives through practical skill development and creating self-reliant professionals.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">Values</h4>
            <p className="text-slate-600 leading-relaxed">
              Quality training, individual attention, practical learning, and student success
              are at the heart of everything we do at LBSTI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;