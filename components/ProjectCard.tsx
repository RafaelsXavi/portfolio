"use client";
import { motion } from "framer-motion";

type Props = {
	title: string;
	description: string;
	techs: string[];
	githubUrl?: string;
	liveUrl?: string;
	status?: 'Produção' | 'MVP' | 'Estudo';
};

export default function ProjectCard({ title, description, techs, githubUrl, liveUrl, status }: Props) {
	return (
		<motion.div
			whileHover={{ y: -4 }}
			transition={{ type: "spring", stiffness: 300, damping: 24 }}
			className="group border border-zinc-800/50 rounded-2xl p-8 bg-zinc-900/10 backdrop-blur-sm hover:bg-zinc-800/20 transition-all hover:border-zinc-700/50 relative overflow-hidden"
		>
			<div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50 opacity-0 group-hover:opacity-100 transition-opacity" />
			
			<div className="flex flex-col gap-4">
				<div className="flex items-start justify-between gap-4">
					<div className="space-y-1">
						{status && (
							<span className="text-[10px] font-mono uppercase tracking-widest text-emerald-500/80 mb-2 block font-bold">
								{status}
							</span>
						)}
						<h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors uppercase tracking-tight italic">{title}</h3>
					</div>
					
					<div className="flex gap-2">
						{githubUrl && (
							<a href={githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-zinc-800/50 p-2 hover:bg-zinc-700 transition-colors text-zinc-400 hover:text-white" title="GitHub">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
							</a>
						)}
						{liveUrl && (
							<a href={liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-full bg-zinc-800/50 p-2 hover:bg-emerald-500/20 transition-colors text-zinc-400 hover:text-emerald-400" title="Live Demo">
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
							</a>
						)}
					</div>
				</div>
				
				<p className="text-zinc-400 text-lg leading-relaxed">{description}</p>
				
				<div className="mt-2 flex flex-wrap gap-2">
					{techs.map(t => (
						<span key={t} className="text-[10px] font-bold uppercase tracking-widest bg-zinc-800/30 border border-zinc-700/30 px-3 py-1 rounded-md text-zinc-500 group-hover:text-zinc-300 group-hover:border-zinc-600 transition-colors">
							{t}
						</span>
					))}
				</div>
			</div>
		</motion.div>
	);
}
