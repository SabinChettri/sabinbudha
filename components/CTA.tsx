import { ArrowRight, Mail, Github, Linkedin, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="section">
      <div className="card relative overflow-hidden bg-grid-pattern p-10 md:p-16">
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-signal-500/10 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-amber-500/10 blur-[100px]" />

        <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
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

              {/* Social / Contact Icons */}
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
                  href="https://github.com"
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
                  href="https://linkedin.com"
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

            {/* Direct contact information */}
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

          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-lg border border-border bg-ink-900/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:border-signal-500 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-paper [html:not(.dark)_&]:text-fg-light"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="rounded-lg border border-border bg-ink-900/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:border-signal-500 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-paper [html:not(.dark)_&]:text-fg-light"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted"
              >
                Project Details
              </label>

              <textarea
                id="message"
                rows={4}
                placeholder="Tell me a little about what you're building..."
                className="resize-none rounded-lg border border-border bg-ink-900/60 px-4 py-3 text-sm text-fg placeholder:text-fg-faint focus:border-signal-500 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-paper [html:not(.dark)_&]:text-fg-light"
              />
            </div>

            <button type="submit" className="btn-primary mt-1 w-full">
              Send Message
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}