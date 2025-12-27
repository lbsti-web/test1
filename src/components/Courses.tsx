import React from 'react';
import { Code, Database, Smartphone, Globe, PenTool, TrendingUp } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      icon: Code,
      title: 'Web Development',
      duration: '6 months',
      description: 'Master HTML, CSS, JavaScript, React, and Node.js to build modern web applications',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Database,
      title: 'Data Science & Analytics',
      duration: '8 months',
      description: 'Learn Python, SQL, machine learning, and data visualization techniques',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      duration: '6 months',
      description: 'Create native and cross-platform mobile applications using React Native',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      duration: '4 months',
      description: 'Master SEO, social media marketing, content creation, and analytics',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    },
    {
      icon: PenTool,
      title: 'UI/UX Design',
      duration: '5 months',
      description: 'Design beautiful and functional user interfaces with modern design principles',
      color: 'from-indigo-500 to-purple-500',
      bgColor: 'from-indigo-50 to-purple-50'
    },
    {
      icon: TrendingUp,
      title: 'Business Analytics',
      duration: '6 months',
      description: 'Analyze business data, create reports, and make data-driven decisions',
      color: 'from-teal-500 to-cyan-500',
      bgColor: 'from-teal-50 to-cyan-50'
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to equip you with industry-relevant skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${course.bgColor} p-8 rounded-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group`}
            >
              <div className={`bg-gradient-to-r ${course.color} p-4 rounded-lg w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <course.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-sm text-gray-500 mb-4 font-medium">{course.duration}</p>
              <p className="text-gray-600 mb-6">{course.description}</p>
              
              <div className="flex justify-between items-center">
                <button className={`bg-gradient-to-r ${course.color} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow duration-200`}>
                  Learn More
                </button>
                <span className="text-sm text-gray-500">Starting Soon</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose Our Courses?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-600">Practical Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Student Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">Live</div>
                <div className="text-gray-600">Industry Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;