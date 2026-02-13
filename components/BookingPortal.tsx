
import React, { useState } from 'react';
import { Calendar, MapPin, DollarSign, Send, CheckCircle2 } from 'lucide-react';

const BookingPortal: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulation of form processing
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto text-center py-20 bg-neutral-900/50 rounded-3xl border border-pink-500/30">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-pink-500 rounded-full flex items-center justify-center animate-bounce">
            <CheckCircle2 size={48} className="text-white" />
          </div>
        </div>
        <h2 className="text-4xl font-syncopate font-bold mb-4">INQUIRY SENT!</h2>
        <p className="text-white/60 mb-8 max-w-md mx-auto">Thank you for reaching out. DJ Cuppy's management team will review your request and get back to you within 24-48 hours.</p>
        <button onClick={() => setSubmitted(false)} className="px-10 py-4 border border-white/20 rounded-full hover:bg-white/10 transition-all font-bold tracking-widest text-xs uppercase">
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-5xl md:text-7xl font-syncopate font-bold mb-8 leading-none">
          SECURE THE <br /> <span className="text-pink-500">EXPERIENCE</span>
        </h2>
        <p className="text-xl text-white/50 mb-12 font-light leading-relaxed">
          Book DJ Cuppy for your next major event. Our team handles every detail from technical riders to travel logistics.
        </p>
        
        <div className="space-y-10">
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center shrink-0 border border-pink-500/20">
              <Calendar className="text-pink-500" size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Global Availability</h4>
              <p className="text-white/40 text-sm">Available for international bookings year-round.</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
              <MapPin className="text-purple-500" size={20} />
            </div>
            <div>
              <h4 className="text-lg font-bold mb-1">Full Production Support</h4>
              <p className="text-white/40 text-sm">Optional lighting, sound, and stage management services.</p>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-neutral-900/80 p-10 rounded-3xl border border-white/5 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold tracking-widest text-white/40 mb-2 uppercase">Full Name</label>
            <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-pink-500 outline-none transition-all" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-[10px] font-bold tracking-widest text-white/40 mb-2 uppercase">Email Address</label>
            <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-pink-500 outline-none transition-all" placeholder="john@company.com" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[10px] font-bold tracking-widest text-white/40 mb-2 uppercase">Event Type</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-pink-500 outline-none transition-all appearance-none cursor-pointer">
              <option>Corporate Gala</option>
              <option>Private Luxury Wedding</option>
              <option>Festival Mainstage</option>
              <option>Club / Residency</option>
              <option>Private Birthday / Party</option>
            </select>
          </div>
          <div>
            <label className="block text-[10px] font-bold tracking-widest text-white/40 mb-2 uppercase">Date Preference</label>
            <input required type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-pink-500 outline-none transition-all" />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold tracking-widest text-white/40 mb-2 uppercase">Location / Venue</label>
          <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-pink-500 outline-none transition-all" placeholder="London, UK - Savoy Hotel" />
        </div>

        <div>
          <label className="block text-[10px] font-bold tracking-widest text-white/40 mb-2 uppercase">Estimated Budget (USD)</label>
          <div className="relative">
            <DollarSign className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={18} />
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-14 py-4 focus:border-pink-500 outline-none transition-all" placeholder="e.g. 50,000" />
          </div>
        </div>

        <div>
          <label className="block text-[10px] font-bold tracking-widest text-white/40 mb-2 uppercase">Message / Requirements</label>
          <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-pink-500 outline-none transition-all resize-none" placeholder="Tell us more about your vision..."></textarea>
        </div>

        <button type="submit" className="w-full bg-pink-600 hover:bg-pink-500 text-white py-5 rounded-xl font-bold tracking-[0.2em] transition-all flex items-center justify-center gap-3">
          SEND BOOKING INQUIRY <Send size={20} />
        </button>
      </form>
    </div>
  );
};

export default BookingPortal;
