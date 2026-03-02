import React, { useState } from 'react';
import { Code, Palette, Calculator, Target, GraduationCap, Sparkles, Clock, Award, ArrowRight, CheckCircle } from 'lucide-react';

const Programs = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    {
      icon: Code,
      title: 'IT & Software',
      color: 'from-blue-600 to-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      courses: [
        { name: 'Diploma in Information Technology (DIT)', duration: '12 months', level: 'Diploma' },
        { name: 'Advance Diploma in Computer Applications (ADCA)', duration: '12 months', level: 'Advance Diploma' },
        { name: 'Course on Computer Concepts (CCC)', duration: '2 months', level: 'Certificate' },
        { name: 'Basic Computer Course', duration: '3 months', level: 'Certificate' },
        { name: 'Programming in C & C++', duration: '3 months', level: 'Certificate' },
        { name: 'Java Programming', duration: '3 months', level: 'Certificate' },
        { name: 'Python Programming', duration: '3 months', level: 'Certificate' }
      ],
      description: 'Master essential computer skills and programming languages for a career in IT. From basics to advanced applications.',
      careers: ['Software Developer', 'IT Support', 'Programmer', 'System Administrator']
    },
    {
      icon: Palette,
      title: 'Creative & Design',
      color: 'from-emerald-600 to-teal-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      courses: [
        { name: 'Diploma in Graphic Designing (DGD)', duration: '6 months', level: 'Diploma' },
        { name: 'Web Designing & Development', duration: '6 months', level: 'Certificate' },
        { name: 'Advance Desktop Publishing (DADTP)', duration: '4 months', level: 'Advance Certificate' },
        { name: 'Video Editing & Animation', duration: '6 months', level: 'Certificate' },
        { name: 'Multimedia Course', duration: '6 months', level: 'Certificate' }
      ],
      description: 'Unleash your creativity with design tools and techniques. Learn industry-standard software for graphics, web, and video.',
      careers: ['Graphic Designer', 'Web Designer', 'Video Editor', 'Animator', 'DTP Operator']
    },
    {
      icon: Calculator,
      title: 'Finance & Business',
      color: 'from-green-600 to-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      courses: [
        { name: 'Tally ERP 9 with GST', duration: '3 months', level: 'Certificate' },
        { name: 'Tally Prime with GST', duration: '3 months', level: 'Certificate' },
        { name: 'E-Accounting', duration: '2 months', level: 'Certificate' },
        { name: 'Advance Excel', duration: '2 months', level: 'Certificate' },
        { name: 'Data Analytics', duration: '4 months', level: 'Certificate' },
        { name: 'Business Analytics', duration: '4 months', level: 'Certificate' }
      ],
      description: 'Gain expertise in accounting software, data analysis, and business intelligence tools for finance careers.',
      careers: ['Accountant', 'Tally Operator', 'Data Analyst', 'Business Analyst', 'MIS Executive']
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      color: 'from-orange-600 to-orange-700',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      courses: [
        { name: 'Digital Marketing Complete Course', duration: '4 months', level: 'Certificate' },
        { name: 'SEO (Search Engine Optimization)', duration: '2 months', level: 'Certificate' },
        { name: 'Social Media Marketing', duration: '2 months', level: 'Certificate' },
        { name: 'Google Ads & PPC', duration: '1.5 months', level: 'Certificate' },
        { name: 'Content Marketing', duration: '1.5 months', level: 'Certificate' }
      ],
      description: 'Master digital marketing strategies, SEO, social media, and online advertising to build successful online businesses.',
      careers: ['Digital Marketing Executive', 'SEO Specialist', 'Social Media Manager', 'Content Strategist']
    },
    {
      icon: GraduationCap,
      title: 'Teacher Training',
      color: 'from-teal-600 to-teal-700',
      bgColor: 'bg-teal-50',
      borderColor: 'border-teal-200',
      courses: [
        { name: 'Nursery Teacher Training (NTT)', duration: '12 months', level: 'Diploma' },
        { name: 'Computer Teacher Training (CTT)', duration: '6 months', level: 'Certificate' }
      ],
      description: 'Professional training programs for aspiring teachers. Learn modern teaching methodologies and classroom management.',
      careers: ['Nursery Teacher', 'Pre-Primary Teacher', 'Computer Teacher', 'Education Coordinator']
    },
    {
      icon: Sparkles,
      title: 'Women Empowerment',
      color: 'from-pink-600 to-rose-700',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      courses: [
        { name: 'Diploma in Beauty Culture & Make-up', duration: '6 months', level: 'Diploma' },
        { name: 'Fashion Designing', duration: '12 months', level: 'Diploma' },
        { name: 'Dress Designing', duration: '6 months', level: 'Certificate' },
        { name: 'Tailoring Course', duration: '6 months', level: 'Certificate' },
        { name: 'Spoken English (Basic & Advance)', duration: '3 months', level: 'Certificate' },
        { name: 'IELTS / PTE Preparation', duration: '3 months', level: 'Certificate' },
        { name: 'Personality Development', duration: '2 months', level: 'Certificate' }
      ],
      description: 'Empower yourself with skills that open doors to self-employment and personal growth. From beauty to fashion and communication.',
      careers: ['Beautician', 'Makeup Artist', 'Fashion Designer', 'Tailor', 'Boutique Owner']
    }
  ];

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
            <Code className="h-4 w-4 text-slate-600" />
            <span className="text-slate-800 text-sm font-semibold uppercase tracking-wide">Course Categories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Choose Your
            <span className="block text-amber-600">Career Path</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From IT and design to business and beauty - explore our comprehensive range of
            vocational courses designed to make you job-ready and confident.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`flex flex-col items-center space-y-2 p-4 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
              }`}
            >
              {(() => {
                const CategoryIcon = category.icon;
                return <CategoryIcon className="h-6 w-6" />;
              })()}
              <span className="text-sm text-center leading-tight">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Category Details */}
        <div className={`${categories[activeCategory].bgColor} rounded-3xl p-8 lg:p-12 border ${categories[activeCategory].borderColor}`}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Category Info */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${categories[activeCategory].color} rounded-xl flex items-center justify-center shadow-lg`}>
                    {(() => {
                      const ActiveCategoryIcon = categories[activeCategory].icon;
                      return <ActiveCategoryIcon className="h-8 w-8 text-white" />;
                    })()}
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{categories[activeCategory].title}</h3>
                <p className="text-lg text-slate-700 leading-relaxed">{categories[activeCategory].description}</p>
              </div>

              {/* Career Opportunities */}
              <div>
                <h4 className="font-bold text-slate-900 mb-3 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-amber-500" />
                  Career Opportunities
                </h4>
                <div className="space-y-2">
                  {categories[activeCategory].careers.map((career, index) => (
                    <div key={index} className="flex items-center space-x-2 text-slate-700">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">{career}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className={`w-full bg-gradient-to-r ${categories[activeCategory].color} text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                <span>Enroll Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>

            {/* Courses List */}
            <div className="lg:col-span-2">
              <div className="bg-white/70 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                  <span className={`w-1 h-6 bg-gradient-to-b ${categories[activeCategory].color} rounded-full mr-3`}></span>
                  Available Courses
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {categories[activeCategory].courses.map((course, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl border border-slate-200 hover:shadow-md transition-all duration-300 group">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h5 className="font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                            {course.name}
                          </h5>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{course.duration}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center space-x-1">
                              <Award className="h-4 w-4" />
                              <span>{course.level}</span>
                            </div>
                          </div>
                        </div>
                        <button className={`px-4 py-2 bg-gradient-to-r ${categories[activeCategory].color} text-white rounded-lg text-sm font-medium hover:shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100`}>
                          Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose LBSTI */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Job-Ready Skills</h4>
            <p className="text-slate-600 text-sm">Practical training focused on real-world applications</p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Certified Courses</h4>
            <p className="text-slate-600 text-sm">Industry-recognized certificates upon completion</p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Clock className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Flexible Timings</h4>
            <p className="text-slate-600 text-sm">Morning, evening, and weekend batches available</p>
          </div>

          <div className="text-center p-6 bg-slate-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Award className="h-6 w-6 text-white" />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Placement Support</h4>
            <p className="text-slate-600 text-sm">Career guidance and job placement assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
