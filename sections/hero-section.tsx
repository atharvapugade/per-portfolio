"use client";

import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { FaGitAlt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si";
import { profileLinks, rotatingTitles } from "@/lib/data";
import { useMemo, useState } from "react";

const icons = [
  { Icon: FaReact, color: "text-cyan-300", x: "10%", y: "20%", delay: 0 },
  { Icon: SiNextdotjs, color: "text-white", x: "82%", y: "14%", delay: 0.2 },
  { Icon: FaNodeJs, color: "text-green-400", x: "88%", y: "65%", delay: 0.4 },
  { Icon: SiMongodb, color: "text-emerald-400", x: "12%", y: "72%", delay: 0.6 },
  { Icon: SiExpress, color: "text-slate-200", x: "75%", y: "78%", delay: 0.8 },
  { Icon: FaGitAlt, color: "text-orange-400", x: "20%", y: "86%", delay: 1 },
  { Icon: FaJs, color: "text-yellow-300", x: "54%", y: "86%", delay: 0.7 },
  { Icon: SiTypescript, color: "text-blue-500", x: "43%", y: "8%", delay: 0.9 },
];

export function HeroSection() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const sequence = useMemo(
    () => rotatingTitles.flatMap((item) => [item, 1400]) as (string | number)[],
    [],
  );

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-40 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8"
      onMouseMove={(event) => {
        const { clientX, clientY, currentTarget } = event;
        const rect = currentTarget.getBoundingClientRect();
        setMouse({
          x: ((clientX - rect.left) / rect.width - 0.5) * 24,
          y: ((clientY - rect.top) / rect.height - 0.5) * 24,
        });
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="hero-spotlight absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{ transform: `translate(calc(-50% + ${mouse.x}px), calc(-50% + ${mouse.y}px))` }}
        />

        {icons.map(({ Icon, color, x, y, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${color} hidden md:block`}
            style={{ left: x, top: y }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 0.55, y: [0, -12, 0] }}
            transition={{ delay, duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
          </motion.div>
        ))}
      </div>

      <div className="relative mx-auto max-w-5xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl font-black leading-tight text-white sm:text-6xl lg:text-7xl"
        >
          Atharv Sandip{" "}
          <span className="bg-gradient-to-r from-indigo-300 via-violet-200 to-emerald-300 bg-clip-text text-transparent">
            Apugade
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.16 }}
          className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:mt-6 sm:text-base"
        >
          I build full stack applications with a strong backend foundation and a clean,
          practical user experience.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 h-11 text-base font-semibold text-emerald-300 sm:mt-7 sm:h-14 sm:text-2xl"
        >
          <TypeAnimation sequence={sequence} speed={50} repeat={Infinity} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4"
        >
          <a href="#projects" className="glow-button-secondary w-full max-w-[260px] sm:w-auto sm:max-w-none">
            View Projects
          </a>
          <a
            href="/resume.pdf"
            download
            className="glow-button-secondary w-full max-w-[260px] sm:w-auto sm:max-w-none"
          >
            Download Resume
          </a>
          <a href="#contact" className="glow-button-secondary w-full max-w-[260px] sm:w-auto sm:max-w-none">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.38 }}
          className="mt-5 flex items-center justify-center gap-3"
        >
          <a
            href={profileLinks.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-100 backdrop-blur-md transition hover:border-indigo-300/35 hover:bg-indigo-500/10 hover:text-indigo-200"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profileLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-100 backdrop-blur-md transition hover:bg-indigo-500/20"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
