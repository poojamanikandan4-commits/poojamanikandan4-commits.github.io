import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, Github, Calendar, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Featured Work</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">Engineering Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {portfolioData.projects.map((proj, idx) => {
            const hasValidLink = proj.githubUrl && !proj.githubUrl.includes("ADD_YOUR_");

            return (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="glass-panel glass-panel-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <FolderGit2 className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {proj.date}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-slate-100 mb-3">{proj.title}</h4>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-navy-900 border border-slate-700/80 text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2.5 mb-6">
                    {proj.description.map((line, lIdx) => (
                      <div key={lIdx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <p className="text-slate-300 text-sm leading-relaxed">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {hasValidLink && (
                  <div className="pt-4 border-t border-slate-800">
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code →
                    </a>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}