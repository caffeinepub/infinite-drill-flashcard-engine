// ─── Video Links Data ─────────────────────────────────────────────────────────

export interface VideoLink {
  id: string;
  title: string;
  embedUrl: string;
  keywords: string[];
  subject: string;
}

export const videoLinks: VideoLink[] = [
  {
    id: "cell-division",
    title: "Cell Division Explained",
    embedUrl: "https://www.youtube.com/embed/VlN7K1-9QB0",
    keywords: ["cell division", "mitosis", "meiosis", "cell", "chromosome"],
    subject: "Biology",
  },
  {
    id: "photosynthesis",
    title: "Photosynthesis Animation",
    embedUrl: "https://www.youtube.com/embed/uixA8ZXx0KU",
    keywords: [
      "photosynthesis",
      "chlorophyll",
      "light reaction",
      "life processes",
      "plants food",
    ],
    subject: "Biology",
  },
  {
    id: "newtons-laws",
    title: "Newton's Laws of Motion",
    embedUrl: "https://www.youtube.com/embed/kKKM8Y-u7ds",
    keywords: [
      "newton",
      "force",
      "motion",
      "laws of motion",
      "inertia",
      "momentum",
      "acceleration",
    ],
    subject: "Physics",
  },
  {
    id: "light-refraction",
    title: "Light Reflection and Refraction",
    embedUrl: "https://www.youtube.com/embed/y55tzg_jW9I",
    keywords: [
      "light",
      "refraction",
      "reflection",
      "lens",
      "mirror",
      "optics",
      "snell",
    ],
    subject: "Physics",
  },
  {
    id: "chemical-reactions",
    title: "Chemical Reactions Explained",
    embedUrl: "https://www.youtube.com/embed/aVCXqAlTZeI",
    keywords: [
      "chemical reaction",
      "chemistry",
      "equation",
      "oxidation",
      "reduction",
      "redox",
      "balancing",
    ],
    subject: "Chemistry",
  },
  {
    id: "quadratic-equations",
    title: "Quadratic Equations",
    embedUrl: "https://www.youtube.com/embed/zc2CpyRtjvY",
    keywords: [
      "quadratic",
      "discriminant",
      "roots",
      "parabola",
      "factorization",
      "quadratic formula",
    ],
    subject: "Mathematics",
  },
  {
    id: "french-revolution",
    title: "The French Revolution",
    embedUrl: "https://www.youtube.com/embed/5fJl_ZX91l0",
    keywords: [
      "french revolution",
      "bastille",
      "napoleon",
      "estates",
      "revolution",
      "liberté",
    ],
    subject: "Social Science",
  },
  {
    id: "fractions",
    title: "Understanding Fractions",
    embedUrl: "https://www.youtube.com/embed/n0e27Cpc88E",
    keywords: [
      "fraction",
      "numerator",
      "denominator",
      "parts",
      "halves",
      "thirds",
    ],
    subject: "Mathematics",
  },
  {
    id: "cell-biology",
    title: "Cell Biology: The Unit of Life",
    embedUrl: "https://www.youtube.com/embed/URUJD5NEXC8",
    keywords: [
      "cell",
      "organelle",
      "nucleus",
      "mitochondria",
      "chloroplast",
      "prokaryote",
      "eukaryote",
    ],
    subject: "Biology",
  },
  {
    id: "digestive-system",
    title: "Human Digestive System",
    embedUrl: "https://www.youtube.com/embed/Og5iNpcs_Qo",
    keywords: [
      "digestion",
      "digestive",
      "stomach",
      "intestine",
      "life processes",
      "nutrition",
      "human body",
    ],
    subject: "Biology",
  },
  {
    id: "matter-states",
    title: "States of Matter",
    embedUrl: "https://www.youtube.com/embed/XJBwJjP2_hM",
    keywords: [
      "matter",
      "solid",
      "liquid",
      "gas",
      "evaporation",
      "sublimation",
      "latent heat",
      "states",
    ],
    subject: "Chemistry",
  },
  {
    id: "nationalism",
    title: "Rise of Nationalism in Europe",
    embedUrl: "https://www.youtube.com/embed/GBYBv4CJMHI",
    keywords: [
      "nationalism",
      "nation",
      "unification",
      "bismarck",
      "germany",
      "italy",
      "europe",
    ],
    subject: "Social Science",
  },
];

// Find a video based on chapter keywords
export function getVideoForChapter(keyword?: string): VideoLink | undefined {
  if (!keyword) return undefined;
  const key = keyword.toLowerCase();
  return videoLinks.find((v) =>
    v.keywords.some(
      (k) => k.toLowerCase().includes(key) || key.includes(k.toLowerCase()),
    ),
  );
}

// Get video by subject and chapter name
export function getVideoByContext(
  subject: string,
  chapterName: string,
): VideoLink | undefined {
  const chapterLower = chapterName.toLowerCase();
  const subjectLower = subject.toLowerCase();

  // Try to find by chapter keywords first
  for (const video of videoLinks) {
    if (video.keywords.some((k) => chapterLower.includes(k.toLowerCase()))) {
      return video;
    }
  }

  // Fallback: match by subject
  return videoLinks.find((v) => v.subject.toLowerCase() === subjectLower);
}
