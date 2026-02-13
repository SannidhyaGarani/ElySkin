import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Subtle parallax effect based on mouse movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX - innerWidth / 2) / 50;
    const y = (clientY - innerHeight / 2) / 50;
    setMousePosition({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative py-14 md:py-20 px-4 md:px-12 bg-[#FFF9F1] overflow-hidden"
    >
      {/* Ambient background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#FF6B00]/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-[1600px] mx-auto relative">
        <div className={`flex flex-col lg:flex-row items-center transition-all duration-1000 ease-out-expo ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          
          {/* IMAGE SECTION - Occupies more space for premium feel */}
          <div className="w-full lg:w-[60%] relative group">
            <div className="relative aspect-[16/10] md:aspect-[16/8] lg:aspect-square overflow-hidden rounded-[30px] md:rounded-[60px] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1600"
                alt="Premium Skincare Collection"
                className="w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-110"
                style={{
                  transform: `scale(1.05) translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`
                }}
              />
              {/* Sophisticated Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A2D50]/40 to-transparent mix-blend-multiply" />
            </div>

            {/* Floating Badge */}
            <div 
              className="absolute -bottom-6 -right-6 md:bottom-12 md:-right-12 bg-white p-6 md:p-10 rounded-[40px] shadow-2xl z-20 hidden sm:block transition-transform duration-500 hover:scale-105"
              style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-[40px] font-serif italic text-[#0A2D50]">25%</span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF6B00]">Inaugural Set</span>
              </div>
            </div>
          </div>

          {/* CONTENT SECTION - Overlapping the image on large screens */}
          <div className="w-full lg:w-[50%] mt-[-60px] lg:mt-0 lg:ml-[-10%] relative z-10">
            <div className="bg-[#0A2D50] p-8 md:p-16 lg:p-20 rounded-[40px] md:rounded-[60px] text-white shadow-2xl border border-white/5 relative overflow-hidden">
              
              {/* Internal Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6B00]/10 rounded-full blur-[80px]" />
              
              <div className="relative z-10 space-y-8">
                <div className="flex items-center gap-4">
                  <Sparkles size={20} className="text-[#FF6B00]" />
                  <span className="text-xs font-bold uppercase tracking-[0.5em] text-[#FF6B00]">
                    Limited Clinical Release
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight">
                  The <span className="italic font-light">ElySkin</span> <br />
                  <span className="text-[#FF6B00] font-black uppercase tracking-tighter not-italic">Ritual</span>
                </h2>

                <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-md">
                  A high-potency molecular system designed by dermatologists to 
                  <span className="text-white font-medium"> reset cellular fatigue</span> and restore glass-like transparency.
                </p>

                <div className="pt-6 space-y-10">
                  <button className="group relative overflow-hidden flex items-center justify-between bg-[#FF6B00] px-8 py-6 rounded-2xl w-full sm:w-auto sm:min-w-[280px] transition-all hover:bg-white transition-colors duration-500">
                    <span className="text-white group-hover:text-[#0A2D50] text-lg font-black uppercase tracking-widest transition-colors duration-500">
                      Claim Your Set
                    </span>
                    <ArrowRight className="text-white group-hover:text-[#0A2D50] group-hover:translate-x-2 transition-all duration-500" size={24} />
                    
                    {/* Hover Slide Effect */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0A2D50] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                  </button>

                  {/* Clinical Stats Footer */}
                  <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-serif text-[#FF6B00]">98</span>
                        <span className="text-xs text-[#FF6B00] font-bold">%</span>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 leading-tight">
                        Reported Improved <br /> Skin Elasticity
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-serif text-white">12</span>
                        <span className="text-xs text-white/40 font-bold">HR</span>
                      </div>
                      <p className="text-[10px] uppercase tracking-widest text-white/40 leading-tight">
                        Deep Epidermal <br /> Hydration Lock
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        .ease-out-expo {
          transition-timing-function: cubic-bezier(0.19, 1, 0.22, 1);
        }
      `}</style>
    </section>
  );
};

export default PromoBanner;