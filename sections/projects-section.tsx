"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { projects } from "@/lib/data";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrapper">
      <Reveal>
        <SectionTitle
          eyebrow="Portfolio"
          title="Featured Projects"
          subtitle="A few projects I built to solve real use-cases across mobility, finance, and coding practice."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            whileHover={{ y: -10, scale: 1.01 }}
            className="glow-card group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6"
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-indigo-300/25 bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-100"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="mt-5 flex-1 space-y-2 text-sm text-slate-200">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-100 transition-colors hover:border-indigo-300/35 hover:text-indigo-200"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
              ) : null}

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-emerald-200 transition-colors hover:bg-emerald-500/20"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
