
import React from 'react';
import { Play, Download, ExternalLink, Music } from 'lucide-react';

const MediaHub: React.FC = () => {
  const tracks = [
    { title: "Cuppy On A Mission (Mix)", type: "Mix", length: "45:00", img: "https://picsum.photos/seed/mix1/400/400" },
    { title: "Jollof on the Jet", type: "Single", length: "3:24", img: "https://picsum.photos/seed/mix2/400/400" },
    { title: "Green Light", type: "Single", length: "3:45", img: "https://picsum.photos/seed/mix3/400/400" },
    { title: "Karma", type: "Single", length: "3:12", img: "https://picsum.photos/seed/mix4/400/400" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-4">LATEST <br /> <span className="text-pink-500">SOUNDS</span></h2>
          <p className="text-white/50 tracking-widest font-semibold">STREAM ON ALL PLATFORMS</p>
        </div>
        <button className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all font-bold text-sm tracking-widest uppercase">
          Download Press Kit <Download size={18} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {tracks.map((track, i) => (
          <div key={i} className="group relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-neutral-800">
              <img src={track.img} alt={track.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-all">
                  <Play size={32} fill="white" />
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-1">{track.title}</h3>
            <div className="flex justify-between items-center text-white/40 text-sm font-semibold tracking-widest">
              <span>{track.type}</span>
              <span>{track.length}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 rounded-3xl bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-white/5 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/3">
          <div className="w-20 h-20 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6">
            <Music className="text-pink-500" size={40} />
          </div>
          <h3 className="text-2xl font-syncopate font-bold mb-4 uppercase">Cuppy Radio</h3>
          <p className="text-white/60 font-light mb-6">Catch the weekly radio show featuring the hottest Afrobeats, House, and Electronic mixes from around the world.</p>
          <button className="flex items-center gap-2 text-pink-500 font-bold tracking-widest text-sm hover:underline">
            LISTEN ON APPLE MUSIC <ExternalLink size={16} />
          </button>
        </div>
        <div className="flex-1 w-full grid grid-cols-2 md:grid-cols-3 gap-4">
           {/* Mock playlist items */}
           {[1,2,3,4,5,6].map(j => (
             <div key={j} className="h-32 bg-white/5 rounded-xl flex items-center justify-center border border-white/5 hover:border-pink-500/30 transition-all cursor-pointer">
                <Play size={20} className="text-white/20" />
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default MediaHub;
