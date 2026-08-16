import { ArrowRight, ArrowUpRight, Circle } from "lucide-react";

const STACK_LAYERS = [
  {
    label: "UI / INTERFACE",
    detail: "React · Next.js · Tailwind",
    tint: "signal",
  },
  {
    label: "APPLICATION LAYER",
    detail: "Node.js · Express · REST",
    tint: "amber",
  },
  {
    label: "DATA LAYER",
    detail: "PostgreSQL · MongoDB · Prisma",
    tint: "signal",
  },
];

const CHART_BARS = [40, 65, 50, 80, 60, 95, 70];

export default function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-grid-pattern pt-36 pb-28 md:pt-44 md:pb-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-signal-500/10 blur-[120px]"
      />

      <div className="section grid grid-cols-1 items-center gap-16 py-0 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left column */}
        <div className="animate-fade-up">
          <span className="eyebrow">
            <Circle
              size={7}
              className="fill-signal-500 text-signal-500 animate-pulse-dot"
              aria-hidden="true"
            />

            Full-Stack Web Developer · Kathmandu, Nepal
          </span>

          <h1
            id="hero-heading"
            className="mt-6 max-w-2xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-fg text-balance sm:text-5xl md:text-6xl [html:not(.dark)_&]:text-fg-light"
          >
            Full-Stack Web Developer in Kathmandu, Nepal.
          </h1>

          <p className="section-sub mt-6 max-w-lg">
            I build modern websites, immersive 3D web experiences, and full-stack
            applications with high-performance interfaces, scalable backend systems,
            and SEO-focused digital experiences for businesses in Nepal and clients
            worldwide.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 font-mono text-xs uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
            <span> 10+ Production Systems</span>

            <span
              aria-hidden="true"
              className="hidden h-1 w-1 rounded-full bg-fg-faint sm:block"
            />

            <span>Frontend to Deployment</span>

            <span
              aria-hidden="true"
              className="hidden h-1 w-1 rounded-full bg-fg-faint sm:block"
            />

            <span>Payments-Ready Architecture</span>
          </div>
        </div>

        {/* Right column — signature visual */}
        <div className="relative mx-auto w-full max-w-md pb-14 animate-fade-up [animation-delay:150ms] sm:pb-8">
          {/* Laptop mockup */}
          <div className="relative">
            <div className="rounded-t-2xl border border-border bg-ink-900 p-2 shadow-2xl [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-gray-100">
              <div className="overflow-hidden rounded-lg border border-border bg-ink-950 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-white">
                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5 [html:not(.dark)_&]:border-border-light">
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-fg-faint/40"
                  />

                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-fg-faint/40"
                  />

                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-signal-500"
                  />

                  <span className="ml-2.5 truncate font-mono text-[10px] text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
                    sabinbudha.vercel.app
                  </span>

                  <span className="ml-auto flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider text-signal-400">
                    live
                    <ArrowUpRight size={10} aria-hidden="true" />
                  </span>
                </div>

                {/* Abstract live-preview screen */}
                <div className="space-y-3 p-4">
                  <div className="flex items-center justify-between">
                    <div className="h-2.5 w-20 rounded bg-signal-500/40" />

                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-ink-700 [html:not(.dark)_&]:bg-gray-200" />
                      <div className="h-2.5 w-2.5 rounded-full bg-ink-700 [html:not(.dark)_&]:bg-gray-200" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[0, 1, 2].map((i) => (
                      <div
                        key={i}
                        aria-hidden="true"
                        className="h-14 rounded-lg border border-border bg-ink-800/70 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-gray-100"
                      />
                    ))}
                  </div>

                  <div
                    aria-hidden="true"
                    className="flex h-24 items-end gap-1.5 rounded-lg border border-border bg-ink-800/70 p-3 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-gray-100"
                  >
                    {CHART_BARS.map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-sm ${i % 3 === 0
                            ? "bg-amber-500/70"
                            : "bg-signal-500/60"
                          }`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop base */}
            <div className="mx-auto h-3 w-[94%] rounded-b-xl border-x border-b border-border bg-ink-800 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-gray-200" />

            <div className="mx-auto h-1.5 w-1/3 rounded-b-md bg-ink-700 [html:not(.dark)_&]:bg-gray-300" />
          </div>

          {/* Floating system-status panel */}
          <div className="absolute -bottom-2 -left-3 w-[15.5rem] rotate-[-3deg] rounded-xl border border-border bg-surface p-3.5 shadow-2xl transition-transform duration-300 hover:rotate-0 sm:-bottom-8 sm:-left-6 sm:w-64 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-surface-light">
            <div className="flex items-center justify-between border-b border-border pb-2.5 [html:not(.dark)_&]:border-border-light">
              <span className="font-mono text-[10px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
                system.status
              </span>

              <Circle
                size={6}
                className="fill-signal-500 text-signal-500 animate-pulse-dot"
                aria-hidden="true"
              />
            </div>

            <div className="mt-3 flex flex-col gap-2">
              {STACK_LAYERS.map((layer) => (
                <div
                  key={layer.label}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="font-mono text-[9px] tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
                      {layer.label}
                    </p>

                    <p className="mt-0.5 text-[11.5px] text-fg [html:not(.dark)_&]:text-fg-light">
                      {layer.detail}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 shrink-0 rounded-full ${layer.tint === "signal"
                        ? "bg-signal-500"
                        : "bg-amber-500"
                      }`}
                  />
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-dashed border-border pt-2.5 [html:not(.dark)_&]:border-border-light">
              <span className="font-mono text-[9px] text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
                build → deploy
              </span>

              <span className="flex items-center gap-1 font-mono text-[9px] text-signal-400">
                live
                <ArrowUpRight size={10} aria-hidden="true" />
              </span>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl"
          />
        </div>
      </div>
    </section>
  );
}