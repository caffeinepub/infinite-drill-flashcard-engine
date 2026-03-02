import { cn } from "@/lib/utils";
import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle,
  Flame,
  Home,
  RotateCcw,
  Share2,
  Star,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { AdZone } from "../components/AdZone";
import { getLevel, getLevelProgress, topicsData } from "../data/demoData";
import type { Question } from "../data/demoData";
import { useSubmitQuiz } from "../hooks/useQueries";

// ─── Timer Ring ────────────────────────────────────────────────────────────────

function TimerRing({ timeLeft, total }: { timeLeft: number; total: number }) {
  const radius = 26;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / total;
  const strokeDashoffset = circumference * (1 - progress);
  const isWarning = timeLeft <= 10;

  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <svg
        width="64"
        height="64"
        className="absolute inset-0 -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-muted/30"
        />
        <circle
          cx="32"
          cy="32"
          r={radius}
          fill="none"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className={cn(
            "timer-ring-circle",
            isWarning ? "stroke-neon-red" : "stroke-neon-purple",
          )}
          style={{
            stroke: isWarning
              ? "oklch(var(--neon-red))"
              : "oklch(var(--neon-purple))",
          }}
        />
      </svg>
      <span
        className={cn(
          "text-sm font-display font-bold tabular-nums z-10",
          isWarning ? "text-neon-red" : "text-foreground",
          isWarning && "animate-pulse",
        )}
      >
        {timeLeft}
      </span>
    </div>
  );
}

// ─── XP Popup ─────────────────────────────────────────────────────────────────

