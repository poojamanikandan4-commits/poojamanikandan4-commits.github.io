import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Code, Bot } from 'lucide-react';

export default function HeroOrb() {
  return (
    <div className="relative w-full max-w-[420px] aspect-square mx-auto flex items-center justify-center">
      <div className="absolute inset-0 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute inset-8 rounded-full bg-blue-600/15 blur-2xl animate-pulse-slow" />
      <div className="absolute inset-4 rounded-full border border-cyan-500/20 animate-spin-slow" />
      <div className="absolute inset-12 rounded-full border border-dashed border-blue-400/25 animate-[spin_35s_linear_infinite_reverse]" />
      <div className="absolute inset-20 rounded-full border border-indigo-400/20 animate-spin-slow" />

      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-44 h-44 rounded-full bg-gradient-to-tr from-navy-900 via-navy-800 to-blue-950 border border-cyan-400/40 p-1 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.25)]"
      >
        <div className="w-full h-full rounded-full bg-navy-950/80 backdrop-blur-md flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent pointer-events-none" />
          <Bot className="w-14 h-14 text-cyan-400 mb-1" />
          <span className="text-[11px] font-mono tracking-widest text-cyan-200/80 uppercase">AI Core</span>
          <span className="text-[9px] font-mono text-slate-400">ONLINE</span>
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 flex items-center justify-start pointer-events-none"
      >
        <div className="w-11 h-11 -ml-4 rounded-xl bg-navy-900/90 border border-cyan-400/50 flex items-center justify-center text-cyan-300 shadow-lg backdrop-blur-md">
          <Network className="w-5 h-5" />
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 flex items-start justify-center pointer-events-none"
      >
        <div className="w-11 h-11 -mt-4 rounded-xl bg-navy-900/90 border border-blue-400/50 flex items-center justify-center text-blue-300 shadow-lg backdrop-blur-md">
          <Database className="w-5 h-5" />
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 flex items-end justify-center pointer-events-none"
      >
        <div className="w-11 h-11 -mb-4 rounded-xl bg-navy-900/90 border border-indigo-400/50 flex items-center justify-center text-indigo-300 shadow-lg backdrop-blur-md">
          <Code className="w-5 h-5" />
        </div>
      </motion.div>
    </div>
  );
}