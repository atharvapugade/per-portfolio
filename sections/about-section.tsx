"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { aboutText } from "@/lib/data";

export function AboutSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="section-wrapper">
      <Reveal>
        <SectionTitle
          eyebrow="About"
          title="About Me"
          subtitle="A quick snapshot of my background, work style, and what I enjoy building."
        />
      </Reveal>

      <div className="grid items-stretch gap-6 lg:grid-cols-[280px_1fr] lg:auto-rows-fr">
        <Reveal>
          <div className="flex justify-center">
            <div className="glow-card relative aspect-square w-full max-w-[210px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl sm:w-64 sm:max-w-[320px] lg:h-full lg:w-full lg:max-w-none lg:aspect-auto lg:min-h-[380px]">
              {!imgError ? (
                <Image
                  src="/photo.jpg"
                  alt="Atharv Sandip Apugade"
                  fill
                  className="object-cover object-top"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div className="flex h-full min-h-[280px] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-indigo-600/25 via-violet-500/15 to-emerald-400/15">
                  <span className="text-6xl font-black text-white/20 lg:text-8xl">ASA</span>
                  <p className="text-xs tracking-widest text-white/30 uppercase">Add photo.jpg to /public</p>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glow-card flex h-full flex-col justify-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-10 lg:min-h-[380px]">
            <p className="text-left text-sm leading-7 text-slate-200 sm:text-[15px] sm:leading-7 lg:text-base lg:leading-8">
              {aboutText}
            </p>
            <div className="flex flex-wrap gap-3">
              {["Open to Work", "CSE Undergrad", "MERN Specialist", "Next.js · Nest.js"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-indigo-300/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
