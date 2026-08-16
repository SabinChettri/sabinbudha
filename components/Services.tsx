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
  Box,
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
    desc: "Custom business websites built from scratch — fast, responsive, accessible, and structured to represent your brand professionally online.",
    points: [
      "Custom UI & responsive design",
      "Mobile-first development",
      "SEO-friendly architecture",
    ],
  },

  {
    icon: Box,
    title: "3D Website & Interactive Experiences",
    desc: "Immersive 3D websites and interactive web experiences designed to make products, brands, and digital spaces more engaging.",
    points: [
      "Interactive 3D interfaces",
      "Product & visual experiences",
      "Performance-conscious implementation",
    ],
  },

  {
    icon: Briefcase,
    title: "Business Website & Portfolio",
    desc: "Professional websites for businesses, agencies, and freelancers that showcase services, projects, and expertise while building client trust.",
    points: [
      "Service & project showcase",
      "Testimonials & trust signals",
      "Contact & lead capture",
    ],
  },

  {
    icon: FileCode2,
    title: "Static Website",
    desc: "Lightweight, fast-loading websites for businesses, products, landing pages, and content that does not require a complex backend.",
    points: [
      "Fast page delivery",
      "Low-cost hosting & maintenance",
      "Clean and maintainable code",
    ],
  },

  {
    icon: Layers3,
    title: "Full-Stack Web Application",
    desc: "Complete web applications with databases, authentication, APIs, and business logic — built for real users and real-world workflows.",
    points: [
      "Database & API architecture",
      "Authentication & authorization",
      "Payment gateway integration",
    ],
  },

  {
    icon: Rocket,
    title: "Landing Page Development",
    desc: "High-performance landing pages designed around a clear business objective such as generating leads, bookings, sign-ups, or sales.",
    points: [
      "Conversion-focused structure",
      "Clear messaging & CTAs",
      "Fast interactive experiences",
    ],
  },

  {
    icon: Search,
    title: "SEO",
    desc: "Technical and on-page SEO improvements that help search engines understand, crawl, and index your website more effectively.",
    points: [
      "On-page & technical SEO",
      "Sitemap & structured data",
      "Core Web Vitals optimization",
    ],
  },

  {
    icon: Sparkles,
    title: "GEO — Generative Engine Optimization",
    desc: "Content and website structures designed to make your brand, services, and expertise easier for AI-powered search and answer systems to understand.",
    points: [
      "AI-readable content structure",
      "Entity & brand clarity",
      "Structured, citation-ready content",
    ],
  },

  {
    icon: MessageCircleQuestion,
    title: "AEO — Answer Engine Optimization",
    desc: "Question-focused content and information architecture designed to provide clear answers for search engines, answer engines, voice search, and AI systems.",
    points: [
      "FAQ & question-based content",
      "Answer-focused page structure",
      "Relevant structured data",
    ],
  },

  {
    icon: ClipboardCheck,
    title: "Website Audit",
    desc: "A practical technical, SEO, accessibility, and performance audit that identifies problems and provides a prioritized list of improvements.",
    points: [
      "Performance & Core Web Vitals",
      "SEO & crawlability review",
      "Prioritized improvement report",
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section"
    >
      <span className="eyebrow">02 · What I Offer</span>

      <h2
        id="services-heading"
        className="section-heading text-balance"
      >
        Web Development, 3D Experiences &amp; SEO Services
      </h2>

      <p className="section-sub">
        I build modern websites, interactive 3D experiences, and full-stack
        web applications for businesses in Kathmandu, Nepal, and clients
        worldwide — with performance, usability, and search visibility built
        into the process.
      </p>

      <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <li
              key={service.title}
              className="card group flex flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/40"
            >
              <span
                aria-hidden="true"
                className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-ink-900/60 text-signal-400 transition-colors duration-200 group-hover:border-signal-500/50 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:bg-paper"
              >
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
                    <span
                      aria-hidden="true"
                      className="h-1 w-1 shrink-0 rounded-full bg-signal-500"
                    />

                    {point}
                  </li>
                ))}
              </ul>
            </li>
          );
        })}

        {/* CTA tile */}
        <li>
          <a
            href="#contact"
            className="card group flex h-full flex-col justify-between overflow-hidden bg-grid-pattern p-6 transition-all duration-300 hover:-translate-y-1 hover:border-signal-500/40"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
                Not sure which fits?
              </p>

              <h3 className="mt-2 font-display text-lg font-medium text-fg [html:not(.dark)_&]:text-fg-light">
                Let&apos;s scope your project together.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
                Tell me what you are building, and we can identify the right
                technical approach for your goals and budget.
              </p>
            </div>

            <span className="mt-6 flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-signal-400">
              Start a conversation

              <ArrowRight
                size={13}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}