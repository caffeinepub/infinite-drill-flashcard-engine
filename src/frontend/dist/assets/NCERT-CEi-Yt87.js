import { r as reactExports, j as jsxRuntimeExports, G as GraduationCap, A as AnimatePresence, m as motion, d as Button, _ as __vitePreload, a as cn, B as BookOpen } from "./index-VyNBnJo7.js";
import { B as Badge } from "./badge-TLHvbo0W.js";
import { L as Layout } from "./Layout-BAg3Q5Zp.js";
import { g as getVideoByContext, B as BookMarked, C as CirclePlay } from "./videoLinks-B3rj-b9f.js";
import { u as useSEO, a as updateChapterSEO } from "./useSEO-BnecrqLu.js";
import { C as ChevronRight } from "./chevron-right--_3go0zD.js";
import { C as ChevronUp } from "./chevron-up-BrcBdZXS.js";
import { C as ChevronDown } from "./chevron-down-D5DzxPmC.js";
import { L as Lightbulb } from "./lightbulb-DHr_W4rM.js";
import { X } from "./x-CzdkRmk6.js";
import "./NavBar-DhLmtET-.js";
import "./house-C24w4l_7.js";
import "./flask-conical-B3tohXym.js";
import "./trophy-CoPUK7qC.js";
import "./circle-user-HrSrZ3wj.js";
function useNCERTData() {
  const [ncertModule, setNcertModule] = reactExports.useState(null);
  reactExports.useEffect(() => {
    __vitePreload(() => import("./ncertContent-b2t77nfu.js"), true ? [] : void 0).then(setNcertModule);
  }, []);
  return {
    ncertClasses: (ncertModule == null ? void 0 : ncertModule.ncertClasses) ?? [],
    getSubjectsForClass: (ncertModule == null ? void 0 : ncertModule.getSubjectsForClass) ?? (() => []),
    isLoaded: ncertModule !== null
  };
}
function buildH1(classNum, subject, chapter) {
  if (chapter) {
    return `NCERT Solutions for Class ${classNum} ${subject} Chapter ${chapter.number}: ${chapter.name} — Notes, PDF & Important Questions`;
  }
  if (classNum && subject) {
    return `NCERT Solutions for Class ${classNum} ${subject} — Notes, PDF & Important Questions`;
  }
  if (classNum) {
    return `NCERT Class ${classNum} Solutions — All Subjects Notes, PDF & Important Questions`;
  }
  return "NCERT Solutions Class 1 to 12 — Free Notes, PDF & Important Questions | NCERT Bhaiya";
}
function NCERTSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "ncert.loading_state", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-48 bg-muted/40 rounded-lg animate-pulse mb-2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-80 bg-muted/30 rounded animate-pulse" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3", children: Array.from({ length: 12 }, (_, i) => `sk-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 bg-muted/30 rounded-2xl animate-pulse" }, k)) })
  ] });
}
function ClassSelector({
  selected,
  onSelect,
  ncertClasses
}) {
  const allClasses = Array.from({ length: 12 }, (_, i) => i + 1);
  const hasData = (c) => ncertClasses.some((nc) => nc.classNum === c);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold mb-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-purple", children: "Browse" }),
        " by Class"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Select a class to explore NCERT chapters, explanations, and animated videos" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3", children: allClasses.map((c) => {
      const available = hasData(c);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          whileHover: { scale: available ? 1.04 : 1 },
          whileTap: { scale: available ? 0.96 : 1 },
          onClick: () => available && onSelect(c),
          "data-ocid": `ncert.class_card.${c}`,
          className: cn(
            "relative rounded-2xl p-4 border text-center transition-all duration-200",
            selected === c ? "border-neon-purple/60 bg-neon-purple/20 shadow-neon-purple" : available ? "glass-dark hover:border-neon-purple/40 hover:bg-muted/20 cursor-pointer" : "glass-dark opacity-40 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "font-display text-xl font-bold mb-1",
                  selected === c ? "text-neon-purple" : "text-foreground"
                ),
                children: c
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Class" }),
            !available && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center rounded-2xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground/60 rotate-[-15deg]", children: "Soon" }) })
          ]
        },
        c
      );
    }) })
  ] });
}
function SubjectSelector({
  classData,
  selected,
  onSelect,
  classNum,
  getSubjectsForClass
}) {
  const availableSubjects = classData.subjects;
  const allSubjects = getSubjectsForClass(classNum);
  const subjectIcons = {
    Science: "🔬",
    Mathematics: "🔢",
    "Social Science": "🗺️",
    English: "📖",
    Hindi: "🔤",
    EVS: "🌿",
    Physics: "⚛️",
    Chemistry: "⚗️",
    Biology: "🧬",
    History: "🏛️",
    Economics: "📊"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onSelect(""),
          className: "text-muted-foreground hover:text-foreground text-sm transition-colors",
          children: "All Classes"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-medium", children: [
        "Class ",
        classNum
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-bold mb-4", children: "Choose a Subject" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3", children: allSubjects.map((subjectName, index) => {
      const subjectData = availableSubjects.find(
        (s) => s.name === subjectName
      );
      const available = !!subjectData;
      const isActive = selected === subjectName;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          whileHover: { scale: available ? 1.03 : 1 },
          whileTap: { scale: available ? 0.97 : 1 },
          onClick: () => available && onSelect(subjectName),
          "data-ocid": `ncert.subject_tab.${index + 1}`,
          className: cn(
            "rounded-xl p-4 border text-left transition-all duration-200",
            isActive ? "border-neon-blue/60 bg-neon-blue/15 shadow-neon-blue" : available ? "glass-dark hover:border-neon-blue/30 cursor-pointer" : "glass-dark opacity-40 cursor-not-allowed"
          ),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl mb-2", children: subjectIcons[subjectName] ?? "📚" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "text-sm font-semibold",
                  isActive ? "text-neon-blue" : "text-foreground"
                ),
                children: subjectName
              }
            ),
            available && subjectData && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] text-muted-foreground mt-1", children: [
              subjectData.chapters.length,
              " chapter",
              subjectData.chapters.length !== 1 ? "s" : ""
            ] }),
            !available && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: "Coming soon" })
          ]
        },
        subjectName
      );
    }) })
  ] });
}
function ChapterCard({
  chapter,
  index,
  onExpand
}) {
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  const [showVideo, setShowVideo] = reactExports.useState(false);
  const video = getVideoByContext(chapter.subject, chapter.name);
  const handleToggle = () => {
    const nextExpanded = !isExpanded;
    setIsExpanded(nextExpanded);
    if (nextExpanded) {
      updateChapterSEO({
        classNum: chapter.classNum,
        subject: chapter.subject,
        chapterNum: chapter.number,
        chapterName: chapter.name
      });
      onExpand == null ? void 0 : onExpand(chapter);
    } else {
      onExpand == null ? void 0 : onExpand(null);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `ncert.chapter_card.${index + 1}`,
      className: "glass-dark rounded-2xl border border-border/40 overflow-hidden fade-in",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: handleToggle,
            className: "w-full text-left p-5 flex items-start gap-4 hover:bg-muted/10 transition-colors group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple/30 to-neon-blue/30 flex items-center justify-center font-display font-bold text-sm text-neon-purple shrink-0", children: chapter.number }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Badge,
                  {
                    variant: "secondary",
                    className: "text-[10px] bg-muted/50 text-muted-foreground border-border/50 font-mono-custom",
                    children: [
                      "Chapter ",
                      chapter.number
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base leading-tight group-hover:text-neon-purple transition-colors", children: chapter.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-1", children: [
                  chapter.explanation[0].substring(0, 100),
                  "..."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 text-muted-foreground group-hover:text-foreground transition-colors", children: isExpanded ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 16 }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isExpanded && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            transition: { duration: 0.3 },
            "data-ocid": `ncert.chapter_detail.${index + 1}`,
            className: "border-t border-border/30",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold uppercase tracking-widest text-neon-purple/80 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 11 }),
                  "Chapter Overview"
                ] }),
                chapter.explanation.map((para) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "text-sm text-foreground/85 leading-relaxed",
                    children: para
                  },
                  para.substring(0, 40)
                ))
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold uppercase tracking-widest text-neon-blue/80 flex items-center gap-1.5 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { size: 11 }),
                  "Key Concepts"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: chapter.keyConcepts.map((concept) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-start gap-2 p-2.5 rounded-lg bg-neon-blue/10 border border-neon-blue/20",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-blue font-bold text-xs mt-0.5 shrink-0", children: "→" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: concept.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5 leading-snug", children: concept.description })
                      ] })
                    ]
                  },
                  concept.title
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold uppercase tracking-widest text-neon-green/80 flex items-center gap-1.5 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { size: 11 }),
                  "Important Terms"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: chapter.importantTerms.map((term) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-green text-xs font-bold shrink-0 mt-0.5", children: "▸" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                      term.term,
                      ":"
                    ] }),
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: term.definition })
                  ] })
                ] }, term.term)) })
              ] }),
              video && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: !showVideo ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => setShowVideo(true),
                  "data-ocid": `ncert.video_button.${index + 1}`,
                  className: "w-full border-neon-amber/40 text-neon-amber hover:bg-neon-amber/10 hover:border-neon-amber/60 gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { size: 16 }),
                    "Watch Animated Concept Video: ",
                    video.title
                  ]
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.97 },
                  animate: { opacity: 1, scale: 1 },
                  className: "relative",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-medium text-neon-amber flex items-center gap-1.5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { size: 12 }),
                        video.title
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => setShowVideo(false),
                          className: "p-1 rounded-md hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 14 })
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full aspect-video rounded-xl overflow-hidden border border-border/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "iframe",
                      {
                        src: video.embedUrl,
                        title: video.title,
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: true,
                        className: "w-full h-full",
                        loading: "lazy"
                      }
                    ) })
                  ]
                }
              ) })
            ] })
          }
        ) })
      ]
    }
  );
}
function ChapterList({
  subjectData,
  classNum,
  subjectName,
  onBack,
  onChapterExpand
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onBack(),
          className: "text-muted-foreground hover:text-foreground transition-colors",
          children: "All Classes"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "text-muted-foreground hover:text-foreground transition-colors",
          children: [
            "Class ",
            classNum
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: subjectName })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: subjectData.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: subjectName }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
          "Class ",
          classNum,
          " · ",
          subjectData.chapters.length,
          " chapter",
          subjectData.chapters.length !== 1 ? "s" : "",
          " available"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: subjectData.chapters.map((chapter, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      ChapterCard,
      {
        chapter,
        index: i,
        onExpand: onChapterExpand
      },
      chapter.id
    )) })
  ] });
}
function NCERT() {
  const [selectedClass, setSelectedClass] = reactExports.useState(null);
  const [selectedSubject, setSelectedSubject] = reactExports.useState(null);
  const [activeChapter, setActiveChapter] = reactExports.useState(null);
  const { ncertClasses, getSubjectsForClass, isLoaded } = useNCERTData();
  const h1Text = buildH1(selectedClass, selectedSubject, activeChapter);
  const seoTitle = activeChapter ? `NCERT Solutions for Class ${selectedClass} ${selectedSubject} Chapter ${activeChapter.number}: ${activeChapter.name} — Notes, PDF & Important Questions` : selectedClass && selectedSubject ? `NCERT Solutions for Class ${selectedClass} ${selectedSubject} — Notes, PDF & Important Questions` : selectedClass ? `NCERT Class ${selectedClass} Solutions — All Subjects Notes, PDF & Important Questions` : "NCERT Solutions Class 1 to 12 — Free Notes, PDF & Important Questions | NCERT Bhaiya";
  const seoDescription = activeChapter ? `Free NCERT Class ${selectedClass} ${selectedSubject} Ch ${activeChapter.number} ${activeChapter.name} Notes & Solutions. Key Concepts, Important Questions & PDF Summary. Best CBSE Class ${selectedClass} prep.`.slice(
    0,
    160
  ) : selectedClass && selectedSubject ? `Free NCERT Class ${selectedClass} ${selectedSubject} chapter-wise notes, solutions, important questions and PDF summary. Best CBSE Class ${selectedClass} ${selectedSubject} board exam preparation on NCERT Bhaiya.` : selectedClass ? `Browse all NCERT subjects for Class ${selectedClass} — Science, Maths, Social Science, English, Hindi. Chapter notes, important questions, PDF summaries and MCQ quizzes for CBSE board exam.` : "Free NCERT solutions, chapter notes, important questions and PDF summaries for Class 1 to 12 on NCERT Bhaiya. All CBSE subjects — Science, Maths, Social Science, English, Hindi, Physics, Chemistry, Biology.";
  const seoKeywords = activeChapter ? `NCERT Class ${selectedClass} ${selectedSubject} Chapter ${activeChapter.number}, ${activeChapter.name} NCERT solutions, ${activeChapter.name} notes PDF, Class ${selectedClass} ${selectedSubject} important questions, NCERT ${selectedSubject} Class ${selectedClass} chapter wise solutions` : selectedClass && selectedSubject ? `NCERT Class ${selectedClass} ${selectedSubject}, NCERT Class ${selectedClass} ${selectedSubject} solutions, Class ${selectedClass} ${selectedSubject} notes PDF, Class ${selectedClass} ${selectedSubject} important questions, NCERT ${selectedSubject} Class ${selectedClass} chapter wise solutions` : selectedClass ? `NCERT Class ${selectedClass} Solutions, Class ${selectedClass} Notes PDF, Class ${selectedClass} Important Questions, NCERT Class ${selectedClass} chapter wise solutions` : "NCERT solutions class 1 to 12, NCERT notes PDF, CBSE important questions, free NCERT explanations, NCERT class 9 10 11 12, NCERT Bhaiya";
  useSEO({
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords
  });
  const classData = selectedClass ? ncertClasses.find((c) => c.classNum === selectedClass) : null;
  const subjectData = classData && selectedSubject ? classData.subjects.find((s) => s.name === selectedSubject) : null;
  const handleClassSelect = (c) => {
    setSelectedClass(c);
    setSelectedSubject(null);
    setActiveChapter(null);
  };
  const handleSubjectSelect = (s) => {
    if (!s) {
      setSelectedClass(null);
      setSelectedSubject(null);
    } else {
      setSelectedSubject(s);
    }
    setActiveChapter(null);
  };
  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setActiveChapter(null);
  };
  const handleChapterExpand = (chapter) => {
    setActiveChapter(chapter);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-4 lg:px-6 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-8 fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-neon-purple to-neon-blue flex items-center justify-center shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { size: 20, className: "text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            "data-ocid": "ncert.page_h1",
            className: "font-display text-2xl font-bold leading-snug",
            children: h1Text.startsWith("NCERT") ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-purple", children: "NCERT" }),
              h1Text.slice(5)
            ] }) : h1Text
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Class 1–12 · All subjects · Chapter explanations + animated videos" })
      ] })
    ] }),
    !isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx(NCERTSkeleton, {}),
    isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      !selectedClass && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ClassSelector,
            {
              selected: selectedClass,
              onSelect: handleClassSelect,
              ncertClasses
            }
          )
        },
        "class-selector"
      ),
      selectedClass && !selectedSubject && classData && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SubjectSelector,
            {
              classData,
              selected: selectedSubject,
              onSelect: handleSubjectSelect,
              classNum: selectedClass,
              getSubjectsForClass
            }
          )
        },
        "subject-selector"
      ),
      selectedClass && selectedSubject && subjectData && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChapterList,
            {
              subjectData,
              classNum: selectedClass,
              subjectName: selectedSubject,
              onBack: handleBackToSubjects,
              onChapterExpand: handleChapterExpand
            }
          )
        },
        "chapter-list"
      ),
      selectedClass && selectedSubject && !subjectData && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          className: "text-center py-16",
          "data-ocid": "ncert.empty_state",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl mb-4", children: "📚" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold mb-2", children: "Content Coming Soon" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-4", children: [
              "We're adding chapters for ",
              selectedSubject,
              " Class",
              " ",
              selectedClass,
              " soon!"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                variant: "outline",
                onClick: handleBackToSubjects,
                className: "border-neon-purple/40 text-neon-purple hover:bg-neon-purple/10",
                children: "Choose Another Subject"
              }
            )
          ]
        },
        "no-content"
      )
    ] })
  ] }) });
}
export {
  NCERT as default
};
