import { r as reactExports } from "./index-Byw4S5DT.js";
function useSEO({
  title,
  description,
  keywords,
  canonical
}) {
  reactExports.useEffect(() => {
    const BASE = "https://ncertbhaiya-8d1.caffeine.xyz";
    const SITE_NAME = "NCERT Bhaiya";
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Free NCERT Solutions Class 1-12`;
    const finalDescription = description ?? "Free NCERT solutions, chapter notes, MCQ quizzes, flashcards and AI explanations for Class 1 to 12. CBSE Science, Maths, Social Science, English, Hindi — all in one place on NCERT Bhaiya.";
    document.title = fullTitle;
    setMeta("name", "description", finalDescription);
    if (keywords) {
      setMeta("name", "keywords", keywords);
    }
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", finalDescription);
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:type", "website");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", finalDescription);
    const canonicalHref = canonical ? `${BASE}${canonical}` : BASE + window.location.pathname;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonicalHref;
    return () => {
      document.title = "NCERT Bhaiya | Free NCERT Solutions Class 1-12";
    };
  }, [title, description, keywords, canonical]);
}
function setMeta(attr, key, value) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = value;
}
function updateChapterSEO(params) {
  const { classNum, subject, chapterNum, chapterName } = params;
  const h1 = document.querySelector(
    '[data-ocid="ncert.page_h1"]'
  );
  if (h1) {
    h1.textContent = `NCERT Solutions for Class ${classNum} ${subject} Chapter ${chapterNum}: ${chapterName} — Notes, PDF & Important Questions`;
  }
  document.title = `NCERT Solutions for Class ${classNum} ${subject} Chapter ${chapterNum}: ${chapterName} — Notes, PDF & Important Questions | NCERT Bhaiya`;
  const metaDesc = document.querySelector(
    'meta[name="description"]'
  );
  if (metaDesc) {
    metaDesc.content = `Free NCERT Class ${classNum} ${subject} Ch ${chapterNum} ${chapterName} Notes & Solutions. Key Concepts, Important Questions & PDF Summary. Best CBSE Class ${classNum} prep.`.slice(
      0,
      160
    );
  }
  const ogTitle = document.querySelector(
    'meta[property="og:title"]'
  );
  if (ogTitle) ogTitle.content = document.title;
  const ogDesc = document.querySelector(
    'meta[property="og:description"]'
  );
  if (ogDesc && metaDesc) ogDesc.content = metaDesc.content;
  const twTitle = document.querySelector(
    'meta[name="twitter:title"]'
  );
  if (twTitle) twTitle.content = document.title;
  const twDesc = document.querySelector(
    'meta[name="twitter:description"]'
  );
  if (twDesc && metaDesc) twDesc.content = metaDesc.content;
}
export {
  updateChapterSEO as a,
  useSEO as u
};
