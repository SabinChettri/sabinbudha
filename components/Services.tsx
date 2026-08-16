import {
  Globe,
  Briefcase,
  FileCode2,
  Layers3,
  Rocket,
  Search,
  Sparkles,
  MessageCircleQuestion,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

type Service = {
  icon: typeof Globe;
  title: string;
  desc: string;
  points: string[];
};

const SERVICES: Service[] = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Custom business websites built from scratch — fast, responsive, and structured to represent your brand professionally online.",
    points: [
      "Custom UI design",
      "Mobile-first & responsive",
      "SEO-friendly structure",
    ],
  },
  {
    icon: Briefcase,
    title: "Business Portfolio",
    desc: "Professional portfolio sites for businesses, agencies, and freelancers that showcase your work and build client trust.",
    points: [
      "Service & project showcase",
      "Client testimonials section",
      "Contact & lead capture",
    ],
  },
  {
    icon: FileCode2,
    title: "Static Website",
    desc: "Lightweight, fast-loading static sites — ideal for brochure sites, product pages, and content that doesn't need a backend.",
    points: [
      "Blazing-fast load times",
      "Low-cost hosting & upkeep",
      "Clean, minimal codebase",
    ],
  },
  {
    icon: Layers3,
    title: "Full-Stack Website",
    desc: "Complete web applications with a database, authentication, and APIs — built to handle real users and real business logic.",
    points: [
      "Database & API architecture",
      "Auth & role-based access",
      "Payment gateway integration",
    ],
  },
  {
    icon: Rocket,
    title: "Landing Page",
    desc: "High-conversion landing pages designed around a single goal — sign-ups, sales, or bookings — with clear, focused messaging.",
    points: [
      "Conversion-focused layout",
      "A/B testable sections",
      "Fast, animated interactions",
    ],
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Search engine optimization that improves how your site is structured, crawled, and ranked — built in, not bolted on.",
    points: [
      "On-page & technical SEO",
      "Sitemap & schema markup",
      "Core Web Vitals tuning",
    ],
  },
  {
    icon: Sparkles,
    title: "GEO (Generative Engine Optimization)",
    desc: "Structuring content so AI assistants like ChatGPT, Claude, and Gemini can understand, cite, and recommend your brand.",
    points: [
      "AI-readable content structure",
      "Entity & brand clarity",
      "Citation-worthy formatting",
    ],
  },
  {
    icon: MessageCircleQuestion,
    title: "AEO (Answer Engine Optimization)",
    desc: "Content and page structure built to directly answer real user questions — for featured snippets, voice search, and AI answers.",
    points: [
      "FAQ & Q&A structuring",
      "Featured snippet targeting",
      "Structured data for answers",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Website Audit",
    desc: "A full technical, SEO, and performance audit that identifies exactly what's holding your site back — with a prioritized fix list.",
    points: [
      "Performance & Core Web Vitals",
      "SEO & crawlability review",
      "Actionable fix report",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <span className="eyebrow">02 · What I Offer</span>

      <h2 className="section-heading text-balance">
        Services &amp; Offerings
      </h2>

      <p className="section-sub">
        Whether you need a simple website or a full-stack product, here&apos;s
        what I build — matched to what your business actually needs.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-ink-900/60 text-signal-400 transition-colors duration-200 group-hover:border-signal-500/50 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-paper">
                <Icon size={20} />
              </span>

              <h3 className="mt-5 font-display text-lg font-medium text-fg [html:not(.dark)_&]:text-fg-light">
                {service.title}
              </h3>

              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
                {service.desc}
              </p>

              <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-4 [html:not(.dark)_&]:border-border-light">
                {service.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 text-[13px] text-fg-muted [html:not(.dark)_&]:text-fg-light-muted"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-signal-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}

        {/* CTA tile */}
        <a
          href="#contact"
          className="card group flex flex-col justify-between overflow-hidden bg-grid-pattern p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/40"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
              Not sure which fits?
            </p>

            <h3 className="mt-2 font-display text-lg font-medium text-fg [html:not(.dark)_&]:text-fg-light">
              Let&apos;s scope your project together.
            </h3>
          </div>

          <span className="mt-6 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-signal-400">
            Start a conversation

            <ArrowRight
              size={13}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </span>
        </a>
      </div>
    </section>
  );
}