import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Languages() {
  return (
    <section className="py-12 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-100">Languages Known</h4>
              <p className="text-xs text-slate-400">Communication & Linguistic Skills</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {portfolioData.languages.map((lang) => (
              <div
                key={lang.language}
                className="px-4 py-2 rounded-xl bg-navy-900 border border-slate-800 text-center"
              >
                <div className="text-sm font-bold text-slate-100">{lang.language}</div>
                <div className="text-xs font-mono text-cyan-400">{lang.level}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}