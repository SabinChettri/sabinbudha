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

/* -------------------------------------------------------------------------- */
/* Site configuration                                                         */
/* -------------------------------------------------------------------------- */

const SITE_URL = "https://sabinbudha.vercel.app";
const SITE_NAME = "Sabinz — Sabin Budha";

const SITE_TITLE =
  "Web Development & SEO Company in Kathmandu | Sabinz";

const SITE_DESCRIPTION =
  "Sabin Budha is a full-stack web developer in Kathmandu, Nepal, specializing in modern websites, full-stack web applications, high-performance interfaces, and SEO-focused digital experiences.";

const SITE_IMAGE = `${SITE_URL}/og-image.png`;

const EMAIL = "sabinbudha666@gmail.com";
const PHONE = "+977 9744836218";

/* -------------------------------------------------------------------------- */
/* Metadata                                                                    */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  authors: [
    {
      name: "Sabin Budha",
      url: SITE_URL,
    },
  ],

  creator: "Sabin Budha",
  publisher: "Sabin Budha",

  category: "technology",

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

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",

    images: [
      {
        url: SITE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Sabinz — Sabin Budha, Full-Stack Web Developer in Kathmandu, Nepal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_IMAGE],
    creator: "@sabinbudha",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* -------------------------------------------------------------------------- */
/* Viewport                                                                   */
/* -------------------------------------------------------------------------- */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,

  themeColor: [
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0A0E13",
    },
    {
      media: "(prefers-color-scheme: light)",
      color: "#F6F7F9",
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Person structured data                                                     */
/* -------------------------------------------------------------------------- */

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "Sabin Budha",

  url: SITE_URL,

  jobTitle: "Full-Stack Web Developer",

  description:
    "Full-stack web developer based in Kathmandu, Nepal, specializing in modern websites, web applications, high-performance interfaces, and SEO-focused digital experiences.",

  image: SITE_IMAGE,

  email: EMAIL,

  telephone: PHONE,

  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
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

  knowsAbout: [
    "Web Development",
    "Web Design",
    "Full-Stack Development",
    "3d website development",
    "SEO",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Firebase",
  ],

  sameAs: [
    "https://github.com/SabinChettri",
    "https://www.linkedin.com/in/sabinbudhaa/",
    "https://www.facebook.com/profile.php?id=61593114297139",
    "https://www.instagram.com/sabinbudhaa/?hl=en",
  ],
};

/* -------------------------------------------------------------------------- */
/* Professional Service structured data                                       */
/* -------------------------------------------------------------------------- */

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",

  name: SITE_NAME,

  url: SITE_URL,

  image: SITE_IMAGE,

  description: SITE_DESCRIPTION,

  provider: {
    "@type": "Person",
    name: "Sabin Budha",
    url: SITE_URL,
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
    "Web Development",
    "Web Design",
    "Full-Stack Web Development",
    "Business Website Development",
    "Landing Page Development",
    "Ecommerce Website Development",
    "SEO Services",
    "Website Audits",
    "Answer Engine Optimization",
    "Generative Engine Optimization",
  ],

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "business inquiries",
    email: EMAIL,
    telephone: PHONE,
    url: `${SITE_URL}/#contact`,
    availableLanguage: ["English", "Nepali"],
  },

  address: {
    "@type": "PostalAddress",
    addressLocality: "Kathmandu",
    addressCountry: "NP",
  },
};

/* -------------------------------------------------------------------------- */
/* Website structured data                                                    */
/* -------------------------------------------------------------------------- */

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",

  name: SITE_NAME,

  url: SITE_URL,

  description: SITE_DESCRIPTION,

  inLanguage: "en",

  publisher: {
    "@type": "Person",
    name: "Sabin Budha",
    url: SITE_URL,
  },
};

/* -------------------------------------------------------------------------- */
/* Root Layout                                                                */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
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