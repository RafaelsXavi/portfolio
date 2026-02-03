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
			className="fixed top-0 left-0 w-full z-30 backdrop-blur border-b border-zinc-800 bg-zinc-950/80 shadow-sm"
		>
			<nav className="max-w-5xl mx-auto px-6 py-3 flex gap-8">
				{navLinks.map(link => (
					<Link
						key={link.href}
						href={link.href}
						className={clsx(
							"transition-colors text-zinc-300 hover:text-white font-medium px-2 py-1 rounded",
							pathname === link.href && "text-white bg-zinc-800"
						)}
					>
						{link.label}
					</Link>
				))}
			</nav>
		</motion.header>
	);
}
