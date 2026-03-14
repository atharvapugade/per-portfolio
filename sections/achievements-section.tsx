"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { achievements } from "@/lib/data";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-wrapper">
      <Reveal>
        <SectionTitle
          eyebrow="Milestones"
          title="Achievements"
          subtitle="Recognition across hackathons, research, and competitive engineering initiatives."
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="glow-card flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:gap-4 sm:p-5"
          >
            <Trophy className="mt-1 h-5 w-5 text-emerald-300" />
            <p className="text-sm leading-relaxed text-slate-200 sm:text-base">{item}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
