export default function Footer() {
	return (
		<footer className="border-t border-zinc-900 py-12 text-center text-sm text-zinc-500 mt-auto">
			<p>© {new Date().getFullYear()} • Rafael S. Xavier</p>
			<p className="mt-2 text-zinc-600 font-mono text-[10px] uppercase tracking-widest">Built with Next.js & Tailwind CSS</p>
		</footer>
	);
}
