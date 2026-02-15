import React from "react";
import { motion } from "framer-motion";
import { Play, Calendar, Music } from "lucide-react";

const Hero: React.FC = () => {
	const handleNavClick = (
		e: React.MouseEvent<HTMLAnchorElement>,
		href: string,
	) => {
		e.preventDefault();
		const targetId = href.replace("#", "");
		const element = document.getElementById(targetId);
		if (element) {
			const offset = 100;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition =
				elementPosition + window.pageYOffset - offset;
			window.scrollTo({ top: offsetPosition, behavior: "smooth" });
		}
	};

	return (
		<section
			id="home"
			className="relative h-screen w-full flex items-center justify-center overflow-hidden"
		>
			{/* Background Media - Simulation using high-quality background images and overlays */}
			<div className="absolute inset-0 z-0">
				<div
					className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
					style={{
						backgroundImage:
							'url("https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=2000")',
					}}
				></div>
				<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent"></div>
				<div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay"></div>
			</div>

			<div className="relative z-10 text-center px-4 max-w-5xl">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h2 className="text-pink-500 font-syncopate text-xs md:text-sm tracking-[0.5em] mb-4 font-bold uppercase">
						International DJ • Producer • Performer
					</h2>
					<h1 className="text-6xl md:text-9xl font-syncopate font-bold leading-none mb-8 tracking-tighter">
						GLOBAL <br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 neon-text-pink">
							SOUND
						</span>
					</h1>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 1 }}
					className="flex flex-col md:flex-row items-center justify-center gap-6"
				>
					<a
						href="#booking"
						onClick={(e) => handleNavClick(e, "#booking")}
						className="w-full md:w-auto px-10 py-5 bg-pink-600 hover:bg-pink-500 text-white font-bold rounded-full transition-all flex items-center justify-center gap-2 tracking-widest shadow-[0_0_20px_rgba(255,0,255,0.4)]"
					>
						BOOK DJ CUPPY
					</a>
					<a
						href="#media"
						onClick={(e) => handleNavClick(e, "#media")}
						className="w-full md:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold rounded-full border border-white/20 transition-all flex items-center justify-center gap-2 tracking-widest"
					>
						LISTEN TO MIXES <Play size={18} fill="white" />
					</a>
				</motion.div>
			</div>

			{/* Floating Elements for Energy */}
			<div className="absolute bottom-10 left-10 hidden lg:block">
				<div className="flex flex-col gap-4 text-xs font-semibold tracking-widest text-white/40 rotate-90 origin-left">
					<span>SCROLL TO DISCOVER</span>
				</div>
			</div>

			<div className="absolute bottom-10 right-10">
				<div className="flex gap-6">
					<Music className="text-white/40 hover:text-pink-500 transition-colors cursor-pointer" />
					<Calendar className="text-white/40 hover:text-pink-500 transition-colors cursor-pointer" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
