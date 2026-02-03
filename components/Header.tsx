import Link from "next/link";

export default function Header() {
	return (
		<header className="border-b border-zinc-800">
			<nav className="max-w-5xl mx-auto px-6 py-4 flex gap-6">
				<Link href="/">Home</Link>
				<Link href="/projetos">Projetos</Link>
				<Link href="/sobre">Sobre</Link>
				<Link href="/contato">Contato</Link>
			</nav>
		</header>
	);
}
