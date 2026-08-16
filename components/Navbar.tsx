"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Logo() {
  return (
    <a
      href="#home"
      className="relative flex flex-col items-start font-display text-xl font-semibold leading-none tracking-tight text-fg-light [.dark_&]:text-fg"
    >
      <span className="relative inline-block">
        Sabinz

        {/* Amazon-style curved arrow */}
        <svg
          className="pointer-events-none absolute left-[15%] top-full mt-1 w-[80%] text-signal-500"
          viewBox="0 0 100 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M2 4 Q50 24 94 7"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />

          <path
            d="M85 1 L97 7 L88 15"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border-light bg-paper/80 backdrop-blur-lg [.dark_&]:border-border [.dark_&]:bg-ink-950/80"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[13px] uppercase tracking-wide text-fg-light-muted transition-colors hover:text-fg-light [.dark_&]:text-fg-muted [.dark_&]:hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          <a href="#contact" className="btn-primary">
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex items-center justify-center text-fg-light md:hidden [.dark_&]:text-fg"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="border-t border-border-light bg-paper px-6 pb-6 pt-2 md:hidden [.dark_&]:border-border [.dark_&]:bg-ink-950">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm uppercase tracking-wide text-fg-light-muted transition-colors hover:text-fg-light [.dark_&]:text-fg-muted [.dark_&]:hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Actions */}
          <div className="mt-5 flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary flex-1 text-center"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
}