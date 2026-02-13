import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'The Collection': [
      { name: 'Shop All', path: '/shop' },
      { name: 'Best Sellers', path: '/shop' },
      { name: 'New Arrivals', path: '/shop' },
      { name: 'Skincare Sets', path: '/shop' }
    ],
    'Experience': [
      { name: 'About Us', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Store Locator', path: '/contact' },
      { name: 'Consultation', path: '/contact' }
    ]
  };

  return (
    <footer className="bg-[#0A2D50] text-white pt-24 pb-12 overflow-hidden relative">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF6B00]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="relative w-12 h-12 flex items-center justify-center bg-white rounded-2xl transform transition-transform group-hover:rotate-12">
                <span className="text-[#0A2D50] font-bold text-2xl">E</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-2xl font-black text-white tracking-tighter uppercase">Ely</span>
                <span className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-[0.3em] ml-auto">Skin</span>
              </div>
            </Link>
            
            <p className="text-lg text-white/60 leading-relaxed font-medium">
              We are committed to providing world-class skincare formulations with clinical precision and personalized care.
            </p>

            <div className="flex items-center gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF6B00] hover:border-[#FF6B00] transition-all duration-300 group"
                >
                  <Icon size={20} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-2 gap-12">
             {Object.entries(footerLinks).map(([title, links]) => (
               <div key={title} className="space-y-8">
                 <h4 className="text-xl font-black text-white">{title}</h4>
                 <ul className="space-y-4">
                   {links.map((link) => (
                     <li key={link.name}>
                       <Link to={link.path} className="text-white/60 hover:text-[#FF6B00] transition-colors font-medium flex items-center gap-2 group">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] opacity-0 group-hover:opacity-100 transition-opacity" />
                         {link.name}
                       </Link>
                     </li>
                   ))}
                 </ul>
               </div>
             ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-8">
            <h4 className="text-xl font-black text-white">The Newsletter</h4>
            <p className="text-white/60 font-medium">Join our community for exclusive early access and skincare insights.</p>
            
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-white/30 focus:outline-none focus:border-[#FF6B00] transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[#FF6B00] text-white px-4 rounded-xl hover:bg-[#E56000] transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-4 text-white/60">
               <Phone size={20} className="text-[#FF6B00]" />
               <span className="font-bold">+1 888 ELY-SKIN</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/40 text-sm font-medium">
          <p>© {currentYear} Ely Skin. All rights reserved.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
