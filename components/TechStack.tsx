import {
  Code2,
  Database,
  Server,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

const CATEGORIES = [
  {
    icon: Code2,
    title: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "TailwindCSS"],
  },
  {
    icon: Server,
    title: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    icon: ShieldCheck,
    title: "Authentication",
    items: ["Firebase", "JWT"],
  },
  {
    icon: CreditCard,
    title: "Payments",
    items: ["eSewa", "Khalti", "PayPal"],
  },
];

export default function TechStack() {
  return (
    <section id="skills" className="section">
      <span className="eyebrow">03 · Tech Toolbox</span>
      <h2 className="section-heading text-balance">
        The Stack Behind The Systems
      </h2>
      <p className="section-sub">
        A full-stack toolkit spanning interface engineering, server logic,
        data persistence, and secure, localized payment integration.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="card p-6 transition-colors duration-200 hover:border-signal-500/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-ink-900/60 text-signal-400 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-paper">
                <cat.icon size={18} />
              </span>
              <h3 className="font-display text-base font-medium text-fg [html:not(.dark)_&]:text-fg-light">
                {cat.title}
              </h3>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="card flex flex-col justify-center p-6">
          <p className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
            Always Learning
          </p>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
            Tools change — the fundamentals of clean architecture,
            accessible UI, and readable code don&apos;t. That&apos;s what
            every stack decision is built around.
          </p>
        </div>
      </div>
    </section>
  );
}
