import { u as useParams, r as reactExports, j as jsxRuntimeExports, L as Link } from "./index-QKb68Tce.js";
import { c as createLucideIcon, a as cn } from "./createLucideIcon-Zt4_eHV2.js";
import { topicsData } from "./demoData-CavBEtvU.js";
import { u as useMarkFlashcardMastered } from "./useQueries-D2hkEVwA.js";
import { u as useSEO } from "./useSEO-CH5nP3sE.js";
import { A as ArrowLeft } from "./arrow-left-XcUDPFHx.js";
import { m as motion } from "./proxy-BCkv1XUp.js";
import { C as CircleCheckBig } from "./circle-check-big-Bx-aQvHR.js";
import { A as AnimatePresence } from "./index-B262YtVN.js";
import { R as RotateCcw } from "./rotate-ccw-98W7iuIO.js";
import { C as ChevronRight } from "./chevron-right-ChRnhOa5.js";
import { T as Trophy } from "./trophy-KrX40R34.js";
import "./useActor-B4S_8tu3.js";
import "./useMutation-CjEiCwST.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode);
function FlashcardView({
  card,
  isFlipped,
  onFlip
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "flashcard-scene w-full max-w-2xl mx-auto",
      style: { height: 340 },
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          className: cn(
            "flashcard-inner w-full h-full cursor-pointer bg-transparent border-0 p-0 text-left",
            isFlipped && "flipped"
          ),
          onClick: onFlip,
          "aria-label": isFlipped ? "Card back - click to flip" : "Card front - click to flip",
          "data-ocid": "flashcard.flip_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flashcard-face w-full h-full glass-dark rounded-3xl p-8 border border-neon-purple/30 shadow-neon-purple flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono-custom text-neon-purple/60 uppercase tracking-widest mb-4", children: "Question — click to reveal answer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl font-bold text-center leading-tight", children: card.front }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-1.5 text-xs text-muted-foreground/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Space" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "or" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "click" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "to flip" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flashcard-face flashcard-back w-full h-full glass-dark rounded-3xl p-8 border border-neon-green/30 shadow-neon-green flex flex-col items-center justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono-custom text-neon-green/60 uppercase tracking-widest mb-4", children: "Answer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-center leading-relaxed whitespace-pre-line max-h-52 overflow-y-auto", children: card.back })
            ] })
          ]
        }
      )
    }
  );
}
function CompletionScreen({
  topicName,
  onRestart
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, type: "spring" },
      className: "text-center py-16",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl mb-4", children: "🎓" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold mb-2", children: "All Cards Mastered!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm mb-6", children: [
          "You've mastered all flashcards in",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-neon-purple font-medium", children: topicName })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              onClick: onRestart,
              className: "flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neon-purple/15 hover:bg-neon-purple/25 border border-neon-purple/30 hover:border-neon-purple/60 text-neon-purple text-sm font-semibold transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 14 }),
                "Review Again"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex items-center gap-2 px-6 py-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground border border-border/50 text-sm font-semibold transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { size: 14 }),
                "Back to Topics"
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Flashcards() {
  const { topicId } = useParams({ from: "/protected/flashcards/$topicId" });
  const topic = topicsData.find((t) => t.id === topicId) ?? topicsData[0];
  useSEO({
    title: `${topic.chapter} Flashcards — ${topic.className} ${topic.subject} NCERT | NCERT Bhaiya`,
    description: `Study ${topic.chapter} with free interactive flashcards on NCERT Bhaiya. ${topic.className} ${topic.subject} NCERT key terms, definitions and concepts for quick CBSE board exam revision. Flip-card spaced repetition learning.`,
    keywords: `${topic.chapter} flashcards, ${topic.className} ${topic.subject} flashcards, NCERT ${topic.chapter} key terms, CBSE ${topic.className} revision cards, ${topic.chapter} key concepts, ${topic.className} ${topic.subject} study cards, NCERT Bhaiya flashcards`,
    canonical: `/flashcards/${topicId}`
  });
  const [queue, setQueue] = reactExports.useState(topic.flashcards.map((c) => c.id));
  const [mastered, setMastered] = reactExports.useState([]);
  const [currentQueueIndex, setCurrentQueueIndex] = reactExports.useState(0);
  const [isFlipped, setIsFlipped] = reactExports.useState(false);
  const [direction, setDirection] = reactExports.useState("right");
  const [isAnimating, setIsAnimating] = reactExports.useState(false);
  const markMastered = useMarkFlashcardMastered();
  const currentCardId = queue[currentQueueIndex];
  const currentCard = topic.flashcards.find((c) => c.id === currentCardId);
  const allMastered = queue.length === 0;
  const navigate = reactExports.useCallback(
    (dir) => {
      if (isAnimating || queue.length === 0) return;
      setDirection(dir === "next" ? "right" : "left");
      setIsFlipped(false);
      setTimeout(() => {
        if (dir === "next") {
          setCurrentQueueIndex((i) => (i + 1) % queue.length);
        } else {
          setCurrentQueueIndex((i) => (i - 1 + queue.length) % queue.length);
        }
      }, 150);
    },
    [isAnimating, queue.length]
  );
  reactExports.useEffect(() => {
    const handler = (e) => {
      if (e.key === " ") {
        e.preventDefault();
        setIsFlipped((f) => !f);
      } else if (e.key === "ArrowRight") navigate("next");
      else if (e.key === "ArrowLeft") navigate("prev");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);
  const handleKnowIt = () => {
    if (!currentCard) return;
    setIsAnimating(true);
    markMastered.mutate(currentCard.id);
    setMastered((m) => [...m, currentCard.id]);
    const newQueue = queue.filter((id) => id !== currentCard.id);
    setQueue(newQueue);
    if (newQueue.length > 0) {
      setCurrentQueueIndex((i) => Math.min(i, newQueue.length - 1));
    }
    setIsFlipped(false);
    setTimeout(() => setIsAnimating(false), 400);
  };
  const handleReviewAgain = () => {
    navigate("next");
  };
  const handleRestart = () => {
    setQueue(topic.flashcards.map((c) => c.id));
    setMastered([]);
    setCurrentQueueIndex(0);
    setIsFlipped(false);
  };
  const progressPercent = topic.flashcards.length > 0 ? mastered.length / topic.flashcards.length * 100 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen dark:bg-mesh-dark bg-mesh-light flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "sticky top-0 z-40 glass-dark border-b border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 py-3 flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          className: "p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 16 })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-1 text-[10px] text-muted-foreground font-mono-custom", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            "Mastered: ",
            mastered.length,
            " / ",
            topic.flashcards.length
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate max-w-[160px]", children: topic.chapter })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            className: "h-full rounded-full bg-gradient-to-r from-neon-green to-neon-blue",
            animate: { width: `${progressPercent}%` },
            transition: { duration: 0.4 }
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-3xl mx-auto w-full", children: allMastered ? /* @__PURE__ */ jsxRuntimeExports.jsx(
      CompletionScreen,
      {
        topicName: topic.chapter,
        onRestart: handleRestart
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-6 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green font-medium", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 11 }),
          "Mastered: ",
          mastered.length
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60", children: "•" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono-custom", children: [
          queue.length,
          " remaining"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: currentCard && /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, x: direction === "right" ? 40 : -40 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: direction === "right" ? -40 : 40 },
          transition: { duration: 0.25 },
          className: "w-full",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            FlashcardView,
            {
              card: currentCard,
              isFlipped,
              onFlip: () => setIsFlipped((f) => !f)
            }
          )
        },
        currentCard.id
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-6 w-full max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "flashcard.prev_button",
            onClick: () => navigate("prev"),
            disabled: queue.length <= 1,
            className: "p-3 rounded-xl glass-dark border border-border/50 text-muted-foreground hover:text-foreground hover:border-border disabled:opacity-30 transition-all",
            "aria-label": "Previous card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { size: 18 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "flashcard.review_button",
              onClick: handleReviewAgain,
              className: "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 text-muted-foreground hover:text-foreground text-sm font-semibold transition-all",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(RotateCcw, { size: 14 }),
                "Review Again"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              type: "button",
              "data-ocid": "flashcard.know_it_button",
              onClick: handleKnowIt,
              className: "flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neon-green/15 hover:bg-neon-green/25 border border-neon-green/30 hover:border-neon-green/60 text-neon-green text-sm font-semibold transition-all hover:shadow-neon-green",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { size: 14 }),
                "Know it ✓"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "data-ocid": "flashcard.next_button",
            onClick: () => navigate("next"),
            disabled: queue.length <= 1,
            className: "p-3 rounded-xl glass-dark border border-border/50 text-muted-foreground hover:text-foreground hover:border-border disabled:opacity-30 transition-all",
            "aria-label": "Next card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 18 })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 mt-4", children: queue.slice(0, Math.min(queue.length, 8)).map((id, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: cn(
            "w-1.5 h-1.5 rounded-full transition-all",
            i === currentQueueIndex % Math.min(queue.length, 8) ? "bg-neon-purple w-4" : "bg-muted"
          )
        },
        id
      )) })
    ] }) })
  ] });
}
export {
  Flashcards as default
};
