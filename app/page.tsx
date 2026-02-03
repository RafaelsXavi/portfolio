import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
      <motion.h1
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-bold tracking-tight"
      >
        Desenvolvedor Full Stack
      </motion.h1>
      <motion.p
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
        className="mt-6 text-zinc-400 text-lg max-w-2xl"
      >
        Desenvolvo aplicações web modernas, escaláveis e bem estruturadas, com foco em performance, automação e boas práticas.
      </motion.p>
    </main>
  );
}
