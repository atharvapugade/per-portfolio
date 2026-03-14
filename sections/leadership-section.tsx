"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { leadership } from "@/lib/data";

export function LeadershipSection() {
  return (
    <section id="leadership" className="section-wrapper">
      <Reveal>
        <SectionTitle
          eyebrow="Leadership"
          title="Leadership Roles"
          subtitle="Roles where I coordinated teams, planned activities, and supported student initiatives." 
        />
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {leadership.map((item, index) => (
          <motion.article
            key={item}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
            className="glow-card rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6"
          >
            <Users className="mb-4 h-6 w-6 text-indigo-300" />
            <h3 className="text-lg font-semibold text-white">{item}</h3>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
