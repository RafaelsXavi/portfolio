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
    </motion.section>
  );
}
