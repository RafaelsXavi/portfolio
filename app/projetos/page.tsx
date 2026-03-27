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

      <div className="grid gap-8 md:grid-cols-2">
        <ProjectCard
          title="SaborReal Delivery"
          status="Produção"
          description="Plataforma fullstack de delivery com rastreio em tempo real, cálculo de frete dinâmico e gestão de pedidos para entregadores."
          techs={["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind"]}
          githubUrl="https://github.com/RafaelsXavi"
        />

        <ProjectCard
          title="DevBurguer"
          status="Produção"
          description="E-commerce para hamburgueria com fluxo completo de checkout, integração de pagamentos e painel administrativo para controle de estoque."
          techs={["React", "Node.js", "Express", "MongoDB", "Stripe"]}
          githubUrl="https://github.com/RafaelsXavi"
        />

        <ProjectCard
          title="A gente clinica"
          status="MVP"
          description="Sistema de automação para agendamentos de consultas. Integração de formulários, Google Calendar e Notion via N8N."
          techs={["N8N", "Google Cloud", "Notion", "APIs"]}
        />

        <ProjectCard
          title="Dashboard de Gestão BI"
          status="Estudo"
          description="Interface de alta performance para monitoramento de KPIs em tempo real, com filtros dinâmicos e exportação de relatórios."
          techs={["React", "Recharts", "Zustand", "Context API"]}
          githubUrl="https://github.com/RafaelsXavi"
        />
      </div>
    </motion.section>
  );
}
