"use client";
import { motion } from "framer-motion";

type Props = {
	title: string;
	description: string;
	techs: string[];
};

export default function ProjectCard({ title, description, techs }: Props) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ type: "spring", stiffness: 300, damping: 24 }}
			className="group border border-zinc-800/50 rounded-2xl p-8 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-800/20 transition-all hover:border-zinc-700/50"
		>
			<div className="flex flex-col gap-4">
				<div className="flex items-start justify-between gap-4">
					<h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight">{title}</h3>
					<div className="rounded-full bg-zinc-800/50 p-2 group-hover:bg-emerald-500/10 transition-colors">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500 group-hover:text-emerald-500 transition-colors">
							<path d="M7 17L17 7M17 7H7M17 7V17" />
						</svg>
					</div>
				</div>
				<p className="text-zinc-400 text-lg leading-relaxed">{description}</p>
				<div className="mt-2 flex flex-wrap gap-2">
					{techs.map(t => (
						<span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-zinc-800/50 border border-zinc-700/30 px-3 py-1 rounded-full text-zinc-400 group-hover:border-zinc-500/30 transition-colors">
							{t}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}
