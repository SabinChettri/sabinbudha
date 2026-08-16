import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Production site URL
const SITE_URL = "https://sabinbudha.vercel.app";
const SITE_NAME = "Sabinz — Sabin Budha";
const SITE_TITLE =
  "Sabin Budha — Best Web Developer in Nepal | Full-Stack Developer & UI Specialist";
const SITE_DESCRIPTION =
  "Sabin Budha is a top full-stack web developer in Nepal, building modern web applications, scalable backend architecture, and high-performance digital experiences. Serving clients in Kathmandu and worldwide with clean code and production-grade reliability.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,

  // Traditional SEO
  keywords: [
    "best web developer in Nepal",
    "top web developer in Nepal",
    "web development company Nepal",
    "hire web developer Nepal",
    "Kathmandu web developer",
    "website design Nepal",
    "Sabin Budha",
    "full-stack developer Nepal",
    "UI specialist",
    "Next.js developer Nepal",
    "React developer Nepal",
    "web application development",
    "landing page design",
    "business portfolio website",
    "SEO services Nepal",
    "GEO generative engine optimization",
    "AEO answer engine optimization",
    "website audit",
  ],
  authors: [{ name: "Sabin Budha", url: SITE_URL }],
  creator: "Sabin Budha",
  publisher: "Sabin Budha",

  // Robots / crawler directives
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // Canonical URL
  alternates: {
    canonical: SITE_URL,
  },

  // Open Graph — used by social platforms and many AI/answer engines for previews
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_TITLE,
      },
    ],
  },

  // Twitter / X card
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
    creator: "@sabinbudha",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

// Browser chrome / address-bar color on mobile — matches the site's ink/paper tokens
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0E13" },
    { media: "(prefers-color-scheme: light)", color: "#F6F7F9" },
  ],
  width: "device-width",
  initialScale: 1,
};

// JSON-LD structured data — helps AI assistants (GEO) and answer engines (AEO)
// extract accurate, structured facts about who this is and what's offered.
const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Sabinz — Sabin Budha",
  url: SITE_URL,
  image: `${SITE_URL}/og-image.png`,
  description: SITE_DESCRIPTION,
  founder: {
    "@type": "Person",
    name: "Sabin Budha",
    jobTitle: "Full-Stack Developer & UI Specialist",
    url: SITE_URL,
    image: `${SITE_URL}/og-image.png`,
    sameAs: [
      "https://github.com/SabinChettri",
      "https://www.linkedin.com/in/sabinbudhaa/",
      "https://www.facebook.com/profile.php?id=61593114297139",
      "https://www.instagram.com/sabinbudhaa/?hl=en",
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@sabinbudha.dev",
    url: `${SITE_URL}/#contact`,
    availableLanguage: ["English", "Nepali"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.7172,
    longitude: 85.324,
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Nepal",
    },
    {
      "@type": "Place",
      name: "Worldwide",
    },
  ],
  serviceType: [
    "Website Development",
    "Business Portfolio Websites",
    "Static Website Development",
    "Full-Stack Web Applications",
    "Landing Page Design",
    "SEO (Search Engine Optimization)",
    "GEO (Generative Engine Optimization)",
    "AEO (Answer Engine Optimization)",
    "Website Audits",
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "TailwindCSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Firebase",
    "JWT Authentication",
  ],
};

// A separate WebSite entity — distinct from the ProfessionalService/Person above.
// Gives crawlers and AI engines a clean anchor for "this specific website" as
// its own thing, which is what most GEO/AEO parsers look for first.
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en-US",
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}