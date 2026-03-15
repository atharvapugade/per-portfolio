"use client";

import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Internships", href: "#internships" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-1/2 top-2 z-40 w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 rounded-xl border border-white/10 bg-slate-950/80 px-2.5 py-2 backdrop-blur-xl sm:top-4 sm:w-[calc(100%-1.5rem)] sm:rounded-2xl sm:px-4 sm:py-3"
    >
      <nav className="flex items-center gap-2 sm:justify-between sm:gap-3">
        <a href="#hero" className="group shrink-0 leading-tight">
          <p className="text-[11px] font-semibold text-white transition-colors group-hover:text-indigo-200 sm:text-base">
            Atharv S. Apugade
          </p>
          <p className="hidden text-[10px] font-medium tracking-[0.12em] text-slate-400 sm:block sm:text-xs">
            Full Stack Developer
          </p>
        </a>

        <div className="no-scrollbar ml-2 flex min-w-0 flex-1 items-center justify-end gap-0.5 overflow-x-auto sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-white/12 bg-white/5 px-1.5 py-0.5 text-[9px] font-medium text-slate-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
