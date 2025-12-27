import React, { useEffect, useState } from 'react';
import { ArrowRight, Play, Award, Users, BookOpen, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [currentStat, setCurrentStat] = useState(0);
  
  const stats = [
    { number: '25+', label: 'Years Excellence', icon: Award },
    { number: '5000+', label: 'Alumni Network', icon: Users },
    { number: '50+', label: 'Industry Partners', icon: BookOpen },
    { number: '95%', label: 'Placement Rate', icon: TrendingUp },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Sophisticated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white rotate-45"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white rotate-12"></div>
          <div className="absolute bottom-32 left-1/3 w-28 h-28 border border-white -rotate-12"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">Admissions Open 2024</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              <span className="block">Engineering</span>
              <span className="block bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Excellence
              </span>
              <span className="block text-4xl lg:text-5xl text-slate-300 font-normal mt-2">
                Since 1998
              </span>
            </h1>

            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
              Pioneering technical education with industry-aligned curriculum, 
              state-of-the-art facilities, and a legacy of producing skilled professionals 
              who lead innovation across industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105">
                <span>Explore Programs</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group flex items-center space-x-3 text-white hover:text-amber-400 transition-colors duration-300">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-amber-500/20 transition-colors duration-300">
                  <Play className="h-5 w-5 ml-1" />
                </div>
                <span className="font-medium">Watch Campus Tour</span>
              </button>
            </div>
          </div>

          {/* Stats Display */}
          <div className="relative">
            <div className="bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-white mb-2">
                  {stats[currentStat].number}
                </div>
                <div className="text-slate-400 font-medium uppercase tracking-wide text-sm">
                  {stats[currentStat].label}
                </div>
                <div className="mt-4">
                  {(() => {
                    const CurrentIcon = stats[currentStat].icon;
                    return <CurrentIcon className="h-8 w-8 text-amber-400 mx-auto" />;
                  })()}
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStat(index)}
                    className={`p-3 rounded-lg transition-all duration-300 ${
                      currentStat === index 
                        ? 'bg-amber-500/20 border border-amber-500/30' 
                        : 'bg-slate-700/30 hover:bg-slate-700/50'
                    }`}
                  >
                    {(() => {
                      const StatIcon = stat.icon;
                      return <StatIcon className={`h-5 w-5 mx-auto ${
                        currentStat === index ? 'text-amber-400' : 'text-slate-500'
                      }`} />;
                    })()}
                  </button>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-slate-400">
            <span className="text-xs uppercase tracking-wide">Scroll to explore</span>
            <div className="w-px h-8 bg-gradient-to-b from-slate-400 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;