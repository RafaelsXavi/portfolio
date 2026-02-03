import ProjectCard from "@/components/ProjectCard";

export default function Projetos() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Projetos</h2>

      <ProjectCard
        title="Plataforma de Automação de Conteúdo"
        description="Sistema full stack para geração e publicação automática de conteúdo, com integração de APIs externas."
        techs={["Next.js", "Node.js", "APIs", "Automação"]}
      />

      <ProjectCard
        title="Dashboard de Gestão"
        description="Aplicação para visualização e gerenciamento de dados com autenticação e controle de acesso."
        techs={["React", "JWT", "PostgreSQL"]}
      />
    </section>
  );
}
