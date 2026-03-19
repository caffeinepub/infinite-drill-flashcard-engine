import { a as useUserProfileContext, j as jsxRuntimeExports, L as Link, r as reactExports, _ as __vitePreload } from "./index-Bt7fKRHj.js";
import { B as Button } from "./button-CfI2RAAy.js";
import { c as createLucideIcon, a as cn } from "./createLucideIcon-Cok44PpJ.js";
import { A as AdZone } from "./AdZone-Ddnc29Oi.js";
import { L as Layout, a as Library, B as BookText, Z as Zap } from "./Layout-CasrpCIH.js";
import { u as useSEO } from "./useSEO-BF8dCkW_.js";
import { B as BookOpen } from "./book-open-C_tU6qSB.js";
import { C as ChevronRight } from "./chevron-right-iZPghHny.js";
import { S as Sparkles } from "./sparkles-BHxsoVKd.js";
import { G as GraduationCap } from "./graduation-cap-CqTg5iiH.js";
import { F as FlaskConical } from "./flask-conical-Cp2xJo-Y.js";
import { F as FileText } from "./file-text-BDr4MkTU.js";
import { C as CircleCheckBig } from "./circle-check-big-CXsk2ZIB.js";
import { U as Users } from "./users-B4SszkjD.js";
import { C as ChevronDown } from "./chevron-down-DEqIYfio.js";
import "./x-BOmPYmNX.js";
import "./useActor-rU57j2r-.js";
import "./house-BfnrCgHQ.js";
import "./trophy-BweDD2l4.js";
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
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
function useUserProfile() {
  return useUserProfileContext();
}
function useDemoData() {
  const [demoModule, setDemoModule] = reactExports.useState(null);
  reactExports.useEffect(() => {
    __vitePreload(() => import("./demoData-CavBEtvU.js"), true ? [] : void 0).then(setDemoModule);
  }, []);
  return {
    topicsData: (demoModule == null ? void 0 : demoModule.topicsData) ?? [],
    subjectColors: (demoModule == null ? void 0 : demoModule.subjectColors) ?? {},
    difficultyColors: (demoModule == null ? void 0 : demoModule.difficultyColors) ?? {},
    isLoaded: demoModule !== null
  };
}
function AnimatedCounter({
  target,
  duration = 2e3
}) {
  const [count, setCount] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const startedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { ref, children: count.toLocaleString() });
}
const topicTree = [
  {
    label: "CBSE",
    children: [
      {
        label: "Class 10",
        children: [
          {
            label: "Science",
            children: [
              {
                label: "Carbon Compounds",
                children: [
                  {
                    label: "IUPAC Naming & Reactions",
                    topicId: "1",
                    leaf: true
                  }
                ]
              }
            ]
          },
          {
            label: "Mathematics",
            children: [
              {
                label: "Quadratic Equations",
                children: [
                  { label: "Discriminant & Roots", topicId: "2", leaf: true }
                ]
              }
            ]
          }
        ]
      },
      {
        label: "Class 9",
        children: [
          {
            label: "Social Science",
            children: [
              {
                label: "French Revolution",
                children: [
                  { label: "Causes & Consequences", topicId: "3", leaf: true }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
function TreeNodeItem({ node, depth = 0 }) {
  const [open, setOpen] = reactExports.useState(depth < 2);
  if (node.leaf && node.topicId) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: "/quiz/$topicId",
        params: { topicId: node.topicId },
        className: "flex items-center gap-2 py-1.5 pl-3 pr-2 rounded-md text-xs text-neon-purple hover:bg-neon-purple/10 transition-colors group",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 10, className: "shrink-0 opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: node.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronRight,
            {
              size: 10,
              className: "ml-auto opacity-0 group-hover:opacity-60 transition-opacity"
            }
          )
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setOpen(!open),
        className: "w-full flex items-center gap-2 py-1.5 px-2 rounded-md text-xs font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 transition-all",
        children: [
          open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 10, className: "shrink-0" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 10, className: "shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate text-left", children: node.label })
        ]
      }
    ),
    open && node.children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-3 border-l border-border/40 pl-1 mt-0.5", children: node.children.map((child) => /* @__PURE__ */ jsxRuntimeExports.jsx(TreeNodeItem, { node: child, depth: depth + 1 }, child.label)) })
  ] });
}
const stats = [
  {
    label: "Total Questions",
    value: 450,
    icon: Target,
    color: "text-neon-purple"
  },
  { label: "Topics", value: 12, icon: BookOpen, color: "text-neon-blue" },
  {
    label: "Daily Active Users",
    value: 1247,
    icon: Users,
    color: "text-neon-green"
  },
  {
    label: "Questions Today",
    value: 8342,
    icon: Activity,
    color: "text-neon-amber"
  }
];
function TopicCardSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-5 border border-border/40 h-52 animate-pulse", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-24 bg-muted/30 rounded mb-2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-5 w-full bg-muted/40 rounded mb-1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-2/3 bg-muted/30 rounded mb-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-full bg-muted/20 rounded mb-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 bg-muted/20 rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 bg-muted/15 rounded-xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 bg-muted/15 rounded-xl" })
    ] })
  ] });
}
function Home() {
  const { profile } = useUserProfile();
  const { topicsData, subjectColors, difficultyColors, isLoaded } = useDemoData();
  const studentClass = (profile == null ? void 0 : profile.studentClass) ?? null;
  useSEO({
    title: "Free NCERT Solutions, MCQ Quiz & Notes — Class 1 to 12 CBSE",
    description: "NCERT Bhaiya — India's best free NCERT study platform. Get NCERT solutions, chapter notes, MCQ practice tests, flashcards and AI explanations for Class 1 to 12 CBSE. Covers Science, Maths, Social Science, English, Hindi, Physics, Chemistry, Biology and IIT JEE.",
    keywords: "NCERT solutions Class 1 to 12, free NCERT notes, CBSE study material, NCERT Bhaiya, class 9 science chapter names, class 9 science MCQ, class 10 maths chapters, class 10 science chapters, class 11 physics notes, class 12 chemistry notes, NCERT MCQ quiz, NCERT flashcards, CBSE board exam preparation 2024, NCERT cheat sheet, NCERT chapter explanation, free CBSE online study, gamified learning CBSE, NCERT class 9 10 11 12",
    canonical: "/"
  });
  const filteredTopics = studentClass ? topicsData.filter(
    (t) => t.className.toLowerCase().includes(studentClass.toLowerCase()) || t.className.toLowerCase().includes(studentClass.replace("Class ", "").toLowerCase())
  ) : topicsData;
  const displayedTopics = filteredTopics.length > 0 ? filteredTopics : topicsData;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-[1600px] mx-auto px-4 lg:px-6 py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:flex flex-col w-64 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-4 sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-thin", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 14, className: "text-neon-purple" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground", children: "Topic Browser" })
      ] }),
      topicTree.map((node) => /* @__PURE__ */ jsxRuntimeExports.jsx(TreeNodeItem, { node, depth: 0 }, node.label)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-4 border-t border-border/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to: "/ncert",
          "data-ocid": "nav.ncert_link",
          className: "flex items-center gap-2 py-2 px-3 rounded-xl bg-neon-purple/10 hover:bg-neon-purple/20 border border-neon-purple/20 hover:border-neon-purple/40 transition-all text-xs font-medium text-neon-purple",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Library, { size: 12 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Browse All NCERT" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 10, className: "ml-auto" })
          ]
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        profile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-4 p-4 glass-dark rounded-2xl border border-neon-green/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center text-white font-bold shrink-0", children: profile.displayName.charAt(0).toUpperCase() }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-0.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { size: 12, className: "text-neon-amber" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Good to see you!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-lg leading-tight", children: [
              "Welcome back,",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-purple", children: profile.displayName }),
              "!",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground/70 text-base", children: [
                profile.studentClass,
                " — Ready to learn today?"
              ] })
            ] })
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono-custom text-neon-purple/70 uppercase tracking-widest", children: "K-12 + Competitive Exams" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl lg:text-4xl font-bold leading-tight mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-purple", children: "Infinite Drill" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "& Flashcard Engine" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-xl leading-relaxed", children: "AI-powered quiz engine with spaced repetition. Master any topic through gamified practice — earn XP, climb the leaderboard, and track your mastery." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-5 glass-dark rounded-2xl border border-neon-blue/20 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 20, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base mb-1", children: "Explore Full NCERT Content" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Browse all chapters with detailed explanations, key concepts, and animated concept videos — Class 1 to 12" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ncert", "data-ocid": "home.ncert_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "shrink-0 bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:opacity-90 gap-1.5 rounded-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Library, { size: 14 }),
              "Browse NCERT"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 p-5 glass-dark rounded-2xl border border-neon-green/20 bg-gradient-to-r from-neon-green/10 to-neon-blue/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-neon-green to-neon-blue flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookText, { size: 20, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base mb-1", children: "Free NCERT Study Blog" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Chapter notes, comparison tables, exam tips — Class 6 to 12. Searchable and free." })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", "data-ocid": "home.blog_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "shrink-0 bg-gradient-to-r from-neon-green to-neon-blue text-white hover:opacity-90 gap-1.5 rounded-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookText, { size: 14 }),
              "Read Blog"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 p-5 glass-dark rounded-2xl border border-neon-amber/20 bg-gradient-to-r from-neon-amber/10 to-neon-purple/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-neon-amber to-neon-purple flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { size: 20, className: "text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-base mb-1", children: "IIT JEE Exam Preparation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Full JEE Main + Advanced syllabus — Physics, Chemistry, Maths with key formulas and concept videos" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/iit", "data-ocid": "home.iit_link", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "sm",
            className: "shrink-0 bg-gradient-to-r from-neon-amber to-neon-purple text-white hover:opacity-90 gap-1.5 rounded-lg",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { size: 14 }),
              "IIT JEE Hub"
            ]
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg", children: studentClass ? `${studentClass} Topics` : "Featured Topics" }),
          isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono-custom", children: [
            displayedTopics.length,
            " topics available"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4", children: !isLoaded ? Array.from({ length: 6 }, (_, i) => `sk-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(TopicCardSkeleton, {}, k)) : displayedTopics.map((topic, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `home.topic_card.${index + 1}`,
            className: cn(
              "glass-dark rounded-2xl p-5 border bg-gradient-to-br",
              subjectColors[topic.subject] || "from-primary/10 to-secondary/10 border-border",
              "hover:scale-[1.01] transition-transform duration-200 shadow-card-glow group"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono-custom text-muted-foreground uppercase tracking-widest", children: [
                    topic.board,
                    " · ",
                    topic.className
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base leading-tight truncate", children: topic.chapter }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-neon-purple mt-0.5 font-medium truncate", children: topic.microTopic })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: cn(
                      "text-[10px] font-bold px-2 py-0.5 rounded-full ml-2 shrink-0",
                      difficultyColors[topic.difficulty]
                    ),
                    children: topic.difficulty
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2", children: topic.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { size: 10 }),
                  topic.questionCount,
                  " questions"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 10 }),
                  topic.flashcards.length,
                  " flashcards"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/quiz/$topicId",
                    params: { topicId: topic.id },
                    "data-ocid": `home.quiz_button.${index + 1}`,
                    className: "flex flex-col items-center gap-1 py-2 px-1 rounded-xl bg-neon-purple/15 hover:bg-neon-purple/25 border border-neon-purple/30 hover:border-neon-purple/60 text-neon-purple transition-all hover:shadow-neon-purple group/btn",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 14 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold", children: "Quiz" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/flashcards/$topicId",
                    params: { topicId: topic.id },
                    "data-ocid": `home.flashcard_button.${index + 1}`,
                    className: "flex flex-col items-center gap-1 py-2 px-1 rounded-xl bg-neon-blue/15 hover:bg-neon-blue/25 border border-neon-blue/30 hover:border-neon-blue/60 text-neon-blue transition-all hover:shadow-neon-blue",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 14 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold", children: "Cards" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/cheatsheet/$topicId",
                    params: { topicId: topic.id },
                    "data-ocid": `home.cheatsheet_button.${index + 1}`,
                    className: "flex flex-col items-center gap-1 py-2 px-1 rounded-xl bg-neon-green/15 hover:bg-neon-green/25 border border-neon-green/30 hover:border-neon-green/60 text-neon-green transition-all hover:shadow-neon-green",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 14 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-bold", children: "Sheet" })
                    ]
                  }
                )
              ] })
            ]
          },
          topic.id
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-6 content-below-fold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-lg", children: "Platform Stats" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-green/15 border border-neon-green/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "pulse-dot w-2 h-2 rounded-full bg-neon-green inline-block" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono-custom text-neon-green font-medium", children: "Auto-populate overnight" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 10, className: "text-neon-green" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "glass-dark rounded-xl p-4 border border-border/50",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(stat.icon, { size: 18, className: cn("mb-2", stat.color) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "font-display text-2xl font-bold tabular-nums",
                    stat.color
                  ),
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatedCounter, { target: stat.value })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-0.5", children: stat.label })
            ]
          },
          stat.label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden xl:flex flex-col w-[300px] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdZone, { variant: "rectangle" }) }) }) })
  ] }) }) });
}
export {
  Home as default
};
