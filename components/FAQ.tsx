"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQS: FAQItem[] = [
  {
    question: "What's your typical project turnaround time?",
    answer:
      "A landing page usually takes 3–7 days. A full-stack application with auth, a database, and payments typically runs 2–5 weeks depending on scope. I'll give you a firm timeline after a short discovery call.",
  },
  {
    question: "Do you work with clients outside Nepal?",
    answer:
      "Yes — most of my work is remote and I regularly collaborate with clients across different time zones using async updates, shared boards, and scheduled calls.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "Primarily React, Next.js, and TypeScript on the frontend, with Node.js/Express, PostgreSQL, MongoDB, and Prisma on the backend — plus auth (Firebase/JWT) and payment integrations like eSewa, Khalti, and PayPal.",
  },
  {
    question: "Can you redesign my existing website instead of building new?",
    answer:
      "Absolutely. I can audit your current site, keep what's working, and rebuild or refactor the rest — often reusing your existing content and branding.",
  },
  {
    question: "Do you offer support after the site launches?",
    answer:
      "Yes. Every project includes a short post-launch window for fixes, and I offer ongoing maintenance retainers for clients who want ongoing updates, monitoring, or new features.",
  },
  {
    question: "How does pricing and payment work?",
    answer:
      "Pricing depends on scope — I'll send a fixed quote after understanding your requirements. Most projects are split into a deposit to start and a final payment on delivery.",
  },
];

function FAQRow({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="card overflow-hidden">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
      >
        <span className="font-display text-[15px] font-medium text-fg md:text-base [html:not(.dark)_&]:text-fg-light">
          {item.question}
        </span>
        <span
          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-fg-muted transition-all duration-300 [html:not(.dark)_&]:border-border-light [html:not(.dark)_&]:text-fg-light-muted ${
            isOpen ? "rotate-180 border-signal-500/50 text-signal-400" : ""
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-relaxed text-fg-muted md:px-6 md:pb-6 [html:not(.dark)_&]:text-fg-light-muted">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // FAQPage structured data — lets Google, Bing, and AI answer engines
  // (ChatGPT, Perplexity, Gemini, etc.) surface these Q&As directly as
  // rich results or cited answers, generated straight from FAQS above
  // so it never drifts out of sync with what's rendered on the page.
  
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <span className="eyebrow">06 · FAQ</span>
      <h2 className="section-heading text-balance">
        Frequently Asked Questions
      </h2>
      <p className="section-sub">
        Answers to the questions clients usually ask before starting a
        project. Don&apos;t see yours? Reach out directly.
      </p>

      <div className="mt-12 flex flex-col gap-3 md:mt-16">
        {FAQS.map((item, i) => (
          <FAQRow
            key={item.question}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}