
import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800", span: "row-span-2 col-span-1" },
    { url: "https://images.pexels.com/photos/2167381/pexels-photo-2167381.jpeg?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-2" },
    { url: "https://images.pexels.com/photos/3682820/pexels-photo-3682820.jpeg?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-1" },
    { url: "https://images.pexels.com/photos/16378105/pexels-photo-16378105.jpeg?auto=format&fit=crop&q=80&w=800", span: "row-span-2 col-span-1" },
    { url: "https://images.pexels.com/photos/33557038/pexels-photo-33557038.jpeg?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-1" },
    { url: "https://images.pexels.com/photos/8634147/pexels-photo-8634147.jpeg?auto=format&fit=crop&q=80&w=800", span: "row-span-1 col-span-1" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-syncopate font-bold mb-4">ENERGY <span className="text-pink-500">CAPTURED</span></h2>
        <p className="text-white/40 font-semibold tracking-widest uppercase">Live Performance Highlights</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {images.map((img, i) => (
          <div key={i} className={`relative overflow-hidden rounded-3xl group ${img.span}`}>
            <img 
              src={img.url} 
              alt="Performance" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-xs font-bold tracking-widest">VIEW MOMENT</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
