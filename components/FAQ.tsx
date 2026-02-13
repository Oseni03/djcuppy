
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What is DJ Cuppy's typical set duration?", a: "Standard performance sets range from 60 to 120 minutes, though this can be customized based on your event requirements." },
    { q: "Do you provide technical equipment?", a: "We can provide a full technical rider including high-end sound and lighting, or work with your existing production team." },
    { q: "Is international travel included in the booking fee?", a: "Travel and accommodation expenses are typically handled separately or included in our 'Premium Global' package." },
    { q: "Can we request specific songs?", a: "DJ Cuppy curates every set specifically for the vibe of the event. We welcome a 'favorites' list to guide the energy, but trust her expertise to lead the dance floor." },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-syncopate font-bold text-center mb-16 uppercase">Booking <span className="text-pink-500">FAQ</span></h2>
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-white/10 rounded-2xl overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-8 flex justify-between items-center text-left hover:bg-white/5 transition-all"
            >
              <span className="text-lg font-bold tracking-wide">{faq.q}</span>
              {openIndex === i ? <Minus className="text-pink-500" /> : <Plus className="text-pink-500" />}
            </button>
            {openIndex === i && (
              <div className="px-8 pb-8 text-white/50 leading-relaxed animate-fadeIn">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
