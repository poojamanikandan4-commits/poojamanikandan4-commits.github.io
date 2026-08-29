import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Credentials</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">Certifications</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover rounded-2xl p-6 flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-100">{cert.name}</h4>
                  <p className="text-xs font-mono text-cyan-300/80 mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-mono text-slate-400 bg-navy-900 px-2.5 py-1 rounded border border-slate-800 shrink-0">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                {cert.year}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}