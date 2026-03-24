"use client";
import { motion } from "framer-motion";

export default function Contato() {
  return (
    <motion.section
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-12"
    >
      <div className="space-y-2">
        <h2 className="text-4xl font-bold tracking-tight text-white uppercase italic">Contato</h2>
        <div className="h-1 w-20 bg-emerald-500 rounded-full" />
      </div>

      <div className="space-y-6">
        <motion.p
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
          className="text-zinc-400 text-xl leading-relaxed max-w-xl"
        >
          Estou sempre aberto a novas oportunidades, colaborações ou apenas um café virtual. Sinta-se à vontade para entrar em contato!
        </motion.p>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Email", value: "Rafael.xavi277@gmail.com", href: "mailto:Rafael.xavi277@gmail.com", icon: "M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" },
            { label: "GitHub", value: "github.com/RafaelsXavi", href: "https://github.com/RafaelsXavi", icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" },
            { label: "LinkedIn", value: "linkedin.com/in/rafaels-xavier", href: "https://www.linkedin.com/in/rafaels-xavier/", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" }
          ].map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.5, ease: "easeOut" }}
            >
              <a 
                href={item.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/20 backdrop-blur-sm hover:bg-zinc-800/20 transition-all hover:border-emerald-500/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500">
                    <path d={item.icon} />
                  </svg>
                  <span className="font-bold text-xs uppercase tracking-widest text-zinc-500 group-hover:text-zinc-300 transition-colors">{item.label}</span>
                </div>
                <span className="text-zinc-100 font-medium truncate group-hover:text-emerald-400 transition-colors">{item.value}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}
