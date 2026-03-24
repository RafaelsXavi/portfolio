"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-12">
      <motion.section
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full"
      >
        <span className="text-emerald-500 font-mono text-sm mb-4 block">Olá, meu nome é</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-4">
          Rafael S. Xavier
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold text-zinc-400 mb-8">
          Desenvolvedor Full Stack & Especialista em Interfaces
        </h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Especializado em construir aplicações web modernas, escaláveis e com foco total na experiência do usuário. Transformo problemas complexos em produtos digitais intuitivos.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="/projetos"
            className="inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-black hover:bg-zinc-200 transition-all hover:scale-105 shadow-lg"
          >
            Ver projetos
          </a>
          <a
            href="/contato"
            className="inline-block rounded-full border border-zinc-700 px-8 py-4 text-sm font-semibold text-zinc-300 hover:text-white hover:border-white transition-all"
          >
            Entrar em contato
          </a>
        </div>
      </motion.section>
    </div>
  );
}
