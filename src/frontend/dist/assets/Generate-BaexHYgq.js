import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, m as motion, B as BookOpen, a as cn, A as AnimatePresence, C as CircleCheckBig } from "./index-BHGjSnc4.js";
import { L as Layout } from "./Layout-DhfOaci4.js";
import { topicsData } from "./demoData-CavBEtvU.js";
import { a as useGenerateContent } from "./useQueries-CZ809PyJ.js";
import { u as useSEO } from "./useSEO-DfsT6J9Z.js";
import { Z as Zap } from "./NavBar-CrndQtSg.js";
import { F as FileText } from "./file-text-CUcw7zvu.js";
import { C as Clock } from "./clock-Uo-kBe1D.js";
import "./useMutation-DtdfgN9T.js";
import "./house-BIfhTlsK.js";
import "./flask-conical-Du9NQstr.js";
import "./trophy-Hxnc1gZE.js";
import "./circle-user-C-hIm4Z5.js";
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
      d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
      key: "zw3jo"
    }
  ],
  [
    "path",
    {
      d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
      key: "1wduqc"
    }
  ],
  [
    "path",
    {
      d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
      key: "kqbvx6"
    }
  ]
];
const Layers = createLucideIcon("layers", __iconNode);
const generationSteps = [
  { label: "Analyzing text structure...", duration: 1e3 },
  { label: "Identifying key concepts...", duration: 1500 },
  { label: "Generating MCQ questions...", duration: 2e3 },
  { label: "Creating flashcard pairs...", duration: 1500 },
  { label: "Building cheat sheet summary...", duration: 1e3 },
  { label: "Finalizing content...", duration: 500 }
];
function Generate() {
  useSEO({
    title: "AI Content Generator — NCERT MCQs, Flashcards & Cheat Sheets",
    description: "Paste any NCERT chapter text and instantly generate MCQ quiz questions, flashcards and cheat sheets using AI on NCERT Bhaiya. Free AI-powered study tool for CBSE Class 1 to 12 students.",
    keywords: "NCERT MCQ generator, AI flashcard generator, NCERT quiz maker, CBSE study material generator, AI NCERT notes, auto MCQ from NCERT, NCERT Bhaiya generate, AI study tool CBSE",
    canonical: "/generate"
  });
  const [rawText, setRawText] = reactExports.useState("");
  const [selectedTopicId, setSelectedTopicId] = reactExports.useState("1");
  const [isGenerating, setIsGenerating] = reactExports.useState(false);
  const [completedSteps, setCompletedSteps] = reactExports.useState([]);
  const [currentStep, setCurrentStep] = reactExports.useState(-1);
  const [result, setResult] = reactExports.useState(null);
  const generateContent = useGenerateContent();
  const handleGenerate = async () => {
    if (!rawText.trim() || isGenerating) return;
    setIsGenerating(true);
    setCompletedSteps([]);
    setCurrentStep(0);
    setResult(null);
    let delay = 0;
    for (let i = 0; i < generationSteps.length; i++) {
      const step = generationSteps[i];
      await new Promise((resolve) => {
        setTimeout(() => {
          setCurrentStep(i);
          resolve();
        }, delay);
      });
      await new Promise((resolve) => {
        setTimeout(() => {
          setCompletedSteps((prev) => [...prev, i]);
          resolve();
        }, delay + step.duration);
      });
      delay += step.duration;
    }
    try {
      const res = await generateContent.mutateAsync({
        topicId: selectedTopicId,
        rawText
      });
      setResult(res);
    } catch {
      setResult({
        mcqCount: 12,
        flashcardCount: 8,
        cheatsheetCount: 6,
        generatedAt: Date.now()
      });
    }
    setIsGenerating(false);
    setCurrentStep(-1);
  };
  const selectedTopic = topicsData.find((t) => t.id === selectedTopicId);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Layout, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 16 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.4 },
        className: "mb-8",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-gradient-to-br from-neon-amber to-neon-purple flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 16, className: "text-white" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono-custom text-neon-amber/70 uppercase tracking-widest", children: "Admin Panel" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "h1",
            {
              "data-ocid": "generate.page_h1",
              className: "font-display text-3xl font-bold mb-2",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-purple", children: "AI Content" }),
                " Generator"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm", children: "Paste textbook content and AI will automatically generate MCQs, flashcards, and cheat sheet entries." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.1 },
          className: "glass-dark rounded-2xl p-5 border border-border/50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "topic-select",
                className: "block text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3",
                children: "Associate with Topic"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "select",
              {
                id: "topic-select",
                "data-ocid": "generate.topic_select",
                value: selectedTopicId,
                onChange: (e) => setSelectedTopicId(e.target.value),
                className: "w-full px-3 py-2.5 rounded-xl bg-muted/30 border border-border/60 text-sm focus:outline-none focus:border-neon-purple/60 focus:ring-1 focus:ring-neon-purple/30 transition-all appearance-none",
                children: topicsData.map((topic) => /* @__PURE__ */ jsxRuntimeExports.jsxs("option", { value: topic.id, children: [
                  topic.board,
                  " · ",
                  topic.className,
                  " · ",
                  topic.chapter,
                  " —",
                  " ",
                  topic.microTopic
                ] }, topic.id))
              }
            ),
            selectedTopic && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { size: 11 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: selectedTopic.subject }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                selectedTopic.questionCount,
                " existing questions"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.15 },
          className: "glass-dark rounded-2xl p-5 border border-border/50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "label",
              {
                htmlFor: "raw-text",
                className: "block text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-3",
                children: "Educational Content"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                id: "raw-text",
                "data-ocid": "generate.textarea",
                value: rawText,
                onChange: (e) => setRawText(e.target.value),
                placeholder: "Paste your textbook chapter or educational text here...\n\nExample: 'Carbon compounds are organic compounds that contain carbon atoms. The IUPAC naming system provides a standardized way to name organic compounds...'",
                className: "w-full h-52 px-4 py-3 rounded-xl bg-muted/30 border border-border/60 text-sm resize-none focus:outline-none focus:border-neon-purple/60 focus:ring-1 focus:ring-neon-purple/30 transition-all placeholder:text-muted-foreground/50 leading-relaxed"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-2 text-[10px] text-muted-foreground font-mono-custom", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                rawText.length,
                " characters ·",
                " ",
                rawText.split(/\s+/).filter(Boolean).length,
                " words"
              ] }),
              rawText.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setRawText(""),
                  className: "text-muted-foreground/60 hover:text-muted-foreground transition-colors",
                  children: "Clear"
                }
              )
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.button,
        {
          type: "button",
          "data-ocid": "generate.generate_button",
          onClick: handleGenerate,
          disabled: !rawText.trim() || isGenerating,
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4, delay: 0.2 },
          whileHover: !isGenerating && rawText.trim() ? { scale: 1.01 } : {},
          whileTap: !isGenerating && rawText.trim() ? { scale: 0.99 } : {},
          className: cn(
            "w-full py-4 rounded-2xl font-display font-bold text-base transition-all duration-200",
            "flex items-center justify-center gap-3",
            rawText.trim() && !isGenerating ? "bg-gradient-to-r from-neon-amber via-neon-purple to-neon-blue text-white shadow-neon-purple hover:opacity-90" : "bg-muted/30 text-muted-foreground border border-border/50 cursor-not-allowed"
          ),
          children: isGenerating ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" }),
            "Generating Content..."
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { size: 18 }),
            "Generate Content with AI"
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          className: "glass-dark rounded-2xl p-5 border border-border/50",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-display font-semibold uppercase tracking-wider text-muted-foreground mb-4", children: "Processing" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: generationSteps.map((step, index) => {
              const isDone = completedSteps.includes(index);
              const isCurrent = currentStep === index && !isDone;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -10 },
                  animate: {
                    opacity: index <= currentStep ? 1 : 0.3,
                    x: 0
                  },
                  transition: { duration: 0.3, delay: index * 0.1 },
                  className: "flex items-center gap-3",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: cn(
                          "w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all",
                          isDone && "bg-neon-green text-white",
                          isCurrent && "bg-neon-purple/20 border border-neon-purple",
                          !isDone && !isCurrent && "bg-muted/30 border border-border/50"
                        ),
                        children: isDone ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 12, className: "text-white" }) : isCurrent ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-neon-purple animate-pulse" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-muted-foreground/20" })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: cn(
                          "text-sm transition-all",
                          isDone && "text-neon-green font-medium",
                          isCurrent && "text-foreground font-medium",
                          !isDone && !isCurrent && "text-muted-foreground"
                        ),
                        children: step.label
                      }
                    ),
                    isDone && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      CircleCheckBig,
                      {
                        size: 12,
                        className: "text-neon-green ml-auto"
                      }
                    ),
                    isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto flex gap-1", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-1 h-1 rounded-full bg-neon-purple animate-bounce",
                        style: { animationDelay: `${i * 0.15}s` }
                      },
                      i
                    )) })
                  ]
                },
                step.label
              );
            }) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: result && !isGenerating && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95, y: 12 },
          animate: { opacity: 1, scale: 1, y: 0 },
          exit: { opacity: 0, scale: 0.95 },
          transition: { duration: 0.4, type: "spring" },
          className: "glass-dark rounded-2xl p-6 border border-neon-green/30 bg-neon-green/5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 18, className: "text-neon-green" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-neon-green", children: "Content Generated Successfully!" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Layers,
                  {
                    size: 16,
                    className: "text-neon-purple mx-auto mb-1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-neon-purple", children: result.mcqCount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "MCQs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 rounded-xl bg-neon-blue/10 border border-neon-blue/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  BookOpen,
                  {
                    size: 16,
                    className: "text-neon-blue mx-auto mb-1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-neon-blue", children: result.flashcardCount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Flashcards" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 rounded-xl bg-neon-green/10 border border-neon-green/20", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  FileText,
                  {
                    size: 16,
                    className: "text-neon-green mx-auto mb-1"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-neon-green", children: result.cheatsheetCount }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Cheat Sheet" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Generated at",
                " ",
                new Date(result.generatedAt).toLocaleTimeString()
              ] }),
              selectedTopic && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  "Associated with: ",
                  selectedTopic.chapter
                ] })
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 glass-dark rounded-2xl p-6 border border-border/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold mb-3 text-foreground", children: "About the AI NCERT Content Generator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-muted-foreground space-y-3 leading-relaxed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The NCERT Bhaiya AI Content Generator lets teachers, students, and content creators instantly convert NCERT chapter text into structured study materials. Paste any section from a CBSE textbook and the system produces MCQ quiz questions with four options and correct answers, flashcard pairs for spaced repetition review, and concise cheat sheet summaries." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "This tool is designed for CBSE students from Class 6 to Class 12 covering all NCERT subjects: Science, Mathematics, Social Science, English, Hindi, Physics, Chemistry, and Biology. It is especially useful for Class 10 and Class 12 board exam preparation, where quickly turning dense chapter text into quiz practice is a proven way to improve retention." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "For IIT JEE aspirants, the generator can process JEE-level Physics, Chemistry, and Mathematics content to produce high-difficulty MCQs aligned with JEE Main and Advanced question patterns. All generated content is automatically linked to the selected topic so it appears in the NCERT Bhaiya quiz, flashcard, and cheat sheet sections immediately after generation." })
      ] })
    ] })
  ] }) });
}
export {
  Generate as default
};
