import { c as createLucideIcon, u as useParams, r as reactExports, f as ue, j as jsxRuntimeExports, m as motion, L as Link, e as Star, A as AnimatePresence, a as cn, C as CircleCheckBig, g as CircleX } from "./index-VyNBnJo7.js";
import { A as AdZone } from "./AdZone-919_yAkD.js";
import { topicsData, getLevel, getLevelProgress } from "./demoData-CavBEtvU.js";
import { c as useSubmitQuiz } from "./useQueries-BNcfEQKY.js";
import { u as useSEO } from "./useSEO-BnecrqLu.js";
import { R as RotateCcw } from "./rotate-ccw-Cqxf1bZM.js";
import { H as House } from "./house-C24w4l_7.js";
import { A as ArrowLeft } from "./arrow-left-CaQRUrNT.js";
import { F as Flame } from "./flame-DTyjnpJ9.js";
import "./x-CzdkRmk6.js";
import "./useMutation-FHcdMG1D.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  ["line", { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" }],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }]
];
const Share2 = createLucideIcon("share-2", __iconNode);
function TimerRing({ timeLeft, total }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / total;
  const strokeDashoffset = circumference * (1 - progress);
  const isWarning = timeLeft <= 10;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-16 h-16 flex items-center justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "svg",
      {
        width: "64",
        height: "64",
        className: "absolute inset-0 -rotate-90",
        "aria-hidden": "true",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "32",
              cy: "32",
              r: radius,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: "3",
              className: "text-muted/30"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "circle",
            {
              cx: "32",
              cy: "32",
              r: radius,
              fill: "none",
              strokeWidth: "3",
              strokeLinecap: "round",
              strokeDasharray: circumference,
              strokeDashoffset,
              className: cn(
                "timer-ring-circle",
                isWarning ? "stroke-neon-red" : "stroke-neon-purple"
              ),
              style: {
                stroke: isWarning ? "oklch(var(--neon-red))" : "oklch(var(--neon-purple))"
              }
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: cn(
          "text-sm font-display font-bold tabular-nums z-10",
          isWarning ? "text-neon-red" : "text-foreground",
          isWarning && "animate-pulse"
        ),
        children: timeLeft
      }
    )
  ] });
}
function XPPopup({ xp, show }) {
  if (!show) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 1, y: 0, scale: 1 },
      animate: { opacity: 0, y: -60, scale: 1.3 },
      transition: { duration: 1.5, ease: "easeOut" },
      className: "fixed top-20 right-8 z-50 pointer-events-none",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neon-purple/20 border border-neon-purple/50 text-neon-purple font-display font-bold text-sm shadow-neon-purple", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, fill: "currentColor" }),
        "+",
        xp,
        " XP"
      ] })
    }
  );
}
function Quiz() {
  const { topicId } = useParams({ from: "/protected/quiz/$topicId" });
  const topic = topicsData.find((t) => t.id === topicId) ?? topicsData[0];
  const questions = topic.questions;
  useSEO({
    title: `${topic.chapter} MCQ Quiz — ${topic.className} ${topic.subject} NCERT | NCERT Bhaiya`,
    description: `Practice free MCQ questions on ${topic.chapter} for ${topic.className} ${topic.subject} NCERT on NCERT Bhaiya. Timed quiz with detailed answer explanations, XP rewards and instant feedback. Best online MCQ practice for CBSE board exam ${topic.className}.`,
    keywords: `${topic.chapter} MCQ, ${topic.className} ${topic.subject} MCQ quiz, NCERT ${topic.chapter} questions, CBSE ${topic.className} practice test, ${topic.chapter} important questions, ${topic.chapter} objective questions, ${topic.className} ${topic.subject} online test, NCERT Bhaiya quiz`,
    canonical: `/quiz/${topicId}`
  });
  const [currentIndex, setCurrentIndex] = reactExports.useState(0);
  const [selectedOption, setSelectedOption] = reactExports.useState(null);
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [timeLeft, setTimeLeft] = reactExports.useState(30);
  const [xp, setXP] = reactExports.useState(0);
  const [streak, setStreak] = reactExports.useState(0);
  const [correctCount, setCorrectCount] = reactExports.useState(0);
  const [showXPPopup, setShowXPPopup] = reactExports.useState(false);
  const [xpEarned, setXPEarned] = reactExports.useState(0);
  const [quizComplete, setQuizComplete] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const submitQuiz = useSubmitQuiz();
  const currentQuestion = questions[currentIndex];
  const clearTimer = reactExports.useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);
  const handleSubmit = reactExports.useCallback(() => {
    if (submitted) return;
    clearTimer();
    setSubmitted(true);
    let earned = 2;
    if (selectedOption === currentQuestion.correctIndex) {
      earned = 10;
      setCorrectCount((c) => c + 1);
      setStreak((s) => s + 1);
      ue.success("🎉 Correct!", { duration: 1500 });
    } else {
      setStreak(0);
    }
    setXP((x) => x + earned);
    setXPEarned(earned);
    setShowXPPopup(true);
    setTimeout(() => setShowXPPopup(false), 1600);
  }, [submitted, selectedOption, currentQuestion, clearTimer]);
  reactExports.useEffect(() => {
    if (submitted || quizComplete) return;
    setTimeLeft(30);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1e3);
    return clearTimer;
  }, [currentIndex, submitted, quizComplete, handleSubmit, clearTimer]);
  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setQuizComplete(true);
      submitQuiz.mutate({ topicId, score: correctCount });
    } else {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setSubmitted(false);
    }
  };
  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setSubmitted(false);
    setXP(0);
    setStreak(0);
    setCorrectCount(0);
    setQuizComplete(false);
  };
  const scorePercent = Math.round(correctCount / questions.length * 100);
  const level = getLevel(xp);
  const levelProgress = getLevelProgress(xp);
  if (quizComplete) {
    const badgeEarned = scorePercent >= 80 ? "🏆 High Scorer" : scorePercent >= 60 ? "✅ Passed" : "📚 Keep Studying";
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-screen dark:bg-mesh-dark bg-mesh-light flex items-center justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.5, type: "spring" },
        className: "w-full max-w-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-3xl p-8 border border-border/50 shadow-card-glow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-2", children: scorePercent >= 80 ? "🎉" : scorePercent >= 60 ? "👍" : "📖" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-1", children: "Quiz Complete!" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm", children: [
              topic.chapter,
              " · ",
              topic.microTopic
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-28 h-28", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                viewBox: "0 0 120 120",
                className: "w-full h-full -rotate-90",
                "aria-hidden": "true",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "circle",
                    {
                      cx: "60",
                      cy: "60",
                      r: "50",
                      fill: "none",
                      stroke: "oklch(var(--muted))",
                      strokeWidth: "8"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "circle",
                    {
                      cx: "60",
                      cy: "60",
                      r: "50",
                      fill: "none",
                      strokeWidth: "8",
                      strokeLinecap: "round",
                      strokeDasharray: 314,
                      strokeDashoffset: 314 * (1 - scorePercent / 100),
                      style: {
                        stroke: scorePercent >= 80 ? "oklch(var(--neon-green))" : scorePercent >= 60 ? "oklch(var(--neon-amber))" : "oklch(var(--neon-red))",
                        transition: "stroke-dashoffset 1s ease"
                      }
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-2xl font-bold", children: [
                scorePercent,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground", children: "Score" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-3 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold text-neon-purple", children: xp }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "XP Earned" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 rounded-xl bg-neon-green/10 border border-neon-green/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl font-bold text-neon-green", children: [
                correctCount,
                "/",
                questions.length
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Correct" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-3 rounded-xl bg-neon-amber/10 border border-neon-amber/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-xl font-bold text-neon-amber", children: [
                streak,
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fire-anim inline-block", children: "🔥" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Best Streak" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 p-3 rounded-xl bg-muted/30 border border-border/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium", children: level }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
                xp,
                " / ",
                levelProgress.next,
                " XP"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { width: "0%" },
                animate: { width: `${levelProgress.progress}%` },
                transition: { duration: 1, delay: 0.3 },
                className: "h-full rounded-full progress-shimmer"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1", children: badgeEarned })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdZone, { variant: "interstitial" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: handleRestart,
                className: "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary/15 hover:bg-primary/25 text-primary border border-primary/30 hover:border-primary/60 text-sm font-semibold transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 14 }),
                  "Play Again"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  navigator.clipboard.writeText(
                    `I scored ${scorePercent}% on ${topic.chapter}! 🎯`
                  );
                  ue.success("Score copied to clipboard!");
                },
                className: "p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50 transition-all",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 16 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: "/",
                className: "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground border border-border/50 text-sm font-semibold transition-all",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(House, { size: 14 }),
                  "Topics"
                ]
              }
            )
          ] })
        ] })
      }
    ) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen dark:bg-mesh-dark bg-mesh-light flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(XPPopup, { xp: xpEarned, show: showXPPopup }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 glass-dark border-b border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          "data-ocid": "quiz.back_button",
          className: "p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1 text-[10px] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-custom", children: [
            currentIndex + 1,
            " / ",
            questions.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[140px]", children: topic.chapter })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-blue",
            initial: { width: "0%" },
            animate: {
              width: `${(currentIndex + 1) / questions.length * 100}%`
            },
            transition: { duration: 0.3 }
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs shrink-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-neon-purple font-display font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, fill: "currentColor" }),
          xp
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0.5 text-neon-amber font-display font-bold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "fire-anim", children: streak > 0 ? "🔥" : "💤" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: streak })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col items-center justify-start px-4 py-8 max-w-3xl mx-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 30 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -30 },
        transition: { duration: 0.3 },
        className: "w-full",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-dark rounded-2xl p-6 border border-border/50 shadow-card-glow mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(TimerRing, { timeLeft, total: 30 }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-mono-custom text-neon-purple/70 uppercase tracking-widest mb-2", children: [
                "Question ",
                currentIndex + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold leading-snug", children: currentQuestion.question })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 mb-4", children: currentQuestion.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQuestion.correctIndex;
            const isWrong = submitted && isSelected && !isCorrect;
            const showCorrect = submitted && isCorrect;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.button,
              {
                "data-ocid": `quiz.option_button.${idx + 1}`,
                onClick: () => !submitted && setSelectedOption(idx),
                whileHover: !submitted ? { scale: 1.01 } : {},
                whileTap: !submitted ? { scale: 0.99 } : {},
                className: cn(
                  "relative w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200",
                  "flex items-center gap-3",
                  // default
                  !submitted && !isSelected && "glass-dark border-border/50 hover:border-primary/40 hover:bg-primary/5 hover:shadow-neon-purple",
                  // selected (not submitted)
                  !submitted && isSelected && "bg-neon-purple/15 border-neon-purple/60 text-neon-purple shadow-neon-purple",
                  // submitted states
                  showCorrect && "bg-neon-green/15 border-neon-green/60 text-neon-green shadow-neon-green",
                  isWrong && "bg-neon-red/15 border-neon-red/60 text-neon-red shadow-neon-red",
                  submitted && !isSelected && !isCorrect && "glass-dark border-border/30 opacity-50"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-display font-bold shrink-0",
                        "border",
                        !submitted && !isSelected && "border-border/50 text-muted-foreground",
                        !submitted && isSelected && "border-neon-purple/60 text-neon-purple bg-neon-purple/20",
                        showCorrect && "border-neon-green/60 text-neon-green bg-neon-green/20",
                        isWrong && "border-neon-red/60 text-neon-red bg-neon-red/20",
                        submitted && !isSelected && !isCorrect && "border-border/30 text-muted-foreground/50"
                      ),
                      children: ["A", "B", "C", "D"][idx]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex-1", children: option }),
                  showCorrect && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CircleCheckBig,
                    {
                      size: 16,
                      className: "text-neon-green shrink-0"
                    }
                  ),
                  isWrong && /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 16, className: "text-neon-red shrink-0" })
                ]
              },
              option
            );
          }) }),
          !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "data-ocid": "quiz.submit_button",
              onClick: handleSubmit,
              disabled: selectedOption === null,
              className: cn(
                "w-full py-3 rounded-xl font-display font-bold text-sm transition-all",
                selectedOption !== null ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-neon-purple hover:opacity-90" : "bg-muted/30 text-muted-foreground border border-border/50 cursor-not-allowed"
              ),
              children: "Submit Answer"
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 12 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.3 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-dark rounded-xl p-4 border border-border/50 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 mb-2", children: selectedOption === currentQuestion.correctIndex ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 14, className: "text-neon-green" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display font-bold text-neon-green", children: "Correct! +10 XP" })
                  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { size: 14, className: "text-neon-red" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-display font-bold text-neon-red", children: "Wrong answer +2 XP" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: currentQuestion.explanation })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AdZone, { variant: "leaderboard" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    "data-ocid": "quiz.next_button",
                    onClick: handleNext,
                    className: "w-full py-3 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-neon-purple hover:opacity-90 transition-opacity flex items-center justify-center gap-2",
                    children: currentIndex + 1 >= questions.length ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { size: 14 }),
                      "See Results"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      "Next Question",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14, className: "rotate-180" })
                    ] })
                  }
                )
              ]
            }
          )
        ]
      },
      currentIndex
    ) }) })
  ] });
}
export {
  Quiz as default
};
