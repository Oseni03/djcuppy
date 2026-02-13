
import React from 'react';

const TourCalendar: React.FC = () => {
  const shows = [
    { date: "MAR 12", venue: "O2 Academy", city: "London, UK", type: "Club Performance", status: "Tickets" },
    { date: "APR 05", venue: "Coachella Valley", city: "California, USA", type: "Festival", status: "Sold Out" },
    { date: "MAY 18", venue: "Beach Club", city: "Dubai, UAE", type: "Private Gala", status: "Private" },
    { date: "JUN 22", venue: "Hard Rock Hotel", city: "Ibiza, Spain", type: "Residency", status: "Tickets" },
    { date: "JUL 10", venue: "Grand Ballroom", city: "Lagos, Nigeria", type: "Concert", status: "Tickets" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-4">TOUR <span className="text-pink-500">DATES</span></h2>
        <p className="text-white/50 font-semibold tracking-[0.3em]">CUPPY WORLDWIDE 2026</p>
      </div>

      <div className="space-y-4">
        {shows.map((show, i) => (
          <div key={i} className="flex flex-col md:flex-row items-center justify-between p-8 bg-neutral-900/40 rounded-2xl border border-white/5 hover:border-pink-500/20 hover:bg-neutral-900/60 transition-all gap-6">
            <div className="flex items-center gap-10 flex-1 w-full">
              <div className="text-center md:text-left min-w-[100px]">
                <p className="text-2xl font-bold text-pink-500">{show.date}</p>
                <p className="text-[10px] font-bold text-white/40 tracking-widest">2026</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 uppercase tracking-tight">{show.venue}</h4>
                <p className="text-white/50 text-sm font-semibold tracking-widest">{show.city} — {show.type}</p>
              </div>
            </div>
            <button className={`w-full md:w-40 py-4 rounded-full font-bold text-xs tracking-widest uppercase transition-all ${
              show.status === 'Tickets' ? 'bg-white text-black hover:bg-pink-500 hover:text-white' : 
              show.status === 'Sold Out' ? 'bg-red-500/20 text-red-500 border border-red-500/50 cursor-not-allowed' :
              'bg-blue-500/20 text-blue-500 border border-blue-500/50'
            }`}>
              {show.status}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourCalendar;
