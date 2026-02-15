import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SmartAssistant: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState<
		{ role: "user" | "assistant"; content: string }[]
	>([
		{
			role: "assistant",
			content:
				"Hey! I'm Cuppy's digital assistant. Looking to book her for an event or just want to check the latest mixes?",
		},
	]);
	const [input, setInput] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (scrollRef.current) {
			scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
		}
	}, [messages]);

	const handleSend = async () => {
		if (!input.trim()) return;

		const userMsg = input;
		setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
		setInput("");
		setIsTyping(true);

		try {
			const apiKey = import.meta.env.VITE_API_KEY;

			if (!apiKey) {
				throw new Error("API key not configured");
			}

			const response = await fetch(
				`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-preview:generateContent?key=${apiKey}`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						contents: [
							{
								parts: [
									{
										text: `You are an AI assistant for DJ Cuppy (Florence Otedola). \nKey info: She's an international DJ, philanthropist, Oxford grad, and Apple Music host. \nGoal: Be energetic, professional, and helpful. Guide people to the booking section or music section. \nUser said: ${userMsg}`,
									},
								],
							},
						],
						systemInstruction: {
							parts: [
								{
									text: "Keep it brief and use emojis occasionally like 🎧 💖 ✨",
								},
							],
						},
					}),
				},
			);

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(
					errorData.error?.message || "API request failed",
				);
			}

			const data = await response.json();
			const aiResponse =
				data.candidates?.[0]?.content?.parts?.[0]?.text ||
				"I'm having a bit of a glitch, but you can always reach Cuppy's team at bookings@djcuppy.com!";

			setMessages((prev) => [
				...prev,
				{ role: "assistant", content: aiResponse },
			]);
		} catch (error) {
			console.error("AI Error:", error);
			setMessages((prev) => [
				...prev,
				{
					role: "assistant",
					content:
						"Sorry, I'm currently off the decks. Try again in a bit!",
				},
			]);
		} finally {
			setIsTyping(false);
		}
	};

	return (
		<div className="fixed bottom-6 right-6 z-[100]">
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className="absolute bottom-20 right-0 w-[350px] max-w-[90vw] h-[500px] bg-neutral-900 border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
					>
						<div className="p-6 bg-pink-600 flex justify-between items-center shrink-0">
							<div className="flex items-center gap-3">
								<Sparkles className="text-white animate-pulse" />
								<h3 className="font-bold tracking-widest text-sm uppercase">
									Cuppy Assistant
								</h3>
							</div>
							<button onClick={() => setIsOpen(false)}>
								<X size={20} />
							</button>
						</div>

						<div
							ref={scrollRef}
							className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar"
						>
							{messages.map((msg, i) => (
								<div
									key={i}
									className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
								>
									<div
										className={`max-w-[80%] p-4 rounded-2xl text-sm ${
											msg.role === "user"
												? "bg-pink-600 text-white rounded-tr-none"
												: "bg-white/5 border border-white/10 text-white/80 rounded-tl-none"
										}`}
									>
										{msg.content}
									</div>
								</div>
							))}
							{isTyping && (
								<div className="flex justify-start">
									<div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none animate-pulse">
										<div className="flex gap-1">
											<span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce"></span>
											<span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-75"></span>
											<span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-150"></span>
										</div>
									</div>
								</div>
							)}
						</div>

						<div className="p-4 border-t border-white/5 bg-black/40">
							<div className="relative">
								<input
									type="text"
									value={input}
									onChange={(e) => setInput(e.target.value)}
									onKeyDown={(e) =>
										e.key === "Enter" && handleSend()
									}
									placeholder="Ask me anything..."
									className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-5 pr-12 text-sm focus:border-pink-500 outline-none transition-all"
								/>
								<button
									onClick={handleSend}
									className="absolute right-2 top-1.5 w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all"
								>
									<Send size={14} />
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:scale-110 transition-transform relative z-10"
			>
				{isOpen ? <X size={28} /> : <MessageSquare size={28} />}
			</button>
		</div>
	);
};

export default SmartAssistant;
