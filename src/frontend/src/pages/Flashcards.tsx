import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { topicsData } from "../data/demoData";
import type { Flashcard } from "../data/demoData";
import { useMarkFlashcardMastered } from "../hooks/useQueries";
import { useSEO } from "../hooks/useSEO";

// ─── Flashcard Component ──────────────────────────────────────────────────────

function FlashcardView({
  card,
  isFlipped,
  onFlip,
}: {
  card: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
}) {
  return (
    <div
      className="flashcard-scene w-full max-w-2xl mx-auto"
      style={{ height: 340 }}
    >
      <button
        type="button"
        className={cn(
          "flashcard-inner w-full h-full cursor-pointer bg-transparent border-0 p-0 text-left",
          isFlipped && "flipped",
        )}
        onClick={onFlip}
        aria-label={
          isFlipped ? "Card back - click to flip" : "Card front - click to flip"
        }
        data-ocid="flashcard.flip_button"
      >
        {/* Front */}
        <div className="flashcard-face w-full h-full glass-dark rounded-3xl p-8 border border-neon-purple/30 shadow-neon-purple flex flex-col items-center justify-center">
          <div className="text-[10px] font-mono-custom text-neon-purple/60 uppercase tracking-widest mb-4">
            Question — click to reveal answer
          </div>
          <p className="font-display text-xl font-bold text-center leading-tight">
            {card.front}
          </p>
          <div className="mt-6 flex items-center gap-1.5 text-xs text-muted-foreground/60">
            <span>Space</span>
            <span>or</span>
            <span>click</span>
            <span>to flip</span>
          </div>
        </div>

        {/* Back */}
        <div className="flashcard-face flashcard-back w-full h-full glass-dark rounded-3xl p-8 border border-neon-green/30 shadow-neon-green flex flex-col items-center justify-center">
          <div className="text-[10px] font-mono-custom text-neon-green/60 uppercase tracking-widest mb-4">
            Answer
          </div>
          <p className="font-sans text-sm text-center leading-relaxed whitespace-pre-line max-h-52 overflow-y-auto">
            {card.back}
          </p>
        </div>
      </button>
    </div>
  );
}

// ─── Completion Screen ────────────────────────────────────────────────────────

function CompletionScreen({
  topicName,
  onRestart,
}: { topicName: string; onRestart: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
      className="text-center py-16"
    >
      <div className="text-6xl mb-4">🎓</div>
      <h2 className="font-display text-2xl font-bold mb-2">
        All Cards Mastered!
      </h2>
      <p className="text-muted-foreground text-sm mb-6">
        You've mastered all flashcards in{" "}
        <span className="text-neon-purple font-medium">{topicName}</span>
      </p>
      <div className="flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={onRestart}
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-neon-purple/15 hover:bg-neon-purple/25 border border-neon-purple/30 hover:border-neon-purple/60 text-neon-purple text-sm font-semibold transition-all"
        >
          <RotateCcw size={14} />
          Review Again
        </button>
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground border border-border/50 text-sm font-semibold transition-all"
        >
          <Trophy size={14} />
          Back to Topics
        </Link>
      </div>
    </motion.div>
  );
}

// ─── Flashcards Page ──────────────────────────────────────────────────────────

