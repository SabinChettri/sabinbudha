import type { MetadataRoute } from "next";

const SITE_URL = "https://sabinbudha.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // Explicitly welcome AI/answer-engine crawlers (GEO/AEO) —
      // most already respect the wildcard rule above, but naming them
      // makes the intent explicit and future-proofs new bots.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "Google-Extended",
          "PerplexityBot",
          "anthropic-ai",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}