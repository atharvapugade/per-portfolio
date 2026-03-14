"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { skills } from "@/lib/data";
import { staggerContainer } from "@/lib/motion";

export function SkillsSection() {
  return (
    <section id="skills" className="section-wrapper">
      <Reveal>
        <SectionTitle
          eyebrow="Skills"
          title="Tech Arsenal"
          subtitle="Production-oriented full stack engineering across frontend, backend, and data layers."
        />
      </Reveal>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5"
      >
        {skills.map((skill) => (
          <motion.article
            key={skill.category}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="glow-card rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-indigo-300 sm:text-base">{skill.category}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-xs font-medium text-slate-200 sm:px-3 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
