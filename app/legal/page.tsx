import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Information | Sabinz",
  description:
    "Privacy Policy, Terms of Use, Disclaimer, and contact information for Sabinz.",
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "August 16, 2026";

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-paper text-fg-light [html.dark_&]:bg-ink-950 [html.dark_&]:text-fg">
      {/* Header */}
      <section className="border-b border-border-light [html.dark_&]:border-border">
        <div className="mx-auto max-w-4xl px-6 pb-14 pt-32 md:px-10">
          <a
            href="/"
            className="mb-8 inline-flex items-center font-display text-xl font-semibold tracking-tight text-fg-light transition-colors hover:text-signal-500 [html.dark_&]:text-fg"
          >
            Sabinz
          </a>

          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-signal-500">
            Legal
          </p>

          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Legal Information
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-fg-light-muted [html.dark_&]:text-fg-muted">
            This page explains how this website is operated, how information
            may be handled, and the terms that apply when you use this website
            or contact Sabinz.
          </p>

          <p className="mt-4 font-mono text-xs text-fg-light-muted [html.dark_&]:text-fg-muted">
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Legal Content */}
      <section>
        <div className="mx-auto max-w-4xl px-6 py-14 md:px-10 md:py-20">
          <div className="space-y-16">
            {/* 1. Privacy Policy */}
            <article>
              <SectionNumber number="01" label="Privacy" />

              <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Privacy Policy
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-fg-light-muted [html.dark_&]:text-fg-muted">
                <p>
                  Your privacy matters. This website is operated by Sabin
                  Budha and is intended to provide information about
                  professional services, skills, projects, and ways to get in
                  touch.
                </p>

                <p>
                  This website does not intentionally collect sensitive
                  personal information unless you voluntarily provide it when
                  contacting me or using a feature that specifically requests
                  information.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  Information you provide
                </h3>

                <p>
                  If you contact me by email, WhatsApp, or through a contact
                  form, I may receive information such as your name, email
                  address, phone number, message, project requirements, or
                  other information you choose to provide.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  How information is used
                </h3>

                <p>
                  Information you provide may be used to respond to your
                  inquiry, discuss potential projects, provide requested
                  services, communicate with you, and maintain normal business
                  records.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  Third-party services
                </h3>

                <p>
                  This website may use third-party services for hosting,
                  analytics, communication, fonts, content delivery, or other
                  technical functionality. Those services may process certain
                  technical information according to their own privacy
                  policies.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  Website security
                </h3>

                <p>
                  Reasonable technical measures are used to protect the
                  website and information handled through it. However, no
                  internet transmission or online system can be guaranteed to
                  be completely secure.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  Data retention
                </h3>

                <p>
                  Information may be retained for as long as reasonably
                  necessary to respond to inquiries, provide services, meet
                  legitimate business requirements, or comply with applicable
                  legal obligations.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  Your choices
                </h3>

                <p>
                  If you have contacted me and want to ask about information
                  associated with your communication, you can contact me using
                  the details provided below.
                </p>
              </div>
            </article>

            {/* 2. Terms */}
            <article>
              <SectionNumber number="02" label="Terms" />

              <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Terms of Use
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-fg-light-muted [html.dark_&]:text-fg-muted">
                <p>
                  By accessing and using this website, you agree to use it
                  lawfully and respectfully. If you do not agree with these
                  terms, please do not use the website.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  Website content
                </h3>

                <p>
                  Unless otherwise stated, the website design, written
                  content, branding, graphics, code, project descriptions, and
                  other original materials are owned by or used with permission
                  by Sabin Budha.
                </p>

                <p>
                  You may view the website for personal or professional
                  evaluation purposes. You may not copy, reproduce, republish,
                  sell, redistribute, or commercially exploit original website
                  materials without appropriate permission.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  Projects and portfolio examples
                </h3>

                <p>
                  Portfolio projects are presented for demonstration and
                  informational purposes. Project descriptions, technologies,
                  features, and availability may change over time.
                </p>

                <p>
                  A project displayed in the portfolio does not necessarily
                  mean that all of its features, services, source code, or
                  commercial rights are available for public use.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  External links
                </h3>

                <p>
                  This website may contain links to third-party websites or
                  services. These websites are controlled by their respective
                  owners. I am not responsible for the content, availability,
                  security, or privacy practices of external websites.
                </p>

                <h3 className="pt-3 font-display text-lg font-semibold text-fg-light [html.dark_&]:text-fg">
                  Availability
                </h3>

                <p>
                  I may update, modify, suspend, or remove parts of the website
                  at any time without prior notice. I do not guarantee that the
                  website will always be available, error-free, or uninterrupted.
                </p>
              </div>
            </article>

            {/* 3. Disclaimer */}
            <article>
              <SectionNumber number="03" label="Disclaimer" />

              <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Disclaimer
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-fg-light-muted [html.dark_&]:text-fg-muted">
                <p>
                  The information provided on this website is for general
                  informational and portfolio purposes. While reasonable care
                  is taken to keep information accurate, no guarantee is made
                  that every piece of information is complete, current, or
                  error-free.
                </p>

                <p>
                  Technology, software libraries, project availability,
                  service offerings, pricing, timelines, and other information
                  may change without notice.
                </p>

                <p>
                  Information on this website should not be treated as
                  professional legal, financial, medical, or other regulated
                  professional advice.
                </p>
              </div>
            </article>

            {/* 4. Services */}
            <article>
              <SectionNumber number="04" label="Services" />

              <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Services &amp; Project Engagements
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-fg-light-muted [html.dark_&]:text-fg-muted">
                <p>
                  Any development or consulting service discussed through this
                  website is subject to a separate agreement between the
                  parties where appropriate.
                </p>

                <p>
                  Project scope, pricing, payment schedules, deadlines,
                  revisions, ownership, maintenance, hosting, third-party
                  services, and other commercial terms should be agreed upon
                  before work begins.
                </p>

                <p>
                  Nothing on this website creates a client relationship or
                  contractual obligation merely because a visitor views the
                  website or sends an inquiry.
                </p>
              </div>
            </article>

            {/* 5. Intellectual Property */}
            <article>
              <SectionNumber number="05" label="Ownership" />

              <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Intellectual Property
              </h2>

              <div className="mt-6 space-y-5 text-sm leading-7 text-fg-light-muted [html.dark_&]:text-fg-muted">
                <p>
                  The Sabinz name, branding, logo, original website design,
                  written material, and original code are protected by
                  applicable intellectual property laws.
                </p>

                <p>
                  Third-party trademarks, logos, technologies, libraries,
                  frameworks, and services referenced on this website remain
                  the property of their respective owners.
                </p>

                <p>
                  Any use of third-party materials is subject to the
                  applicable licenses or permissions associated with those
                  materials.
                </p>
              </div>
            </article>

            {/* 6. Contact */}
            <article>
              <SectionNumber number="06" label="Contact" />

              <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Contact Information
              </h2>

              <div className="mt-6 space-y-4 text-sm leading-7 text-fg-light-muted [html.dark_&]:text-fg-muted">
                <p>
                  If you have a question about this website, privacy,
                  services, or these terms, you can contact me directly.
                </p>

                <div className="rounded-xl border border-border-light bg-paper p-5 [html.dark_&]:border-border [html.dark_&]:bg-ink-900/40">
                  <div className="space-y-3">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-fg-faint [html.dark_&]:text-fg-muted">
                        Name
                      </span>
                      <p className="mt-1 text-fg-light [html.dark_&]:text-fg">
                        Sabin Budha
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-fg-faint [html.dark_&]:text-fg-muted">
                        Email
                      </span>
                      <a
                        href="mailto:sabinbudha666@gmail.com"
                        className="mt-1 block text-fg-light transition-colors hover:text-signal-500 [html.dark_&]:text-fg"
                      >
                        sabinbudha666@gmail.com
                      </a>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-fg-faint [html.dark_&]:text-fg-muted">
                        WhatsApp
                      </span>
                      <a
                        href="https://wa.me/9779747804714"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-fg-light transition-colors hover:text-signal-500 [html.dark_&]:text-fg"
                      >
                        +977 9747804714
                      </a>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-fg-faint [html.dark_&]:text-fg-muted">
                        Location
                      </span>
                      <p className="mt-1 text-fg-light [html.dark_&]:text-fg">
                        Samakhusi, Kathmandu, Nepal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Notice */}
            <div className="border-t border-border-light pt-8 [html.dark_&]:border-border">
              <p className="text-xs leading-6 text-fg-light-muted [html.dark_&]:text-fg-muted">
                This page is provided for general website transparency and
                informational purposes. It is not a substitute for
                jurisdiction-specific legal advice. If your business,
                services, data processing, or payment practices change, this
                page should be reviewed and updated accordingly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionNumber({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[11px] text-signal-500">{number}</span>

      <span className="h-px w-8 bg-border-light [html.dark_&]:bg-border" />

      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg-faint [html.dark_&]:text-fg-muted">
        {label}
      </span>
    </div>
  );
}