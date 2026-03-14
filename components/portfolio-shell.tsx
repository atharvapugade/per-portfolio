"use client";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { PageLoader } from "@/components/page-loader";
import { ScrollProgress } from "@/components/scroll-progress";
import { ScrollToTop } from "@/components/scroll-to-top";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AboutSection } from "@/sections/about-section";
import { AchievementsSection } from "@/sections/achievements-section";
import { ContactSection } from "@/sections/contact-section";
import { HeroSection } from "@/sections/hero-section";
import { InternshipsSection } from "@/sections/internships-section";
import { LeadershipSection } from "@/sections/leadership-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";

export function PortfolioShell() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setLoading(false), 1200);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <>
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <ScrollToTop />
      <AnimatePresence>
        <PageLoader loading={loading} />
      </AnimatePresence>

      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(99,102,241,0.22),transparent_32%),radial-gradient(circle_at_84%_18%,rgba(34,197,94,0.14),transparent_28%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.1),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(2,6,23,0.82),rgba(15,23,42,0.7),rgba(2,6,23,0.9))]" />
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <InternshipsSection />
        <ProjectsSection />
        <AchievementsSection />
        <LeadershipSection />
        <ContactSection />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="mx-auto flex w-[min(1120px,calc(100%-1.5rem))] flex-col items-center justify-between gap-3 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Atharv Sandip Apugade</p>
          <p className="text-slate-500">Designed and developed with Next.js, TypeScript, and Framer Motion.</p>
        </div>
      </footer>
    </>
  );
}
