# Sabin Budha — Portfolio

A single-page portfolio for a full-stack developer / UI specialist, built with Next.js (App Router), TailwindCSS, and Lucide React icons.

## Design system

- **Palette:** deep ink background (`#0A0E13`), signal blue (`#4F9CF9`) as the primary accent, amber (`#F5A623`) as a secondary highlight. A light theme (toggle in the navbar) swaps to a paper background while keeping the same accents.
- **Type:** Space Grotesk (display/headlines), Inter (body copy), JetBrains Mono (labels, tags, eyebrows) — a technical, systems-engineering register that matches the full-stack subject matter.
- **Signature element:** the hero's "system panel" — a stacked UI → API → Data visual with live status dots, standing in for the generic browser-mockup hero.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

```
app/
  layout.tsx      — fonts + metadata
  page.tsx        — assembles all sections
  globals.css     — design tokens & shared component classes
components/
  Navbar.tsx
  Hero.tsx
  About.tsx
  Projects.tsx
  TechStack.tsx
  Testimonials.tsx
  CTA.tsx
  Footer.tsx
  ThemeToggle.tsx
```

## Customizing

- **Projects:** edit the `PROJECTS` array in `components/Projects.tsx` — swap in real project links, tags, and descriptions.
- **Testimonials:** edit `TESTIMONIALS` in `components/Testimonials.tsx`.
- **Contact form:** the form in `components/CTA.tsx` is UI-only. Wire the `onSubmit` handler to an API route, or a service like Formspree/Resend, to make it functional.
- **Colors/fonts:** all tokens live in `tailwind.config.ts` and `app/layout.tsx`.

## Build

```bash
npm run build
npm run start
```
