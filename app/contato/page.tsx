"use client";
import { motion } from "framer-motion";

export default function Contato() {
  return (
    <motion.section
      initial={{ y: 24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-4"
    >
      <h2 className="text-3xl font-bold">Contato</h2>

      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        className="text-zinc-400"
      >
        Vamos conversar?
      </motion.p>

      <ul className="space-y-2">
        <motion.li
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-medium text-zinc-300">Email:</span> <a href="mailto:Rafael.xavi277@gmail.com" className="hover:underline hover:text-white transition-colors">Rafael.xavi277@gmail.com</a>
        </motion.li>
        <motion.li
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-medium text-zinc-300">GitHub:</span> <a href="https://github.com/RafaelsXavi" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors">github.com/RafaelsXavi</a>
        </motion.li>
        <motion.li
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-medium text-zinc-300">LinkedIn:</span> <a href="https://www.linkedin.com/in/rafaels-xavier/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors">linkedin.com/in/rafaels-xavier</a>
        </motion.li>
      </ul>
    </motion.section>
  );
}
