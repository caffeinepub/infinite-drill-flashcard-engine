import { c as createLucideIcon, u as useParams, j as jsxRuntimeExports, L as Link, B as BookOpen, a as cn, m as motion } from "./index-CYzhHhj9.js";
import { topicsData } from "./demoData-CavBEtvU.js";
import { u as useSEO } from "./useSEO-ChQzxIHm.js";
import { A as ArrowLeft } from "./arrow-left-B3SgG5-t.js";
import { L as Lightbulb } from "./lightbulb-B7ZBJtk8.js";
import { F as FlaskConical } from "./flask-conical-DMtrMu0S.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M4.5 3h15", key: "c7n0jr" }],
  ["path", { d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3", key: "m1uhx7" }],
  ["path", { d: "M6 14h12", key: "4cwo0f" }]
];
const Beaker = createLucideIcon("beaker", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",
      key: "143wyd"
    }
  ],
  ["path", { d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6", key: "1itne7" }],
  ["rect", { x: "6", y: "14", width: "12", height: "8", rx: "1", key: "1ue0tg" }]
];
const Printer = createLucideIcon("printer", __iconNode);
const typeConfig = {
  Definition: {
    label: "Definition",
    color: "border-neon-blue/50 bg-neon-blue/5",
    badge: "bg-neon-blue/15 text-neon-blue border border-neon-blue/30",
    icon: BookOpen
  },
  Formula: {
    label: "Formula",
    color: "border-neon-purple/50 bg-neon-purple/5",
    badge: "bg-neon-purple/15 text-neon-purple border border-neon-purple/30",
    icon: FlaskConical
  },
  Example: {
    label: "Example",
    color: "border-neon-green/50 bg-neon-green/5",
    badge: "bg-neon-green/15 text-neon-green border border-neon-green/30",
    icon: Beaker
  },
  Tip: {
    label: "Tip",
    color: "border-neon-amber/50 bg-neon-amber/5",
    badge: "bg-neon-amber/15 text-neon-amber border border-neon-amber/30",
    icon: Lightbulb
  }
};
function EntryCard({
  entry,
  index
}) {
  const config = typeConfig[entry.type];
  const Icon = config.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.35, delay: index * 0.06 },
      className: cn(
        "print-card rounded-2xl border-2 p-5 transition-all hover:scale-[1.01]",
        config.color,
        "dark:glass-dark dark:border-opacity-70"
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "p-2 rounded-xl shrink-0",
              config.badge.split(" bg-")[0]
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Icon,
              {
                size: 16,
                className: entry.type === "Definition" ? "text-neon-blue" : entry.type === "Formula" ? "text-neon-purple" : entry.type === "Example" ? "text-neon-green" : "text-neon-amber"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1.5 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: cn(
                  "text-[10px] font-mono-custom font-bold px-2 py-0.5 rounded-full uppercase tracking-wider",
                  config.badge
                ),
                children: config.label
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-sm", children: entry.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/80 leading-relaxed whitespace-pre-line", children: entry.content })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl shrink-0 opacity-60", children: entry.icon })
      ] })
    }
  );
}
function CheatSheet() {
  const { topicId } = useParams({ from: "/protected/cheatsheet/$topicId" });
  const topic = topicsData.find((t) => t.id === topicId) ?? topicsData[0];
  useSEO({
    title: `${topic.chapter} Cheat Sheet & Quick Notes — ${topic.className} ${topic.subject} NCERT | NCERT Bhaiya`,
    description: `Free quick-reference cheat sheet for ${topic.chapter} — ${topic.className} ${topic.subject} NCERT. Covers all key definitions, important formulas, solved examples, tips and tricks for CBSE board exam preparation. Printable format on NCERT Bhaiya.`,
    keywords: `${topic.chapter} cheat sheet, ${topic.chapter} quick notes, ${topic.className} ${topic.subject} cheat sheet, NCERT ${topic.chapter} important points, CBSE ${topic.className} ${topic.subject} summary, ${topic.chapter} formulas and definitions, ${topic.chapter} board exam notes, NCERT Bhaiya cheat sheet`,
    canonical: `/cheatsheet/${topicId}`
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen dark:bg-mesh-dark bg-mesh-light print:bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 glass-dark border-b border-border/50 no-print print:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-3 flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/",
            className: "p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono-custom text-muted-foreground uppercase tracking-widest", children: [
            topic.board,
            " · ",
            topic.className,
            " · ",
            topic.subject
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display font-bold text-sm", children: [
            topic.chapter,
            " — Cheat Sheet"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          "data-ocid": "cheatsheet.print_button",
          onClick: () => window.print(),
          className: "flex items-center gap-2 px-3 py-2 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 text-sm font-medium text-muted-foreground hover:text-foreground transition-all",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Printer, { size: 14 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Print" })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden print:block mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-2xl font-bold", children: [
          topic.chapter,
          " — Cheat Sheet"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [
          topic.board,
          " · ",
          topic.className,
          " · ",
          topic.subject,
          " ·",
          " ",
          topic.microTopic
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3 mb-6 flex-wrap no-print", children: Object.keys(typeConfig).map(
        (type) => {
          const config = typeConfig[type];
          return /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "text-[10px] font-mono-custom font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                config.badge
              ),
              children: config.label
            },
            type
          );
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: topic.cheatsheet.map((entry, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(EntryCard, { entry, index }, entry.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 pt-6 border-t border-border/30 flex items-center justify-between text-xs text-muted-foreground no-print", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          topic.cheatsheet.length,
          " entries · ",
          topic.microTopic
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/quiz/$topicId",
              params: { topicId: topic.id },
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neon-purple/15 hover:bg-neon-purple/25 border border-neon-purple/30 text-neon-purple text-[11px] font-semibold transition-all",
              children: "Practice Quiz"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/flashcards/$topicId",
              params: { topicId: topic.id },
              className: "flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neon-blue/15 hover:bg-neon-blue/25 border border-neon-blue/30 text-neon-blue text-[11px] font-semibold transition-all",
              children: "Flashcards"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 space-y-4 no-print", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-6 border border-border/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-lg font-bold mb-3 text-foreground", children: [
            "About the ",
            topic.chapter,
            " Cheat Sheet"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-3 leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "This cheat sheet for",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground/80", children: topic.chapter }),
              " ",
              "(",
              topic.className,
              " ",
              topic.subject,
              ", ",
              topic.board,
              ") is a structured quick-reference guide covering the most important definitions, key formulas, solved examples, and exam tips from the NCERT textbook. It is designed to help CBSE students revise the entire chapter in minutes, not hours — especially useful during last-minute board exam preparation."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Each entry in the cheat sheet is colour-coded by type: blue for definitions, purple for formulas, green for worked examples, and amber for exam tips and common mistakes to avoid. This colour system makes it easy to scan the page and find exactly what you need at a glance." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
              "Use the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground/80", children: "Print" }),
              " ",
              "button at the top right to get a clean, formatted printout of this cheat sheet to keep in your physical revision folder. The print version removes all navigation and UI elements so only the content remains."
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-5 border border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-bold mb-2 text-foreground", children: "How to Use This Cheat Sheet Effectively" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-2 leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Read through all definitions first to build a conceptual map of the chapter." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Study each formula and try to write it out from memory before checking." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Work through the examples with pen and paper to verify you can reproduce the steps." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Read all tips and mark the ones that apply to common mistakes you have made before." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• After revising the cheat sheet, test yourself with the Practice Quiz linked above." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-2xl p-5 border border-border/40", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-base font-bold mb-2 text-foreground", children: "What CBSE Exams Test From This Chapter" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "text-sm text-muted-foreground space-y-2 leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• CBSE board exams test both conceptual understanding and application of formulas." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Definition-based 1-mark questions are common — use the Definition cards to prepare." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Formula-based 2-3 mark questions require you to substitute values correctly." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Long-answer questions test whether you can apply concepts to new situations." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "• Internal assessments and unit tests often draw directly from NCERT examples and exercises." })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  CheatSheet as default
};
