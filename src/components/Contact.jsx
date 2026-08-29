import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { name, email, phone, location, resumeUrl } = portfolioData.personal;
  const { linkedin, github } = portfolioData.socialLinks;

  const hasLinkedin = linkedin && !linkedin.includes("ADD_YOUR_");
  const hasGithub = github && !github.includes("ADD_YOUR_");

  return (
    <section id="contact" className="py-24 relative px-4 sm:px-6 lg:px-8 bg-navy-950/60">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Get in Touch</h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-slate-100">Let's Connect</h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-3">
            Open for full-time roles, internships, and research collaborations in AI & Data Science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="space-y-4">
            <a
              href={`mailto:${email}`}
              className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-center gap-4 block"
            >
              <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-xs font-mono text-slate-400">Email Directly</div>
                <div className="text-sm sm:text-base font-semibold text-slate-100 truncate">{email}</div>
              </div>
            </a>

            <a
              href={`tel:${phone}`}
              className="glass-panel glass-panel-hover rounded-2xl p-5 flex items-center gap-4 block"
            >
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Call / Phone</div>
                <div className="text-sm sm:text-base font-semibold text-slate-100">{phone}</div>
              </div>
            </a>

            <div className="glass-panel rounded-2xl p-5 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Location</div>
                <div className="text-sm sm:text-base font-semibold text-slate-100">{location}, India</div>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-bold text-slate-100 mb-2">Professional Profiles</h4>
              <p className="text-slate-400 text-sm mb-6">
                Connect via professional networks or review full credentials.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                {hasLinkedin ? (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-sm font-medium transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                ) : (
                  <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-900/50 border border-slate-800 text-slate-500 text-sm font-mono cursor-not-allowed">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </div>
                )}

                {hasGithub ? (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-300 text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                ) : (
                  <div className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-navy-900/50 border border-slate-800 text-slate-500 text-sm font-mono cursor-not-allowed">
                    <Github className="w-4 h-4" />
                    GitHub
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800">
              <a
                href={resumeUrl}
                download="Pooja_MM_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-bold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
              >
                <FileText className="w-4 h-4" />
                DOWNLOAD RESUME (PDF)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}