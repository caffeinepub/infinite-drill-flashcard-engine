import { useEffect } from "react";

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

/**
 * Sets document <title>, meta description, keywords, canonical link,
 * Open Graph and Twitter Card tags for each page to maximise Google
 * indexing of NCERT / IIT JEE content on NCERT Bhaiya.
 */
export function useSEO({
  title,
  description,
  keywords,
  canonical,
}: SEOOptions) {
  useEffect(() => {
    const BASE = "https://ncrtbhaiya-8d1.caffeine.xyz";
    const SITE_NAME = "NCERT Bhaiya";

    const fullTitle = title
      ? `${title} | ${SITE_NAME}`
      : `${SITE_NAME} | Free NCERT Solutions, MCQ Quiz & Notes Class 1-12 | CBSE Study`;
    const finalDescription =
      description ??
      "Free NCERT solutions, chapter notes, MCQ quizzes, flashcards and AI explanations for Class 1 to 12. CBSE Science, Maths, Social Science, English, Hindi — all in one place on NCERT Bhaiya.";

    // ── Title ────────────────────────────────────────────────────────────────
    document.title = fullTitle;

    // ── Meta description ─────────────────────────────────────────────────────
    setMeta("name", "description", finalDescription);

    // ── Meta keywords ────────────────────────────────────────────────────────
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }

    // ── Open Graph ───────────────────────────────────────────────────────────
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", finalDescription);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:type", "website");

    // ── Twitter Card ─────────────────────────────────────────────────────────
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", finalDescription);

    // ── Canonical ────────────────────────────────────────────────────────────
    const canonicalHref = canonical
      ? `${BASE}${canonical}`
      : BASE + window.location.pathname;
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalHref;

    return () => {
      // Reset to global defaults on unmount
      document.title =
        "NCRT Bhaiya | Free NCERT Solutions, MCQ Quiz & Notes Class 1-12 | CBSE Study";
    };
  }, [title, description, keywords, canonical]);
}

function setMeta(attr: "name" | "property", key: string, value: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}