function XPPopup({ xp, show }: { xp: number; show: boolean }) {
  if (!show) return null;
  return (
    <motion.div
      initial={{ opacity: 1, y: 0, scale: 1 }}
      animate={{ opacity: 0, y: -60, scale: 1.3 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="fixed top-20 right-8 z-50 pointer-events-none"
    >
      <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neon-purple/20 border border-neon-purple/50 text-neon-purple font-display font-bold text-sm shadow-neon-purple">
        <Star size={12} fill="currentColor" />+{xp} XP
      </div>
    </motion.div>
  );
}

// ─── Quiz Page ─────────────────────────────────────────────────────────────────

export default function Quiz() {
  const { topicId } = useParams({ from: "/quiz/$topicId" });
  const topic = topicsData.find((t) => t.id === topicId) ?? topicsData[0];
  const questions = topic.questions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [xp, setXP] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showXPPopup, setShowXPPopup] = useState(false);
  const [xpEarned, setXPEarned] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const submitQuiz = useSubmitQuiz();
  const currentQuestion: Question = questions[currentIndex];

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  const handleSubmit = useCallback(() => {
    if (submitted) return;
    clearTimer();
    setSubmitted(true);

    let earned = 2; // attempting XP
    if (selectedOption === currentQuestion.correctIndex) {
      earned = 10;
      setCorrectCount((c) => c + 1);
      setStreak((s) => s + 1);
      toast.success("🎉 Correct!", { duration: 1500 });
    } else {
      setStreak(0);
    }
    setXP((x) => x + earned);
    setXPEarned(earned);
    setShowXPPopup(true);
    setTimeout(() => setShowXPPopup(false), 1600);
  }, [submitted, selectedOption, currentQuestion, clearTimer]);

  // Timer
  // biome-ignore lint/correctness/useExhaustiveDependencies: currentIndex intentionally triggers timer reset
  useEffect(() => {
    if (submitted || quizComplete) return;
    setTimeLeft(30);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          handleSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
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

  const scorePercent = Math.round((correctCount / questions.length) * 100);
  const level = getLevel(xp);
  const levelProgress = getLevelProgress(xp);

  // ─── Quiz Complete Screen ─────────────────────────────────────────────────

  if (quizComplete) {
    const badgeEarned =
      scorePercent >= 80
        ? "🏆 High Scorer"
        : scorePercent >= 60
          ? "✅ Passed"
          : "📚 Keep Studying";

    return (
      <div className="min-h-screen dark:bg-mesh-dark bg-mesh-light flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="w-full max-w-lg"
        >
          <div className="glass-dark rounded-3xl p-8 border border-border/50 shadow-card-glow">
            {/* Score header */}
            <div className="text-center mb-6">
              <div className="text-6xl mb-2">
                {scorePercent >= 80 ? "🎉" : scorePercent >= 60 ? "👍" : "📖"}
              </div>
              <h2 className="font-display text-2xl font-bold mb-1">
                Quiz Complete!
              </h2>
              <p className="text-muted-foreground text-sm">
                {topic.chapter} · {topic.microTopic}
              </p>
            </div>

            {/* Score ring */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-28 h-28">
                <svg
                  viewBox="0 0 120 120"
                  className="w-full h-full -rotate-90"
                  aria-hidden="true"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="oklch(var(--muted))"
                    strokeWidth="8"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={314}
                    strokeDashoffset={314 * (1 - scorePercent / 100)}
                    style={{
                      stroke:
                        scorePercent >= 80
                          ? "oklch(var(--neon-green))"
                          : scorePercent >= 60
                            ? "oklch(var(--neon-amber))"
                            : "oklch(var(--neon-red))",
                      transition: "stroke-dashoffset 1s ease",
                    }}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display text-2xl font-bold">
                    {scorePercent}%
                  </span>
                  <span className="text-[10px] text-muted-foreground">
                    Score
                  </span>
                </div>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center p-3 rounded-xl bg-neon-purple/10 border border-neon-purple/20">
                <div className="font-display text-xl font-bold text-neon-purple">
                  {xp}
                </div>
                <div className="text-[10px] text-muted-foreground">
                  XP Earned
                </div>
              </div>
              <div className="text-center p-3 rounded-xl bg-neon-green/10 border border-neon-green/20">
                <div className="font-display text-xl font-bold text-neon-green">
                  {correctCount}/{questions.length}
                </div>
                <div className="text-[10px] text-muted-foreground">Correct</div>
              </div>
              <div className="text-center p-3 rounded-xl bg-neon-amber/10 border border-neon-amber/20">
                <div className="font-display text-xl font-bold text-neon-amber">
                  {streak} <span className="fire-anim inline-block">🔥</span>
                </div>
                <div className="text-[10px] text-muted-foreground">
                  Best Streak
                </div>
              </div>
            </div>

            {/* Level progress */}
            <div className="mb-4 p-3 rounded-xl bg-muted/30 border border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium">{level}</span>
                <span className="text-xs text-muted-foreground">
                  {xp} / {levelProgress.next} XP
                </span>
              </div>
              <div className="h-2 rounded-full bg-muted overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${levelProgress.progress}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="h-full rounded-full progress-shimmer"
                />
              </div>
              <div className="text-[10px] text-muted-foreground mt-1">
                {badgeEarned}
              </div>
            </div>

            {/* Ad zone */}
            <div className="mb-4">
              <AdZone variant="interstitial" />
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleRestart}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary/15 hover:bg-primary/25 text-primary border border-primary/30 hover:border-primary/60 text-sm font-semibold transition-all"
              >
                <RotateCcw size={14} />
                Play Again
              </button>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `I scored ${scorePercent}% on ${topic.chapter}! 🎯`,
                  );
                  toast.success("Score copied to clipboard!");
                }}
                className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border/50 transition-all"
              >
                <Share2 size={16} />
              </button>
              <Link
                to="/"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-muted/30 hover:bg-muted/50 text-muted-foreground hover:text-foreground border border-border/50 text-sm font-semibold transition-all"
              >
                <Home size={14} />
                Topics
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // ─── Quiz Interface ──────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen dark:bg-mesh-dark bg-mesh-light flex flex-col">
      <XPPopup xp={xpEarned} show={showXPPopup} />

      {/* Header */}
      <header className="sticky top-0 z-40 glass-dark border-b border-border/50">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <Link
            to="/"
            data-ocid="quiz.back_button"
            className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
          >
            <ArrowLeft size={16} />
          </Link>

          {/* Progress bar */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1 text-[10px] text-muted-foreground">
              <span className="font-mono-custom">
                {currentIndex + 1} / {questions.length}
              </span>
              <span className="truncate max-w-[140px]">{topic.chapter}</span>
            </div>
            <div className="h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-neon-purple to-neon-blue"
                initial={{ width: "0%" }}
                animate={{
                  width: `${((currentIndex + 1) / questions.length) * 100}%`,
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* XP & Streak */}
          <div className="flex items-center gap-3 text-xs shrink-0">
            <div className="flex items-center gap-1 text-neon-purple font-display font-bold">
              <Star size={12} fill="currentColor" />
              {xp}
            </div>
            <div className="flex items-center gap-0.5 text-neon-amber font-display font-bold">
              <span className="fire-anim">{streak > 0 ? "🔥" : "💤"}</span>
              <span>{streak}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Question */}
      <div className="flex-1 flex flex-col items-center justify-start px-4 py-8 max-w-3xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Question card */}
            <div className="glass-dark rounded-2xl p-6 border border-border/50 shadow-card-glow mb-4">
              <div className="flex items-start gap-4">
                <TimerRing timeLeft={timeLeft} total={30} />
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-mono-custom text-neon-purple/70 uppercase tracking-widest mb-2">
                    Question {currentIndex + 1}
                  </div>
                  <p className="font-display text-lg font-semibold leading-snug">
                    {currentQuestion.question}
                  </p>
                </div>
              </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 gap-3 mb-4">
              {currentQuestion.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQuestion.correctIndex;
                const isWrong = submitted && isSelected && !isCorrect;
                const showCorrect = submitted && isCorrect;

                return (
                  <motion.button
                    key={option}
                    data-ocid={`quiz.option_button.${idx + 1}`}
                    onClick={() => !submitted && setSelectedOption(idx)}
                    whileHover={!submitted ? { scale: 1.01 } : {}}
                    whileTap={!submitted ? { scale: 0.99 } : {}}
                    className={cn(
                      "relative w-full text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all duration-200",
                      "flex items-center gap-3",
                      // default
                      !submitted &&
                        !isSelected &&
                        "glass-dark border-border/50 hover:border-primary/40 hover:bg-primary/5 hover:shadow-neon-purple",
                      // selected (not submitted)
                      !submitted &&
                        isSelected &&
                        "bg-neon-purple/15 border-neon-purple/60 text-neon-purple shadow-neon-purple",
                      // submitted states
                      showCorrect &&
                        "bg-neon-green/15 border-neon-green/60 text-neon-green shadow-neon-green",
                      isWrong &&
                        "bg-neon-red/15 border-neon-red/60 text-neon-red shadow-neon-red",
                      submitted &&
                        !isSelected &&
                        !isCorrect &&
                        "glass-dark border-border/30 opacity-50",
                    )}
                  >
                    {/* Option letter */}
                    <span
                      className={cn(
                        "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-display font-bold shrink-0",
                        "border",
                        !submitted &&
                          !isSelected &&
                          "border-border/50 text-muted-foreground",
                        !submitted &&
                          isSelected &&
                          "border-neon-purple/60 text-neon-purple bg-neon-purple/20",
                        showCorrect &&
                          "border-neon-green/60 text-neon-green bg-neon-green/20",
                        isWrong &&
                          "border-neon-red/60 text-neon-red bg-neon-red/20",
                        submitted &&
                          !isSelected &&
                          !isCorrect &&
                          "border-border/30 text-muted-foreground/50",
                      )}
                    >
                      {["A", "B", "C", "D"][idx]}
                    </span>
                    <span className="flex-1">{option}</span>
                    {showCorrect && (
                      <CheckCircle
                        size={16}
                        className="text-neon-green shrink-0"
                      />
                    )}
                    {isWrong && (
                      <XCircle size={16} className="text-neon-red shrink-0" />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Submit / Explanation */}
            {!submitted ? (
              <button
                type="button"
                data-ocid="quiz.submit_button"
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className={cn(
                  "w-full py-3 rounded-xl font-display font-bold text-sm transition-all",
                  selectedOption !== null
                    ? "bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-neon-purple hover:opacity-90"
                    : "bg-muted/30 text-muted-foreground border border-border/50 cursor-not-allowed",
                )}
              >
                Submit Answer
              </button>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Explanation */}
                <div className="glass-dark rounded-xl p-4 border border-border/50 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    {selectedOption === currentQuestion.correctIndex ? (
                      <>
                        <CheckCircle size={14} className="text-neon-green" />
                        <span className="text-xs font-display font-bold text-neon-green">
                          Correct! +10 XP
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle size={14} className="text-neon-red" />
                        <span className="text-xs font-display font-bold text-neon-red">
                          Wrong answer +2 XP
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {currentQuestion.explanation}
                  </p>
                </div>

                {/* Ad zone between questions */}
                <div className="mb-3">
                  <AdZone variant="leaderboard" />
                </div>

                <button
                  type="button"
                  data-ocid="quiz.next_button"
                  onClick={handleNext}
                  className="w-full py-3 rounded-xl font-display font-bold text-sm bg-gradient-to-r from-neon-purple to-neon-blue text-white shadow-neon-purple hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  {currentIndex + 1 >= questions.length ? (
                    <>
                      <Flame size={14} />
                      See Results
                    </>
                  ) : (
                    <>
                      Next Question
                      <ArrowLeft size={14} className="rotate-180" />
                    </>
                  )}
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
