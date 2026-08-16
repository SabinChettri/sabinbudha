"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

type Project = {
  name: string;
  category: string;
  desc: string;
  tags: string[];
  liveUrl: string;
  image: string;
  imageAlt: string;
  variant: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
};

const PROJECTS: Project[] = [
  {
    name: "Uqonex",
    category: "Full-Stack Web Application",
    desc: "A social media automation platform with secure authentication, content workflows, scheduling, database management, and automated distribution features.",
    tags: [
      "Next.js",
      "Express",
      "TypeScript",
      "TailwindCSS",
      "MongoDB",
      "JWT",
      "Resend",
    ],
    liveUrl: "https://uqonex.vercel.app",
    image: "/uqonex.png",
    imageAlt:
      "Uqonex social media automation platform dashboard built with Next.js",
    variant: 1,
  },

  {
    name: "Roompau",
    category: "Full-Stack Real Estate Platform",
    desc: "A real estate web application for property leasing and rentals, combining dynamic property navigation, database integration, authentication, and responsive frontend architecture.",
    tags: ["Next.js", "Node.js", "MongoDB", "TailwindCSS", "JWT"],
    liveUrl: "https://roompau.vercel.app",
    image: "/roompau.png",
    imageAlt:
      "Roompau real estate and property rental platform interface",
    variant: 2,
  },

  {
    name: "Pichandi Properties",
    category: "Real Estate Website",
    desc: "A property listing platform with dynamic search filters, administrator-managed listings, responsive interfaces, and image-heavy pages optimized for practical browsing.",
    tags: ["Next.js", "TailwindCSS", "React.js"],
    liveUrl: "https://pichandiproporties.vercel.app/",
    image: "/pichandi.png",
    imageAlt:
      "Pichandi Properties real estate listing website with property cards",
    variant: 3,
  },

  {
    name: "ThreeDVisit",
    category: "3D Web Experience",
    desc: "An immersive 3D architectural visualization experience for luxury villas, apartments, and commercial buildings, combining exterior views with detailed interior exploration.",
    tags: ["Next.js", "Three.js", "TailwindCSS", "WebGL"],
    liveUrl: "https://threedvisit.vercel.app",
    image: "/threedvisit.png",
    imageAlt:
      "ThreeDVisit immersive 3D architectural visualization website",
    variant: 5,
  },

  {
    name: "Gorkha",
    category: "3D Product Experience",
    desc: "A premium watch showcase combining architectural product presentation, interactive 3D experiences, and visual storytelling from the outer casing to internal mechanical components.",
    tags: ["Next.js", "TailwindCSS", "WebGL", "Three.js"],
    liveUrl: "https://gorkhahred.vercel.app",
    image: "/gorkha.png",
    imageAlt:
      "Gorkha interactive 3D luxury watch product showcase",
    variant: 6,
  },

  {
    name: "Three D Ice Cream",
    category: "3D Product Visualizer",
    desc: "An interactive 3D product experience featuring floating ice cream cones, visual customization, flavor presentation, and immersive product exploration.",
    tags: ["Next.js", "Three.js", "TailwindCSS", "WebGL"],
    liveUrl: "https://three-d-icecream-demo.vercel.app",
    image: "/icream3d.png",
    imageAlt:
      "Three D Ice Cream interactive 3D product visualization website",
    variant: 7,
  },

  {
    name: "Your Furniture",
    category: "Furniture & Interior Website",
    desc: "A visual furniture and interior website featuring high-resolution product imagery, curated room setups, responsive layouts, and direct WhatsApp customer inquiries.",
    tags: ["TailwindCSS", "JavaScript", "WhatsApp API"],
    liveUrl: "https://yourforniture.vercel.app",
    image: "/forniture.png",
    imageAlt:
      "Your Furniture interior and luxury furniture showcase website",
    variant: 8,
  },

  {
    name: "Horaa",
    category: "Minimalist Product UI",
    desc: "An Apple-inspired luxury product showcase focused on minimalist interface design, typography, immersive imagery, and polished visual presentation.",
    tags: ["Next.js", "TailwindCSS", "WebGL", "Three.js"],
    liveUrl: "https://horaa-tau.vercel.app",
    image: "/hora.png",
    imageAlt:
      "Horaa minimalist luxury product website inspired by modern Apple-style UI",
    variant: 9,
  },

  {
    name: "Jelly Juice",
    category: "Product Showcase Website",
    desc: "A premium product showcase for a botanical fruit concentrate featuring immersive visuals, product storytelling, ingredient information, and an editorial-style interface.",
    tags: ["Next.js", "TailwindCSS", "JavaScript", "UI/UX"],
    liveUrl: "https://jellyjuice.vercel.app/",
    image: "/juice.png",
    imageAlt:
      "Jelly Juice botanical fruit concentrate product showcase website",
    variant: 10,
  },

  {
    name: "FitProU Fitness Platform",
    category: "Full-Stack Fitness Application",
    desc: "A fitness coaching platform with program management, progress tracking, authentication, and a motion-focused interface designed to support user engagement.",
    tags: ["Next.js", "MongoDB", "TailwindCSS", "JWT"],
    liveUrl: "https://fitprou.vercel.app",
    image: "/fitpro.png",
    imageAlt:
      "FitProU fitness coaching and progress tracking web application",
    variant: 11,
  },
];

