import { LayoutGrid, Gauge, MousePointerClick, Smartphone } from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: LayoutGrid,
    title: "UI Systems",
    desc: "Component-driven design systems with consistent tokens, spacing, and reusable patterns across every screen.",
  },
  {
    icon: Smartphone,
    title: "Responsive Development",
    desc: "Interfaces engineered to hold their layout and hierarchy from a 320px screen up to ultra-wide displays.",
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    desc: "Lighthouse-driven optimization — lazy loading, code splitting, and caching strategies that keep load times low.",
  },
  {
    icon: MousePointerClick,
    title: "Interaction Design",
    desc: "Smooth, purposeful micro-interactions and transitions that make products feel considered, not just functional.",
  },
];

export default function About() {
  return (
    <section id="about" className="section">
      <span className="eyebrow">01 · About</span>
      <h2 className="section-heading text-balance">
        Everything About me  & work process
      </h2>
      <p className="section-sub">
        Passionate about building beautiful, scalable, and premium digital
        experiences with clean architecture and modern design.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5 text-[15px] leading-relaxed text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
          <p>
            I&apos;m Sabin Budha, a full-stack developer who works across the
            entire stack — from pixel-level interface work to the database
            schemas and APIs that keep an application reliable under real
            traffic.
          </p>
          <p>
            My process starts with the interface: how a layout breathes,
            how type scales across devices, how a user moves from intent to
            action without friction. Then it extends into architecture —
            structuring data, securing routes, and integrating the systems
            (auth, payments, storage) that turn a design into a working
            product.
          </p>
          <p>
            The result is work that looks premium and holds up in
            production: fast, accessible, and built to scale past the first
            version.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FOCUS_AREAS.map((area) => (
            <div
              key={area.title}
              className="card p-5 transition-colors duration-200 hover:border-signal-500/40"
            >
              <area.icon size={20} className="text-signal-400" />
              <h3 className="mt-4 font-display text-base font-medium text-fg [html:not(.dark)_&]:text-fg-light">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
