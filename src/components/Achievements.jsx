import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative px-4 sm:px-6 lg:px-8 bg-navy-950/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Milestones</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">Achievements</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex items-start gap-5"
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                {idx === 0 ? <Trophy className="w-6 h-6" /> : <Award className="w-6 h-6" />}
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-100">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}