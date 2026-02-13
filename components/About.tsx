
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative group"
      >
        <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
        <img 
          src="https://images.unsplash.com/photo-1598387181032-a3103a2db5b3?auto=format&fit=crop&q=80&w=1000" 
          alt="DJ Cuppy Performance" 
          className="relative rounded-2xl w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute bottom-8 left-8 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/10">
          <p className="text-4xl font-syncopate font-bold text-pink-500">100+</p>
          <p className="text-xs tracking-widest font-semibold text-white/80">GLOBAL FESTIVALS</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl font-syncopate font-bold mb-8 leading-tight">
          THE ARTIST <br />
          <span className="text-pink-500">BEHIND THE DECKS</span>
        </h2>
        <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
          <p>
            Florence Ifeoluwa Otedola, professionally known as <span className="text-white font-bold">DJ Cuppy</span>, is more than a DJ—she is a global cultural icon, philanthropist, and musical force. Based between London and Lagos, she has mastered the art of blending Afrobeats with global pop aesthetics.
          </p>
          <p>
            From headlining Glastonbury to performing for global royalty and high-fashion galas, Cuppy’s energy is infectious, sophisticated, and unmatched. She represents the new era of international entertainers who bridge the gap between luxury lifestyle and high-octane performance.
          </p>
          <p>
            Her mission is simple: To take the sound of Africa to the world and bring the energy of the world to every dance floor she touches.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <div className="px-6 py-3 border border-pink-500/30 bg-pink-500/5 rounded-full text-sm font-bold tracking-widest text-pink-500">
            APPLE MUSIC AMBASSADOR
          </div>
          <div className="px-6 py-3 border border-purple-500/30 bg-purple-500/5 rounded-full text-sm font-bold tracking-widest text-purple-500">
            PHILANTHROPIST
          </div>
          <div className="px-6 py-3 border border-white/20 bg-white/5 rounded-full text-sm font-bold tracking-widest text-white">
            OXFORD GRADUATE
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
