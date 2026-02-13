import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone, User, Search, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from './useAuth';

const Header = () => {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Shop', to: '/shop' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-[100] transition-all duration-700 ${
        isScrolled 
          ? 'bg-[#0A2D50]/95 backdrop-blur-md py-3 shadow-[0_10px_40px_rgba(0,0,0,0.2)]' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <nav className="flex items-center justify-between">
          
          {/* Logo Section - High Contrast Branding */}
          <Link to="/" className="flex items-center gap-3 group cursor-pointer relative z-50">
            <div className={`relative w-11 h-11 flex items-center justify-center rounded-2xl transform transition-all duration-500 group-hover:rotate-[15deg] ${isScrolled ? 'bg-[#FF6B00]' : 'bg-[#0A2D50]'}`}>
              <span className="font-black text-2xl text-white">+</span>
              <div className="absolute inset-0 rounded-2xl border-2 border-white/20 scale-110 group-hover:scale-125 transition-transform" />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`text-2xl font-black tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-white' : 'text-[#0A2D50]'}`}>Ely</span>
              <span className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.3em]">Skin</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-12 bg-white/5 backdrop-blur-sm px-8 py-3 rounded-full border border-white/10 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`group relative text-[13px] font-black uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled ? 'text-white' : 'text-[#0A2D50]'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF6B00] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-6 relative z-50">
            <button className={`hidden md:block transition-colors ${isScrolled ? 'text-white/70 hover:text-white' : 'text-[#0A2D50]/70 hover:text-[#0A2D50]'}`}>
              <Search size={20} />
            </button>

            <Link to="/wishlist" className="relative group">
              <Heart size={22} className={`transition-colors ${isScrolled ? 'text-white group-hover:text-[#FF6B00]' : 'text-[#0A2D50] group-hover:text-[#FF6B00]'}`} />
            </Link>
            <Link to="/cart" className="relative group">
              <ShoppingBag size={22} className={`transition-colors ${isScrolled ? 'text-white group-hover:text-[#FF6B00]' : 'text-[#0A2D50] group-hover:text-[#FF6B00]'}`} />
            </Link>
            
            <div className={`hidden lg:block w-[1px] h-8 transition-colors ${isScrolled ? 'bg-white/20' : 'bg-[#0A2D50]/10'}`} />

            <button className={`hidden lg:block px-8 py-3.5 rounded-2xl font-black text-[12px] uppercase tracking-widest transition-all transform active:scale-95 shadow-xl ${
              isScrolled 
                ? 'bg-white text-[#0A2D50] hover:bg-[#FF6B00] hover:text-white' 
                : 'bg-[#0A2D50] text-white hover:bg-[#FF6B00] shadow-[#0A2D50]/20'
            }`}>
              Book Now
            </button>
            <Link to={user ? "/account" : "/login"} className={`${isScrolled ? 'text-white' : 'text-[#0A2D50]'} hidden lg:block hover:text-[#FF6B00] transition-colors`}>
              <User size={22} />
            </Link>

            <button 
              className={`lg:hidden p-2 rounded-xl transition-all ${isScrolled ? 'bg-white/10 text-white' : 'bg-[#0A2D50] text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay - Full Screen Premium */}
      <div className={`lg:hidden fixed inset-0 bg-[#0A2D50] z-40 transition-all duration-700 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FF6B00] rounded-full blur-[100px]" />
        </div>
        
        <div className="flex flex-col h-full p-12 pt-32 justify-between">
          <div className="space-y-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.to}
                className={`block text-4xl font-black text-white hover:text-[#FF6B00] transition-all transform duration-500 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-5 p-6 bg-white/5 rounded-[32px] border border-white/10">
               <div className="w-14 h-14 rounded-2xl bg-[#FF6B00] flex items-center justify-center text-white shadow-lg shadow-orange-900/40">
                 <Phone size={28} />
               </div>
               <div>
                 <p className="text-[10px] font-black text-[#FF6B00] uppercase tracking-[0.2em]">Urgent Care</p>
                 <p className="text-xl font-black text-white">+1 800 CLINIC</p>
               </div>
            </div>
            <button className="w-full bg-[#FF6B00] text-white py-6 rounded-[24px] font-black text-lg shadow-2xl shadow-orange-950/40">
              Schedule Appointment
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
