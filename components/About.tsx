import {
  LayoutGrid,
  Gauge,
  MousePointerClick,
  Smartphone,
} from "lucide-react";

const FOCUS_AREAS = [
  {
    icon: LayoutGrid,
    title: "Modern UI & Design Systems",
    desc: "Component-driven interfaces with consistent typography, spacing, reusable patterns, and modern visual systems across every screen.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Development",
    desc: "Interfaces engineered to maintain their layout, hierarchy, usability, and performance across mobile, tablet, desktop, and ultra-wide displays.",
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    desc: "Performance-focused development using optimized assets, lazy loading, code splitting, caching, and efficient rendering strategies.",
  },
  {
    icon: MousePointerClick,
    title: "Interactive & 3D Experiences",
    desc: "Purposeful animations, micro-interactions, and immersive 3D web experiences that make digital products engaging without sacrificing usability.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section"
    >
      <span className="eyebrow">01 · About</span>

      <h2
        id="about-heading"
        className="section-heading text-balance"
      >
        About Sabin Budha — Full-Stack Web Developer in Nepal
      </h2>
      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* About content */}
        <div className="space-y-5 text-[15px] leading-relaxed text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
          <p>
            I&apos;m <strong className="font-medium text-fg [html:not(.dark)_&]:text-fg-light">
              Sabin Budha
            </strong>
            , a full-stack web developer based in Kathmandu, Nepal. I work
            across the entire web development stack — from modern user
            interfaces and responsive frontend experiences to databases, APIs,
            authentication, and backend architecture.
          </p>

          <p>
            I enjoy building websites that go beyond basic templates. My work
            includes modern business websites, high-converting landing pages,
            interactive interfaces, 3D web experiences, and full-stack
            applications designed around real business requirements.
          </p>

          <p>
            My development process starts with the user experience: how the
            interface looks, how information is organized, how quickly the
            page responds, and how easily a visitor can move from intent to
            action. From there, I build the underlying architecture needed to
            make the product reliable and scalable.
          </p>

          <p>
            The goal is simple: create digital products that look polished,
            perform well, work across devices, and provide a strong foundation
            for future growth.
          </p>

          <p>
            I work with businesses and individuals in Nepal and with clients
            worldwide who need modern web development, UI-focused frontend
            engineering, full-stack applications, or performance and SEO
            improvements.
          </p>
        </div>

        {/* Focus areas */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FOCUS_AREAS.map((area) => {
            const Icon = area.icon;

            return (
              <div
                key={area.title}
                className="card p-5 transition-colors duration-200 hover:border-signal-500/40"
              >
                <Icon
                  size={20}
                  className="text-signal-400"
                  aria-hidden="true"
                />

                <h3 className="mt-4 font-display text-base font-medium text-fg [html:not(.dark)_&]:text-fg-light">
                  {area.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
                  {area.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}