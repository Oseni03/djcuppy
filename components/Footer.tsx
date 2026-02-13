
import React from 'react';
import { Instagram, Twitter, Youtube, Music2, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 pt-20 pb-10 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 lg:col-span-1">
          <a href="#" className="font-syncopate text-3xl font-bold tracking-tighter mb-8 block">
            CUPPY<span className="text-pink-500">.</span>
          </a>
          <p className="text-white/40 leading-relaxed font-light mb-8">
            Global entertainer, music pioneer, and the pulse of the international party scene. Based in London & Lagos.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Youtube, Music2].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-8">Navigation</h4>
          <ul className="space-y-4 text-sm font-semibold tracking-widest uppercase">
            <li><a href="#about" className="hover:text-pink-500 transition-colors">Biography</a></li>
            <li><a href="#media" className="hover:text-pink-500 transition-colors">Media Hub</a></li>
            <li><a href="#tour" className="hover:text-pink-500 transition-colors">Tour Schedule</a></li>
            <li><a href="#booking" className="hover:text-pink-500 transition-colors">Bookings</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-8">Management</h4>
          <ul className="space-y-4 text-sm font-semibold">
            <li className="text-white/60">Global Inquiries:</li>
            <li className="text-white font-bold">bookings@djcuppy.com</li>
            <li className="text-white/60 mt-4">Press / PR:</li>
            <li className="text-white font-bold">press@djcuppy.com</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.4em] uppercase text-white/40 mb-8">Newsletter</h4>
          <p className="text-sm text-white/40 mb-6 font-light">Join the Cuppy Crew for exclusive mix releases and tour updates.</p>
          <form className="relative">
            <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-6 pr-14 focus:border-pink-500 outline-none transition-all" />
            <button className="absolute right-2 top-2 w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all">
              <Mail size={18} />
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.4em] text-white/20 uppercase border-t border-white/5 pt-10">
        <p>© 2026 DJ CUPPY WORLDWIDE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
