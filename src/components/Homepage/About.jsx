import React from 'react';
import { ShieldCheck, Leaf, Heart, Beaker } from 'lucide-react';

const TrustItem = (props) => (
  <div className="flex flex-col items-center text-center px-4 group">
    <div className="mb-8 p-8 rounded-[32px] bg-white transition-all duration-500 group-hover:bg-[#FF6B00] group-hover:-translate-y-3 shadow-xl shadow-blue-900/5 group-hover:shadow-orange-900/20 border border-[#0A2D50]/5 group-hover:border-transparent">
      <props.Icon 
        strokeWidth={2} 
        size={36} 
        className="text-[#0A2D50] group-hover:text-white transition-colors duration-500" 
      />
    </div>
    <h3 className="text-sm uppercase tracking-[0.3em] font-black text-[#0A2D50] mb-4 group-hover:text-[#FF6B00] transition-colors">
      {props.title}
    </h3>
    <p className="text-sm leading-relaxed text-[#0A2D50]/50 max-w-[220px] font-medium">
      {props.description}
    </p>
  </div>
);

const BrandTrust = () => {
  const trustPoints = [
    {
      Icon: ShieldCheck,
      title: "Dermatologist Approved",
      description: "Rigorous testing protocols approved by leading skin specialists."
    },
    {
      Icon: Leaf,
      title: "Natural Ingredients",
      description: "Sustainably sourced botanicals at peak potency for your skin."
    },
    {
      Icon: Heart,
      title: "Cruelty Free",
      description: "Ethically formulated without animal testing at any stage."
    },
    {
      Icon: Beaker,
      title: "Clinically Tested",
      description: "Science-backed results proven through double-blind studies."
    }
  ];

  return (
    <section className="py-32 bg-[#FFF9F1]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-24">
          <div className="h-2 w-16 bg-[#FF6B00] rounded-full mb-8"></div>
          <p className="text-xs uppercase tracking-[0.6em] text-[#FF6B00] font-black">
            The Clinic Standard
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-12">
          {trustPoints.map((point, index) => (
            <TrustItem 
              key={index}
              Icon={point.Icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>

        {/* Bottom Detail */}
        <div className="mt-24 flex justify-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0A2D50]/30 border-2 border-[#0A2D50]/5 px-8 py-4 rounded-full bg-white shadow-sm">
            Est. 2024 — Advanced Clinical Formulation
          </p>
        </div>
      </div>
    </section>
  );
};

export default BrandTrust;
