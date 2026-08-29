import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Send, ArrowDown, FolderGit2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import HeroOrb from './HeroOrb';

export default function Hero() {
  const { name, tagline, headline, resumeUrl } = portfolioData.personal;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 text-center lg:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono tracking-wider">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            {tagline}
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-100">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 text-glow">{name}</span>
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
            "{headline}"
          </p>

          <p className="text-slate-400 text-sm sm:text-base max-w-xl">
            {portfolioData.personal.objective}
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(6,182,212,0.35)] transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <FolderGit2 className="w-4 h-4" />
              VIEW MY PROJECTS
            </a>

            <a
              href={resumeUrl}
              download="Pooja_MM_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-navy-900/80 hover:bg-navy-800 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 font-semibold text-sm tracking-wide transition-all duration-200 backdrop-blur-md"
            >
              <FileText className="w-4 h-4" />
              DOWNLOAD RESUME
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-700/60 font-semibold text-sm tracking-wide transition-all duration-200"
            >
              <Send className="w-4 h-4" />
              CONTACT ME
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center"
        >
          <HeroOrb />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-slate-500 hover:text-cyan-400 transition-colors animate-bounce"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
}