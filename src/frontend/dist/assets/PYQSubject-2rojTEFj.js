import { u as useParams, r as reactExports, j as jsxRuntimeExports, L as Link, _ as __vitePreload } from "./index-QKb68Tce.js";
import { a as cn } from "./createLucideIcon-Zt4_eHV2.js";
import { L as Layout } from "./Layout-HAIj9K06.js";
import { u as useSEO } from "./useSEO-CH5nP3sE.js";
import { A as ArrowLeft } from "./arrow-left-XcUDPFHx.js";
import { B as BookOpen } from "./book-open-9YcSaDM0.js";
import { C as ChevronUp } from "./chevron-up-DicnspaX.js";
import { C as ChevronDown } from "./chevron-down-ik-cs_uf.js";
import "./button-C9dqIoyd.js";
import "./useActor-B4S_8tu3.js";
import "./house-A7ZCgDQu.js";
import "./flask-conical-BtE106ct.js";
import "./trophy-KrX40R34.js";
import "./circle-user-Ak1nNM_6.js";
import "./log-in-DY1FxyPr.js";
function usePYQSubjectData(slug) {
  const [mod, setMod] = reactExports.useState(null);
  reactExports.useEffect(() => {
    __vitePreload(() => import("./pyqData-CPnIPG-1.js"), true ? [] : void 0).then(setMod);
  }, []);
  return {
    subject: (mod == null ? void 0 : mod.getPYQBySlug(slug)) ?? null,
    isLoaded: mod !== null
  };
}
const subjectColorMap = {
  "neon-green": {
    bg: "bg-neon-green/10",
    text: "text-neon-green",
    border: "border-neon-green/30"
  },
  "neon-blue": {
    bg: "bg-neon-blue/10",
    text: "text-neon-blue",
    border: "border-neon-blue/30"
  },
  "neon-amber": {
    bg: "bg-neon-amber/10",
    text: "text-neon-amber",
    border: "border-neon-amber/30"
  },
  "neon-purple": {
    bg: "bg-neon-purple/10",
    text: "text-neon-purple",
    border: "border-neon-purple/30"
  }
};
const marksColors = {
  "1mark": "bg-muted/50 text-muted-foreground border-border/40",
  "2mark": "bg-neon-blue/10 text-neon-blue border-neon-blue/30",
  "3mark": "bg-neon-amber/10 text-neon-amber border-neon-amber/30",
  "5mark": "bg-neon-green/10 text-neon-green border-neon-green/30"
};
function SubjectFAQSchema({ subject }) {
  const faqs = subject.questions.slice(0, 8).map((q) => ({
    "@type": "Question",
    name: q.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: q.answer
    }
  }));
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "script",
    {
      type: "application/ld+json",
      dangerouslySetInnerHTML: { __html: JSON.stringify(schema) }
    }
  );
}
function QuestionCard({
  question,
  subject,
  index
}) {
  const [open, setOpen] = reactExports.useState(false);
  const colors = subjectColorMap[subject.color] ?? subjectColorMap["neon-purple"];
  const marksLabel = question.marks === 1 ? "1M" : `${question.marks}M`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-ocid": `pyq.question.item.${index + 1}`,
      className: cn(
        "glass-dark rounded-xl border p-4 transition-all duration-200",
        "border-border/50 hover:border-opacity-60",
        open && colors.border
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-[10px] font-mono-custom px-2 py-0.5 rounded-full border",
                "bg-muted/30 text-muted-foreground border-border/40"
              ),
              children: question.year
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-[10px] font-bold px-2 py-0.5 rounded-full border",
                marksColors[question.type] ?? marksColors["1mark"]
              ),
              children: marksLabel
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium leading-relaxed mb-3", children: question.question }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            "data-ocid": `pyq.answer.toggle.${index + 1}`,
            onClick: () => setOpen((v) => !v),
            className: cn(
              "flex items-center gap-1.5 text-xs font-semibold transition-colors",
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
function SubjectSkeleton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
      "data-ocid": "pyq.subject.loading_state",
      children: [1, 2, 3, 4, 5, 6].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "glass-dark rounded-xl border border-border/40 p-4 h-28 animate-pulse",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 mb-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-12 bg-muted/40 rounded-full" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-8 bg-muted/30 rounded-full" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-full bg-muted/30 rounded mb-2" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-3 w-3/4 bg-muted/20 rounded" })
          ]
        },
        i
      ))
    }
  );
}
function PYQSubject() {
  const { subject: slug } = useParams({ strict: false });
  const { subject, isLoaded } = usePYQSubjectData(slug);
  const [yearFilter, setYearFilter] = reactExports.useState("All");
  const [marksFilter, setMarksFilter] = reactExports.useState("All");
  const colors = subject ? subjectColorMap[subject.color] ?? subjectColorMap["neon-purple"] : subjectColorMap["neon-purple"];
  useSEO({
    title: (subject == null ? void 0 : subject.metaTitle) ?? "Class 10 CBSE PYQ — Previous Year Questions",
    description: (subject == null ? void 0 : subject.metaDescription) ?? "Free CBSE Class 10 previous year questions with answers.",
    keywords: (subject == null ? void 0 : subject.keywords.join(", ")) ?? "class 10 CBSE PYQ",
    canonical: `/pyq/${slug}`
  });
  const years = reactExports.useMemo(() => {
    if (!subject) return [];
    return [...new Set(subject.questions.map((q) => q.year))].sort(
      (a, b) => b - a
    );
  }, [subject]);
  const marksOptions = ["All", "1mark", "2mark", "3mark", "5mark"];
  const marksLabels = {
    All: "All Marks",
    "1mark": "1 Mark",
    "2mark": "2 Marks",
    "3mark": "3 Marks",
    "5mark": "5 Marks"
  };
  const filteredQuestions = reactExports.useMemo(() => {
    if (!subject) return [];
    return subject.questions.filter((q) => {
      const yearOk = yearFilter === "All" || q.year === yearFilter;
      const marksOk = marksFilter === "All" || q.type === marksFilter;
      return yearOk && marksOk;
    });
  }, [subject, yearFilter, marksFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    subject && /* @__PURE__ */ jsxRuntimeExports.jsx(SubjectFAQSchema, { subject }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-[900px] mx-auto px-4 py-8 lg:py-12",
        "data-ocid": "pyq.subject.page",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex items-center gap-2 text-xs text-muted-foreground mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Home" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pyq", className: "hover:text-foreground transition-colors", children: "PYQ" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: cn("font-medium", colors.text), children: (subject == null ? void 0 : subject.label) ?? slug })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/pyq",
              className: "inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 13 }),
                "Back to all subjects"
              ]
            }
          ),
          isLoaded && subject && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-[10px] font-bold px-2.5 py-1 rounded-full border mb-3 inline-block",
                  colors.bg,
                  colors.text,
                  colors.border
                ),
                children: "Class 10 CBSE"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: cn(
                  "font-display text-2xl lg:text-3xl font-bold mb-3",
                  colors.text
                ),
                children: subject.h1
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
              subject.questions.length,
              " questions across ",
              years.join(", "),
              " ",
              "board exams. Click any question to reveal the detailed answer."
            ] })
          ] }),
          isLoaded && subject && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "pyq.year_tab",
                  onClick: () => setYearFilter("All"),
                  className: cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                    yearFilter === "All" ? cn(
                      "border-opacity-60",
                      colors.bg,
                      colors.text,
                      colors.border
                    ) : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  ),
                  children: "All Years"
                }
              ),
              years.map((y) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  "data-ocid": "pyq.year_tab",
                  onClick: () => setYearFilter(y),
                  className: cn(
                    "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                    yearFilter === y ? cn(colors.bg, colors.text, colors.border) : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  ),
                  children: y
                },
                y
              ))
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px sm:h-auto sm:w-px bg-border/30 my-1 sm:mx-1" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: marksOptions.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                "data-ocid": "pyq.marks_tab",
                onClick: () => setMarksFilter(m),
                className: cn(
                  "px-3 py-1.5 rounded-lg text-xs font-medium border transition-all",
                  marksFilter === m ? cn(colors.bg, colors.text, colors.border) : "bg-muted/30 border-border/40 text-muted-foreground hover:text-foreground hover:bg-muted/50"
                ),
                children: marksLabels[m]
              },
              m
            )) })
          ] }),
          isLoaded && subject && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-5 font-mono-custom", children: [
            "Showing ",
            filteredQuestions.length,
            " question",
            filteredQuestions.length !== 1 ? "s" : ""
          ] }),
          !isLoaded && /* @__PURE__ */ jsxRuntimeExports.jsx(SubjectSkeleton, {}),
          isLoaded && !subject && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-16 text-muted-foreground",
              "data-ocid": "pyq.subject.error_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 32, className: "mx-auto mb-3 opacity-40" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Subject not found. Please check the URL." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/pyq",
                    className: "text-neon-purple text-xs mt-2 inline-block hover:underline",
                    children: "Back to PYQ"
                  }
                )
              ]
            }
          ),
          isLoaded && subject && filteredQuestions.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "text-center py-12 text-muted-foreground",
              "data-ocid": "pyq.subject.empty_state",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 28, className: "mx-auto mb-2 opacity-30" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "No questions match the selected filters." })
              ]
            }
          ),
          isLoaded && subject && filteredQuestions.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: filteredQuestions.map((q, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            QuestionCard,
            {
              question: q,
              subject,
              index: i
            },
            q.id
          )) })
        ]
      }
    )
  ] });
}
export {
  PYQSubject as default
};
