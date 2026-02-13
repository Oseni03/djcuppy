
import React from 'react';
import { Globe, GlassWater, Zap, Users, ShieldCheck } from 'lucide-react';

const Specialties: React.FC = () => {
  const services = [
    { title: "LUXURY WEDDINGS", icon: <GlassWater size={30} />, desc: "Elite curation for the world's most sophisticated celebrations." },
    { title: "CORPORATE EVENTS", icon: <ShieldCheck size={30} />, desc: "High-level professionalism for global brand activations and galas." },
    { title: "FESTIVAL SETS", icon: <Zap size={30} />, desc: "Mainstage energy that commands thousands of hearts and souls." },
    { title: "PRIVATE TOURS", icon: <Globe size={30} />, desc: "Bespoke international travel performances for exclusive clientele." },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-6 uppercase">Event <span className="text-pink-500">Specialties</span></h2>
        <p className="text-white/50 max-w-2xl mx-auto font-light text-lg">From intimate private gatherings to massive global festivals, every set is tailored for maximum impact and elegance.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, i) => (
          <div key={i} className="p-10 rounded-3xl bg-neutral-900/50 border border-white/5 hover:border-pink-500/50 transition-all group flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:bg-pink-500 group-hover:text-white text-pink-500 transition-all duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">{service.title}</h3>
            <p className="text-white/40 leading-relaxed text-sm">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialties;
