import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Sabin rebuilt our marketing site and the difference in load speed alone paid for the project. The component structure he left behind made it easy for our team to keep shipping after handoff.",
    name: "Anisha Rai",
    role: "Founder, GrowXth",
  },
  {
    quote:
      "What stood out was the code quality. Every API route was documented, every component reusable. It felt like inheriting a codebase from a senior engineer, not a freelancer.",
    name: "Marcus Webb",
    role: "Product Designer, Studio Loop",
  },
  {
    quote:
      "We needed local payment gateways integrated fast and without breaking the checkout flow. Sabin handled eSewa and Khalti integration end-to-end with zero downtime.",
    name: "Prashant Shrestha",
    role: "Owner, DigitalJau",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <span className="eyebrow">04 · Testimonials</span>
      <h2 className="section-heading text-balance">What Clients Say</h2>
      <p className="section-sub">
        Feedback from founders, designers, and business owners on the
        interfaces, code structure, and technical execution behind the work.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="card flex flex-col p-6">
            <Quote size={20} className="text-amber-500/80" />
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4 [html:not(.dark)_&]:border-border-light">
              <p className="font-display text-sm font-medium text-fg [html:not(.dark)_&]:text-fg-light">
                {t.name}
              </p>
              <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
                {t.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
