
import React, { useState } from 'react';
import { Menu, X, Instagram, Twitter, Music, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isScrolled: boolean;
}

const Navbar: React.FC<Props> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'MUSIC', href: '#media' },
    { name: 'TOUR', href: '#tour' },
    { name: 'BOOKING', href: '#booking' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-syncopate text-2xl font-bold tracking-tighter flex items-center gap-2">
          <span className="text-white">CUPPY</span>
          <span className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold tracking-widest hover:text-pink-500 transition-colors uppercase">
              {link.name}
            </a>
          ))}
          <a href="#booking" className="px-6 py-2 bg-pink-600 text-white font-bold text-xs tracking-widest hover:bg-pink-500 transition-all rounded-full neon-border-purple uppercase">
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-4xl font-syncopate font-bold hover:text-pink-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-6 mt-8">
              <Instagram className="hover:text-pink-500 cursor-pointer" />
              <Twitter className="hover:text-pink-500 cursor-pointer" />
              <Music className="hover:text-pink-500 cursor-pointer" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
