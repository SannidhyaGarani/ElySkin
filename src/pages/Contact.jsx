import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left: Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#FF6B00]/10 text-[#FF6B00] text-[10px] font-black uppercase tracking-[0.3em]">
                Get in Touch
              </span>
              <h1 className="text-6xl md:text-8xl font-black text-[#0A2D50] leading-[0.85] tracking-tighter">
                Let's Start a <br />
                <span className="text-[#FF6B00] italic">Conversation</span>
              </h1>
              <p className="text-lg text-[#0A2D50]/60 font-medium leading-relaxed max-w-md">
                Have questions about our formulations or need a personalized skincare routine? Our experts are here to help.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail size={24} />, label: "Email Us", val: "concierge@elyskin.com" },
                { icon: <Phone size={24} />, label: "Call Us", val: "+1 (888) ELY-SKIN" },
                { icon: <MapPin size={24} />, label: "Visit Atelier", val: "721 Fifth Avenue, New York" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF9F1] flex items-center justify-center text-[#FF6B00] group-hover:bg-[#0A2D50] group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#0A2D50]/40 mb-1">{item.label}</p>
                    <p className="text-xl font-black text-[#0A2D50]">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-12 border-t border-[#0A2D50]/5">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#0A2D50]/40 mb-6">Follow Our Journey</p>
              <div className="flex gap-4">
                {[<Instagram />, <Twitter />, <Facebook />].map((icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-xl border border-[#0A2D50]/5 flex items-center justify-center text-[#0A2D50] hover:bg-[#FF6B00] hover:text-white hover:border-[#FF6B00] transition-all">
                    {icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="relative">
            <div className="bg-[#FFF9F1] rounded-[60px] p-8 md:p-16 border border-[#0A2D50]/5">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2D50]/60 ml-2">Your Name</label>
                    <input type="text" className="w-full bg-white border border-[#0A2D50]/5 rounded-2xl px-6 py-4 text-sm font-bold text-[#0A2D50] outline-none focus:border-[#FF6B00]/30 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2D50]/60 ml-2">Email Address</label>
                    <input type="email" className="w-full bg-white border border-[#0A2D50]/5 rounded-2xl px-6 py-4 text-sm font-bold text-[#0A2D50] outline-none focus:border-[#FF6B00]/30 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2D50]/60 ml-2">Subject</label>
                  <select className="w-full bg-white border border-[#0A2D50]/5 rounded-2xl px-6 py-4 text-sm font-bold text-[#0A2D50] outline-none focus:border-[#FF6B00]/30 transition-all appearance-none">
                    <option>Product Inquiry</option>
                    <option>Order Status</option>
                    <option>Personal Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#0A2D50]/60 ml-2">Message</label>
                  <textarea rows="5" className="w-full bg-white border border-[#0A2D50]/5 rounded-2xl px-6 py-4 text-sm font-bold text-[#0A2D50] outline-none focus:border-[#FF6B00]/30 transition-all resize-none" placeholder="Tell us how we can help..."></textarea>
                </div>
                <button className="w-full h-16 rounded-2xl bg-[#0A2D50] text-white font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-[#0A2D50]/20 hover:bg-[#FF6B00] transition-all transform active:scale-95 flex items-center justify-center gap-3">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-40 h-40 bg-[#FF6B00]/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;