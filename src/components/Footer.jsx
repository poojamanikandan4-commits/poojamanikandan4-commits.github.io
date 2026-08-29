import React from 'react';
import { Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-slate-800/80 bg-navy-950 px-4 text-center">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Terminal className="w-4 h-4 text-cyan-400" />
          <span>{portfolioData.personal.name}</span>
        </div>
        <div className="text-xs font-mono text-slate-500">
          © {currentYear} • Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}