import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative px-4 sm:px-6 lg:px-8 bg-navy-950/40">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Hands-on Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">Internship</h3>
        </motion.div>

        <div className="space-y-8">
          {portfolioData.experience.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-panel glass-panel-hover rounded-2xl p-7 sm:p-9 border-l-4 border-l-cyan-400"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800/80 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-1">
                    <Briefcase className="w-4 h-4" />
                    Internship Role
                  </div>
                  <h4 className="text-2xl font-bold text-slate-100">{exp.role}</h4>
                  <p className="text-base text-slate-300 font-medium">{exp.company}</p>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-navy-900 border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded bg-navy-900 border border-slate-800">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <p className="text-sm font-mono text-cyan-300">Project Focus: {exp.title}</p>
                {exp.points.map((pt, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                    <p className="text-slate-300 text-sm leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}