export default function Flashcards() {
  const { topicId } = useParams({ from: "/flashcards/$topicId" });
  const topic = topicsData.find((t) => t.id === topicId) ?? topicsData[0];

  useSEO({
    title: `${topic.chapter} Flashcards — ${topic.className} ${topic.subject} NCERT | NCERT Bhaiya`,
    description: `Study ${topic.chapter} with free interactive flashcards on NCERT Bhaiya. ${topic.className} ${topic.subject} NCERT key terms, definitions and concepts for quick CBSE board exam revision. Flip-card spaced repetition learning.`,
    keywords: `${topic.chapter} flashcards, ${topic.className} ${topic.subject} flashcards, NCERT ${topic.chapter} key terms, CBSE ${topic.className} revision cards, ${topic.chapter} key concepts, ${topic.className} ${topic.subject} study cards, NCERT Bhaiya flashcards`,
    canonical: `/flashcards/${topicId}`,
  });

  const [queue, setQueue] = useState(topic.flashcards.map((c) => c.id));
  const [mastered, setMastered] = useState<number[]>([]);
  const [currentQueueIndex, setCurrentQueueIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const markMastered = useMarkFlashcardMastered();

  // Get current card
  const currentCardId = queue[currentQueueIndex];
  const currentCard = topic.flashcards.find((c) => c.id === currentCardId);
  const allMastered = queue.length === 0;

  const navigate = useCallback(
    (dir: "prev" | "next") => {
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
    [isAnimating, queue.length],
  );

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
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

  const progressPercent =
    topic.flashcards.length > 0
      ? (mastered.length / topic.flashcards.length) * 100
      : 0;

  return (
    <div className="min-h-screen dark:bg-mesh-dark bg-mesh-light flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 glass-dark border-b border-border/50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
          >
            <ArrowLeft size={16} />
          </Link>

          <div className="flex-1">
            <div className="flex items-center justify-between mb-1 text-[10px] text-muted-foreground font-mono-custom">
              <span>
                Mastered: {mastered.length} / {topic.flashcards.length}
              </span>
              <span className="truncate max-w-[160px]">{topic.chapter}</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-neon-green to-neon-blue"
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.4 }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 max-w-3xl mx-auto w-full">
        {allMastered ? (
          <CompletionScreen
            topicName={topic.chapter}
            onRestart={handleRestart}
          />
        ) : (
          <>
            {/* Progress stats */}
            <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neon-green/10 border border-neon-green/20 text-neon-green font-medium">
                <CheckCircle size={11} />
                Mastered: {mastered.length}
              </span>
              <span className="text-muted-foreground/60">•</span>
              <span className="font-mono-custom">{queue.length} remaining</span>
            </div>

            {/* Card */}
            <AnimatePresence mode="wait">
              {currentCard && (
                <motion.div
                  key={currentCard.id}
                  initial={{ opacity: 0, x: direction === "right" ? 40 : -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === "right" ? -40 : 40 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <FlashcardView
                    card={currentCard}
                    isFlipped={isFlipped}
                    onFlip={() => setIsFlipped((f) => !f)}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center gap-3 mt-6 w-full max-w-2xl">
              <button
                type="button"
                data-ocid="flashcard.prev_button"
                onClick={() => navigate("prev")}
                disabled={queue.length <= 1}
                className="p-3 rounded-xl glass-dark border border-border/50 text-muted-foreground hover:text-foreground hover:border-border disabled:opacity-30 transition-all"
                aria-label="Previous card"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex flex-1 gap-2">
                <button
                  type="button"
                  data-ocid="flashcard.review_button"
                  onClick={handleReviewAgain}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 border border-border/50 text-muted-foreground hover:text-foreground text-sm font-semibold transition-all"
                >
                  <RotateCcw size={14} />
                  Review Again
                </button>
                <button
                  type="button"
                  data-ocid="flashcard.know_it_button"
                  onClick={handleKnowIt}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-neon-green/15 hover:bg-neon-green/25 border border-neon-green/30 hover:border-neon-green/60 text-neon-green text-sm font-semibold transition-all hover:shadow-neon-green"
                >
                  <CheckCircle size={14} />
                  Know it ✓
                </button>
              </div>

              <button
                type="button"
                data-ocid="flashcard.next_button"
                onClick={() => navigate("next")}
                disabled={queue.length <= 1}
                className="p-3 rounded-xl glass-dark border border-border/50 text-muted-foreground hover:text-foreground hover:border-border disabled:opacity-30 transition-all"
                aria-label="Next card"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Card position indicator */}
            <div className="flex gap-1.5 mt-4">
              {queue.slice(0, Math.min(queue.length, 8)).map((id, i) => (
                <span
                  key={id}
                  className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all",
                    i === currentQueueIndex % Math.min(queue.length, 8)
                      ? "bg-neon-purple w-4"
                      : "bg-muted",
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
