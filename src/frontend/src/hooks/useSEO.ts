import { useEffect } from "react";

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

/**
 * Sets document <title>, meta description, keywords, and canonical link
 * for each page to maximise Google indexing of NCERT content.
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

    // Title
    if (title) {
      document.title = `${title} | ${SITE_NAME}`;
    }

    // Meta description
    setMeta("name", "description", description ?? "");

    // Meta keywords
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }

    // OG tags
    if (title) {
      setMeta("property", "og:title", `${title} | ${SITE_NAME}`);
    }
    if (description) {
      setMeta("property", "og:description", description);
    }

    // Canonical
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
      // Reset to defaults on unmount
      document.title =
        "NCERT Bhaiya — Free NCERT Solutions & MCQ Quiz for Class 1 to 12";
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
