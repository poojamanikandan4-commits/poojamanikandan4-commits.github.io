import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { objective, foundation } = portfolioData.personal;

  return (
    <section id="about" className="py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Background</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">About Me</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <User className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-100">Career Objective</h4>
              <p className="text-slate-300 leading-relaxed text-base">
                {objective}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-cyan-400 text-sm font-mono">
              <Sparkles className="w-4 h-4" />
              Problem-Solving & Real-World Application
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-100">Technical Foundation</h4>
              <p className="text-slate-300 leading-relaxed text-base">
                {foundation}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-blue-400 text-sm font-mono">
              <Sparkles className="w-4 h-4" />
              Java • Python • Data-Driven Modeling
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}