/* ============================================================
   PROJECT CARD
   ============================================================ */

function ProjectCard({ project }: { project: Project }) {
  const accentBorder =
    project.variant % 2 === 0
      ? "hover:border-amber-500/60"
      : "hover:border-signal-500/60";

  const glowBg =
    project.variant % 2 === 0
      ? "group-hover:bg-amber-500/5"
      : "group-hover:bg-signal-500/5";

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${project.name} live project`}
      className={`
        card
        group
        flex
        w-[180px]
        shrink-0
        flex-col
        justify-between
        overflow-hidden
        p-2
        transition-all
        duration-500
        hover:-translate-y-1

        min-[400px]:w-[190px]
        sm:w-[200px]
        md:w-[220px]

        ${accentBorder}
        ${glowBg}
      `}
    >
      <div className="min-w-0">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded bg-ink-900">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="
              block
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
            loading="lazy"
          />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-60" />
        </div>

        {/* CATEGORY */}
        <div className="mt-2 flex min-w-0 items-center justify-between gap-1.5">
          <span
            className="
              min-w-0
              flex-1
              truncate
              font-mono
              text-[7px]
              uppercase
              tracking-wider
              text-signal-400
              sm:text-[8px]
            "
          >
            {project.category}
          </span>

          <ArrowUpRight
            size={10}
            strokeWidth={1.8}
            aria-hidden="true"
            className="
              shrink-0
              text-fg-faint
              transition-all
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
              group-hover:text-signal-400
            "
          />
        </div>

        {/* NAME */}
        <h3
          className="
            mt-0.5
            truncate
            font-display
            text-[11px]
            font-medium
            leading-tight
            text-fg
            [html:not(.dark)_&]:text-fg-light
            sm:text-xs
          "
        >
          {project.name}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-1
            line-clamp-2
            break-words
            text-[9px]
            leading-relaxed
            text-fg-muted
            [html:not(.dark)_&]:text-fg-light-muted
            sm:text-[10px]
          "
        >
          {project.desc}
        </p>
      </div>

      {/* TAGS */}
      <div
        className="
          mt-2
          flex
          min-w-0
          items-center
          justify-between
          gap-1.5
          border-t
          border-border/30
          pt-1.5
          [html:not(.dark)_&]:border-border-light/30
        "
      >
        <div className="flex min-w-0 flex-1 gap-1 overflow-hidden">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="
                tag
                min-w-0
                max-w-[65px]
                truncate
                whitespace-nowrap
                px-1
                py-0.5
                text-[7px]
                sm:max-w-[72px]
                sm:text-[8px]
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className="
            shrink-0
            font-mono
            text-[7px]
            uppercase
            text-fg-faint
            sm:text-[8px]
          "
        >
          Live
        </span>
      </div>
    </a>
  );
}

/* ============================================================
   PROJECTS
   ============================================================ */

export default function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;

    if (!track || !wrapper) return;

    let animationFrame = 0;
    let lastTime = performance.now();
    let position = 0;

    const SPEED = 45;

    const animate = (currentTime: number) => {
      const delta = Math.min(
        (currentTime - lastTime) / 1000,
        0.05
      );

      lastTime = currentTime;

      position -= SPEED * delta;

      const firstCard = track.firstElementChild as HTMLElement | null;

      if (firstCard) {
        const gap = parseFloat(
          getComputedStyle(track).columnGap || "0"
        );

        const cardWidth = firstCard.offsetWidth;

        if (Math.abs(position) >= cardWidth + gap) {
          position += cardWidth + gap;
          track.appendChild(firstCard);
        }
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="
        section
        w-full
        max-w-full
        min-w-0
        overflow-hidden
      "
    >
      <span className="eyebrow">
        03 · Selected Work
      </span>

      <h2
        id="projects-heading"
        className="
          section-heading
          max-w-full
          break-words
          text-balance
        "
      >
        Web Development Projects &amp; 3D Experiences
      </h2>

      <p
        className="
          section-sub
          max-w-2xl
          text-pretty
        "
      >
        A selection of full-stack applications, business websites, modern
        interfaces, and interactive 3D web experiences built with a focus on
        performance, usability, scalability, and real-world business needs.
      </p>

      <div
        ref={wrapperRef}
        className="
          relative
          mt-7
          w-full
          min-w-0
          overflow-hidden
          sm:mt-8
          md:mt-10
        "
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="
            flex
            w-max
            min-w-max
            gap-2.5
            py-1
            sm:gap-3
          "
          style={{
            willChange: "transform",
          }}
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
            />
          ))}

          {PROJECTS.map((project) => (
            <ProjectCard
              key={`duplicate-${project.name}`}
              project={project}
            />
          ))}

          {PROJECTS.map((project) => (
            <ProjectCard
              key={`duplicate-2-${project.name}`}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}