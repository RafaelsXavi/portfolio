"use client";
import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <motion.section
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-4 max-w-2xl"
    >
      <h2 className="text-3xl font-bold">Sobre mim</h2>

      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        className="text-zinc-400"
      >
        Sou Desenvolvedor Full Stack com experiência prática no desenvolvimento
        de aplicações web utilizando tecnologias modernas.
      </motion.p>

      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="text-zinc-400"
      >
        Tenho foco em código limpo, automação de processos e soluções escaláveis,
        aplicando meus conhecimentos em projetos reais.
      </motion.p>

      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        className="text-zinc-400"
      >
        Estou em constante evolução, sempre buscando melhorar arquitetura,
        performance e boas práticas de desenvolvimento.
      </motion.p>
    </motion.section>
  );
}
