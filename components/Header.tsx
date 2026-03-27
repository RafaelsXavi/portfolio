"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";

const navLinks = [
	{ href: "/", label: "Home" },
	{ href: "/projetos", label: "Projetos" },
	{ href: "/sobre", label: "Sobre" },
	{ href: "/contato", label: "Contato" },
];

export default function Header() {
	const pathname = usePathname();
	return (
		<motion.header
			initial={{ y: -32, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4, ease: "easeOut" }}
			className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-zinc-800/50 bg-zinc-950/70"
		>
			<nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
				<Link href="/" className="text-xl font-bold tracking-tighter text-white hover:opacity-80 transition-opacity">
					RSX
				</Link>
				<div className="flex gap-1 sm:gap-4 md:gap-8">
					{navLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className={clsx(
								"relative transition-colors text-sm font-medium px-3 py-2 rounded-md",
								pathname === link.href ? "text-white" : "text-zinc-400 hover:text-white"
							)}
						>
							{pathname === link.href && (
								<motion.div
									layoutId="nav-active"
									className="absolute inset-0 bg-zinc-800/50 rounded-md -z-10"
									transition={{ type: "spring", duration: 0.5 }}
								/>
							)}
							{link.label}
						</Link>
					))}
					<a 
						href="/curriculo.pdf" 
						target="_blank" 
						className="ml-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-400 hover:bg-emerald-500 hover:text-black transition-all"
					>
						CURRÍCULO
					</a>
				</div>
			</nav>
		</motion.header>
	);
}
