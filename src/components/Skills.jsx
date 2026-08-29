import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench, Users } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-cyan-400" />,
      skills: portfolioData.skills.languages,
      color: "border-cyan-500/20"
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="w-5 h-5 text-blue-400" />,
      skills: portfolioData.skills.tools,
      color: "border-blue-500/20"
    },
    {
      title: "Soft Skills",
      icon: <Users className="w-5 h-5 text-indigo-400" />,
      skills: portfolioData.skills.softSkills,
      color: "border-indigo-500/20"
    }
  ];

  return (
    <section id="skills" className="py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Proficiencies</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">Technical & Professional Skills</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-navy-900 border border-slate-700">
                    {cat.icon}
                  </div>
                  <h4 className="text-lg font-bold text-slate-100">{cat.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3.5 py-2 rounded-lg bg-navy-900/90 border border-slate-800 text-slate-200 text-sm font-mono flex items-center gap-2 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}