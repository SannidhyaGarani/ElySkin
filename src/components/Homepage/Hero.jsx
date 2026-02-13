import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Star, Play, Award, ShieldCheck } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[100vh] pt-32 pb-20 overflow-hidden flex items-center selection:bg-[#FF6B00] selection:text-white">
      {/* Background Layers - Enhanced Depth */}
      <div className="absolute inset-0 bg-[#FFF9F1] -z-20" />
      {/* Background Layers - Adjusted to start below Header */}
      <div className="absolute inset-0 bg-[#FFF9F1] -z-20" />

      {/* The Blue Panel - Now starting at top-32 (matching your Hero pt-32) */}
      <div className="absolute top-28 right-0 w-[65%] h-[calc(100%-112px)] bg-[#0A2D50] rounded-l-[160px] hidden lg:block -z-10 shadow-[-40px_0_80px_rgba(0,0,0,0.15)] overflow-hidden transition-all duration-700">
        {/* Subtle texture for the blue panel */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        {/* Light Glow effect */}
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#FF6B00]/10 rounded-full blur-[120px]" />
      </div>

      {/* Animated Gradient Blob */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#FF6B00]/5 rounded-full blur-[180px] -z-10 animate-pulse" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left Side: Editorial Image Composition */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
            <div className="relative">
              {/* Main Image Frame with Premium Border */}
              <div className="relative aspect-[0.82/1] rounded-[180px] rounded-tr-[60px] rounded-bl-[60px] p-3 bg-gradient-to-br from-[#FF6B00]/20 to-transparent shadow-2xl">
                <div className="w-full h-full rounded-[170px] rounded-tr-[52px] rounded-bl-[52px] overflow-hidden border-[8px] border-white shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=1200"
                    alt="Premium Skincare"
                    className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
                  />
                </div>

                {/* Floating "Explore" Circular Text - Refined */}
                <div className="absolute -bottom-6 -right-6 w-44 h-44 bg-[#FF6B00] rounded-full flex items-center justify-center p-1 shadow-2xl cursor-pointer hover:rotate-12 transition-transform duration-700 group border-[6px] border-[#FFF9F1]">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                      <defs>
                        <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                      </defs>
                      <text className="text-[9px] font-black fill-white uppercase tracking-[0.25em]">
                        <textPath xlinkHref="#circlePath">
                          • LUXURY CARE • CLINICAL RESULTS • LUXURY CARE •
                        </textPath>
                      </text>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play size={28} fill="white" className="text-white ml-1 group-hover:scale-125 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card - Minimalist Premium */}
              <div className="absolute top-12 -left-12 bg-white/90 backdrop-blur-md p-6 rounded-[30px] shadow-xl border border-white/50 animate-float hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0A2D50] rounded-2xl flex items-center justify-center text-white">
                    <Award size={24} />
                  </div>
                  <div>
                    <p className="text-[#0A2D50] font-black text-xl leading-none">99%</p>
                    <p className="text-[#0A2D50]/50 text-[10px] uppercase font-bold tracking-widest">Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Typography & CTAs */}
          <div className={`lg:col-span-7 lg:pl-12 space-y-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#0A2D50] border border-white/10 shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
                </span>
                <span className="text-[10px] font-black text-white uppercase tracking-[0.5em]">The Gold Standard of Skin</span>
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-[100px] font-black text-[#0A2D50] lg:text-white leading-[0.85] tracking-tight">
                Redefining <br />
                <span className="text-[#FF6B00] relative inline-block italic">
                  Clinical
                  <svg className="absolute -bottom-4 left-0 w-full opacity-60" viewBox="0 0 300 20" fill="none">
                    <path d="M5 15C100 5 200 5 295 15" stroke="#FF6B00" strokeWidth="10" strokeLinecap="round" />
                  </svg>
                </span> <br />
                Excellence
              </h1>

              <p className="text-lg md:text-xl text-[#0A2D50]/70 lg:text-white/70 font-medium max-w-lg leading-relaxed border-l-4 border-[#FF6B00] pl-6">
                Where medical precision meets aesthetic artistry. We deliver evidence-based treatments tailored to your unique biology.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-10">
              {/* Main Button with enhanced shadow */}
              <button className="group relative px-12 py-7 bg-[#FF6B00] text-white rounded-[24px] font-black text-lg overflow-hidden transition-all hover:translate-y-[-4px] active:scale-95 shadow-[0_20px_40px_rgba(255,107,0,0.3)]">
                <span className="relative z-10 flex items-center gap-3">
                  Start Your Journey
                  <ArrowUpRight className="group-hover:rotate-45 transition-transform duration-300" size={24} />
                </span>
                <div className="absolute inset-0 bg-[#0A2D50] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              {/* Enhanced Trust Section */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-[3px] border-white lg:border-[#0A2D50] overflow-hidden -ml-4 first:ml-0 shadow-lg hover:z-20 hover:-translate-y-1 transition-all">
                      <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-14 h-14 rounded-full bg-[#0A2D50] border-[3px] border-white lg:border-[#1e3a5a] flex items-center justify-center text-white text-[10px] font-black -ml-4 shadow-lg relative z-10">
                    +12k
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={14} fill="#FF6B00" className="text-[#FF6B00]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#0A2D50] lg:text-white/60 uppercase tracking-widest">
                    World-Class <span className="text-[#FF6B00] lg:text-white">Patient Rating</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
