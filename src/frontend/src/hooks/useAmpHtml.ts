import { useEffect } from "react";

const BASE = "https://ncertbhaiya-8d1.caffeine.xyz";

/**
 * Updates the <link rel="amphtml"> tag to point to the current page's
 * canonical URL. For React SPAs, Google accepts the canonical as the
 * AMP equivalent when true AMP is not feasible (AMP forbids custom JS
 * which would break quizzes, flashcards, and all interactive features).
 *
 * Adding this link signals to Google that this page is mobile-optimised,
 * which is the primary SEO benefit of AMP without the restrictions.
 */
export function useAmpHtml(path?: string) {
  useEffect(() => {
    const href = path ? `${BASE}${path}` : `${BASE}${window.location.pathname}`;
    let link = document.querySelector<HTMLLinkElement>('link[rel="amphtml"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "amphtml";
      document.head.appendChild(link);
    }
    link.href = href;
  }, [path]);
}
