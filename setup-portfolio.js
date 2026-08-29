// setup-portfolio.js
const fs = require('fs');
const path = require('path');

const files = {
  // package.json
  'package.json': `{
  "name": "pooja-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "framer-motion": "^11.2.10",
    "lucide-react": "^0.395.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "^2.3.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.3",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.0",
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.4",
    "vite": "^5.2.13"
  }
}`,

  // vite.config.js
  'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
});`,

  // tailwind.config.js
  'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020617',
          900: '#060d24',
          800: '#0b163b',
          700: '#112257',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          glow: 'rgba(34, 211, 238, 0.35)',
        },
        electric: {
          blue: '#3b82f6',
          indigo: '#6366f1'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
};`,

  // postcss.config.js
  'postcss.config.js': `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`,

  // index.html
  'index.html': `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pooja M M | AI & Data Science Student</title>
    <meta name="title" content="Pooja M M | AI & Data Science Student" />
    <meta name="description" content="Portfolio of Pooja M M - AI & Data Science Student with expertise in Python, Java, Machine Learning, and Cloud Technologies." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 antialiased overflow-x-hidden">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,

  // public/favicon.svg
  'public/favicon.svg': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="24" fill="#060d24"/>
  <path d="M30 70 L30 30 L55 30 C65 30 70 36 70 44 C70 52 65 58 55 58 L30 58" fill="none" stroke="#22d3ee" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="70" cy="70" r="6" fill="#38bdf8"/>
</svg>`,

  // src/index.css
  'src/index.css': `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
}

.glass-panel {
  background: rgba(6, 13, 36, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(59, 130, 246, 0.15);
}

.glass-panel-hover {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.glass-panel-hover:hover {
  background: rgba(11, 22, 59, 0.75);
  border-color: rgba(34, 211, 238, 0.4);
  box-shadow: 0 0 25px -5px rgba(34, 211, 238, 0.15);
  transform: translateY(-4px);
}

.text-glow {
  text-shadow: 0 0 16px rgba(34, 211, 238, 0.4);
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #020617;
}

::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #334155;
}`,

  // src/data/portfolioData.js
  'src/data/portfolioData.js': `export const portfolioData = {
  personal: {
    name: "POOJA M M",
    tagline: "AI & DATA SCIENCE STUDENT",
    headline: "Building intelligent solutions with code, data & AI.",
    objective: "AI & DS student seeking full-time or internship opportunities to apply problem-solving and analytical skills.",
    foundation: "Proficient in Java and Python, with a strong foundation in data-driven approaches, programming, and real-world applications.",
    email: "poojavsb074@gmail.com",
    phone: "+91 9442741596",
    location: "Coimbatore",
    resumeUrl: "./resume.pdf"
  },
  socialLinks: {
    linkedin: "ADD_YOUR_LINKEDIN_URL_HERE",
    github: "ADD_YOUR_GITHUB_URL_HERE"
  },
  education: [
    {
      degree: "B.Tech – Artificial Intelligence & Data Science",
      institution: "V.S.B College of Engineering Technical Campus, Coimbatore",
      score: "CGPA: 8.6",
      period: "2023 – 2027",
      type: "Undergraduate"
    },
    {
      degree: "Higher Secondary Education",
      institution: "V.V.M Matric Hr. Sec. School, Coimbatore",
      score: "81%",
      period: "2023",
      type: "Schooling"
    }
  ],
  skills: {
    languages: ["Java", "Python", "SQL", "ABAP"],
    tools: ["GitHub", "SAP", "AWS"],
    softSkills: ["Quick Learner", "Logical Thinking", "Teamwork"]
  },
  experience: [
    {
      role: "Machine Learning Intern",
      company: "Accent Techno Soft",
      location: "Coimbatore",
      period: "June 2025 – July 2025",
      title: "Crime Rate Analysis – City Wise Crime Data Insights using Python with Machine Learning",
      points: [
        "Worked on 'Crime Rate Analysis – City Wise Crime Data Insights using Python with Machine Learning.'",
        "Applied Python for data preprocessing, visualization, and machine learning model building.",
        "Gained hands-on experience in analyzing real-world datasets and deriving meaningful insights."
      ]
    }
  ],
  projects: [
    {
      title: "CLOUD COST OPTIMIZER AI AGENT",
      date: "June 2026",
      technologies: ["Python", "GitHub API"],
      githubUrl: "ADD_YOUR_PROJECT_GITHUB_URL_OR_LEAVE_EMPTY",
      description: [
        "Built an AI-powered tool to analyze cloud costs and identify optimization opportunities.",
        "Developed an agent-based dashboard with GitHub API integration and automated reporting.",
        "Designed a multi-agent system for cloud cost analysis, optimization recommendation generation, and automated decision support."
      ]
    },
    {
      title: "JAVA GUI GAME DEVELOPMENT",
      date: "January 2025 – June 2025",
      technologies: ["Java", "AWT", "Swing"],
      githubUrl: "ADD_YOUR_PROJECT_GITHUB_URL_OR_LEAVE_EMPTY",
      description: [
        "Built a desktop version of Flappy Bird using Java with smooth animation and collision detection.",
        "Designed custom UI and game logic using Java AWT and Swing frameworks.",
        "Implemented keyboard controls, scoring system, and obstacle generation."
      ]
    }
  ],
  achievements: [
    {
      title: "Web Development Coordinator — Vyuga '26",
      description: "Organized and coordinated Web Development events for the national-level symposium 'Vyuga '26', managing technical activities and participant engagement."
    },
    {
      title: "National Hackathon Competitor",
      description: "Participated in multiple national-level hackathons, collaborating with teams to develop innovative solutions for real-world problem statements within time-constrained environments."
    }
  ],
  certifications: [
    {
      name: "SAP – ABAP Backend Developer",
      year: "2026",
      issuer: "SAP"
    },
    {
      name: "AWS Cloud Practitioner Essentials",
      year: "2026",
      issuer: "AWS"
    }
  ],
  languages: [
    { language: "English", level: "Fluent" },
    { language: "Tamil", level: "Native" }
  ]
};`,

  // src/components/CanvasBackground.jsx
  'src/components/CanvasBackground.jsx': `import React, { useEffect, useRef } from 'react';

export default function CanvasBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 65);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.8,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(30, 58, 138, 0.04)';
      ctx.lineWidth = 1;
      const gridSize = 48;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = 'rgba(56, 189, 248, 0.5)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 130) {
            ctx.strokeStyle = \`rgba(34, 211, 238, \${0.15 * (1 - dist / 130)})\`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
}`,

  // src/components/HeroOrb.jsx
  'src/components/HeroOrb.jsx': `import React from 'react';
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
}`,

  // src/components/Navbar.jsx
  'src/components/Navbar.jsx': `import React, { useState, useEffect } from 'react';
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
    <header className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 \${scrolled ? 'bg-navy-950/85 backdrop-blur-md border-b border-cyan-500/15 py-3 shadow-lg shadow-navy-950/50' : 'bg-transparent py-5'}\`}>
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
                className={\`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 \${
                  isActive
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40'
                }\`}
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
}`,

  // src/components/Hero.jsx
  'src/components/Hero.jsx': `import React from 'react';
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
}`,

  // src/components/About.jsx
  'src/components/About.jsx': `import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { objective, foundation } = portfolioData.personal;

  return (
    <section id="about" className="py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Background</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">About Me</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl p-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <User className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-100">Career Objective</h4>
              <p className="text-slate-300 leading-relaxed text-base">
                {objective}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-cyan-400 text-sm font-mono">
              <Sparkles className="w-4 h-4" />
              Problem-Solving & Real-World Application
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-panel rounded-2xl p-8 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Code2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-100">Technical Foundation</h4>
              <p className="text-slate-300 leading-relaxed text-base">
                {foundation}
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-800/80 flex items-center gap-2 text-blue-400 text-sm font-mono">
              <Sparkles className="w-4 h-4" />
              Java • Python • Data-Driven Modeling
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}`,

  // src/components/Education.jsx
  'src/components/Education.jsx': `import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative px-4 sm:px-6 lg:px-8 bg-navy-950/40">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Academic Journey</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">Education</h3>
        </motion.div>

        <div className="relative border-l-2 border-cyan-500/30 ml-4 md:ml-32 space-y-12">
          {portfolioData.education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 sm:pl-10"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-navy-950 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />

              <div className="glass-panel glass-panel-hover rounded-xl p-6 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {item.type}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    {item.period}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-slate-100 mt-1">{item.degree}</h4>
                <p className="text-slate-300 text-sm mt-1">{item.institution}</p>

                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-navy-900 border border-slate-700/60 text-cyan-300 text-sm font-semibold">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>{item.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // src/components/Skills.jsx
  'src/components/Skills.jsx': `import React from 'react';
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
}`,

  // src/components/Experience.jsx
  'src/components/Experience.jsx': `import React from 'react';
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
}`,

  // src/components/Projects.jsx
  'src/components/Projects.jsx': `import React from 'react';
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
}`,

  // src/components/Achievements.jsx
  'src/components/Achievements.jsx': `import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 relative px-4 sm:px-6 lg:px-8 bg-navy-950/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">Milestones</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-100">Achievements</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-panel glass-panel-hover rounded-2xl p-7 flex items-start gap-5"
            >
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                {idx === 0 ? <Trophy className="w-6 h-6" /> : <Award className="w-6 h-6" />}
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-100">{item.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}`,

  // src/components/Certifications.jsx
  'src/components/Certifications.jsx': `import React from 'react';
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
}`,

  // src/components/Languages.jsx
  'src/components/Languages.jsx': `import React from 'react';
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
}`,

  // src/components/Contact.jsx
  'src/components/Contact.jsx': `import React from 'react';
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
              href={\`mailto:\${email}\`}
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
              href={\`tel:\${phone}\`}
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
}`,

  // src/components/Footer.jsx
  'src/components/Footer.jsx': `import React from 'react';
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
}`,

  // src/App.jsx
  'src/App.jsx': `import React from 'react';
import CanvasBackground from './components/CanvasBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Languages from './components/Languages';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#020617] text-slate-100">
      <CanvasBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}`,

  // src/main.jsx
  'src/main.jsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,

  // .github/workflows/deploy.yml
  '.github/workflows/deploy.yml': `name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4`
};

// Create all folders and files automatically
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(__dirname, filePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim(), 'utf8');
  console.log(`Created: ${filePath}`);
});

console.log('\\nProject created successfully! Next steps:');
console.log('1. Place your resume PDF in: public/resume.pdf');
console.log('2. Run: npm install');
console.log('3. Run: npm run dev');