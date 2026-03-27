"use client";
import { motion } from "framer-motion";

export default function Curriculo() {
  return (
    <motion.section
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-4xl mx-auto space-y-12 pb-20 print:p-0 print:space-y-6 print:pb-0 font-sans"
    >
      {/* Header / Contact */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-zinc-800 pb-8 print:border-zinc-300">
        <div>
          <h1 className="text-4xl font-bold text-white print:text-black uppercase tracking-tight mb-2">Rafael Silva Xavier</h1>
          <h2 className="text-xl text-emerald-500 font-medium print:text-emerald-700">Desenvolvedor Web Full Stack</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-zinc-400 print:text-zinc-600 font-mono italic">
          <p>📍 Cotia - SP</p>
          <a href="tel:+5511991529620" className="hover:text-emerald-400 transition-colors">📞 (11) 99152-9620</a>
          <a href="mailto:rafael.xavi277@gmail.com" className="hover:text-emerald-400 transition-colors">✉️ rafael.xavi277@gmail.com</a>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/rafaels-xavier" target="_blank" className="hover:text-emerald-400 transition-colors">in/rafaels-xavier</a>
            <a href="https://github.com/RafaelsXavi" target="_blank" className="hover:text-emerald-400 transition-colors">gh/RafaelsXavi</a>
          </div>
        </div>
      </div>

      {/* Summary */}
      <div className="space-y-4">
        <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-400 font-bold border-l-2 border-emerald-500 pl-4 py-1">Resumo Profissional</h3>
        <p className="text-zinc-300 print:text-zinc-800 text-lg leading-relaxed">
          Desenvolvedor Full Stack especializado no ecossistema <span className="text-white print:font-bold">JavaScript (React e Node.js)</span> e automação inteligente com <span className="text-white print:font-bold">N8N</span>. 
          Foco em transformar necessidades de negócio em soluções escaláveis em produção, com experiência em sistemas de e-commerce, dashboards e integração de IA. 
          Com um background de 5 anos em operações multinacionais, trago maturidade em resolução de problemas sob pressão e gestão rigorosa de prazos.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 print:gap-8">
        {/* Experience & Education */}
        <div className="md:col-span-2 space-y-12">
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-400 font-bold border-l-2 border-emerald-500 pl-4 py-1">Experiência Profissional</h3>
            
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-bold text-white print:text-black uppercase italic">Desenvolvedor Full Stack (Freelancer)</h4>
                  <span className="text-zinc-500 text-sm font-mono italic">2023 - Presente</span>
                </div>
                <ul className="list-disc list-inside text-zinc-400 print:text-zinc-700 space-y-2 ml-2 marker:text-emerald-500">
                  <li>Desenvolvimento de <span className="text-zinc-200 print:font-bold">5+ landing pages</span> focadas em conversão e performance (PageSpeed &gt; 90).</li>
                  <li>Criação de workflows no <span className="text-zinc-200 print:font-bold">N8N</span> que automatizaram aproximadamente 40h mensais de tarefas manuais para empresas locais.</li>
                  <li>Implementação de sistemas completos com <span className="text-zinc-200 print:font-bold">Git/GitHub</span> seguindo Conventional Commits e documentação técnica robusta.</li>
                  <li>Deploy e manutenção de 2 sistemas full stack principais (DevBurguer e SaborReal).</li>
                </ul>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-bold text-white print:text-black uppercase italic">Experiência Operacional (MC Bauchemie / Vivo)</h4>
                  <span className="text-zinc-500 text-sm font-mono italic">5 Anos</span>
                </div>
                <p className="text-zinc-400 print:text-zinc-700 text-sm leading-relaxed">
                  Atuei em ambientes industriais e de telecomunicações de alta demanda. Desenvolvi resiliência técnica e capacidade analítica em campo, transferindo a lógica de resolução de problemas físicos para o debugging de sistemas e troubleshooting de código de forma autônoma.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-400 font-bold border-l-2 border-emerald-500 pl-4 py-1">Formação Acadêmica</h3>
            <div className="flex justify-between items-baseline">
              <div>
                <h4 className="text-lg font-bold text-white print:text-black uppercase italic">Programador Full Stack - DevClub</h4>
                <p className="text-zinc-400 print:text-zinc-700 italic">Especialização Intensiva em JavaScript, Node, React e SQL</p>
              </div>
              <span className="text-zinc-500 text-sm font-mono italic">Prev: 2026</span>
            </div>
          </div>
        </div>

        {/* Sidebar: Skills & Projects */}
        <div className="space-y-12">
          {/* Tech Stack */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-400 font-bold border-l-2 border-emerald-500 pl-4 py-1">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Node.js", "TypeScript", "Express", "N8N", "Prisma", "PostgreSQL", "MongoDB", "Docker", "Tailwind"].map(skill => (
                <span key={skill} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] font-bold uppercase tracking-widest print:border-zinc-300 print:text-black">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-zinc-500 print:text-zinc-400 font-bold border-l-2 border-emerald-500 pl-4 py-1">Projetos Chave</h3>
            <div className="space-y-6 font-mono text-xs">
              <div className="space-y-1">
                <p className="text-white print:text-black font-bold uppercase underline decoration-emerald-500 underline-offset-4 mb-2">Dev Burguer</p>
                <p className="text-zinc-500 leading-relaxed italic">Sistema completo de hamburgueria com checkout, gestão de pedidos e controle de estoque.</p>
                <p className="text-emerald-500/80">React • Node • MongoDB</p>
              </div>
              <div className="space-y-1">
                <p className="text-white print:text-black font-bold uppercase underline decoration-emerald-500 underline-offset-4 mb-2">Sabor Real</p>
                <p className="text-zinc-500 leading-relaxed italic">Delivery com atendimento automatizado via Chatbot Inteligente integrado com IA.</p>
                <p className="text-emerald-500/80">Next.js • N8N • Node • IA</p>
              </div>
            </div>
          </div>

          {/* CTA Print */}
          <div className="pt-8 border-t border-zinc-900 mt-12 block print:hidden">
            <button 
              onClick={() => window.print()}
              className="w-full py-4 border border-zinc-800 bg-zinc-900 hover:bg-zinc-800 hover:text-white text-zinc-400 text-xs font-bold uppercase tracking-widest transition-all rounded-md flex items-center justify-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
              IMPRIMIR / SALVAR PDF
            </button>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
