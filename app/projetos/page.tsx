"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Projetos() {
  return (
    <motion.section
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-12"
    >
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-white uppercase italic">Projetos</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </div>

      <div className="grid gap-6">
        <ProjectCard
          title="Plataforma de Automação de Conteúdo"
          description="Sistema full stack para geração e publicação automática de conteúdo, com integração de APIs externas. Focado em produtividade e consistência."
          techs={["Next.js", "Node.js", "APIs", "Cloud"]}
        />

        <ProjectCard
          title="Dashboard de Gestão"
          description="Aplicação de alta performance para visualização e gerenciamento de dados complexos com autenticação robusta e controle granular."
          techs={["React", "JWT", "PostgreSQL", "Tailwind"]}
        />
      </div>
    </motion.section>
  );
}
