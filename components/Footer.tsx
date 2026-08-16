const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border [html:not(.dark)_&]:border-border-light">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
          {/* Brand */}
          <div>
            <a
              href="#home"
              className="font-display text-xl font-semibold tracking-tight text-fg [html:not(.dark)_&]:text-fg-light"
            >
              Sabin<span className="text-signal-500">.</span>
            </a>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
              Full-Stack Software Developer specializing in modern web
              applications — from high-performance interfaces to scalable
              backend systems.
            </p>
          </div>

          {/* Navigation */}
          <nav className="md:justify-self-center">
            <p className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
              Navigate
            </p>

            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-fg-muted transition-colors hover:text-fg [html:not(.dark)_&]:text-fg-light-muted [html:not(.dark)_&]:hover:text-fg-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:justify-self-end md:text-right">
            <p className="font-mono text-[11px] uppercase tracking-wider text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
              Contact
            </p>

            <a
              href="mailto:sabinbudha666@gmail.com"
              className="mt-4 block text-sm text-fg-muted transition-colors hover:text-fg [html:not(.dark)_&]:text-fg-light-muted [html:not(.dark)_&]:hover:text-fg-light"
            >
              sabinbudha666@gmail.com
            </a>

            <a
              href="https://wa.me/9779744836218"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-fg-muted transition-colors hover:text-fg [html:not(.dark)_&]:text-fg-light-muted [html:not(.dark)_&]:hover:text-fg-light"
            >
              WhatsApp: +977 9744836218
            </a>
              <p className="mt-2 text-sm text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
              PAN : 148550890
            </p>
            <p className="mt-2 text-sm text-fg-muted [html:not(.dark)_&]:text-fg-light-muted">
              samakhusi , Kathmandu, Nepal
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row [html:not(.dark)_&]:border-border-light">
          <p className="font-mono text-xs text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
            © 2026 Sabin Budha. All Rights Reserved.
          </p>

          <p className="font-mono text-xs text-fg-faint [html:not(.dark)_&]:text-fg-light-muted">
            Built with Next.js &amp; TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  );
}