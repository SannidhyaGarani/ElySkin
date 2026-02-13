import React, { useEffect, useRef, useState } from 'react';
import { Send, Sparkles, ShieldCheck, Mail } from 'lucide-react';

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle logic here
    console.log("Subscribing:", email);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-14 md:py-20 bg-[#FFF9F1] overflow-hidden relative"
    >
      {/* Background Brand Watermark */}
      <div className="absolute bottom-0 right-0 translate-y-1/4 translate-x-1/4 text-[30vw] font-black text-[#0A2D50]/[0.02] pointer-events-none select-none">
        INNER CIRCLE
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className={`transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          
          <div className="relative bg-[#0A2D50] rounded-[40px] md:rounded-[80px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(10,45,80,0.3)]">
            
            {/* Visual Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#FF6B00]/20 to-transparent rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
              
              {/* LEFT: Content Narrative */}
              <div className="p-10 md:p-20 lg:p-24 space-y-10 border-b lg:border-b-0 lg:border-r border-white/5">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-px bg-[#FF6B00]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FF6B00]">
                      Laboratory Access
                    </span>
                  </div>
                  
                  <h2 className="text-5xl md:text-7xl font-serif text-white leading-[0.9] tracking-tighter">
                    Join the <br />
                    <span className="italic font-light">ElySkin</span> <span className="text-[#FF6B00] not-italic font-black uppercase">Elite</span>
                  </h2>
                  
                  <p className="text-lg text-white/50 font-light leading-relaxed max-w-md">
                    Membership grants you early access to clinical drops, 
                    <span className="text-white"> bespoke skincare regimens</span>, and molecular research updates.
                  </p>
                </div>

                {/* Trust Pills */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <ShieldCheck size={14} className="text-[#FF6B00]" />
                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Privacy Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                    <Sparkles size={14} className="text-[#FF6B00]" />
                    <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Monthly Clinical Insights</span>
                  </div>
                </div>
              </div>

              {/* RIGHT: Interaction Area */}
              <div className="p-10 md:p-20 lg:p-24 flex flex-col justify-center bg-white/[0.02] backdrop-blur-sm">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="group relative">
                    <label className={`absolute left-0 transition-all duration-300 pointer-events-none uppercase tracking-[0.3em] text-[10px] font-black ${
                      isFocused || email ? '-top-6 text-[#FF6B00]' : 'top-4 text-white/30'
                    }`}>
                      Electronic Mail Address
                    </label>
                    
                    <div className="relative flex items-center">
                      <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        className="w-full bg-transparent border-b-2 border-white/10 py-4 text-xl md:text-2xl text-white font-serif italic focus:outline-none focus:border-[#FF6B00] transition-colors placeholder-transparent"
                        required
                      />
                      <Mail className={`absolute right-0 transition-colors duration-300 ${isFocused ? 'text-[#FF6B00]' : 'text-white/10'}`} size={24} />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="group relative w-full overflow-hidden bg-[#FF6B00] py-6 rounded-2xl transition-all duration-500 hover:shadow-[0_20px_40px_-10px_rgba(255,107,0,0.4)] active:scale-[0.98]"
                  >
                    {/* Button Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="relative z-10 flex items-center justify-center gap-4 text-white">
                      <span className="text-xs font-black uppercase tracking-[0.4em]">Request Membership</span>
                      <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </button>

                  <div className="flex items-start gap-3 opacity-30 group hover:opacity-100 transition-opacity duration-500">
                    <input type="checkbox" className="mt-1 accent-[#FF6B00]" id="terms" required />
                    <label htmlFor="terms" className="text-[10px] text-white leading-relaxed uppercase tracking-widest cursor-pointer">
                      I agree to the clinical data processing terms and <a href="#" className="underline decoration-[#FF6B00] hover:text-[#FF6B00] transition-colors">Privacy Policy</a>.
                    </label>
                  </div>
                </form>

                {/* Subtle Brand Stamp */}
                <div className="mt-16 flex justify-end">
                   <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center text-white/10 font-serif italic text-xl">
                     E
                   </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;