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
			whileHover={{ y: -4, boxShadow: "0 4px 32px 0 #00000033" }}
			transition={{ type: "spring", stiffness: 300, damping: 24 }}
			className="border border-zinc-800 rounded-xl p-6 bg-zinc-950/80 transition-all"
		>
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="mt-2 text-zinc-400">{description}</p>
			<div className="mt-4 flex flex-wrap gap-2">
				{techs.map(t => (
					<span key={t} className="text-xs bg-zinc-800 px-2 py-1 rounded text-zinc-300">
						{t}
					</span>
				))}
			</div>
		</motion.div>
	);
}
