import { u as useParams, j as jsxRuntimeExports, L as Link } from "./index-Bbq5rxHW.js";
import { c as createLucideIcon, a as cn } from "./createLucideIcon-DMUEz8Md.js";
import { topicsData } from "./demoData-CavBEtvU.js";
import { u as useSEO } from "./useSEO-COHw2mGd.js";
import { A as ArrowLeft } from "./arrow-left-lh3rqSpo.js";
import { L as Lightbulb } from "./lightbulb-CWX-qBuo.js";
import { F as FlaskConical } from "./flask-conical-DoEwdfHt.js";
import { B as BookOpen } from "./book-open-DqukpTPH.js";
import { m as motion } from "./proxy-C7FndhMQ.js";
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
      ] })
    ] })
  ] });
}
export {
  CheatSheet as default
};
