import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-950/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-navy-950/50' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 text-cyan-400 group">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
            <Terminal className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="font-mono font-bold tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
            POOJA<span className="text-cyan-400">.M.M</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-navy-900/50 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg bg-navy-900 border border-slate-700 text-slate-300 hover:text-cyan-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-950/95 border-b border-cyan-500/20 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={portfolioData.personal.resumeUrl}
              download="Pooja_MM_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full px-4 py-2.5 rounded-lg bg-cyan-500 text-navy-950 font-semibold text-sm hover:bg-cyan-400 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}