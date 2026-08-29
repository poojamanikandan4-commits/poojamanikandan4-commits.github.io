import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative px-4 sm:px-6 lg:px-8 bg-navy-950/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Academic Journey</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">Education</h3>
        </motion.div>

        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-32 space-y-12">
          {portfolioData.education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-10"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-navy-950 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

              <div className="glass-panel glass-panel-hover rounded-xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.period}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-100 mt-1">{item.degree}</h4>
                <p className="text-slate-300 text-sm mt-1">{item.institution}</p>

                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-900 border border-slate-700/60 text-cyan-300 text-sm font-semibold">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>{item.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}