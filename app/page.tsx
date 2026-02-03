"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-20 flex flex-col items-start gap-12">
      <motion.section
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          Rafael S. Xavier
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-zinc-300 mb-6">
          Desenvolvedor Full Stack
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mb-8">
          Transformo ideias em produtos digitais modernos, escaláveis e de alta performance. Foco em automação, APIs e soluções robustas para empresas e times de tecnologia.
        </p>
        <div>
          <a
            href="/projetos"
            className="inline-block rounded bg-zinc-800 px-6 py-3 text-sm font-medium text-zinc-100 hover:bg-zinc-700 transition-colors shadow-sm"
          >
            Ver projetos
          </a>
          <a
            href="/contato"
            className="ml-4 inline-block rounded border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-400 hover:text-white hover:border-zinc-500 transition-colors"
          >
            Entrar em contato
          </a>
        </div>
      </motion.section>
    </main>
  );
}
