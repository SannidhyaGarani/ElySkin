import React from 'react';
import { Shield, Users, Heart, Award, CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em]">
              Our Heritage
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-[#0A2D50] leading-[0.85] tracking-tighter">
              Crafting <br />
              <span className="text-[#FF6B00] italic">Radiance</span> <br />
              Since 1994
            </h1>
            <p className="text-lg text-[#0A2D50]/60 font-medium leading-relaxed max-w-xl">
              ElySkin was born from a simple yet profound belief: that true beauty is a reflection of health, and nature holds the most potent secrets to vitality.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden bg-[#FFF9F1]">
              <img 
                src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800" 
                alt="Laboratory" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110 hover:scale-100"
              />
            </div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white rounded-[40px] p-8 shadow-2xl border border-[#0A2D50]/5 hidden md:block">
              <p className="text-4xl font-black text-[#FF6B00] mb-2">98%</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#0A2D50]">Organic Ingredients</p>
              <div className="mt-6 h-1 w-full bg-[#FFF9F1] rounded-full overflow-hidden">
                <div className="h-full w-[98%] bg-[#FF6B00]" />
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Shield size={32} />,
              title: "Ethical Science",
              desc: "We combine traditional botanical knowledge with cutting-edge dermatological research."
            },
            {
              icon: <Heart size={32} />,
              title: "Pure Integrity",
              desc: "Zero synthetic fragrances, parabens, or harmful chemicals. Just pure, active ingredients."
            },
            {
              icon: <Users size={32} />,
              title: "Global Community",
              desc: "Supporting sustainable farming communities across three continents for our raw materials."
            }
          ].map((value, i) => (
            <div key={i} className="p-12 rounded-[48px] bg-[#FFF9F1]/50 border border-[#0A2D50]/5 space-y-6 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-[#FF6B00] shadow-sm group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-2xl font-black text-[#0A2D50]">{value.title}</h3>
              <p className="text-sm text-[#0A2D50]/60 font-medium leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="bg-[#0A2D50] rounded-[64px] p-12 md:p-24 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B00] rounded-full blur-[150px] opacity-20 -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF6B00] mb-8 block">The Philosophy</span>
            <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight tracking-tighter">
              "We don't just create skincare; we cultivate confidence through clarity."
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Award className="text-[#FF6B00]" />
              </div>
              <div>
                <p className="font-black text-sm uppercase tracking-widest">Isabella Ely</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Founder & Chief Formulator</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;