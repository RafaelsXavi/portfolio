"use client";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <motion.section
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-8 max-w-3xl"
    >
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-white uppercase italic">Sobre mim</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </div>

      <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        >
          Sou Desenvolvedor Full Stack com experiência prática no desenvolvimento
          de aplicações web utilizando tecnologias modernas. Minha paixão é criar
          interfaces que não apenas funcionam, mas que encantam o usuário.
        </motion.p>

        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          Tenho foco em <span className="text-zinc-100 font-medium">código limpo</span>, 
          automação de processos e <span className="text-zinc-100 font-medium">soluções escaláveis</span>,
          aplicando meus conhecimentos em projetos reais que entregam valor real.
        </motion.p>

        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          Estou em constante evolução, sempre buscando melhorar arquitetura,
          performance e boas práticas de desenvolvimento. Atualmente focado em
          ecossistema React, Next.js e Node.js.
        </motion.p>
      </div>

      <div className="space-y-8 pt-8">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Habilidades & Stack</h3>
          <p className="text-zinc-500 text-sm italic">O que utilizo para dar vida às ideias</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            {
              category: "Frontend",
              skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Zustand"]
            },
            {
              category: "Backend",
              skills: ["Node.js", "Express", "NestJS", "Prisma", "PostgreSQL", "MongoDB"]
            },
            {
              category: "Ferramentas & DevOps",
              skills: ["Docker", "AWS", "Git / GitHub", "CI/CD", "N8N (Automação)", "Linux"]
            },
            {
              category: "Conceitos",
              skills: ["Arquitetura Limpa", "SOLID", "TDD", "REST APIs", "Web Performance", "UI/UX Design"]
            }
          ].map((group, idx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (idx * 0.1) }}
              className="p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/10 hover:border-zinc-700/50 transition-colors"
            >
              <h4 className="text-emerald-500 font-mono text-xs uppercase tracking-[0.2em] mb-4">{group.category}</h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-md bg-zinc-800/40 text-zinc-300 text-xs border border-zinc-700/30">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
