import React, { useEffect, useRef, useState } from 'react';

const categories = [
  {
    title: "Face Care",
    subtitle: "The Foundation",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    gridClass: "md:col-span-7 md:row-span-2",
  },
  // {
  //   title: "Serums",
  //   subtitle: "Active Potency",
  //   image: "https://images.unsplash.com/photo-1617897903246-7392ce73763d?auto=format&fit=crop&q=80&w=800",
  //   gridClass: "md:col-span-5 md:row-span-1",
  // },
  {
    title: "Creams",
    subtitle: "Deep Hydration",
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-5 md:row-span-1",
  },
  {
    title: "Body Care",
    subtitle: "Nourishing Rituals",
    image: "https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format&fit=crop&q=80&w=800",
    gridClass: "md:col-span-6 md:row-span-1",
  },
  {
    title: "Hair Care",
    subtitle: "Scalp Health",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    gridClass: "md:col-span-6 md:row-span-1",
  }
];

const CategoryCard = ({ category, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden group cursor-pointer ${category.gridClass} transition-all duration-1000 ease-out rounded-[60px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Image with luxury treatment */}
      <div className="w-full h-full aspect-[4/5] md:aspect-auto overflow-hidden bg-white">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-full object-cover transition-all duration-[2.5s] ease-out group-hover:scale-110"
        />
        {/* Navy/Orange Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2D50]/80 via-[#0A2D50]/20 to-transparent opacity-60 group-hover:opacity-90 group-hover:from-[#FF6B00]/80 transition-all duration-1000" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-12 flex flex-col justify-end items-start">
        <div className="overflow-hidden mb-4">
          <p className="text-xs uppercase tracking-[0.4em] text-white/80 font-black translate-y-full group-hover:translate-y-0 transition-transform duration-700">
            {category.subtitle}
          </p>
        </div>
        <h3 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
          {category.title}
        </h3>

        {/* Refined Button */}
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#0A2D50] group-hover:bg-[#FF6B00] group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg] shadow-xl">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

const CategorySection = () => {
  return (
    <section className="py-32 bg-[#0A2D50]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-2 w-12 bg-[#FF6B00] rounded-full"></div>
              <span className="text-xs font-black uppercase tracking-[0.4em] text-[#FF6B00]">Category List</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter">
              Curated by <br />
              <span className="text-[#FF6B00]">Skin Concern.</span>
            </h2>
          </div>
          <div className="max-w-xs space-y-6">
            <p className="text-lg text-white/60 font-bold leading-relaxed italic">
              "Experience the intersection of advanced dermatology and luxury aesthetic care."
            </p>
            <div className="flex gap-2">
              <div className="w-12 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="w-1/2 h-full bg-[#FF6B00]" />
              </div>
            </div>
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[1100px]">
          {categories.map((cat, idx) => (
            <CategoryCard key={idx} category={cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;