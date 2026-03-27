"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col items-start gap-12">
      <motion.section
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full py-10 md:py-20"
      >
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Disponível para novos projetos
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-2 leading-[0.9]">
            Rafael Silva <span className="text-gradient">Xavier</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-zinc-400 max-w-3xl leading-tight">
            Engenheiro de Software & Especialista em <span className="text-zinc-100">Interfaces de Alta Performance</span>.
          </h2>
          
          <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
            Focado em arquitetura escalável, automação inteligente e experiências digitais que convertem. 
            Atualmente transformando ideias em produtos robustos com o ecossistema JavaScript.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-4 text-sm font-bold text-black hover:bg-emerald-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              Ver Projetos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
            <a
              href="/contato"
              className="inline-block rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm px-8 py-4 text-sm font-bold text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
            >
              Vamos conversar
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-16 border-t border-zinc-900 mt-16"
          >
            <p className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-600 mb-6">Expertise Principal</p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-zinc-400 font-medium">
              {['React / Next.js', 'Node.js / NestJS', 'PostgreSQL / Prisma', 'TypeScript', 'Docker / AWS'].map((tech) => (
                <div key={tech} className="flex items-center gap-2 hover:text-zinc-100 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
