import React, { useState, useEffect } from "react";
import { HashRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MediaHub from "./components/MediaHub";
import Specialties from "./components/Specialties";
import BookingPortal from "./components/BookingPortal";
import TourCalendar from "./components/TourCalendar";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SmartAssistant from "./components/SmartAssistant";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const HomePage = () => (
	<motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		exit={{ opacity: 0 }}
	>
		<Hero />
		<section id="about" className="py-20 px-6">
			<About />
		</section>
		<section id="media" className="py-20 bg-neutral-900/50">
			<MediaHub />
		</section>
		<section id="specialties" className="py-20 px-6">
			<Specialties />
		</section>
		<section id="tour" className="py-20 bg-neutral-900/50">
			<TourCalendar />
		</section>
		<section id="gallery" className="py-20">
			<Gallery />
		</section>
		<section
			id="booking"
			className="py-20 px-6 bg-gradient-to-b from-transparent to-black"
		>
			<BookingPortal />
		</section>
		<section id="faq" className="py-20 px-6">
			<FAQ />
		</section>
	</motion.div>
);

const App: React.FC = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
			setShowScrollTop(window.scrollY > 500);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<HashRouter>
			<div className="relative min-h-screen bg-[#050505] text-white">
				<Navbar isScrolled={isScrolled} />

				<main>
					<AnimatePresence mode="wait">
						<Routes>
							<Route path="/" element={<HomePage />} />
						</Routes>
					</AnimatePresence>
				</main>

				<Footer />
				<SmartAssistant />

				{/* Scroll to Top Button */}
				<AnimatePresence>
					{showScrollTop && (
						<motion.button
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							onClick={scrollToTop}
							className="fixed bottom-8 right-8 w-14 h-14 bg-pink-600 hover:bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 z-50 transition-all"
						>
							<ArrowUp size={24} className="text-white" />
						</motion.button>
					)}
				</AnimatePresence>
			</div>
		</HashRouter>
	);
};

export default App;
