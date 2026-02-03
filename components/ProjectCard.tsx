type Props = {
	title: string;
	description: string;
	techs: string[];
};

export default function ProjectCard({ title, description, techs }: Props) {
	return (
		<div className="border border-zinc-800 rounded-xl p-6">
			<h3 className="text-xl font-semibold">{title}</h3>
			<p className="mt-2 text-zinc-400">{description}</p>
			<div className="mt-4 flex flex-wrap gap-2">
				{techs.map(t => (
					<span key={t} className="text-xs bg-zinc-800 px-2 py-1 rounded">
						{t}
					</span>
				))}
			</div>
		</div>
	);
}
