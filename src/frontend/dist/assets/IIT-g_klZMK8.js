import { r as reactExports, j as jsxRuntimeExports, _ as __vitePreload } from "./index-BS2tt-RI.js";
import { B as Button } from "./button-UKkze6Ej.js";
import { c as createLucideIcon, a as cn } from "./createLucideIcon-DVp4TfUp.js";
import { L as Layout, Z as Zap } from "./Layout-DfzLa0Sj.js";
import { B as BookMarked, g as getVideoByContext, C as CirclePlay } from "./videoLinks-DNgawxS5.js";
import { u as useSEO } from "./useSEO-BwC0dYkQ.js";
import { m as motion } from "./proxy-C5b31USg.js";
import { C as ChevronRight } from "./chevron-right-DKfdiJgD.js";
import { B as BookOpen } from "./book-open-CfM3O9B2.js";
import { F as FlaskConical } from "./flask-conical-8erRNeFb.js";
import { C as ChevronUp } from "./chevron-up-DI9Afbfz.js";
import { C as ChevronDown } from "./chevron-down-wps91q11.js";
import { L as Lightbulb } from "./lightbulb-CMWPTzuz.js";
import { X } from "./x-DHBo1D-X.js";
import { A as AnimatePresence } from "./index-Cl9Cs47H.js";
import "./useActor-0TK-SvwG.js";
import "./house-DC2Tk72M.js";
import "./trophy-BzCCdUVg.js";
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
      d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
      key: "wuwx1p"
    }
  ]
];
const Sigma = createLucideIcon("sigma", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["path", { d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3", key: "m1af9g" }],
  ["path", { d: "M9 11.2h5.7", key: "3zgcl2" }]
];
const SquareFunction = createLucideIcon("square-function", __iconNode);
function useIITData() {
  const [iitModule, setIitModule] = reactExports.useState(null);
  reactExports.useEffect(() => {
    __vitePreload(() => import("./iitData-4NZj231K.js"), true ? [] : void 0).then(setIitModule);
  }, []);
  return {
    iitSubjects: (iitModule == null ? void 0 : iitModule.iitSubjects) ?? [],
    isLoaded: iitModule !== null
  };
}
const subjectIconMap = {
  Physics: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 20, className: "text-white" }),
  Chemistry: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { size: 20, className: "text-white" }),
  Mathematics: /* @__PURE__ */ jsxRuntimeExports.jsx(SquareFunction, { size: 20, className: "text-white" })
};
const subjectGradientMap = {
  Physics: "from-neon-blue to-neon-purple",
  Chemistry: "from-neon-green to-neon-blue",
  Mathematics: "from-neon-purple to-neon-amber"
};
const subjectBorderMap = {
  Physics: "border-neon-blue/40 hover:border-neon-blue/70",
  Chemistry: "border-neon-green/40 hover:border-neon-green/70",
  Mathematics: "border-neon-purple/40 hover:border-neon-purple/70"
};
const subjectBgMap = {
  Physics: "bg-neon-blue/10",
  Chemistry: "bg-neon-green/10",
  Mathematics: "bg-neon-purple/10"
};
const subjectTextMap = {
  Physics: "text-neon-blue",
  Chemistry: "text-neon-green",
  Mathematics: "text-neon-purple"
};
function IITSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", "data-ocid": "iit.loading_state", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: Array.from({ length: 3 }, (_, i) => `sk-${i}`).map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-40 bg-muted/30 rounded-2xl animate-pulse" }, k)) }) });
}
function SubjectSelector({
  onSelect,
  iitSubjects
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-bold mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-purple", children: "Choose" }),
        " a Subject"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Select Physics, Chemistry, or Mathematics to browse the full IIT JEE syllabus" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-5", children: iitSubjects.map((subject, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.button,
      {
        type: "button",
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
        onClick: () => onSelect(subject),
        "data-ocid": `iit.subject_card.${i + 1}`,
        className: cn(
          "glass-dark rounded-2xl p-6 border text-left transition-all duration-200 group",
          subjectBorderMap[subject.name]
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
                subjectGradientMap[subject.name]
              ),
              children: subjectIconMap[subject.name]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h3",
            {
              className: cn(
                "font-display text-xl font-bold mb-1",
                subjectTextMap[subject.name]
              ),
              children: subject.name
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4 leading-relaxed", children: subject.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              subject.units.length,
              " units"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              subject.units.reduce((acc, u) => acc + u.topics.length, 0),
              " ",
              "topics"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronRight,
              {
                size: 14,
                className: cn(
                  "opacity-50 group-hover:opacity-100 transition-opacity",
                  subjectTextMap[subject.name]
                )
              }
            )
          ] })
        ]
      },
      subject.name
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 p-5 glass-dark rounded-2xl border border-neon-amber/30 bg-gradient-to-r from-neon-amber/10 to-neon-purple/10 fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sigma, { size: 20, className: "text-neon-amber shrink-0 mt-0.5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm mb-1 text-neon-amber", children: "About IIT JEE Syllabus" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: "IIT JEE (Joint Entrance Examination) is India's most prestigious engineering entrance exam. JEE Main is the qualifying exam for JEE Advanced, which is required for admission to the 23 IITs. This syllabus covers all topics from JEE Main and JEE Advanced for Physics, Chemistry, and Mathematics." })
      ] })
    ] }) })
  ] });
}
function UnitBrowser({
  subject,
  onSelectUnit,
  onBack
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: "text-muted-foreground hover:text-foreground transition-colors",
          children: "IIT JEE"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-medium", subjectTextMap[subject.name]), children: subject.name })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center",
            subjectGradientMap[subject.name]
          ),
          children: subjectIconMap[subject.name]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold", children: subject.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: subject.description })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: subject.units.map((unit, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.button,
      {
        type: "button",
        initial: { opacity: 0, x: -10 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: i * 0.05 },
        whileHover: { scale: 1.01 },
        whileTap: { scale: 0.99 },
        onClick: () => onSelectUnit(unit),
        "data-ocid": `iit.unit_card.${i + 1}`,
        className: cn(
          "w-full glass-dark rounded-xl p-4 border text-left transition-all group",
          subjectBorderMap[subject.name]
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold",
                  subjectBgMap[subject.name],
                  subjectTextMap[subject.name]
                ),
                children: unit.number
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-semibold text-sm text-foreground group-hover:text-neon-purple transition-colors", children: [
                "Unit ",
                unit.number,
                ": ",
                unit.name
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground mt-0.5", children: [
                unit.topics.length,
                " topic",
                unit.topics.length !== 1 ? "s" : ""
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            ChevronRight,
            {
              size: 16,
              className: "text-muted-foreground opacity-50 group-hover:opacity-100 transition-opacity"
            }
          )
        ] })
      },
      unit.id
    )) })
  ] });
}
function TopicCard({
  topic,
  index,
  subjectName
}) {
  const [isExpanded, setIsExpanded] = reactExports.useState(false);
  const [showVideo, setShowVideo] = reactExports.useState(false);
  const video = getVideoByContext(
    subjectName,
    `${topic.name} ${topic.videoKeyword}`
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `iit.topic_card.${index + 1}`,
      className: "glass-dark rounded-2xl border border-border/40 overflow-hidden fade-in",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setIsExpanded(!isExpanded),
            className: "w-full text-left p-5 flex items-start gap-4 hover:bg-muted/10 transition-colors group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: cn(
                    "w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0",
                    subjectBgMap[subjectName],
                    subjectTextMap[subjectName]
                  ),
                  children: index + 1
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base leading-tight group-hover:text-neon-purple transition-colors", children: topic.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 line-clamp-1", children: [
                  topic.description.substring(0, 100),
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
            "data-ocid": `iit.topic_detail.${index + 1}`,
            className: "border-t border-border/30",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground/85 leading-relaxed", children: topic.description }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h4",
                  {
                    className: cn(
                      "text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 mb-3",
                      subjectTextMap[subjectName]
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbulb, { size: 11 }),
                      "Key Concepts"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-2", children: topic.keyConcepts.map((concept) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: cn(
                      "flex items-start gap-2 p-2.5 rounded-lg border",
                      subjectBgMap[subjectName],
                      `border-${subjectTextMap[subjectName].replace("text-", "")}/20`
                    ),
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: cn(
                            "font-bold text-xs mt-0.5 shrink-0",
                            subjectTextMap[subjectName]
                          ),
                          children: "→"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground", children: concept.title }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-0.5 leading-snug", children: concept.description })
                      ] })
                    ]
                  },
                  concept.title
                )) })
              ] }),
              topic.importantFormulas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold uppercase tracking-widest text-neon-amber/80 flex items-center gap-1.5 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sigma, { size: 11 }),
                  "Important Formulas"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: topic.importantFormulas.map((formula) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex items-start gap-3 p-3 rounded-lg bg-neon-amber/10 border border-neon-amber/20",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground mb-1", children: formula.name }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "text-sm font-mono text-neon-amber bg-neon-amber/10 px-2 py-0.5 rounded", children: formula.formula })
                    ] })
                  },
                  formula.name
                )) })
              ] }),
              video && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-2", children: !showVideo ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => setShowVideo(true),
                  "data-ocid": `iit.video_button.${index + 1}`,
                  className: "w-full border-neon-amber/40 text-neon-amber hover:bg-neon-amber/10 hover:border-neon-amber/60 gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { size: 16 }),
                    "Watch Concept Video: ",
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
function TopicList({
  unit,
  subject,
  onBack
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-6 text-sm flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onBack(),
          className: "text-muted-foreground hover:text-foreground transition-colors",
          children: "IIT JEE"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: onBack,
          className: cn(
            "hover:text-foreground transition-colors",
            subjectTextMap[subject.name]
          ),
          children: subject.name
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 14, className: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
        "Unit ",
        unit.number,
        ": ",
        unit.name
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "w-10 h-10 rounded-xl bg-gradient-to-br flex items-center justify-center",
            subjectGradientMap[subject.name]
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 18, className: "text-white" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-xl font-bold", children: [
          "Unit ",
          unit.number,
          ": ",
          unit.name
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
          subject.name,
          " · ",
          unit.topics.length,
          " topic",
          unit.topics.length !== 1 ? "s" : ""
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: unit.topics.map((topic, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      TopicCard,
      {
        topic,
        index: i,
        subjectName: subject.name
      },
      topic.id
    )) })
  ] });
}
function IIT() {
  const [selectedSubject, setSelectedSubject] = reactExports.useState(
    null
  );
  const [selectedUnit, setSelectedUnit] = reactExports.useState(null);
  const { iitSubjects, isLoaded } = useIITData();
  const seoTitle = selectedSubject && selectedUnit ? `IIT JEE ${selectedSubject.name} — ${selectedUnit.name}: Notes, Formulas & Concept Videos | NCERT Bhaiya` : selectedSubject ? `IIT JEE ${selectedSubject.name} Syllabus 2025 — Complete Notes, Formulas & Key Concepts | NCERT Bhaiya` : "IIT JEE Syllabus 2025 — Free Physics, Chemistry, Maths Notes, Formulas & Concept Videos | NCERT Bhaiya";
  const seoDescription = selectedSubject && selectedUnit ? `Free IIT JEE ${selectedSubject.name} notes for ${selectedUnit.name}. Covers all key concepts, important formulas, solved examples and concept videos for JEE Main and JEE Advanced 2025. Study smart on NCERT Bhaiya.` : selectedSubject ? `Free IIT JEE ${selectedSubject.name} complete syllabus on NCERT Bhaiya — chapter-wise notes, important formulas, key concepts and concept videos for JEE Main and JEE Advanced 2025 preparation.` : "Free IIT JEE 2025 preparation on NCERT Bhaiya — complete syllabus for Physics, Chemistry and Mathematics. Chapter-wise notes, important formulas, key concepts and concept videos for JEE Main and JEE Advanced. Best free resource for IIT JEE aspirants in India.";
  const seoKeywords = selectedSubject && selectedUnit ? `IIT JEE ${selectedSubject.name} ${selectedUnit.name}, JEE ${selectedSubject.name} notes, JEE ${selectedSubject.name} formulas, IIT JEE ${selectedUnit.name} key concepts, JEE Main ${selectedSubject.name} syllabus, JEE Advanced ${selectedSubject.name}` : selectedSubject ? `IIT JEE ${selectedSubject.name} syllabus 2025, JEE ${selectedSubject.name} notes, JEE ${selectedSubject.name} formulas, IIT JEE ${selectedSubject.name} important topics, JEE Main ${selectedSubject.name}, JEE Advanced ${selectedSubject.name}` : "IIT JEE syllabus 2025, JEE Main syllabus, JEE Advanced syllabus, IIT JEE Physics notes, IIT JEE Chemistry notes, IIT JEE Maths formulas, JEE preparation free, IIT entrance exam 2025, JEE Physics Chemistry Maths, NCERT Bhaiya IIT JEE";
  useSEO({
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
    canonical: "/iit"
  });
  const handleSubjectSelect = (s) => {
    setSelectedSubject(s);
    setSelectedUnit(null);
  };
  const handleUnitSelect = (u) => {
    setSelectedUnit(u);
  };
  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setSelectedUnit(null);
  };
  const handleBackToUnits = () => {
    setSelectedUnit(null);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1200px] mx-auto px-4 lg:px-6 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8 fade-in", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-br from-neon-amber to-neon-purple flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookMarked, { size: 20, className: "text-white" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "h1",
          {
            "data-ocid": "iit.page_h1",
            className: "font-display text-2xl font-bold",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-purple", children: "IIT JEE" }),
              " Exam Hub"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Complete Syllabus · JEE Main + Advanced · Notes, Formulas & Videos" })
      ] })
    ] }),
    isLoaded && iitSubjects.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-3 mb-8", children: [
      { label: "Subjects", value: "3", color: "text-neon-purple" },
      {
        label: "Total Units",
        value: `${iitSubjects.reduce((a, s) => a + s.units.length, 0)}`,
        color: "text-neon-blue"
      },
      {
        label: "Topics",
        value: `${iitSubjects.reduce((a, s) => a + s.units.reduce((b, u) => b + u.topics.length, 0), 0)}+`,
        color: "text-neon-green"
      }
    ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "glass-dark rounded-xl p-3 border border-border/40 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn("font-display text-xl font-bold", stat.color),
              children: stat.value
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: stat.label })
        ]
      },
      stat.label
    )) }),
    !isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx(IITSkeleton, {}),
    isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      !selectedSubject && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 20 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            SubjectSelector,
            {
              onSelect: handleSubjectSelect,
              iitSubjects
            }
          )
        },
        "subject-selector"
      ),
      selectedSubject && !selectedUnit && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            UnitBrowser,
            {
              subject: selectedSubject,
              onSelectUnit: handleUnitSelect,
              onBack: handleBackToSubjects
            }
          )
        },
        "unit-browser"
      ),
      selectedSubject && selectedUnit && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            TopicList,
            {
              unit: selectedUnit,
              subject: selectedSubject,
              onBack: handleBackToUnits
            }
          )
        },
        "topic-list"
      )
    ] })
  ] }) });
}
export {
  IIT as default
};
