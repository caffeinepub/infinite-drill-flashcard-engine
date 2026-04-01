import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as BookOpen } from "./index-D_F9JBVH.js";
import { L as Layout } from "./Layout-CSnZPS-v.js";
import { u as useSEO } from "./useSEO-BeA65yej.js";
import { F as Flame } from "./flame-BA9MpNek.js";
import { Z as Zap } from "./NavBar-BiasoI0O.js";
import { F as FileText } from "./file-text-Dc_I821H.js";
import { T as Trophy } from "./trophy-CLEDdlBb.js";
import { Y as Youtube } from "./youtube-mSYFkjDZ.js";
import "./house-mksCuSt3.js";
import "./flask-conical-jg5G8C2a.js";
import "./circle-user-WoBxqEX-.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r"
    }
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }]
];
const Brain = createLucideIcon("brain", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" }],
  ["path", { d: "M2 12h20", key: "9i4pu4" }]
];
const Globe = createLucideIcon("globe", __iconNode);
const features = [
  {
    icon: BookOpen,
    title: "Free NCERT Content",
    desc: "Complete chapter summaries, notes, and explanations for Classes 1–12 across all subjects."
  },
  {
    icon: Brain,
    title: "MCQ Quizzes",
    desc: "Practice with timed multiple-choice quizzes for every chapter and earn XP as you learn."
  },
  {
    icon: Zap,
    title: "Flashcards",
    desc: "3D flip cards covering key terms, definitions, and formulas — perfect for rapid revision."
  },
  {
    icon: Flame,
    title: "IIT JEE Prep",
    desc: "Dedicated IIT JEE hub with Physics, Chemistry, and Mathematics — completely free."
  },
  {
    icon: FileText,
    title: "Blog Resources",
    desc: "27+ SEO-optimised articles targeting NCERT and CBSE keywords for deeper understanding."
  },
  {
    icon: Trophy,
    title: "Leaderboard",
    desc: "Compete with students nationwide, track your XP streak, and climb the weekly rankings."
  }
];
function About() {
  useSEO({
    title: "About NCERT Bhaiya | Free NCERT Study Platform",
    description: "Learn about NCERT Bhaiya — a student-built platform simplifying NCERT curriculum for Classes 1–12. Free quizzes, flashcards, IIT JEE prep, and blog resources for every student in India.",
    keywords: "about NCERT Bhaiya, free NCERT study platform, CBSE learning platform India, student education platform",
    canonical: "/about"
  });
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: "NCERT Bhaiya",
      url: "https://ncertbhaiya-8d1.caffeine.xyz",
      description: "A free educational platform simplifying NCERT curriculum for Classes 1–12 with quizzes, flashcards, IIT JEE prep, and blog resources.",
      foundingDate: "2024",
      contactPoint: {
        "@type": "ContactPoint",
        email: "ncertbhaiya2504@gmail.com",
        contactType: "customer support"
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-mesh-dark", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-20 px-6 text-center overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-neon-purple/10 to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon-purple/30 bg-neon-purple/10 text-neon-purple text-xs font-medium mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-3 h-3" }),
          "Our Story"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "text-4xl md:text-5xl font-bold mb-6 text-gradient-purple",
            "data-ocid": "about.page",
            children: "About NCERT Bhaiya"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Born from a student's determination to bridge the education gap between rural and urban India, NCERT Bhaiya is a free platform designed to make quality academic content accessible to every learner." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark border border-border/30 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "w-5 h-5 text-neon-purple" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-3", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "To simplify the NCERT curriculum and deliver free, high-quality study resources — including notes, quizzes, flashcards, and cheat sheets — so that every student, regardless of their location or economic background, has the tools to excel academically." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark border border-border/30 rounded-2xl p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-neon-blue/20 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "w-5 h-5 text-neon-blue" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold mb-3", children: "Our Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "A future where no student in India has to pay for NCERT solutions or CBSE preparation materials. We envision NCERT Bhaiya as the go-to companion for 10 million+ students from Class 1 through IIT JEE — truly free, truly comprehensive." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-6 bg-gradient-to-r from-neon-purple/5 to-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark border border-border/30 rounded-2xl p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold text-lg", children: "A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Abhinav" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Founder, NCERT Bhaiya" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "text-lg text-muted-foreground leading-relaxed italic border-l-2 border-neon-purple/50 pl-6", children: '"I built NCERT Bhaiya because I saw students around me — in both cities and villages — struggling to access the same quality of study material. Coaching classes are expensive. Good textbook explanations are locked behind paywalls. I wanted to change that. Every student deserves access to the same resources, no matter where they come from."' })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-bold mb-3", children: "What We Offer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground", children: "Everything a student needs — completely free, all in one place." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-dark border border-border/30 rounded-xl p-6 hover:border-neon-purple/40 transition-colors",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-neon-purple/15 flex items-center justify-center mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-5 h-5 text-neon-purple" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold mb-2", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: f.desc })
          ]
        },
        f.title
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-16 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-dark border border-border/30 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [
      { value: "12+", label: "Classes Covered" },
      { value: "27+", label: "Blog Articles" },
      { value: "Free", label: "Always & Forever" },
      { value: "India", label: "Students Served" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-3xl font-bold text-gradient-purple mb-1", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: s.label })
    ] }, s.label)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-10 px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-sm mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-4", children: "Follow us for updates and tips:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.youtube.com/@Ncertbhaiya",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors text-sm font-medium",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Youtube, { className: "w-4 h-4" }),
            "@Ncertbhaiya on YouTube"
          ]
        }
      )
    ] }) })
  ] }) });
}
export {
  About as default
};
