"use client";

import { FormEvent, useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionTitle } from "@/components/section-title";
import { profileLinks } from "@/lib/data";

export function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send message.");
      }

      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus({
        type: "success",
        message: "Message sent successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Unable to send message.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="section-wrapper pb-20">
      <Reveal>
        <SectionTitle
          eyebrow="Contact"
          title="Let’s Connect"
          subtitle="I’m open to internships, full-time opportunities, and meaningful product work."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glow-card rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-6">
            <div className="space-y-5 text-slate-200">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 text-indigo-300" />
                <a className="hover:text-indigo-200" href="mailto:atharvapugade83@gmail.com">
                  atharvapugade83@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 text-emerald-300" />
                <a className="hover:text-emerald-200" href="tel:+919561701860">
                  +91 9561701860
                </a>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 text-violet-300" />
                <p>Ashta, Maharashtra, India</p>
              </div>

              <div className="pt-2">
                <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-slate-400">Profiles</p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={profileLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-slate-100 transition-colors hover:border-slate-200/40 hover:text-white"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                  <a
                    href={profileLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1.5 text-xs font-semibold text-indigo-100 transition-colors hover:bg-indigo-500/20"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="glow-card space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:space-y-4 sm:p-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
                required
                className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-indigo-400/50 transition focus:ring"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(event) =>
                  setForm((current) => ({ ...current, email: event.target.value }))
                }
                required
                className="rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-indigo-400/50 transition focus:ring"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(event) =>
                setForm((current) => ({ ...current, subject: event.target.value }))
              }
              required
              className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-indigo-400/50 transition focus:ring"
            />

            <textarea
              rows={6}
              placeholder="Write your message"
              value={form.message}
              onChange={(event) =>
                setForm((current) => ({ ...current, message: event.target.value }))
              }
              required
              className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none ring-indigo-400/50 transition focus:ring"
            />

            {status.type !== "idle" ? (
              <p
                className={status.type === "success" ? "text-sm text-emerald-300" : "text-sm text-rose-300"}
              >
                {status.message}
              </p>
            ) : null}

            <button type="submit" disabled={submitting} className="glow-button disabled:opacity-60">
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
