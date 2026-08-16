"use client";

import {
  ArrowRight,
  Mail,
  Github,
  Linkedin,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function CTA() {
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !message) {
      setError("Please fill in all fields.");
      setIsSending(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to send message.");
      }

      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="card relative overflow-hidden bg-grid-pattern p-10 md:p-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-signal-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />

        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT SIDE */}
          <div>
            <span className="eyebrow">05 · Get In Touch</span>

            <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-fg text-balance sm:text-4xl md:text-[2.5rem] [html:not(.dark)_&]:text-fg-light">
              Ready To Create Something Exceptional?
            </h2>

            <p className="section-sub mt-4">
              Looking for a premium website, modern product UI, scalable
              full-stack system, or a performance-focused digital
              experience? Let&apos;s talk about what you&apos;re building.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Email CTA */}
              <a
                href="mailto:sabinbudha666@gmail.com"
                className="btn-primary"
              >
                Start a Project
                <ArrowRight size={16} />
              </a>

              {/* SOCIAL / CONTACT ICONS */}
              <div className="flex items-center gap-3">
                {/* Email */}
                <a
                  href="mailto:sabinbudha666@gmail.com"
                  aria-label="Email"
                  title="Email me"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-signal-500/50 hover:text-signal-400 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:text-fg-light-muted"
                >
                  <Mail size={17} />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/9779744836218"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-signal-500/50 hover:text-signal-400 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:text-fg-light-muted"
                >
                  <MessageCircle size={17} />
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/SabinChettri"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-signal-500/50 hover:text-signal-400 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:text-fg-light-muted"
                >
                  <Github size={17} />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/sabinbudhaa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-fg-muted transition-colors hover:border-signal-500/50 hover:text-signal-400 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:text-fg-light-muted"
                >
                  <Linkedin size={17} />
                </a>
              </div>
            </div>

            {/* DIRECT CONTACT INFORMATION */}
            <div className="mt-6 flex flex-col gap-2 font-mono text-xs text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
              <a
                href="mailto:sabinbudha666@gmail.com"
                className="transition-colors hover:text-signal-400"
              >
                sabinbudha666@gmail.com
              </a>

              <a
                href="https://wa.me/9779744836218"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-signal-400"
              >
                WhatsApp: +977 9744836218
              </a>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {/* NAME */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  disabled={isSending}
                  className="rounded-lg border border-border bg-ink-900/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint outline-none transition-colors focus:border-signal-500 disabled:cursor-not-allowed disabled:opacity-60 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-paper [html:not(.dark)_&]:text-fg-light"
                />
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                  disabled={isSending}
                  className="rounded-lg border border-border bg-ink-900/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint outline-none transition-colors focus:border-signal-500 disabled:cursor-not-allowed disabled:opacity-60 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-paper [html:not(.dark)_&]:text-fg-light"
                />
              </div>
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted"
              >
                Project Details
              </label>

              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me a little about what you're building..."
                required
                disabled={isSending}
                className="resize-none rounded-lg border border-border bg-ink-900/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint outline-none transition-colors focus:border-signal-500 disabled:cursor-not-allowed disabled:opacity-60 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-paper [html:not(.dark)_&]:text-fg-light"
              />
            </div>

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="flex items-center gap-2 rounded-lg border border-signal-500/30 bg-signal-500/10 px-4 py-3 text-sm text-signal-400">
                <CheckCircle2 size={17} />
                <span>
                  Message sent successfully. I&apos;ll get back to you soon.
                </span>
              </div>
            )}

            {/* ERROR MESSAGE */}
            {error && (
              <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle size={17} />
                <span>{error}</span>
              </div>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSending}
              className="btn-primary mt-1 w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSending ? "Sending..." : success ? "Message Sent" : "Send Message"}

              {!isSending && !success && <ArrowRight size={16} />}
              {success && <CheckCircle2 size={16} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}