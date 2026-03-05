import { useEffect } from "react";
import { useAmpHtml } from "./useAmpHtml";

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
  // Update <link rel="amphtml"> to always match the current canonical URL.
  // For React SPAs, Google accepts this pattern as the mobile-optimised signal.
  useAmpHtml(canonical);

  useEffect(() => {
    const BASE = "https://ncertbhaiya-8d1.caffeine.xyz";
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
        "NCERT Bhaiya | Free NCERT Solutions, MCQ Quiz & Notes Class 1-12 | CBSE Study";
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

/**
 * Drop-in equivalent of the JS snippet the user requested.
 * Call this inside any "Load Chapter" function with the chapter details.
 * Uses document.querySelector to directly update H1 and browser tab title.
 */
export function updateChapterSEO(params: {
  classNum: number;
  subject: string;
  chapterNum: number | string;
  chapterName: string;
}) {
  const { classNum, subject, chapterNum, chapterName } = params;

  // H1 update via document.querySelector
  const h1 = document.querySelector<HTMLHeadingElement>(
    '[data-ocid="ncert.page_h1"]',
  );
  if (h1) {
    h1.textContent = `NCERT Solutions for Class ${classNum} ${subject} Chapter ${chapterNum}: ${chapterName} — Notes, PDF & Important Questions`;
  }

  // Browser tab title update
  document.title = `NCERT Solutions for Class ${classNum} ${subject} Chapter ${chapterNum}: ${chapterName} — Notes, PDF & Important Questions | NCERT Bhaiya`;

  // Meta description update
  const metaDesc = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]',
  );
  if (metaDesc) {
    metaDesc.content =
      `Free NCERT Class ${classNum} ${subject} Ch ${chapterNum} ${chapterName} Notes & Solutions. Key Concepts, Important Questions & PDF Summary. Best CBSE Class ${classNum} prep.`.slice(
        0,
        160,
      );
  }

  // Open Graph sync
  const ogTitle = document.querySelector<HTMLMetaElement>(
    'meta[property="og:title"]',
  );
  if (ogTitle) ogTitle.content = document.title;

  const ogDesc = document.querySelector<HTMLMetaElement>(
    'meta[property="og:description"]',
  );
  if (ogDesc && metaDesc) ogDesc.content = metaDesc.content;

  // Twitter Card sync
  const twTitle = document.querySelector<HTMLMetaElement>(
    'meta[name="twitter:title"]',
  );
  if (twTitle) twTitle.content = document.title;

  const twDesc = document.querySelector<HTMLMetaElement>(
    'meta[name="twitter:description"]',
  );
  if (twDesc && metaDesc) twDesc.content = metaDesc.content;
}
