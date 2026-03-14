"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { internships } from "@/lib/data";

export function InternshipsSection() {
  return (
    <section id="internships" className="section-wrapper">
      <Reveal>
        <SectionTitle
          eyebrow="Experience"
          title="Internships"
          subtitle="Hands-on roles where I shipped features, collaborated with teams, and improved product quality."
        />
      </Reveal>

      <div className="relative pl-0 md:pl-10">
        <div className="absolute bottom-0 left-3 top-0 hidden w-px bg-gradient-to-b from-indigo-500 via-violet-400 to-emerald-400 md:block" />

        <div className="space-y-8">
          {internships.map((item, index) => (
            <motion.article
              key={item.company}
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6"
            >
              <span className="absolute -left-[1.85rem] top-7 hidden h-3 w-3 rounded-full bg-indigo-400 shadow-[0_0_14px_rgba(99,102,241,0.9)] ring-2 ring-[#020617] md:block" />

              <p className="text-xs uppercase tracking-[0.22em] text-indigo-300">{item.duration}</p>
              <div className="mt-1.5 flex flex-wrap items-center gap-3">
                <h3 className="text-lg font-semibold text-white sm:text-xl">{item.company}</h3>
                <a
                  href={item.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-semibold tracking-wide text-indigo-200 transition-colors hover:bg-indigo-500/20"
                >
                  View LinkedIn
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
              <p className="mt-1 text-sm font-medium text-emerald-300 sm:text-base">{item.role}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {item.stack.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-emerald-300/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-100"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <ul className="mt-4 space-y-2.5 text-sm text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
