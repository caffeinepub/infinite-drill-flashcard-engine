import { r as reactExports, j as jsxRuntimeExports, L as Link, _ as __vitePreload } from "./index-Bt7fKRHj.js";
import { c as createLucideIcon, a as cn } from "./createLucideIcon-Cok44PpJ.js";
import { L as Layout, F as FileQuestion } from "./Layout-CasrpCIH.js";
import { u as useSEO } from "./useSEO-BF8dCkW_.js";
import { B as BookOpen } from "./book-open-C_tU6qSB.js";
import { C as ChevronUp } from "./chevron-up-Dyz8e9xY.js";
import { C as ChevronDown } from "./chevron-down-DEqIYfio.js";
import "./button-CfI2RAAy.js";
import "./useActor-rU57j2r-.js";
import "./house-BfnrCgHQ.js";
import "./flask-conical-Cp2xJo-Y.js";
import "./trophy-BweDD2l4.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
];
const ArrowRight = createLucideIcon("arrow-right", __iconNode);
function usePYQData() {
  const [mod, setMod] = reactExports.useState(null);
  reactExports.useEffect(() => {
    __vitePreload(() => import("./pyqData-CPnIPG-1.js"), true ? [] : void 0).then(setMod);
  }, []);
  return {
    subjects: (mod == null ? void 0 : mod.pyqSubjects) ?? [],
    isLoaded: mod !== null
  };
}
function PYQFAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Where can I find CBSE Class 10 previous year question papers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can find CBSE Class 10 previous year questions (PYQ) for Science, Maths, Social Science and English free on NCERT Bhaiya. Questions from 2021, 2022 and 2023 board exams are available with detailed answers."
        }
      },
      {
        "@type": "Question",
        name: "Are CBSE Class 10 PYQs important for board exam preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, solving CBSE Class 10 previous year question papers is one of the best ways to prepare for board exams. PYQs help you understand the exam pattern, important topics, and types of questions asked every year."
        }
      },
      {
        "@type": "Question",
        name: "How many marks are the questions in CBSE Class 10 Science PYQ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CBSE Class 10 Science paper includes 1-mark, 2-mark, 3-mark and 5-mark questions. The total paper is of 80 marks. Our PYQ section categorises questions by marks so you can practise accordingly."
        }
      },
      {
        "@type": "Question",
        name: "Which chapters are most important for CBSE Class 10 Maths board exam?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Based on PYQ analysis, the most important chapters for Class 10 Maths are: Real Numbers, Polynomials, Quadratic Equations, Arithmetic Progressions, Triangles, Trigonometry, and Probability. Questions from these chapters appear every year."
        }
      }
    ]
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
    }
  );
}
const subjectColorMap = {
  "neon-green": {
    bg: "bg-neon-green/10",
    text: "text-neon-green",
    border: "border-neon-green/30",
    dot: "bg-neon-green"
  },
  "neon-blue": {
    bg: "bg-neon-blue/10",
    text: "text-neon-blue",
    border: "border-neon-blue/30",
    dot: "bg-neon-blue"
  },
  "neon-amber": {
    bg: "bg-neon-amber/10",
    text: "text-neon-amber",
    border: "border-neon-amber/30",
    dot: "bg-neon-amber"
  },
  "neon-purple": {
    bg: "bg-neon-purple/10",
    text: "text-neon-purple",
    border: "border-neon-purple/30",
    dot: "bg-neon-purple"
  }
};
function FeaturedQuestionCard({
  question,
  subject
}) {
  const [open, setOpen] = reactExports.useState(false);
  const colors = subjectColorMap[subject.color] ?? subjectColorMap["neon-purple"];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": "pyq.question.card",
      className: cn(
        "glass-dark rounded-xl border p-4 transition-all duration-200",
        colors.border,
        "hover:shadow-card-glow"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full border mt-0.5",
                colors.bg,
                colors.text,
                colors.border
              ),
              children: subject.label
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono-custom text-muted-foreground border border-border/40 rounded-full px-2 py-0.5", children: question.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-bold px-2 py-0.5 rounded-full bg-muted/40 text-muted-foreground border border-border/30 ml-auto", children: [
            question.marks,
            "M"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-relaxed mb-3", children: question.question }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setOpen((v) => !v),
            className: cn(
              "flex items-center gap-1.5 text-xs font-medium transition-colors",
              open ? colors.text : "text-muted-foreground hover:text-foreground"
            ),
            children: [
              open ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { size: 13 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { size: 13 }),
              open ? "Hide Answer" : "Show Answer"
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "mt-3 pt-3 border-t text-xs text-muted-foreground leading-relaxed",
              "border-border/30"
            ),
            children: question.answer
          }
        )
      ]
    }
  );
}
function SubjectCard({
  subject,
  index
}) {
  const colors = subjectColorMap[subject.color] ?? subjectColorMap["neon-purple"];
  const years = [...new Set(subject.questions.map((q) => q.year))].sort(
    (a, b) => b - a
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/pyq/$subject",
      params: { subject: subject.slug },
      "data-ocid": `pyq.subject_card.${index + 1}`,
      className: cn(
        "glass-dark rounded-2xl p-5 border transition-all duration-200 flex flex-col gap-4",
        colors.border,
        "hover:shadow-card-glow"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-[10px] font-bold px-2.5 py-1 rounded-full border w-fit",
                  colors.bg,
                  colors.text,
                  colors.border
                ),
                children: "Class 10"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: cn("font-display font-bold text-xl", colors.text), children: subject.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: cn(
                "w-10 h-10 rounded-xl flex items-center justify-center",
                colors.bg
              ),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileQuestion, { size: 20, className: colors.text })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("text-2xl font-display font-bold", colors.text), children: subject.questions.length }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Questions" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-border/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1", children: years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "text-[10px] font-mono-custom px-2 py-0.5 rounded bg-muted/40 text-muted-foreground border border-border/30",
              children: y
            },
            y
          )) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: cn(
              "flex items-center gap-1.5 text-xs font-semibold",
              colors.text
            ),
            children: [
              "View Questions ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 13 })
            ]
          }
        )
      ]
    }
  );
}
function PYQSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
      "data-ocid": "pyq.loading_state",
      children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-dark rounded-2xl p-5 border border-border/40 h-40 animate-pulse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-16 bg-muted/40 rounded mb-3" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-28 bg-muted/30 rounded mb-4" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-20 bg-muted/20 rounded" })
          ]
        },
        i
      ))
    }
  );
}
function PYQ() {
  const { subjects, isLoaded } = usePYQData();
  const [yearFilter, setYearFilter] = reactExports.useState(
    "All"
  );
  useSEO({
    title: "Class 10 CBSE PYQ 2024 — Previous Year Questions",
    description: "Free Class 10 CBSE Previous Year Questions (PYQ) 2021-2023 for Science, Maths, Social Science and English with detailed answers. Best prep for CBSE board exam 2024.",
    keywords: "class 10 CBSE PYQ, class 10 previous year questions, CBSE board exam 2024 question paper, class 10 science maths PYQ",
    canonical: "/pyq"
  });
  const featuredQuestions = subjects.flatMap((sub) => {
    const threeMark = sub.questions.filter((q) => q.type === "3mark").sort((a, b) => b.year - a.year).slice(0, 2);
    return threeMark.map((q) => ({ question: q, subject: sub }));
  });
  const filteredFeatured = yearFilter === "All" ? featuredQuestions : featuredQuestions.filter((fq) => fq.question.year === yearFilter);
  const years = ["All", 2023, 2022, 2021];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PYQFAQSchema, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-[1100px] mx-auto px-4 py-8 lg:py-12",
        "data-ocid": "pyq.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileQuestion, { size: 14, className: "text-neon-amber" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono-custom text-neon-amber/70 uppercase tracking-widest", children: "CBSE Board Exam" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl lg:text-4xl font-bold mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-purple", children: "Previous Year" }),
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: "Questions (PYQ)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm max-w-2xl leading-relaxed", children: "Real CBSE Class 10 board exam questions from 2021 to 2023. Click any question to reveal the answer. Covers Science, Mathematics, Social Science and English." })
          ] }),
          !isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx(PYQSkeleton, {}),
          isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10", children: subjects.map((sub, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(SubjectCard, { subject: sub, index: i }, sub.id)) }),
          isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-3 mb-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-xl", children: "Featured Questions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "pyq.year_tab",
                  onClick: () => setYearFilter(y),
                  className: cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                    yearFilter === y ? "bg-neon-amber/20 border-neon-amber/40 text-neon-amber" : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  ),
                  children: y
                },
                String(y)
              )) })
            ] }),
            filteredFeatured.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "text-center py-10 text-muted-foreground",
                "data-ocid": "pyq.empty_state",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 28, className: "mx-auto mb-2 opacity-30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm", children: [
                    "No featured questions for ",
                    yearFilter,
                    "."
                  ] })
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: filteredFeatured.map((fq) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              FeaturedQuestionCard,
              {
                question: fq.question,
                subject: fq.subject
              },
              fq.question.id
            )) })
          ] }),
          isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 p-6 glass-dark rounded-2xl border border-neon-purple/20 text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg mb-2", children: "Practice Subject-wise PYQs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mb-4", children: "Filter by marks (1M, 2M, 3M, 5M) and year for focused revision." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-3", children: subjects.map((sub) => {
              const colors = subjectColorMap[sub.color] ?? subjectColorMap["neon-purple"];
              return /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/pyq/$subject",
                  params: { subject: sub.slug },
                  className: cn(
                    "px-4 py-2 rounded-lg text-xs font-semibold border transition-all",
                    colors.bg,
                    colors.text,
                    colors.border,
                    "hover:opacity-80"
                  ),
                  children: sub.label
                },
                sub.id
              );
            }) })
          ] })
        ]
      }
    )
  ] });
}
export {
  PYQ as default
};
